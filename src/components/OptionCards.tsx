type Option = {
  title: string;
  description: string;
};

type OptionCardsProps = {
  options: Option[];
};

export default function OptionCards({ options }: OptionCardsProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-3">
      {options.map((option) => (
        <div
          key={option.title}
          className="rounded-lg border border-metallic/40 bg-background p-5"
        >
          <h3 className="font-medium text-text">{option.title}</h3>
          <p className="mt-2 text-sm text-text/70">{option.description}</p>
        </div>
      ))}
    </div>
  );
}
