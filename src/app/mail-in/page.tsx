import type { Metadata } from "next";
import Link from "next/link";
import Checklist from "@/components/Checklist";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import CallNowButton from "@/components/CallNowButton";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";
import RelatedLinks from "@/components/RelatedLinks";
import { relatedServiceLinks } from "@/lib/serviceLinks";

export const metadata: Metadata = {
  title: "Mail-In Sharpening | Xtra Sharp Campbelltown NSW",
  description:
    "Australia-wide mail-in sharpening from Campbelltown NSW for knives, scissors, clipper blades and more, with tracked return postage. Call 0412 974 277.",
  openGraph: {
    title: "Mail-In Sharpening | Xtra Sharp Campbelltown NSW",
    description:
      "Australia-wide mail-in sharpening from Campbelltown NSW for knives, scissors, clipper blades and more, with tracked return postage. Call 0412 974 277.",
    url: "https://www.xtrasharp.com.au/mail-in",
    type: "article",
    images: ["https://www.xtrasharp.com.au/og-mail-in.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mail-In Sharpening | Xtra Sharp Campbelltown NSW",
    description:
      "Australia-wide mail-in sharpening from Campbelltown NSW for knives, scissors, clipper blades and more, with tracked return postage. Call 0412 974 277.",
    images: ["https://www.xtrasharp.com.au/og-mail-in.jpg"],
  },
  other: {
    "twitter:url": "https://www.xtrasharp.com.au/mail-in",
  },
  alternates: {
    canonical: "https://www.xtrasharp.com.au/mail-in",
  },
};

const howItWorks = [
  {
    title: "Contact me first",
    description: "Confirm what you're sending before you post anything.",
  },
  {
    title: "Pack your items securely",
    description:
      "Use soft materials such as tea towels, rags, newspaper, or bubble wrap.",
  },
  {
    title: "Wrap each item separately",
    description: "This prevents damage during postage.",
  },
  {
    title: "Protect blade tips",
    description:
      "Make sure blade tips are well wrapped so they cannot punch through the packaging. Fold cardboard over tips or add extra layers of cloth or bubble wrap.",
  },
  {
    title: "Pack into a strong box",
    description:
      "Place your wrapped items inside a strong packing box and pack tightly so they cannot move around.",
  },
  {
    title: "Include your details",
    description:
      "Include your return address, phone number, email address, and any notes about your items inside the box.",
  },
  {
    title: "Include your return satchel",
    description: "Include your prepaid Australia Post satchel inside the parcel.",
  },
  {
    title: "Send to Xtra Sharp",
    description: "Full address provided after booking.",
  },
  {
    title: "Arrival check",
    description:
      "Once items arrive, they will be checked for any damage. If something needs extra work or is not suitable for sharpening, I will contact you before proceeding.",
  },
  {
    title: "Sharpening process",
    description: null as string | null,
    subItems: [
      "Water-cooled sharpening: knives, processor blades, garden tools, axes, tomahawks.",
      "Machine-guided sharpening: scissors, clipper blades.",
    ] as string[] | undefined,
  },
  {
    title: "Fast turnaround",
    description: "1–2 days after arrival, up to 3 days during busy periods.",
  },
  {
    title: "Return postage",
    description:
      "Using your prepaid satchel or added to your final total if preferred.",
  },
];

const pricingReference = [
  { name: "Knives", price: "From $6" },
  { name: "Scissors", price: "From $15" },
  { name: "Clipper Blades", price: "From $15" },
  { name: "Garden Tools", price: "From $15" },
  { name: "Processor Blades", price: "From $20" },
];

const importantNotes = [
  "No mobile sharpening",
  "No on-site sharpening",
  "Drop-off only",
  "Mail-in available Australia-wide",
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Mail-In Sharpening",
  provider: {
    "@type": "LocalBusiness",
    name: "Xtra Sharp",
  },
  areaServed: "Australia-wide (mail-in)",
  offers: {
    "@type": "Offer",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "AUD",
      minPrice: 6,
    },
  },
};

const mailInChecklist = [
  "Clean items before packing",
  "Wrap each item securely to prevent movement",
  "Include your name, phone number, and return address",
  "Include a brief note listing the items you're sending",
  "Use a padded satchel or box for safe transport",
  "Keep your tracking number for reference",
];

