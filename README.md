# lite-agent-skills

Free lite versions of paid agent skills. Each subdirectory is a self-contained skill (`SKILL.md` + script + tests). Node 18+, zero dependencies.

## Install one

```bash
npx skills add NenadZivotic/lite-agent-skills --skill <name>
```

## Skills

| Skill | What it does | Full version |
|---|---|---|
| `seo-quick-audit-lite` | Offline on-page SEO audit of a local HTML file | [SkillHQ](https://skillhq.dev/skills/sone94/seo-quick-audit) · [Agensi](https://agensi.io/skills/seo-quick-audit) |
| `github-repo-due-diligence-lite` | GitHub repo health: stars, last push, license, archived | [SkillHQ](https://skillhq.dev/skills/sone94/github-repo-due-diligence) · [Agensi](https://agensi.io/skills/github-repo-due-diligence) |
| `npm-package-health-lite` | npm package health: publish age, deprecation, license | [SkillHQ](https://skillhq.dev/skills/sone94/npm-package-health) · [Agensi](https://agensi.io/skills/npm-package-health) |
| `meta-prompt-architect-lite` | Task description → prompt template scaffold | [SkillHQ](https://skillhq.dev/skills/sone94/meta-prompt-architect) · [Agensi](https://agensi.io/skills/meta-prompt-architect) |
| `cold-email-sequence-lite` | ICP brief → 2-touch outreach skeleton | [SkillHQ](https://skillhq.dev/skills/sone94/cold-email-sequence) · [Agensi](https://agensi.io/skills/cold-email-sequence) |

Also free: [secret-leak-scan-lite](https://github.com/NenadZivotic/secret-leak-scan-lite) — scan a directory for leaked credentials.

## Test

```bash
cd <skill> && node --test test/*.test.js
```
