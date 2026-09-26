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

Status: verified on the Vercel preview of branch `v2.1-dev` (build 330c51c). See Run #3 below.

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

### 4. Build and preview checks (26 Sep 2026)

- All 14 Vercel preview builds of `v2.1-dev` succeeded, including the final build 330c51c (`next build` with type-check). The only build warnings (npm install-scripts notice, custom Cache-Control header in `next.config.ts`) were already present before v2.1.
- Preview `/clipper-blades`: 0 YouTube iframes and 0 YouTube requests on page load (live site: 10 iframes). Thumbnails (12–15 KB each) load only when scrolled into view. Clicking play replaces the thumbnail with the YouTube player in place.
- Preview `/knife-sharpening`: 0 iframes on load, 1 play button; all 9 content images have `sizes`, with srcset from 256w.
- AVIF confirmed: first gallery image at phone width is 30 KB AVIF (58 KB WebP fallback) vs 142 KB compressed JPEG (~250 KB before v2.1).

## Performance Baseline – Run #3 (v2.1-dev preview) – 26 Sep 2026

Source: Lighthouse in Chrome DevTools (mobile, emulated Moto G Power), run by hand on the Vercel preview `xtra-sharp-site-v2-git-v21-dev-xtrasharpau.vercel.app`, build **330c51c** (branch `v2.1-dev`). PageSpeed Insights couldn't be used because Vercel's preview protection redirects it to the login page.

| Page | Perf | A11y | Best Practices | SEO | Perf in Run #2 (live) | Change |
|---|---|---|---|---|---|---|
| / (home) | 95 | 100 | 100 | 69 * | 83 | +12 |
| /clipper-blades | 80 | 100 | 100 | 69 * | 47 | +33 |
| /knife-sharpening | 84 | 100 | 100 | 61 ** | 88 | −4 |

\* SEO 69 on the preview is caused by Vercel's `X-Robots-Tag: noindex` header, which Vercel adds to every preview deployment (confirmed on the preview; the only failed SEO check on `/clipper-blades` is "Page is blocked from indexing"). This header isn't sent by the production site, so these pages are expected to score as before on main (Run #2: home 92, clipper-blades 100).

\*\* `/knife-sharpening` SEO 61 is 8 points below the noindex-only score, so one more SEO check failed on that run. Title, meta description, canonical, HTTP status, link text, crawlable links and image alt text were checked on the preview and all pass; confirm the failing item from the full report, and re-check after merge.

Notes:
- `/clipper-blades` details: FCP 3.4 s, LCP 3.4 s, TBT 230 ms, CLS 0, Speed Index 4.0 s. Remaining Performance suggestions are about Next.js JavaScript (unused JS, main-thread work), a possible v2.2 item.
- Run #3 was measured in a local Chrome on a different machine and network from Run #1/#2 (GitHub Actions runner), so small differences (such as knife-sharpening 88 → 84) are within normal run-to-run variation. The next scheduled workflow run on production (1 Oct 2026) gives a like-for-like comparison.

## v2.1 Release – Merged and Verified Live – 26 Sep 2026

- PR #2 (`v2.1-dev` → `main`) squash-merged as **36986fc**: "Add v2.1 verified build: video component, image compression, mobile testing." `main` is identical to the verified preview build 330c51c plus the Run #3 docs. Vercel deployed it to production.
- Live `https://www.xtrasharp.com.au/clipper-blades`: 0 YouTube iframes and 0 YouTube player requests on load (was 10 iframes), 10 click-to-play thumbnails. No `X-Robots-Tag` header.
- Live `/knife-sharpening`: 0 iframes on load, 1 click-to-play thumbnail, 9 images with responsive `sizes`, AVIF served (30 KB at phone width), HTTP 200, no `noindex`.
- PageSpeed Insights (mobile), live `/knife-sharpening`, 26 Sep 4:44 PM: **Performance 76 · Accessibility 100 · Best Practices 100 · SEO 100.** SEO is back to 100, which confirms the preview's 61 was caused by preview-only behaviour. This run happened within minutes of the deploy, so optimized images were still being generated for the first time; re-check Performance on the next run.
- PageSpeed Insights for `/` and `/clipper-blades` didn't complete (the tool stalled). The scheduled Quarterly Lighthouse workflow on **1 Oct 2026** audits all 21 production pages and gives the like-for-like comparison with Run #1/#2.

## Analytics Verification – v2.1 Live – 26 Sep 2026

GA4 property: "Xtra Sharp Website" (property 555128797), web stream 15811521503, Measurement ID **G-LKK494K8YP**. The stream shows "Receiving traffic in past 48 hours."

- **Tag check (live site):** after the v2.1 deploy, `/clipper-blades` and `/knife-sharpening` both load the GA4 script and send a `page_view` to G-LKK494K8YP, which matches the property's stream ID.
- **Pages and screens, last 28 days (29 Aug – 25 Sep 2026, before v2.1):**

| Page | Views | Active users | Avg engagement time | Event count |
|---|---|---|---|---|
| /knife-sharpening | 12 | 8 | 46 s | 22 |
| /clipper-blades | 8 | 7 | 23 s | 19 |
| All pages | 183 | 65 | 1 m 00 s | 422 |

- **Today (26 Sep):** standard reports only cover up to 25 Sep, so today's page views aren't available yet. Realtime showed **0 active users** even after two test visits that sent `page_view` hits in this browser. The tag and ID are correct, so these test hits were probably blocked or filtered before reaching the reports: either security software in this browser blocking tracking requests, or a GA4 internal-traffic filter. To confirm, open the live site on a phone (mobile data, not Wi-Fi) and watch Realtime.
- Organic search traffic to the updated pages is expected to show within 2–3 days. Compare /clipper-blades and /knife-sharpening against the 28-day figures above in early October.

## Outside-Visitor Realtime Test – v2.1 Live – 26 Sep 2026

- **Property:** Xtra Sharp Website (555128797), Measurement ID **G-LKK494K8YP**. The site tag sends `page_view` hits to this ID on `/clipper-blades` and `/knife-sharpening` (checked in the browser).
- **Data filters:** one filter, "Internal Traffic" (Exclude), state **Testing**. A filter in Testing only labels matching events and doesn't remove them from reports or Realtime. There's no "Developer Traffic" filter. **Filters are not the cause.**
- **Result:** Realtime stayed at **0 active users** after desktop test visits and after the reported phone visit to `/clipper-blades` on mobile data (checked several times, the last shortly after the phone test).
- **Interpretation (unresolved):** Kaspersky on the desktop could explain the desktop visits not showing, but not a phone visit on mobile data. So the cause isn't confirmed. Possible explanations: the phone visit didn't send a hit (for example, a content blocker or private relay on the phone), Realtime delay, or hits not being processed for this stream.
- **Next check (27 Sep):** open Reports → Engagement → Pages and screens for **26 Sep**. If 26 Sep shows views, tracking works and only Realtime/test visits were affected. If 26 Sep shows none across the whole site, tracking stopped at or after the v2.1 deploy and needs investigating (GA4 DebugView, tag configuration). Before v2.1, the property recorded 183 views between 29 Aug and 25 Sep.
