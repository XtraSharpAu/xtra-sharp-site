import type { Metadata } from "next";
import Link from "next/link";
import AboutHero from "@/components/AboutHero";
import OptionCards from "@/components/OptionCards";
import Checklist from "@/components/Checklist";
import PillList from "@/components/PillList";

export const metadata: Metadata = {
  title: "About | Xtra Sharp",
  description:
    "Xtra Sharp is an appointment-only knife, scissor, clipper blade and tool sharpening service based in Campbelltown NSW, serving Western Sydney.",
};

const differentiators = [
  {
    title: "Appointment-Only Workflow",
    description:
      "No walk-ins. Every job is booked, scheduled, and completed with full attention.",
  },
  {
    title: "Professional Machines & Calibrated Angles",
    description: "Consistent results across all blade types.",
  },
  {
    title: "Reliable Turnaround",
    description: "Standard jobs completed within 24–48 hours.",
  },
  {
    title: "Authentic, No-Nonsense Service",
    description:
      "No fluff, no upselling — just sharp tools and clear communication.",
  },
  {
    title: "Local Western Sydney Service Options",
    description: "Drop-off, mail-in, and selected local pick-up.",
  },
];

const whoWeWorkWith = [
  "Home cooks",
  "Chefs",
  "Groomers",
  "Tradies",
  "Woodworkers",
  "Schools",
  "Workshops",
  "Commercial clients",
];

export default function AboutPage() {
  return (
    <>
      <AboutHero />

      <section className="border-t border-metallic/40 bg-ausBlue/5 px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-text">Our Mission</h2>
          <p className="mt-4 text-text/80">
            To deliver sharp, reliable, professionally finished edges for
            homes, workshops, grooming salons, and commercial clients — with
            fast turnaround and clear communication.
          </p>
        </div>
      </section>

      <section className="border-t border-metallic/40 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-semibold text-text">
            What Makes Xtra Sharp Different
          </h2>
          <div className="mt-10">
            <OptionCards options={differentiators} />
          </div>
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-ausBlue/5 px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-text">
            Based in Campbelltown NSW
          </h2>
          <p className="mt-4 text-text/80">
            Xtra Sharp serves customers across Western Sydney, including:
          </p>
          <div className="mt-2 inline-block text-left">
            <Checklist
              items={[
                "Campbelltown",
                "Macarthur region",
                "Liverpool",
                "Camden",
                "Surrounding suburbs",
              ]}
            />
          </div>
          <p className="mt-6 text-text/80">
            Mail-in service is available Australia-wide.
          </p>
        </div>
      </section>

      <section className="border-t border-metallic/40 px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-text">
            Who We Work With
          </h2>
          <div className="mt-8">
            <PillList items={whoWeWorkWith} />
          </div>
          <p className="mt-6 text-text/80">
            Consistent, professional sharpening for all clients — no
            shortcuts, no compromises.
          </p>
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-ausBlue/5 px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-text">Our Promise</h2>
          <p className="mt-4 text-text/80">
            Every blade, tool, or clipper is sharpened with care,
            consistency, and attention to detail. If something needs repair
            or extra work, you&apos;ll be told upfront — no surprises.
          </p>
        </div>
      </section>

      <section className="border-t border-metallic/40 px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-text">Get in Touch</h2>
          <p className="mt-4 text-text/80">
            For bookings, quotes, or questions, contact Xtra Sharp and
            we&apos;ll arrange the best service option for your needs.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-full bg-ctaRed px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-ctaRed/90"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
