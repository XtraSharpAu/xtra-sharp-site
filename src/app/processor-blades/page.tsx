import type { Metadata } from "next";
import Checklist from "@/components/Checklist";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Processor Blade Sharpening | Xtra Sharp Campbelltown NSW",
  description:
    "Water-cooled sharpening for home and industrial processor blades.",
  openGraph: {
    title: "Processor Blade Sharpening | Xtra Sharp Campbelltown NSW",
    description:
      "Water-cooled sharpening for home and industrial processor blades.",
    url: "https://xtrasharp.com.au/processor-blades",
    type: "article",
    images: ["https://xtrasharp.com.au/og-processor-blades.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Processor Blade Sharpening | Xtra Sharp Campbelltown NSW",
    description:
      "Water-cooled sharpening for home and industrial processor blades.",
    images: ["https://xtrasharp.com.au/og-processor-blades.jpg"],
  },
  other: {
    "twitter:url": "https://xtrasharp.com.au/processor-blades",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Processor Blade Sharpening",
  provider: {
    "@type": "LocalBusiness",
    name: "Xtra Sharp",
  },
  areaServed: "Campbelltown NSW, Macarthur region, Australia-wide (mail-in)",
  offers: {
    "@type": "Offer",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "AUD",
      minPrice: 20,
      maxPrice: 30,
    },
  },
};

const pricing = [
  { name: "Home processor blades", price: "$20–$25" },
  {
    name: "Large industrial blades",
    price: "$30 or more depending on size and condition",
  },
];

const importantNotes = [
  "No mobile sharpening",
  "No on-site sharpening",
  "Drop-off only",
  "Mail-in available Australia-wide",
];

export default function ProcessorBladesPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />

      <section className="flex flex-col items-center gap-4 px-6 py-20 text-center sm:py-28">
        <h1 className="text-4xl font-bold text-text sm:text-5xl">
          Processor Blade Sharpening
        </h1>
        <p className="max-w-2xl text-lg text-text/70">
          Water-cooled sharpening for home and industrial processor blades.
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
          <h2 className="text-2xl font-semibold text-text">
            Water-Cooled Sharpening
          </h2>
          <p className="mt-4 text-text/80">
            Processor blades are sharpened using water-cooled equipment to
            protect the steel from heat damage, giving safe, accurate edges
            for home and industrial equipment.
          </p>
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
            Drop-Off Sharpening (Campbelltown NSW)
          </h2>
          <p className="mt-4 text-text/80">
            Drop-off sharpening is available by appointment. I sharpen from
            my dedicated sharpening area in Woodbine, listed publicly as
            Campbelltown NSW.
          </p>
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-surface px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-text">
            Mail-In Sharpening (Australia-Wide)
          </h2>
          <p className="mt-4 text-text/80">
            You can post your processor blades using a prepaid Australia
            Post satchel. Return postage is sent with tracking.
          </p>
          <p className="mt-4 text-text/80">
            Please contact me first before sending anything. I&apos;ll
            confirm pricing, turnaround time and the correct satchel size.
          </p>
        </div>
      </section>

      <section className="border-t border-metallic/40 px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-text">
            Turnaround Time
          </h2>
          <p className="mt-4 text-text/80">
            Most processor blades are sharpened same day or next day.
            Mail-in sharpening is usually completed within 1–2 business
            days after arrival.
          </p>
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-surface px-6 py-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-2xl font-semibold text-text">
            Important Notes
          </h2>
          <div className="mt-6 inline-block text-left">
            <Checklist items={importantNotes} />
          </div>
        </div>
      </section>

      <section className="border-t border-metallic/40 px-6 py-20 text-center">
        <a
          href="tel:0412974277"
          className="inline-block rounded-full bg-ctaRed px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-ctaRed/90"
        >
          Call Now — 0412 974 277
        </a>
        <p className="mt-4 text-text/70">
          Drop-off sharpening in Campbelltown NSW. Mail-in sharpening
          Australia-wide.
        </p>
      </section>
    </>
  );
}
