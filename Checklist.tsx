type ChecklistProps = {
  items: string[];
};

export default function Checklist({ items }: ChecklistProps) {
  return (
    <ul className="mt-3 space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-text/80">
          <span className="mt-1 text-accent">✔</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
