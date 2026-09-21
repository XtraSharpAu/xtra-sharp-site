type SectionHeadingProps = {
  title: string;
  subtitle?: string;
};

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center mb-section">
      <h2 className="text-3xl font-bold mb-stack text-text/90">{title}</h2>
      {subtitle && (
        <p className="text-text/80 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
