# Documentation Pack — Master Index

The `docs/` folder has grown across several large requests into a substantial corpus (SEO, technical, marketing, documentation, content, and business-operations material for Xtra Sharp). This index exists so nothing in it needs to be re-derived from scratch, and so future requests for "more of X" can check here first. It was built in response to a "Content Flood Pack" request that, when mapped against the existing corpus, turned out to overlap almost entirely with what's below — see "How This Index Came About" at the bottom.

## Core Reference

| Doc | Covers |
|---|---|
| `architecture.md` | Stack, rendering model, design tokens, metadata/schema architecture |
| `routes.md` | Every live route, canonical vs. legacy, retired routes |
| `components.md` | Every component, active vs. orphaned |
| `content-style-guide.md` | Voice, boilerplate blocks, formatting rules |
| `seo-guide.md` | Metadata pattern, keyword-to-URL mapping, internal linking rules |
| `image-handling.md` | Current (missing) image state, optimisation plan |
| `deployment.md` | Vercel setup, workflow, checklists, rollback |
| `maintenance.md` | Known issues, routine tasks, how to add a page |
| `backup-restore.md` | Backup/versioning/restore/rollback strategy |
| `metadata.md` | Exact current title/description/canonical per page |
| `schema.md` | Every JSON-LD block, **master pricing table** (single source of truth) |
| `faq.md` | Developer FAQ about the codebase |

## SEO, Accessibility, Performance, Structure

| Doc | Covers |
|---|---|
| `seo-pack.md` | Strategy, keywords, on-page plan, local SEO, GBP, reviews, NAP |
| `accessibility-pack.md` | WCAG checklist, computed contrast ratios, per-page notes |
| `performance-pack.md` | Lighthouse, image/font/script/CSS/build/caching/CDN plans |
| `route-map.md` | Nav/footer structure, internal linking map, redirect gaps |
| `website-audit-pack.md` | Re-scanned findings (stale `/services` pricing, no broken links, etc.) |
| `technical-pack.md` | Sharpening theory cross-refs, angle table, workflow, QC checklist |
| `branding-pack.md` | Voice, tone, colour/layout/CTA/image rules |

## Content — Page Copy & Long-Form

| Doc/Folder | Covers |
|---|---|
| `page-expansions/` | **5 tone variants × all 11 canonical pages** (Home, Knife, Scissors, Clipper Blades, Garden Tools, Processor Blades, Pricing, Mail-In, Service Area, Contact, FAQ) |
| `long-form-content/01–10` | 10 topics × short/medium/long (knife, scissors, clipper, garden, processor safety, mail-in tips, choosing a service, myths, steel types, edge geometry) |
| `long-form-content/11–15` | **New in this pack**: restoring a neglected knife, salon sharpening schedules, clipper blade size selection, seasonal garden tool calendar, commercial processor blade scheduling — real 1500+ word guides on angles not covered by 01–10 |
| `content-expansion-pack.md` | Draft page-section expansions, extra FAQs, troubleshooting (flagged, not published) |
| `customer-education-pack/` | Prepare items / common mistakes / storage / maintain edges / when-to-sharpen — organized by 15-item taxonomy |
| `troubleshooting-pack/` | Per-category troubleshooting tables (processor blades scoped to blade condition only) |

## Marketing

| Doc | Covers |
|---|---|
| `marketing-pack/README.md` | Index of the marketing pack itself |
| `social-media-posts.md` + `-round2.md` + `-round3.md` | **125 social posts total** (50 + 50 + 25) |
| `google-business-posts.md` + `-round2.md` + `-round3.md` | **50 GBP posts total** (20 + 20 + 10) |
| `email-templates.md` + round 2 (in `email-sms-templates-round2.md`) + round 3 (in `email-sms-ads-scripts-round3.md`) | **35 email templates total** (10 + 20 + 5) |
| `sms-templates.md` + round 2 + round 3 | **35 SMS templates total** (10 + 20 + 5) |
| `flyers.md` + `flyers-brochures-round2.md` | **30 flyer concepts total** (10 full + 20 condensed) — **not expanded further in this pack; see note below** |
| `brochures.md` + `flyers-brochures-round2.md` | **30 brochure concepts total** (10 full + 20 condensed) — **not expanded further; see note below** |
| `ad-variations.md` + `-round2.md` + round 3 (in `email-sms-ads-scripts-round3.md`) | **40 ad variations total** (10 + 20 + 10) |
| `seasonal-campaign-concepts.md` | **20 seasonal campaigns — already at the requested count; not duplicated** |
| `promotional-offer-concepts.md` | 20 offer structures (deliberately no invented discount terms — see file) |
| `customer-scripts.md` + business-systems-pack Section 1 + round 3 (in `email-sms-ads-scripts-round3.md`) | **27 customer scripts total** (10 + 12 + 5) |
| `service-descriptions.md`, `faq-expansions.md`, `prep-guides.md` | Directory-listing descriptions, landing-page Q&As, item-prep guides |
| `blog-outlines.md` | **15 outlines** |
| `blog-posts/01–15` | **15 full blog posts** (10 original + 5 new: sharpening vs. replacing, behind-the-scenes, DIY vs. professional, first-time customer guide, Australian weather/blade care) |

## Business Operations

| Doc/Folder | Covers |
|---|---|
| `business-systems-pack/01` | 12 customer service script scenarios |
| `business-systems-pack/02` | 12 operational workflows |
| `business-systems-pack/03` | 12 checklists |
| `business-systems-pack/04` | 9 policies — **6 grounded in the real live `/terms` page, 3 (warranty, refund, standalone communication) drafted as frameworks with real terms left for owner decision** |
| `business-systems-pack/05` | 10 operational message templates |
| `business-systems-pack/06` | 9 training guides |
| `business-systems-pack/07` | Growth systems (retention, referral, loyalty, reviews, GBP cadence, seasonal execution, upsell/cross-sell) |
| `business-systems-pack/08` | 7 emergency procedures |
| `content-expansion-pack.md` | (also listed above) |
| `future-development-pack.md` | Ideas for new pages/services/content/marketing/automation/retention/growth |

## How This Index Came About

A request for a "Content Flood Pack" asked for the same nine categories above, re-labelled with new section numbers, almost entirely duplicating work already done in two prior large requests (verified by mapping every requested item against the existing corpus before building anything new). Rather than regenerate near-identical content under new filenames — which would have added volume without adding value, and made the corpus harder to navigate rather than easier — the user confirmed: skip the duplicates, add only genuinely new material, and build this index. The five new long-form guides (`long-form-content/11–15`), five new blog posts (`blog-posts/11–15`), and the modest "round 3" top-ups to the marketing banks above are the actual new content from that request; everything else in the Content Flood Pack request was already covered by what's listed above it in this index.

**Not expanded further, and why**: flyers and brochures already have 30 concepts each across two rounds — a third round would mean either restating the same 5 services and general themes a third time, or inventing scenarios (new services, new audiences) that don't exist. Seasonal promotions already sit at exactly the requested count of 20. If a genuinely new angle for any of these emerges (a real new service, a real new audience segment), add to the relevant file rather than starting a fourth round file.
