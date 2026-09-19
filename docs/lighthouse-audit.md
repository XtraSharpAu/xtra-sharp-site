# Lighthouse Performance + Accessibility + SEO Audit

Real Lighthouse 13.5.0 runs (not estimates) against a local production build (`next build` + `next start`), using the Chromium binary already installed in this environment. Two full passes were run: a baseline before any fixes, and a final pass after applying the fixes below. Scores from headless Chrome on a shared/sandboxed CPU can run a point or two lower than a dedicated machine would show — treat these as directionally accurate, not lab-perfect.

## Scores — Before → After

| Page | Performance | Accessibility | SEO |
|---|---|---|---|
| Home | 94 → 98 | 100 → 100 | 100 → 100 |
| Services | 98 → 99 | 98 → 100 | 100 → 100 |
| Knife Sharpening | 98 → 98 | 100 → 100 | 100 → 100 |
| Scissors Sharpening | 98 → 100 | 100 → 100 | 100 → 100 |
| Clipper Blades | 91 → 93 | 100 → 100 | 100 → 100 |
| Garden Tools | 98 → 98 | 100 → 100 | 100 → 100 |
| Processor Blades | 91 → 99 | 100 → 100 | 100 → 100 |
| Mail-In | 97 → 99 | 100 → 100 | 100 → 100 |
| Pricing | 98 → 99 | 100 → 100 | 100 → 100 |
| FAQ | 98 → 99 | 95 → 100 | 100 → 100 |
| Contact | 98 → 99 | 96 → 100 | 100 → 100 |

Every page now scores 93+ across all three categories, clearing the ≥90 target with room to spare. Accessibility is a perfect 100 on all 11 audited pages.

## What Was Actually Wrong, and What Was Fixed

### Performance: 23 of 40 images in `public/` exceeded the 250KB target; 1 exceeded 1600px width
This was the real driver behind Clipper Blades (91) and Processor Blades (91) being the two lowest-scoring pages — both are the most photo-heavy pages on the site (`processor-blade-before-single.jpg` was 778KB, `knife_sharpening_machine.jpg` was 633KB, etc.). Recompressed all 23 with Pillow (resize to ≤1600px width where needed, then an iterative JPEG quality search targeting ≤250KB with `optimize=True, progressive=True`), restoring from git first where a file needed a second pass so it was never double-compressed. All 40 images in `public/` are now ≤250KB and ≤1600px wide. This is the reason Processor Blades jumped 91→99 and Clipper Blades 91→93.

### Accessibility: 3 in-paragraph links relied on color alone to be distinguishable from surrounding text
Lighthouse's `link-in-text-block` audit flagged the phone number link on `/contact`, and the phone + email + the "Contact Xtra Sharp" link (added in the prior page-SEO-audit command) on `/faq` — all used `hover:underline`, meaning the link had no visible difference from the surrounding paragraph text except its color, at a contrast ratio of only 1.01–1.45:1 against a 3:1 minimum (WCAG SC 1.4.1). Changed `hover:underline` to a permanent `underline` on these 3 links specifically — not applied site-wide, since every other use of that class pattern checked (Home, Mail-In) is a standalone link on its own line ("View Full Pricing →" etc.), which isn't the same failure mode and wasn't flagged.

### Accessibility: heading order skipped a level on `/services`
The page went H1 → H3 directly — `ServiceDetail` (each service card) renders an `<h3>`, but nothing on the page had an `<h2>` before it. Added an `<h2>Our Services</h2>` above the service-card grid, matching the equivalent section on the Home page. Heading order is now H1 → H2 → H3 → H2 → H3 → H2 → H2 → H2, with no skips.

## Verified Clean, No Fix Needed

- **Lazy-loading**: every `<Image>` on the audited service pages already lazy-loads by default (Next.js's `next/image` only loads eagerly when `priority` is explicitly set, which none of these use).
- **`font-display: swap`**: confirmed in the compiled CSS — `next/font/google` (Geist, Geist Mono) sets this automatically.
- **Compression**: `next start` serves gzip-compressed responses by default (`compress: true` is Next.js's default). An initial `curl -I` test showed no `Content-Encoding` header, which turned out to be a HEAD-request quirk, not missing compression — confirmed with `curl --compressed` that `Content-Encoding: gzip` is present.
- **Unused CSS**: zero `unused-css-rules` findings on any of the 11 pages.
- **ARIA / focus / button / link names**: `button-name`, `link-name`, `aria-allowed-attr`, `aria-required-attr`, `focusable-controls`, `tabindex`, and standalone `color-contrast` all passed on every page with no findings — every interactive element already has a real accessible name (visible text, not icon-only), and no focus outlines have been stripped.
- **Canonical tags / meta descriptions**: confirmed rendering correctly on all 11 pages (the 100/100 SEO score on every page is the direct evidence — Lighthouse's SEO category checks exactly this).
- **sitemap.xml / robots.txt**: already current (`lastmod` dates set to today in a prior command), all 20 live routes present, `/thank-you` correctly excluded via `robots.txt`'s `Disallow`.

## Noted, Not Changed

Every page shows the same ~29KB of "unused JavaScript" from one Next.js framework chunk (`3kmozkq6tgqnz.js`, 71KB total). This is consistent across every page regardless of content, which is the signature of built-in Next.js App Router runtime code (router/navigation logic not exercised on a given page load) rather than application code that could be tree-shaken — not something to eject from the framework's bundling to chase.
