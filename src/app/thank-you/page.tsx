import type { Metadata } from "next";
import Link from "next/link";
import ThankYouHero from "@/components/ThankYouHero";
import Checklist from "@/components/Checklist";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Thank You | Xtra Sharp Campbelltown NSW",
  description: "Your message to Xtra Sharp has been received.",
  openGraph: {
    title: "Thank You | Xtra Sharp Campbelltown NSW",
    description: "Your message to Xtra Sharp has been received.",
    url: "https://xtrasharp.com.au/thank-you",
    type: "article",
    images: ["https://xtrasharp.com.au/og-thank-you.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thank You | Xtra Sharp Campbelltown NSW",
    description: "Your message to Xtra Sharp has been received.",
    images: ["https://xtrasharp.com.au/og-thank-you.jpg"],
  },
  other: {
    "twitter:url": "https://xtrasharp.com.au/thank-you",
  },
  alternates: {
    canonical: "https://xtrasharp.com.au/thank-you",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function ThankYouPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", url: "https://xtrasharp.com.au" },
          { name: "Thank You", url: "https://xtrasharp.com.au/thank-you" },
        ]}
      />

      <ThankYouHero />

      <section className="border-t border-metallic/40 bg-accent/5 px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-text">
            What Happens Next?
          </h2>
          <div className="mt-4 inline-block text-left">
            <Checklist
              items={[
                "Your items and service details will be reviewed",
                "You'll receive a confirmation message",
                "A drop-off, pick-up, or mail-in arrangement will be finalised",
                "Turnaround time will be provided (usually 1–2 days)",
              ]}
            />
          </div>
        </div>
      </section>

      <section className="border-t border-metallic/40 px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-text">
            Need Something Urgent?
          </h2>
          <p className="mt-4 text-text/80">
            If you have an urgent job, large batch, or special request, feel
            free to send a follow-up message. Urgent jobs are available
            depending on workload.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-full border border-accent px-6 py-3 text-sm font-medium text-accent transition-colors hover:bg-accent/10"
          >
            Send a Follow-Up
          </Link>
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-accent/5 px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-text">
            Thank You for Choosing Xtra Sharp
          </h2>
          <p className="mt-4 text-text/80">
            Professional sharpening • Appointment-Only • Campbelltown NSW
          </p>
          <Link
            href="/"
            className="mt-6 inline-block rounded-full bg-ctaRed px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-ctaRed/90"
          >
            Return to Home
          </Link>
        </div>
      </section>
    </>
  );
}
