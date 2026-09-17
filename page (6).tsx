import type { Metadata } from "next";
import Link from "next/link";
import Checklist from "@/components/Checklist";

export const metadata: Metadata = {
  title: "Service Areas – Xtra Sharp Campbelltown",
  description:
    "Sharpening services for Campbelltown, Macarthur, Camden, Narellan, Gregory Hills, Oran Park, and NSW mail-in.",
};

export default function ServiceAreaPage() {
  return (
    <>
      <section className="flex flex-col items-center gap-4 px-6 py-20 text-center">
        <h1 className="text-4xl font-bold text-text sm:text-5xl">
          Service Areas
        </h1>
        <p className="max-w-2xl text-text/80">
          Xtra Sharp proudly serves Campbelltown and surrounding suburbs,
          with wider coverage available through mail-in sharpening.
        </p>
      </section>

      <section className="border-t border-metallic/40 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold text-text">
            Campbelltown (Primary Service Area)
          </h2>
          <Checklist
            items={[
              "Local sharpening for households, cooks, trades, and small businesses",
              "Convenient drop-off and pick-up options",
            ]}
          />
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-accent/5 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold text-text">
            Macarthur Region
          </h2>
          <Checklist
            items={[
              "Camden",
              "Narellan",
              "Gregory Hills",
              "Oran Park",
              "Harrington Park",
              "Surrounding suburbs",
            ]}
          />
        </div>
      </section>

      <section className="border-t border-metallic/40 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold text-text">
            Sydney Mail-In Coverage
          </h2>
          <Checklist
            items={[
              "Fast turnaround for customers across NSW",
              "Simple mail-in process",
              "Same fixed pricing as local customers",
            ]}
          />
          <p className="mt-4 text-sm">
            <Link href="/how-it-works" className="text-accent hover:underline">
              See How It Works →
            </Link>
          </p>
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-accent/5 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold text-text">Notes</h2>
          <Checklist
            items={["No mobile sharpening", "No on-site sharpening"]}
          />
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
