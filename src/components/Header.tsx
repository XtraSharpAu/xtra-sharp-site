import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Knife Sharpening", href: "/knife-sharpening" },
  { label: "Scissors", href: "/scissors" },
  { label: "Clipper Blades", href: "/clipper-blades" },
  { label: "Garden Tools", href: "/garden-tools" },
  { label: "Mail-In Sharpening", href: "/mail-in-sharpening" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="border-b border-metallic/40 bg-background">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-6 py-4">
        <Link href="/" className="text-lg font-semibold text-text">
          Xtra Sharp
        </Link>
        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-text/80">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <a
            href="tel:0412974277"
            className="hidden text-sm font-medium text-text sm:inline"
          >
            0412 974 277
          </a>
          <a
            href="tel:0412974277"
            className="rounded-full bg-ctaRed px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-ctaRed/90"
          >
            Call Now
          </a>
        </div>
      </div>
    </header>
  );
}
