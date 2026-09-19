import type { Metadata } from "next";
import Checklist from "@/components/Checklist";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceFaq from "@/components/ServiceFaq";
import RelatedLinks from "@/components/RelatedLinks";
import { relatedServiceLinks } from "@/lib/serviceLinks";

export const metadata: Metadata = {
  title: "Garden Tools Sharpening | Xtra Sharp Campbelltown NSW",
  description:
    "Water-cooled sharpening for secateurs, hedge shears and axes.",
  openGraph: {
    title: "Garden Tools Sharpening | Xtra Sharp Campbelltown NSW",
    description:
      "Water-cooled sharpening for secateurs, hedge shears and axes.",
    url: "https://xtrasharp.com.au/garden-tools",
    type: "article",
    images: ["https://xtrasharp.com.au/og-garden-tools.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Garden Tools Sharpening | Xtra Sharp Campbelltown NSW",
    description:
      "Water-cooled sharpening for secateurs, hedge shears and axes.",
    images: ["https://xtrasharp.com.au/og-garden-tools.jpg"],
  },
  other: {
    "twitter:url": "https://xtrasharp.com.au/garden-tools",
  },
  alternates: {
    canonical: "https://xtrasharp.com.au/garden-tools",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Garden Tools Sharpening",
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
      maxPrice: 20,
    },
  },
};

const pricing = [
  { name: "Hedge shears", price: "$15" },
  { name: "Secateurs", price: "$15" },
  { name: "Axes / tomahawks", price: "$20" },
];

const importantNotes = [
  "No mobile sharpening",
  "No on-site sharpening",
  "Drop-off only",
  "Mail-in available Australia-wide",
];

const dropOffChecklist = [
  "Wipe items clean (no food, hair, dirt, or oil)",
  "Label items if dropping off multiple pieces",
  "Ensure clipper blades are detached from the clipper",
  "Remove heavy rust or debris if possible",
  "Place items in a secure container or wrap for transport",
];

const faqs = [
  {
    question: "Do you sharpen secateurs, hedge shears, and axes?",
    answer:
      "Yes — secateurs, hedge shears, axes and tomahawks are all sharpened; see the pricing above.",
  },
  {
    question: "Can sharpening fix tools that are hard to cut with?",
    answer:
      "Yes — tools that feel like they're crushing or tearing rather than cutting cleanly usually just need the edge restored, which sharpening resolves.",
  },
  {
    question: "Do you clean or de-rust garden tools?",
    answer:
      "Light surface rust and debris are cleared as part of the sharpening process. Heavy rust may require additional work, and very badly corroded tools may not be serviceable — you'll be told before any work begins.",
  },
  {
    question: "How should I maintain garden tools after sharpening?",
    answer:
      "Wipe blades clean after each use, dry them before storing to prevent rust, and apply a light coat of oil to exposed metal between uses.",
  },
  {
    question: "How often should garden tools be sharpened?",
    answer:
      "It depends on how much they're used, but most home garden tools benefit from a professional sharpen once or twice a year, or whenever cuts start to look torn or crushed rather than clean.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function GardenToolsPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <Breadcrumbs
        items={[
          { name: "Home", url: "https://xtrasharp.com.au" },
          { name: "Garden Tools Sharpening", url: "https://xtrasharp.com.au/garden-tools" },
        ]}
      />

      <section className="flex flex-col items-center gap-4 px-6 py-20 text-center sm:py-28">
        <h1 className="text-4xl font-bold text-text sm:text-5xl">
          Garden Tools Sharpening
        </h1>
        <p className="max-w-2xl text-lg text-text/70">
          Water-cooled sharpening for secateurs, hedge shears and axes.
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
            Garden tools are sharpened using water-cooled equipment to
            protect the steel from heat damage, giving a clean, accurate
            edge that holds up to regular garden use.
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
            You can post your garden tools using a prepaid Australia Post
            satchel. Return postage is sent with tracking.
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
            Most garden tools are completed within 1–2 days. Busy periods
            may take up to 3 days, depending on workload. Urgent jobs are
            available by arrangement.
          </p>
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-surface px-6 py-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-2xl font-semibold text-text">
            Before You Drop Off
          </h2>
          <div className="mt-6 inline-block text-left">
            <Checklist items={dropOffChecklist} />
          </div>
        </div>
      </section>

      <section className="border-t border-metallic/40 px-6 py-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-2xl font-semibold text-text">
            Frequently Asked Questions
          </h2>
          <div className="mt-6">
            <ServiceFaq items={faqs} />
          </div>
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

      <RelatedLinks links={relatedServiceLinks("/garden-tools")} />

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
