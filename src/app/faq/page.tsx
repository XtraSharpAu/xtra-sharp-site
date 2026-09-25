import type { Metadata } from "next";
import Link from "next/link";
import Checklist from "@/components/Checklist";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import CallNowButton from "@/components/CallNowButton";
import FAQ from "@/components/FAQ";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "FAQ | Xtra Sharp Campbelltown NSW",
  description:
    "Answers about sharpening services, pricing, mail-in and turnaround at Xtra Sharp in Campbelltown NSW — fast, professional results. Call 0412 974 277 now.",
  openGraph: {
    title: "FAQ | Xtra Sharp Campbelltown NSW",
    description:
      "Answers about sharpening services, pricing, mail-in and turnaround at Xtra Sharp in Campbelltown NSW — fast, professional results. Call 0412 974 277 now.",
    url: "https://xtrasharp.com.au/faq",
    type: "website",
    images: [
      "https://xtrasharp.com.au/og-faq.jpg",
      {
        url: "https://xtrasharp.com.au/brand-composite-campbelltown.jpg",
        alt: "Xtra Sharp – Professional Knife & Tool Sharpening Campbelltown NSW",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | Xtra Sharp Campbelltown NSW",
    description:
      "Answers about sharpening services, pricing, mail-in and turnaround at Xtra Sharp in Campbelltown NSW — fast, professional results. Call 0412 974 277 now.",
    images: [
      "https://xtrasharp.com.au/og-faq.jpg",
      "https://xtrasharp.com.au/brand-composite-campbelltown.jpg",
    ],
  },
  other: {
    "twitter:url": "https://xtrasharp.com.au/faq",
  },
  alternates: {
    canonical: "https://xtrasharp.com.au/faq",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What items do you sharpen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Knives, scissors, clipper blades, garden tools, processor blades, industrial blades, chisels.",
      },
    },
    {
      "@type": "Question",
      name: "How long does sharpening take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most sharpening is completed within 1–2 days. Busy periods may take up to 3 days, depending on workload. Urgent jobs are available by arrangement.",
      },
    },
    {
      "@type": "Question",
      name: "Do prices change depending on condition?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Some items may vary in price depending on condition. You can send a photo for an exact quote.",
      },
    },
  ],
};

const itemsSharpened = [
  "Kitchen knives",
  "Butcher knives",
  "Large knives",
  "Hunting knives",
  "Tomahawks",
  "Axes",
  "Hairdressing scissors",
  "Grooming scissors",
  "Sewing scissors",
  "A5 clipper blades",
  "Wide clipper blades",
  "Large animal blades",
  "Secateurs",
  "Hedge shears",
  "Small garden tools",
  "Home processor blades",
  "Large industrial processor blades",
  "Chisels",
];

