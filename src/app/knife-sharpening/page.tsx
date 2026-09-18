import type { Metadata } from "next";
import CommercialSegment from "@/components/CommercialSegment";
import Checklist from "@/components/Checklist";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Knife Sharpening Campbelltown NSW | Xtra Sharp",
  description:
    "Water-cooled sharpening for kitchen, butcher, large and hunting knives. Clean, accurate edges with fast turnaround.",
  openGraph: {
    title: "Knife Sharpening Campbelltown NSW | Xtra Sharp",
    description:
      "Water-cooled sharpening for kitchen, butcher, large and hunting knives. Clean, accurate edges with fast turnaround.",
    url: "https://xtrasharp.com.au/knife-sharpening",
    type: "article",
    images: ["https://xtrasharp.com.au/og-knife.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Knife Sharpening Campbelltown NSW | Xtra Sharp",
    description:
      "Water-cooled sharpening for kitchen, butcher, large and hunting knives. Clean, accurate edges with fast turnaround.",
    images: ["https://xtrasharp.com.au/og-knife.jpg"],
  },
  other: {
    "twitter:url": "https://xtrasharp.com.au/knife-sharpening",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Sharpening",
  provider: {
    "@type": "LocalBusiness",
    name: "Xtra Sharp",
  },
  areaServed: "Campbelltown NSW, Macarthur region",
  offers: {
    "@type": "Offer",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "AUD",
      minPrice: 10,
      maxPrice: 80,
    },
  },
};

const knifeTypes = [
  {
    icon: "🍳",
    title: "Kitchen & Butcher Knives",
    items: [
      "Chef's knives",
      "Paring knives",
      "Utility knives",
      "Cleavers",
      "Carving knives",
      "Boning knives",
      "Fillet knives",
      "Butcher knives",
      "Large knives",
    ],
  },
  {
    icon: "🏕️",
    title: "Hunting & Outdoor Knives",
    items: [
      "Hunting knives",
      "Field knives",
      "Folding knives",
      "Camping knives",
    ],
  },
  {
    icon: "🪓",
    title: "Axes & Heavy Blades",
    items: ["Tomahawks", "Axes", "Hatchets"],
  },
];

const sharpeningMethod = [
  "Water-cooled grinding (prevents heat damage)",
  "Machine-guided sharpening with controlled hand input",
  "Correct angle restoration",
  "Final cutting test",
];

const pricing = [
  { name: "Standard knives", price: "$10" },
  { name: "Butcher knives", price: "$10" },
  { name: "Large knives", price: "$15" },
  { name: "Hunting knives", price: "$10–$15 (depending on condition)" },
  { name: "Tomahawk", price: "$15" },
  { name: "Axe", price: "$20–$25 (depending on condition)" },
];

const whyChooseUs = [
  "13+ years sharpening experience",
  "Mirror Cut® accredited",
  "Flamin' Sharp licensee",
  "Water-cooled sharpening for knives and heavy blades",
  "Machine-guided sharpening with controlled hand input",
  "Fast turnaround",
  "Trusted by schools, restaurants, butchers, and local businesses",
];

export default function KnifeSharpeningPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />

      <section className="flex flex-col items-center gap-4 px-6 py-20 text-center sm:py-28">
        <h1 className="text-4xl font-bold text-text sm:text-5xl">
          Professional Knife Sharpening &mdash; Campbelltown NSW
        </h1>
        <p className="max-w-2xl text-lg text-text/70">
          Water-cooled sharpening for kitchen knives, butcher knives, hunting
          knives, large knives, tomahawks, and axes.
        </p>
        <a
          href="tel:0412974277"
          className="mt-4 inline-block rounded-full bg-ctaRed px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-ctaRed/90"
        >
          Call Now — 0412 974 277
        </a>
      </section>

      <section className="border-t border-metallic/40 px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-text/80">
            Knives require accurate angles and a controlled sharpening
            process. At Xtra Sharp, all knives and heavy blades are
            sharpened using water-cooled equipment to protect the steel from
            heat damage and ensure a clean, strong cutting edge. Sharpening
            is performed in my dedicated sharpening area in Woodbine,
            Campbelltown NSW.
          </p>
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-surface px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-semibold text-text">
            Knife Types Sharpened
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {knifeTypes.map((type) => (
              <CommercialSegment key={type.title} {...type} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-metallic/40 px-6 py-20">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-3xl font-semibold text-text">
            Sharpening Method
          </h2>
          <div className="mt-6 inline-block text-left">
            <Checklist items={sharpeningMethod} />
          </div>
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-surface px-6 py-16">
        <div className="mx-auto max-w-md">
          <h2 className="text-center text-2xl font-semibold text-text">
            Pricing
          </h2>
          <div className="mt-6 rounded-lg border border-metallic/40 bg-background p-6">
            {pricing.map((line, index) => (
              <div
                key={line.name}
                className={`flex items-center justify-between gap-4 py-2 ${
                  index > 0 ? "border-t border-metallic/40" : ""
                }`}
              >
                <span className="text-text/80">{line.name}</span>
                <span className="text-right font-semibold text-ctaRed">
                  {line.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-metallic/40 px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-text">
            Free School Pick-Up
          </h2>
          <p className="mt-4 text-text/80">
            Free pick-up and drop-off available for local schools in the
            Campbelltown area.
          </p>
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-surface px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-text">
            Commercial Pick-Up
          </h2>
          <p className="mt-4 text-text/80">
            Commercial collections are generally offered for jobs over $300
            within the local Campbelltown area. If your business is very
            close to me, I can often assist with smaller loads &mdash; just
            contact me to check availability.
          </p>
        </div>
      </section>

      <section className="border-t border-metallic/40 px-6 py-20">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-3xl font-semibold text-text">
            Why Choose Xtra Sharp
          </h2>
          <div className="mt-6 inline-block text-left">
            <Checklist items={whyChooseUs} />
          </div>
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-surface px-6 py-20 text-center">
        <a
          href="tel:0412974277"
          className="inline-block rounded-full bg-ctaRed px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-ctaRed/90"
        >
          Call Now — 0412 974 277
        </a>
        <p className="mt-4 text-text/70">
          Drop-off sharpening in Campbelltown NSW. Mail-in sharpening
          available Australia-wide.
        </p>
      </section>
    </>
  );
}
