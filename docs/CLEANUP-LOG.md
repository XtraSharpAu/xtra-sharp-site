# Xtra Sharp site: SEO & cleanup log (26 Sep 2026)

Repo: XtraSharpAu/xtra-sharp-site (main) · Vercel project: xtra-sharp-site-v2

| Commit | Change |
|---|---|
| 52f1cb5 | Scissors page: new title/description, www canonical |
| 5eb9ce8 | All page canonicals → https://www.xtrasharp.com.au |
| 95abb30 | Sitemap, robots.txt, layout business details, social/OG URLs → www |
| 5c62b40 | Removed legacy root robots.txt and sitemap.ts |
| e116561 | Removed root page (2–14).tsx drafts and download files |
| d28a56a | Removed 33 unused root .tsx component copies |
| 77bf8a5 | Removed unused root globals.css (tagged v2.0-clean, GitHub Release) |

Search Console: only sitemap is https://www.xtrasharp.com.au/sitemap.xml (Success, 20 pages).

## URL Inspection: https://www.xtrasharp.com.au/ (26 Sep 2026)

- Live test (4:20 AM): URL is available to Google. Crawl allowed, page fetch successful, indexing allowed. User-declared canonical: https://www.xtrasharp.com.au/. Review snippets: 6 valid items. No errors.
- Google index (last crawl 25 Sep 2026, before these changes): URL is on Google, page indexed, HTTPS OK. Still shows the old declared canonical https://xtrasharp.com.au/ and "No referring sitemaps detected"; both update on Google's next crawl.

## Performance Baseline – 26 Sep 2026

Source: repo workflow "Quarterly Lighthouse Audit" run #1 (Lighthouse 13.5.0, mobile, GitHub Actions runner, commit 490eaf7). This workflow does not score Best Practices. PageSpeed Insights could not be used today because its daily quota was exceeded.

| Page | Performance | Accessibility | SEO |
|---|---|---|---|
| / (home) | 60 | 100 | 92 |
| /clipper-blades | 50 | 100 | 100 |
| /processor-blades | 71 | 100 | 100 |
| /knife-sharpening | 83 | 100 | 100 |
| /thank-you | 94 | 100 | 69 (expected: page is noindex) |
| Other 16 pages | 91–95 | 100 | 100 |

Home page load (one real visit in Chrome, desktop): server response 0.35 s, DOM ready 2.3 s, fully loaded 3.3 s, 17 requests, 140 KB transferred, layout shift 0.

Notes and next steps:
- Compared with the 20 Sep report (docs/quarterly-reports/2026-Q3.json), Performance dropped on home (97→60), clipper-blades (96→50), processor-blades (99→71) and knife-sharpening (99→83). A single runner test can vary, so re-run before acting.
- Home SEO fell from 100 to 92; open the full Lighthouse report to see which check failed.
- Likely areas to check: embedded YouTube videos (clipper-blades, knife-sharpening) and large hero images (home).
- Get Best Practices and detailed suggestions from PageSpeed Insights once its quota resets.

## Performance Baseline – Run #2 (www) – 26 Sep 2026

Source: workflow "Quarterly Lighthouse Audit" [run #2](https://github.com/XtraSharpAu/xtra-sharp-site/actions/runs/36177145137) (Lighthouse 13.5.0, mobile, GitHub Actions runner, commit 2a79436, audited `https://www.xtrasharp.com.au`, 26 Sep 2026 05:01 AEST). First run to include Best Practices.

| Page | Perf | A11y | Best Practices | SEO | Perf in run #1 |
|---|---|---|---|---|---|
| / (home) | 83 | 100 | 100 | 92 | 60 |
| /clipper-blades | 47 | 100 | 96 | 100 | 50 |
| /commercial | 75 | 100 | 100 | 100 | 91–95 |
| /knife-sharpening | 88 | 100 | 96 | 100 | 83 |
| /processor-blades | 95 | 100 | 100 | 100 | 71 |
| /thank-you | 96 | 100 | 100 | 69 (expected: page is noindex) | 94 |
| Other 15 pages | 94–97 | 100 | 100 | 100 | 91–95 |

Note: Large swings observed; YouTube embeds and image weight likely causes.

## v2.1 Development Phase – Local Testing Results

Status: code changes made and checked offline, **not yet built with Next.js or audited with Lighthouse** (see "Still to verify"). Nothing has been deployed; the live site is unchanged.

### 1. Click-to-play video component

- New `src/components/VideoThumbnail.tsx` (props: `thumbnailSrc`, `videoId`, `altText`, optional `title`) and helper `src/lib/youtube.ts` (`youTubeThumb(videoId)`; kept outside the client component so server pages can call it).
- Shows a lazy-loaded YouTube thumbnail (~20 KB) with a red play button. The YouTube iframe (`youtube-nocookie.com`, autoplay) is only created after a click, so nothing from YouTube's player loads with the page.
- Used for all 10 videos on `/clipper-blades` (process overview + 9 steps) and the 1 video on `/knife-sharpening`. The live `/clipper-blades` page currently creates 10 YouTube iframes on page load.
- Checked: TypeScript syntax on all changed files; no remaining `youtube.com/embed` iframes in `src/`.

### 2. Image compression

- 36 JPEGs in `public/` over 150 KB re-exported: long edge capped at 1,600 px, aspect ratio kept (existing `width`/`height` props stay valid), quality stepped down from 82 only as far as needed (lowest used: 70). All 36 are now 138–146 KB; total 7.6 MB → 5.1 MB. Filenames unchanged. Spot-checked visually at display size.
- A few very detailed photos needed downscaling to get under 150 KB (for example `scissors-gallery-lineup.jpg` is now 564 px wide, `knife-sharpening-machine.jpg` 779 px wide); these are still sharp at the size they're displayed.
- `next.config.ts`: `images.formats` set to AVIF then WebP, so next/image serves AVIF where the browser supports it.
- Responsive sizes: images on `/clipper-blades` and `/knife-sharpening` had fixed `width` values (up to 1,600) and no `sizes`, so phones were sent full-width files. Added `sizes` to all 12 images on those two pages (single images: `(min-width: 672px) 672px, 100vw`; galleries sized to their grid columns).

### 3. Small-screen testing (live site, 360 / 375 / 390 / 414 px)

Pages: `/`, `/pricing`, `/clipper-blades`, `/knife-sharpening`, measured in Chrome at each width.

| Check | Result |
|---|---|
| Horizontal scroll | None on any page or width |
| Elements overflowing the viewport | None |
| Text under 12 px | None |
| H1 size | 36 px on all pages |
| Pricing tables | Fit within the viewport at 360 px |
| Video blocks | Full width, 16:9, no overflow |
| Tap targets under 24 px | Header nav links (20 px tall, 8 px row gap), footer links (19 px tall), Facebook/X icons (22×22 px) |

Tap targets pass WCAG 2.2 AA through spacing, and Lighthouse Accessibility is 100, but the header nav (12 wrapped text links) and the social icons are small for thumbs. Possible later improvement: a compact mobile menu and 44 px icon buttons.

### 4. Lighthouse (local)

Not run yet. This session's network policy blocks the npm registry (so the site can't be installed or built here) and blocks access to xtrasharp.com.au, so a local `next build` + Lighthouse run wasn't possible.

### Still to verify

1. `next build` succeeds (includes full type-check and lint).
2. Lighthouse for `/`, `/clipper-blades` and `/knife-sharpening`, compared with Run #2 (83 / 47 / 88).
3. Click-to-play works on a phone (thumbnail → video plays).
