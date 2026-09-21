import type { Metadata } from "next";
import Link from "next/link";
import CommercialSegment from "@/components/CommercialSegment";
import CallNowButton from "@/components/CallNowButton";
import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "Sharpening Services | Xtra Sharp Campbelltown NSW",
  description:
    "Xtra Sharp Campbelltown NSW — expert sharpening for knives, axes, processor blades, and garden tools using water-cooled systems, and clipper blades using specialised professional equipment.",
  openGraph: {
    title: "Sharpening Services | Xtra Sharp Campbelltown NSW",
    description:
      "Xtra Sharp Campbelltown NSW — expert sharpening for knives, axes, processor blades, and garden tools using water-cooled systems, and clipper blades using specialised professional equipment.",
    url: "https://xtrasharp.com.au",
    type: "website",
    images: ["https://xtrasharp.com.au/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sharpening Services | Xtra Sharp Campbelltown NSW",
    description:
      "Xtra Sharp Campbelltown NSW — expert sharpening for knives, axes, processor blades, and garden tools using water-cooled systems, and clipper blades using specialised professional equipment.",
    images: ["https://xtrasharp.com.au/og-image.jpg"],
  },
  other: {
    "twitter:url": "https://xtrasharp.com.au",
  },
  alternates: {
    canonical: "https://xtrasharp.com.au",
  },
};

const services = [
  {
    icon: "🔪",
    title: "Knife Sharpening",
    items: [
      "Small Victorinox paring knives",
      "Standard knives",
      "Large knives",
      "Butcher knives",
      "Hunting knives",
    ],
  },
  {
    icon: "✂️",
    title: "Scissors Sharpening",
    items: [
      "Hairdressing scissors",
      "Grooming scissors",
      "Grooming thinning scissors",
      "Sewing scissors",
      "Household scissors",
    ],
  },
  {
    icon: "🐾",
    title: "Clipper Blade Sharpening",
    items: [
      "A5 clipper blades",
      "Wide clipper blades",
      "Large-animal blades",
      "Grooming clipper blades",
      "Veterinary clipper blades",
    ],
  },
  {
    icon: "🌿",
    title: "Garden Tools Sharpening",
    items: ["Hedge shears", "Secateurs", "Axes / tomahawks"],
  },
  {
    icon: "⚙️",
    title: "Processor Blade Sharpening",
    items: ["Home processor blades", "Large industrial blades"],
  },
];

const pricingPreview = [
  { name: "Knives", price: "From $6" },
  { name: "Scissors", price: "From $15" },
  { name: "Clipper Blades", price: "From $15" },
  { name: "Garden Tools", price: "From $15" },
  { name: "Processor Blades", price: "From $20" },
];

const testimonials = [
  {
    name: "Jason",
    text: "I recently had these 3 Japanese knives sharpened, and I'm extremely pleased with the outcome. The blades were returned in outstanding condition, with excellent edge retention and precision. The level of craftsmanship and attention to detail exceeded my expectations. I would highly recommend Phil and his service to anyone looking for professional knife sharpening.",
    image: "/testimonial-jason.jpg",
  },
  {
    name: "Michelle Siskovic",
    text: "I would highly recommend Phil from Xtra Sharp Blade Sharpener. Phil was friendly, professional and extremely helpful throughout the whole process. His knowledge and attention to detail were fantastic, and I'm very happy with the sharpening results.",
    image: "/testimonial-michelle.jpg",
  },
  {
    name: "Lincoln",
    location: "Sydney Residential Building Pty Ltd, Brighton-Le-Sands 2216",
    text: "Phil always makes it a pleasure to trade with. My building equipment is returned ready & of a high quality sharpen with a short turnaround. Phil is someone you can rely on. You can contact him at any hour & he's always willing to be of assistance. I'd be lost without his prompt, professional, and affordable sharpening services.",
  },
  {
    name: "Rickey",
    location: "St Andrews",
    text: "Very reliable and great to deal with, at a reasonable price. I've been using Phil for years now to sharpen my fishing knives, kitchen knives, and secateurs — highly recommend him.",
  },
  {
    name: "Ray",
    location: "Dr Raynae Hall BVetMed MRCVS",
    text: "I can't recommend Phil enough. During the pandemic, he kept our surgeries going in the vet clinic by keeping all our clipper blades in pristine condition. He sharpened and repaired them as needed. Not to mention, the phenomenal job with my personal knives at home. It really isn't sharp until Phil's had a go! The service and the craftsmanship are unparalleled. Thank you soo very much Phil! You put the xtra in xtra sharp!",
  },
];

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center gap-4 px-6 py-20 text-center sm:py-28">
        <h1 className="text-4xl font-bold text-text sm:text-5xl">
          Sharpening Services — Knives, Scissors, Clipper Blades &amp; More
        </h1>
        <p className="max-w-2xl text-lg text-text/70">
          Professional knife and tool sharpening in Campbelltown NSW —
          precision water-cooled sharpening for knives, axes, processor
          blades, and garden tools, plus specialised sharpening for clipper
          blades.
        </p>
        <a
          href="tel:0412974277"
          className="mt-4 inline-block rounded-full bg-ctaRed px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-ctaRed/90"
        >
          Call Now — 0412 974 277
        </a>
      </section>

      <section className="border-t border-metallic/40 bg-surface px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-semibold text-text">
            Our Services
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <CommercialSegment key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-metallic/40 px-6 py-16">
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

      <section className="border-t border-metallic/40 bg-surface px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-text">
            Mail-In Sharpening (Australia-Wide)
          </h2>
          <p className="mt-4 text-text/80">
            You can post items using a prepaid Australia Post satchel.
            Return postage is sent with tracking. Please contact me first
            before sending anything.
          </p>
        </div>
      </section>

      <section className="border-t border-metallic/40 px-6 py-16">
        <div className="mx-auto max-w-md">
          <h2 className="text-center text-2xl font-semibold text-text">
            Pricing
          </h2>
          <div className="mt-6 rounded-lg border border-metallic/40 bg-background p-6">
            {pricingPreview.map((line, index) => (
              <div
                key={line.name}
                className={`flex items-center justify-between gap-4 py-2 ${
                  index > 0 ? "border-t border-metallic/40" : ""
                }`}
              >
                <span className="text-text/80">{line.name}</span>
                <span className="text-right font-semibold text-ctaRed">
                  {line.price}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Link href="/pricing" className="text-accent hover:underline">
              View Full Pricing →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-surface px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-text">Service Area</h2>
          <p className="mt-4 text-text/80">
            Drop-off sharpening in Campbelltown NSW, servicing the Macarthur
            region. Mail-in sharpening available Australia-wide.
          </p>
          <div className="mt-4">
            <Link href="/service-area" className="text-accent hover:underline">
              View Service Area →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-surface px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-semibold text-text">
            Customer Testimonials
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <Testimonial
                key={t.name}
                name={t.name}
                location={t.location}
                text={t.text}
                image={t.image}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-metallic/40 px-6 py-20 text-center">
        <CallNowButton />
        <p className="mt-4 text-text/70">
          Drop-off sharpening in Campbelltown NSW. Mail-in sharpening
          Australia-wide.
        </p>
      </section>
    </>
  );
}
