import Link from "next/link";

export default function ServicesContact() {
  return (
    <section className="border-t border-metallic/40 bg-ausBlue/5 px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold text-text">Contact</h2>
        <p className="mt-4 text-text/80">
          For bookings, quotes, or questions:
        </p>
        <p className="mt-2 font-medium text-text">
          Xtra Sharp &mdash; Campbelltown NSW
        </p>
        <p className="text-text/70">Appointment-Only</p>
        <p className="text-text/70">Drop-Off • Mail-In • Pick-Up</p>
        <Link
          href="/contact"
          className="mt-6 inline-block rounded-full bg-ctaRed px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-ctaRed/90"
        >
          Book Appointment
        </Link>
      </div>
    </section>
  );
}
