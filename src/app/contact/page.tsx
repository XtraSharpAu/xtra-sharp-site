import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import ContactForm from "@/components/ContactForm";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Contact | Xtra Sharp Campbelltown NSW",
  description:
    "Call, message or book a drop-off appointment with Xtra Sharp in Campbelltown NSW, or arrange Australia-wide mail-in sharpening.",
  openGraph: {
    title: "Contact | Xtra Sharp Campbelltown NSW",
    description:
      "Call, message or book a drop-off appointment with Xtra Sharp in Campbelltown NSW, or arrange Australia-wide mail-in sharpening.",
    url: "https://xtrasharp.com.au/contact",
    type: "website",
    images: ["https://xtrasharp.com.au/og-contact.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Xtra Sharp Campbelltown NSW",
    description:
      "Call, message or book a drop-off appointment with Xtra Sharp in Campbelltown NSW, or arrange Australia-wide mail-in sharpening.",
    images: ["https://xtrasharp.com.au/og-contact.jpg"],
  },
  other: {
    "twitter:url": "https://xtrasharp.com.au/contact",
  },
  alternates: {
    canonical: "https://xtrasharp.com.au/contact",
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: "https://xtrasharp.com.au/contact",
  contactType: "Customer Service",
  telephone: "0412 974 277",
  email: "phil@xtrasharp.com.au",
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactPageSchema} />
      <Breadcrumbs
        items={[
          { name: "Home", url: "https://xtrasharp.com.au" },
          { name: "Contact", url: "https://xtrasharp.com.au/contact" },
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

      <section className="border-t border-metallic/40 px-6 py-16 text-center">
        <h2 className="text-2xl font-semibold text-text">Call or Text</h2>
        <a
          href="tel:0412974277"
          className="mt-4 block text-4xl font-bold text-ctaRed hover:underline"
        >
          0412 974 277
        </a>
      </section>

      <section className="border-t border-metallic/40 bg-surface px-6 py-16">
        <h2 className="text-center text-2xl font-semibold text-text">
          Send a Message
        </h2>
        <div className="mt-6">
          <ContactForm />
        </div>
      </section>

      <section className="border-t border-metallic/40 px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-text">Location</h2>
          <p className="mt-4 text-text/80">
            Woodbine, listed publicly as Campbelltown NSW. Full address
            provided after booking. Drop-off sharpening is available by
            appointment.
          </p>
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-surface px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-text">Hours</h2>
          <p className="mt-4 text-text/80">
            By appointment. Call or text{" "}
            <a href="tel:0412974277" className="text-accent underline">
              0412 974 277
            </a>{" "}
            to arrange a drop-off time.
          </p>
        </div>
      </section>

      <section className="border-t border-metallic/40 px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-text">
            Mail-In Sharpening
          </h2>
          <p className="mt-4 text-text/80">
            Please contact me first before posting any items. I&apos;ll
            confirm pricing, turnaround time, and the correct Australia Post
            satchel size.
          </p>
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
