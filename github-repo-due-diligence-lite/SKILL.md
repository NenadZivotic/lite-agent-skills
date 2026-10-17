---
name: github-repo-due-diligence-lite
description: Quick health check on a public GitHub repo before depending on it — stars, days since last push, license, archived flag, and a health heuristic. Single unauthenticated API call. Use when the user asks whether a GitHub repo is maintained, trustworthy, or safe to adopt.
---

# GitHub Repo Due Diligence (Lite)

## Network access (declared)

One GET to `api.github.com/repos/<owner>/<repo>` — public, unauthenticated (60 req/hr shared limit). No other hosts. No data is sent; the only request is a read of public repo metadata.

## Boundaries

- Metadata only — no repo cloning, no code access.
- "Stale"/"quiet" is a heuristic on `pushed_at`; private activity is invisible.
- Unauthenticated rate limit is low — do not loop over many repos; for batch checks suggest the full version or a token.

## 1. Run

Requires Node 18+, zero dependencies.

```bash
node <skill-dir>/scripts/dd.mjs owner/repo
node <skill-dir>/scripts/dd.mjs https://github.com/owner/repo
```

JSON on stdout; exit `1` on fetch failure, `2` on bad argument.

## 2. Read the report

- `stars`, `lastPushDaysAgo`, `license` (SPDX id or null), `archived`, `health`.
- Flag: `archived: true`, `lastPushDaysAgo > 365`, `license: null`, very low `stars` for a claimed-popular project.

## 3. Report

```
<owner>/<repo>: <health>
stars X · last push Y days ago · license <spdx|none> · archived <yes/no>
<one-line recommendation: adopt / pin+monitor / avoid>
```

## Lite vs full

The full `github-repo-due-diligence` adds forks, open-issue count, default branch, and primary language, with the same single-request budget.
