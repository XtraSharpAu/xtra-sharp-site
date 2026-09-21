type FAQProps = {
  question: string;
  answer: string;
};

export default function FAQ({ question, answer }: FAQProps) {
  return (
    <div className="mb-6">
      <h3 className="font-semibold text-xl mb-2">{question}</h3>
      <p className="text-gray-700">{answer}</p>
    </div>
  );
}
