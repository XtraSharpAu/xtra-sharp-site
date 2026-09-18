# Branding Pack

Consolidates and extends `docs/content-style-guide.md` into a full brand reference. Where the two overlap, this is the summary view; `content-style-guide.md` has the fuller detail on voice and boilerplate blocks.

## Brand Voice Guide

Xtra Sharp is run by a single named operator (Phil), not a faceless company — the voice is first-person, direct, and trade-focused. It sounds like a skilled tradesperson explaining something plainly to a customer, not a marketing department. Core voice traits:

- **Factual over promotional** — claims are concrete and verifiable ("13+ years sharpening experience," "Mirror Cut® accredited") rather than vague superlatives ("the best," "amazing results").
- **Plain language** — no jargon without explanation; where a technical term is used (bevel, convex, temper), it's explained in the same breath.
- **Confident, not boastful** — states what's done and how, without needing to oversell it.
- **Personally accountable** — "I'll confirm..." "I sharpen..." — the person doing the work is the person talking to you.

## Tone Guide

Baseline tone sits closest to the "Friendly" variant documented in `docs/page-expansions/`'s tone spectrum — warm but efficient, never overly casual or gimmicky. Adjust up toward "Professional" for B2B/commercial-facing content (see `docs/marketing-pack/email-templates.md`'s commercial outreach template) and down toward "Short & Direct" for SMS and ad headlines, but never cross into slang, hype language, or humour that risks undermining trust in a trade service.

## Writing Rules

1. Never invent a claim, statistic, or business fact not already established elsewhere in the site (see `docs/content-style-guide.md`'s "No Invented Copy" rule — this is the single most important rule in this entire pack).
2. Reuse the established boilerplate blocks verbatim (drop-off, mail-in, turnaround, important notes, closing CTA — see `docs/content-style-guide.md`) rather than rewording them per page.
3. Phone number always written `0412 974 277` in visible copy.
4. Prices always `$` prefixed, whole dollars with no decimals (`$15` not `$15.00`); ranges use an en dash (`$10–$15`).
5. Location language: "Woodbine, listed publicly as Campbelltown NSW" on first meaningful mention per page.
6. No fixed business hours anywhere — "by appointment" only, consistently.
7. First person singular ("I"), not corporate "we," unless a specific piece of content (e.g. addressing a large commercial client) has been deliberately written otherwise.

## Colour Usage Rules

From `tailwind.config.ts`, the single source of truth:

| Token | Hex | Usage |
|---|---|---|
| `background` | `#FFFFFF` | Page background |
| `surface` | `#F7F7F7` | Alternating section backgrounds, subtle card fills |
| `text` | `#1A1A1A` | Body text, headings |
| `metallic` | `#C0C0C0` | Borders/dividers (used at reduced opacity, e.g. `border-metallic/40`) |
| `accent` / `ctaRed` | `#C00000` | Links, small accent text, and all CTA buttons (same value, two token names) |

**Rules:**
- Never introduce a new colour outside this token set without updating `tailwind.config.ts` first — no inline hex values in components.
- Red (`accent`/`ctaRed`) is reserved for calls-to-action and links — don't use it for large decorative blocks or body text, which keeps it meaningful when it does appear.
- Maintain the computed contrast ratios documented in `docs/accessibility-pack.md` — any colour change should be re-checked against that table before shipping.

## Layout Rules

- **Section rhythm**: alternating `background`/`surface` section backgrounds down the page, separated by a `border-t border-metallic/40` — this is the site's core visual rhythm, present on every page.
- **Max-width containers**: `max-w-2xl` for text-focused sections, `max-w-3xl` for slightly wider body copy, `max-w-5xl` for grid layouts (service cards) — don't introduce new arbitrary widths.
- **Hero pattern**: centered text, H1 → subtitle → CTA button, generous vertical padding (`py-20 sm:py-28`).
- **Pricing card pattern**: bordered card, `background` fill, item name left / price right, divided rows — used identically across every service page and `/pricing`.

## CTA Rules

- Primary CTA copy is always **"Call Now — 0412 974 277"** — don't vary this wording page to page (a rare deliberate exception to "vary tone" — the CTA itself is a fixed, recognisable pattern).
- Primary CTA is a red pill button (`bg-ctaRed`, `rounded-full`, white text) — appears at the top of the hero and again at the bottom of every page.
- Secondary CTAs (e.g. "View Full Pricing →") use `text-accent` with an arrow, not a button — this visually distinguishes primary action (call) from secondary navigation (browse more).
- Every page ends with the same closing pattern: large CTA button + one-line service-area subtext ("Drop-off sharpening in Campbelltown NSW. Mail-in sharpening Australia-wide.").

## Image Style Rules

*(Forward-looking — see `docs/image-handling.md` for current image status.)*

- Real, unstaged photography of actual work/equipment — not stock photography of generic blades or unrelated kitchens, which would misrepresent the business.
- OG images: 1200×630px, subject clearly visible even at small social-preview sizes.
- In-page photos: centered, rounded corners, subtle shadow — matching the pattern already established for the `ClipperMachinePlaceholder` component's styling, so a real photo can drop into the same layout without redesign.
- Alt text follows the pattern in `docs/seo-pack.md` Section 8 — descriptive, specific, never keyword-stuffed.
