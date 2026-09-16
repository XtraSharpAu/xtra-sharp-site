export default function Footer() {
  return (
    <footer className="border-t border-metallic/40 bg-background">
      <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-text/70">
        <p>
          Xtra Sharp &mdash; Professional Knife &amp; Tool Sharpening.
          Serving Campbelltown, Western Sydney &amp; the Macarthur Region.
        </p>
        <p className="mt-1">
          &copy; {new Date().getFullYear()} Xtra Sharp. Appointment-only —
          no walk-ins.
        </p>
      </div>
    </footer>
  );
}
