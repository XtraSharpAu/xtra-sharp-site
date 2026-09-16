import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Gallery", href: "/gallery" },
  { label: "Service Area", href: "/service-area" },
  { label: "Commercial", href: "/commercial" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="border-b border-metallic/40 bg-background">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold text-text">
          Xtra Sharp
        </Link>
        <nav className="hidden gap-6 text-sm text-text/80 sm:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-ausBlue"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="rounded-full bg-ctaRed px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-ctaRed/90"
        >
          Book Appointment
        </Link>
      </div>
    </header>
  );
}
