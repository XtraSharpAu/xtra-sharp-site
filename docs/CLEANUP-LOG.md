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
