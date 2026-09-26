# Xtra Sharp Website — v2.1 Update Plan

> **v2.1 milestone: CLOSED (26 Sep 2026).** Merged to `main` as 36986fc (PR #2) and verified live. Follow-ups: compare the 1 Oct 2026 Lighthouse workflow run with Run #2, and consider v2.2 items below.

Baseline: release `v2.0-clean` (26 Sep 2026). Scores and history are in [CLEANUP-LOG.md](CLEANUP-LOG.md).
Status key: **To do** · **Done** (already in place — keep it working) · **Check**

## v2.1 Work Items – Confirmed

Confirmed 26 Sep 2026 after Lighthouse run #2 (see [CLEANUP-LOG.md](CLEANUP-LOG.md)).

| Priority | Work item | Pages |
|---|---|---|
| 1 | Replace YouTube embeds with click-to-play thumbnails | `/clipper-blades`, `/knife-sharpening` |
| 2 | Compress hero and gallery images (target under 150 KB) | Home and image-heavy pages |
| 3 | Small-screen testing at 360–414 px | Home hero, pricing tables, clipper-blades video grid |

**Status (26 Sep 2026): all three items done and live.** Earlier progress notes:

- **Priority 1 — Built, awaiting build/Lighthouse check.** `VideoThumbnail` component added; all 11 YouTube embeds on the two pages now load only on click.
- **Priority 2 — Done locally, awaiting build/Lighthouse check.** 36 images re-exported under 150 KB; AVIF + WebP enabled; `sizes` added on `/clipper-blades` and `/knife-sharpening`.
- **Priority 3 — Tested.** No overflow or small text at 360–414 px; small header/footer/social tap targets noted as a possible later improvement.

Details: [CLEANUP-LOG.md → v2.1 Development Phase](CLEANUP-LOG.md).

## v2.1 Verification – Completed

Verified 26 Sep 2026 on the Vercel preview of branch `v2.1-dev` (build 330c51c), then on the live site after merge (36986fc).

- **Click-to-play video component verified.** No YouTube iframes or requests on page load (`/clipper-blades` previously loaded 10); thumbnails lazy-load; clicking play loads the player in place.
- **Image compression verified.** 36 images under 150 KB; AVIF served (30 KB at phone width vs ~250 KB before); responsive `sizes` working.
- **Mobile layout verified.** No horizontal scroll or small text at 360–414 px (see CLEANUP-LOG.md).
- **Lighthouse results recorded.** Run #3 mobile Performance: home 95 (was 83), clipper-blades 80 (was 47), knife-sharpening 84 (was 88). Accessibility and Best Practices 100 on all three. Preview SEO scores are lowered by Vercel's preview-only `noindex` header; see CLEANUP-LOG.md.

## 1. Image optimization

Main reason for this section: on 26 Sep, mobile Performance was 50 on `/clipper-blades`, 60 on the home page, 71 on `/processor-blades` and 83 on `/knife-sharpening`.

- **Done locally (26 Sep, not deployed) — Compress hero and gallery images.** The largest files in `public/` are about 250 KB each (for example `clipper-blade-clean-top.jpg`, `knife-sharpening-machine.jpg`, `scissors-gallery-*.jpg`). Re-export them at display size and target under 150 KB. `next/image` already resizes them and serves WebP, so smaller source files mainly speed up the first, uncached load.
- **Built locally (26 Sep, not deployed) — Replace embedded YouTube frames with click-to-play thumbnails** (inline player, no lightbox). `/clipper-blades` loads YouTube iframes on page load for the process overview plus each step video, and `/knife-sharpening` has one. Show a thumbnail image with a play button, and load the video only when it's clicked. Priority 1: this is the most likely cause of the low clipper-blades score.

## 2. Analytics integration

- **Done — GA4 tracking ID.** `src/components/GoogleAnalytics.tsx` loads GA4 from the `NEXT_PUBLIC_GA_MEASUREMENT_ID` environment variable, and the "Xtra Sharp Website" GA4 property is receiving traffic. **Check:** the variable is set in Vercel for Production.
- **Done — Search Console linked for the www domain.** The domain property `xtrasharp.com.au` (covers www) was linked to GA4 on 26 Sep 2026. **Check:** Search Console queries appear under Reports → Acquisition → Search Console.

## 3. Structured-data expansion

- **Done — BreadcrumbList on all service pages.** `Breadcrumbs` (which outputs BreadcrumbList) is used on knife, scissors, clipper blades, garden tools, processor blades, mail-in, commercial and batch. **Check:** Search Console → Breadcrumbs shows no errors.
- **Check — FAQPage schema.** FAQPage is on `/faq` and on the knife, scissors, clipper blades, garden tools and processor blades pages. `/pricing` has no FAQ content, so FAQPage should only be added there if a visible FAQ section is added first. Google requires the schema to match what's on the page.

## 4. Quarterly audits

- **To do — Schedule the next Lighthouse run for December 2026.** The workflow's automatic schedule is the 1st of January, April, July and October, so the next automatic run is **1 Oct 2026**. For December, either run it by hand from GitHub Actions ("Run workflow"), or add a `0 9 1 12 *` schedule.
- **Done — Best Practices scoring.** Added to the workflow on 26 Sep 2026 (commit `8226c60`), which now also audits `https://www.xtrasharp.com.au`.
- **Note — PWA checks.** Lighthouse 12 removed the PWA category, and the workflow uses Lighthouse 13.5.0, so PWA can't be scored there. The site has no web app manifest; add one only if you want an installable, app-like site.

## 5. Optional enhancements

- **Done — Lazy-load non-critical images.** `next/image` lazy-loads by default (only the header logo uses `priority`), and the Contact page map already has `loading="lazy"`. The YouTube change in section 1 covers the remaining heavy embeds.
- **Done — Preload the main font.** Fonts load via `next/font/google` (Geist), which self-hosts and preloads them automatically. No change needed.
- **Done (26 Sep) — Review mobile viewport scaling.** No horizontal scroll or undersized text found; see CLEANUP-LOG.md. Check the site at 360–414 px widths (home hero, pricing tables, clipper-blades video grid) and confirm there's no horizontal scroll or undersized text.

## Possible v2.2 items

- Reduce Next.js JavaScript cost (unused JS, main-thread work), the main remaining Lighthouse suggestion on `/clipper-blades`.
- Larger mobile tap targets: compact mobile menu for the 12 header links, 44 px social icons.
- Add `sizes` to images on the other service pages (processor blades, scissors, garden tools).

## Suggested order (v2.1, completed)

1. YouTube thumbnail + lightbox (clipper blades, knife sharpening)
2. Compress hero and gallery images
3. Re-run the Lighthouse workflow and compare with the 26 Sep baseline
4. Mobile viewport review
5. Remaining checks
