import type { Metadata } from "next";
import ServiceAreaHero from "@/components/ServiceAreaHero";
import PillList from "@/components/PillList";
import Checklist from "@/components/Checklist";

export const metadata: Metadata = {
  title: "Service Area | Xtra Sharp",
  description:
    "Xtra Sharp serves Campbelltown, Woodbine and the wider Western Sydney region, with local pick-up in selected suburbs and mail-in service Australia-wide.",
};

const primaryArea = [
  "Campbelltown",
  "Woodbine",
  "Leumeah",
  "Bradbury",
  "Ambarvale",
  "Rosemeadow",
  "St Helens Park",
  "Ruse",
  "Airds",
  "Glenfield",
  "Ingleburn",
  "Minto",
  "Macquarie Fields",
  "Liverpool region",
  "Camden region",
];

const pickupAreas = [
  "Campbelltown",
  "Woodbine",
  "Leumeah",
  "Ruse",
  "Bradbury",
  "Ambarvale",
];

const mailInFeatures = [
  "Secure packaging instructions",
  "Tracking recommended",
  "Return postage options",
  "Fast turnaround (24–48 hours once received)",
];

const whatWeSharpen = [
  "Kitchen knives",
  "Chef knives",
  "Scissors",
  "Grooming scissors",
  "Clipper blades",
  "Chisels",
  "Woodworking tools",
  "Workshop tools",
];

export default function ServiceAreaPage() {
  return (
    <>
      <ServiceAreaHero />

      <section className="border-t border-metallic/40 px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-text">
            📍 Primary Service Area (Local)
          </h2>
          <p className="mt-4 text-text/80">
            We operate from Woodbine NSW (next to Campbelltown), and service
            customers across:
          </p>
          <div className="mt-6">
            <PillList items={primaryArea} />
          </div>
          <p className="mt-6 text-text/80">
            If you&apos;re unsure whether your suburb is covered, just
            contact us.
          </p>
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-accent/5 px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-text">
            🚚 Local Pick-Up (Selected Suburbs)
          </h2>
          <p className="mt-4 text-text/80">
            Pick-up is available in selected Western Sydney suburbs. Pricing
            depends on distance and workload.
          </p>
          <p className="mt-4 text-text/70">Common pick-up areas include:</p>
          <div className="mt-6">
            <PillList items={pickupAreas} />
          </div>
          <p className="mt-6 text-text/80">
            Ask for a quote if you need pick-up outside these areas.
          </p>
        </div>
      </section>

      <section className="border-t border-metallic/40 px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-text">
            📦 Australia-Wide Mail-In Service
          </h2>
          <p className="mt-4 text-text/80">
            Customers across Australia can send items via mail. Mail-in
            service includes:
          </p>
          <div className="mt-2 inline-block text-left">
            <Checklist items={mailInFeatures} />
          </div>
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-accent/5 px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-text">
            🔧 What We Sharpen
          </h2>
          <div className="mt-6 inline-block text-left">
            <Checklist items={whatWeSharpen} />
          </div>
          <p className="mt-6 text-text/80">
            Batch pricing available for larger orders.
          </p>
        </div>
      </section>

      <section className="border-t border-metallic/40 px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-text">
            📍 Google Maps Location
          </h2>
          <p className="mt-4 text-text/80">Our workshop location:</p>
          <p className="mt-2 font-medium text-text">
            22 Queenscliff Drive, Woodbine NSW 2560
          </p>
          <a
            href="https://www.google.com/maps/place/22+Queenscliff+Dr,+Woodbine+NSW+2560"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-accent hover:underline"
          >
            Open in Google Maps
          </a>
          <p className="mt-6 text-text/70">Campbelltown SEO link:</p>
          <a
            href="https://www.google.com/maps/search/Xtra+Sharp+Campbelltown"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-block text-accent hover:underline"
          >
            Knife Sharpening in Campbelltown
          </a>
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-accent/5 px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-text">
            📞 Book a Service
          </h2>
          <p className="mt-4 space-x-2 text-text/80">
            <span>
              <strong className="text-text">Phone:</strong>{" "}
              <a
                href="tel:0412974277"
                className="text-accent hover:underline"
              >
                0412 974 277
              </a>
            </span>
            <span aria-hidden="true">|</span>
            <span>
              <strong className="text-text">Email:</strong>{" "}
              <a
                href="mailto:phil@xtrasharp.com.au"
                className="text-accent hover:underline"
              >
                phil@xtrasharp.com.au
              </a>
            </span>
          </p>
        </div>
      </section>
    </>
  );
}
