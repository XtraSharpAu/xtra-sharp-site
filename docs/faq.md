# Project FAQ (For Developers & Maintainers)

This is a FAQ about *working on this codebase* — not to be confused with the customer-facing FAQ content on the live `/faq` page (that content lives in `src/app/faq/page.tsx` and is documented in `docs/routes.md`/`docs/schema.md`).

## "Where do I change the site's colors?"

`tailwind.config.ts` → the `colors` block. Every component references these tokens (`background`, `surface`, `text`, `metallic`, `accent`, `ctaRed`) via Tailwind classes, so changing the hex values there changes the whole site. **Also update `src/styles/globals.css`'s hard-coded `body { background-color; color }` rule to match** — see `docs/maintenance.md` item #5 for why this matters.

## "Why does the contact form open my email client instead of just sending the message?"

Because there's no backend or email-sending service configured in this project. See `docs/maintenance.md` item #1 for the full explanation and the recommended fix.

## "Why are there two different Scissors-related routes I've seen mentioned?"

`/scissors` was an early nav link that pointed at a page that was never built. The actual page was built at `/scissors-sharpening`. The nav has since been corrected to point at `/scissors-sharpening`. See `docs/routes.md`'s "Retired Routes" section.

## "Why does `/mail-in-sharpening` 404 now?"

It was renamed to `/mail-in` during the full site rebuild and the old route was deleted (not redirected — there is no redirect configuration in this project; see the gap noted in `docs/seo-pack.md`'s technical recommendations for adding a 301 redirect if the old URL has external backlinks or is bookmarked).

## "Can I just add a new page by copying an existing one?"

Yes, and it's the recommended approach — copy one of the 5 canonical service pages (they're all structurally identical) rather than one of the legacy pages. Follow the checklist in `docs/maintenance.md`'s "Adding a New Service Page" section.

## "Why don't the legacy pages (`/services`, `/commercial`, `/batch`, etc.) match the current pricing?"

They predate the pricing/structure standardization and haven't been rebuilt yet. This is tracked as a known gap in `docs/maintenance.md` item #2, not something that's been silently ignored.

## "Is there a CMS I should be using instead of editing code?"

No. See `docs/architecture.md`'s "What This Architecture Is Not" section — content lives in code by design, because every page's copy has been supplied as exact, literal text by the site owner and verified against the rendered HTML before every push. A CMS would introduce a second source of truth that could drift from what's actually been approved.

## "Why do so many components in `src/components/` seem unused?"

They are — see `docs/components.md`'s "Orphaned Components" list. They're leftovers from earlier page-rebuild iterations. Don't assume any of them reflect current site content or structure.

## "How do I verify a change actually looks right before pushing?"

`docs/deployment.md`'s "Standard Change Workflow" — build locally, serve it with `next start`, `curl` the rendered HTML to confirm literal copy/metadata, and take a Playwright screenshot to confirm the visual theme. Never push based on reading the source code alone.

## "Where's the single source of truth for pricing?"

`docs/schema.md`'s "Master Pricing Table." If you're updating a price, update it there first, then propagate to every page in `docs/routes.md`'s canonical table plus any legacy page that also mentions it (flagging drift per `docs/maintenance.md` item #2).

## "Does this site track analytics or have any tracking scripts?"

No. There is no Google Analytics, Meta Pixel, or any other tracking/analytics script anywhere in the codebase as of this document's last update. If one is added, it should be documented here and disclosed in `/privacy`.
