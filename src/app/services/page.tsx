import type { Metadata } from "next";
import ServicesHero from "@/components/ServicesHero";
import ServiceDetail from "@/components/ServiceDetail";
import ServiceOptions from "@/components/ServiceOptions";
import Turnaround from "@/components/Turnaround";
import ServicesContact from "@/components/ServicesContact";

export const metadata: Metadata = {
  title: "Services & Pricing | Xtra Sharp",
  description:
    "Professional knife, scissor, clipper blade and tool sharpening in Campbelltown NSW. See what's included and common pricing for every service.",
  alternates: {
    canonical: "https://xtrasharp.com.au/services",
  },
};

const services = [
  {
    icon: "🔪",
    title: "Knife Sharpening",
    suitableFor:
      "kitchen knives, chef knives, utility knives, boning knives, hunting knives, pocket knives.",
    whatsIncluded: [
      "Professional edge restoration",
      "Burr removal and polish",
      "Tip repair available",
      "Minor bends straightened",
      "Light rust spot removal",
    ],
    pricing: [
      { label: "Standard kitchen knives", value: "$10" },
      { label: "Large chef knives / cleavers", value: "$15" },
      {
        label: "Damaged knives (large chips, broken tips)",
        value: "Quoted on inspection or photo quote",
      },
    ],
    highlights: ["Fast turnaround", "Professional finish", "Consistent edge quality"],
  },
  {
    icon: "✂️",
    title: "Scissor Sharpening",
    suitableFor:
      "household scissors, kitchen scissors, industrial scissors, grooming scissors.",
    whatsIncluded: [
      "Correct bevel restored",
      "Alignment check",
      "Smooth cutting action",
      "Lubrication and tension adjustment",
    ],
    pricing: [
      { label: "Standard scissors", value: "$15" },
      { label: "Heavy-duty / industrial", value: "$18" },
      { label: "Grooming scissors bevel", value: "$25" },
      { label: "Convex", value: "$35" },
      { label: "Thinning", value: "$35" },
      { label: "Damaged scissors", value: "Quoted on inspection" },
    ],
    highlights: ["Clean, smooth cut", "Correct tension", "Professional alignment"],
  },
  {
    icon: "🐾",
    title: "Clipper Blade Sharpening",
    suitableFor: "pet grooming blades, horse clipper blades, shearing combs.",
    whatsIncluded: [
      "Full clean",
      "Sharpening on calibrated plates",
      "Re-assembly",
      "Oil and test run",
    ],
    pricing: [
      { label: "A5 blades", value: "$15" },
      { label: "Wide blades / large animal blades", value: "$18" },
    ],
    highlights: ["Groomer-grade finish", "Smooth running", "Reliable performance"],
  },
  {
    icon: "🔧",
    title: "Chisel & Tool Sharpening",
    suitableFor:
      "woodworking chisels, plane blades, carving tools, workshop tools.",
    whatsIncluded: [
      "Correct bevel angle",
      "Honed edge",
      "Polished finish",
      "Light rust spot removal",
    ],
    pricing: [
      { label: "Standard chisels", value: "$12" },
      { label: "Plane blades", value: "$15" },
      { label: "Specialty tools", value: "Quoted on inspection" },
    ],
    highlights: ["Accurate angles", "Workshop-ready edges", "Ideal for tradies and DIY"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />

      <section className="border-t border-metallic/40 px-6 py-20">
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <ServiceDetail key={service.title} {...service} />
          ))}
        </div>
      </section>

      <ServiceOptions />
      <Turnaround />
      <ServicesContact />
    </>
  );
}
