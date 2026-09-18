import type { Metadata } from "next";
import CommercialSegment from "@/components/CommercialSegment";
import Checklist from "@/components/Checklist";

export const metadata: Metadata = {
  title: "Mail-In Sharpening | Xtra Sharp Australia-Wide",
  description:
    "Australia-wide mail-in sharpening for knives, scissors, clipper blades, garden tools, processor blades, and industrial blades. Fast turnaround with tracked return postage.",
};

const howItWorks = [
  {
    title: "Contact me first",
    description: "Confirm what you're sending before you post anything.",
  },
  {
    title: "Pack your items securely",
    description:
      "Use soft materials such as tea towels, rags, newspaper, or bubble wrap.",
  },
  {
    title: "Wrap each item separately",
    description: "This prevents damage during postage.",
  },
  {
    title: "Protect blade tips",
    description:
      "Make sure blade tips are well wrapped so they cannot punch through the packaging. Fold cardboard over tips or add extra layers of cloth or bubble wrap.",
  },
  {
    title: "Pack into a strong box",
    description:
      "Place your wrapped items inside a strong packing box and pack tightly so they cannot move around.",
  },
  {
    title: "Include your details",
    description:
      "Include your return address, phone number, email address, and any notes about your items inside the box.",
  },
  {
    title: "Include your return satchel",
    description: "Include your prepaid Australia Post satchel inside the parcel.",
  },
  {
    title: "Send to Xtra Sharp",
    description: "Full address provided after booking.",
  },
  {
    title: "Arrival check",
    description:
      "Once items arrive, they will be checked for any damage. If something needs extra work or is not suitable for sharpening, I will contact you before proceeding.",
  },
  {
    title: "Sharpening process",
    description: null,
    subItems: [
      "Water-cooled sharpening: knives, processor blades, garden tools, axes, tomahawks.",
      "Machine-guided sharpening: scissors, clipper blades, general tools.",
    ],
  },
  {
    title: "Fast turnaround",
    description: "1–2 business days after arrival.",
  },
  {
    title: "Return postage",
    description:
      "Using your prepaid satchel or added to your final total if preferred.",
  },
];

const itemsYouCanSend = [
  {
    icon: "🔪",
    title: "Knives",
    items: ["Standard", "Butcher", "Large", "Hunting"],
  },
  {
    icon: "✂️",
    title: "Scissors",
    items: [
      "Hairdressing (bevel/convex)",
      "Grooming (bevel/convex)",
      "Sewing",
      "Dressmaking",
    ],
  },
  {
    icon: "🐾",
    title: "Clipper Blades",
    items: ["A5 blades", "Wide blades", "Large animal blades"],
  },
  {
    icon: "🌿",
    title: "Garden Tools",
    items: ["Secateurs", "Hedge shears", "Small garden tools", "Axes", "Tomahawks"],
  },
  {
    icon: "⚙️",
    title: "Processor Blades",
    items: ["Home processor blades", "Large industrial processor blades"],
  },
  {
    icon: "🔧",
    title: "Chisels",
    items: ["Chisels sharpened to a clean, accurate edge"],
  },
];

const pricing = [
  { name: "Standard knives", price: "$10" },
  { name: "Butcher knives", price: "$10" },
  { name: "Large knives", price: "$15" },
  { name: "Hunting knives", price: "$10–$15 (depending on condition)" },
  { name: "Tomahawk", price: "$15" },
  { name: "Axe", price: "$15–$25 (depending on condition)" },
  { name: "Hairdressing scissors (bevel)", price: "$50" },
  { name: "Hairdressing scissors (convex)", price: "$70" },
  { name: "Grooming scissors (bevel)", price: "$25" },
  { name: "Grooming scissors (convex)", price: "$35" },
  { name: "Sewing / dressmaking scissors", price: "$15" },
  { name: "A5 blades", price: "$15" },
  { name: "Wide blades", price: "$20" },
  { name: "Large animal blades", price: "$20" },
  { name: "Secateurs", price: "$13" },
  { name: "Small garden tools", price: "$13" },
  { name: "Hedge shears", price: "$15" },
  { name: "Home processor blades", price: "$10–$25 (depending on condition)" },
  { name: "Large industrial processor blades", price: "$30–$80" },
  { name: "Chisels", price: "$13" },
];

const whyChooseUs = [
  "13+ years sharpening experience",
  "Mirror Cut® accredited",
  "Flamin' Sharp licensee",
  "Water-cooled sharpening for items that require it",
  "Machine-guided sharpening with controlled hand input",
  "Fast turnaround",
  "Trusted by schools, restaurants, groomers, salons, and local businesses",
];

