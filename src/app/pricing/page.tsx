import type { Metadata } from "next";
import Checklist from "@/components/Checklist";
import Breadcrumbs from "@/components/Breadcrumbs";
import CallNowButton from "@/components/CallNowButton";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Pricing | Xtra Sharp Campbelltown NSW",
  description:
    "Clear, upfront pricing for knife, scissors, clipper blade, garden tool and processor blade sharpening at Xtra Sharp in Campbelltown NSW.",
  openGraph: {
    title: "Pricing | Xtra Sharp Campbelltown NSW",
    description:
      "Clear, upfront pricing for knife, scissors, clipper blade, garden tool and processor blade sharpening at Xtra Sharp in Campbelltown NSW.",
    url: "https://xtrasharp.com.au/pricing",
    type: "website",
    images: ["https://xtrasharp.com.au/og-pricing.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing | Xtra Sharp Campbelltown NSW",
    description:
      "Clear, upfront pricing for knife, scissors, clipper blade, garden tool and processor blade sharpening at Xtra Sharp in Campbelltown NSW.",
    images: ["https://xtrasharp.com.au/og-pricing.jpg"],
  },
  other: {
    "twitter:url": "https://xtrasharp.com.au/pricing",
  },
  alternates: {
    canonical: "https://xtrasharp.com.au/pricing",
  },
};

type PriceLine = { name: string; price: string };

type PricingSectionData = {
  title: string;
  items: PriceLine[];
  text: string;
};

const knives: PricingSectionData = {
  title: "Knives",
  items: [
    { name: "Small Victorinox paring knives", price: "$6" },
    { name: "Standard kitchen knives", price: "$10" },
    { name: "Large knives", price: "$15" },
    { name: "Butcher knives", price: "$10" },
    { name: "Hunting knives", price: "$10–$15" },
  ],
  text: "Water-cooled sharpening for safe, accurate edges.",
};

const scissors: PricingSectionData = {
  title: "Scissors",
  items: [
    { name: "Hairdressing scissors (bevel)", price: "$50" },
    { name: "Hairdressing scissors (convex)", price: "$70" },
    { name: "Grooming scissors (bevel)", price: "$25" },
    { name: "Grooming scissors (convex)", price: "$35" },
    { name: "Grooming thinning scissors", price: "$30" },
    { name: "Sewing / household scissors", price: "$15" },
  ],
  text: "Machine-guided sharpening with correct angle, ride line and tension.",
};

const clipperBlades: PricingSectionData = {
  title: "Clipper Blades",
  items: [
    { name: "A5 clipper blades", price: "$15" },
    { name: "Wide clipper blades", price: "$20" },
    { name: "Large-animal blades", price: "$20" },
  ],
  text: "Machine-guided sharpening with correct alignment and finishing.",
};

const gardenTools: PricingSectionData = {
  title: "Garden Tools",
  items: [
    { name: "Hedge shears", price: "$15" },
    { name: "Secateurs", price: "$15" },
    { name: "Axes / tomahawks", price: "$20" },
  ],
  text: "Water-cooled sharpening for clean, accurate edges.",
};

const processorBlades: PricingSectionData = {
  title: "Processor Blades",
  items: [
    { name: "Home processor blades", price: "$20–$25" },
    {
      name: "Large industrial blades",
      price: "$30+ depending on size and condition",
    },
  ],
  text: "Water-cooled sharpening for safe, accurate edges.",
};

const pricingSections: PricingSectionData[] = [
  knives,
  scissors,
  clipperBlades,
  gardenTools,
  processorBlades,
];

const importantNotes = [
  "No mobile sharpening",
  "No on-site sharpening",
  "Drop-off only",
  "Mail-in available Australia-wide",
];

function PricingBox({ title, items, text }: PricingSectionData) {
  return (
    <div className="mx-auto max-w-md">
      <SectionHeading title={title} />
      <div className="mt-6 rounded-lg border border-metallic/40 bg-background p-6">
        {items.map((line, index) => (
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
      <p className="mt-4 text-center text-text/80">{text}</p>
    </div>
  );
}

export default function PricingPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", url: "https://xtrasharp.com.au" },
          { name: "Pricing", url: "https://xtrasharp.com.au/pricing" },
        ]}
      />

      <section className="flex flex-col items-center gap-4 px-6 py-20 text-center sm:py-28">
        <h1 className="text-4xl font-bold text-text sm:text-5xl">Pricing</h1>
        <p className="max-w-2xl text-lg text-text/70">
          Clear, upfront pricing for all sharpening services.
        </p>
        <a
          href="tel:0412974277"
          className="mt-4 inline-block rounded-full bg-ctaRed px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-ctaRed/90"
        >
          Call Now — 0412 974 277
        </a>
      </section>

      {pricingSections.map((section, index) => (
        <section
          key={section.title}
          className={`border-t border-metallic/40 px-6 py-16 ${
            index % 2 === 1 ? "bg-surface" : ""
          }`}
        >
          <PricingBox {...section} />
        </section>
      ))}

      <section className="border-t border-metallic/40 bg-surface px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading
            title="Photo Quotes"
            subtitle="If you're unsure about pricing, you can send a photo for confirmation."
          />
        </div>
      </section>

      <section className="border-t border-metallic/40 px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading
            title="Drop-Off Sharpening (Campbelltown NSW)"
            subtitle="Drop-off sharpening is available by appointment. I sharpen from my dedicated sharpening area in Woodbine, listed publicly as Campbelltown NSW."
          />
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-surface px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-text">
            Mail-In Sharpening (Australia-Wide)
          </h2>
          <p className="mt-4 text-text/80">
            You can post items using a prepaid Australia Post satchel.
            Return postage is sent with tracking.
          </p>
          <p className="mt-4 text-text/80">
            Please contact me first before sending anything. I&apos;ll
            confirm pricing, turnaround time and the correct satchel size.
          </p>
        </div>
      </section>

      <section className="border-t border-metallic/40 px-6 py-16">
        <div className="mx-auto max-w-2xl">
          <SectionHeading title="Important Notes" />
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
