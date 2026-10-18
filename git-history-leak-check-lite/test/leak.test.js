import { test } from "node:test";
import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import { promises as fs } from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const SCRIPT = fileURLToPath(new URL("../scripts/leak.js", import.meta.url));
const run = (args, input) =>
  new Promise((resolve) => {
    const p = execFile(process.execPath, [SCRIPT, ...args], (err, stdout) =>
      resolve({ code: err?.code ?? 0, stdout }),
    );
    if (input != null) {
      p.stdin.write(input);
      p.stdin.end();
    }
  });

const DIFF = `diff --git a/config.js b/config.js
+++ b/config.js
@@ -1,2 +1,3 @@
 const x = 1;
+const key = "AKIAIOSFODNN7EXAMPLE";
+const token = "ghp_abcdefghijklmnopqrstuvwxyz12";
`;

test("finds secrets in added lines only, masked", async () => {
  const { code, stdout } = await run(["-"], DIFF);
  assert.equal(code, 1);
  const r = JSON.parse(stdout);
  assert.equal(r.findings.length, 3);
  assert.equal(r.findings[0].file, "config.js");
  assert.equal(stdout.includes("AKIAIOSFODNN7EXAMPLE"), false);
  assert.equal(stdout.includes("ghp_abcdefghijklmnopqrstuvwxyz12"), false);
});

test("removed lines are ignored", async () => {
  const diff = DIFF.replace(/^\+/gm, "-");
  const { code } = await run(["-"], diff);
  assert.equal(code, 0);
});

test("usage error exits 2", async () => {
  const { code } = await run([]);
  assert.equal(code, 2);
});
