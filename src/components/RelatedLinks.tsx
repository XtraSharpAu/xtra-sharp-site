import Link from "next/link";
import type { ServiceLink } from "@/lib/serviceLinks";
import SectionHeading from "@/components/SectionHeading";

type RelatedLinksProps = {
  links: ServiceLink[];
};

const quickLinks: ServiceLink[] = [
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
  { label: "Service Area", href: "/service-area" },
];

export default function RelatedLinks({ links }: RelatedLinksProps) {
  return (
    <section className="border-t border-metallic/40 bg-surface px-6 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <SectionHeading title="Related Sharpening Services" />
        <p className="flex flex-wrap justify-center gap-x-2 gap-y-3">
          {links.map((link, index) => (
            <span key={link.href} className="flex items-center gap-2">
              <Link href={link.href} className="text-accent hover:underline">
                {link.label}
              </Link>
              {index < links.length - 1 && (
                <span aria-hidden="true" className="text-text/30">
                  |
                </span>
              )}
            </span>
          ))}
        </p>
        <p className="mt-6 flex flex-wrap justify-center gap-x-2 gap-y-3">
          {quickLinks.map((link, index) => (
            <span key={link.href} className="flex items-center gap-2">
              <Link href={link.href} className="text-accent hover:underline">
                {link.label}
              </Link>
              {index < quickLinks.length - 1 && (
                <span aria-hidden="true" className="text-text/30">
                  |
                </span>
              )}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
