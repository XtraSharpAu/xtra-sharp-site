import type { Metadata } from "next";
import Link from "next/link";
import ServicesHero from "@/components/ServicesHero";
import ServiceDetail from "@/components/ServiceDetail";
import ServiceOptions from "@/components/ServiceOptions";
import Turnaround from "@/components/Turnaround";
import ServicesContact from "@/components/ServicesContact";

export const metadata: Metadata = {
  title: "Sharpening Services – Xtra Sharp Campbelltown",
  description:
    "Knife sharpening, tool sharpening, batch sharpening, and commercial sharpening services in Campbelltown NSW.",
};

const services = [
  {
    icon: "🔪",
    title: "Knife Sharpening",
    suitableFor:
      "kitchen knives, chef knives, utility knives, boning knives, hunting knives, pocket knives.",
    whatsIncluded: [
      "Correct edge angle restored",
      "Burr removal and polish",
      "Tip repair (if required)",
      "Straightening of minor bends",
      "Light rust spot removal",
    ],
    pricing: [
      { label: "Standard kitchen knives", value: "$10–$15" },
      { label: "Large chef knives / cleavers", value: "$15–$20" },
      { label: "Specialty blades", value: "Quoted on inspection" },
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
      { label: "Heavy-duty / industrial", value: "$20+" },
      { label: "Grooming scissors", value: "Quoted on inspection" },
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
      { label: "Standard clipper blades", value: "$15" },
      { label: "Wide blades / specialty", value: "$20+" },
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
      { label: "Standard chisels", value: "$10" },
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
        <div className="mx-auto mt-8 flex max-w-5xl flex-wrap justify-center gap-6 text-sm">
          <Link href="/batch-sharpening" className="text-accent hover:underline">
            Have multiple items? See Batch Sharpening →
          </Link>
          <Link
            href="/commercial-sharpening"
            className="text-accent hover:underline"
          >
            Sharpening for businesses? See Commercial Sharpening →
          </Link>
        </div>
      </section>

      <ServiceOptions />

      <section className="border-t border-metallic/40 px-6 py-8 text-center">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-6 text-sm">
          <Link href="/how-it-works" className="text-accent hover:underline">
            See How It Works →
          </Link>
          <Link href="/service-area" className="text-accent hover:underline">
            Check Service Area →
          </Link>
        </div>
      </section>

      <Turnaround />
      <ServicesContact />
    </>
  );
}
