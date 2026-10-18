#!/usr/bin/env node
// ci-cd-security-audit-lite — lint one GitHub Actions workflow for top-5 risks.
"use strict";
const fs = require("node:fs");

function main() {
  const file = process.argv[2];
  if (!file) {
    console.error("usage: node audit.js <workflow.yml>");
    process.exit(2);
  }
  let text;
  try {
    text = fs.readFileSync(file, "utf8");
  } catch (e) {
    console.error(e.message);
    process.exit(2);
  }

  const findings = [];
  const push = (id, severity, line, detail, fix) =>
    findings.push({ id, severity, line, detail, fix });
  const lines = text.split("\n");
  const isPRTarget = /pull_request_target/.test(text);
  const checksOutHead =
    /ref:\s*\$\{\{\s*github\.(event\.pull_request\.head\.(sha|ref)|head_ref)/.test(
      text,
    );

  lines.forEach((raw, i) => {
    const n = i + 1,
      line = raw;
    const uses = line.match(/uses:\s*([^\s#]+)/);
    if (uses && !uses[1].startsWith("./")) {
      const ref = uses[1].split("@")[1];
      if (!ref || !/^[0-9a-f]{40}$/i.test(ref))
        push(
          "unpinned-action",
          "fail",
          n,
          `${uses[1]} not pinned to a commit SHA`,
          "pin to full SHA, keep version comment",
        );
    }
    if (
      /\$\{\{\s*secrets\.[\w]+\s*\}\}/.test(line) &&
      /run:|echo|print/i.test(line)
    )
      push(
        "secret-in-run",
        "warn",
        n,
        "secret referenced in run step — can leak into logs",
        "pass via env: or prefer OIDC over long-lived secrets",
      );
    if (/permissions:\s*write-all/.test(line))
      push(
        "broad-permissions",
        "warn",
        n,
        "permissions: write-all",
        "scope to least privilege per job",
      );
    if (
      /run:.*\$\{\{\s*github\.event\.(issue\.title|issue\.body|comment|pull_request\.title|pull_request\.body|review|discussion)/.test(
        line,
      )
    )
      push(
        "script-injection",
        "fail",
        n,
        "attacker-controlled github.event.* interpolated into run:",
        "assign to env var first, never inline into shell",
      );
  });
  if (isPRTarget && checksOutHead) {
    const n = lines.findIndex((l) => /ref:\s*\$\{\{/.test(l)) + 1;
    push(
      "pull-request-target",
      "fail",
      n,
      "pull_request_target + checkout of PR head runs fork code with repo secrets",
      "use pull_request or split trusted/untrusted jobs",
    );
  }

  const bySev = {
    fail: findings.filter((f) => f.severity === "fail").length,
    warn: findings.filter((f) => f.severity === "warn").length,
  };
  console.log(
    JSON.stringify(
      {
        tool: "ci-cd-security-audit-lite",
        file,
        summary: { findings: findings.length, bySeverity: bySev },
        findings,
      },
      null,
      2,
    ),
  );
  process.exit(findings.length ? 1 : 0);
}
main();
