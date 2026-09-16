const steps = [
  {
    title: "Book an Appointment",
    description: "Choose a time that suits you — no walk-ins.",
  },
  {
    title: "Drop Off Your Items",
    description:
      "Simple, fast and convenient. You'll receive a confirmation when your items are ready.",
  },
  {
    title: "Mail-In Service Available",
    description:
      "Send your items from anywhere in NSW. We sharpen and return them promptly.",
  },
  {
    title: "Local Pick-Up for Larger Jobs & Schools",
    description:
      "Available across Campbelltown, Macarthur and Western Sydney for bulk or commercial sharpening.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="border-t border-metallic/40 px-6 py-20"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-semibold text-text">
          How It Works
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {steps.map((step, index) => (
            <div key={step.title} className="flex gap-4">
              <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-ausBlue text-background font-semibold">
                {index + 1}
              </div>
              <div>
                <h3 className="font-medium text-text">{step.title}</h3>
                <p className="mt-1 text-sm text-text/70">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
