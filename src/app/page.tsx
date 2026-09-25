import type { Metadata } from "next";
import Link from "next/link";
import CallNowButton from "@/components/CallNowButton";
import Testimonial from "@/components/Testimonial";
import ServiceCard from "@/components/ServiceCard";
import SectionHeading from "@/components/SectionHeading";
import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";
import { FollowUsSection } from "@/components/FollowUsSection";

export const metadata: Metadata = {
  title: "Xtra Sharp – Knife & Tool Sharpening in Campbelltown NSW",
  description:
    "Professional knife & tool sharpening in Campbelltown NSW. Water-cooled & machine-guided precision for knives, scissors & clipper blades. Drop-off & mail-in Australia-wide.",
  openGraph: {
    title: "Xtra Sharp – Knife & Tool Sharpening in Campbelltown NSW",
    description:
      "Professional knife & tool sharpening in Campbelltown NSW. Water-cooled & machine-guided precision for knives, scissors & clipper blades. Drop-off & mail-in Australia-wide.",
    url: "https://xtrasharp.com.au",
    type: "website",
    images: ["https://xtrasharp.com.au/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Xtra Sharp – Knife & Tool Sharpening in Campbelltown NSW",
    description:
      "Professional knife & tool sharpening in Campbelltown NSW. Water-cooled & machine-guided precision for knives, scissors & clipper blades. Drop-off & mail-in Australia-wide.",
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
    href: "/knife-sharpening",
    description:
      "We sharpen small Victorinox paring knives, standard kitchen knives, large chef knives, butcher knives, and hunting knives.",
  },
  {
    icon: "✂️",
    title: "Scissors Sharpening",
    href: "/scissors-sharpening",
    description:
      "We sharpen hairdressing, grooming, sewing, and household scissors, including thinning types.",
  },
  {
    icon: "🐾",
    title: "Clipper Blade & Grooming Scissor Sharpening",
    href: "/clipper-blades",
    description:
      "We sharpen A5 clipper blades, wide clipper blades, large-animal blades, grooming and veterinary clipper blades, plus grooming scissors and thinning shears used by professional animal groomers.",
  },
  {
    icon: "🌿",
    title: "Garden Tool Sharpening",
    href: "/garden-tools",
    description:
      "We sharpen secateurs, hedge shears, axes, and other garden tools using water-cooled equipment for clean, precise edges.",
  },
  {
    icon: "⚙️",
    title: "Processor Blade Sharpening",
    href: "/processor-blades",
    description:
      "We sharpen food processor blades and commercial machine blades to restore cutting accuracy and performance.",
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
    <PageLayout>
      <section className="flex flex-col items-center gap-4 px-6 py-20 text-center sm:py-28">
        <h1 className="text-4xl font-bold text-text sm:text-5xl">
          Knife &amp; Tool Sharpening — Campbelltown NSW
        </h1>
        <p className="max-w-2xl text-lg text-text/70">
          Professional knife and tool sharpening in Campbelltown NSW.
          Water-cooled and machine-guided precision for knives, axes,
          processor and garden tools, plus dedicated clipper blade and
          grooming scissor sharpening.
        </p>
        <a
          href="tel:0412974277"
          className="mt-4 inline-block rounded-full bg-ctaRed px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-ctaRed/90"
        >
          Call Now — 0412 974 277
        </a>
      </section>

      <Section className="border-t border-metallic/40 bg-surface">
        <SectionHeading title="Sharpening Services — Knives, Scissors, Clipper Blades & More" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              href={service.href}
              icon={service.icon}
            />
          ))}
        </div>
      </Section>

      <Section className="border-t border-metallic/40 text-center">
        <SectionHeading
          title="Drop-Off Sharpening (Campbelltown NSW)"
          subtitle="Drop-off sharpening is available by appointment. I sharpen from my dedicated sharpening area in Woodbine, listed publicly as Campbelltown NSW."
        />
      </Section>

      <Section className="border-t border-metallic/40 bg-surface text-center">
        <SectionHeading
          title="Mail-In Sharpening (Australia-Wide)"
          subtitle="You can post items using a prepaid Australia Post satchel. Return postage is sent with tracking. Please contact me first before sending anything."
        />
      </Section>

      <Section className="border-t border-metallic/40">
        <div className="mx-auto max-w-md">
          <SectionHeading title="Pricing" />
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
      </Section>

      <Section className="border-t border-metallic/40 bg-surface text-center">
        <SectionHeading
          title="Service Area"
          subtitle="Drop-off sharpening in Campbelltown NSW, servicing the Macarthur region. Mail-in sharpening available Australia-wide."
        />
        <div className="mt-4">
          <Link href="/service-area" className="text-accent hover:underline">
            View Service Area →
          </Link>
        </div>
      </Section>

      <Section className="border-t border-metallic/40 bg-surface">
        <SectionHeading title="Customer Testimonials" />
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
      </Section>

      <FollowUsSection />

      <section className="border-t border-metallic/40 px-6 py-20 text-center">
        <CallNowButton />
        <p className="mt-4 text-text/70">
          Drop-off sharpening in Campbelltown NSW. Mail-in sharpening
          Australia-wide.
        </p>
        <p className="mt-2 text-text/70">
          Serving Campbelltown, Camden, Narellan and the Macarthur region.
        </p>
        <div className="mt-4">
          <Link href="/contact" className="text-accent hover:underline">
            Contact Us →
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
