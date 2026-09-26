"use client";

import Link from "next/link";
import { FooterContactStrip } from "@/components/FooterContactStrip";
import { trackEvent } from "@/lib/gtag";

const serviceLinks = [
  { label: "Knife Sharpening", href: "/knife-sharpening" },
  { label: "Scissors Sharpening", href: "/scissors-sharpening" },
  { label: "Clipper Blade Sharpening", href: "/clipper-blades" },
  { label: "Garden Tool Sharpening", href: "/garden-tools" },
  { label: "Processor Blade Sharpening", href: "/processor-blades" },
  { label: "Mail-In Sharpening", href: "/mail-in" },
];

const customerLinks = [
  { label: "Pricing", href: "/pricing" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Service Area", href: "/service-area" },
  { label: "Drop-Off Checklist", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Sharpening Tips", href: "/tips" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  { label: "Commercial Sharpening", href: "/commercial" },
  { label: "Batch Sharpening", href: "/batch" },
];

const legalLinks = [
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];

export default function Footer() {
  return (
    <footer className="border-t border-metallic/40 bg-background">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-text/80">
        <div className="mb-stack">
          <h3 className="text-xl font-semibold text-text">Xtra Sharp</h3>
          <p className="mt-2">
            Professional knife sharpening in Campbelltown NSW, servicing
            Macarthur since 2013. Mail-in sharpening available
            Australia-wide.
          </p>
          <p className="mt-1">Cash, card, and internet banking accepted.</p>
          <p className="mt-3">
            <strong className="text-text">Location:</strong> Campbelltown NSW
          </p>
          <p className="mt-1">
            <strong className="text-text">Sharpening Location:</strong>{" "}
            Address provided after booking
          </p>
          <p className="mt-1">
            <strong className="text-text">Service Area:</strong>{" "}
            <a
              href="https://www.google.com/maps/search/Xtra+Sharp+Campbelltown"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent hover:underline"
            >
              Campbelltown &amp; Western Sydney
            </a>
          </p>
          <p className="mt-1">
            <strong className="text-text">Phone:</strong>{" "}
            <a href="tel:0412974277" className="hover:text-accent hover:underline">
              0412 974 277
            </a>
          </p>
          <p className="mt-1">
            <strong className="text-text">Email:</strong>{" "}
            <a
              href="mailto:phil@xtrasharp.com.au"
              className="hover:text-accent hover:underline"
            >
              phil@xtrasharp.com.au
            </a>
          </p>
          <p className="mt-1">
            <strong className="text-text">Operating Hours:</strong> Most
            contact and drop-offs occur Monday – Friday, 9 AM – 5 PM. By
            appointment only.
          </p>
          <p className="mt-3">
            <a
              href="https://www.google.com/search?q=Xtra+Sharp+Campbelltown+NSW+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent hover:underline"
            >
              Read Google reviews ›
            </a>
          </p>
        </div>

        <div className="mb-stack grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <h4 className="font-semibold text-text">Services</h4>
            <ul className="mt-2 space-y-1">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-accent hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-text">Customer Info</h4>
            <ul className="mt-2 space-y-1">
              {customerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={
                      link.href === "/commercial"
                        ? () => trackEvent("click_commercial_footer")
                        : undefined
                    }
                    className="hover:text-accent hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-text">Legal</h4>
            <ul className="mt-2 space-y-1">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-accent hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <FooterContactStrip />

        <div className="border-t border-metallic/40 pt-4 text-xs text-text/60">
          &copy; {new Date().getFullYear()} Xtra Sharp &mdash; Professional
          Knife &amp; Tool Sharpening &bull; Campbelltown NSW
        </div>
      </div>
    </footer>
  );
}
