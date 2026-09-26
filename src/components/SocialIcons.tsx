import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export function SocialIcons() {
  return (
    <div className="flex items-center gap-4">
      <a
        href="https://www.facebook.com/XtrasharpAu/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Xtra Sharp on Facebook"
        className="inline-flex min-h-11 min-w-11 items-center justify-center text-text/80 hover:text-accent hover:underline"
      >
        <FaFacebookSquare size={22} />
      </a>

      <a
        href="https://x.com/XtraSharpAU"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Xtra Sharp on X"
        className="inline-flex min-h-11 min-w-11 items-center justify-center text-text/80 hover:text-accent hover:underline"
      >
        <FaXTwitter size={22} />
      </a>
    </div>
  );
}
