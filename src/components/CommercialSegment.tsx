type CommercialSegmentProps = {
  icon: string;
  title: string;
  items: string[];
  note?: string;
  footer?: string;
};

export default function CommercialSegment({
  icon,
  title,
  items,
  note,
  footer,
}: CommercialSegmentProps) {
  return (
    <div className="rounded-lg border border-metallic/40 bg-background p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-text">
        <span className="mr-2" aria-hidden="true">
          {icon}
        </span>
        {title}
      </h3>

      <p className="mt-3 text-sm font-medium text-text">We sharpen:</p>
      <ul className="mt-2 space-y-1">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-sm text-text/70"
          >
            <span className="mt-0.5 text-accent">✔</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {note && (
        <p className="mt-4 rounded-md border border-ctaRed/40 bg-ctaRed/5 px-3 py-2 text-sm text-ctaRed">
          {note}
        </p>
      )}

      {footer && <p className="mt-4 text-sm text-text/70">{footer}</p>}
    </div>
  );
}
