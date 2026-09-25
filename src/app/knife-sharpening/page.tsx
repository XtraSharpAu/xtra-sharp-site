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
    <div className="mx-auto mt-section w-full max-w-2xl">
      <div className="overflow-hidden rounded-lg shadow-md">
        <Image
          src="/knife-sharpening-machine.jpg"
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
    <div className="mx-auto mt-section max-w-3xl">
      <h3 className="text-xl font-semibold text-text">
        Knife Set Prepared for Sharpening
      </h3>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
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
            <p className="mt-2 text-center text-sm text-text/60">
              {photo.alt}
            </p>
          </div>
        ))}
      </div>
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
    <div className="mx-auto mt-section w-full max-w-2xl">
      <div className="overflow-hidden rounded-lg shadow-md">
        <Image
          src="/knife-damage-zoom.jpg"
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
          title="Knife Sharpening Demonstration — Same knife set shown above."
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <p className="mt-2 text-sm text-text/60">
        Knife Sharpening Demonstration — Same knife set shown above.
      </p>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Knife Sharpening | Xtra Sharp Campbelltown NSW",
  description:
    "Professional knife sharpening in Campbelltown NSW — water-cooled precision for kitchen, butcher and hunting knives. Fast turnaround. Call 0412 974 277.",
  openGraph: {
    title: "Knife Sharpening | Xtra Sharp Campbelltown NSW",
    description:
      "Professional knife sharpening in Campbelltown NSW — water-cooled precision for kitchen, butcher and hunting knives. Fast turnaround. Call 0412 974 277.",
    url: "https://xtrasharp.com.au/knife-sharpening",
    type: "article",
    images: [
      "https://xtrasharp.com.au/og-knife.jpg",
      {
        url: "https://xtrasharp.com.au/brand-composite-campbelltown.jpg",
        alt: "Xtra Sharp – Professional Knife & Tool Sharpening Campbelltown NSW",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Knife Sharpening | Xtra Sharp Campbelltown NSW",
    description:
      "Professional knife sharpening in Campbelltown NSW — water-cooled precision for kitchen, butcher and hunting knives. Fast turnaround. Call 0412 974 277.",
    images: [
      "https://xtrasharp.com.au/og-knife.jpg",
      "https://xtrasharp.com.au/brand-composite-campbelltown.jpg",
    ],
  },
  other: {
    "twitter:url": "https://xtrasharp.com.au/knife-sharpening",
  },
  alternates: {
    canonical: "https://www.xtrasharp.com.au/knife-sharpening",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Knife Sharpening",
  provider: {
    "@type": "LocalBusiness",
    name: "Xtra Sharp",
    url: "https://xtrasharp.com.au",
  },
  areaServed: "Campbelltown NSW, Macarthur region, Australia-wide (mail-in)",
  description:
    "Professional knife sharpening in Campbelltown NSW — water-cooled precision for kitchen, butcher and hunting knives. Fast turnaround. Call 0412 974 277.",
  offers: {
    "@type": "Offer",
    priceCurrency: "AUD",
    url: "https://xtrasharp.com.au/pricing",
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

const faqs = [
  {
    question: "How often should kitchen knives be sharpened?",
    answer:
      "It depends on how often the knife is used, but most home kitchen knives benefit from a professional sharpen every 3–6 months, with regular honing in between to maintain the edge.",
  },
  {
    question: "What sharpening method do you use?",
    answer:
      "All knives are sharpened using a controlled water‑cooled process to protect the steel, maintain edge integrity, and deliver a consistent, professional finish.",
  },
  {
    question: "How do I book my knives in for sharpening?",
    answer:
      "You can book in anytime by phone or message. Once confirmed, you’ll receive a clear drop‑off time and a turnaround estimate based on current workload.",
  },
  {
    question: "What type of edge finish do you provide?",
    answer:
      "Every knife is finished to a clean, consistent working edge suitable for home or commercial use. If you prefer a specific finish, just let us know when you book in.",
  },
  {
    question: "Can you sharpen different steel types?",
    answer:
      "Yes — we work with most common kitchen knife steels, including carbon and stainless, using a controlled water‑cooled process to protect the blade and maintain edge quality.",
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
    <PageLayout>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <Breadcrumbs
        items={[
          { name: "Home", url: "https://xtrasharp.com.au" },
          { name: "Knife Sharpening", url: "https://xtrasharp.com.au/knife-sharpening" },
        ]}
      />

      <PageHero
        title="Knife Sharpening — Campbelltown NSW"
        subtitle="Water-cooled sharpening for kitchen, butcher, large and hunting knives."
      >
        <a
          href="tel:0412974277"
          className="mt-4 inline-block rounded-full bg-ctaRed px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-ctaRed/90"
        >
          Call Now — 0412 974 277
        </a>
      </PageHero>

      <Section className="border-t border-metallic/40 text-center">
        <SectionHeading title="About Knife Sharpening" />
        <p className="text-text/80">
          Knife sharpening restores a clean, precise edge to kitchen, butcher
          and hunting knives that have dulled from everyday use. It&apos;s
          ideal for home cooks, chefs, butchers and hunters who rely on a
          sharp blade for safe, efficient cutting. Common problems include
          edges that tear rather than slice, blades that slip on hard skins,
          and knives sharpened unevenly at the wrong angle by DIY tools. At
          Xtra Sharp, every knife is sharpened using water-cooled equipment
          to protect the steel&apos;s temper, restoring a clean, strong
          edge. Most knives are ready within 1–3 days (4–5 days when busy).
        </p>
      </Section>

      <Section className="border-t border-metallic/40 bg-surface text-center">
        <SectionHeading
          title="Water-Cooled Sharpening"
          subtitle="Knives require accurate angles and a controlled process. All knives are sharpened using water-cooled equipment to protect the steel's temper from heat damage, giving a clean, strong cutting edge."
        />
      </Section>

      <Section className="border-t border-metallic/40 text-center">
        <SectionHeading
          title="Precision Knife Sharpening for Every Edge"
          subtitle="Serving Campbelltown, Camden, Narellan and the Macarthur region — trusted by professionals Australia-wide."
        />
        <KnifeIntroGallery />
        <KnifeBeforeDetailPhoto />
        <KnifeDemoVideo />
        <KnifeGroupPhotos />
        <KnifePremiumPhoto />
        <KnifeEquipmentPhoto />
        <KnifeEdgeDetailPhoto />
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
          You can post your knives using a prepaid Australia Post
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
          subtitle="Most knives are completed within 1–3 days. Busy periods may take up to 4–5 days, depending on workload. Urgent jobs are available by arrangement."
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

      <RelatedLinks links={relatedServiceLinks("/knife-sharpening")} />

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
