import type { Metadata } from "next";
import Link from "next/link";
import CommercialSegment from "@/components/CommercialSegment";

export const metadata: Metadata = {
  title: "Sharpening Services | Xtra Sharp Campbelltown NSW",
  description:
    "Professional sharpening with water-cooled and machine-guided accuracy. Drop-off sharpening in Campbelltown NSW, mail-in sharpening Australia-wide.",
  openGraph: {
    title: "Sharpening Services | Xtra Sharp Campbelltown NSW",
    description:
      "Professional sharpening with water-cooled and machine-guided accuracy. Drop-off sharpening in Campbelltown NSW, mail-in sharpening Australia-wide.",
    url: "https://xtrasharp.com.au",
    type: "website",
    images: ["https://xtrasharp.com.au/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sharpening Services | Xtra Sharp Campbelltown NSW",
    description:
      "Professional sharpening with water-cooled and machine-guided accuracy. Drop-off sharpening in Campbelltown NSW, mail-in sharpening Australia-wide.",
    images: ["https://xtrasharp.com.au/og-image.jpg"],
  },
  other: {
    "twitter:url": "https://xtrasharp.com.au",
  },
  alternates: {
    canonical: "https://xtrasharp.com.au",
  },
};

const services = [
  {
    icon: "🔪",
    title: "Knife Sharpening",
    items: [
      "Small Victorinox paring knives",
      "Standard knives",
      "Large knives",
      "Butcher knives",
      "Hunting knives",
    ],
  },
  {
    icon: "✂️",
    title: "Scissors Sharpening",
    items: [
      "Hairdressing scissors",
      "Grooming scissors",
      "Grooming thinning scissors",
      "Sewing scissors",
      "Household scissors",
    ],
  },
  {
    icon: "🐾",
    title: "Clipper Blade Sharpening",
    items: [
      "A5 clipper blades",
      "Wide clipper blades",
      "Large-animal blades",
      "Grooming clipper blades",
      "Veterinary clipper blades",
    ],
  },
  {
    icon: "🌿",
    title: "Garden Tools Sharpening",
    items: ["Hedge shears", "Secateurs", "Axes / tomahawks"],
  },
  {
    icon: "⚙️",
    title: "Processor Blade Sharpening",
    items: ["Home processor blades", "Large industrial blades"],
  },
];

const pricingPreview = [
  { name: "Knives", price: "From $6" },
  { name: "Scissors", price: "From $15" },
  { name: "Clipper Blades", price: "From $15" },
  { name: "Garden Tools", price: "From $15" },
  { name: "Processor Blades", price: "From $20" },
];

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center gap-4 px-6 py-20 text-center sm:py-28">
        <h1 className="text-4xl font-bold text-text sm:text-5xl">
          Sharpening Services — Knives, Scissors, Clipper Blades &amp; More
        </h1>
        <p className="max-w-2xl text-lg text-text/70">
          Professional sharpening with water-cooled and machine-guided
          accuracy.
        </p>
        <a
          href="tel:0412974277"
          className="mt-4 inline-block rounded-full bg-ctaRed px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-ctaRed/90"
        >
          Call Now — 0412 974 277
        </a>
      </section>

      <section className="border-t border-metallic/40 bg-surface px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-semibold text-text">
            Our Services
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <CommercialSegment key={service.title} {...service} />
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
            You can post items using a prepaid Australia Post satchel.
            Return postage is sent with tracking. Please contact me first
            before sending anything.
          </p>
        </div>
      </section>

      <section className="border-t border-metallic/40 px-6 py-16">
        <div className="mx-auto max-w-md">
          <h2 className="text-center text-2xl font-semibold text-text">
            Pricing
          </h2>
          <div className="mt-6 rounded-lg border border-metallic/40 bg-background p-6">
            {pricingPreview.map((line, index) => (
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
          <h2 className="text-2xl font-semibold text-text">Service Area</h2>
          <p className="mt-4 text-text/80">
            Drop-off sharpening in Campbelltown NSW, servicing the Macarthur
            region. Mail-in sharpening available Australia-wide.
          </p>
          <div className="mt-4">
            <Link href="/service-area" className="text-accent hover:underline">
              View Service Area →
            </Link>
          </div>
        </div>
      </section>

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
