import type { Metadata } from "next";
import GalleryHero from "@/components/GalleryHero";
import GalleryCategory from "@/components/GalleryCategory";

export const metadata: Metadata = {
  title: "Gallery | Xtra Sharp",
  description:
    "See examples of Xtra Sharp's knife, scissor, clipper blade and tool sharpening work, plus our Campbelltown NSW workshop setup.",
  openGraph: {
    title: "Gallery | Xtra Sharp",
    description:
      "See examples of Xtra Sharp's knife, scissor, clipper blade and tool sharpening work, plus our Campbelltown NSW workshop setup.",
    url: "https://xtrasharp.com.au/gallery",
    type: "article",
    images: ["https://xtrasharp.com.au/og-gallery.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery | Xtra Sharp",
    description:
      "See examples of Xtra Sharp's knife, scissor, clipper blade and tool sharpening work, plus our Campbelltown NSW workshop setup.",
    images: ["https://xtrasharp.com.au/og-gallery.jpg"],
  },
  other: {
    "twitter:url": "https://xtrasharp.com.au/gallery",
  },
  alternates: {
    canonical: "https://xtrasharp.com.au/gallery",
  },
};

const categories = [
  {
    icon: "🔪",
    title: "Knife Sharpening Results",
    items: [
      "Before / After kitchen knives",
      "Chef knives restored to factory edge",
      "Specialty blades with polished finish",
    ],
  },
  {
    icon: "✂️",
    title: "Scissors & Clippers",
    items: [
      "Grooming scissors sharpened and balanced",
      "Clipper blades calibrated for smooth cutting",
      "Industrial scissors restored for clean performance",
    ],
  },
  {
    icon: "🪚",
    title: "Workshop Tools",
    items: [
      "Chisels and plane blades honed to precision",
      "Woodworking tools sharpened for clean cuts",
      "Workshop machines maintained for consistent results",
    ],
  },
  {
    icon: "🧰",
    title: "Workshop Setup",
    items: [
      'Authentic "used but professional" machines',
      "Calibrated angles and consistent workflow",
      "Reliable turnaround and quality control",
    ],
  },
];

export default function GalleryPage() {
  return (
    <>
      <GalleryHero />

      <div className="flex flex-col gap-16 px-6 pb-20">
        {categories.map((category) => (
          <GalleryCategory key={category.title} {...category} />
        ))}
      </div>

      <section className="border-t border-metallic/40 bg-accent/5 px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-text">
            📸 Photo Notes
          </h2>
          <p className="mt-4 text-text/80">
            All images are genuine workshop photos — no artificial
            enhancements. Each photo represents the real quality and finish
            customers can expect.
          </p>
        </div>
      </section>

      <section className="border-t border-metallic/40 px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-text">
            📞 Book Your Sharpening
          </h2>
          <p className="mt-4 text-text/80">
            For quotes or appointments:
          </p>
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
