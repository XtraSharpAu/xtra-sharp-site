# Quarterly Maintenance Automation (Command 26)

Two pieces were built for this command, both real and both actually run/validated (not just documented):

1. **`scripts/quarterly-lighthouse.sh`** — a local script that builds the site, runs Lighthouse against every route on a local production server, and writes a JSON report. This is the literal "local script" Command 26 asked for, and it was actually executed twice against this codebase while writing this doc (see "Real run" below).
2. **`.github/workflows/quarterly-lighthouse.yml`** — a GitHub Actions workflow that does the same audit against the **live production domain**, on a quarterly cron schedule. This is the "scheduled task" half of Command 26's either/or. It's included because a GitHub Actions runner has real outbound internet access, unlike this development sandbox — see the network-access note below for why that matters.

## Why both

This sandbox's outbound network is restricted to an allowlist (npm, GitHub, PyPI, Anthropic endpoints) — `xtrasharp.com.au` and all `google.com` domains are blocked, a limitation documented consistently since Command 8 and re-confirmed for every command since. That means:

- The **local script** can only audit a locally-built copy of the site (`next build && next start` on localhost) — it cannot reach the real production URL from this environment. It's still genuinely useful: it's what a developer runs on their own machine, which does have normal internet access, and it's what was actually executed to produce the sample report below.
- The **GitHub Actions workflow** is what makes the "quarterly" part genuinely automated rather than depending on someone remembering to run a script by hand. GitHub's own runners aren't behind this sandbox's network restriction, so it's the one piece that can actually reach `https://xtrasharp.com.au` unattended. **This workflow could not be executed or verified from this session** — there's no way to trigger a GitHub Actions run or inspect its result from here. It's been checked for YAML validity (`python3 -c "import yaml; yaml.safe_load(...)"`, passed) and its logic mirrors the local script line-for-line, but its first real run will only be confirmed once it fires (or is manually dispatched) in GitHub, after this branch merges and Actions is enabled for the repo.

Both write the same JSON report shape, so a report from either source can be read the same way.

## How to trigger

### Manually, right now (local script)

```bash
npm run lighthouse:quarterly
```

Requires Chromium — in this sandbox that's `CHROME_PATH=/opt/pw-browsers/chromium` (already the default the script falls back to; override with `CHROME_PATH=/path/to/chrome npm run lighthouse:quarterly` on a machine where Chrome/Chromium is installed elsewhere). No other setup needed — it builds the site itself.

### Manually, on demand (GitHub Actions)

Repo → **Actions** tab → **Quarterly Lighthouse Audit** → **Run workflow**. Produces a downloadable artifact named `lighthouse-<quarter>` containing the JSON report.

### Automatically (GitHub Actions, quarterly)

Fires at 09:00 UTC on the 1st of January, April, July, and October, with no action needed — as long as the repository has Actions enabled and the default branch contains the workflow file.

## Reading the report

Every run (local or Actions) produces one file: `docs/quarterly-reports/YYYY-Q#.json`, e.g. `docs/quarterly-reports/2026-Q3.json`. Shape:

```json
{
  "quarter": "2026-Q3",
  "generatedAt": "2026-09-20T04:30:12Z",
  "lighthouseVersion": "13.5.0",
  "failThreshold": 90,
  "pages": [ { "route": "/about", "performance": 98, "accessibility": 100, "seo": 100 }, ... ],
  "flagged": [ { "route": "/thank-you", "performance": 97, "accessibility": 100, "seo": 66 } ]
}
```

- `pages` — every route's Performance / Accessibility / SEO score (0–100).
- `flagged` — the subset scoring below 90 (`failThreshold`) in any of the three categories. Empty array means nothing to review.
- The local script also exits with status code `2` when anything is flagged (`0` when clean), so it can be used as a pass/fail check in other tooling if needed later.

**Review process for a flagged page:**
1. Open the report and note which category (performance/accessibility/seo) is low and by how much.
2. Cross-check against the most recent full audit for that category — `performance-audit.md` (Command 23) or `accessibility-audit.md` (Command 22) — to see if it's a regression or a pre-existing, understood condition.
3. If it's a real regression (a new dependency, an added image, a metadata change), fix it the same way prior regressions were fixed in this repo — see `lighthouse-audit.md` for the pattern (oversized images, contrast, heading order) used in Command 16.
4. If it's not a regression, note why in this file's changelog below rather than chasing a score that isn't actually a problem.

## Real run — 2026-Q3 (sample, local script)

The script was actually executed against this codebase (not simulated) while building this automation, confirming the whole pipeline — build, serve, audit 21 routes, aggregate, flag — works end to end:

| Route | Performance | Accessibility | SEO |
|---|---|---|---|
| / | 93 | 100 | 100 |
| /about | 98 | 100 | 100 |
| /batch | 98 | 100 | 100 |
| /clipper-blades | 98 | 100 | 100 |
| /commercial | 98 | 100 | 100 |
| /contact | 100 | 100 | 100 |
| /faq | 98 | 100 | 100 |
| /gallery | 98 | 100 | 100 |
| /garden-tools | 98 | 100 | 100 |
| /how-it-works | 98 | 100 | 100 |
| /knife-sharpening | 97 | 100 | 100 |
| /mail-in | 98 | 100 | 100 |
| /pricing | 99 | 100 | 100 |
| /privacy | 99 | 100 | 100 |
| /processor-blades | 100 | 100 | 100 |
| /scissors-sharpening | 98 | 100 | 100 |
| /service-area | 98 | 100 | 100 |
| /services | 98 | 100 | 100 |
| /terms | 98 | 100 | 100 |
| **/thank-you** | 97 | 100 | **66** |
| /tips | 99 | 100 | 100 |

**One page flagged: `/thank-you`, SEO = 66.** This is not a bug and nothing was "fixed" for it. `/thank-you` intentionally sets `robots: { index: false }` in its metadata (it's a post-form-submission confirmation page — see `src/app/thank-you/page.tsx`), which is correct: it shouldn't be indexed. Lighthouse's SEO category penalizes a `noindex` directive heavily, because *in general* a page that can't be indexed is treated as an SEO problem. Here it's a deliberate choice, not an oversight, so the flag is a known false positive for this one page. Anyone reviewing future reports should expect `/thank-you` to keep failing the SEO check for this reason and not "fix" it by removing `noindex`.

This file, `docs/quarterly-reports/2026-Q3.json`, is committed as the first real report — not a placeholder — so the format is proven before the next real quarterly run (2026-Q4) replaces or supplements it.

## Files added

- `scripts/quarterly-lighthouse.sh` — the local script (executable, `npm run lighthouse:quarterly` runs it)
- `.github/workflows/quarterly-lighthouse.yml` — the scheduled GitHub Actions workflow (untested from this session — see network-access note above)
- `docs/quarterly-reports/2026-Q3.json` — first real report, produced by an actual run of the local script
- `package.json` — added the `lighthouse:quarterly` script entry
