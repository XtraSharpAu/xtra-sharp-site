const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="border-b border-metallic/40 bg-background">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#hero" className="text-lg font-semibold text-text">
          Xtra Sharp
        </a>
        <nav className="hidden gap-6 text-sm text-text/80 sm:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-ausBlue"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-ctaRed px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-ctaRed/90"
        >
          Book Appointment
        </a>
      </div>
    </header>
  );
}