export default function MailInPage() {
  return (
    <PageLayout>
      <JsonLd data={serviceSchema} />
      <Breadcrumbs
        items={[
          { name: "Home", url: "https://www.xtrasharp.com.au" },
          { name: "Mail-In Sharpening", url: "https://www.xtrasharp.com.au/mail-in" },
        ]}
      />

      <PageHero
        title="Mail-In Sharpening"
        subtitle="Australia-wide sharpening with tracked return postage."
      >
        <a
          href="tel:0412974277"
          className="mt-4 inline-block whitespace-nowrap rounded-full bg-ctaRed px-6 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-ctaRed/90"
        >
          Call Now — 0412 974 277
        </a>
      </PageHero>

      <Section className="border-t border-metallic/40 bg-surface text-center">
        <SectionHeading title="About Mail-In Sharpening" />
        <p className="text-text/80">
          Mail-in sharpening lets customers across Australia send knives,
          scissors, clipper blades, garden tools and processor blades to
          Xtra Sharp for professional sharpening without visiting in
          person. It&apos;s ideal for customers outside Campbelltown NSW,
          or anyone who prefers posting items rather than dropping them
          off. Common problems include difficulty finding a reliable local
          sharpening service, uncertainty over correct satchel sizing, and
          concerns about safe return postage for sharp items. At Xtra
          Sharp, items are packed securely, sharpened with the same care as
          drop-off customers, and returned using tracked Australia Post
          postage. Most items are completed within 1–2 days of arrival,
          with busy periods taking up to 3 days.
        </p>
      </Section>

      <Section className="border-t border-metallic/40">
        <SectionHeading title="How Mail-In Sharpening Works" />
        <ol className="mt-10 space-y-6">
          {howItWorks.map((step, index) => (
            <li key={step.title} className="flex items-start gap-4">
              <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-accent text-sm font-semibold text-background">
                {index + 1}
              </span>
              <div>
                <p className="font-medium text-text">{step.title}</p>
                {step.description && (
                  <p className="text-sm text-text/70">{step.description}</p>
                )}
                {step.subItems && (
                  <ul className="mt-2 space-y-1">
                    {step.subItems.map((sub) => (
                      <li
                        key={sub}
                        className="flex items-start gap-2 text-sm text-text/70"
                      >
                        <span className="mt-0.5 text-accent">✔</span>
                        <span>{sub}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section className="border-t border-metallic/40 bg-surface text-center">
        <SectionHeading
          title="Satchel Sizes"
          subtitle="The correct Australia Post satchel size depends on what you're sending and how many items are included. Please contact me first — I'll confirm the correct satchel size before you post anything."
        />
        <a
          href="https://auspost.com.au/parcels-mail/calculate-postage-and-delivery-times/prepaid-satchels"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-accent hover:underline"
        >
          auspost.com.au/parcels-mail/calculate-postage-and-delivery-times/prepaid-satchels
        </a>
      </Section>

      <Section className="border-t border-metallic/40">
        <div className="mx-auto max-w-md">
          <SectionHeading title="Pricing Reference" />
          <div className="mt-6 rounded-lg border border-metallic/40 bg-background p-6">
            {pricingReference.map((line, index) => (
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
          <div className="mt-4 text-center">
            <Link href="/pricing" className="text-accent hover:underline">
              View Full Pricing →
            </Link>
          </div>
        </div>
      </Section>

      <Section className="border-t border-metallic/40 bg-surface text-center">
        <SectionHeading
          title="Turnaround Time"
          subtitle="Most items are completed within 1–2 days of arrival. During busy periods this can take up to 3 days, depending on workload. Urgent jobs are available by arrangement. Return postage is sent using Australia Post with tracking."
        />
      </Section>

      <Section className="border-t border-metallic/40">
        <SectionHeading title="Mail-In Checklist" />
        <div className="mt-6 inline-block text-left">
          <Checklist items={mailInChecklist} />
        </div>
      </Section>

      <Section className="border-t border-metallic/40 bg-surface">
        <SectionHeading title="Important Notes" />
        <div className="mt-6 inline-block text-left">
          <Checklist items={importantNotes} />
        </div>
      </Section>

      <RelatedLinks links={relatedServiceLinks("/mail-in")} />

      <section className="border-t border-metallic/40 bg-surface px-6 py-20 text-center">
        <CallNowButton />
        <p className="mt-4 text-text/70">
          Drop-off sharpening in Campbelltown NSW. Mail-in sharpening
          Australia-wide.
        </p>
      </section>
    </PageLayout>
  );
}
