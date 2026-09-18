import type { Metadata } from "next";
import Checklist from "@/components/Checklist";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Scissors Sharpening | Xtra Sharp Campbelltown NSW",
  description:
    "Professional sharpening for hairdressing, grooming, sewing and household scissors.",
  openGraph: {
    title: "Scissors Sharpening | Xtra Sharp Campbelltown NSW",
    description:
      "Professional sharpening for hairdressing, grooming, sewing and household scissors.",
    url: "https://xtrasharp.com.au/scissors-sharpening",
    type: "article",
    images: ["https://xtrasharp.com.au/og-scissors.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scissors Sharpening | Xtra Sharp Campbelltown NSW",
    description:
      "Professional sharpening for hairdressing, grooming, sewing and household scissors.",
    images: ["https://xtrasharp.com.au/og-scissors.jpg"],
  },
  other: {
    "twitter:url": "https://xtrasharp.com.au/scissors-sharpening",
  },
  alternates: {
    canonical: "https://xtrasharp.com.au/scissors-sharpening",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Scissors Sharpening",
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
      minPrice: 15,
      maxPrice: 70,
    },
  },
};

const scissorTypes = [
  "Hairdressing scissors",
  "Grooming scissors",
  "Grooming thinning scissors",
  "Sewing scissors",
  "Household scissors",
];

const pricing = [
  { name: "Hairdressing scissors (bevel)", price: "$50" },
  { name: "Hairdressing scissors (convex)", price: "$70" },
  { name: "Grooming scissors (bevel)", price: "$25" },
  { name: "Grooming scissors (convex)", price: "$35" },
  { name: "Grooming thinning scissors", price: "$30" },
  { name: "Sewing / household scissors", price: "$15" },
];

const importantNotes = [
  "No mobile sharpening",
  "No on-site sharpening",
  "Drop-off only",
  "Mail-in available Australia-wide",
];

export default function ScissorsSharpeningPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <Breadcrumbs
        items={[
          { name: "Home", url: "https://xtrasharp.com.au" },
          { name: "Scissors Sharpening", url: "https://xtrasharp.com.au/scissors-sharpening" },
        ]}
      />

      <section className="flex flex-col items-center gap-4 px-6 py-20 text-center sm:py-28">
        <h1 className="text-4xl font-bold text-text sm:text-5xl">
          Scissors Sharpening
        </h1>
        <p className="max-w-2xl text-lg text-text/70">
          Professional sharpening for hairdressing, grooming, sewing and
          household scissors.
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
            Precision Machine-Guided Sharpening
          </h2>
          <p className="mt-4 text-text/80">
            I sharpen scissors using a machine-guided process that maintains
            correct angle, ride line, tension and alignment. This ensures
            your scissors cut cleanly, smoothly and safely.
          </p>
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-surface px-6 py-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-2xl font-semibold text-text">
            Types of Scissors I Sharpen
          </h2>
          <div className="mt-6 inline-block text-left">
            <Checklist items={scissorTypes} />
          </div>
        </div>
      </section>

      <section className="border-t border-metallic/40 px-6 py-16">
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
          <p className="mt-4 text-center text-text/80">
            Some scissors may vary depending on condition. You can send a
            photo for an exact quote.
          </p>
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-surface px-6 py-16">
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

      <section className="border-t border-metallic/40 px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-text">
            Mail-In Sharpening (Australia-Wide)
          </h2>
          <p className="mt-4 text-text/80">
            You can post your scissors using a prepaid Australia Post
            satchel. Return postage is sent with tracking.
          </p>
          <p className="mt-4 text-text/80">
            Please contact me first before sending anything. I&apos;ll
            confirm pricing, turnaround time and the correct satchel size.
          </p>
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-surface px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-text">
            Turnaround Time
          </h2>
          <p className="mt-4 text-text/80">
            Most scissors are sharpened same day or next day. Mail-in
            sharpening is usually completed within 1–2 business days after
            arrival.
          </p>
        </div>
      </section>

      <section className="border-t border-metallic/40 px-6 py-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-2xl font-semibold text-text">
            Important Notes
          </h2>
          <div className="mt-6 inline-block text-left">
            <Checklist items={importantNotes} />
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
          Australia-wide.
        </p>
      </section>
    </>
  );
}
