import type { Metadata } from "next";
import ContactHero from "@/components/ContactHero";
import ContactMethods from "@/components/ContactMethods";
import ContactMap from "@/components/ContactMap";
import ContactForm from "@/components/ContactForm";
import OptionCards from "@/components/OptionCards";
import Turnaround from "@/components/Turnaround";
import NeedAQuote from "@/components/NeedAQuote";

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
      <ContactMap />
      <ContactForm />

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
      <NeedAQuote />
    </>
  );
}
