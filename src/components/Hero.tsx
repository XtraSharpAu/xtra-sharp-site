import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center gap-4 px-6 py-24 text-center"
    >
      <h1 className="text-4xl font-bold text-text sm:text-5xl">
        Professional Knife &amp; Tool Sharpening
      </h1>
      <p className="max-w-2xl text-lg text-text/80">
        Appointment-Only • Drop-Off • Mail-In • Local Pick-Up
      </p>
      <p className="max-w-2xl text-text/70">
        Serving Campbelltown, Western Sydney &amp; the Macarthur Region
      </p>
      <div className="mt-4 flex flex-col gap-4 sm:flex-row">
        <a
          href="#contact"
          className="rounded-full bg-ctaRed px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-ctaRed/90"
        >
          Book Appointment
        </a>
        <Link
          href="/services"
          className="rounded-full border border-ausBlue px-6 py-3 text-sm font-medium text-ausBlue transition-colors hover:bg-ausBlue/10"
        >
          View Services
        </Link>
      </div>
    </section>
  );
}
