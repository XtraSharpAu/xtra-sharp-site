import type { Metadata } from "next";
import CommercialSegment from "@/components/CommercialSegment";
import Checklist from "@/components/Checklist";

export const metadata: Metadata = {
  title: "Knife Sharpening | Xtra Sharp Campbelltown NSW",
  description:
    "Professional knife sharpening in Campbelltown NSW. Water-cooled, machine-guided sharpening for kitchen, butcher, hunting, and outdoor knives.",
};

const knifeTypes = [
  {
    icon: "🍳",
    title: "Kitchen Knives",
    items: [
      "Chef's knives",
      "Paring knives",
      "Utility knives",
      "Cleavers",
      "Carving knives",
      "Boning knives",
      "Fillet knives",
    ],
  },
  {
    icon: "🥩",
    title: "Butcher & Meat Processing",
    items: [
      "Boning knives",
      "Skinning knives",
      "Breaking knives",
      "Trimming knives",
      "Meat processing blades",
    ],
  },
  {
    icon: "🏕️",
    title: "Hunting & Outdoor",
    items: [
      "Fixed-blade hunting knives",
      "Folding knives",
      "Camping knives",
      "Fishing knives",
      "Field knives",
    ],
  },
];

const processSteps = [
  {
    title: "Assessment",
    description: "Steel type, bevel angle, condition.",
  },
  {
    title: "Water-cooled grinding",
    description: "Prevents heat damage.",
  },
  {
    title: "Edge refinement",
    description: "Correct angle for knife type.",
  },
  {
    title: "Machine-guided sharpening",
    description: "Combined with precise hand control.",
  },
  {
    title: "Final inspection",
    description: "Tested for smooth cutting.",
  },
];

const pricing = [
  { name: "Standard knives", price: "$10" },
  { name: "Butcher knives", price: "$10" },
];

const whyChooseUs = [
  "13+ years sharpening experience",
  "Mirror Cut® accredited",
  "Flamin' Sharp licensee",
  "Water-cooled sharpening (no heat damage)",
  "Machine-guided sharpening with precise hand control",
  "Fast turnaround",
  "Trusted by schools, restaurants, and local businesses",
];

export default function KnifeSharpeningPage() {
  return (
    <>
      <section className="flex flex-col items-center gap-4 px-6 py-20 text-center sm:py-28">
        <h1 className="text-4xl font-bold text-text sm:text-5xl">
          Professional Knife Sharpening &mdash; Campbelltown NSW
        </h1>
        <p className="max-w-2xl text-lg text-text/70">
          Sharp, safe, reliable edges for kitchens, butchers, hunters, and
          outdoor use.
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
            At Xtra Sharp, every knife is sharpened using water-cooled
            equipment to protect the steel from heat damage. Your knives are
            sharpened with machine-guided precision and controlled hand
            input, giving you a clean, accurate edge every time. Whether
            you&apos;re a home cook, a butcher, a chef, or an outdoor
            enthusiast, your knives will cut smoothly, safely, and with less
            effort.
          </p>
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-surface px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-semibold text-text">
            Knife Types Sharpened
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {knifeTypes.map((type) => (
              <CommercialSegment key={type.title} {...type} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-metallic/40 px-6 py-20">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-3xl font-semibold text-text">
            Sharpening Process
          </h2>
          <ol className="mt-10 space-y-6">
            {processSteps.map((step, index) => (
              <li key={step.title} className="flex items-start gap-4">
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-accent text-sm font-semibold text-background">
                  {index + 1}
                </span>
                <div>
                  <p className="font-medium text-text">{step.title}</p>
                  <p className="text-sm text-text/70">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-surface px-6 py-16">
        <div className="mx-auto max-w-md">
          <h2 className="text-center text-2xl font-semibold text-text">
            Pricing
          </h2>
          <div className="mt-6 rounded-lg border border-metallic/40 bg-background p-6">
            {pricing.map((line, index) => (
              <div
                key={line.name}
                className={`flex items-center justify-between py-2 ${
                  index > 0 ? "border-t border-metallic/40" : ""
                }`}
              >
                <span className="text-text/80">{line.name}</span>
                <span className="font-semibold text-ctaRed">
                  {line.price}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-sm text-text/60">
            No bulk pricing.
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
          Drop-off sharpening in Campbelltown NSW. Free pick-up for local
          schools. Commercial pick-up available for larger jobs.
        </p>
      </section>
    </>
  );
}
