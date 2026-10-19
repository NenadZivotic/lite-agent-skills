# lite-agent-skills

Free lite versions of paid agent skills. Each subdirectory is a self-contained skill (`SKILL.md` + script + tests). Node 18+, zero dependencies.

## Install one

```bash
npx skills add NenadZivotic/lite-agent-skills --skill <name>
```

## Skills

| Skill                            | What it does                                            | Full version                                                                                                                          |
| -------------------------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `seo-quick-audit-lite`           | Offline on-page SEO audit of a local HTML file          | [SkillHQ](https://skillhq.dev/skills/sone94/seo-quick-audit) · [Agensi](https://agensi.io/skills/seo-quick-audit)                     |
| `github-repo-due-diligence-lite` | GitHub repo health: stars, last push, license, archived | [SkillHQ](https://skillhq.dev/skills/sone94/github-repo-due-diligence) · [Agensi](https://agensi.io/skills/github-repo-due-diligence) |
| `npm-package-health-lite`        | npm package health: publish age, deprecation, license   | [SkillHQ](https://skillhq.dev/skills/sone94/npm-package-health) · [Agensi](https://agensi.io/skills/npm-package-health)               |
| `meta-prompt-architect-lite`     | Task description → prompt template scaffold             | [SkillHQ](https://skillhq.dev/skills/sone94/meta-prompt-architect) · [Agensi](https://agensi.io/skills/meta-prompt-architect)         |
| `cold-email-sequence-lite`       | ICP brief → 2-touch outreach skeleton                   | [SkillHQ](https://skillhq.dev/skills/sone94/cold-email-sequence) · [Agensi](https://agensi.io/skills/cold-email-sequence)             |
| `jwt-inspector-lite`             | Decode a JWT locally, masked claims + expiry status     | [Agensi](https://agensi.io/skills/jwt-inspector)                                                                                      |
| `docker-security-lint-lite`      | Lint Dockerfiles for top security mistakes              | [Agensi](https://agensi.io/skills/docker-security-lint)                                                                               |
| `har-to-api-map-lite`            | .har capture → API endpoint inventory                   | [Agensi](https://agensi.io/skills/har-to-api-map)                                                                                     |
| `env-config-audit-lite`          | .env vs .env.example key parity, values never printed   | [Agensi](https://agensi.io/skills/env-config-audit)                                                                                   |
| `git-history-leak-check-lite`    | Scan a diff/patch for committed secrets                 | [Agensi](https://agensi.io/skills/git-history-leak-check)                                                                             |
| `http-header-audit-lite`         | Audit pasted headers for missing security headers       | [Agensi](https://agensi.io/skills/http-header-audit)                                                                                  |
| `cors-misconfig-check-lite`      | Spot dangerous CORS header combos offline               | [Agensi](https://agensi.io/skills/cors-misconfig-check)                                                                               |
| `broken-link-crawl-lite`         | Classify + flag links in a saved HTML file              | [Agensi](https://agensi.io/skills/broken-link-crawl)                                                                                  |
| `ci-cd-security-audit-lite`      | Lint a GitHub Actions workflow for supply-chain risks   | [Agensi](https://agensi.io/skills/ci-cd-security-audit-github-actions)                                                                |
| `video-repurpose-engine-lite`    | Transcript → ranked short-clip timestamps               | [Agensi](https://agensi.io/skills/video-repurpose-engine)                                                                             |
| `geo-audit-lite`                 | AI-search readiness audit of saved HTML/robots/llms.txt | [Agensi](https://agensi.io/skills/geo-audit)                                                                                          |

Also free: [secret-leak-scan-lite](https://github.com/NenadZivotic/secret-leak-scan-lite) — scan a directory for leaked credentials.

## Test

```bash
cd <skill> && node --test test/*.test.js
```
