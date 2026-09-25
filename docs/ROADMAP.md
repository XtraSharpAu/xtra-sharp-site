# Xtra Sharp Website — v2.1 Update Plan

Baseline: release `v2.0-clean` (26 Sep 2026). Scores and history are in [CLEANUP-LOG.md](CLEANUP-LOG.md).
Status key: **To do** · **Done** (already in place — keep it working) · **Check**

## 1. Image optimization

Main reason for this section: on 26 Sep, mobile Performance was 50 on `/clipper-blades`, 60 on the home page, 71 on `/processor-blades` and 83 on `/knife-sharpening`.

- **To do — Compress hero and gallery images.** The largest files in `public/` are about 250 KB each (for example `clipper-blade-clean-top.jpg`, `knife-sharpening-machine.jpg`, `scissors-gallery-*.jpg`). Re-export them at display size and target under 150 KB. `next/image` already resizes them and serves WebP, so smaller source files mainly speed up the first, uncached load.
- **To do — Replace embedded YouTube frames with preview thumbnails + lightbox.** `/clipper-blades` loads YouTube iframes on page load for the process overview plus each step video, and `/knife-sharpening` has one. Show a thumbnail image with a play button, and load the video only when it's clicked. Priority 1: this is the most likely cause of the low clipper-blades score.

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
- **To do — Review mobile viewport scaling.** Check the site at 360–414 px widths (home hero, pricing tables, clipper-blades video grid) and confirm there's no horizontal scroll or undersized text.

## Suggested order

1. YouTube thumbnail + lightbox (clipper blades, knife sharpening)
2. Compress hero and gallery images
3. Re-run the Lighthouse workflow and compare with the 26 Sep baseline
4. Mobile viewport review
5. Remaining checks
