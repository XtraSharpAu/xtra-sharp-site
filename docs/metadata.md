# Metadata Reference

Full, current metadata table for every page. This is the ground-truth reference — cross-check against actual `page.tsx` files before trusting it if it's been a while since it was regenerated.

## Canonical Pages

| Route | Title | Description | Canonical | OG Type |
|---|---|---|---|---|
| `/` | Sharpening Services — Knives, Scissors, Clipper Blades & More \| Xtra Sharp | Professional sharpening with water-cooled and machine-guided accuracy. Drop-off sharpening in Campbelltown NSW, mail-in sharpening Australia-wide. | `https://xtrasharp.com.au` | website |
| `/knife-sharpening` | Knife Sharpening \| Xtra Sharp Campbelltown NSW | Water-cooled sharpening for kitchen, butcher, large and hunting knives. | `https://xtrasharp.com.au/knife-sharpening` | article |
| `/scissors-sharpening` | Scissors Sharpening \| Xtra Sharp Campbelltown NSW | Professional sharpening for hairdressing, grooming, sewing and household scissors. | `https://xtrasharp.com.au/scissors-sharpening` | article |
| `/clipper-blades` | Clipper Blade Sharpening \| Xtra Sharp Campbelltown NSW | Precision sharpening for A5, wide and large-animal clipper blades. | `https://xtrasharp.com.au/clipper-blades` | article |
| `/garden-tools` | Garden Tools Sharpening \| Xtra Sharp Campbelltown NSW | Water-cooled sharpening for secateurs, hedge shears and axes. | `https://xtrasharp.com.au/garden-tools` | article |
| `/processor-blades` | Processor Blade Sharpening \| Xtra Sharp Campbelltown NSW | Water-cooled sharpening for home and industrial processor blades. | `https://xtrasharp.com.au/processor-blades` | article |
| `/pricing` | Pricing \| Xtra Sharp Campbelltown NSW | Clear, upfront pricing for all sharpening services. | `https://xtrasharp.com.au/pricing` | website |
| `/mail-in` | Mail-In Sharpening \| Xtra Sharp Australia-Wide | Australia-wide sharpening with tracked return postage. | `https://xtrasharp.com.au/mail-in` | article |
| `/service-area` | Service Area \| Xtra Sharp Campbelltown NSW | Drop-off sharpening in Campbelltown NSW. Mail-in available Australia-wide. | `https://xtrasharp.com.au/service-area` | website |
| `/contact` | Contact \| Xtra Sharp Campbelltown NSW | Call, message or book a drop-off appointment. | `https://xtrasharp.com.au/contact` | website |
| `/faq` | FAQ \| Xtra Sharp Campbelltown NSW | Answers to common questions about sharpening, pricing, mail-in service, packing, and turnaround at Xtra Sharp. | `https://xtrasharp.com.au/faq` | website |

Every row above also has a matching `twitter` block (`card: summary_large_image`, same title/description, an `og-<slug>.jpg` image — see `docs/image-handling.md` for image status) and a `twitter:url` emitted via `metadata.other`.

## Legacy Pages

| Route | Title | Description | Canonical | OG/Twitter? |
|---|---|---|---|---|
| `/about` | About \| Xtra Sharp | Xtra Sharp is a professional knife and tool sharpening service based in Woodbine, Campbelltown NSW, serving Western Sydney. | `https://xtrasharp.com.au/about` | No |
| `/services` | Services & Pricing \| Xtra Sharp | Professional knife, scissor, clipper blade and tool sharpening in Campbelltown NSW. See what's included and common pricing for every service. | `https://xtrasharp.com.au/services` | No |
| `/how-it-works` | How It Works \| Xtra Sharp | The step-by-step process behind every Xtra Sharp job — booking, drop-off/mail-in/pick-up options, sharpening, quality checks, and return. | `https://xtrasharp.com.au/how-it-works` | No |
| `/commercial` | Commercial Clients \| Xtra Sharp | Commercial sharpening for schools, grooming salons, restaurants and workshops in Campbelltown, Woodbine and Western Sydney, with batch pricing and scheduled cycles. | `https://xtrasharp.com.au/commercial` | No |
| `/batch` | Batch Sharpening \| Xtra Sharp | Batch sharpening for schools, salons, restaurants, workshops and tradespeople across Campbelltown, Woodbine and Western Sydney, with priority handling and consistent edge quality. | `https://xtrasharp.com.au/batch` | No |
| `/tips` | Sharpening Tips & Advice \| Xtra Sharp | Practical care tips for knives, scissors, clipper blades and workshop tools between professional sharpening visits, from Xtra Sharp in Campbelltown NSW. | `https://xtrasharp.com.au/tips` | No |
| `/gallery` | Gallery \| Xtra Sharp | See examples of Xtra Sharp's knife, scissor, clipper blade and tool sharpening work, plus our Campbelltown NSW workshop setup. | `https://xtrasharp.com.au/gallery` | No |
| `/terms` | Service Terms \| Xtra Sharp | Xtra Sharp's service terms covering appointments, item condition, repairs, turnaround, pricing, pick-up/mail-in, liability, and cancellations. | `https://xtrasharp.com.au/terms` | No |
| `/privacy` | Privacy Policy \| Xtra Sharp | How Xtra Sharp collects, uses, and protects customer information, booking details, and communication. | `https://xtrasharp.com.au/privacy` | No |
| `/thank-you` | Thank You \| Xtra Sharp | Your message to Xtra Sharp has been received. | `https://xtrasharp.com.au/thank-you` | No (also `robots: {index: false}`) |

Legacy pages have title/description/canonical but no `openGraph`/`twitter` blocks — this is a real gap (proposed values are drafted in `docs/seo-pack.md`'s meta table) rather than an oversight to fix silently, since writing new OG copy for these pages means writing new marketing copy, which this project treats as something requiring the site owner's literal sign-off, not something to insert unasked.

## Global Metadata (`layout.tsx`)

Fallback title/description used only when a page doesn't override them (in practice, every page does, so this is effectively unused except as a safety net):

- Title: "Xtra Sharp | Knife & Tool Sharpening in Campbelltown & Macarthur"
- Description: "Professional, appointment-only knife, scissor, clipper blade and tool sharpening in Campbelltown, Western Sydney & the Macarthur region. Drop-off, mail-in and local pick-up available."
