import type { Metadata } from "next";
import Image from "next/image";
import Checklist from "@/components/Checklist";
import DropOffChecklist from "@/components/DropOffChecklist";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceFaq from "@/components/ServiceFaq";
import RelatedLinks from "@/components/RelatedLinks";
import { relatedServiceLinks } from "@/lib/serviceLinks";
import CallNowButton from "@/components/CallNowButton";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";

const processorBeforePhotos = [
  {
    src: "/processor-blade-before-single.jpg",
    alt: "Processor blades before sharpening — visible wear along the cutting edge.",
    width: 1500,
    height: 2000,
  },
  {
    src: "/processor-blade-before-set.jpg",
    alt: "Industrial processor blades awaiting precision sharpening.",
    width: 1500,
    height: 1790,
  },
];

function ProcessorBeforePhoto() {
  return (
    <div className="mx-auto mt-8 grid max-w-3xl gap-6 sm:grid-cols-2">
      {processorBeforePhotos.map((photo) => (
        <div key={photo.src}>
          <div className="overflow-hidden rounded-lg shadow-md">
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              className="h-auto w-full"
            />
          </div>
          <p className="mt-2 text-center text-sm text-text/60">{photo.alt}</p>
        </div>
      ))}
    </div>
  );
}

const processorAfterPhotos = [
  {
    src: "/processor-blade-after-single.jpg",
    alt: "Processor blades after sharpening — precision-polished edges restored.",
    width: 1200,
    height: 1537,
  },
  {
    src: "/processor-blade-after-set.jpg",
    alt: "Industrial processor blades sharpened to a mirror finish for optimal cutting performance.",
    width: 1200,
    height: 1440,
  },
];

function ProcessorAfterPhoto() {
  return (
    <div className="mx-auto mt-6 grid max-w-3xl gap-6 sm:grid-cols-2">
      {processorAfterPhotos.map((photo) => (
        <div key={photo.src}>
          <div className="overflow-hidden rounded-lg shadow-md">
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              className="h-auto w-full"
            />
          </div>
          <p className="mt-2 text-center text-sm text-text/60">{photo.alt}</p>
        </div>
      ))}
    </div>
  );
}

