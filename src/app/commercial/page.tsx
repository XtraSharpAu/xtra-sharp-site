import type { Metadata } from "next";
import CommercialHero from "@/components/CommercialHero";
import CommercialSegment from "@/components/CommercialSegment";
import Checklist from "@/components/Checklist";

export const metadata: Metadata = {
  title: "Commercial Clients | Xtra Sharp",
  description:
    "Commercial sharpening for schools, grooming salons, restaurants and workshops in Campbelltown, Woodbine and Western Sydney, with batch pricing and scheduled cycles.",
  alternates: {
    canonical: "https://xtrasharp.com.au/commercial",
  },
};

const segments = [
  {
    icon: "🏫",
    title: "Schools & Education",
    items: [
      "Classroom scissors",
      "Art department scissors",
      "Food tech knives",
      "Workshop tools (chisels, plane blades, woodworking tools)",
    ],
    footer: "Bulk pricing available for large batches.",
  },
  {
    icon: "✂️",
    title: "Grooming Salons & Barbers",
    items: [
      "Grooming scissors",
      "Barber scissors",
      "Specialty salon scissors",
      "Animal clipper blades only (A5 style)",
    ],
    note: "We do not sharpen barber clipper blades. Barber clippers and grooming clippers use different blade systems.",
  },
  {
    icon: "🍽️",
    title: "Restaurants & Commercial Kitchens",
    items: [
      "Chef knives",
      "Kitchen knives",
      "Specialty blades",
      "Food prep tools",
    ],
    footer: "Fast turnaround keeps your kitchen running safely and efficiently.",
  },
  {
    icon: "🧰",
    title: "Workshops & Trades",
    items: [
      "Chisels",
      "Plane blades",
      "Woodworking tools",
      "General workshop tools",
    ],
    footer:
      "Perfect for carpenters, cabinet makers, and tradespeople needing reliable edges.",
  },
];

const batchServices = [
  "Batch pricing",
  "Scheduled sharpening cycles",
  "Priority turnaround",
  "Pick-up options (selected suburbs)",
  "Mail-in service Australia-wide",
];

const serviceArea = [
  "Campbelltown",
  "Woodbine",
  "Western Sydney",
  "Australia-wide (mail-in)",
];

export default function CommercialPage() {
  return (
    <>
      <CommercialHero />

      <section className="border-t border-metallic/40 px-6 py-20">
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
          {segments.map((segment) => (
            <CommercialSegment key={segment.title} {...segment} />
          ))}
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-accent/5 px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-text">
            📦 Batch &amp; Contract Sharpening
          </h2>
          <p className="mt-4 text-text/80">Commercial clients can access:</p>
          <div className="mt-6 inline-block text-left">
            <Checklist items={batchServices} />
          </div>
        </div>
      </section>

      <section className="border-t border-metallic/40 px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-text">
            📍 Service Area
          </h2>
          <p className="mt-4 text-text/80">We service:</p>
          <div className="mt-6 inline-block text-left">
            <Checklist items={serviceArea} />
          </div>
          <p className="mt-6 text-text/80">Location:</p>
          <p className="mt-1 font-medium text-text">
            22 Queenscliff Drive, Woodbine NSW 2560
          </p>
          <a
            href="https://www.google.com/maps/place/22+Queenscliff+Dr,+Woodbine+NSW+2560"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-accent hover:underline"
          >
            Open in Google Maps
          </a>
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-accent/5 px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-text">
            📞 Book Commercial Sharpening
          </h2>
          <p className="mt-4 space-x-2 text-text/80">
            <span>
              <strong className="text-text">Phone:</strong>{" "}
              <a
                href="tel:0412974277"
                className="text-accent hover:underline"
              >
                0412 974 277
              </a>
            </span>
            <span aria-hidden="true">|</span>
            <span>
              <strong className="text-text">Email:</strong>{" "}
              <a
                href="mailto:phil@xtrasharp.com.au"
                className="text-accent hover:underline"
              >
                phil@xtrasharp.com.au
              </a>
            </span>
          </p>
        </div>
      </section>
    </>
  );
}
