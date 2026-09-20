# Marketing Readiness Audit (Command 25)

## OpenGraph / Twitter metadata audit

Every one of the 21 live routes was checked for `openGraph.title`, `openGraph.description`, `openGraph.images`, `twitter.card`, `twitter.title`, `twitter.description`, and `twitter.images` in its `metadata` export.

**Result: all 21 pages have correct, non-generic values for every field.** Titles and descriptions match the page's on-page `<h1>`/lede content (spot-checked, not just present), `twitter.card` is `summary_large_image` on every page, and every `images` array points to a page-specific `/og-*.jpg` file rather than a shared fallback.

## Broken OG images found and fixed (bonus fix, in scope of this command)

The metadata audit is only half the check — an `og:image` URL that 404s is a broken preview regardless of how correct the surrounding text is. Requesting all 21 `/og-*.jpg` URLs against a local production build turned up **11 pages pointing at image files that didn't exist**:

`og-image.jpg` (Home), `og-knife.jpg`, `og-scissors.jpg`, `og-clipper.jpg`, `og-processor-blades.jpg`, `og-garden-tools.jpg`, `og-contact.jpg`, `og-faq.jpg`, `og-mail-in.jpg`, `og-pricing.jpg`, `og-service-area.jpg`.

This gap was **not new** — it was first flagged in `docs/visual-assets.md` back in Command 8 and repeated in later audits, but never actually fixed across the roughly 15 commands since. It's fixed here because Command 25's own instruction ("Ensure each page has correct og:title, og:description, and og:image") directly requires the images to resolve, not just the metadata fields to be populated with the right filename.

All 11 were generated using the same Pillow-based pipeline already established and documented in Command 8 (cover-crop, gradient overlay, brand wordmark, title text) — no new image process was introduced:

| Image | Basis |
|---|---|
| `og-image.jpg` (Home), `og-knife.jpg`, `og-scissors.jpg`, `og-clipper.jpg`, `og-processor-blades.jpg` | Photo card — cropped from a real, existing site photo (same photo already used elsewhere on that page) |
| `og-garden-tools.jpg`, `og-contact.jpg`, `og-faq.jpg`, `og-mail-in.jpg`, `og-pricing.jpg`, `og-service-area.jpg` | Brand-only dark card (no suitable real photo exists for these pages — same fallback used for equivalent pages in Command 8, e.g. no invented stock photography) |

All 11 confirmed 1200×630px, JPEG, 20–228KB (well under Facebook's ~8MB and Twitter's 5MB limits):

| File | Size |
|---|---|
| og-image.jpg | 120K |
| og-knife.jpg | 156K |
| og-scissors.jpg | 160K |
| og-clipper.jpg | 172K |
| og-processor-blades.jpg | 88K |
| og-garden-tools.jpg | 28K |
| og-contact.jpg | 28K |
| og-faq.jpg | 32K |
| og-mail-in.jpg | 24K |
| og-pricing.jpg | 20K |
| og-service-area.jpg | 24K |

After the fix, all 21 `/og-*.jpg` URLs return HTTP 200 against a local `next build && next start`.

## Facebook Debugger / Twitter Card Validator — unreachable

Command 25 asked to "verify social-share previews render correctly in Facebook Debugger and Twitter Card Validator." Both tools require the site to be live at its real public URL and require reaching `developers.facebook.com` and `cards-dev.twitter.com` — both outside this environment's network allowlist (same restriction documented for every external tool in every prior command: `google.com`, GitHub web UI, etc. are all blocked; only npm/GitHub API/PyPI/Anthropic endpoints are reachable).

**Substituted verification**, all performed locally:

1. Confirmed every `og:image` / `twitter:image` URL resolves (HTTP 200) and is a valid JPEG at the required 1200×630 dimensions (Facebook's recommended minimum; Twitter's `summary_large_image` requires ≥300×157, ideally 2:1 — 1200×630 satisfies both).
2. Confirmed `twitter:card` is `summary_large_image` (not the smaller default `summary`) on all 21 pages, which is required for the large-image layout to render at all.
3. Confirmed no page has a missing or placeholder `og:title`/`og:description` that would make Facebook or Twitter fall back to auto-scraped page text.
4. Visually inspected two of the newly generated images directly (`og-knife.jpg`, `og-mail-in.jpg`) — both render cleanly with legible text and correct branding.

