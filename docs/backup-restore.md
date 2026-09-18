# Backup, Restore, Versioning & Rollback

This covers both the backup/restore doc (Section 3) and the fuller backup/restore + versioning + rollback pack (Section 10) — merged into one file to avoid duplicate, drifting documents.

## What "Backup" Means for This Project

There is no database and no CMS. **The entire site — every page, every word of copy, every price, every schema block — is source code in this git repository.** Git history *is* the backup and versioning system; there is no separate content store to back up.

The only things that live outside git are:

- **DNS/domain registration** (managed at the domain registrar for `xtrasharp.com.au`)
- **Vercel project configuration** (build settings, domain attachment, environment variables — currently none, see `docs/deployment.md`)
- **Any future third-party service credentials** (e.g. a form-email API key, if `docs/maintenance.md`'s item #1 is ever implemented)

## Backup Strategy

1. **Git remote is the primary backup.** The repository lives on GitHub (`XtraSharpAu/xtra-sharp-site`). As long as `main` is pushed, the full history and current state are recoverable from GitHub even if every local clone is lost.
2. **GitHub itself should have its own backup posture** — this is outside this project's control, but standard GitHub organization practices (no force-pushes to `main`, branch protection if enabled) reduce the risk of history loss.
3. **Vercel's deployment history** is a secondary, informal backup — every previous production deployment remains available to redeploy from the Vercel dashboard even without touching git, for a rolling window (subject to Vercel's plan-specific retention).
4. **No automated off-site backup job exists** for this project, and none is needed given the above — the failure modes that would require one (git host outage, repo deletion) are extremely low-probability and mitigated by GitHub's own infrastructure.

## Versioning Strategy

- **No version numbers or tags are used** for this site — it's a continuously-deployed marketing site, not a versioned software product. `package.json` carries a static `"version": "0.1.0"` that has not been incremented and isn't meaningful.
- **Every meaningful change is its own git commit** with a descriptive message explaining *why*, not just *what* — this is the de facto version history. `git log --oneline` against `main` is the changelog.
- **Content changes and code changes are not separated** — because content lives in the same `.tsx` files as the markup, there's no way (or need) to version them independently.

## Restore Strategy

**Scenario: a bad change was pushed to `main` and the live site is now wrong.**

1. Identify the last good commit: `git log --oneline origin/main`.
2. Revert forward (preferred): `git revert <bad-commit-sha>` on a fresh branch off `origin/main`, then push that branch to `main`. This keeps full history intact and is safe even if others have since pushed additional commits.
3. If an immediate rollback is needed before a proper revert can be prepared, use Vercel's "Promote to Production" on the last good deployment (see `docs/deployment.md`) to restore the live site instantly, then follow up with the git-level revert so the repository and the live site match again.

**Scenario: the entire local working copy is lost or corrupted.**

1. `git clone` the GitHub repository fresh.
2. `git checkout main`.
3. `npm install && npm run build` to confirm the clone is buildable.
4. Nothing else is needed — there is no local-only state (no `.env`, no database, no uploaded files) that wouldn't already be in the fresh clone.

**Scenario: a specific page's content needs to be restored to an earlier version.**

1. `git log --oneline -- src/app/<route>/page.tsx` to find the commit before the unwanted change.
2. `git show <commit>:src/app/<route>/page.tsx` to view the old content, or `git checkout <commit> -- src/app/<route>/page.tsx` to restore that single file onto the current branch (then review the diff before committing — don't blindly restore if other legitimate changes happened to the same file since).

## Rollback Plan (Summary)

| Urgency | Action |
|---|---|
| Site is broken right now, needs to be fixed in the next few minutes | Vercel dashboard → Deployments → Promote previous good deployment to Production |
| Site is broken, a few minutes to prepare a proper fix is fine | `git revert` on a fresh branch off `origin/main`, verify with the full `docs/deployment.md` checklist, push to `main` |
| A single page has bad content but the rest of the site is fine | Restore just that file from git history (see above), verify, push |

Never use `git reset --hard` against `main` or force-push to rewrite `main`'s history — always move forward with a new commit (a revert), so the deployed history and the repository history never diverge.
