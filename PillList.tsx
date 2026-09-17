type PillListProps = {
  items: string[];
};

export default function PillList({ items }: PillListProps) {
  return (
    <ul className="flex flex-wrap justify-center gap-3">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-metallic/40 bg-metallic/10 px-4 py-1 text-sm text-text/80"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
