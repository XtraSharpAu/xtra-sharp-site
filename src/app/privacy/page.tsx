import type { Metadata } from "next";
import Link from "next/link";
import PrivacyHero from "@/components/PrivacyHero";
import PolicySections from "@/components/PolicySections";
import Checklist from "@/components/Checklist";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy | Xtra Sharp Campbelltown NSW",
  description:
    "How Xtra Sharp, a professional sharpening business in Campbelltown NSW, collects, uses, and protects customer information, booking details, and communication.",
  openGraph: {
    title: "Privacy Policy | Xtra Sharp Campbelltown NSW",
    description:
      "How Xtra Sharp, a professional sharpening business in Campbelltown NSW, collects, uses, and protects customer information, booking details, and communication.",
    url: "https://xtrasharp.com.au/privacy",
    type: "article",
    images: ["https://xtrasharp.com.au/og-privacy.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Xtra Sharp Campbelltown NSW",
    description:
      "How Xtra Sharp, a professional sharpening business in Campbelltown NSW, collects, uses, and protects customer information, booking details, and communication.",
    images: ["https://xtrasharp.com.au/og-privacy.jpg"],
  },
  other: {
    "twitter:url": "https://xtrasharp.com.au/privacy",
  },
  alternates: {
    canonical: "https://xtrasharp.com.au/privacy",
  },
};

const sections = [
  {
    title: "Information We Collect",
    paragraphs: [
      "Xtra Sharp may collect:",
      <Checklist
        key="list"
        items={[
          "Your name",
          "Contact details (phone, email)",
          "Service details (items to be sharpened, quantity, condition)",
          "Drop-off, pick-up, or mail-in arrangements",
          "Photos you send for quoting purposes",
        ]}
      />,
      "We do not collect unnecessary personal information.",
    ],
  },
  {
    title: "How Your Information Is Used",
    paragraphs: [
      "Your information is used only to:",
      <Checklist
        key="list"
        items={[
          "Provide quotes",
          "Arrange appointments",
          "Complete sharpening services",
          "Communicate about job status",
          "Return items via mail or pick-up",
        ]}
      />,
      "We do not sell, trade, or share your information with third parties.",
    ],
  },
  {
    title: "Mail-In Customers",
    paragraphs: [
      "If you use the mail-in service:",
      <Checklist
        key="list"
        items={[
          "Your return address is used only for shipping",
          "Australia Post tracking may be used to confirm delivery",
          "Packaging photos may be taken for proof of condition",
        ]}
      />,
    ],
  },
  {
    title: "Data Storage & Security",
    paragraphs: [
      "Xtra Sharp stores customer information securely.",
      "Messages, quotes, and booking details are kept only as long as needed to complete your service.",
    ],
  },
  {
    title: "Payment Information",
    paragraphs: [
      "Xtra Sharp does not store bank details or payment card information.",
      "Payments are processed directly between you and Xtra Sharp using your chosen method.",
    ],
  },
  {
    title: "Your Rights",
    paragraphs: [
      "You may request:",
      <Checklist
        key="list"
        items={[
          "A copy of the information we hold",
          "Correction of any details",
          "Removal of your information after your job is complete",
        ]}
      />,
    ],
  },
  {
    title: "Contact",
    paragraphs: [
      <>
        If you have questions about this Privacy Policy,{" "}
        <Link href="/contact" className="text-accent underline">
          contact Xtra Sharp
        </Link>{" "}
        directly.
      </>,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", url: "https://xtrasharp.com.au" },
          { name: "Privacy Policy", url: "https://xtrasharp.com.au/privacy" },
        ]}
      />

      <PrivacyHero />
      <section className="border-t border-metallic/40 px-6 py-16">
        <PolicySections sections={sections} />
      </section>
    </>
  );
}
