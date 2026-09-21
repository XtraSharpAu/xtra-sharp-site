import type { Metadata } from "next";
import Link from "next/link";
import Checklist from "@/components/Checklist";
import Breadcrumbs from "@/components/Breadcrumbs";
import CallNowButton from "@/components/CallNowButton";

export const metadata: Metadata = {
  title: "Mail-In Sharpening | Xtra Sharp Campbelltown NSW",
  description:
    "Professional mail-in sharpening Australia-wide for knives, scissors, clipper blades and more, with a prepaid satchel and tracked return postage.",
  openGraph: {
    title: "Mail-In Sharpening | Xtra Sharp Campbelltown NSW",
    description:
      "Professional mail-in sharpening Australia-wide for knives, scissors, clipper blades and more, with a prepaid satchel and tracked return postage.",
    url: "https://xtrasharp.com.au/mail-in",
    type: "article",
    images: ["https://xtrasharp.com.au/og-mail-in.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mail-In Sharpening | Xtra Sharp Campbelltown NSW",
    description:
      "Professional mail-in sharpening Australia-wide for knives, scissors, clipper blades and more, with a prepaid satchel and tracked return postage.",
    images: ["https://xtrasharp.com.au/og-mail-in.jpg"],
  },
  other: {
    "twitter:url": "https://xtrasharp.com.au/mail-in",
  },
  alternates: {
    canonical: "https://xtrasharp.com.au/mail-in",
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
    <>
      <Breadcrumbs
        items={[
          { name: "Home", url: "https://xtrasharp.com.au" },
          { name: "Mail-In Sharpening", url: "https://xtrasharp.com.au/mail-in" },
        ]}
      />

      <section className="flex flex-col items-center gap-4 px-6 py-20 text-center sm:py-28">
        <h1 className="text-4xl font-bold text-text sm:text-5xl">
          Mail-In Sharpening
        </h1>
        <p className="max-w-2xl text-lg text-text/70">
          Australia-wide sharpening with tracked return postage.
        </p>
        <a
          href="tel:0412974277"
          className="mt-4 inline-block whitespace-nowrap rounded-full bg-ctaRed px-6 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-ctaRed/90"
        >
          Call Now — 0412 974 277
        </a>
      </section>

      <section className="border-t border-metallic/40 px-6 py-20">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-3xl font-semibold text-text">
            How Mail-In Sharpening Works
          </h2>
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
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-surface px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-text">
            Satchel Sizes
          </h2>
          <p className="mt-4 text-text/80">
            The correct Australia Post satchel size depends on what
            you&apos;re sending and how many items are included. Please contact me
            first &mdash; I&apos;ll confirm the correct satchel size before
            you post anything.
          </p>
          <a
            href="https://auspost.com.au/parcels-mail/calculate-postage-and-delivery-times/prepaid-satchels"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-accent hover:underline"
          >
            auspost.com.au/parcels-mail/calculate-postage-and-delivery-times/prepaid-satchels
          </a>
        </div>
      </section>

      <section className="border-t border-metallic/40 px-6 py-16">
        <div className="mx-auto max-w-md">
          <h2 className="text-center text-2xl font-semibold text-text">
            Pricing Reference
          </h2>
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
      </section>

      <section className="border-t border-metallic/40 bg-surface px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-text">
            Turnaround Time
          </h2>
          <p className="mt-4 text-text/80">
            Most items are completed within 1–2 days of arrival. During busy
            periods this can take up to 3 days, depending on workload.
            Urgent jobs are available by arrangement. Return postage is sent
            using Australia Post with tracking.
          </p>
        </div>
      </section>

      <section className="border-t border-metallic/40 px-6 py-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-2xl font-semibold text-text">
            Mail-In Checklist
          </h2>
          <div className="mt-6 inline-block text-left">
            <Checklist items={mailInChecklist} />
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

      <section className="border-t border-metallic/40 bg-surface px-6 py-20 text-center">
        <CallNowButton />
        <p className="mt-4 text-text/70">
          Drop-off sharpening in Campbelltown NSW. Mail-in sharpening
          Australia-wide.
        </p>
      </section>
    </>
  );
}
