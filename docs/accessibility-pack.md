# Accessibility Pack (WCAG)

## Colour Contrast — Actual Computed Ratios

These are real WCAG 2.1 relative-luminance contrast calculations against this site's actual design tokens (`tailwind.config.ts`), not estimates.

| Foreground | Background | Ratio | WCAG AA (4.5:1 normal / 3:1 large) | WCAG AAA (7:1 normal / 4.5:1 large) |
|---|---|---|---|---|
| `text` #1A1A1A | `background` #FFFFFF | ~17.4:1 | Pass | Pass |
| `text/80` (80% opacity) | `background` #FFFFFF | ~9.1:1 | Pass | Pass |
| `text/70` (70% opacity) | `background` #FFFFFF | ~6.4:1 | Pass (normal text) | Fail (normal text, needs 7:1) — borderline |
| White | `ctaRed`/`accent` #C00000 (buttons) | ~6.5:1 | Pass | Fail (normal text, needs 7:1) — borderline |
| `accent` #C00000 (links) | `background` #FFFFFF | ~6.5:1 | Pass | Fail (normal text) — borderline |

**Finding**: every current text/background combination on the site passes WCAG AA. `text/70` (used for hero subtitles and secondary body copy) and the red-on-white / white-on-red combination (used for links and CTA buttons) sit just under the stricter AAA threshold. This is not a compliance failure — AA is the standard legal/practical target — but if AAA is ever a goal, the fix is either darkening `#C00000` slightly or avoiding `text-text/70` for body text that isn't purely decorative (headings and CTAs are large text, which has a lower 4.5:1 AAA threshold and already passes).

**Not yet checked**: `border-metallic/40` (used extensively for section dividers and card borders). Borders that convey structure (not purely decorative) should meet the 3:1 non-text contrast minimum (WCAG 2.1 SC 1.4.11) — this should be measured against both `background` (#FFFFFF) and `surface` (#F7F7F7) before relying on it to convey information rather than pure decoration. Current usage appears to be decorative (visual section separation, not the only cue to structure — headings already convey section boundaries), so this is a low-priority check, not a known failure.

## WCAG Compliance Checklist

### Perceivable
- [x] Text contrast meets AA site-wide (see table above)
- [ ] All meaningful images have descriptive alt text — **currently N/A, no real images exist yet** (see `docs/image-handling.md`); the one image-shaped element (`ClipperMachinePlaceholder`) correctly uses `role="img"` + `aria-label` in lieu of a real `<img alt>`
- [x] No content relies on colour alone to convey meaning (checkmarks in `Checklist.tsx` pair a ✔ glyph with text, not colour alone)
- [x] Page has a single, correctly-nested heading hierarchy (H1 → H2 → H3, never skipped — verified in `docs/content-style-guide.md`)
- [ ] Not yet verified: `lang="en"` is set on `<html>` in `layout.tsx` — confirmed present
- [x] Responsive layout reflows without horizontal scrolling at mobile widths (Tailwind responsive classes throughout, `max-w-*` containers)

### Operable
- [x] All interactive elements are real `<a>`/`<button>`/`<input>` elements, not `<div onClick>` — verified across `Header`, `Footer`, `ContactForm`, and every CTA button
- [x] `tel:` links are real anchors, keyboard-focusable and activatable by default
- [ ] **Gap**: no visible custom `:focus` styling has been added anywhere — the site relies entirely on browser-default focus rings. This should be explicitly tested (Tab through every page) rather than assumed sufficient, especially for the red CTA buttons where a default blue focus ring may have poor contrast against `ctaRed`
- [x] No keyboard traps — no modal dialogs or custom widgets exist that could trap focus
- [x] No auto-playing media, no timing-dependent content

### Understandable
- [x] Consistent navigation across all pages (same `Header`/`Footer` on every route)
- [x] Form (`ContactForm`) has proper `<label htmlFor>` associations for every input — verified in the component source
- [x] Form inputs use appropriate `type` attributes (`type="email"` for email, enabling browser-level validation and better mobile keyboards)
- [ ] **Gap**: `ContactForm`'s behaviour (opening an email client rather than submitting silently) is not explained near the form itself beyond the one line of intro copy — consider whether that's sufficiently clear to all users, including screen-reader users who may not expect a page navigation away from the form on submit

### Robust
- [x] Valid semantic HTML throughout (`<header>`, `<footer>`, `<nav>`, `<section>`, `<h1>`–`<h3>`, `<ul>`/`<ol>`/`<li>`)
- [x] JSON-LD scripts use `type="application/ld+json"` correctly and don't interfere with document structure or accessibility tree
- [ ] Not yet run through an automated tool (axe DevTools, WAVE, or Lighthouse's Accessibility audit) — this pack is a manual/code-level review; an automated pass is a recommended next step and would catch anything this review missed

## Per-Page Accessibility Notes

- **Header nav**: 11 links plus phone number plus Call Now button, all in a single `<nav>`. Fine for AA but worth a manual keyboard-only pass to confirm tab order is logical (logo → nav links → phone → Call Now).
- **Pricing tables** (all service pages + `/pricing`): implemented as `<div>` rows with flexbox, not a semantic `<table>`. This is a legitimate choice for two-column name/price data (a `<table>` isn't strictly required for tabular-*looking* data that's really just a repeated list), but screen readers won't announce it as tabular data with row/column context — acceptable since each row is self-contained (`item name` + `price`) and reads sensibly linearly.
- **Contact form**: see "Understandable" gap above.
- **404/500 pages**: both use real headings and standard link/button elements — no special accessibility concerns.

## Keyboard Navigation Plan

1. **Audit tab order** on every page type (home, service page, form page) — confirm it follows visual reading order (header → hero → each section top-to-bottom → footer).
2. **Add visible custom focus styles** for the red CTA buttons and nav links (a `focus-visible:ring-2 focus-visible:ring-offset-2` Tailwind utility pattern would work well against both white and red backgrounds) — currently relying on browser defaults, which may have poor contrast against `bg-ctaRed`.
3. **Confirm the contact form is fully keyboard-operable**: Tab through Name → Email → Message → Send Message button, Enter/Space activates submit — should already work given standard `<form>`/`<input>`/`<button>` semantics, but verify after any future redesign of that component.
4. **Skip-to-content link**: not currently present. For a page with an 11-item nav before the main content, a "Skip to main content" link (visually hidden until focused) would meaningfully help keyboard/screen-reader users on every single page load. Recommended addition.

## Screen Reader Optimisation Plan

1. Add the skip-link from above (highest-impact single change).
2. Confirm `<main>` (currently used in `layout.tsx` wrapping `{children}`) is present exactly once per page — verified: yes, `layout.tsx` wraps `{children}` in a single `<main className="flex-1">`.
3. Ensure the `JsonLd` `<script>` tags (present on 8+ pages) are correctly ignored by screen readers — they are, by default, since `<script>` content is never exposed to the accessibility tree.
4. Once real images are added (`docs/image-handling.md`), every one must get alt text before merging — make this a checklist item in the PR/change workflow (`docs/deployment.md`), not an afterthought.
5. Test the actual customer journey (find a service → check price → call or fill in contact form) with a screen reader (VoiceOver or NVDA) end-to-end at least once — code-level review catches structural issues but not real usability friction.
