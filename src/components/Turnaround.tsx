const times = [
  { label: "Standard items", value: "24–48 hours" },
  { label: "Large batches", value: "Quoted" },
  { label: "Urgent jobs", value: "Available on request" },
];

export default function Turnaround() {
  return (
    <section className="border-t border-metallic/40 px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold text-text">
          Turnaround Times
        </h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-3">
          {times.map((time) => (
            <li
              key={time.label}
              className="rounded-lg border border-metallic/40 bg-metallic/10 p-4"
            >
              <p className="text-sm text-text/70">{time.label}</p>
              <p className="mt-1 font-medium text-text">{time.value}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
