import type { Metadata } from "next";
import Link from "next/link";
import TermsHero from "@/components/TermsHero";
import PolicySections from "@/components/PolicySections";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Service Terms | Xtra Sharp Campbelltown NSW",
  description:
    "Xtra Sharp's service terms covering appointments, item condition, repairs, turnaround, pricing, pick-up/mail-in, liability, and cancellations.",
  openGraph: {
    title: "Service Terms | Xtra Sharp Campbelltown NSW",
    description:
      "Xtra Sharp's service terms covering appointments, item condition, repairs, turnaround, pricing, pick-up/mail-in, liability, and cancellations.",
    url: "https://www.xtrasharp.com.au/terms",
    type: "article",
    images: ["https://www.xtrasharp.com.au/og-terms.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Service Terms | Xtra Sharp Campbelltown NSW",
    description:
      "Xtra Sharp's service terms covering appointments, item condition, repairs, turnaround, pricing, pick-up/mail-in, liability, and cancellations.",
    images: ["https://www.xtrasharp.com.au/og-terms.jpg"],
  },
  other: {
    "twitter:url": "https://www.xtrasharp.com.au/terms",
  },
  alternates: {
    canonical: "https://www.xtrasharp.com.au/terms",
  },
};

const sections = [
  {
    title: "Appointments",
    paragraphs: [
      "All services are appointment-only.",
      "Walk-ins are not accepted.",
      "You must confirm a drop-off, pick-up, or mail-in arrangement before sending or delivering items.",
    ],
  },
  {
    title: "Item Condition",
    paragraphs: [
      "Items must be provided in a reasonably clean condition.",
      "Heavy rust, severe damage, or broken components may require additional work or may not be serviceable.",
      "If an item cannot be sharpened safely, you will be notified before any work begins.",
    ],
  },
  {
    title: "Repairs & Damage",
    paragraphs: [
      "Minor chips, bends, and tip repairs are included where possible.",
      "Severe damage is quoted individually.",
      "If an item is unsafe or structurally compromised, sharpening may be refused.",
    ],
  },
  {
    title: "Turnaround Times",
    paragraphs: [
      "Most items are completed within 1–2 days.",
      "During busy periods this can take up to 3 days, depending on workload.",
      "Urgent jobs are available by arrangement.",
    ],
  },
  {
    title: "Pricing & Payment",
    paragraphs: [
      <>
        Pricing is listed on the{" "}
        <Link href="/pricing" className="text-accent underline">
          Pricing page
        </Link>
        .
      </>,
      "Specialty items or unusual tools may require a custom quote.",
      "Payment is due on collection or before return shipping for mail-in jobs.",
    ],
  },
  {
    title: "Pick-Up & Mail-In",
    paragraphs: [
      "Local pick-up and return is available for schools and larger jobs over $300 in the local area, quoted based on distance.",
      "Mail-in customers are responsible for postage to Xtra Sharp.",
      "Return postage can be included in the quote or billed separately.",
    ],
  },
  {
    title: "Loss or Damage During Transit",
    paragraphs: [
      "For mail-in jobs, Xtra Sharp is not responsible for items lost or damaged during postage.",
      "Customers should package items securely and consider tracked shipping.",
    ],
  },
  {
    title: "Safety & Liability",
    paragraphs: [
      "Sharpened items are extremely sharp.",
      "Customers are responsible for safe handling after collection or delivery.",
      "Xtra Sharp is not liable for injuries caused by misuse or improper handling of sharpened tools.",
    ],
  },
  {
    title: "Cancellations",
    paragraphs: [
      "If you need to cancel or reschedule an appointment, please notify Xtra Sharp as early as possible.",
      "Missed appointments may affect turnaround times for future bookings.",
    ],
  },
  {
    title: "Contact",
    paragraphs: [
      <>
        For questions about these terms or any special requirements,{" "}
        <Link href="/contact" className="text-accent underline">
          contact Xtra Sharp
        </Link>{" "}
        directly.
      </>,
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", url: "https://www.xtrasharp.com.au" },
          { name: "Service Terms", url: "https://www.xtrasharp.com.au/terms" },
        ]}
      />

      <TermsHero />
      <section className="border-t border-metallic/40 px-6 py-16">
        <PolicySections sections={sections} />
      </section>
    </>
  );
}
