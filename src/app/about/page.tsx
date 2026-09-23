import type { Metadata } from "next";
import AboutHero from "@/components/AboutHero";
import Checklist from "@/components/Checklist";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "About | Xtra Sharp Campbelltown NSW",
  description:
    "Xtra Sharp is a professional knife and tool sharpening service based in Campbelltown, NSW 2560, serving Western Sydney.",
  openGraph: {
    title: "About | Xtra Sharp Campbelltown NSW",
    description:
      "Xtra Sharp is a professional knife and tool sharpening service based in Campbelltown, NSW 2560, serving Western Sydney.",
    url: "https://xtrasharp.com.au/about",
    type: "article",
    images: ["https://xtrasharp.com.au/og-about.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Xtra Sharp Campbelltown NSW",
    description:
      "Xtra Sharp is a professional knife and tool sharpening service based in Campbelltown, NSW 2560, serving Western Sydney.",
    images: ["https://xtrasharp.com.au/og-about.jpg"],
  },
  other: {
    "twitter:url": "https://xtrasharp.com.au/about",
  },
  alternates: {
    canonical: "https://xtrasharp.com.au/about",
  },
};

const workshop = [
  "Kitchen knives and chef knives",
  "Grooming and barber scissors",
  "Animal clipper blades (A5 and wide blades)",
  "Chisels and woodworking tools",
];

const promise = [
  "Honest quotes — no hidden costs",
  "Consistent quality across every job",
  "Fast turnaround (usually 1–2 days)",
  "Appointment-only service for reliability",
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", url: "https://xtrasharp.com.au" },
          { name: "About", url: "https://xtrasharp.com.au/about" },
        ]}
      />

      <AboutHero />

      <section className="border-t border-metallic/40 bg-accent/5 px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-text">🔧 Our Focus</h2>
          <p className="mt-4 text-text/80">
            Every blade, tool, and clipper is sharpened with precision and
            consistency. We don&apos;t rush jobs — each item is inspected,
            sharpened, and tested before return.
          </p>
        </div>
      </section>

      <section className="border-t border-metallic/40 px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-text">
            🪚 Our Workshop
          </h2>
          <p className="mt-4 text-text/80">Our workshop is equipped for:</p>
          <div className="mt-6 inline-block text-left">
            <Checklist items={workshop} />
          </div>
          <p className="mt-6 text-text/80">
            All sharpening is done in-house using calibrated machines and
            professional finishing stones.
          </p>
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-accent/5 px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-text">
            🧭 Our Promise
          </h2>
          <div className="mt-6 inline-block text-left">
            <Checklist items={promise} />
          </div>
          <p className="mt-6 text-text/80">
            If something needs repair or extra work, you&apos;ll be told
            upfront — no surprises.
          </p>
        </div>
      </section>

      <section className="border-t border-metallic/40 px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-text">📍 Location</h2>
          <p className="mt-2 font-medium text-text">Campbelltown, NSW 2560</p>
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
          <h2 className="text-3xl font-semibold text-text">📞 Contact</h2>
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
