# Visual Assets — Method and Limitations

This documents how the 14 images added in "Command 8" were actually produced, since the honest answer matters for how they should be treated going forward.

## How These Were Made

There is no AI image-generation tool available in this environment. Every image below is a real, programmatically composited graphic — a real site photo (or, for two assets, a plain brand-colour card) with a text overlay — built with Pillow (PIL), not synthesized or fabricated imagery. Brand colours (`#C00000` accent, `#1A1A1A` dark, `#F7F7F7`/`#C0C0C0` light) are pulled directly from `tailwind.config.ts`; the typeface is Liberation Sans Bold/Regular (a metric-compatible Arial substitute available in this environment — not a licensed brand font, since none is defined anywhere in the codebase).

## OG/Twitter Images (10) — 1200×630

| File | Background |
|---|---|
| `og-about.jpg` | `knife_sharpening_machine.jpg` |
| `og-batch.jpg` | `knife-gallery-case.jpg` |
| `og-commercial.jpg` | `clipper-sharpening-machine-bright.jpg` |
| `og-gallery.jpg` | `knife-premium-japanese.jpg` |
| `og-how-it-works.jpg` | `clipper-blade-clean-top.jpg` |
| `og-privacy.jpg` | brand-only card (no photo — legal page, deliberately kept neutral) |
| `og-services.jpg` | `knife-gallery-mixed.jpg` |
| `og-terms.jpg` | brand-only card (same reasoning as privacy) |
| `og-thank-you.jpg` | brand-only card (same reasoning) |
| `og-tips.jpg` | `knife_damage_zoom.jpg` |

These are wired into the corresponding page's `openGraph.images` / `twitter.images` — the filenames were already referenced in metadata (added in the prior "Command 7" pass) but the actual files didn't exist until now. No further code change was needed to wire these in; adding the files was the fix.

**Scope note**: these 10 match the same 10 pages fixed for missing OG/Twitter metadata in Command 7. A separate, older gap remains: every service/utility page's `og-*.jpg` reference (knife-sharpening, scissors-sharpening, clipper-blades, garden-tools, processor-blades, contact, faq, mail-in, pricing, service-area) still points at a file that doesn't exist. That gap pre-dates this pack and wasn't in scope for "all 10 pages" here — flagged, not silently expanded.

## Hero Banners (3) — 1600×700

| File | Background | Notes |
|---|---|---|
| `hero-knives.jpg` | `knife-premium-japanese.jpg` | Real photo |
| `hero-scissors.jpg` | `scissors-gallery-collection.jpg` | Real photo |
| `hero-garden-tools.jpg` | none — brand-only card | **No real garden tool photo exists anywhere in this repo.** Rather than fabricate one, this is a clean text/brand-colour card with no equipment imagery. Swap in a real photo once one exists. |

**These are not wired into any page.** No page on the site currently uses a photo-background hero — every hero section, on every page, is plain text on `background`/`surface`. Inserting a large background photo into 3 specific pages would be a real, opinionated visual-design change affecting layout and contrast, not a low-risk metadata fix — and "layout and styling remain unchanged" has been an explicit, repeated instruction in this build. The images exist in `public/` as ready assets; wiring them into live page hero sections needs an explicit decision, not an assumption.

## Composite Brand Image (1) — 1200×1420

`brand-composite-campbelltown.jpg` — a 2×2 grid of real photos (knife, scissors, clipper blade, processor blade) with a bottom brand strip ("Xtra Sharp — Campbelltown NSW"). Built for social use (profile banners, link-in-bio images, etc.) as requested. Not wired into the site itself — it's a standalone social asset, matching what was asked ("for social use").

## Alt Text / Captions

OG and Twitter images don't carry their own alt text in Next.js Metadata (the `images` field takes a URL or `{url, width, height, alt}` object) — none of the 10 pages' existing metadata set an explicit `alt` on their `openGraph.images` entries before this pack, and this pack didn't add one either, for consistency with the established pattern. If per-image alt text is wanted for these specifically, that's a small follow-up, not a gap introduced here.
