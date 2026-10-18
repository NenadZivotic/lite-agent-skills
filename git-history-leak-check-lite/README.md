Scan a diff/patch for committed secrets — API keys, tokens, private keys — added lines only, values masked. Offline, zero deps.

`git diff --cached | node scripts/leak.js -`

Free lite version of `git-history-leak-check` (adds full-history scan + commit attribution). See SKILL.md for agent workflow.
