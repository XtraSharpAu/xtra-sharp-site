import Link from "next/link";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="bg-ctaRed">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="text-lg font-semibold text-white">
          Xtra Sharp
        </Link>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-white/90">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="rounded-full bg-white px-4 py-2 text-sm font-medium text-ctaRed transition-colors hover:bg-white/90"
        >
          Book Appointment
        </Link>
      </div>
    </header>
  );
}
