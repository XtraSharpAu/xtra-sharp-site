import type { Metadata } from "next";
import PillList from "@/components/PillList";
import Checklist from "@/components/Checklist";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Service Area | Xtra Sharp Campbelltown NSW",
  description:
    "Drop-off sharpening in Campbelltown NSW. Mail-in available Australia-wide.",
  openGraph: {
    title: "Service Area | Xtra Sharp Campbelltown NSW",
    description:
      "Drop-off sharpening in Campbelltown NSW. Mail-in available Australia-wide.",
    url: "https://xtrasharp.com.au/service-area",
    type: "website",
    images: ["https://xtrasharp.com.au/og-service-area.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Service Area | Xtra Sharp Campbelltown NSW",
    description:
      "Drop-off sharpening in Campbelltown NSW. Mail-in available Australia-wide.",
    images: ["https://xtrasharp.com.au/og-service-area.jpg"],
  },
  other: {
    "twitter:url": "https://xtrasharp.com.au/service-area",
  },
  alternates: {
    canonical: "https://xtrasharp.com.au/service-area",
  },
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

const noMobileNotes = [
  "No mobile sharpening",
  "No on-site sharpening",
  "Drop-off only",
  "Mail-in available Australia-wide",
];

export default function ServiceAreaPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", url: "https://xtrasharp.com.au" },
          { name: "Service Area", url: "https://xtrasharp.com.au/service-area" },
        ]}
      />

      <section className="flex flex-col items-center gap-4 px-6 py-20 text-center sm:py-28">
        <h1 className="text-4xl font-bold text-text sm:text-5xl">
          Service Area
        </h1>
        <p className="max-w-2xl text-lg text-text/70">
          Drop-off sharpening in Campbelltown NSW. Mail-in available
          Australia-wide.
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
            Local Area Coverage
          </h2>
          <p className="mt-4 text-text/80">
            Xtra Sharp provides drop-off sharpening from my dedicated
            sharpening area in Woodbine, listed publicly as Campbelltown
            NSW. I also service the wider Macarthur region.
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-3xl">
          <PillList items={macarthurSuburbs} />
        </div>
        <div className="mx-auto mt-8 max-w-2xl text-center">
          <p className="text-text/80">
            Outside the local area? Mail-in sharpening is available
            Australia-wide, with return postage sent using Australia Post
            with tracking.
          </p>
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-surface px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-text">
            Why Drop-Off Only
          </h2>
          <p className="mt-4 text-text/80">
            Sharpening is carried out using water-cooled and machine-guided
            equipment based at my dedicated sharpening area in Woodbine.
            Keeping all sharpening at one fixed location means every item
            gets the same accurate, consistent result &mdash; drop-off and
            mail-in are the only ways to access it.
          </p>
        </div>
      </section>

      <section className="border-t border-metallic/40 px-6 py-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-2xl font-semibold text-text">
            No Mobile Sharpening
          </h2>
          <div className="mt-6 inline-block text-left">
            <Checklist items={noMobileNotes} />
          </div>
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-surface px-6 py-20 text-center">
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
