import type { Metadata } from "next";
import Link from "next/link";
import About from "@/components/About";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServiceArea from "@/components/ServiceArea";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Xtra Sharp – Knife & Tool Sharpening in Campbelltown NSW",
  description:
    "Professional knife and tool sharpening in Campbelltown NSW. Reliable results, fair pricing, fast turnaround.",
};

export default function Home() {
  return (
    <>
      <section
        id="hero"
        className="relative flex flex-col items-center justify-center gap-4 overflow-hidden px-6 py-20 text-center sm:py-28"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(196,20,28,0.12),transparent_60%)]"
        />
        <h1 className="relative text-4xl font-bold text-text sm:text-5xl">
          Sharp Tools. Sharp Results.
        </h1>
        <p className="relative max-w-2xl text-lg text-text/80">
          Professional knife and tool sharpening with reliable edges and
          fast turnaround.
        </p>
        <div className="relative mt-4">
          <Link
            href="/contact"
            className="inline-block rounded-full bg-ctaRed px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-ctaRed/90"
          >
            Book Sharpening
          </Link>
        </div>
      </section>

      <About />
      <Services />
      <HowItWorks />
      <WhyChooseUs />
      <ServiceArea />
      <Contact />
    </>
  );
}