export default function MailInSharpeningPage() {
  return (
    <>
      <section className="flex flex-col items-center gap-4 px-6 py-20 text-center sm:py-28">
        <h1 className="text-4xl font-bold text-text sm:text-5xl">
          Mail-In Sharpening Australia-Wide
        </h1>
        <p className="max-w-2xl text-lg text-text/70">
          Fast, reliable sharpening for knives, scissors, clipper blades,
          garden tools, processor blades, and industrial blades.
        </p>
        <a
          href="tel:0412974277"
          className="mt-4 inline-block rounded-full bg-ctaRed px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-ctaRed/90"
        >
          Call Now — 0412 974 277
        </a>
      </section>

      <section className="border-t border-metallic/40 px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-text">
            Before Sending Anything
          </h2>
          <p className="mt-4 text-text/80">
            Please contact me first before posting any items. I&apos;ll
            confirm pricing, turnaround time, and the correct Australia Post
            satchel size for your items. You can also send a photo for an
            exact quote before you post anything.
          </p>
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-surface px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-text">
            Return Postage
          </h2>
          <p className="mt-4 text-text/80">
            Customers can include a prepaid Australia Post satchel with
            their items. This is the easiest option and ensures your return
            postage is tracked.
          </p>
          <a
            href="https://auspost.com.au/parcels-mail/calculate-postage-and-delivery-times/prepaid-satchels"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-accent hover:underline"
          >
            auspost.com.au/parcels-mail/calculate-postage-and-delivery-times/prepaid-satchels
          </a>
          <p className="mt-4 text-text/80">
            If you prefer, I can add the postage cost to your final total
            &mdash; just let me know when booking. All return postage is
            sent through Australia Post with tracking.
          </p>
        </div>
      </section>

      <section className="border-t border-metallic/40 px-6 py-20">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-3xl font-semibold text-text">
            How Mail-In Sharpening Works
          </h2>
          <ol className="mt-10 space-y-6">
            {howItWorks.map((step, index) => (
              <li key={step.title} className="flex items-start gap-4">
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-accent text-sm font-semibold text-background">
                  {index + 1}
                </span>
                <div>
                  <p className="font-medium text-text">{step.title}</p>
                  {step.description && (
                    <p className="text-sm text-text/70">{step.description}</p>
                  )}
                  {step.subItems && (
                    <ul className="mt-2 space-y-1">
                      {step.subItems.map((sub) => (
                        <li
                          key={sub}
                          className="flex items-start gap-2 text-sm text-text/70"
                        >
                          <span className="mt-0.5 text-accent">✔</span>
                          <span>{sub}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-surface px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-semibold text-text">
            Items You Can Send
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {itemsYouCanSend.map((category) => (
              <CommercialSegment key={category.title} {...category} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-metallic/40 px-6 py-16">
        <div className="mx-auto max-w-md">
          <h2 className="text-center text-2xl font-semibold text-text">
            Pricing
          </h2>
          <div className="mt-6 rounded-lg border border-metallic/40 bg-background p-6">
            {pricing.map((line, index) => (
              <div
                key={line.name}
                className={`flex items-center justify-between gap-4 py-2 ${
                  index > 0 ? "border-t border-metallic/40" : ""
                }`}
              >
                <span className="text-sm text-text/80">{line.name}</span>
                <span className="text-right text-sm font-semibold text-ctaRed">
                  {line.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-surface px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-text">
            Condition-Based Pricing
          </h2>
          <p className="mt-4 text-text/80">
            Some items may vary in price depending on condition. You can
            send a photo for an exact quote before drop-off or mail-in.
          </p>
        </div>
      </section>

      <section className="border-t border-metallic/40 px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-text">
            Free School Pick-Up
          </h2>
          <p className="mt-4 text-text/80">
            Free pick-up and drop-off available for local schools in the
            Campbelltown area.
          </p>
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-surface px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-text">
            Commercial Pick-Up
          </h2>
          <p className="mt-4 text-text/80">
            Commercial collections are generally offered for jobs over $300
            within the local Campbelltown area. If your business is very
            close to me, I can often assist with smaller loads &mdash; just
            contact me to check availability.
          </p>
        </div>
      </section>

      <section className="border-t border-metallic/40 px-6 py-20">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-3xl font-semibold text-text">
            Why Choose Xtra Sharp
          </h2>
          <div className="mt-6 inline-block text-left">
            <Checklist items={whyChooseUs} />
          </div>
        </div>
      </section>

      <section className="border-t border-metallic/40 bg-surface px-6 py-20 text-center">
        <a
          href="tel:0412974277"
          className="inline-block rounded-full bg-ctaRed px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-ctaRed/90"
        >
          Call Now — 0412 974 277
        </a>
        <p className="mt-4 text-text/70">
          Australia-wide mail-in sharpening. Fast turnaround with tracked
          return postage.
        </p>
      </section>
    </>
  );
}
