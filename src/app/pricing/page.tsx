import type { Metadata } from "next";
import PricingHero from "@/components/PricingHero";
import PricingCategory from "@/components/PricingCategory";
import OptionCards from "@/components/OptionCards";
import Turnaround from "@/components/Turnaround";
import NeedAQuote from "@/components/NeedAQuote";

export const metadata: Metadata = {
  title: "Pricing | Xtra Sharp",
  description:
    "Clear, upfront pricing for knife, scissor, clipper blade and tool sharpening in Campbelltown NSW. Specialty tools quoted individually.",
};

const categories = [
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

const additionalServices = [
  {
    title: "Local Pick-Up",
    description: "Quoted based on distance and job size.",
  },
  {
    title: "Mail-In Return Postage",
    description: "Added to final invoice if required.",
  },
  {
    title: "Urgent Jobs",
    description: "Available on request — quoted depending on workload.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PricingHero />

      <section className="border-t border-metallic/40 px-6 py-20">
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
          {categories.map((category) => (
            <PricingCategory key={category.title} {...category} />
          ))}
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-accent/5 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-semibold text-text">
            Additional Services
          </h2>
          <div className="mt-10">
            <OptionCards options={additionalServices} />
          </div>
        </div>
      </section>

      <Turnaround />
      <NeedAQuote />
    </>
  );
}
