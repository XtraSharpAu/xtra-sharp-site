import type { Metadata } from "next";
import Image from "next/image";
import Checklist from "@/components/Checklist";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceFaq from "@/components/ServiceFaq";
import RelatedLinks from "@/components/RelatedLinks";
import { relatedServiceLinks } from "@/lib/serviceLinks";

const scissorsIntroGalleryPhotos = [
  {
    src: "/scissors-gallery-lineup.jpg",
    alt: "Hairdressing scissors lineup prepared for sharpening.",
    width: 1061,
    height: 1600,
  },
  {
    src: "/scissors-gallery-collection.jpg",
    alt: "Collection of hairdressing scissors prepared for sharpening.",
    width: 1185,
    height: 1418,
  },
  {
    src: "/scissors-gallery-closeup.jpg",
    alt: "Close-up of a hairdressing scissors handle and finger rings.",
    width: 1200,
    height: 1600,
  },
];

function ScissorsIntroGallery() {
  return (
    <div className="mx-auto mt-8 grid max-w-4xl gap-4 sm:grid-cols-3">
      {scissorsIntroGalleryPhotos.map((photo) => (
        <div
          key={photo.src}
          className="overflow-hidden rounded-lg shadow-md"
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            className="h-auto w-full"
          />
        </div>
      ))}
    </div>
  );
}

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

const dropOffChecklist = [
  "Wipe items clean (no food, hair, dirt, or oil)",
  "Label items if dropping off multiple pieces",
  "Ensure clipper blades are detached from the clipper",
  "Remove heavy rust or debris if possible",
  "Place items in a secure container or wrap for transport",
];

const faqs = [
  {
    question: "Do you sharpen both bevel and convex scissors?",
    answer:
      "Yes — both bevel and convex edge scissors are sharpened, each set up correctly for its specific edge type. See the pricing above for the difference in price between the two.",
  },
  {
    question: "Can sharpening fix scissor nicks or rough cutting?",
    answer:
      "Minor nicks and rough cutting caused by a worn edge are usually corrected during sharpening. Severe damage is assessed and quoted individually.",
  },
  {
    question: "Do you reset tension after sharpening?",
    answer:
      "Yes — correct tension is checked and reset as part of the machine-guided sharpening process, so the scissors close smoothly and cut cleanly along the full blade.",
  },
  {
    question: "How should I maintain hairdressing scissors?",
    answer:
      "Wipe the blades clean after each use, avoid cutting anything other than hair, store them in a case or guard, and apply a drop of scissor oil at the pivot occasionally to keep the action smooth.",
  },
  {
    question: "Do you sharpen grooming thinning scissors?",
    answer:
      "Yes — grooming thinning scissors are sharpened as a standard service; see the pricing above.",
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

export default function ScissorsSharpeningPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
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
          <ScissorsIntroGallery />
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
            Most scissors are completed within 1–2 days. Busy periods may
            take up to 3 days, depending on workload. Urgent jobs are
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

      <RelatedLinks links={relatedServiceLinks("/scissors-sharpening")} />

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
