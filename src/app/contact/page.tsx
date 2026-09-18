import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Contact | Xtra Sharp Campbelltown NSW",
  description:
    "Contact Xtra Sharp for bookings, questions, quotes, and mail-in sharpening enquiries in Campbelltown NSW.",
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: "https://xtrasharp.com.au/contact",
  contactType: "Customer Service",
  telephone: "0412 974 277",
  email: "phil@xtrasharp.com.au",
};

const contactDetails = [
  { label: "Phone", value: "0412 974 277", href: "tel:0412974277" },
  {
    label: "Email",
    value: "phil@xtrasharp.com.au",
    href: "mailto:phil@xtrasharp.com.au",
  },
  {
    label: "Location",
    value: "Woodbine, Campbelltown NSW (full address provided after booking)",
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactPageSchema} />

      <section className="flex flex-col items-center gap-4 px-6 py-20 text-center sm:py-28">
        <h1 className="text-4xl font-bold text-text sm:text-5xl">
          Contact Xtra Sharp
        </h1>
        <p className="max-w-2xl text-lg text-text/70">
          Bookings, questions, quotes, and mail-in sharpening enquiries.
        </p>
        <a
          href="tel:0412974277"
          className="mt-4 inline-block rounded-full bg-ctaRed px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-ctaRed/90"
        >
          Call Now — 0412 974 277
        </a>
      </section>

      <section className="border-t border-metallic/40 px-6 py-16">
        <div className="mx-auto max-w-md">
          <h2 className="text-center text-2xl font-semibold text-text">
            Contact Details
          </h2>
          <div className="mt-6 rounded-lg border border-metallic/40 bg-background p-6">
            {contactDetails.map((detail, index) => (
              <div
                key={detail.label}
                className={`flex items-center justify-between gap-4 py-2 ${
                  index > 0 ? "border-t border-metallic/40" : ""
                }`}
              >
                <span className="text-sm font-medium text-text">
                  {detail.label}
                </span>
                {detail.href ? (
                  <a
                    href={detail.href}
                    className="text-right text-sm text-accent hover:underline"
                  >
                    {detail.value}
                  </a>
                ) : (
                  <span className="text-right text-sm text-text/80">
                    {detail.value}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-surface px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-text">
            Before Sending Anything
          </h2>
          <p className="mt-4 text-text/80">
            Please contact me first before posting any items. I&apos;ll
            confirm pricing, turnaround time, and the correct Australia Post
            satchel size. You can also send a photo for an exact quote
            before drop-off or mail-in.
          </p>
        </div>
      </section>

      <section className="border-t border-metallic/40 px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-text">
            Mail-In Sharpening
          </h2>
          <p className="mt-4 text-text/80">
            You can include a prepaid Australia Post satchel with your
            items. This is the easiest option and ensures your return
            postage is tracked.
          </p>
          <a
            href="https://auspost.com.au/parcels-mail/calculate-postage-and-delivery-times/prepaid-satchels"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-accent hover:underline"
          >
            auspost.com.au/parcels-mail/calculate-postage-and-delivery-times/prepaid-satchels
          </a>
          <p className="mt-4 text-text/80">
            If you prefer, I can add the postage cost to your final total
            &mdash; just let me know when booking.
          </p>
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-surface px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-text">
            Packing Instructions
          </h2>
          <p className="mt-4 text-text/80">
            Pack items securely using tea towels, rags, newspaper, or bubble
            wrap. Wrap each item separately to prevent damage. Make sure
            blade tips are well wrapped so they cannot punch through the
            packaging. Fold cardboard over tips or add extra layers of
            cloth or bubble wrap. Place items inside a strong packing box
            and pack tightly so they cannot move around.
          </p>
          <p className="mt-4 text-text/80">
            Include your return address, phone number, email address, and
            any notes about your items inside the box. Once your items
            arrive, they will be checked for any damage and I will contact
            you if needed.
          </p>
        </div>
      </section>

      <section className="border-t border-metallic/40 px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-text">
            Free School Pick-Up
          </h2>
          <p className="mt-4 text-text/80">
            Free pick-up and drop-off available for local schools in the
            Campbelltown area.
          </p>
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-surface px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-text">
            Commercial Pick-Up
          </h2>
          <p className="mt-4 text-text/80">
            Commercial collections are generally offered for jobs over $300
            within the local Campbelltown area. If your business is very
            close to me, I can often assist with smaller loads &mdash; just
            contact me to check availability.
          </p>
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
