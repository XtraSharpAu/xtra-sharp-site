import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-metallic/40 bg-background">
      <div className="mx-auto max-w-6xl px-6 py-6 text-center text-sm text-text/70">
        <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
          <span>
            <strong className="text-text">Phone:</strong>{" "}
            <a href="tel:0412974277" className="hover:text-accent hover:underline">
              0412 974 277
            </a>
          </span>
          <span aria-hidden="true">|</span>
          <span>
            <strong className="text-text">Email:</strong>{" "}
            <a
              href="mailto:phil@xtrasharp.com.au"
              className="hover:text-accent hover:underline"
            >
              phil@xtrasharp.com.au
            </a>
          </span>
          <span aria-hidden="true">|</span>
          <span>
            <strong className="text-text">Location:</strong>{" "}
            <a
              href="https://www.google.com/maps/place/22+Queenscliff+Dr,+Woodbine+NSW+2560"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent hover:underline"
            >
              22 Queenscliff Drive, Woodbine NSW
            </a>
          </span>
          <span aria-hidden="true">|</span>
          <span>
            <strong className="text-text">Service Area:</strong>{" "}
            <a
              href="https://www.google.com/maps/search/Xtra+Sharp+Campbelltown"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent hover:underline"
            >
              Campbelltown &amp; Western Sydney
            </a>
          </span>
        </p>
        <p className="mt-3 flex justify-center gap-4">
          <Link href="/terms" className="hover:text-accent hover:underline">
            Terms of Service
          </Link>
          <Link href="/privacy" className="hover:text-accent hover:underline">
            Privacy Policy
          </Link>
        </p>
        <p className="mt-3">
          &copy; {new Date().getFullYear()} Xtra Sharp &mdash; Professional
          Knife &amp; Tool Sharpening &bull; Campbelltown NSW
        </p>
      </div>
    </footer>
  );
}
