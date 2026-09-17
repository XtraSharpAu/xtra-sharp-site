import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sharpening Gallery – Before & After",
  description:
    "Before and after sharpening photos showing clean edges, restored blades, and consistent results.",
};

function PlaceholderImage({ label }: { label: string }) {
  return (
    <div className="flex aspect-square flex-col items-center justify-center gap-2 rounded-lg border border-metallic/40 bg-metallic/10 p-4 text-center">
      <span className="text-2xl">📷</span>
      <span className="text-sm text-text/60">{label}</span>
    </div>
  );
}

export default function GalleryPage() {
  return (
    <>
      <section className="flex flex-col items-center gap-4 px-6 py-20 text-center">
        <h1 className="text-4xl font-bold text-text sm:text-5xl">
          Sharpening Gallery
        </h1>
        <p className="max-w-2xl text-text/80">
          A look at recent sharpening work from kitchens, workshops, and
          commercial clients.
        </p>
      </section>

      <section className="border-t border-metallic/40 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold text-text">
            Before &amp; After Edges
          </h2>
          <p className="mt-3 text-text/80">
            A side-by-side look at how a dull edge is brought back to a
            clean, sharp finish.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <PlaceholderImage label="Before & After — Photo coming soon" />
            <PlaceholderImage label="Before & After — Photo coming soon" />
            <PlaceholderImage label="Before & After — Photo coming soon" />
          </div>
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-accent/5 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold text-text">
            Knife Edge Close-Ups
          </h2>
          <p className="mt-3 text-text/80">
            Close-up detail of restored edges on kitchen and chef knives.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <PlaceholderImage label="Knife Edge — Photo coming soon" />
            <PlaceholderImage label="Knife Edge — Photo coming soon" />
            <PlaceholderImage label="Knife Edge — Photo coming soon" />
          </div>
          <p className="mt-6 text-sm">
            <Link href="/services" className="text-accent hover:underline">
              See All Services →
            </Link>
          </p>
        </div>
      </section>

      <section className="border-t border-metallic/40 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold text-text">
            Restored Workshop Tools
          </h2>
          <p className="mt-3 text-text/80">
            Chisels, plane blades, and other workshop tools brought back to a
            clean, honed edge.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <PlaceholderImage label="Workshop Tool — Photo coming soon" />
            <PlaceholderImage label="Workshop Tool — Photo coming soon" />
            <PlaceholderImage label="Workshop Tool — Photo coming soon" />
          </div>
          <p className="mt-6 text-sm">
            <Link href="/batch-sharpening" className="text-accent hover:underline">
              Have multiple items? See Batch Sharpening →
            </Link>
          </p>
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-accent/5 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold text-text">
            General Workshop Shots
          </h2>
          <p className="mt-3 text-text/80">
            A behind-the-scenes look at the Xtra Sharp workshop and
            sharpening process.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <PlaceholderImage label="Workshop — Photo coming soon" />
            <PlaceholderImage label="Workshop — Photo coming soon" />
            <PlaceholderImage label="Workshop — Photo coming soon" />
          </div>
        </div>
      </section>

      <section className="border-t border-metallic/40 px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-text">
            Like What You See?
          </h2>
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
