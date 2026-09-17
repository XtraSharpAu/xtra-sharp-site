import type { Metadata } from "next";
import Link from "next/link";
import Checklist from "@/components/Checklist";

export const metadata: Metadata = {
  title: "Contact Xtra Sharp – Campbelltown Sharpening",
  description:
    "Contact Xtra Sharp for sharpening bookings, questions, or quotes. Appointment-only drop-off in Woodbine NSW.",
};

export default function ContactPage() {
  return (
    <>
      <section className="flex flex-col items-center gap-4 px-6 py-20 text-center">
        <h1 className="text-4xl font-bold text-text sm:text-5xl">
          Contact Xtra Sharp
        </h1>
        <p className="max-w-2xl text-text/80">
          Get in touch for bookings, questions, or quotes.
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <Link href="/services" className="text-accent hover:underline">
            See All Services →
          </Link>
          <Link href="/pricing" className="text-accent hover:underline">
            See Pricing →
          </Link>
        </div>
      </section>

      <section className="border-t border-metallic/40 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold text-text">Phone</h2>
          <p className="mt-3 text-text/80">
            Call or text:{" "}
            <Link href="tel:0412974277" className="text-accent hover:underline">
              0412 974 277
            </Link>
          </p>
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-accent/5 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold text-text">Email</h2>
          <p className="mt-3 text-text/80">
            [Add preferred contact email here]
          </p>
        </div>
      </section>

      <section className="border-t border-metallic/40 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold text-text">
            Sharpening Location
          </h2>
          <Checklist
            items={[
              "Dedicated sharpening shed in Woodbine, NSW",
              "Full address provided after booking",
              "Appointment-only drop-off and pick-up",
            ]}
          />
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-accent/5 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold text-text">Hours</h2>
          <Checklist
            items={[
              "Flexible hours by arrangement",
              "Contact first to confirm drop-off or pick-up times",
            ]}
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
            href="tel:0412974277"
            className="mt-6 inline-block rounded-full bg-ctaRed px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-ctaRed/90"
          >
            Call or Text 0412 974 277
          </Link>
        </div>
      </section>
    </>
  );
}
