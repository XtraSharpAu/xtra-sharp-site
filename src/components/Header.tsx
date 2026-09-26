"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { SocialIcons } from "@/components/SocialIcons";
import { trackEvent } from "@/lib/gtag";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Knife Sharpening", href: "/knife-sharpening" },
  { label: "Scissors", href: "/scissors-sharpening" },
  { label: "Clipper Blades", href: "/clipper-blades" },
  { label: "Garden Tools", href: "/garden-tools" },
  { label: "Processor Blades", href: "/processor-blades" },
  { label: "Mail-In Sharpening", href: "/mail-in" },
  { label: "Pricing", href: "/pricing" },
  { label: "Service Area", href: "/service-area" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!mobileNavOpen) return;

    function handlePointerDown(event: MouseEvent) {
      const target = event.target as Node;
      if (
        mobileNavRef.current?.contains(target) ||
        menuButtonRef.current?.contains(target)
      ) {
        return;
      }
      setMobileNavOpen(false);
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileNavOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileNavOpen]);

  return (
    <header className="border-b border-metallic/40 bg-background">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-6 py-4">
        <Link href="/" className="flex w-full max-w-[600px] items-center">
          <Image
            src="/xtrasharp-website-logo.png"
            alt="Xtra Sharp — Knife & Tool Sharpening, Campbelltown NSW"
            width={600}
            height={116}
            priority
            className="h-auto w-full max-w-[600px]"
          />
        </Link>
        <nav className="hidden gap-x-5 gap-y-2 text-sm text-text/80 md:flex md:flex-wrap">
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
        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setMobileNavOpen((open) => !open)}
          aria-expanded={mobileNavOpen}
          aria-controls="mobile-nav"
          className="inline-flex min-h-11 min-w-11 items-center justify-center gap-2 text-sm font-medium text-text/80 hover:text-accent md:hidden"
        >
          {mobileNavOpen ? (
            <FaTimes size={18} aria-hidden="true" />
          ) : (
            <FaBars size={18} aria-hidden="true" />
          )}
          Menu
        </button>
        <div className="flex items-center gap-4">
          <SocialIcons />
          <a
            href="tel:0412974277"
            onClick={() => trackEvent("click_phone", { location: "header" })}
            className="hidden text-sm font-medium text-text sm:inline"
          >
            0412 974 277
          </a>
          <a
            href="tel:0412974277"
            onClick={() => trackEvent("click_phone", { location: "header" })}
            className="rounded-full bg-ctaRed px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-ctaRed/90"
          >
            Call Now
          </a>
        </div>
        {mobileNavOpen && (
          <nav
            ref={mobileNavRef}
            id="mobile-nav"
            className="flex w-full flex-col gap-3 border-t border-metallic/40 pt-3 text-sm text-text/80 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileNavOpen(false)}
                className="transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
