import type { Metadata } from "next";
import Image from "next/image";
import Checklist from "@/components/Checklist";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceFaq from "@/components/ServiceFaq";
import RelatedLinks from "@/components/RelatedLinks";
import { relatedServiceLinks } from "@/lib/serviceLinks";

export const metadata: Metadata = {
  title: "Clipper Blade Sharpening for Groomers | Xtra Sharp Campbelltown NSW",
  description:
    "Animal clipper blade and grooming shears sharpening for groomers, vets and animal-care professionals. A5, wide and large-animal blades.",
  openGraph: {
    title: "Clipper Blade Sharpening for Groomers | Xtra Sharp Campbelltown NSW",
    description:
      "Animal clipper blade and grooming shears sharpening for groomers, vets and animal-care professionals. A5, wide and large-animal blades.",
    url: "https://xtrasharp.com.au/clipper-blades",
    type: "article",
    images: ["https://xtrasharp.com.au/og-clipper.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clipper Blade Sharpening for Groomers | Xtra Sharp Campbelltown NSW",
    description:
      "Animal clipper blade and grooming shears sharpening for groomers, vets and animal-care professionals. A5, wide and large-animal blades.",
    images: ["https://xtrasharp.com.au/og-clipper.jpg"],
  },
  other: {
    "twitter:url": "https://xtrasharp.com.au/clipper-blades",
  },
  alternates: {
    canonical: "https://xtrasharp.com.au/clipper-blades",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Animal Clipper Blade & Grooming Shears Sharpening",
  provider: {
    "@type": "LocalBusiness",
    name: "Xtra Sharp",
  },
  areaServed: "Campbelltown NSW, Macarthur region, Australia-wide (mail-in)",
  offers: {
    "@type": "Offer",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "AUD",
      minPrice: 15,
      maxPrice: 35,
    },
  },
};

const clipperBladeTypes = [
  "A5 clipper blades",
  "Wide clipper blades",
  "Large-animal blades",
  "Grooming clipper blades",
  "Veterinary clipper blades",
  "Grooming shears (bevel & convex)",
  "Thinning scissors",
];

const clipperPricing = [
  { name: "A5 clipper blades", price: "$15 per set" },
  { name: "Wide clipper blades", price: "$20" },
  { name: "Large-animal clipper blades", price: "$20" },
];

const shearsPricing = [
  { name: "Grooming shears (bevel)", price: "$25 per pair" },
  { name: "Grooming shears (convex)", price: "$35 per pair" },
  { name: "Thinning scissors", price: "$30 per pair" },
];

const importantNotes = [
  "No mobile sharpening",
  "No on-site sharpening",
  "Drop-off only",
  "Mail-in available Australia-wide",
];

const dropOffChecklist = [
  "Wipe items clean (no food, hair, dirt, or oil)",
  "Label items if dropping off multiple pieces",
  "Ensure clipper blades are detached from the clipper",
  "Remove heavy rust or debris if possible",
  "Place items in a secure container or wrap for transport",
];

const faqs = [
  {
    question: "Do you sharpen A5, wide, and large-animal blades?",
    answer:
      "Yes — A5 clipper blades, wide clipper blades, and large-animal blades are all sharpened; see the pricing above.",
  },
  {
    question: "Do you check alignment after sharpening?",
    answer:
      "Yes — every blade is individually cleaned, aligned, and test-run before it's returned.",
  },
  {
    question: "Can sharpening fix blades that feel hot or noisy?",
    answer:
      "Often, yes — blades that run hot or noisy are usually dull or misaligned, and sharpening combined with realignment typically resolves it. If the cause is mechanical, such as the clipper motor itself, that's outside what sharpening can fix.",
  },
  {
    question: "How should clipper blades be cleaned before drop-off?",
    answer:
      "Wipe off loose hair, oil, and debris, and detach the blades from the clipper before drop-off or posting.",
  },
  {
    question: "How often should clipper blades be sharpened?",
    answer:
      "It depends on usage, but professional groomers often sharpen A5 and wide blades every few weeks to a couple of months with regular use.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

function PhotoPlaceholder({ label }: { label: string }) {
  return (
    <div className="flex aspect-[4/3] items-center justify-center rounded-lg border-2 border-dashed border-metallic/40 bg-surface text-sm text-text/50">
      {label}
    </div>
  );
}

function ClipperIntroGallery() {
  return (
    <div className="mx-auto mt-8 grid max-w-4xl gap-4 sm:grid-cols-3">
      <PhotoPlaceholder label="Photo coming soon" />
      <PhotoPlaceholder label="Photo coming soon" />
      <PhotoPlaceholder label="Photo coming soon" />
    </div>
  );
}

function ClipperBeforePhoto() {
  return (
    <div className="mx-auto mt-6 w-full max-w-2xl">
      <PhotoPlaceholder label="Before photo coming soon" />
    </div>
  );
}

function ClipperAfterPhoto() {
  return (
    <div className="mx-auto mt-6 w-full max-w-2xl">
      <PhotoPlaceholder label="After photo coming soon" />
    </div>
  );
}

function ClipperEquipmentPhoto() {
  return (
    <div className="mx-auto mt-12 w-full max-w-2xl overflow-hidden rounded-lg shadow-md">
      <Image
        src="/clipper-blade-sharpening-machine.jpg"
        alt="Automated clipper blade sharpening machine used for A5, wide and large-animal blades."
        width={1920}
        height={1280}
        className="h-auto w-full"
      />
    </div>
  );
}

const clipperEquipmentBenefits = [
  "Cuts cleaner",
  "Runs cooler",
  "Reduces strain on the clipper motor",
  "Minimises snagging and pulling",
  "Improves grooming efficiency",
];

function ClipperEquipmentSection() {
  return (
    <div className="mx-auto mt-12 max-w-3xl text-left">
      <h3 className="text-xl font-semibold text-text">
        Purpose-Built Equipment for Animal Clipper Blades
      </h3>
      <p className="mt-3 text-text/80">
        At Xtra Sharp, all clipper blade sharpening is carried out on a
        dedicated machine designed specifically for A5, wide, and
        large-animal blades. The system uses a purpose-built plate made
        for clipper blades, ensuring the correct cutting action is
        restored every time.
      </p>

      <h3 className="mt-8 text-xl font-semibold text-text">
        Designed for Grooming Blades
      </h3>
      <p className="mt-3 text-text/80">
        This machine is built for the unique requirements of animal
        clipper blades. Its purpose-built plate and controlled sharpening
        process return blades to proper working condition without
        altering their intended performance.
      </p>

      <h3 className="mt-8 text-xl font-semibold text-text">
        Secure, Controlled Sharpening
      </h3>
      <p className="mt-3 text-text/80">
        Each blade is held firmly in place while the plate restores the
        cutting surface. This helps reduce vibration, improves coat
        finish, and supports consistent grooming results.
      </p>

      <h3 className="mt-8 text-xl font-semibold text-text">
        Why Groomers Benefit
      </h3>
      <p className="mt-3 text-text/80">A properly sharpened blade:</p>
      <div className="mt-3">
        <Checklist items={clipperEquipmentBenefits} />
      </div>
      <p className="mt-4 text-text/80">
        Consistent sharpening quality means fewer blade issues and better
        results.
      </p>

      <h3 className="mt-8 text-xl font-semibold text-text">
        Machine Photo
      </h3>
      <div className="mt-3">
        <ClipperEquipmentPhoto />
        <p className="mt-2 text-sm text-text/60">
          Automated clipper blade sharpening machine used for A5, wide and
          large-animal blades.
        </p>
      </div>
    </div>
  );
}

function ClipperVideoSection() {
  return (
    <div className="mx-auto mt-6 w-full max-w-2xl">
      <div className="aspect-video overflow-hidden rounded-lg shadow-md">
        <iframe
          src="https://www.youtube.com/embed/vSB9MhXxX6Y"
          title="Clipper Blade Sharpening — Process Overview"
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <p className="mt-2 text-sm text-text/60">
        Clipper Blade Sharpening — Process Overview. This video shows part
        of the clipper blade sharpening workflow, including setup,
        alignment, and key steps in the process. A more detailed version
        will be added soon once the remaining cleaning stages are
        recorded.
      </p>
    </div>
  );
}

function ClipperPricing() {
  return (
    <div className="mx-auto max-w-md">
      <h2 className="text-center text-2xl font-semibold text-text">
        Pricing
      </h2>
      <div className="mt-6 rounded-lg border border-metallic/40 bg-background p-6">
        <h3 className="text-sm font-semibold text-text/80">
          Clipper Blades
        </h3>
        {clipperPricing.map((line) => (
          <div
            key={line.name}
            className="flex items-center justify-between gap-4 border-t border-metallic/40 py-2 first:mt-2"
          >
            <span className="text-text/80">{line.name}</span>
            <span className="text-right font-semibold text-ctaRed">
              {line.price}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-lg border border-metallic/40 bg-background p-6">
        <h3 className="text-sm font-semibold text-text/80">
          Grooming Shears
        </h3>
        {shearsPricing.map((line) => (
          <div
            key={line.name}
            className="flex items-center justify-between gap-4 border-t border-metallic/40 py-2 first:mt-2"
          >
            <span className="text-text/80">{line.name}</span>
            <span className="text-right font-semibold text-ctaRed">
              {line.price}
            </span>
          </div>
        ))}
      </div>
      <p className="mt-4 text-center text-text/80">
        Some blades and shears may vary depending on condition. You can
        send a photo for an exact quote.
      </p>
    </div>
  );
}

function ClipperCTA() {
  return (
    <>
      <h2 className="text-2xl font-semibold text-text">
        Ready to sharpen your animal clipper blades and grooming shears?
      </h2>
      <p className="mt-4 text-text/70">
        Professional sharpening for groomers and animal-care specialists.
        Drop-off in Campbelltown NSW.
      </p>
      <a
        href="tel:0412974277"
        className="mt-6 inline-block rounded-full bg-ctaRed px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-ctaRed/90"
      >
        Call Now — 0412 974 277
      </a>
    </>
  );
}

export default function ClipperBladesPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <Breadcrumbs
        items={[
          { name: "Home", url: "https://xtrasharp.com.au" },
          { name: "Clipper Blade Sharpening", url: "https://xtrasharp.com.au/clipper-blades" },
        ]}
      />

      <section className="flex flex-col items-center gap-4 px-6 py-20 text-center sm:py-28">
        <h1 className="text-4xl font-bold text-text sm:text-5xl">
          Clipper Blade Sharpening for Groomers
        </h1>
        <p className="max-w-2xl text-lg text-text/70">
          Animal clipper blade and grooming shears sharpening for groomers,
          vets and animal-care professionals. A5, wide and large-animal
          blades.
        </p>
        <a
          href="tel:0412974277"
          className="mt-4 inline-block rounded-full bg-ctaRed px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-ctaRed/90"
        >
          Call Now — 0412 974 277
        </a>
      </section>

      <section className="border-t border-metallic/40 px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold text-text">
            Machine-Guided Sharpening for Correct Alignment
          </h2>
          <p className="mt-4 text-text/80">
            Clipper blades are sharpened using a machine-guided process that
            ensures correct angle, alignment, tension, tracking and
            finishing. Every blade is sharpened individually, cleaned,
            aligned and tested before return.
          </p>
          <ClipperIntroGallery />
          <ClipperBeforePhoto />
          <ClipperAfterPhoto />
          <ClipperEquipmentSection />
          <ClipperVideoSection />
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-surface px-6 py-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-2xl font-semibold text-text">
            What I Sharpen for Groomers &amp; Animal-Care Professionals
          </h2>
          <div className="mt-6 inline-block text-left">
            <Checklist items={clipperBladeTypes} />
          </div>
        </div>
      </section>

      <section className="border-t border-metallic/40 px-6 py-16">
        <ClipperPricing />
      </section>

      <section className="border-t border-metallic/40 bg-surface px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-text">
            Drop-Off Sharpening (Campbelltown NSW)
          </h2>
          <p className="mt-4 text-text/80">
            Drop-off sharpening is available by appointment. I sharpen from
            my dedicated sharpening area in Woodbine, listed publicly as
            Campbelltown NSW.
          </p>
        </div>
      </section>

      <section className="border-t border-metallic/40 px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-text">
            Mail-In Sharpening (Australia-Wide)
          </h2>
          <p className="mt-4 text-text/80">
            You can post your clipper blades and grooming shears using a
            prepaid Australia Post satchel. Return postage is sent with
            tracking.
          </p>
          <p className="mt-4 text-text/80">
            Please contact me first before sending anything. I&apos;ll
            confirm pricing, turnaround time and the correct satchel size.
          </p>
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-surface px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-text">
            Turnaround Time
          </h2>
          <p className="mt-4 text-text/80">
            Standard turnaround for clipper blades and grooming shears is
            3 days.
          </p>
        </div>
      </section>

      <section className="border-t border-metallic/40 px-6 py-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-2xl font-semibold text-text">
            Before You Drop Off
          </h2>
          <div className="mt-6 inline-block text-left">
            <Checklist items={dropOffChecklist} />
          </div>
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-surface px-6 py-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-2xl font-semibold text-text">
            Frequently Asked Questions
          </h2>
          <div className="mt-6">
            <ServiceFaq items={faqs} />
          </div>
        </div>
      </section>

      <section className="border-t border-metallic/40 px-6 py-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-2xl font-semibold text-text">
            Important Notes
          </h2>
          <div className="mt-6 inline-block text-left">
            <Checklist items={importantNotes} />
          </div>
        </div>
      </section>

      <RelatedLinks links={relatedServiceLinks("/clipper-blades")} />

      <section className="border-t border-metallic/40 bg-surface px-6 py-20 text-center">
        <ClipperCTA />
      </section>
    </>
  );
}
