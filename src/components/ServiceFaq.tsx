type FaqEntry = { question: string; answer: string };

type ServiceFaqProps = {
  items: FaqEntry[];
};

export default function ServiceFaq({ items }: ServiceFaqProps) {
  return (
    <div className="mx-auto max-w-2xl space-y-6 text-left">
      {items.map((item) => (
        <div key={item.question}>
          <h3 className="font-medium text-text">{item.question}</h3>
          <p className="mt-2 text-sm text-text/70">{item.answer}</p>
        </div>
      ))}
    </div>
  );
}
