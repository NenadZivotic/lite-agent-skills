# lite-agent-skills

Free lite versions of paid agent skills. Each subdirectory is a self-contained skill (`SKILL.md` + script + tests). Node 18+, zero dependencies.

## Install one

```bash
npx skills add NenadZivotic/lite-agent-skills --skill <name>
```

## Skills

| Skill                            | What it does                                                     | Full version                                                                                                                                         |
| -------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `seo-quick-audit-lite`           | Offline on-page SEO audit of a local HTML file                   | [Full version on SkillHQ](https://skillhq.dev/skills/sone94/seo-quick-audit) |
| `github-repo-due-diligence-lite` | GitHub repo health: stars, last push, license, archived          | [Full version on SkillHQ](https://skillhq.dev/skills/sone94/github-repo-due-diligence) |
| `npm-package-health-lite`        | npm package health: publish age, deprecation, license            | [Full version on SkillHQ](https://skillhq.dev/skills/sone94/npm-package-health) |
| `meta-prompt-architect-lite`     | Task description → prompt template scaffold                      | [Full version on SkillHQ](https://skillhq.dev/skills/sone94/meta-prompt-architect) |
| `cold-email-sequence-lite`       | ICP brief → 2-touch outreach skeleton                            | [Full version on SkillHQ](https://skillhq.dev/skills/sone94/cold-email-sequence) |
| `jwt-inspector-lite`             | Decode a JWT locally, masked claims + expiry status              | [Full version on SkillHQ](https://skillhq.dev/skills/sone94/jwt-inspector) |
| `docker-security-lint-lite`      | Lint Dockerfiles for top security mistakes                       | [Full version on SkillHQ](https://skillhq.dev/skills/sone94/docker-security-lint) |
| `har-to-api-map-lite`            | .har capture → API endpoint inventory                            | [Full version on SkillHQ](https://skillhq.dev/skills/sone94/har-to-api-map) |
| `env-config-audit-lite`          | .env vs .env.example key parity, values never printed            | [Full version on SkillHQ](https://skillhq.dev/skills/sone94/env-config-audit) |
| `git-history-leak-check-lite`    | Scan a diff/patch for committed secrets                          | [Full version on SkillHQ](https://skillhq.dev/skills/sone94/git-history-leak-check) |
| `http-header-audit-lite`         | Audit pasted headers for missing security headers                | [Full version on SkillHQ](https://skillhq.dev/skills/sone94/http-header-audit) |
| `cors-misconfig-check-lite`      | Spot dangerous CORS header combos offline                        | [Full version on SkillHQ](https://skillhq.dev/skills/sone94/cors-misconfig-check) |
| `broken-link-crawl-lite`         | Classify + flag links in a saved HTML file                       | [Full version on SkillHQ](https://skillhq.dev/skills/sone94/broken-link-crawl) |
| `ci-cd-security-audit-lite`      | Lint a GitHub Actions workflow for supply-chain risks            | [Full version on SkillHQ](https://skillhq.dev/skills/sone94/ci-cd-security-audit) |
| `video-repurpose-engine-lite`    | Transcript → ranked short-clip timestamps                        | [Full version on SkillHQ](https://skillhq.dev/skills/sone94/video-repurpose-engine) |
| `geo-audit-lite`                 | AI-search readiness audit of saved HTML/robots/llms.txt          | [Full version on SkillHQ](https://skillhq.dev/skills/sone94/geo-audit) |
| `contract-triage-lite`           | Offline contract risk flags: IP, liability, non-compete, payment | [Full version on SkillHQ](https://skillhq.dev/skills/sone94/contract-triage) |

Also free: [secret-leak-scan-lite](https://github.com/NenadZivotic/secret-leak-scan-lite) — scan a directory for leaked credentials.

## Test

```bash
cd <skill> && node --test test/*.test.js
```
