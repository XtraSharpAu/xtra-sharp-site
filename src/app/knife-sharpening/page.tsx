import type { Metadata } from "next";
import Image from "next/image";
import Checklist from "@/components/Checklist";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceFaq from "@/components/ServiceFaq";
import RelatedLinks from "@/components/RelatedLinks";
import { relatedServiceLinks } from "@/lib/serviceLinks";

const introGalleryPhotos = [
  {
    src: "/knife-gallery-lineup.jpg",
    alt: "Professional knife lineup prepared for sharpening.",
  },
  {
    src: "/knife-gallery-case.jpg",
    alt: "Variety of kitchen knives before sharpening.",
  },
  {
    src: "/knife-gallery-mixed.jpg",
    alt: "Chef and utility knives arranged for sharpening.",
  },
];

function KnifeIntroGallery() {
  return (
    <div className="mx-auto mt-8 grid max-w-4xl gap-4 sm:grid-cols-3">
      {introGalleryPhotos.map((photo) => (
        <div
          key={photo.src}
          className="overflow-hidden rounded-lg shadow-md"
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            width={1200}
            height={1600}
            className="h-auto w-full"
          />
        </div>
      ))}
    </div>
  );
}

function KnifePremiumPhoto() {
  return (
    <div className="mx-auto mt-6 w-full max-w-2xl overflow-hidden rounded-lg shadow-md">
      <Image
        src="/knife-premium-japanese.jpg"
        alt="Japanese chef knife sharpened for precision cutting."
        width={1200}
        height={1600}
        className="h-auto w-full"
      />
    </div>
  );
}

function KnifeEquipmentPhoto() {
  return (
    <div className="mx-auto mt-12 w-full max-w-2xl">
      <div className="overflow-hidden rounded-lg shadow-md">
        <Image
          src="/knife_sharpening_machine.jpg"
          alt="Knife sharpening machine with belt grinder and polishing wheel in workshop."
          width={1600}
          height={2155}
          className="h-auto w-full"
        />
      </div>
      <p className="mt-2 text-sm text-text/60">
        Professional belt grinder and wheel setup used for precision knife
        sharpening.
      </p>
    </div>
  );
}

const knifeGroupPhotos = [
  {
    src: "/knives-before-sharpening.jpg",
    alt: "Professional knife set prepared for sharpening.",
    width: 320,
    height: 240,
  },
  {
    src: "/knives-after-sharpening.jpg",
    alt: "Knife set sharpened for precision cutting.",
    width: 1500,
    height: 2000,
  },
];

