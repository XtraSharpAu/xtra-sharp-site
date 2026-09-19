import Link from "next/link";
import type { ServiceLink } from "@/lib/serviceLinks";

type RelatedLinksProps = {
  links: ServiceLink[];
};

export default function RelatedLinks({ links }: RelatedLinksProps) {
  return (
    <section className="border-t border-metallic/40 bg-surface px-6 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-semibold text-text">
          Related Sharpening Services
        </h2>
        <p className="mt-6 flex flex-wrap justify-center gap-x-2 gap-y-3">
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
      </div>
    </section>
  );
}
