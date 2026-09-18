# Content Style Guide

This guide captures the conventions that have been consistently applied across every page rebuilt to the current canonical structure. Follow it when writing new copy or briefing content for this site.

## Core Rule: No Invented Copy

Every page on this site has been built from literal, exact copy supplied by the business owner — headings, subheadings, body text, prices, and notes are inserted **as given**, not paraphrased, expanded, or "improved." This is a hard rule specific to this project, not a general writing preference:

- Never invent a statistic, claim, or business fact not already established elsewhere on the site (years in business, certifications, service details).
- Never invent pricing. Prices come from one place: the master pricing list (see `docs/schema.md` and `docs/seo-guide.md` for where it's mirrored).
- If a section calls for content that hasn't been supplied (e.g. a missing image, an unwritten section), leave a clearly-labelled placeholder and flag it — don't fill the gap with plausible-sounding invented text.
- Business hours: the site has no fixed hours anywhere. Use "By appointment" consistently rather than inventing specific opening hours.

## Voice & Tone

- First person ("I sharpen...", "I'll confirm...") — the business is run by a single named operator (Phil), not a faceless company. Keep this consistent; don't switch to "we" without instruction.
- Plain, factual, trade-focused language. No hype adjectives ("amazing," "best-in-class"). Claims are concrete and verifiable ("13+ years sharpening experience," "Mirror Cut® accredited," "Flamin' Sharp licensee").
- Short sentences. Most body paragraphs on service pages are 2–3 sentences.

## Standard Section Pattern (Service Pages)

Every one of the 5 core service pages (Knife, Scissors, Clipper Blades, Garden Tools, Processor Blades) follows the same section order. New service pages should match it exactly:

1. **Hero** — H1 title, one-sentence subtitle, "Call Now — 0412 974 277" button
2. **Process intro** — "Water-Cooled Sharpening" or "Machine-Guided Sharpening" (whichever applies), 2–3 sentence explanation
3. **Pricing** — bordered price-list card, item name left / price right (accent-colored, bold)
4. **Drop-Off Sharpening (Campbelltown NSW)** — the same boilerplate paragraph every time (see below)
5. **Mail-In Sharpening (Australia-Wide)** — two-paragraph boilerplate (see below)
6. **Turnaround Time** — same-day/next-day + 1–2 business day mail-in line
7. **Important Notes** — the same 4-item checklist every time
8. **Closing CTA** — large Call Now button + service-area subtext

## Reusable Boilerplate Blocks

These exact strings are repeated verbatim across every service page. Do not paraphrase them — copy them exactly when building a new page:

**Drop-off block:**
> "Drop-off sharpening is available by appointment. I sharpen from my dedicated sharpening area in Woodbine, listed publicly as Campbelltown NSW."

**Mail-in block (paragraph 1):**
> "You can post your [items] using a prepaid Australia Post satchel. Return postage is sent with tracking."

**Mail-in block (paragraph 2):**
> "Please contact me first before sending anything. I'll confirm pricing, turnaround time and the correct satchel size."

**Turnaround block:**
> "Most [items] are sharpened same day or next day. Mail-in sharpening is usually completed within 1–2 business days after arrival."

**Important Notes (identical 4 items on every page):**
- No mobile sharpening
- No on-site sharpening
- Drop-off only
- Mail-in available Australia-wide

**Closing CTA subtext (identical on every page):**
> "Drop-off sharpening in Campbelltown NSW. Mail-in sharpening Australia-wide."

## Location Language

Always use **"Woodbine, listed publicly as Campbelltown NSW"** when referring to the actual sharpening location for the first time on a page — this reflects that Woodbine is the real suburb, but Campbelltown NSW is what's shown publicly (in metadata, schema, and marketing). Don't drop the "listed publicly as Campbelltown NSW" framing when it's relevant to the sentence.

## Numbers & Formatting

- Phone number is always written `0412 974 277` (spaced in three groups), never `0412974277` in visible copy (the `tel:` link href omits spaces per the `tel:` URI spec).
- Prices are always `$` prefixed, no decimals for whole dollars (`$15`, not `$15.00`).
- Price ranges use an en dash: `$10–$15`, not a hyphen or "to".
- Turnaround windows use an en dash: `1–2 business days`.
- "Mdash" (`&mdash;`) is used for parenthetical breaks in body copy; en dash (`–`) is reserved for numeric ranges.

## Headings

- H1: page title only, one per page, in the hero section.
- H2: every major section heading.
- H3: only used for sub-groupings within a section (e.g. "Free School Pick-Up" / "Commercial Pick-Up" under a shared "Pick-Up Options" H2 on some legacy pages).
- Never skip a heading level.
