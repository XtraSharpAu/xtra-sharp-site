import type { Metadata } from "next";
import Image from "next/image";
import Checklist from "@/components/Checklist";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceFaq from "@/components/ServiceFaq";
import RelatedLinks from "@/components/RelatedLinks";
import { relatedServiceLinks } from "@/lib/serviceLinks";

export const metadata: Metadata = {
  title: "Clipper Blade Sharpening | Xtra Sharp Campbelltown NSW",
  description:
    "Precision sharpening for A5, wide and large-animal clipper blades.",
  openGraph: {
    title: "Clipper Blade Sharpening | Xtra Sharp Campbelltown NSW",
    description:
      "Precision sharpening for A5, wide and large-animal clipper blades.",
    url: "https://xtrasharp.com.au/clipper-blades",
    type: "article",
    images: ["https://xtrasharp.com.au/og-clipper.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clipper Blade Sharpening | Xtra Sharp Campbelltown NSW",
    description:
      "Precision sharpening for A5, wide and large-animal clipper blades.",
    images: ["https://xtrasharp.com.au/og-clipper.jpg"],
  },
  other: {
    "twitter:url": "https://xtrasharp.com.au/clipper-blades",
  },
  alternates: {
    canonical: "https://xtrasharp.com.au/clipper-blades",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Clipper Blade Sharpening",
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

const clipperBladeTypes = [
  "A5 clipper blades",
  "Wide clipper blades",
  "Large-animal blades",
  "Grooming clipper blades",
  "Veterinary clipper blades",
];

const pricing = [
  { name: "A5 clipper blades", price: "$15" },
  { name: "Wide clipper blades", price: "$20" },
  { name: "Large-animal blades", price: "$20" },
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
    question: "Do you sharpen A5, wide, and large-animal blades?",
    answer:
      "Yes — A5 clipper blades, wide clipper blades, and large-animal blades are all sharpened; see the pricing above.",
  },
  {
    question: "Do you check alignment after sharpening?",
    answer:
      "Yes — every blade is individually cleaned, aligned, and test-run before it's returned.",
  },
  {
    question: "Can sharpening fix blades that feel hot or noisy?",
    answer:
      "Often, yes — blades that run hot or noisy are usually dull or misaligned, and sharpening combined with realignment typically resolves it. If the cause is mechanical, such as the clipper motor itself, that's outside what sharpening can fix.",
  },
  {
    question: "How should clipper blades be cleaned before drop-off?",
    answer:
      "Wipe off loose hair, oil, and debris, and detach the blades from the clipper before drop-off or posting.",
  },
  {
    question: "How often should clipper blades be sharpened?",
    answer:
      "It depends on usage, but professional groomers often sharpen A5 and wide blades every few weeks to a couple of months with regular use; home or occasional users can usually go longer.",
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

function ClipperMachinePhoto() {
  return (
    <div className="mx-auto w-full max-w-2xl overflow-hidden rounded-lg shadow-md">
      <Image
        src="/clipper-blade-sharpening-machine.jpg"
        alt="Automated clipper blade sharpening machine used for A5, wide and large-animal blades."
        width={1920}
        height={1280}
        className="h-auto w-full"
      />
    </div>
  );
}

export default function ClipperBladesPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <Breadcrumbs
        items={[
          { name: "Home", url: "https://xtrasharp.com.au" },
          { name: "Clipper Blade Sharpening", url: "https://xtrasharp.com.au/clipper-blades" },
        ]}
      />

      <section className="flex flex-col items-center gap-4 px-6 py-20 text-center sm:py-28">
        <h1 className="text-4xl font-bold text-text sm:text-5xl">
          Clipper Blade Sharpening
        </h1>
        <p className="max-w-2xl text-lg text-text/70">
          Precision sharpening for A5, wide and large-animal clipper blades.
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
            Machine-Guided Sharpening for Correct Alignment
          </h2>
          <p className="mt-4 text-text/80">
            Clipper blades are sharpened using a machine-guided process that
            ensures correct angle, alignment, tension, tracking and
            finishing. Every blade is sharpened individually, cleaned,
            aligned and tested before return.
          </p>
          <div className="mt-8">
            <ClipperMachinePhoto />
          </div>
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-surface px-6 py-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-2xl font-semibold text-text">
            Types of Clipper Blades I Sharpen
          </h2>
          <div className="mt-6 inline-block text-left">
            <Checklist items={clipperBladeTypes} />
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
            Some blades may vary depending on condition. You can send a
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
            You can post your clipper blades using a prepaid Australia Post
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
            Most clipper blades are completed within 1–2 days. Busy periods
            may take up to 3 days, depending on workload. Urgent jobs are
            available by arrangement.
          </p>
        </div>
      </section>

      <section className="border-t border-metallic/40 px-6 py-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-2xl font-semibold text-text">
            Before You Drop Off
          </h2>
          <div className="mt-6 inline-block text-left">
            <Checklist items={dropOffChecklist} />
          </div>
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-surface px-6 py-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-2xl font-semibold text-text">
            Frequently Asked Questions
          </h2>
          <div className="mt-6">
            <ServiceFaq items={faqs} />
          </div>
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

      <RelatedLinks links={relatedServiceLinks("/clipper-blades")} />

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
