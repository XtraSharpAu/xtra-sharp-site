import Link from "next/link";

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
      "Send your items from anywhere in Australia. We sharpen and return them promptly.",
  },
  {
    title: "Local Pick-Up & Return for Schools & Jobs Over $300",
    description:
      "Available for schools and larger jobs over $300 in the local area (Campbelltown, Macarthur and Western Sydney). All other jobs are customer drop-off by appointment or mail-in.",
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
              <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-accent text-background font-semibold">
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
        <div className="mt-10 text-center">
          <Link
            href="/how-it-works"
            className="text-sm font-medium text-accent transition-colors hover:underline"
          >
            View the full process &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
