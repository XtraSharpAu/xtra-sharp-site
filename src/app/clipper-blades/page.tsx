import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Checklist from "@/components/Checklist";
import DropOffChecklist from "@/components/DropOffChecklist";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceFaq from "@/components/ServiceFaq";
import RelatedLinks from "@/components/RelatedLinks";
import { relatedServiceLinks } from "@/lib/serviceLinks";
import CallNowButton from "@/components/CallNowButton";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Clipper Blade Sharpening | Xtra Sharp Campbelltown NSW",
  description:
    "Professional clipper blade sharpening using The Shop Inc. system for precise, long-lasting edges.",
  openGraph: {
    title: "Clipper Blade Sharpening | Xtra Sharp Campbelltown NSW",
    description:
      "Professional clipper blade sharpening using The Shop Inc. system for precise, long-lasting edges.",
    url: "https://xtrasharp.com.au/clipper-blades",
    type: "article",
    images: ["https://xtrasharp.com.au/og-clipper.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clipper Blade Sharpening | Xtra Sharp Campbelltown NSW",
    description:
      "Professional clipper blade sharpening using The Shop Inc. system for precise, long-lasting edges.",
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
  "No on-site sharpening",
  "Drop-off only",
  "Mail-in available Australia-wide",
];

const clipperCareInstructions = [
  "Always oil your clipper blades before and after use.",
  "Store blades in a moisture-free place to prevent rust.",
  "Avoid dropping blades — this is the most common cause of broken teeth, which makes the blade unusable.",
  "Clean hair and debris from blades regularly.",
  "If blades start pulling or snagging, they may need sharpening again.",
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

const clipperIntroGalleryPhotos = [
  {
    src: "/clipper-blade-set-full.jpg",
    alt: "Clipper blades before sharpening — ready for inspection.",
    width: 960,
    height: 1280,
  },
  {
    src: "/clipper-sharpening-machine-bright.jpg",
    alt: "Professional clipper blade sharpening equipment.",
    width: 1600,
    height: 1200,
  },
  {
    src: "/clipper-blade-clean-top.jpg",
    alt: "Sharpened clipper blade ready for testing.",
    width: 1200,
    height: 1600,
  },
];

function ClipperIntroGallery() {
  return (
    <div className="mx-auto mt-8 grid max-w-4xl gap-4 sm:grid-cols-3">
      {clipperIntroGalleryPhotos.map((photo) => (
        <div key={photo.src} className="overflow-hidden rounded-lg shadow-md">
          <Image
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            className="h-auto w-full"
          />
        </div>
      ))}
    </div>
  );
}

function ClipperBeforePhoto() {
  return (
    <div className="mx-auto mt-6 w-full max-w-2xl">
      <div className="overflow-hidden rounded-lg shadow-md">
        <Image
          src="/clipper-blade-worn-closeup.jpg"
          alt="Clipper blades before sharpening — visible wear along the teeth."
          width={1200}
          height={1600}
          className="h-auto w-full"
        />
      </div>
      <p className="mt-2 text-center text-sm text-text/60">
        Clipper blades before sharpening — visible wear along the teeth.
      </p>
    </div>
  );
}

function ClipperAfterPhoto() {
  return (
    <div className="mx-auto mt-6 w-full max-w-2xl">
      <div className="overflow-hidden rounded-lg shadow-md">
        <Image
          src="/clipper-blade-clean-top.jpg"
          alt="Clipper blades after sharpening — aligned and polished."
          width={1200}
          height={1600}
          className="h-auto w-full"
        />
      </div>
      <p className="mt-2 text-center text-sm text-text/60">
        Clipper blades after sharpening — aligned and polished.
      </p>
    </div>
  );
}

function ClipperEdgeDetailPhoto() {
  return (
    <div className="mx-auto mt-6 w-full max-w-2xl">
      <div className="overflow-hidden rounded-lg shadow-md">
        <Image
          src="/clipper-blade-edge-teeth-macro.jpg"
          alt="Close-up of sharpened edge detail."
          width={1200}
          height={1600}
          className="h-auto w-full"
        />
      </div>
      <p className="mt-2 text-center text-sm text-text/60">
        Close-up of sharpened edge detail.
      </p>
    </div>
  );
}

function ClipperEquipmentPhoto() {
  return (
    <div className="mx-auto mt-section w-full max-w-2xl overflow-hidden rounded-lg shadow-md">
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
    <div className="mx-auto mt-section max-w-3xl text-left">
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

const clipperProcessSteps = [
  {
    title: "Inspecting",
    videoId: "T63v_yzcLNA",
    description:
      "Checking the condition of clipper blades before sharpening. This step identifies wear, buildup, and alignment issues that affect cutting performance.",
    caption:
      "Inspecting clipper blades before sharpening — checking wear and buildup.",
  },
  {
    title: "Cleaned & Ready",
    videoId: "jSPJTdo1jvc",
    description:
      "Clipper blades fully cleaned and prepared for sharpening. All debris, hair, and buildup removed to ensure a smooth and accurate sharpening pass.",
    caption: "Blades cleaned and ready for sharpening — all buildup removed.",
  },
  {
    title: "Sharpening",
    videoId: "TAUAprurMEw",
    description:
      "Sharpening the clipper blades on the purpose-built machine. This step restores the cutting surface and prepares the blades for alignment and testing.",
    caption: "Sharpening the blades — restoring the cutting surface.",
  },
  {
    title: "Deburring",
    videoId: "jzMoT6WvCkg",
    description: null,
    caption: "Deburring the clipper blades.",
  },
  {
    title: "Demagnetising",
    videoId: "f2ryWYaCO-4",
    description:
      "Demagnetising the clipper blades after sharpening to prevent fine metal particles from clinging to the blade. This step helps keep the cutting surface clean and improves grooming performance.",
    caption:
      "Demagnetising the blades — prevents fine metal from clinging after sharpening.",
  },
  {
    title: "Cleaning the Clipper Blades",
    videoId: "duBTQ4rz36c",
    description:
      "Cleaning the clipper blades after sharpening to remove fine metal particles and residue. This step ensures a smooth cutting surface and prepares the blades for alignment and reassembly.",
    caption:
      "Cleaning the clipper blades — removing fine metal and residue after sharpening.",
  },
  {
    title: "Reassembling",
    videoId: "LFkUeiRcjAM",
    description:
      "Reassembling the clipper blade set after sharpening and cleaning. This step ensures correct tension, smooth movement, and proper alignment for optimal cutting performance.",
    caption:
      "Putting the blades back together — ensuring correct tension and alignment.",
  },
  {
    title: "Testing",
    videoId: "iK7tfQAxTdE",
    description:
      "Testing the clipper blades after reassembly to confirm smooth movement, correct tension, and clean cutting performance. This step ensures the blades are functioning properly before returning them to the customer.",
    caption: "Testing the blades — confirming smooth movement and clean cutting.",
  },
  {
    title: "Blade Wash",
    videoId: "aOvSsybYK2c",
    description:
      "Applying blade wash to protect the clipper blades before returning them to the customer. This helps prevent rust and keeps the blades in good condition, especially if they won't be used immediately. Before use, wipe most of the blade wash off and apply fresh oil.",
    caption:
      "Protecting blades with blade wash — prevents rust and keeps blades in good condition.",
  },
];

function ClipperProcessSteps() {
  return (
    <div className="mx-auto mt-section max-w-3xl text-left">
      <h3 className="text-xl font-semibold text-text">
        The Sharpening Process, Step by Step
      </h3>
      <ol className="mt-6 space-y-10">
        {clipperProcessSteps.map((step, index) => (
          <li key={step.title}>
            <h4 className="font-semibold text-text">
              Step {index + 1} — {step.title}
            </h4>
            <div className="mt-3 aspect-video overflow-hidden rounded-lg shadow-md">
              <iframe
                src={`https://www.youtube.com/embed/${step.videoId}`}
                title={`Clipper Blade Sharpening — Step ${index + 1}: ${step.title}`}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            {step.description && (
              <p className="mt-2 text-text/80">{step.description}</p>
            )}
            <p className="mt-1 text-sm text-text/60">{step.caption}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

const clipperPackingPhotos = [
  {
    src: "/clipper-packing-small-bags.jpg",
    alt: "Blades placed in small plastic bags for protection.",
    width: 960,
    height: 1280,
  },
  {
    src: "/clipper-packing-wrapped.jpg",
    alt: "Blades wrapped in paper towel to protect them.",
    width: 960,
    height: 1280,
  },
  {
    src: "/clipper-packing-ready.jpg",
    alt: "Blades bagged up and ready to go back to the customer.",
    width: 960,
    height: 1280,
  },
];

function ClipperPackingPhotos() {
  return (
    <div className="mx-auto mt-section max-w-3xl text-left">
      <h3 className="text-xl font-semibold text-text">
        Packed Carefully for Return
      </h3>
      <div className="mx-auto mt-6 grid max-w-2xl gap-6 sm:grid-cols-3">
        {clipperPackingPhotos.map((photo) => (
          <div key={photo.src}>
            <div className="overflow-hidden rounded-lg shadow-md">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                className="h-auto w-full"
              />
            </div>
            <p className="mt-2 text-center text-sm text-text/60">
              {photo.alt}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ClipperPricing() {
  return (
    <div className="mx-auto max-w-md">
      <SectionHeading title="Pricing" />
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
      <SectionHeading
        title="Ready to sharpen your animal clipper blades and grooming shears?"
        subtitle="Professional sharpening for groomers and animal-care specialists. Drop-off in Campbelltown NSW."
      />
      <div className="mt-6">
        <CallNowButton />
      </div>
    </>
  );
}

export default function ClipperBladesPage() {
  return (
    <PageLayout>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <Breadcrumbs
        items={[
          { name: "Home", url: "https://xtrasharp.com.au" },
          { name: "Clipper Blade Sharpening", url: "https://xtrasharp.com.au/clipper-blades" },
        ]}
      />

      <PageHero
        title="Clipper Blade Sharpening for Groomers"
        subtitle="Animal clipper blade and grooming shears sharpening for groomers, vets and animal-care professionals. A5, wide and large-animal blades."
      >
        <a
          href="tel:0412974277"
          className="mt-4 inline-block rounded-full bg-ctaRed px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-ctaRed/90"
        >
          Call Now — 0412 974 277
        </a>
      </PageHero>

      <Section className="border-t border-metallic/40 bg-surface text-center">
        <SectionHeading title="About Clipper Blade Sharpening" />
        <p className="text-text/80">
          Professional clipper blade sharpening using precision-guided
          equipment for accurate, long-lasting edges. Clipper blade
          sharpening restores clean, precise cutting performance to animal
          clipper blades and grooming shears used by groomers, vets and
          animal-care professionals. It&apos;s suited to anyone relying on
          clipper blades for daily grooming work. Common problems include
          blades that pull or snag fur, overheating during use, and reduced
          cutting efficiency from repeated use without proper maintenance.
          At Xtra Sharp, clipper blades are sharpened on a dedicated,
          purpose-built machine for A5, wide and large-animal blades,
          ensuring correct angle, alignment and tracking every time.
          Standard turnaround for clipper blades and grooming shears is 3
          days, keeping your grooming schedule on track.
        </p>
      </Section>

      <Section className="border-t border-metallic/40 text-center">
        <SectionHeading
          title="Machine-Guided Sharpening for Correct Alignment"
          subtitle="Clipper blades are sharpened using a machine-guided process that ensures correct angle, alignment, tension, tracking and finishing. Every blade is sharpened individually, cleaned, aligned and tested before return."
        />
        <ClipperIntroGallery />
        <ClipperBeforePhoto />
        <ClipperAfterPhoto />
        <ClipperEdgeDetailPhoto />
        <ClipperEquipmentSection />
        <ClipperVideoSection />
        <ClipperProcessSteps />
        <ClipperPackingPhotos />
      </Section>

      <Section className="border-t border-metallic/40 text-center">
        <SectionHeading
          title="Packing & Return Process"
          subtitle="Need your clipper blades sharpened? Book your service today."
        />
        <Link
          href="/contact"
          className="mt-6 inline-block rounded-full bg-ctaRed px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-ctaRed/90"
        >
          Book Sharpening
        </Link>
      </Section>

      <Section className="border-t border-metallic/40 bg-surface">
        <SectionHeading title="Clipper Blade Care Instructions" />
        <div className="mt-6 inline-block text-left">
          <Checklist items={clipperCareInstructions} />
        </div>
      </Section>

      <Section className="border-t border-metallic/40 bg-surface">
        <SectionHeading title="What I Sharpen for Groomers & Animal-Care Professionals" />
        <div className="mt-6 inline-block text-left">
          <Checklist items={clipperBladeTypes} />
        </div>
      </Section>

      <Section className="border-t border-metallic/40">
        <ClipperPricing />
      </Section>

      <Section className="border-t border-metallic/40 bg-surface text-center">
        <SectionHeading
          title="Drop-Off Sharpening (Campbelltown NSW)"
          subtitle="Drop-off sharpening is available by appointment. I sharpen from my dedicated sharpening area in Woodbine, listed publicly as Campbelltown NSW."
        />
      </Section>

      <Section className="border-t border-metallic/40 text-center">
        <SectionHeading title="Mail-In Sharpening (Australia-Wide)" />
        <p className="mt-4 text-text/80">
          You can post your clipper blades and grooming shears using a
          prepaid Australia Post satchel. Return postage is sent with
          tracking.
        </p>
        <p className="mt-4 text-text/80">
          Please contact me first before sending anything. I&apos;ll
          confirm pricing, turnaround time and the correct satchel size.
        </p>
      </Section>

      <Section className="border-t border-metallic/40 bg-surface text-center">
        <SectionHeading
          title="Turnaround Time"
          subtitle="Standard turnaround for clipper blades and grooming shears is 3 days."
        />
      </Section>

      <DropOffChecklist isClipperPage />

      <Section className="border-t border-metallic/40 bg-surface">
        <SectionHeading title="Frequently Asked Questions" />
        <div className="mt-6">
          <ServiceFaq items={faqs} />
        </div>
      </Section>

      <Section className="border-t border-metallic/40">
        <SectionHeading title="Important Notes" />
        <div className="mt-6 inline-block text-left">
          <Checklist items={importantNotes} />
        </div>
      </Section>

      <RelatedLinks links={relatedServiceLinks("/clipper-blades")} />

      <section className="border-t border-metallic/40 bg-surface px-6 py-20 text-center">
        <ClipperCTA />
      </section>
    </PageLayout>
  );
}
