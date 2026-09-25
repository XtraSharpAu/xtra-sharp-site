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

export const metadata: Metadata = {
  title: "Garden Tools Sharpening | Xtra Sharp Campbelltown NSW",
  description:
    "Professional sharpening for secateurs, shears, and household blades using water-cooled equipment for clean, accurate edges.",
  openGraph: {
    title: "Garden Tools Sharpening | Xtra Sharp Campbelltown NSW",
    description:
      "Professional sharpening for secateurs, shears, and household blades using water-cooled equipment for clean, accurate edges.",
    url: "https://xtrasharp.com.au/garden-tools",
    type: "article",
    images: [
      "https://xtrasharp.com.au/og-garden-tools.jpg",
      {
        url: "https://xtrasharp.com.au/brand-composite-campbelltown.jpg",
        alt: "Xtra Sharp – Professional Knife & Tool Sharpening Campbelltown NSW",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Garden Tools Sharpening | Xtra Sharp Campbelltown NSW",
    description:
      "Professional sharpening for secateurs, shears, and household blades using water-cooled equipment for clean, accurate edges.",
    images: [
      "https://xtrasharp.com.au/og-garden-tools.jpg",
      "https://xtrasharp.com.au/brand-composite-campbelltown.jpg",
    ],
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
  "No on-site sharpening",
  "Drop-off only",
  "Mail-in available Australia-wide",
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
      "Wipe blades clean after each use, ensure they're free of moisture before storing to prevent rust, and apply a light coat of oil to exposed metal between uses.",
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

const beforePhotos = [
  {
    src: "/cyclone-loppers-before.jpg",
    alt: "Cyclone SK5 loppers before sharpening — heavy-duty garden cutting tool.",
    caption:
      "Loppers are sharpened using water-cooled equipment to restore clean, precise edges.",
  },
  {
    src: "/secateurs-before.jpg",
    alt: "Hand secateurs before sharpening — typical garden pruning shears.",
    caption:
      "Smaller garden tools receive the same precision sharpening process.",
  },
  {
    src: "/ratchet-pruner-before.jpg",
    alt: "Ratchet-style pruner before sharpening — silver handle design.",
    caption:
      "Ratchet pruners are serviced to ensure smooth cutting and blade alignment.",
  },
  {
    src: "/brades-axe-before.jpg",
    alt: "Brades axe head before sharpening — vintage tool made in England.",
    caption:
      "Axes and heavier garden tools are sharpened to maintain safe, efficient performance.",
  },
];

function GardenToolsBeforePhotos() {
  return (
    <div className="mx-auto mt-8 grid max-w-2xl gap-6 sm:grid-cols-2">
      {beforePhotos.map((photo) => (
        <div key={photo.src}>
          <div className="overflow-hidden rounded-lg shadow-md">
            <Image
              src={photo.src}
              alt={photo.alt}
              width={1200}
              height={1600}
              sizes="(min-width: 640px) 50vw, 100vw"
              className="h-auto w-full"
            />
          </div>
          <p className="mt-2 text-center text-sm text-text/60">
            {photo.caption}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function GardenToolsPage() {
  return (
    <PageLayout>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <Breadcrumbs
        items={[
          { name: "Home", url: "https://xtrasharp.com.au" },
          { name: "Garden Tools Sharpening", url: "https://xtrasharp.com.au/garden-tools" },
        ]}
      />

      <PageHero
        title="Garden Tools Sharpening"
        subtitle="Professional garden tool sharpening in Campbelltown NSW — restoring clean, accurate edges for secateurs, loppers, axes, and other garden tools. Each tool is sharpened using water-cooled equipment to maintain steel integrity and cutting precision."
      >
        <a
          href="tel:0412974277"
          className="mt-4 inline-block rounded-full bg-ctaRed px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-ctaRed/90"
        >
          Call Now — 0412 974 277
        </a>
      </PageHero>

      <Section className="border-t border-metallic/40 bg-surface text-center">
        <SectionHeading title="About Garden Tools Sharpening" />
        <p className="text-text/80">
          Garden tool sharpening restores clean, accurate cutting edges to
          secateurs, loppers, axes and other tools that have become dull or
          damaged from regular garden use. It&apos;s ideal for home
          gardeners, landscapers and tradespeople who rely on sharp tools
          for efficient, safe work. Common problems include tools that
          crush or tear stems instead of cutting cleanly, blades that have
          chipped or rusted, and reduced cutting power from repeated use.
          At Xtra Sharp, garden tools are sharpened using water-cooled
          equipment to protect the steel from heat damage, giving a clean,
          accurate edge. Most garden tools are completed within 1–2 days,
          with busy periods taking up to 3 days.
        </p>
      </Section>

      <Section className="border-t border-metallic/40 text-center">
        <SectionHeading
          title="Water-Cooled Sharpening"
          subtitle="Garden tools are sharpened using water-cooled equipment to protect the steel from heat damage, giving a clean, accurate edge that holds up to regular garden use."
        />
        <GardenToolsBeforePhotos />
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
          You can post your garden tools using a prepaid Australia Post
          satchel. Return postage is sent with tracking.
        </p>
        <p className="mt-4 text-text/80">
          Please contact me first before sending anything. I&apos;ll
          confirm pricing, turnaround time and the correct satchel size.
        </p>
      </Section>

      <Section className="border-t border-metallic/40 text-center">
        <SectionHeading
          title="Turnaround Time"
          subtitle="Most garden tools are completed within 1–2 days. Busy periods may take up to 3 days, depending on workload. Urgent jobs are available by arrangement."
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

      <RelatedLinks links={relatedServiceLinks("/garden-tools")} />

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