function ProcessorEquipmentPhoto() {
  return (
    <div className="mx-auto mt-section w-full max-w-2xl">
      <div className="overflow-hidden rounded-lg shadow-md">
        <Image
          src="/knife-sharpening-machine.jpg"
          alt="Water-cooled sharpening machine used for knives and industrial processor blades."
          width={1600}
          height={2155}
          className="h-auto w-full"
        />
      </div>
      <p className="mt-2 text-sm text-text/60">
        Water-cooled sharpening machine used for knives and industrial
        processor blades.
      </p>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Processor Blade Sharpening | Xtra Sharp Campbelltown NSW",
  description:
    "Professional processor blade sharpening in Campbelltown NSW for commercial and industrial equipment — safe, accurate edges guaranteed. Call 0412 974 277.",
  openGraph: {
    title: "Processor Blade Sharpening | Xtra Sharp Campbelltown NSW",
    description:
      "Professional processor blade sharpening in Campbelltown NSW for commercial and industrial equipment — safe, accurate edges guaranteed. Call 0412 974 277.",
    url: "https://xtrasharp.com.au/processor-blades",
    type: "article",
    images: ["https://xtrasharp.com.au/og-processor-blades.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Processor Blade Sharpening | Xtra Sharp Campbelltown NSW",
    description:
      "Professional processor blade sharpening in Campbelltown NSW for commercial and industrial equipment — safe, accurate edges guaranteed. Call 0412 974 277.",
    images: ["https://xtrasharp.com.au/og-processor-blades.jpg"],
  },
  other: {
    "twitter:url": "https://xtrasharp.com.au/processor-blades",
  },
  alternates: {
    canonical: "https://www.xtrasharp.com.au/processor-blades",
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
    price: "$30+ depending on size and condition",
  },
];

const importantNotes = [
  "No mobile sharpening",
  "No on-site sharpening",
  "Drop-off only",
  "Mail-in available Australia-wide",
];

const faqs = [
  {
    question: "Do you sharpen both home and commercial processor blades?",
    answer:
      "Yes — both home processor blades and large industrial/commercial blades are sharpened; see the pricing above.",
  },
  {
    question: "Can sharpening fix blades that don't cut cleanly?",
    answer:
      "Yes — blades that tear or crush instead of cutting cleanly are almost always just dull, and sharpening restores a clean cutting edge.",
  },
  {
    question: "Do you check balance and edge geometry?",
    answer:
      "Yes — blades are checked for consistent edge geometry so they run smoothly and cut evenly, which matters for balance on rotating blades.",
  },
  {
    question: "How should processor blades be cleaned before drop-off?",
    answer:
      "Wipe off food residue and oil, and make sure blades are detached from the processor before drop-off or posting.",
  },
  {
    question: "How often should processor blades be sharpened?",
    answer:
      "It depends on how often the processor is used — home blades are often sharpened every few months, while commercial or industrial blades in regular use may need sharpening more frequently.",
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

export default function ProcessorBladesPage() {
  return (
    <PageLayout>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <Breadcrumbs
        items={[
          { name: "Home", url: "https://xtrasharp.com.au" },
          { name: "Processor Blade Sharpening", url: "https://xtrasharp.com.au/processor-blades" },
        ]}
      />

      <PageHero
        title="Processor Blade Sharpening"
        subtitle="Professional processor blade sharpening in Campbelltown NSW — precision water-cooled sharpening for food-processing and industrial blades. Each blade is restored to a safe, accurate edge that maintains performance and extends equipment life."
      >
        <a
          href="tel:0412974277"
          className="mt-4 inline-block rounded-full bg-ctaRed px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-ctaRed/90"
        >
          Call Now — 0412 974 277
        </a>
      </PageHero>

      <Section className="border-t border-metallic/40 bg-surface text-center">
        <SectionHeading title="About Processor Blade Sharpening" />
        <p className="text-text/80">
          Processor blade sharpening restores safe, accurate cutting edges
          to blades used in home and commercial food-processing and
          industrial equipment. It&apos;s suited to home cooks, commercial
          kitchens and industrial operators who depend on sharp blades for
          efficient, consistent processing. Common problems include blades
          that tear or crush instead of cutting cleanly, reduced processing
          efficiency, and increased strain on equipment motors from dull
          edges. At Xtra Sharp, processor blades are sharpened using
          water-cooled equipment to protect the steel from heat damage,
          restoring safe, accurate performance. Most processor blades are
          completed within 1–2 days, with busy periods taking up to 3
          days.
        </p>
      </Section>

      <Section className="border-t border-metallic/40 text-center">
        <SectionHeading
          title="Water-Cooled Sharpening"
          subtitle="Processor blades are sharpened using water-cooled equipment to protect the steel from heat damage, giving safe, accurate edges for home and industrial equipment."
        />
        <ProcessorBeforePhoto />
        <ProcessorAfterPhoto />
        <ProcessorEquipmentPhoto />
      </Section>

      <Section className="border-t border-metallic/40 bg-surface">
        <div className="mx-auto max-w-md">
          <SectionHeading title="Pricing" />
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
      </Section>

      <Section className="border-t border-metallic/40 text-center">
        <SectionHeading
          title="Drop-Off Sharpening (Campbelltown NSW)"
          subtitle="Drop-off sharpening is available by appointment. I sharpen from my dedicated sharpening area in Woodbine, listed publicly as Campbelltown NSW."
        />
      </Section>

      <Section className="border-t border-metallic/40 bg-surface text-center">
        <SectionHeading title="Mail-In Sharpening (Australia-Wide)" />
        <p className="mt-4 text-text/80">
          You can post your processor blades using a prepaid Australia
          Post satchel. Return postage is sent with tracking.
        </p>
        <p className="mt-4 text-text/80">
          Please contact me first before sending anything. I&apos;ll
          confirm pricing, turnaround time and the correct satchel size.
        </p>
      </Section>

      <Section className="border-t border-metallic/40 text-center">
        <SectionHeading
          title="Turnaround Time"
          subtitle="Most processor blades are completed within 1–2 days. Busy periods may take up to 3 days, depending on workload. Urgent jobs are available by arrangement."
        />
      </Section>

      <DropOffChecklist surface />

      <Section className="border-t border-metallic/40">
        <SectionHeading title="Frequently Asked Questions" />
        <div className="mt-6">
          <ServiceFaq items={faqs} />
        </div>
      </Section>

      <Section className="border-t border-metallic/40 bg-surface">
        <SectionHeading title="Important Notes" />
        <div className="mt-6 inline-block text-left">
          <Checklist items={importantNotes} />
        </div>
      </Section>

      <RelatedLinks links={relatedServiceLinks("/processor-blades")} />

      <section className="border-t border-metallic/40 px-6 py-20 text-center">
        <CallNowButton />
        <p className="mt-4 text-text/70">
          Drop-off sharpening in Campbelltown NSW. Mail-in sharpening
          Australia-wide.
        </p>
      </section>
    </PageLayout>
  );
}
