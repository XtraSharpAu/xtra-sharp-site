import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-metallic/40 bg-background">
      <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-text/70">
        <p>
          Xtra Sharp &mdash; Professional Knife &amp; Tool Sharpening.
          Serving Campbelltown, Western Sydney &amp; the Macarthur Region.
        </p>
        <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
          <p>
            &copy; {new Date().getFullYear()} Xtra Sharp. Appointment-only —
            no walk-ins.
          </p>
          <Link href="/terms" className="hover:text-ausBlue hover:underline">
            Service Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
