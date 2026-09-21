import { SocialIcons } from "@/components/SocialIcons";

export function FooterContactStrip() {
  return (
    <div className="w-full border-t border-metallic/40 py-8">
      <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
        <div className="flex flex-col">
          <span className="text-lg font-semibold text-text">Xtra Sharp</span>
          <span className="text-text/80">Campbelltown NSW</span>
          <a
            href="tel:0412974277"
            className="mt-1 text-text/80 hover:text-accent hover:underline"
          >
            0412 974 277
          </a>
        </div>

        <SocialIcons />
      </div>
    </div>
  );
}