This confirms the previews are **structurally correct** and would very likely render properly. It is **not** the same as an actual Facebook/Twitter render, which additionally depends on their own caching and scraper behavior — that can only be confirmed by the site owner running the real debugger tools once the domain is live and reachable from a normal browser.

## GBP seasonal post templates

Command 25 asked to "create GBP post templates for seasonal updates (e.g., 'Spring Sharpening Special')."

The existing corpus already has **15 ready-to-publish seasonal GBP posts** (`docs/marketing-pack/google-business-posts-seasonal.md` — 10 posts, and `-round2.md` — 5 posts), including one for Spring specifically:

> "Spring's the time to get secateurs, hedge shears and axes sharpened before the growing season ramps up. Water-cooled sharpening from $15." *(CTA: Call Now)*

Writing another one-off "Spring Sharpening Special" post would duplicate that. What's actually missing from the corpus — and what's genuinely useful for the "quarterly maintenance" framing this command sits alongside — is a **reusable template**, so future seasonal posts can be produced consistently without re-deriving the format each time. That's what's provided below, not more one-off posts.

### Reusable GBP seasonal post template

```
[Seasonal — {{Theme}}] {{Hook tied to the season/event}}. {{What to get sharpened + why now}}{{, optional: starting price if one exists on the live Pricing page}}. *CTA: {{Call Now | Book Now | Learn More | Message}}*
```

Rules for filling it in (matching the constraint already established in `promotional-offer-concepts.md`):
- Never invent a discount, "% off," or a dollar figure that isn't already published on `/pricing`. If pricing is referenced, quote the real figure from `src/app/services/page.tsx`.
- Keep it to 1–2 sentences — matches the length of every existing GBP post in the corpus.
- Pick exactly one CTA verb; GBP only supports one action button per post.
- Tie the hook to something time-bound and real (a season, school term, EOFY) — not a manufactured "special" that implies a promotion the business doesn't actually run.

### Applied to the 5 themes not yet used

`docs/INDEX.md` records that 5 of the 20 themes in `seasonal-campaign-concepts.md` still have no post written: Hunting Season Prep, National Tradies Day, Autumn Pruning Campaign, Community Event Tie-In, Small Business Month. Filling the template in for those (rather than duplicating Spring) is the actual net-new content this command produces:

1. **[Seasonal — Hunting Season Prep]** Hunting season coming up? Get your hunting and field knives properly sharpened before you head out — water-cooled sharpening protects the edge and the steel. *CTA: Call Now*
2. **[Seasonal — National Tradies Day]** National Tradies Day — if your trade depends on sharp tools, from garden equipment to blades, this is a good reminder to get them serviced before you need them mid-job. *CTA: Learn More*
3. **[Seasonal — Autumn Pruning Campaign]** Pruning season is here — secateurs and hedge shears cut cleaner and heal faster on plants when the blade is actually sharp. Get yours done before the big autumn tidy-up. *CTA: Call Now*
4. **[Seasonal — Community Event Tie-In]** Supporting a local Campbelltown event? Drop by or book ahead — sharpening for local community groups and stalls can be arranged around event dates. *CTA: Message*
5. **[Seasonal — Small Business Month]** Small Business Month — a reminder to local commercial kitchens, salons and groomers that a scheduled sharpening cycle keeps your team's tools performing without the downtime of a one-off emergency job. *CTA: Learn More*

This brings the seasonal-theme coverage from `seasonal-campaign-concepts.md` to 20/20 used, using the same template going forward for anything new (a genuinely reusable asset, which is what Command 25 actually asked for — "templates," not one more static post).

## Summary

| Item | Status |
|---|---|
| OG/Twitter metadata present & correct, 21/21 pages | ✅ Audited |
| OG image files resolving, 21/21 pages | ✅ Fixed (11 were 404, now generated) |
| Facebook Debugger / Twitter Card Validator live check | ❌ Unreachable (no network egress) — local structural verification substituted, documented above |
| GBP seasonal template | ✅ New reusable template + 5 remaining themes filled in (20/20 theme coverage) |
