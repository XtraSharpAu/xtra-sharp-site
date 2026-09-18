import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center gap-4 px-6 py-24 text-center sm:py-32">
      <p className="text-sm font-medium text-accent">404</p>
      <h1 className="text-4xl font-bold text-text sm:text-5xl">
        Page Not Found
      </h1>
      <p className="max-w-xl text-lg text-text/70">
        The page you&apos;re looking for doesn&apos;t exist or may have
        moved. Try one of the links below, or call to speak with us
        directly.
      </p>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="inline-block rounded-full bg-ctaRed px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-ctaRed/90"
        >
          Back to Home
        </Link>
        <Link
          href="/pricing"
          className="inline-block rounded-full border border-metallic/40 px-6 py-3 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent"
        >
          View Pricing
        </Link>
        <a
          href="tel:0412974277"
          className="inline-block rounded-full border border-metallic/40 px-6 py-3 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent"
        >
          Call — 0412 974 277
        </a>
      </div>
    </section>
  );
}
