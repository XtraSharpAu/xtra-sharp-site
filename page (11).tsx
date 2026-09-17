import type { Metadata } from "next";
import Link from "next/link";
import Checklist from "@/components/Checklist";

export const metadata: Metadata = {
  title: "About Xtra Sharp – Campbelltown Sharpening Service",
  description:
    "Learn about Xtra Sharp, a Campbelltown sharpening service providing consistent, reliable knife and tool sharpening.",
};

export default function AboutPage() {
  return (
    <>
      <section className="flex flex-col items-center gap-4 px-6 py-20 text-center">
        <h1 className="text-4xl font-bold text-text sm:text-5xl">
          About Xtra Sharp
        </h1>
        <p className="max-w-2xl text-text/80">
          Local Campbelltown craftsman providing reliable knife and tool
          sharpening with consistent results and attention to detail.
        </p>
      </section>

      <section className="border-t border-metallic/40 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold text-text">
            Phillip&apos;s Background
          </h2>
          <Checklist
            items={[
              "Years of hands-on sharpening experience",
              "Focus on quality, consistency, and customer satisfaction",
              "Serving Campbelltown and surrounding areas",
            ]}
          />
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-accent/5 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold text-text">
            Tools &amp; Equipment
          </h2>
          <Checklist
            items={[
              "Precision sharpening systems",
              "Honing and finishing processes",
              "Careful handling of every knife and tool",
            ]}
          />
        </div>
      </section>

      <section className="border-t border-metallic/40 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold text-text">
            Sharpening Process
          </h2>
          <Checklist
            items={[
              "Assessing each blade individually",
              "Sharpening to the correct angle",
              "Honing and finishing for a clean, reliable edge",
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
            Mission &amp; Values
          </h2>
          <Checklist
            items={[
              "Reliable service",
              "Clear communication",
              "Consistent results",
              "Fair, fixed pricing",
            ]}
          />
        </div>
      </section>

      <section className="border-t border-metallic/40 px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-text">Get in Touch</h2>
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
