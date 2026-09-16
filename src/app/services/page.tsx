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
};

const services = [
  {
    icon: "🔪",
    title: "Knife Sharpening",
    suitableFor:
      "kitchen knives, chef knives, utility knives, boning knives, hunting knives, pocket knives.",
    whatYouGet: [
      "Correct edge angle restored",
      "Burr removal and polish",
      "Tip repair (if required)",
      "Straightening of minor bends",
      "Rust spot removal (light)",
    ],
    pricing: [
      { label: "Standard kitchen knives", value: "$10–$15" },
      { label: "Large chef knives / cleavers", value: "$15–$20" },
      { label: "Specialty blades", value: "Quoted on inspection" },
    ],
  },
  {
    icon: "✂️",
    title: "Scissor Sharpening",
    suitableFor:
      "household scissors, kitchen scissors, industrial scissors, grooming scissors.",
    whatYouGet: [
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
  },
  {
    icon: "🐾",
    title: "Clipper Blade Sharpening",
    suitableFor: "pet grooming blades, horse clipper blades, shearing combs.",
    whatYouGet: [
      "Full clean",
      "Sharpening on calibrated plates",
      "Re-assembly",
      "Oil and test run",
    ],
    pricing: [
      { label: "Standard clipper blades", value: "$15" },
      { label: "Wide blades / specialty", value: "$20+" },
    ],
  },
  {
    icon: "🔧",
    title: "Chisel & Tool Sharpening",
    suitableFor:
      "woodworking chisels, plane blades, carving tools, workshop tools.",
    whatYouGet: [
      "Correct bevel angle",
      "Honed edge",
      "Polished finish",
      "Rust spot removal (light)",
    ],
    pricing: [
      { label: "Standard chisels", value: "$10" },
      { label: "Plane blades", value: "$15" },
      { label: "Specialty tools", value: "Quoted on inspection" },
    ],
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
