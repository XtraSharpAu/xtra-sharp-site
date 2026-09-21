import ContentBlock from "@/components/ContentBlock";

type FAQProps = {
  question: string;
  answer: string;
};

export default function FAQ({ question, answer }: FAQProps) {
  return (
    <ContentBlock>
      <h3 className="font-semibold text-xl mb-2">{question}</h3>
      <p className="text-text/90">{answer}</p>
    </ContentBlock>
  );
}
