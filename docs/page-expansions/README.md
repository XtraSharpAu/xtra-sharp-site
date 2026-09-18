# Multi-Version Page Expansions

## Scope Decision

Each of the 11 pages gets 5 tone variants (Professional, Friendly, Highly Detailed, Short & Direct, SEO-Heavy) covering the **hero headline/subtitle, intro paragraph, and closing CTA line** — the narrative copy that actually changes with tone.

**Pricing tables, item lists, and factual notes ("No mobile sharpening," turnaround windows, etc.) are not re-derived 5 times per page.** Those are single-source-of-truth facts (`docs/schema.md`'s master pricing table), not copy that has a "tone" — rewriting the same price list 55 times would multiply the risk of a figure drifting from the master table without adding any real value. Every variant below references the real current facts; only the phrasing, warmth, and density of the surrounding copy changes.

**None of this is live.** These are draft alternates for review — the live site has exactly one version of each page, matching `docs/content-style-guide.md`'s established voice (closest to "Friendly" below, in practice). Swapping in a different tone variant on the live site is a real content decision for the site owner to make, not something to do unilaterally.

## Files

One file per page: `home.md`, `knife-sharpening.md`, `scissors-sharpening.md`, `clipper-blades.md`, `garden-tools.md`, `processor-blades.md`, `pricing.md`, `mail-in.md`, `service-area.md`, `contact.md`, `faq.md`.
