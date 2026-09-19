import type { Metadata } from "next";
import TipsHero from "@/components/TipsHero";
import Checklist from "@/components/Checklist";

export const metadata: Metadata = {
  title: "Sharpening Tips & Advice | Xtra Sharp",
  description:
    "Practical care tips for knives, scissors, clipper blades and workshop tools between professional sharpening visits, from Xtra Sharp in Campbelltown NSW.",
  openGraph: {
    title: "Sharpening Tips & Advice | Xtra Sharp",
    description:
      "Practical care tips for knives, scissors, clipper blades and workshop tools between professional sharpening visits, from Xtra Sharp in Campbelltown NSW.",
    url: "https://xtrasharp.com.au/tips",
    type: "article",
    images: ["https://xtrasharp.com.au/og-tips.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sharpening Tips & Advice | Xtra Sharp",
    description:
      "Practical care tips for knives, scissors, clipper blades and workshop tools between professional sharpening visits, from Xtra Sharp in Campbelltown NSW.",
    images: ["https://xtrasharp.com.au/og-tips.jpg"],
  },
  other: {
    "twitter:url": "https://xtrasharp.com.au/tips",
  },
  alternates: {
    canonical: "https://xtrasharp.com.au/tips",
  },
};

const knifeCare = [
  "Wash knives by hand — avoid dishwashers",
  "Store knives in a block or magnetic strip",
  "Use wooden or plastic chopping boards",
  "Avoid glass, stone, or metal surfaces",
  "Hone regularly, sharpen professionally when needed",
];

const scissorCare = [
  "Keep scissors dry and clean",
  "Avoid dropping or knocking them together",
  "Use them only for their intended purpose",
  "Oil the pivot lightly",
  "Have them sharpened professionally when they start to pull or fold hair",
];

const clipperCare = [
  "Clean blades after every use",
  "Brush out hair and debris",
  "Oil lightly before and during use",
  "Keep blades cool — overheating reduces lifespan",
  "Sharpen professionally when they start to snag or leave lines",
];

const workshopTips = [
  "Keep chisels and plane blades rust-free",
  "Store tools in a dry place",
  "Avoid hitting edges on metal surfaces",
  "Sharpen professionally for clean, accurate cuts",
];

const frequency = [
  "Home kitchens: every 3–6 months",
  "Commercial kitchens: weekly to monthly",
  "Grooming scissors: every 4–8 weeks",
  "Clipper blades: as needed based on workload",
  "Workshop tools: whenever accuracy drops",
];

export default function TipsPage() {
  return (
    <>
      <TipsHero />

      <section className="border-t border-metallic/40 px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-text">
            🔪 Knife Care Tips
          </h2>
          <div className="mt-6 inline-block text-left">
            <Checklist items={knifeCare} />
          </div>
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-accent/5 px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-text">
            ✂️ Scissor Care (Grooming &amp; Barber)
          </h2>
          <div className="mt-6 inline-block text-left">
            <Checklist items={scissorCare} />
          </div>
        </div>
      </section>

      <section className="border-t border-metallic/40 px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-text">
            🐾 Clipper Blade Care (Animal Grooming)
          </h2>
          <div className="mt-6 inline-block text-left">
            <Checklist items={clipperCare} />
          </div>
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-accent/5 px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-text">
            🪚 Workshop Tool Tips
          </h2>
          <div className="mt-6 inline-block text-left">
            <Checklist items={workshopTips} />
          </div>
        </div>
      </section>

      <section className="border-t border-metallic/40 px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-text">
            📅 How Often Should You Sharpen?
          </h2>
          <p className="mt-4 text-text/80">It depends on use:</p>
          <div className="mt-6 inline-block text-left">
            <Checklist items={frequency} />
          </div>
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-accent/5 px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-text">
            📞 Need Professional Sharpening?
          </h2>
          <p className="mt-4 space-x-2 text-text/80">
            <span>
              <strong className="text-text">Phone:</strong>{" "}
              <a
                href="tel:0412974277"
                className="text-accent hover:underline"
              >
                0412 974 277
              </a>
            </span>
            <span aria-hidden="true">|</span>
            <span>
              <strong className="text-text">Email:</strong>{" "}
              <a
                href="mailto:phil@xtrasharp.com.au"
                className="text-accent hover:underline"
              >
                phil@xtrasharp.com.au
              </a>
            </span>
          </p>
        </div>
      </section>
    </>
  );
}
