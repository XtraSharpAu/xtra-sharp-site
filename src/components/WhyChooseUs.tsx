const reasons = [
  "Professional, consistent results",
  "Appointment-only service (no waiting around)",
  "Fast turnaround",
  "Local pick-up and return for schools and jobs over $300",
  "Mail-in option for convenience",
  "Trusted by schools and commercial clients",
  "Serving Campbelltown, Western Sydney & Macarthur",
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="border-t border-metallic/40 bg-metallic/10 px-6 py-20"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-3xl font-semibold text-text">
          Why Choose Xtra Sharp
        </h2>
        <ul className="mt-8 space-y-3">
          {reasons.map((reason) => (
            <li key={reason} className="flex items-start gap-3 text-text/80">
              <span className="mt-1 text-ctaRed">✔</span>
              <span>{reason}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
