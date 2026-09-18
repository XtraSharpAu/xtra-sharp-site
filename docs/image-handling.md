# Image Handling

## Current State: No Real Images

As of this document's last update, `public/` contains only the five default Next.js starter SVGs (`file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg`) — none of which are used anywhere in the site. **There are no real photos, logo files, or Open Graph images in the project.**

Every page's metadata references image URLs that don't yet resolve to real files:

| Referenced URL | Used for | Status |
|---|---|---|
| `https://xtrasharp.com.au/logo.png` | `LocalBusiness` schema `image` field | Missing |
| `https://xtrasharp.com.au/og-image.jpg` | Home OG/Twitter image | Missing |
| `https://xtrasharp.com.au/og-knife.jpg` | Knife Sharpening OG/Twitter image | Missing |
| `https://xtrasharp.com.au/og-scissors.jpg` | Scissors Sharpening OG/Twitter image | Missing |
| `https://xtrasharp.com.au/og-clipper.jpg` | Clipper Blades OG/Twitter image | Missing |
| `https://xtrasharp.com.au/og-garden-tools.jpg` | Garden Tools OG/Twitter image | Missing |
| `https://xtrasharp.com.au/og-processor-blades.jpg` | Processor Blades OG/Twitter image | Missing |
| `https://xtrasharp.com.au/og-pricing.jpg` | Pricing OG/Twitter image | Missing |
| `https://xtrasharp.com.au/og-mail-in.jpg` | Mail-In OG/Twitter image | Missing |
| `https://xtrasharp.com.au/og-service-area.jpg` | Service Area OG/Twitter image | Missing |
| `https://xtrasharp.com.au/og-contact.jpg` | Contact OG/Twitter image | Missing |
| `https://xtrasharp.com.au/og-faq.jpg` | FAQ OG/Twitter image | Missing |

This is not a bug — the URLs are correct and future-proof (once a file is uploaded to that exact path, every social share card and schema reference will resolve automatically with zero code changes). It's flagged here so nobody assumes these images exist.

There is also one intentional in-page placeholder: the Clipper Blade Sharpening page's "Machine-Guided Sharpening" section has a labelled placeholder box (`ClipperMachinePlaceholder`) standing in for a promised photo of the automated clipper blade sharpener, which has been requested twice but never actually attached to a message.

## What's Needed

1. **Logo** — `public/logo.png`. Used in `LocalBusiness` schema. Should be a square or near-square image, at least 112×112px per Google's structured-data image guidelines.
2. **Open Graph images** — one per canonical page, `1200×630px` (the standard OG image ratio, 1.91:1), under 5MB, JPEG or PNG. Each should visually represent that page's service (e.g. a photo of knife sharpening in progress for `og-knife.jpg`).
3. **Clipper machine photo** — for the in-page placeholder on `/clipper-blades`, alt text already specified: "Automated clipper blade sharpening machine used for A5, wide and large-animal blades."

## Recommended Optimisation Pipeline (Once Real Images Exist)

1. **Source format**: accept whatever the business owner supplies (typically phone photos, JPEG).
2. **Resize**: OG images to exactly 1200×630px; in-page photos to the maximum display width needed (this site's content max-width is `max-w-3xl` = 768px, so 1536px wide source images are more than sufficient for 2x displays).
3. **Compress**: run through an image optimizer (e.g. `sharp` at build time, or a one-off manual pass with `squoosh`/`imagemagick`) targeting ≤150KB for OG images, ≤200KB for in-page photos.
4. **Format**: serve WebP or AVIF where practical for in-page images (via Next.js's built-in `<Image>` component, which isn't currently used anywhere in this codebase — every image reference today is a plain URL string in metadata, not an `<Image>` element). OG images should stay JPEG/PNG since social platforms' crawlers have inconsistent WebP support.
5. **Alt text**: every in-page `<img>`/`<Image>` must carry descriptive alt text following the pattern already used for the clipper placeholder (`role="img" aria-label="..."` on the placeholder div stands in for this until a real `<img>` replaces it).

## Adopting `next/image`

None of the site's components currently use Next.js's built-in `<Image>` component — this is worth adopting once real photos exist, since it provides automatic responsive `srcset` generation, lazy loading below the fold, and format negotiation (WebP/AVIF) for free. `next.config.ts` currently has no custom image configuration (no remote patterns, no custom loader), so `next/image` will work out of the box for any image placed in `public/`.
