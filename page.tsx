import type { Metadata } from "next";
import Link from "next/link";
import Checklist from "@/components/Checklist";
import PillList from "@/components/PillList";
import PricingCategory from "@/components/PricingCategory";

export const metadata: Metadata = {
  title: "Commercial Sharpening – Xtra Sharp Campbelltown",
  description:
    "Commercial sharpening for restaurants, cafés, trades, and small businesses across Campbelltown and Macarthur.",
};

const pricingCategories = [
  {
    icon: "🔪",
    title: "Knife Sharpening",
    items: [
      {
        name: "Standard Kitchen Knives",
        price: "$10–$15 each",
        description:
          "Includes edge angle restoration, burr removal, polish, and minor tip repair.",
      },
      {
        name: "Large Chef Knives / Cleavers",
        price: "$15–$20 each",
        description: "Includes full edge rebuild and finish.",
      },
      {
        name: "Specialty Blades",
        price: "Quoted on inspection",
        description:
          "Hunting knives, boning knives, pocket knives, and unique profiles.",
      },
    ],
  },
  {
    icon: "✂️",
    title: "Scissor Sharpening",
    items: [
      {
        name: "Standard Household Scissors",
        price: "$15 each",
        description:
          "Includes bevel correction, alignment, lubrication, and tension adjustment.",
      },
      {
        name: "Industrial / Heavy-Duty Scissors",
        price: "$20+ each",
        description: "For thicker blades or workshop use.",
      },
      {
        name: "Grooming Scissors",
        price: "Quoted on inspection",
        description: "Precision alignment and smooth cutting finish.",
      },
    ],
  },
  {
    icon: "🐾",
    title: "Clipper Blade Sharpening",
    items: [
      {
        name: "Standard Clipper Blades",
        price: "$15 each",
        description:
          "Includes full clean, sharpening, re-assembly, oil, and test run.",
      },
      {
        name: "Wide / Specialty Blades",
        price: "$20+ each",
        description: "For grooming, horse clippers, and shearing equipment.",
      },
    ],
  },
  {
    icon: "🔧",
    title: "Chisel & Tool Sharpening",
    items: [
      {
        name: "Standard Chisels",
        price: "$10 each",
        description: "Correct bevel angle and honed edge.",
      },
      {
        name: "Plane Blades",
        price: "$15 each",
        description: "Polished finish and accurate angle.",
      },
      {
        name: "Specialty Tools",
        price: "Quoted on inspection",
        description: "Carving tools, workshop tools, and unique profiles.",
      },
    ],
  },
];

export default function CommercialSharpeningPage() {
  return (
    <>
      <section className="flex flex-col items-center gap-4 px-6 py-20 text-center">
        <h1 className="text-4xl font-bold text-text sm:text-5xl">
          Commercial Sharpening Services
        </h1>
        <p className="max-w-2xl text-text/80">
          Reliable sharpening for businesses that depend on sharp tools.
        </p>
      </section>

      <section className="border-t border-metallic/40 px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold text-text">
            Industries Served
          </h2>
          <p className="mt-3 text-text/80">
            Xtra Sharp works with a range of businesses and organisations
            across Campbelltown, Western Sydney & the Macarthur region:
          </p>
          <div className="mt-6">
            <PillList
              items={[
                "Restaurants",
                "Butchers",
                "Schools",
                "Childcare centres",
                "Grooming salons",
                "Tradies & workshops",
              ]}
            />
          </div>
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-accent/5 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold text-text">
            Scheduled Sharpening
          </h2>
          <p className="mt-3 text-text/80">
            Businesses can book sharpening on a schedule that suits their
            operating needs, with items dropped off or sent in by mail-in
            service.
          </p>
          <h3 className="mt-6 text-lg font-medium text-text">
            How it works
          </h3>
          <Checklist
            items={[
              "Book an appointment or set up a regular schedule",
              "Drop off items in Campbelltown or send via mail-in",
              "Consistent turnaround so you can plan around it",
              "Confirmation provided when items are ready",
            ]}
          />
        </div>
      </section>

      <section className="border-t border-metallic/40 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-semibold text-text">
            Pricing
          </h2>
          <p className="mt-3 text-center text-text/80">
            Commercial jobs are priced using the same fixed rates as all
            Xtra Sharp customers &mdash; clear and upfront, with no bulk
            pricing or discounts.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {pricingCategories.map((category) => (
              <PricingCategory key={category.title} {...category} />
            ))}
          </div>
          <p className="mt-8 text-center text-sm">
            <Link href="/pricing" className="text-accent hover:underline">
              See Full Pricing →
            </Link>
          </p>
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-accent/5 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold text-text">
            Why Businesses Choose Xtra Sharp
          </h2>
          <Checklist
            items={[
              "Professional, consistent results",
              "Appointment-only service — no disruption to your day",
              "Reliable turnaround you can plan around",
              "Mail-in option for convenience",
              "Clear, upfront fixed pricing",
              "Trusted by schools and commercial clients",
            ]}
          />
          <p className="mt-4 text-sm">
            <Link href="/services" className="text-accent hover:underline">
              See All Services →
            </Link>
          </p>
        </div>
      </section>

      <section className="border-t border-metallic/40 px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-text">Ready to Book?</h2>
          <p className="mt-4 text-text/80">
            Appointments are essential &mdash; no walk-ins.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-full bg-ctaRed px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-ctaRed/90"
          >
            Book Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
