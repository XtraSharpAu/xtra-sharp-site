import type { Metadata } from "next";
import Link from "next/link";
import FaqHero from "@/components/FaqHero";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "FAQ | Xtra Sharp",
  description:
    "Answers to common questions about Xtra Sharp's knife, scissor, clipper blade and tool sharpening services in Campbelltown NSW.",
};

export default function FaqPage() {
  return (
    <>
      <FaqHero />

      <section className="border-t border-metallic/40 px-6 py-20">
        <FaqAccordion />
      </section>

      <section className="border-t border-metallic/40 bg-ausBlue/5 px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-text">
            Still Have Questions?
          </h2>
          <p className="mt-4 text-text/80">
            Get in touch and we&apos;ll help you out.
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
