# Deployment

This covers both the "how to deploy a change" doc (Section 3 of the SEO/docs request) and the fuller production/post-deploy checklists (Section 9). Keeping both in one file avoids two near-duplicate documents drifting apart.

## Hosting

- **Platform**: Vercel
- **Project**: `xtra-sharp-site-v2`
- **Domain**: `xtrasharp.com.au`
- **Source branch**: `main` — Vercel deploys automatically on every push to `main`. There is no separate staging environment or preview-approval gate in the current workflow; every push to `main` goes live.

## Build Command

Vercel auto-detects Next.js and runs the standard pipeline — no custom `vercel.json` build override exists in this repo:

```bash
npm install
npm run build   # → next build
```

`next build` output for this project shows every route as `○ (Static)`, meaning the entire site is prerendered HTML with no server-side rendering or API routes to provision — Vercel serves it as static output plus Next.js's standard asset/edge handling.

## Environment Variables

**There are currently none.** This project has no `.env` file, no `NEXT_PUBLIC_*` variables, and no secrets — confirmed by there being no `.env*` file in the repo and no `process.env` reference anywhere in `src/`. If you add a real backend integration (e.g. a form-submission email service — see `docs/maintenance.md`), that integration's API key would be the first environment variable this project ever needs, and it must be added in Vercel's Project Settings → Environment Variables, never committed to git.

## Local Development

```bash
npm install
npm run dev      # next dev, Turbopack, http://localhost:3000
npm run lint      # eslint
npm run build      # production build — always run before pushing
npm run start      # serve the production build locally, for final verification
```

## Standard Change Workflow (as practiced on this project)

1. `git fetch origin main --quiet && git checkout -b <topic-branch> origin/main`
2. Make the change.
3. `npm run lint`
4. `rm -rf .next && npx next build` — must succeed with no TypeScript or build errors.
5. `npx next start -p <free-port>` and verify the actual rendered HTML (title tags, meta tags, literal copy) with `curl`, and visually with a Playwright screenshot.
6. `git add -A && git commit -m "..."`
7. `git fetch origin main --quiet` (check nobody else pushed in the meantime) then `git push origin <topic-branch>:main`.
8. Switch back off the topic branch and delete it locally.

This workflow exists because the repository has, at times, had a stale long-lived session branch that diverged significantly from `main` — always branch from `origin/main` fresh, never assume the local working branch matches production.

## Production Checklist (Before Any Push to `main`)

- [ ] `npm run lint` passes with zero errors
- [ ] `next build` completes with zero TypeScript errors and all routes show `○ (Static)`
- [ ] Every changed page's rendered `<title>` and `<meta name="description">` match the literal copy that was requested — verified via `curl` against a local `next start` server, not assumed
- [ ] No hard-coded old pricing left behind on any touched page (cross-check against the master pricing list — see `docs/schema.md`)
- [ ] No broken internal links introduced (nav, footer, in-page links all resolve to real routes)
- [ ] JSON-LD blocks are valid JSON (the `JsonLd` component will throw at render time if not, so a successful build is a reasonable smoke test, but visually confirm via `curl | grep "@type"` too)
- [ ] Screenshot-verified against the live theme (light background, black text, red accent, consistent spacing) for any visually-changed page

## Post-Deployment Testing Checklist

Vercel deploys are typically live within 1–2 minutes of a push to `main`. After deploying:

- [ ] Load the live domain and spot-check the changed page(s) render correctly
- [ ] Confirm `https://xtrasharp.com.au/sitemap.xml` and `https://xtrasharp.com.au/robots.txt` both resolve
- [ ] Run the changed page(s) through Google's Rich Results Test (for schema) and the Facebook Sharing Debugger / Twitter Card Validator (for OG/Twitter tags) — both require the images referenced in metadata to actually exist at their URLs to pass fully; until `docs/image-handling.md`'s gaps are closed, expect image-fetch warnings, not failures on the text fields
- [ ] Test the contact form end-to-end: submitting it should open the visitor's email client with the message pre-filled
- [ ] Test `tel:0412974277` links on a real mobile device if possible
- [ ] Spot-check mobile viewport rendering (this site has no separate mobile build; it's the same responsive Tailwind classes, but always confirm visually)

> **Note on live-site verification from this development environment**: the sandboxed environment this project has been developed in blocks outbound network access to `xtra-sharp-site-v2.vercel.app` and to `xtrasharp.com.au` directly (confirmed via both `curl` and `WebFetch` returning hard proxy-level denials). All verification prior to push is done against a local `next build` + `next start` of the exact commit being pushed — this is equivalent in content but cannot substitute for a real post-deploy check on the live URL, which the site owner needs to do themselves after each deploy, or via a future CI job that has real internet access.

## Rollback

Vercel keeps every previous deployment. If a push to `main` breaks the live site:

1. Go to the Vercel dashboard → `xtra-sharp-site-v2` → Deployments.
2. Find the last known-good deployment (before the bad push).
3. Click "Promote to Production" (or equivalent "Instant Rollback" action) — this repoints the production domain to the previous build without needing a git revert first.
4. Separately, fix the issue in git: `git revert <bad-commit>` (preferred over `git reset --hard` since it preserves history) and push the revert to `main` so the branch and the live site stay in sync.

See `docs/backup-restore.md` for the fuller versioning/rollback strategy.
