import type { Metadata } from "next";
import ContactHero from "@/components/ContactHero";
import ContactMethods from "@/components/ContactMethods";
import OptionCards from "@/components/OptionCards";
import Turnaround from "@/components/Turnaround";
import Checklist from "@/components/Checklist";

export const metadata: Metadata = {
  title: "Contact | Xtra Sharp",
  description:
    "Get in touch with Xtra Sharp in Campbelltown NSW for bookings, quotes, or questions about knife, scissor, clipper blade and tool sharpening.",
};

const serviceOptions = [
  {
    title: "Drop-Off",
    description: "Book a time and bring your items.",
  },
  {
    title: "Mail-In",
    description: "Send via Australia Post; return shipping available.",
  },
  {
    title: "Local Pick-Up",
    description: "Available in selected Western Sydney areas.",
  },
];

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactMethods />

      <section className="border-t border-metallic/40 bg-ausBlue/5 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-semibold text-text">
            Service Options
          </h2>
          <div className="mt-10">
            <OptionCards options={serviceOptions} />
          </div>
        </div>
      </section>

      <Turnaround />

      <section className="border-t border-metallic/40 px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-text">
            Need a Quote?
          </h2>
          <p className="mt-4 text-text/80">Send a message with:</p>
          <div className="mt-2 inline-block text-left">
            <Checklist
              items={[
                "Type of item",
                "Quantity",
                "Any damage or special requirements",
                "Preferred service method (drop-off, mail-in, pick-up)",
              ]}
            />
          </div>
          <p className="mt-6 text-text/80">
            You&apos;ll receive a clear, upfront quote with no surprises.
          </p>
        </div>
      </section>
    </>
  );
}