export default function FaqPage() {
  return (
    <PageLayout>
      <JsonLd data={faqSchema} />
      <Breadcrumbs
        items={[
          { name: "Home", url: "https://xtrasharp.com.au" },
          { name: "FAQ", url: "https://xtrasharp.com.au/faq" },
        ]}
      />

      <section className="flex flex-col items-center gap-4 px-6 py-20 text-center sm:py-28">
        <h1 className="text-4xl font-bold text-text sm:text-5xl">
          Frequently Asked Questions
        </h1>
        <p className="max-w-2xl text-lg text-text/70">
          Answers to common questions about sharpening, pricing, mail-in
          service, packing, and turnaround.
        </p>
        <a
          href="tel:0412974277"
          className="mt-4 inline-block rounded-full bg-ctaRed px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-ctaRed/90"
        >
          Call Now — 0412 974 277
        </a>
      </section>

      <section className="border-t border-metallic/40 px-6 py-16">
        <div className="mx-auto max-w-2xl">
          <SectionHeading title="What items do you sharpen?" />
          <div className="mt-6 inline-block text-left">
            <Checklist items={itemsSharpened} />
          </div>
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-surface px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <FAQ
            question="How long does sharpening take?"
            answer="Most sharpening is completed within 1–2 days. During busy periods this can take up to 3 days, depending on workload. Urgent jobs are available by arrangement."
          />
        </div>
      </section>

      <section className="border-t border-metallic/40 px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <FAQ
            question="Do you sharpen damaged items?"
            answer="Yes — I can sharpen most damaged items including chipped knives, worn axes, dull clipper blades, and scissors needing tension adjustment. If something is badly damaged, I will contact you before proceeding."
          />
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-surface px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <FAQ
            question="Do prices change depending on condition?"
            answer="Some items may vary in price depending on condition, especially hunting knives, axes, tomahawks, and processor blades. You can send a photo for an exact quote before drop-off or mail-in."
          />
        </div>
      </section>

      <section className="border-t border-metallic/40 px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <FAQ
            question="How do I pack items for mail-in sharpening?"
            answer="Pack items securely using tea towels, rags, newspaper, or bubble wrap. Wrap each item separately. Make sure blade tips are well wrapped so they cannot punch through the packaging. Fold cardboard over tips or add extra layers of cloth or bubble wrap. Place items inside a strong packing box and pack tightly so they cannot move around. Include your return address, phone number, email address, and any notes about your items."
          />
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-surface px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <FAQ
            question="Do I need to contact you before posting anything?"
            answer="Yes — please contact me first before sending any items. I'll confirm pricing, turnaround time, and the correct Australia Post satchel size."
          />
        </div>
      </section>

      <section className="border-t border-metallic/40 px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading title="How does return postage work?" />
          <p className="mt-4 text-text/80">
            You can include a prepaid Australia Post satchel with your
            items. This is the easiest option and ensures your return
            postage is tracked.
          </p>
          <a
            href="https://auspost.com.au/parcels-mail/calculate-postage-and-delivery-times/prepaid-satchels"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-accent hover:underline"
          >
            auspost.com.au/parcels-mail/calculate-postage-and-delivery-times/prepaid-satchels
          </a>
          <p className="mt-4 text-text/80">
            If you prefer, I can add the postage cost to your final total
            &mdash; just let me know when booking.
          </p>
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-surface px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading title="Do you offer pick-up services?" />
          <p className="mt-4 text-text/80">
            Free pick-up and drop-off available for local schools in the
            Campbelltown area.
          </p>
          <p className="mt-4 text-text/80">
            Commercial collections are available for jobs over $300 within
            the local Campbelltown area. If your business is very close to
            me, I can often assist with smaller loads &mdash; just contact
            me.
          </p>
        </div>
      </section>

      <section className="border-t border-metallic/40 px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <FAQ
            question="Where are you located?"
            answer="Woodbine, Campbelltown NSW. Full address provided after booking."
          />
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-surface px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading title="How do I get a quote?" />
          <p className="mt-4 text-text/80">
            You can call or text{" "}
            <a href="tel:0412974277" className="text-accent underline">
              0412 974 277
            </a>
            , send a photo of your items, or email{" "}
            <a
              href="mailto:phil@xtrasharp.com.au"
              className="text-accent underline"
            >
              phil@xtrasharp.com.au
            </a>{" "}
            for an exact price.
          </p>
        </div>
      </section>

      <section className="border-t border-metallic/40 px-6 py-20 text-center">
        <CallNowButton />
        <p className="mt-4 text-text/70">
          Drop-off sharpening in Campbelltown NSW. Mail-in sharpening
          Australia-wide.
        </p>
        <p className="mt-2 text-text/70">
          Still have a question?{" "}
          <Link href="/contact" className="text-accent underline">
            Contact Xtra Sharp
          </Link>
          .
        </p>
        <p className="mt-6 flex flex-wrap justify-center gap-x-2 gap-y-3">
          <Link href="/pricing" className="text-accent hover:underline">
            View Pricing
          </Link>
          <span aria-hidden="true" className="text-text/30">
            |
          </span>
          <Link href="/service-area" className="text-accent hover:underline">
            Service Area
          </Link>
        </p>
      </section>
    </PageLayout>
  );
}
