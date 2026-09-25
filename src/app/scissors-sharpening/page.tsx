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
  title: "Scissors Sharpening Campbelltown NSW | Xtra Sharp",
  description:
    "Blunt scissors? Expert sharpening for hairdressing, kitchen & industrial scissors in Campbelltown NSW. Water-cooled precision, 2–4 day turnaround. Book now.",
  openGraph: {
    title: "Scissors Sharpening Campbelltown NSW | Xtra Sharp",
    description:
      "Blunt scissors? Expert sharpening for hairdressing, kitchen & industrial scissors in Campbelltown NSW. Water-cooled precision, 2–4 day turnaround. Book now.",
    url: "https://www.xtrasharp.com.au/scissors-sharpening",
    type: "article",
    images: [
      "https://xtrasharp.com.au/og-scissors.jpg",
      {
        url: "https://xtrasharp.com.au/brand-composite-campbelltown.jpg",
        alt: "Xtra Sharp – Professional Knife & Tool Sharpening Campbelltown NSW",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scissors Sharpening Campbelltown NSW | Xtra Sharp",
    description:
      "Blunt scissors? Expert sharpening for hairdressing, kitchen & industrial scissors in Campbelltown NSW. Water-cooled precision, 2–4 day turnaround. Book now.",
    images: [
      "https://xtrasharp.com.au/og-scissors.jpg",
      "https://xtrasharp.com.au/brand-composite-campbelltown.jpg",
    ],
  },
  other: {
    "twitter:url": "https://www.xtrasharp.com.au/scissors-sharpening",
  },
  alternates: {
    canonical: "https://www.xtrasharp.com.au/scissors-sharpening",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Scissors Sharpening",
  provider: {
    "@type": "LocalBusiness",
    name: "Xtra Sharp",
    url: "https://xtrasharp.com.au",
  },
  areaServed: "Campbelltown NSW, Macarthur region, Australia-wide (mail-in)",
  description:
    "Professional scissor sharpening for kitchen, hairdressing, and industrial scissors. Water-cooled precision finish.",
  offers: {
    "@type": "Offer",
    priceCurrency: "AUD",
    url: "https://xtrasharp.com.au/pricing",
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
  "No on-site sharpening",
  "Drop-off only",
  "Mail-in available Australia-wide",
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
    <PageLayout>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <Breadcrumbs
        items={[
          { name: "Home", url: "https://xtrasharp.com.au" },
          { name: "Scissors Sharpening", url: "https://xtrasharp.com.au/scissors-sharpening" },
        ]}
      />

      <PageHero
        title="Scissors Sharpening"
        subtitle="Professional sharpening for hairdressing, grooming, sewing and household scissors."
      >
        <a
          href="tel:0412974277"
          className="mt-4 inline-block rounded-full bg-ctaRed px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-ctaRed/90"
        >
          Call Now — 0412 974 277
        </a>
      </PageHero>

      <Section className="border-t border-metallic/40 bg-surface text-center">
        <SectionHeading title="About Scissors Sharpening" />
        <p className="text-text/80">
          Scissors sharpening restores correct angle, ride line, tension and
          alignment to scissors that have become dull, sticky or uneven with
          use. It&apos;s suited to hairdressers, groomers, sewers and
          households relying on scissors for clean, accurate cuts. Common
          problems include scissors that crush fabric or hair instead of
          cutting cleanly, blades that have lost their edge from repeated
          use, and tension that has loosened over time. At Xtra Sharp,
          scissors are sharpened using a water-cooled, machine-guided
          process for consistent, reliable results. Most scissors are
          completed within
          1–2 days, with busy periods taking up to 3 days, and urgent jobs
          available by arrangement.
        </p>
      </Section>

      <Section className="border-t border-metallic/40 text-center">
        <SectionHeading
          title="Precision Water-Cooled, Machine-Guided Sharpening"
          subtitle="I sharpen scissors using a water-cooled, machine-guided process that maintains correct angle, ride line, tension and alignment. This ensures your scissors cut cleanly, smoothly and safely."
        />
        <ScissorsIntroGallery />
      </Section>

      <Section className="border-t border-metallic/40 bg-surface">
        <SectionHeading title="Types of Scissors I Sharpen" />
        <div className="mt-6 inline-block text-left">
          <Checklist items={scissorTypes} />
        </div>
      </Section>

      <Section className="border-t border-metallic/40">
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
          <p className="mt-4 text-center text-text/80">
            Some scissors may vary depending on condition. You can send a
            photo for an exact quote.
          </p>
        </div>
      </Section>

      <Section className="border-t border-metallic/40 bg-surface text-center">
        <SectionHeading
          title="Drop-Off Sharpening (Campbelltown NSW)"
          subtitle="Drop-off sharpening is available by appointment. I sharpen from my dedicated sharpening area in Woodbine, listed publicly as Campbelltown NSW."
        />
      </Section>

      <Section className="border-t border-metallic/40 text-center">
        <SectionHeading title="Mail-In Sharpening (Australia-Wide)" />
        <p className="mt-4 text-text/80">
          You can post your scissors using a prepaid Australia Post
          satchel. Return postage is sent with tracking.
        </p>
        <p className="mt-4 text-text/80">
          Please contact me first before sending anything. I&apos;ll
          confirm pricing, turnaround time and the correct satchel size.
        </p>
      </Section>

      <Section className="border-t border-metallic/40 bg-surface text-center">
        <SectionHeading
          title="Turnaround Time"
          subtitle="Most scissors are completed within 1–2 days. Busy periods may take up to 3 days, depending on workload. Urgent jobs are available by arrangement."
        />
      </Section>

      <DropOffChecklist />

      <Section className="border-t border-metallic/40 bg-surface">
        <SectionHeading title="Frequently Asked Questions" />
        <div className="mt-6">
          <ServiceFaq items={faqs} />
        </div>
      </Section>

      <Section className="border-t border-metallic/40">
        <SectionHeading title="Important Notes" />
        <div className="mt-6 inline-block text-left">
          <Checklist items={importantNotes} />
        </div>
      </Section>

      <RelatedLinks links={relatedServiceLinks("/scissors-sharpening")} />

      <section className="border-t border-metallic/40 bg-surface px-6 py-20 text-center">
        <SectionHeading
          title="Ready to sharpen your scissors?"
          subtitle="Fast turnaround, professional results — drop off in Campbelltown."
        />
        <div className="mt-6">
          <CallNowButton />
        </div>
      </section>
    </PageLayout>
  );
}
