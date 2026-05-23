# Next actions

> Last updated: 2026-05-23 16:45 +0530 · Doc version **0.3.0**

1. **Connect GitHub for auto-deploy** — In [Vercel project settings](https://vercel.com/sahilleo-5492s-projects/website-builder/settings/git), connect `goyal-s/website-builder`. CLI link failed because the Vercel account (`sahilleo-5492s-projects`) may not have GitHub access to the `goyal-s` org repo.

2. **Verify the live site** — Open https://website-builder-wheat-mu.vercel.app and confirm all sections render.

3. **Optional: custom domain** — Add a domain in Vercel project settings if you want something other than `*.vercel.app`.

4. **Future deploys** — After GitHub is connected, every push to `main` redeploys automatically. Until then, run `npx vercel --prod --yes --scope sahilleo-5492s-projects` from this folder.
