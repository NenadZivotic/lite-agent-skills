# github-repo-due-diligence-lite

Quick health check on a public GitHub repo before you depend on it — stars, days since last push, license, archived flag, health heuristic. One unauthenticated API call, zero deps, Node 18+.

## Install

```bash
npx skills add NenadZivotic/lite-agent-skills --skill github-repo-due-diligence-lite
```

## Run

```bash
node scripts/dd.mjs owner/repo
```

## Full version

The paid version adds forks, open issues, default branch, and language:

- SkillHQ: https://skillhq.dev/skills/sone94/github-repo-due-diligence
- Agensi: https://agensi.io/skills/github-repo-due-diligence
