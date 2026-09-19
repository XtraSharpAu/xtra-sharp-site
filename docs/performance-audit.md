# Performance Audit — Full 21-Page Benchmark

Real Lighthouse 13.5.0 performance-category runs against a local production build, same method as every prior performance audit this session (`docs/lighthouse-audit.md`, `docs/weekly-report.md`). This is the first time every one of the 21 live pages has been performance-benchmarked in the same pass — earlier audits covered 11.

## A note on the requested metrics

The task asked for LCP, FID, CLS, and the overall score. Three of those are real Lighthouse lab audits; one isn't, and reporting a fake number for it would be worse than saying so:

- **LCP, CLS**: real Lighthouse lab metrics, reported below as measured.
- **FID (First Input Delay)** is a *field* metric — it only exists when a real person interacts with a real page load, and Google retired it as a Core Web Vital in March 2024 in favor of INP (Interaction to Next Paint). Lighthouse's lab mode has never measured real FID and doesn't report one. What it does report is **Max Potential FID**, an estimate of the worst-case delay a click could see given the page's main-thread activity — included below, clearly labeled as an estimate, not real FID. **Total Blocking Time (TBT)** is the actual weighted lab metric in Lighthouse's Performance score and the metric Google's own guidance treats as the best lab proxy for responsiveness — included as the primary number to act on.

## Full Results (sorted by Performance score)

| Page | Performance | LCP | TBT | Max Potential FID | CLS | FCP |
|---|---|---|---|---|---|---|
| Clipper Blades | **94** | 2.6 s | 140 ms | 160 ms | 0 | 1.7 s |
| Terms | 96 | 2.3 s | 190 ms | 180 ms | 0 | 0.8 s |
| Contact | 97 | 2.3 s | 110 ms | 160 ms | 0 | 0.8 s |
| Processor Blades | 97 | 2.3 s | 130 ms | 180 ms | 0 | 0.8 s |
| Batch | 98 | 2.2 s | 110 ms | 160 ms | 0 | 0.8 s |
| Garden Tools | 98 | 2.2 s | 110 ms | 160 ms | 0 | 0.8 s |
| Home | 98 | 2.2 s | 110 ms | 160 ms | 0 | 0.8 s |
| How It Works | 98 | 2.2 s | 110 ms | 160 ms | 0 | 0.8 s |
| Knife Sharpening | 98 | 2.2 s | 50 ms | 140 ms | 0 | 1.5 s |
| Scissors Sharpening | 98 | 2.4 s | 80 ms | 180 ms | 0 | 0.8 s |
| Services | 98 | 2.2 s | 110 ms | 160 ms | 0 | 0.8 s |
| Thank You | 98 | 2.2 s | 110 ms | 160 ms | 0 | 0.8 s |
| About | 99 | 1.9 s | 100 ms | 150 ms | 0 | 0.8 s |
| Commercial | 99 | 1.7 s | 110 ms | 160 ms | 0 | 0.8 s |
| FAQ | 99 | 1.9 s | 100 ms | 150 ms | 0 | 0.8 s |
| Gallery | 99 | 1.8 s | 120 ms | 170 ms | 0 | 0.8 s |
| Mail-In | 99 | 1.7 s | 130 ms | 180 ms | 0 | 0.8 s |
| Pricing | 99 | 1.7 s | 110 ms | 160 ms | 0 | 0.8 s |
| Privacy | 99 | 1.7 s | 110 ms | 160 ms | 0 | 0.8 s |
| Service Area | 99 | 1.7 s | 110 ms | 160 ms | 0 | 0.8 s |
| Tips | 99 | 1.9 s | 110 ms | 160 ms | 0 | 0.8 s |

## Pages Below 90

**None.** Every one of the 21 pages scores 94 or higher this run. Cumulative Layout Shift is a perfect 0 on every single page — no layout-shift issues anywhere on the site.

## The One Page Worth Watching: Clipper Blades

At 94, Clipper Blades is comfortably above 90 today, but it's been the site's lowest or near-lowest performer in every audit this session, ranging from 89 to 94 across four separate runs (see `docs/lighthouse-audit.md` and `docs/weekly-report.md` for the history). The cause has been consistent throughout: it's the single most photo-heavy page on the site (before/after galleries, packing photos, equipment shots), and its LCP (2.6s here) is the driver. This isn't a new regression — no code or images changed for this page since the last audit — it's the same known characteristic, with normal run-to-run variance in this sandboxed environment's headless Chrome (documented as a caveat since the original audit) moving it a few points either way. If firmer headroom above 90 is wanted, further image work on this specific page (beyond the compression already done in the original performance pass) is the lever — not attempted here since this command asked to benchmark and identify causes, not to make further optimization changes.

## Recommendations

- No page requires immediate action — everything clears 90 with margin.
- If Clipper Blades' score matters enough to want more headroom, the next lever is reducing how many full-resolution images load above the fold on that specific page (lazy-loading is already correct per `docs/lighthouse-audit.md` — the images that do need to load early are simply numerous).
- TBT and Max Potential FID are both comfortably low across every page (50–190ms) — no render-blocking or main-thread-blocking script issues found anywhere.
