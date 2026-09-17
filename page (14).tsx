import type { Metadata } from "next";
import Link from "next/link";
import Checklist from "@/components/Checklist";
import PillList from "@/components/PillList";

export const metadata: Metadata = {
  title: "Batch Sharpening – Xtra Sharp Campbelltown",
  description:
    "Batch sharpening for kitchens, workshops, and businesses. Reliable edges and consistent results.",
};

export default function BatchSharpeningPage() {
  return (
    <>
      <section className="flex flex-col items-center gap-4 px-6 py-20 text-center">
        <h1 className="text-4xl font-bold text-text sm:text-5xl">
          Batch Sharpening Services
        </h1>
        <p className="max-w-2xl text-text/80">
          Fast, affordable sharpening for households, clubs, and businesses
          with multiple items.
        </p>
      </section>

      <section className="border-t border-metallic/40 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold text-text">
            What Can Be Sharpened in Batches
          </h2>
          <p className="mt-3 text-text/80">
            Batch sharpening covers most household and workshop items,
            sharpened together in a single job.
          </p>
          <Checklist
            items={[
              "Kitchen knives and chef knives",
              "Household and grooming scissors",
              "Clipper blades",
              "Chisels and workshop tools",
              "Mixed batches of different item types",
            ]}
          />
          <p className="mt-4 text-sm">
            <Link href="/services" className="text-accent hover:underline">
              See All Services →
            </Link>
          </p>
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-accent/5 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold text-text">
            How Batch Pricing Works
          </h2>
          <p className="mt-3 text-text/80">
            Batch pricing is based on the number and type of items in your
            order. The more items you bring, the more it costs to sharpen
            them all &mdash; but pricing per item works in your favour as the
            batch grows.
          </p>
          <h3 className="mt-6 text-lg font-medium text-text">
            What affects your quote
          </h3>
          <Checklist
            items={[
              "Total number of items",
              "Type and condition of each item",
              "Mixed item batches are quoted together",
              "A clear, upfront quote is provided before work begins",
            ]}
          />
          <p className="mt-4 text-sm">
            <Link href="/pricing" className="text-accent hover:underline">
              See Pricing →
            </Link>
          </p>
        </div>
      </section>

      <section className="border-t border-metallic/40 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold text-text">
            Turnaround Time
          </h2>
          <p className="mt-3 text-text/80">
            Batch jobs are scheduled around their size, so turnaround is
            confirmed at booking.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-metallic/40 bg-background p-5 text-center">
              <p className="text-sm text-text/70">Small batches</p>
              <p className="mt-1 font-semibold text-text">24&ndash;48 hours</p>
            </div>
            <div className="rounded-lg border border-metallic/40 bg-background p-5 text-center">
              <p className="text-sm text-text/70">Large batches</p>
              <p className="mt-1 font-semibold text-text">Quoted</p>
            </div>
            <div className="rounded-lg border border-metallic/40 bg-background p-5 text-center">
              <p className="text-sm text-text/70">Urgent jobs</p>
              <p className="mt-1 font-semibold text-text">
                Available on request
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-accent/5 px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold text-text">Ideal For</h2>
          <p className="mt-3 text-text/80">
            Batch sharpening suits anyone with a number of items to sharpen
            at once, including:
          </p>
          <div className="mt-6">
            <PillList
              items={[
                "Restaurants",
                "Butchers",
                "Schools",
                "Clubs",
                "Large households",
              ]}
            />
          </div>
        </div>
      </section>

      <section className="border-t border-metallic/40 px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-text">
            Ready to Book a Batch?
          </h2>
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
