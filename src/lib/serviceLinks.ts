export type ServiceLink = { label: string; href: string };

export const allServiceLinks: ServiceLink[] = [
  { label: "Knife Sharpening", href: "/knife-sharpening" },
  { label: "Scissors Sharpening", href: "/scissors-sharpening" },
  { label: "Clipper Blade Sharpening", href: "/clipper-blades" },
  { label: "Garden Tool Sharpening", href: "/garden-tools" },
  { label: "Processor Blade Sharpening", href: "/processor-blades" },
  { label: "Mail-In Sharpening", href: "/mail-in" },
  { label: "FAQ", href: "/faq" },
  { label: "Terms", href: "/terms" },
];

export function relatedServiceLinks(currentHref: string): ServiceLink[] {
  return allServiceLinks.filter((link) => link.href !== currentHref);
}
