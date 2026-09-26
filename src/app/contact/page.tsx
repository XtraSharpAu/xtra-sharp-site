import type { Metadata } from "next";
import Image from "next/image";
import JsonLd from "@/components/JsonLd";
import ContactForm from "@/components/ContactForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import CallNowButton from "@/components/CallNowButton";
import GoogleReviewButton from "@/components/GoogleReviewButton";
import SectionHeading from "@/components/SectionHeading";
import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Contact | Xtra Sharp Campbelltown NSW",
  description:
    "Contact Xtra Sharp in Campbelltown NSW to book knife, scissor or clipper blade sharpening — fast, friendly, professional service. Call 0412 974 277 today.",
  openGraph: {
    title: "Contact | Xtra Sharp Campbelltown NSW",
    description:
      "Contact Xtra Sharp in Campbelltown NSW to book knife, scissor or clipper blade sharpening — fast, friendly, professional service. Call 0412 974 277 today.",
    url: "https://www.xtrasharp.com.au/contact",
    type: "website",
    images: [
      "https://www.xtrasharp.com.au/og-contact.jpg",
      {
        url: "https://www.xtrasharp.com.au/brand-composite-campbelltown.jpg",
        alt: "Xtra Sharp – Professional Knife & Tool Sharpening Campbelltown NSW",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Xtra Sharp Campbelltown NSW",
    description:
      "Contact Xtra Sharp in Campbelltown NSW to book knife, scissor or clipper blade sharpening — fast, friendly, professional service. Call 0412 974 277 today.",
    images: [
      "https://www.xtrasharp.com.au/og-contact.jpg",
      "https://www.xtrasharp.com.au/brand-composite-campbelltown.jpg",
    ],
  },
  other: {
    "twitter:url": "https://www.xtrasharp.com.au/contact",
  },
  alternates: {
    canonical: "https://www.xtrasharp.com.au/contact",
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: "https://www.xtrasharp.com.au/contact",
  contactType: "Customer Service",
  telephone: "0412 974 277",
  email: "phil@xtrasharp.com.au",
};

export default function ContactPage() {
  return (
    <PageLayout>
      <JsonLd data={contactPageSchema} />
      <Breadcrumbs
        items={[
          { name: "Home", url: "https://www.xtrasharp.com.au" },
          { name: "Contact", url: "https://www.xtrasharp.com.au/contact" },
        ]}
      />

      <section className="flex flex-col items-center gap-4 px-6 py-20 text-center sm:py-28">
        <h1 className="text-4xl font-bold text-text sm:text-5xl">Contact</h1>
        <p className="max-w-2xl text-lg text-text/70">
          Call, message or book a drop-off appointment.
        </p>
        <a
          href="tel:0412974277"
          className="mt-4 inline-block rounded-full bg-ctaRed px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-ctaRed/90"
        >
          Call Now — 0412 974 277
        </a>
      </section>

      <Section className="border-t border-metallic/40 text-center">
        <SectionHeading title="Contact Xtra Sharp" />
        <p className="mt-4 text-text/80">
          <strong className="text-text">Phone:</strong>{" "}
          <a href="tel:0412974277" className="text-accent hover:underline">
            0412 974 277
          </a>
        </p>
        <p className="mt-2 text-text/80">
          <strong className="text-text">Email:</strong>{" "}
          <a
            href="mailto:phil@xtrasharp.com.au"
            className="text-accent hover:underline"
          >
            phil@xtrasharp.com.au
          </a>
        </p>
        <p className="mt-2 text-text/80">
          <strong className="text-text">Location:</strong> Campbelltown
          NSW — Address provided after booking
        </p>
        <p className="mt-2 text-text/80">
          <strong className="text-text">Service Area:</strong> Campbelltown
          NSW • Macarthur NSW • Australia-wide (mail-in sharpening)
        </p>

        <h3 className="mt-6 text-lg font-semibold text-text">
          Operating Hours
        </h3>
        <p className="mt-2 text-text/80">
          Most contact and drop-offs occur between{" "}
          <strong className="text-text">Monday – Friday 9 AM – 5 PM</strong>.
          Service is <strong className="text-text">by appointment only</strong>{" "}
          — please call or message to arrange a time.
        </p>
      </Section>

      <Section className="border-t border-metallic/40 bg-surface text-center">
        <p className="text-text/80">
          If you&apos;ve had sharpening done recently, I&apos;d really
          appreciate a quick Google review.
        </p>
        <GoogleReviewButton />
      </Section>

      <Section className="border-t border-metallic/40 text-center">
        <figure className="mx-auto mb-4 flex flex-col items-center gap-2">
          <div className="h-[100px] w-[100px] overflow-hidden rounded-full shadow-md">
            <Image
              src="/owner-phillip-angland.jpg"
              alt="Phillip Angland — Owner of Xtra Sharp"
              width={512}
              height={512}
              sizes="100px"
              className="h-full w-full object-cover"
            />
          </div>
          <figcaption className="text-xs text-text/70">
            Phillip Angland — Owner &amp; Sharpener
          </figcaption>
        </figure>
        <SectionHeading title="Call or Text" />
        <a
          href="tel:0412974277"
          className="mt-4 block text-4xl font-bold text-ctaRed hover:underline"
        >
          0412 974 277
        </a>
      </Section>

      <Section className="border-t border-metallic/40 bg-surface">
        <SectionHeading title="Send a Message" />
        <div className="mt-6">
          <ContactForm />
        </div>
      </Section>

      <Section className="border-t border-metallic/40 text-center">
        <SectionHeading
          title="Location"
          subtitle="Woodbine, listed publicly as Campbelltown NSW. Full address provided after booking. Drop-off sharpening is available by appointment."
        />
      </Section>

      <Section className="border-t border-metallic/40 bg-surface text-center">
        <SectionHeading title="Hours" />
        <p className="mt-4 text-text/80">
          By appointment. Call or text{" "}
          <a href="tel:0412974277" className="text-accent underline">
            0412 974 277
          </a>{" "}
          to arrange a drop-off time.
        </p>
      </Section>

      <Section className="border-t border-metallic/40 text-center">
        <SectionHeading
          title="Mail-In Sharpening"
          subtitle="Please contact me first before posting any items. I'll confirm pricing, turnaround time, and the correct Australia Post satchel size."
        />
      </Section>

      <section className="border-t border-metallic/40 bg-surface px-6 py-20 text-center">
        <CallNowButton />
        <p className="mt-4 text-text/70">
          Drop-off sharpening in Campbelltown NSW. Mail-in sharpening
          Australia-wide.
        </p>
      </section>
    </PageLayout>
  );
}
