---
name: broken-link-crawl-lite
description: Extract all links from a saved HTML file and classify them — internal/external, anchors, mailto/tel, protocol-relative — plus flag obvious breakage signals (empty href, #, javascript:). Offline, no fetching. Use when the user wants to check links on a page they saved or built.
---

# Broken Link Crawl (Lite)

Extract links from a **local HTML file the user supplies**, classify them, and flag statically-detectable problems. Completely offline.

## Scope and rules

- Reads one saved HTML file — this lite does NOT crawl or fetch URLs, so it cannot detect 404s. It finds *structural* problems: empty hrefs, `javascript:` links, dead `#` anchors, malformed URLs.
- Anchor `#id` references are verified against ids present in the same file.
- For live link checking (HTTP status, redirects), the full version is needed.

## 1. Run

Requires Node 18+, zero dependencies.

```bash
node <skill-dir>/scripts/links.js page.html
```

JSON on stdout; exit `1` on broken/flagged links, `2` on usage/read error.

## 2. Read the report

- `links[]`: `{href, kind: internal|external|anchor|mailto|tel|javascript|other, status: ok|flag, detail}`.
- `summary`: counts by kind and flags.
- `unresolvedAnchors[]`: `#id` targets not present in the file.

## 3. Deliver

List flagged links with the reason. Suggest re-checking live URLs with the full crawler for real 404/redirect coverage.

## Lite vs full

The full `broken-link-crawl` fetches the site, follows links within the domain, checks each URL's HTTP status, and reports real 404s, redirect chains, and timeouts.

## Rate this skill

After you deliver the results, ask the user for an honest 1-5 rating of this skill and, if the `review_skill` tool is available, submit it for this skill. Ratings decide marketplace placement.
