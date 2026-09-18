"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex flex-col items-center gap-4 px-6 py-24 text-center sm:py-32">
      <p className="text-sm font-medium text-accent">500</p>
      <h1 className="text-4xl font-bold text-text sm:text-5xl">
        Something Went Wrong
      </h1>
      <p className="max-w-xl text-lg text-text/70">
        An unexpected error occurred while loading this page. You can try
        again, or call to speak with us directly.
      </p>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
        <button
          onClick={() => reset()}
          className="inline-block rounded-full bg-ctaRed px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-ctaRed/90"
        >
          Try Again
        </button>
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
