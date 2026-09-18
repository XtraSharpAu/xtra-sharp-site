# Maintenance

## Known Issues & Technical Debt

These are real, currently-open gaps in the live site. Listed here so they aren't rediscovered from scratch or silently forgotten.

### 1. Contact form does not send email server-side

`src/components/ContactForm.tsx` is a client component that builds a `mailto:phil@xtrasharp.com.au` link from the entered name/email/message and navigates the browser to it. This **opens the visitor's own email client** with the message pre-filled — it does not deliver the message on its own. If the visitor has no configured email client (common on shared/work computers, or many mobile browsers), the form silently fails to produce anything.

This replaced an earlier, worse version of the same component that called `router.push("/thank-you")` on submit without sending the data anywhere at all — that version would have shown users a "message received" confirmation while actually discarding their enquiry.

**Recommended fix**: wire up a real form backend (a Next.js Route Handler POSTing to a transactional email API such as Resend, or a third-party form service like Formspree) so submissions are delivered without depending on the visitor's own mail client. This requires a real API key stored as a Vercel environment variable (see `docs/deployment.md`) — nothing here has been implemented yet because no credentials for such a service exist in this project.

### 2. Legacy pages have stale pricing

`/services`, `/commercial`, and `/batch` were built in an earlier iteration of the site and still reference an older category/pricing structure that does not match the current master pricing (Knives/Scissors/Clipper Blades/Garden Tools/Processor Blades — see `docs/schema.md`). They are not linked from the main nav, but they are still live, indexable, and linked from the footer/other legacy pages in places. Treat as a backlog item: either rebuild them to the current pattern or noindex + redirect them.

### 3. Sixteen orphaned components

See `docs/components.md` for the full list. They cost nothing at runtime (unused code isn't shipped if unimported... but note Next.js doesn't tree-shake unused *page-level* components out of the repo, only unused imports — these files simply sit unreferenced). They're a maintenance hazard because someone could import one assuming it reflects current site structure when it doesn't. Recommended: delete in a dedicated cleanup PR after confirming none are needed for the legacy-page rebuild in item #2.

### 4. Missing images

See `docs/image-handling.md`. Every OG image and the business logo referenced in metadata/schema point to files that don't exist in `public/`.

### 5. `globals.css` has a load-bearing unlayered rule

```css
body {
  background-color: #FFFFFF;
  color: #1A1A1A;
}
```

This is a plain, unlayered CSS rule outside of Tailwind's `@layer` system. **Do not remove it without understanding why it's there**: unlayered CSS always wins over `@layer`-wrapped Tailwind utility classes regardless of specificity. This exact rule (with different color values) was the root cause of a real production bug where the site's dark theme silently failed to render — the body's Tailwind utility classes (`bg-background text-text` on `<body>` in `layout.tsx`) were being correctly applied by React but silently overridden by this rule every time, because it lived outside `@layer`. If you ever change the site's theme colors, this file's hard-coded hex values must be updated in lockstep with `tailwind.config.ts`'s `background`/`text` tokens, or the two will silently diverge again.

## Routine Maintenance Tasks

| Task | Frequency | How |
|---|---|---|
| Update `lastmod` dates in `public/sitemap.xml` | Whenever a page's content changes | Manual edit — there is no automated sitemap generator in this project |
| Review pricing across all pages for consistency | After any pricing change | Grep for `$` and price patterns across `src/app/**/page.tsx`; cross-check against `docs/schema.md`'s master pricing table |
| Check for broken internal links | Quarterly, or after nav changes | `grep -rn "href=\"/" src/` and manually confirm each target route still exists under `src/app/` |
| Renew/verify domain + hosting | Annually | Vercel dashboard, domain registrar |
| Dependency updates | Quarterly | `npm outdated`, update `next`/`react`/`tailwindcss` carefully — this project pins to Next.js 16, a version with its own breaking-changes documentation the project's `AGENTS.md` explicitly requires reading before making framework-level changes |

## Adding a New Service Page

Follow this checklist to keep a new page consistent with the rest of the site:

1. Create `src/app/<route>/page.tsx`.
2. Export `metadata` following the exact pattern in `docs/seo-guide.md`.
3. Add `Service` schema (see `docs/schema.md` for the template) and `Breadcrumbs` (see `src/components/Breadcrumbs.tsx`).
4. Follow the section order in `docs/content-style-guide.md` exactly (hero → process → pricing → drop-off → mail-in → turnaround → notes → CTA), reusing the boilerplate blocks verbatim.
5. Add the route to `src/components/Header.tsx`'s `navLinks`.
6. Add the route to `public/sitemap.xml`.
7. Add the route to `docs/routes.md`'s canonical table.
8. Run the full verification workflow in `docs/deployment.md` before pushing.
