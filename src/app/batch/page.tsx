import type { Metadata } from "next";
import BatchHero from "@/components/BatchHero";
import Checklist from "@/components/Checklist";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Batch Sharpening | Xtra Sharp Campbelltown NSW",
  description:
    "Batch sharpening for schools, salons, restaurants and workshops across Campbelltown NSW and Western Sydney, with priority handling and consistent edge quality.",
  openGraph: {
    title: "Batch Sharpening | Xtra Sharp Campbelltown NSW",
    description:
      "Batch sharpening for schools, salons, restaurants and workshops across Campbelltown NSW and Western Sydney, with priority handling and consistent edge quality.",
    url: "https://xtrasharp.com.au/batch",
    type: "article",
    images: ["https://xtrasharp.com.au/og-batch.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Batch Sharpening | Xtra Sharp Campbelltown NSW",
    description:
      "Batch sharpening for schools, salons, restaurants and workshops across Campbelltown NSW and Western Sydney, with priority handling and consistent edge quality.",
    images: ["https://xtrasharp.com.au/og-batch.jpg"],
  },
  other: {
    "twitter:url": "https://xtrasharp.com.au/batch",
  },
  alternates: {
    canonical: "https://xtrasharp.com.au/batch",
  },
};

const batchItems = [
  "Kitchen knife sets",
  "School scissors (classroom or art department)",
  "Grooming scissors",
  "Barber scissors",
  "Animal clipper blades (A5 style only)",
  "Workshop tools (chisels, plane blades, woodworking tools)",
];

const pricingFactors = [
  "Number of items",
  "Type of tools",
  "Condition of edges",
  "Turnaround time required",
];

const turnaround = [
  "1–2 days for most batches",
  "Up to 3 days during busy periods, depending on workload",
  "Urgent jobs available by arrangement",
  "Priority handling for commercial clients",
];

const pickupDropoff = [
  "Local schools",
  "Larger commercial jobs over $300",
];

const mailIn = ["Secure packaging", "Tracking", "Clear item list inside the parcel"];

export default function BatchPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", url: "https://xtrasharp.com.au" },
          { name: "Batch Sharpening", url: "https://xtrasharp.com.au/batch" },
        ]}
      />

      <BatchHero />

      <section className="border-t border-metallic/40 px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-text">
            📦 What Counts as a Batch?
          </h2>
          <p className="mt-4 text-text/80">
            A batch is any job with multiple items sharpened at the same
            time, including:
          </p>
          <div className="mt-6 inline-block text-left">
            <Checklist items={batchItems} />
          </div>
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-accent/5 px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-text">
            💰 Batch Pricing Structure
          </h2>
          <p className="mt-4 text-text/80">Batch pricing is based on:</p>
          <div className="mt-6 inline-block text-left">
            <Checklist items={pricingFactors} />
          </div>
          <p className="mt-6 rounded-md border border-ctaRed/40 bg-ctaRed/5 px-4 py-3 text-sm text-ctaRed">
            Xtra Sharp does not offer discounts for bulk sharpening. All
            items are priced individually to maintain consistent quality.
          </p>
        </div>
      </section>

      <section className="border-t border-metallic/40 px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-text">
            ⚡ Fast Turnaround
          </h2>
          <p className="mt-4 text-text/80">
            Most batch jobs are completed within:
          </p>
          <div className="mt-6 inline-block text-left">
            <Checklist items={turnaround} />
          </div>
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-accent/5 px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-text">
            🚚 Pick-Up &amp; Drop-Off Options
          </h2>
          <p className="mt-4 text-text/80">
            Pick-up and drop-off are available only for:
          </p>
          <div className="mt-6 inline-block text-left">
            <Checklist items={pickupDropoff} />
          </div>
          <p className="mt-6 text-text/80">
            This ensures travel time is reserved for substantial workloads.
          </p>
        </div>
      </section>

      <section className="border-t border-metallic/40 px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-text">
            📦 Australia-Wide Mail-In Batches
          </h2>
          <p className="mt-4 text-text/80">
            Mail-in batch sharpening is available for customers across
            Australia.
          </p>
          <p className="mt-4 text-text/70">Recommended:</p>
          <div className="mt-2 inline-block text-left">
            <Checklist items={mailIn} />
          </div>
          <p className="mt-6 text-text/80">
            Return postage options available.
          </p>
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-accent/5 px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-text">📍 Location</h2>
          <p className="mt-4 text-text/80">Workshop address:</p>
          <p className="mt-1 font-medium text-text">Campbelltown, NSW 2560</p>
          <p className="mt-6 text-text/70">Campbelltown SEO link:</p>
          <a
            href="https://www.google.com/maps/search/Xtra+Sharp+Campbelltown"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-block text-accent hover:underline"
          >
            Knife Sharpening in Campbelltown
          </a>
        </div>
      </section>

      <section className="border-t border-metallic/40 px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-text">
            📞 Book a Batch Job
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
