type PricingLine = {
  label: string;
  value: string;
};

type ServiceDetailProps = {
  icon: string;
  title: string;
  suitableFor: string;
  whatsIncluded: string[];
  pricing: PricingLine[];
  highlights: string[];
};

export default function ServiceDetail({
  icon,
  title,
  suitableFor,
  whatsIncluded,
  pricing,
  highlights,
}: ServiceDetailProps) {
  return (
    <div className="rounded-lg border border-metallic/40 bg-background p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-text">
        <span className="mr-2">{icon}</span>
        {title}
      </h3>
      <p className="mt-2 text-sm text-text/70">
        <span className="font-medium text-text/80">Suitable for:</span>{" "}
        {suitableFor}
      </p>

      <div className="mt-4">
        <p className="text-sm font-medium text-text">What&apos;s included:</p>
        <ul className="mt-2 space-y-1">
          {whatsIncluded.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-text/70">
              <span className="mt-0.5 text-ausBlue">✔</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 border-t border-metallic/40 pt-4">
        <p className="text-sm font-medium text-text">Pricing:</p>
        <ul className="mt-2 space-y-1">
          {pricing.map((line) => (
            <li
              key={line.label}
              className="flex items-baseline justify-between gap-4 text-sm text-text/70"
            >
              <span>{line.label}</span>
              <span className="font-medium text-ctaRed">{line.value}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 border-t border-metallic/40 pt-4">
        <p className="text-sm font-medium text-text">Highlights:</p>
        <ul className="mt-2 flex flex-wrap gap-2">
          {highlights.map((item) => (
            <li
              key={item}
              className="rounded-full border border-ausBlue/40 bg-ausBlue/5 px-3 py-1 text-xs font-medium text-ausBlue"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
