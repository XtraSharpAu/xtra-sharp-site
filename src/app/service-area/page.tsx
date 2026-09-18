import type { Metadata } from "next";
import PillList from "@/components/PillList";
import Checklist from "@/components/Checklist";

export const metadata: Metadata = {
  title: "Service Areas | Xtra Sharp Campbelltown NSW",
  description:
    "Xtra Sharp provides sharpening in Campbelltown, Woodbine, and the Macarthur region, with Australia-wide mail-in sharpening available.",
};

const macarthurSuburbs = [
  "Camden",
  "Narellan",
  "Gregory Hills",
  "Oran Park",
  "Harrington Park",
  "Mount Annan",
  "Currans Hill",
  "Raby",
  "St Andrews",
  "Glen Alpine",
  "Ambarvale",
  "Bradbury",
];

const importantNotes = [
  "No mobile sharpening",
  "No on-site sharpening",
  "Drop-off only",
  "Mail-in available Australia-wide",
];

export default function ServiceAreaPage() {
  return (
    <>
      <section className="flex flex-col items-center gap-4 px-6 py-20 text-center sm:py-28">
        <h1 className="text-4xl font-bold text-text sm:text-5xl">
          Service Areas
        </h1>
        <p className="max-w-2xl text-lg text-text/70">
          Sharpening services for Campbelltown and surrounding suburbs, with
          Australia-wide mail-in sharpening available.
        </p>
        <a
          href="tel:0412974277"
          className="mt-4 inline-block rounded-full bg-ctaRed px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-ctaRed/90"
        >
          Call Now — 0412 974 277
        </a>
      </section>

      <section className="border-t border-metallic/40 px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-text">
            Primary Service Area &mdash; Campbelltown NSW
          </h2>
          <p className="mt-4 text-text/80">
            Xtra Sharp provides sharpening services for customers in
            Campbelltown and Woodbine (dedicated sharpening area). Drop-off
            sharpening is available by appointment.
          </p>
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-surface px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold text-text">
            Macarthur Region
          </h2>
          <div className="mt-6">
            <PillList items={macarthurSuburbs} />
          </div>
        </div>
      </section>

      <section className="border-t border-metallic/40 px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-text">
            Sydney Mail-In Coverage
          </h2>
          <p className="mt-4 text-text/80">
            Mail-in sharpening is available for households, groomers,
            hairdressers, restaurants, butchers, tradespeople, and
            commercial clients across NSW and Australia.
          </p>
          <p className="mt-4 text-text/80">
            Return postage is sent using Australia Post with tracking. You
            can include a prepaid satchel, or I can add postage to your
            final total.
          </p>
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-surface px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-text">
            Before Sending Anything
          </h2>
          <p className="mt-4 text-text/80">
            Please contact me first before posting any items. I&apos;ll
            confirm pricing, turnaround time, and the correct satchel size.
            You can also send a photo for an exact quote.
          </p>
        </div>
      </section>

      <section className="border-t border-metallic/40 px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-text">
            Pick-Up Options
          </h2>
          <h3 className="mt-6 text-lg font-medium text-text">
            Free School Pick-Up
          </h3>
          <p className="mt-2 text-text/80">
            Available for local schools in the Campbelltown area.
          </p>
          <h3 className="mt-6 text-lg font-medium text-text">
            Commercial Pick-Up
          </h3>
          <p className="mt-2 text-text/80">
            Available for jobs over $300 within the local Campbelltown
            area. If your business is very close to me, I can often assist
            with smaller loads &mdash; just contact me.
          </p>
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-surface px-6 py-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-2xl font-semibold text-text">
            Important Notes
          </h2>
          <div className="mt-6 inline-block text-left">
            <Checklist items={importantNotes} />
          </div>
        </div>
      </section>

      <section className="border-t border-metallic/40 px-6 py-20 text-center">
        <a
          href="tel:0412974277"
          className="inline-block rounded-full bg-ctaRed px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-ctaRed/90"
        >
          Call Now — 0412 974 277
        </a>
        <p className="mt-4 text-text/70">
          Drop-off sharpening in Campbelltown NSW. Mail-in sharpening
          Australia-wide.
        </p>
      </section>
    </>
  );
}