function KnifeGroupPhotos() {
  return (
    <div className="mx-auto mt-6 grid max-w-3xl gap-6 sm:grid-cols-2">
      {knifeGroupPhotos.map((photo) => (
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

function KnifeBeforeDetailPhoto() {
  return (
    <div className="mx-auto mt-6 w-full max-w-2xl overflow-hidden rounded-lg shadow-md">
      <Image
        src="/knives-before-sharpening-detail.jpg"
        alt="Close-up of knife edges before sharpening showing visible damage and dull spots."
        width={1400}
        height={651}
        className="h-auto w-full"
      />
    </div>
  );
}

function KnifeEdgeDetailPhoto() {
  return (
    <div className="mx-auto mt-12 w-full max-w-2xl">
      <div className="overflow-hidden rounded-lg shadow-md">
        <Image
          src="/knife_damage_zoom.jpg"
          alt="Knife edge detail prior to sharpening."
          width={1600}
          height={501}
          className="h-auto w-full"
        />
      </div>
      <p className="mt-2 text-sm text-text/60">
        Close-up of knife edge before sharpening.
      </p>
    </div>
  );
}

function KnifeDemoVideo() {
  return (
    <div className="mx-auto mt-8 w-full max-w-2xl">
      <div className="aspect-video overflow-hidden rounded-lg shadow-md">
        <iframe
          src="https://www.youtube.com/embed/pRQ2ZioYiFw"
          title="Knife Sharpening Demonstration — Slicing Paper with Ease"
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <p className="mt-2 text-sm text-text/60">
        Knife Sharpening Demonstration — Slicing Paper with Ease
      </p>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Knife Sharpening | Xtra Sharp Campbelltown NSW",
  description:
    "Water-cooled sharpening for kitchen, butcher, large and hunting knives.",
  openGraph: {
    title: "Knife Sharpening | Xtra Sharp Campbelltown NSW",
    description:
      "Water-cooled sharpening for kitchen, butcher, large and hunting knives.",
    url: "https://xtrasharp.com.au/knife-sharpening",
    type: "article",
    images: ["https://xtrasharp.com.au/og-knife.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Knife Sharpening | Xtra Sharp Campbelltown NSW",
    description:
      "Water-cooled sharpening for kitchen, butcher, large and hunting knives.",
    images: ["https://xtrasharp.com.au/og-knife.jpg"],
  },
  other: {
    "twitter:url": "https://xtrasharp.com.au/knife-sharpening",
  },
  alternates: {
    canonical: "https://xtrasharp.com.au/knife-sharpening",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Knife Sharpening",
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
      minPrice: 6,
      maxPrice: 15,
    },
  },
};

const pricing = [
  { name: "Small Victorinox paring knives", price: "$6" },
  { name: "Standard kitchen knives", price: "$10" },
  { name: "Large knives", price: "$15" },
  { name: "Butcher knives", price: "$10" },
  { name: "Hunting knives", price: "$10–$15" },
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
    question: "How often should kitchen knives be sharpened?",
    answer:
      "It depends on how often the knife is used, but most home kitchen knives benefit from a professional sharpen every 3–6 months, with regular honing in between to maintain the edge.",
  },
  {
    question: "Do you sharpen serrated knives?",
    answer:
      "Yes — serrated knives can be sharpened carefully to maintain their original tooth pattern.",
  },
  {
    question: "Can you fix chips or damaged edges?",
    answer:
      "Minor chips, bends, and tip repairs are included where possible. Severe damage is quoted individually.",
  },
  {
    question: "What's the difference between honing and sharpening?",
    answer:
      "Honing realigns and straightens an edge that's already sharp, using a honing rod between sharpenings. Sharpening removes a small amount of metal to form a completely new edge once honing is no longer enough.",
  },
  {
    question: "Will sharpening remove a lot of metal?",
    answer:
      "No — professional sharpening removes only the minimum amount of metal needed to restore a clean edge, so a knife can be sharpened many times over its lifespan.",
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

export default function KnifeSharpeningPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <Breadcrumbs
        items={[
          { name: "Home", url: "https://xtrasharp.com.au" },
          { name: "Knife Sharpening", url: "https://xtrasharp.com.au/knife-sharpening" },
        ]}
      />

      <section className="flex flex-col items-center gap-4 px-6 py-20 text-center sm:py-28">
        <h1 className="text-4xl font-bold text-text sm:text-5xl">
          Knife Sharpening
        </h1>
        <p className="max-w-2xl text-lg text-text/70">
          Water-cooled sharpening for kitchen, butcher, large and hunting
          knives.
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
            Knives require accurate angles and a controlled sharpening
            process. All knives are sharpened using water-cooled equipment
            to protect the steel&apos;s temper from heat damage, giving a
            clean, strong cutting edge.
          </p>
        </div>
      </section>

      <section className="border-t border-metallic/40 px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold text-text">
            Precision Knife Sharpening for Every Edge
          </h2>
          <KnifeIntroGallery />
          <KnifeBeforeDetailPhoto />
          <KnifeDemoVideo />
          <KnifeGroupPhotos />
          <KnifePremiumPhoto />
          <KnifeEquipmentPhoto />
          <KnifeEdgeDetailPhoto />
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
            You can post your knives using a prepaid Australia Post
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
            Most knives are completed within 1–2 days. Busy periods may
            take up to 3 days, depending on workload. Urgent jobs are
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

      <RelatedLinks links={relatedServiceLinks("/knife-sharpening")} />

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
