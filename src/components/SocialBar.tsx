const SOCIALS = {
  facebook: "https://www.facebook.com/xtrasharp",
  x: "https://x.com/XtraSharpAU",
};

export default function SocialBar() {
  return (
    <div className="flex items-center gap-4">
      <a
        href={SOCIALS.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-text/80 transition-colors hover:text-accent hover:underline"
      >
        Facebook
      </a>
      <a
        href={SOCIALS.x}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-text/80 transition-colors hover:text-accent hover:underline"
      >
        X (Twitter)
      </a>
    </div>
  );
}
