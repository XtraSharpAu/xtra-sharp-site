import type { Metadata } from "next";
import Checklist from "@/components/Checklist";

export const metadata: Metadata = {
  title: "Pricing | Xtra Sharp Campbelltown NSW",
  description:
    "Clear, simple sharpening prices for knives, scissors, clipper blades, garden tools, processor blades, and chisels in Campbelltown NSW.",
};

type PricingCategoryData = {
  title: string;
  subtitle?: string;
  items: { name: string; price: string }[];
};

const categories: PricingCategoryData[] = [
  {
    title: "Knife Sharpening",
    subtitle: "Water-cooled",
    items: [
      { name: "Standard knives", price: "$10" },
      { name: "Butcher knives", price: "$10" },
      { name: "Large knives", price: "$15" },
      { name: "Hunting knives", price: "$10–$15 (depending on condition)" },
    ],
  },
  {
    title: "Axes & Heavy Blades",
    subtitle: "Water-cooled",
    items: [
      { name: "Tomahawk", price: "$15" },
      { name: "Axe", price: "$15–$25 (depending on condition)" },
    ],
  },
  {
    title: "Scissors Sharpening",
    subtitle: "Machine-guided",
    items: [
      { name: "Hairdressing scissors (bevel)", price: "$50" },
      { name: "Hairdressing scissors (convex)", price: "$70" },
      { name: "Grooming scissors (bevel)", price: "$25" },
      { name: "Grooming scissors (convex)", price: "$35" },
      { name: "Sewing / dressmaking scissors", price: "$15" },
    ],
  },
  {
    title: "Clipper Blade Sharpening",
    subtitle: "Machine-guided",
    items: [
      { name: "A5 blades", price: "$15" },
      { name: "Wide blades", price: "$20" },
      { name: "Large animal blades", price: "$20" },
    ],
  },
  {
    title: "Garden Tools Sharpening",
    subtitle: "Water-cooled",
    items: [
      { name: "Secateurs", price: "$13" },
      { name: "Small garden tools", price: "$13" },
      { name: "Hedge shears", price: "$15" },
    ],
  },
  {
    title: "Processor Blades Sharpening",
    subtitle: "Water-cooled",
    items: [
      {
        name: "Home processor blades",
        price: "$10–$25 (depending on condition)",
      },
      { name: "Large industrial processor blades", price: "$30–$80" },
    ],
  },
  {
    title: "Chisels",
    items: [{ name: "Chisels", price: "$13" }],
  },
];

const whyChooseUs = [
  "13+ years sharpening experience",
  "Mirror Cut® accredited",
  "Flamin' Sharp licensee",
  "Water-cooled sharpening for items that require it",
  "Machine-guided sharpening with controlled hand input",
  "Fast turnaround",
  "Trusted by schools, restaurants, groomers, salons, and local businesses",
];

function PricingBox({ title, subtitle, items }: PricingCategoryData) {
  return (
    <div className="rounded-lg border border-metallic/40 bg-background p-6">
      <h3 className="text-xl font-semibold text-text">{title}</h3>
      {subtitle && <p className="text-sm text-text/60">{subtitle}</p>}
      <div className="mt-4">
        {items.map((line, index) => (
          <div
            key={line.name}
            className={`flex items-center justify-between gap-4 py-2 ${
              index > 0 ? "border-t border-metallic/40" : ""
            }`}
          >
            <span className="text-sm text-text/80">{line.name}</span>
            <span className="text-right text-sm font-semibold text-ctaRed">
              {line.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PricingPage() {
  return (
    <>
      <section className="flex flex-col items-center gap-4 px-6 py-20 text-center sm:py-28">
        <h1 className="text-4xl font-bold text-text sm:text-5xl">
          Pricing — Xtra Sharp
        </h1>
        <p className="max-w-2xl text-lg text-text/70">
          Clear, simple pricing for knives, scissors, clipper blades, garden
          tools, processor blades, and chisels.
        </p>
        <a
          href="tel:0412974277"
          className="mt-4 inline-block rounded-full bg-ctaRed px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-ctaRed/90"
        >
          Call Now — 0412 974 277
        </a>
      </section>

      <section className="border-t border-metallic/40 bg-surface px-6 py-20">
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
          {categories.map((category) => (
            <PricingBox key={category.title} {...category} />
          ))}
        </div>
      </section>

      <section className="border-t border-metallic/40 px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-text">
            Condition-Based Pricing
          </h2>
          <p className="mt-4 text-text/80">
            Some items may vary in price depending on condition. You can
            send a photo for an exact quote before drop-off or mail-in.
          </p>
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-surface px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-text">
            Mail-In Sharpening
          </h2>
          <p className="mt-4 text-text/80">
            Same pricing as above. Return postage added to final total
            (Australia Post tracked).
          </p>
        </div>
      </section>

      <section className="border-t border-metallic/40 px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-text">
            Free School Pick-Up
          </h2>
          <p className="mt-4 text-text/80">
            Free pick-up and drop-off available for local schools in the
            Campbelltown area.
          </p>
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-surface px-6 py-16">
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

      <section className="border-t border-metallic/40 px-6 py-20">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-3xl font-semibold text-text">
            Why Choose Xtra Sharp
          </h2>
          <div className="mt-6 inline-block text-left">
            <Checklist items={whyChooseUs} />
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
          Drop-off sharpening in Campbelltown NSW. Mail-in sharpening
          Australia-wide.
        </p>
      </section>
    </>
  );
}
