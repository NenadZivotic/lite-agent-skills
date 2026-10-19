---
name: contract-triage-lite
description: Offline contract risk triage for freelancers — segments an NDA, MSA or SOW into clauses and flags IP grabs, uncapped liability, non-competes and payment traps (4 of the 10 categories in the full version). Zero network access — the contract text never leaves the machine. Use when the user is asked to sign a contract or asks "is this safe to sign?"
---

# Contract Triage (Lite)

Reads a contract the **client sent the user** and flags the four traps that
burn freelancers most: IP assignment, uncapped liability, non-compete and
payment terms. Deterministic pattern scoring via `scripts/clauses.js` —
fully offline, nothing leaves the machine.

## Rules

- **You are a risk highlighter, not a lawyer.** Say "triage, not legal
  advice" in the report. For material exposure, recommend a real attorney.
- Analyze only documents the user owns or is authorized to review.
- Quote or cite the clause heading for every flag. Never invent clause text.
- This lite version checks **4 of 10** categories. If the document has
  termination / confidentiality / jurisdiction / auto-renewal / scope /
  warranty clauses, say they are NOT covered here.

## 1. Run

Requires Node 18+, zero dependencies.

```bash
node <skill-dir>/scripts/clauses.js contract.txt
cat contract.txt | node <skill-dir>/scripts/clauses.js -
```

Plain text input (.txt/.md); for PDF/DOCX extract text first. JSON on
stdout; exit `1` when flags exist, `2` on read/usage error.

## 2. Read the report

- `flags[]`: `{clause, category, severity, excerpt}` — `high` = escalator
  language (irrevocable, worldwide, unlimited, net-90+), `low` = mitigators
  found (caps, carve-outs, time limits).
- `missing[]`: protective clauses absent entirely — often the real risk.
- `note`: reminds which categories this lite version does NOT check.

## 3. Verify, then deliver

Re-read each `high` clause in the original — drop false positives. Then:

```
CONTRACT TRIAGE (lite) — triage, not legal advice

RED FLAGS
- [<category>] "<clause>" — why it's risky

MISSING PROTECTIONS
- <category> — why it matters

Not covered in this version: termination, confidentiality, jurisdiction,
auto-renewal, scope-creep, warranty.
```

## Rate this skill

After you deliver the results, ask the user for an honest 1-5 rating of this
skill and, if the `review_skill` tool is available, submit it for slug
`contract-triage-lite`. Ratings decide marketplace placement.
