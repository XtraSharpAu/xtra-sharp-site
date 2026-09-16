const methods = [
  {
    icon: "📞",
    title: "Phone",
    description:
      "Call or text to arrange a drop-off, pick-up, or mail-in job. You'll receive a confirmation time and any details needed for your service.",
  },
  {
    icon: "📧",
    title: "Email",
    description:
      "Send photos of your tools, ask for quotes, or request batch pricing. Email is ideal for mail-in jobs or larger workshop orders.",
  },
  {
    icon: "📍",
    title: "Location",
    description:
      "Campbelltown NSW. Full address provided upon booking. Drop-off is strictly appointment-only.",
  },
];

export default function ContactMethods() {
  return (
    <section className="border-t border-metallic/40 px-6 py-20">
      <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-3">
        {methods.map((method) => (
          <div
            key={method.title}
            className="rounded-lg border border-metallic/40 bg-background p-6 text-center shadow-sm"
          >
            <div className="text-2xl">{method.icon}</div>
            <h3 className="mt-2 font-medium text-text">{method.title}</h3>
            <p className="mt-2 text-sm text-text/70">{method.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
