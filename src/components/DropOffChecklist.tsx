import Checklist from "@/components/Checklist";

const baseDropOffItems = [
  "Ensure items are clean and dry.",
  "Label commercial sets clearly.",
  "Use protective sleeves for knives and scissors.",
];

const clipperLine = "Detach clipper blades before drop-off or mailing.";

const closingLine = "Include contact details inside the package.";

type DropOffChecklistProps = {
  surface?: boolean;
  isClipperPage?: boolean;
};

export default function DropOffChecklist({
  surface = false,
  isClipperPage = false,
}: DropOffChecklistProps) {
  const items = isClipperPage
    ? [...baseDropOffItems, clipperLine, closingLine]
    : [...baseDropOffItems, closingLine];

  return (
    <section
      className={`border-t border-metallic/40 px-6 py-16 ${surface ? "bg-surface" : ""}`}
    >
      <div className="mx-auto max-w-2xl">
        <h2 className="text-center text-2xl font-semibold text-text">
          Before You Drop Off
        </h2>
        <div className="mt-6 inline-block text-left">
          <Checklist items={items} />
        </div>
        <p className="mt-4 text-center text-text/80">
          Drop-off location: Campbelltown NSW (address provided after booking).
        </p>
      </div>
    </section>
  );
}
