import FAQ from "@/components/FAQ";

type FaqEntry = { question: string; answer: string };

type ServiceFaqProps = {
  items: FaqEntry[];
};

export default function ServiceFaq({ items }: ServiceFaqProps) {
  return (
    <div className="mx-auto max-w-2xl space-y-6 text-left">
      {items.map((item) => (
        <FAQ key={item.question} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
}
