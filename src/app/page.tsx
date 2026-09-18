import type { Metadata } from "next";
import CommercialSegment from "@/components/CommercialSegment";
import Checklist from "@/components/Checklist";

export const metadata: Metadata = {
  title: "Xtra Sharp | Professional Sharpening in Campbelltown NSW",
  description:
    "Knife, scissors, clipper blade, garden tool and processor blade sharpening. Fast turnaround. Mail-in available Australia-wide.",
  openGraph: {
    title: "Xtra Sharp | Professional Sharpening in Campbelltown NSW",
    description:
      "Knife, scissors, clipper blade, garden tool and processor blade sharpening. Fast turnaround. Mail-in available Australia-wide.",
    url: "https://xtrasharp.com.au",
    type: "website",
    images: ["https://xtrasharp.com.au/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Xtra Sharp | Professional Sharpening in Campbelltown NSW",
    description:
      "Knife, scissors, clipper blade, garden tool and processor blade sharpening. Fast turnaround. Mail-in available Australia-wide.",
    images: ["https://xtrasharp.com.au/og-image.jpg"],
  },
  other: {
    "twitter:url": "https://xtrasharp.com.au",
  },
};

const services = [
  {
    icon: "🔪",
    title: "Knife Sharpening",
    items: [
      "Chef's knives",
      "Butcher's knives",
      "Carving knives",
      "Fillet knives",
      "Cleavers",
      "Hunting knives",
      "Fishing knives",
      "Folding knives",
    ],
  },
  {
    icon: "✂️",
    title: "Scissors Sharpening",
    items: [
      "Hairdressing scissors",
      "Thinning scissors",
      "Grooming scissors",
      "Sewing scissors",
      "Dressmaking scissors",
      "Pinking shears",
    ],
  },
  {
    icon: "🐾",
    title: "Clipper Blades",
    items: ["A5 blades", "Wide blades", "Large animal blades"],
  },
  {
    icon: "🌿",
    title: "Garden Tools",
    items: ["Secateurs", "Axes", "Tomahawks", "Splitters"],
  },
  {
    icon: "🔧",
    title: "Trade Tools",
    items: ["Chisels", "Plane blades"],
  },
  {
    icon: "📦",
    title: "Mail-In Sharpening",
    items: ["Australia-wide service"],
  },
];

const whyChooseUs = [
  "13+ years sharpening experience",
  "Mirror Cut® accredited",
  "Flamin' Sharp licensee",
  "Water-cooled sharpening (no heat damage)",
  "Fast turnaround",
  "Friendly, reliable service",
  "Trusted by schools, restaurants, and local businesses",
];

function VideoPlaceholder() {
  return (
    <div className="flex aspect-video flex-col items-center justify-center gap-2 rounded-lg border border-metallic/40 bg-surface text-center">
      <span className="text-3xl">▶️</span>
      <span className="text-sm text-text/60">Video coming soon</span>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center gap-4 px-6 py-20 text-center sm:py-28">
        <h1 className="text-4xl font-bold text-text sm:text-5xl">
          Professional Knife &amp; Tool Sharpening
        </h1>
        <p className="max-w-2xl text-lg text-text/70">
          Drop-off sharpening in Campbelltown NSW
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
          <p className="text-text/80">
            Welcome to Xtra Sharp, your local sharpening specialist since
            2013. I provide high-quality sharpening for knives, scissors,
            clipper blades, garden tools, and commercial equipment &mdash;
            all from my dedicated sharpening area in Woodbine, Campbelltown
            NSW. Whether you&apos;re a home cook, a hairdresser, a pet
            groomer, a tradie, or a school, I make sure your tools stay
            sharp, safe, and ready for work.
          </p>
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-surface px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-semibold text-text">
            Services
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
            Commercial Pick-Up
          </h2>
          <p className="mt-4 text-text/80">
            Commercial collections are generally offered for jobs over $300
            within the local Campbelltown area. If your business is very
            close to me, I can often assist with smaller loads &mdash; just
            contact me to check availability.
          </p>
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-surface px-6 py-20">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-3xl font-semibold text-text">
            Why Choose Xtra Sharp
          </h2>
          <div className="mt-6 inline-block text-left">
            <Checklist items={whyChooseUs} />
          </div>
        </div>
      </section>

      <section className="border-t border-metallic/40 px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-semibold text-text">
            See Xtra Sharp in Action
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <VideoPlaceholder />
            <VideoPlaceholder />
          </div>
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-surface px-6 py-20 text-center">
        <a
          href="tel:0412974277"
          className="inline-block rounded-full bg-ctaRed px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-ctaRed/90"
        >
          Call Now — 0412 974 277
        </a>
        <p className="mt-4 text-text/70">
          Drop-off sharpening in Campbelltown NSW. Pick-up available for
          schools and nearby businesses.
        </p>
      </section>
    </>
  );
}
