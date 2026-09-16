type PricingLine = {
  label: string;
  value: string;
};

type ServiceDetailProps = {
  icon: string;
  title: string;
  suitableFor: string;
  whatYouGet: string[];
  pricing: PricingLine[];
};

export default function ServiceDetail({
  icon,
  title,
  suitableFor,
  whatYouGet,
  pricing,
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
        <p className="text-sm font-medium text-text">What you get:</p>
        <ul className="mt-2 space-y-1">
          {whatYouGet.map((item) => (
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
    </div>
  );
}
