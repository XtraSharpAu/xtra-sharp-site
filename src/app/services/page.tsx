import type { Metadata } from "next";
import ServicesHero from "@/components/ServicesHero";
import ServiceDetail from "@/components/ServiceDetail";
import ServiceOptions from "@/components/ServiceOptions";
import Turnaround from "@/components/Turnaround";
import ServicesContact from "@/components/ServicesContact";
import DropOffChecklist from "@/components/DropOffChecklist";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Services & Pricing | Xtra Sharp Campbelltown NSW",
  description:
    "Professional knife, scissors, clipper blade, garden tool and processor blade sharpening in Campbelltown NSW. See what's included and pricing for every service.",
  openGraph: {
    title: "Services & Pricing | Xtra Sharp Campbelltown NSW",
    description:
      "Professional knife, scissors, clipper blade, garden tool and processor blade sharpening in Campbelltown NSW. See what's included and pricing for every service.",
    url: "https://www.xtrasharp.com.au/services",
    type: "article",
    images: ["https://www.xtrasharp.com.au/og-services.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services & Pricing | Xtra Sharp Campbelltown NSW",
    description:
      "Professional knife, scissors, clipper blade, garden tool and processor blade sharpening in Campbelltown NSW. See what's included and pricing for every service.",
    images: ["https://www.xtrasharp.com.au/og-services.jpg"],
  },
  other: {
    "twitter:url": "https://www.xtrasharp.com.au/services",
  },
  alternates: {
    canonical: "https://www.xtrasharp.com.au/services",
  },
};

const services = [
  {
    icon: "🔪",
    title: "Knife Sharpening",
    suitableFor:
      "kitchen knives, butcher knives, large knives, hunting knives, small paring knives.",
    whatsIncluded: [
      "Water-cooled sharpening to protect the steel from heat damage",
      "Burr removal",
      "Correct angle restoration",
      "Final cutting test",
    ],
    pricing: [
      { label: "Small Victorinox paring knives", value: "$6" },
      { label: "Standard kitchen knives", value: "$10" },
      { label: "Large knives", value: "$15" },
      { label: "Butcher knives", value: "$10" },
      { label: "Hunting knives", value: "$10–$15" },
    ],
    highlights: ["Fast turnaround", "Water-cooled precision", "Consistent edge quality"],
  },
  {
    icon: "✂️",
    title: "Scissors Sharpening",
    suitableFor:
      "hairdressing scissors, grooming scissors, thinning scissors, sewing and household scissors.",
    whatsIncluded: [
      "Machine-guided sharpening for correct angle, ride line and tension",
      "Alignment check",
      "Smooth cutting action",
    ],
    pricing: [
      { label: "Hairdressing scissors (bevel)", value: "$50" },
      { label: "Hairdressing scissors (convex)", value: "$70" },
      { label: "Grooming scissors (bevel)", value: "$25" },
      { label: "Grooming scissors (convex)", value: "$35" },
      { label: "Grooming thinning scissors", value: "$30" },
      { label: "Sewing / household scissors", value: "$15" },
    ],
    highlights: ["Clean, smooth cut", "Correct tension", "Professional alignment"],
  },
  {
    icon: "🐾",
    title: "Clipper Blade Sharpening",
    suitableFor: "A5 clipper blades, wide clipper blades, large-animal blades.",
    whatsIncluded: [
      "Machine-guided sharpening for correct alignment and tracking",
      "Individual cleaning and alignment",
      "Test run before return",
    ],
    pricing: [
      { label: "A5 clipper blades", value: "$15" },
      { label: "Wide clipper blades", value: "$20" },
      { label: "Large-animal blades", value: "$20" },
    ],
    highlights: ["Groomer-grade finish", "Smooth running", "Reliable performance"],
  },
  {
    icon: "🌿",
    title: "Garden Tools Sharpening",
    suitableFor: "hedge shears, secateurs, axes and tomahawks.",
    whatsIncluded: [
      "Water-cooled sharpening to protect the steel from heat damage",
      "Clean, accurate edge",
    ],
    pricing: [
      { label: "Hedge shears", value: "$15" },
      { label: "Secateurs", value: "$15" },
      { label: "Axes / tomahawks", value: "$20" },
    ],
    highlights: ["Clean cuts", "Water-cooled precision", "Safer, easier pruning"],
  },
  {
    icon: "⚙️",
    title: "Processor Blade Sharpening",
    suitableFor: "home processor blades and large industrial processor blades.",
    whatsIncluded: [
      "Water-cooled sharpening to protect the steel from heat damage",
      "Safe, accurate edges",
    ],
    pricing: [
      { label: "Home processor blades", value: "$20–$25" },
      {
        label: "Large industrial blades",
        value: "$30+ depending on size and condition",
      },
    ],
    highlights: ["Home & commercial", "Water-cooled precision", "Consistent results"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", url: "https://www.xtrasharp.com.au" },
          { name: "Services", url: "https://www.xtrasharp.com.au/services" },
        ]}
      />

      <ServicesHero />

      <section className="border-t border-metallic/40 px-6 py-20">
        <h2 className="text-center text-3xl font-semibold text-text">
          Our Services
        </h2>
        <div className="mx-auto mt-10 grid max-w-5xl gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <ServiceDetail key={service.title} {...service} />
          ))}
        </div>
      </section>

      <ServiceOptions />
      <Turnaround />

      <DropOffChecklist surface />

      <ServicesContact />
    </>
  );
}
