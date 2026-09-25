import type { Metadata } from "next";
import CommercialHero from "@/components/CommercialHero";
import CommercialSegment from "@/components/CommercialSegment";
import Checklist from "@/components/Checklist";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Commercial Clients Sharpening | Xtra Sharp Campbelltown NSW",
  description:
    "Professional sharpening for schools, salons, restaurants, and trades using precision-guided equipment for consistent, high-quality results.",
  openGraph: {
    title: "Commercial Clients Sharpening | Xtra Sharp Campbelltown NSW",
    description:
      "Professional sharpening for schools, salons, restaurants, and trades using precision-guided equipment for consistent, high-quality results.",
    url: "https://xtrasharp.com.au/commercial",
    type: "article",
    images: [
      "https://xtrasharp.com.au/og-commercial.jpg",
      {
        url: "https://xtrasharp.com.au/brand-composite-campbelltown.jpg",
        alt: "Xtra Sharp – Professional Knife & Tool Sharpening Campbelltown NSW",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Clients Sharpening | Xtra Sharp Campbelltown NSW",
    description:
      "Professional sharpening for schools, salons, restaurants, and trades using precision-guided equipment for consistent, high-quality results.",
    images: [
      "https://xtrasharp.com.au/og-commercial.jpg",
      "https://xtrasharp.com.au/brand-composite-campbelltown.jpg",
    ],
  },
  other: {
    "twitter:url": "https://xtrasharp.com.au/commercial",
  },
  alternates: {
    canonical: "https://www.xtrasharp.com.au/commercial",
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
      "Trade skills tools (chisels, plane blades, woodworking tools)",
    ],
    footer: "Bulk pricing available for large batches.",
  },
  {
    icon: "✂️",
    title: "Grooming Salons",
    items: [
      "Grooming scissors",
      "Specialty salon scissors",
      "Animal clipper blades only (A5 style)",
    ],
    note: "We only sharpen animal clipper blades (A5 style). Clipper blades used for cutting human hair use a different blade system and are not serviced.",
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
    title: "Trades & Craftspeople",
    items: [
      "Chisels",
      "Plane blades",
      "Woodworking tools",
      "General trade tools",
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
  "Campbelltown, NSW 2560",
  "Western Sydney",
  "Australia-wide (mail-in)",
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Commercial & Trade Sharpening",
  provider: {
    "@type": "LocalBusiness",
    name: "Xtra Sharp",
    url: "https://xtrasharp.com.au",
  },
  areaServed: "Campbelltown NSW, Macarthur region, Australia-wide (mail-in)",
  description:
    "Professional sharpening for schools, salons, restaurants, and trades using precision-guided equipment for consistent, high-quality results.",
  offers: {
    "@type": "Offer",
    priceCurrency: "AUD",
    url: "https://xtrasharp.com.au/pricing",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "AUD",
      minPrice: 6,
      maxPrice: 70,
    },
  },
};

export default function CommercialPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <Breadcrumbs
        items={[
          { name: "Home", url: "https://xtrasharp.com.au" },
          { name: "Commercial Clients", url: "https://xtrasharp.com.au/commercial" },
        ]}
      />

      <CommercialHero />

      <section className="border-t border-metallic/40 px-6 py-20">
        <h2 className="text-center text-3xl font-semibold text-text">
          Commercial Sectors We Serve
        </h2>
        <div className="mx-auto mt-10 grid max-w-5xl gap-6 sm:grid-cols-2">
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
          <p className="mt-1 font-medium text-text">Campbelltown, NSW 2560</p>
          <a
            href="https://www.google.com/maps/search/Xtra+Sharp+Campbelltown"
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
