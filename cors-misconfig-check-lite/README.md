Analyze pasted CORS headers for dangerous combos — reflected origin + credentials, wildcard misuse, null origin. Offline, zero deps.

`curl -sI -H "Origin: https://x" <url> | node scripts/cors.js -`

Free lite version of `cors-misconfig-check` (adds live origin probing + preflight tests). See SKILL.md for agent workflow.
