import type { Metadata } from "next";
import Link from "next/link";
import Checklist from "@/components/Checklist";

export const metadata: Metadata = {
  title: "FAQ – Xtra Sharp Sharpening Questions",
  description:
    "Answers to common sharpening questions including turnaround, items sharpened, mail-in process, and payment options.",
};

export default function FaqPage() {
  return (
    <>
      <section className="flex flex-col items-center gap-4 px-6 py-20 text-center">
        <h1 className="text-4xl font-bold text-text sm:text-5xl">
          Frequently Asked Questions
        </h1>
        <p className="max-w-2xl text-text/80">
          Answers to common questions about sharpening, pricing, and
          turnaround.
        </p>
      </section>

      <section className="border-t border-metallic/40 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold text-text">
            How long does sharpening take?
          </h2>
          <Checklist
            items={[
              "Turnaround depends on the number and type of items.",
              "Most jobs are completed promptly and discussed at booking.",
            ]}
          />
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-accent/5 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold text-text">
            What items can be sharpened?
          </h2>
          <Checklist
            items={[
              "Kitchen knives",
              "Workshop tools",
              "Garden tools",
              "Scissors",
              "Most general household blades",
            ]}
          />
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-accent/5 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold text-text">
            How does mail-in sharpening work?
          </h2>
          <Checklist
            items={[
              "Pack your items securely",
              "Send them to the workshop address",
              "Sharpening is completed and returned promptly",
              "Same fixed pricing as local customers",
            ]}
          />
        </div>
      </section>

      <section className="border-t border-metallic/40 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold text-text">
            What payment methods are accepted?
          </h2>
          <Checklist
            items={[
              "Cash",
              "Bank transfer",
              "Other simple payment options as discussed at booking",
            ]}
          />
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-accent/5 px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-text">
            Still Have Questions?
          </h2>
          <p className="mt-4 text-text/80">
            Get in touch and we&apos;ll help you out.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-full bg-ctaRed px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-ctaRed/90"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
