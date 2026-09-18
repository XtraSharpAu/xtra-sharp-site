# Components

`src/components/` contains every shared component. This list is generated from an actual import-usage scan (`grep -rl "from \"@/components/<Name>\"" src/app`), not assumed — it's accurate as of this document's last update but will drift as pages change, so re-run the scan before trusting it blindly.

## Active Components (used by at least one current page)

| Component | Used by | Purpose |
|---|---|---|
| `Header.tsx` | `layout.tsx` | Site-wide nav bar: logo, `navLinks` array, phone number, Call Now button |
| `Footer.tsx` | `layout.tsx` | Site-wide footer: business info, phone/email/location/service area, Terms/Privacy links, copyright |
| `JsonLd.tsx` | 8 pages | Generic `<script type="application/ld+json">` renderer — takes any `data: Record<string, unknown>` and serializes it. This is the single source for every schema block in the site (LocalBusiness, Service ×5, FAQPage, ContactPage, BreadcrumbList ×10). |
| `Breadcrumbs.tsx` | 10 pages | Builds `BreadcrumbList` JSON-LD from an `items: {name, url}[]` array and renders it via `JsonLd`. |
| `Checklist.tsx` | 16 pages | Vertical list with accent-colored checkmarks. Used for "Important Notes," "Why Choose Us," item lists, etc. |
| `CommercialSegment.tsx` | 2 pages (Home, and historically Knife) | Card with icon + title + "We sharpen:" item list. Used for the Home page's service overview grid. |
| `PillList.tsx` | 1 page (Service Area) | Wrapped row of rounded pill tags — used for the Macarthur suburb list. |
| `ContactForm.tsx` | 1 page (Contact) | Client component. Controlled name/email/message inputs; on submit, builds a `mailto:` link and navigates to it. **Does not send email itself** — see `docs/maintenance.md`. |
| Per-page hero/section components (`AboutHero`, `BatchHero`, `CommercialHero`, `GalleryHero`, `GalleryCategory`, `HowItWorksHero`, `OptionCards`, `PolicySections`, `PrivacyHero`, `ProcessStep`, `ServiceDetail`, `ServiceOptions`, `ServicesContact`, `ServicesHero`, `TermsHero`, `ThankYouHero`, `TipsHero`, `Turnaround`) | 1 page each | One-off components built for a single legacy page (see `docs/routes.md` for which pages are legacy). Not shared, not reused — effectively part of that page's own markup, split out for readability. |

## Orphaned Components (not imported by any current page)

These exist in `src/components/` but are **not referenced by any live route**. They're leftovers from earlier build iterations of pages that were later rewritten with different markup. They are dead code today — keeping them doesn't break anything, but they should not be assumed to reflect current site structure, and a future cleanup pass should either delete them or explicitly re-adopt them.

- `About.tsx`
- `Contact.tsx`
- `ContactHero.tsx`
- `ContactMap.tsx`
- `ContactMethods.tsx`
- `FaqAccordion.tsx`
- `FaqHero.tsx`
- `Hero.tsx`
- `HowItWorks.tsx`
- `NeedAQuote.tsx`
- `PricingCategory.tsx`
- `PricingHero.tsx`
- `ServiceArea.tsx` (note: distinct from the live `/service-area` *route*, which does not use this component)
- `ServiceAreaHero.tsx`
- `Services.tsx`
- `WhyChooseUs.tsx`

**Do not import from this list without first checking whether the component's content (copy, pricing, links) is still accurate** — several of these were written against pricing and route structures that have since changed.

## Component Conventions

- **Props are typed inline** with a `type <Component>Props = { ... }` above the component, not in a separate types file.
- **No prop-drilling of theme values** — components reference Tailwind tokens directly via class names (`bg-ctaRed`, `text-accent`) rather than receiving colors as props.
- **Server Components by default.** Only add `"use client"` when a component genuinely needs browser APIs, state, or event handlers that can't be expressed as a plain anchor/form action.
- **No component-level data fetching.** All content is passed in as literal arrays/objects defined at module scope in the page file (e.g. `const pricing = [...]`), not fetched from an API — there is no API to fetch from.
