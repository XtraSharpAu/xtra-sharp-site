import Link from "next/link";

const options = [
  {
    title: "Drop-Off (Appointment Only)",
    description:
      "Bring your items to Campbelltown NSW. You'll receive a confirmed drop-off time and a completion estimate.",
  },
  {
    title: "Mail-In Service",
    description:
      "Send your items via Australia Post. Return postage can be included or billed separately.",
    href: "/mail-in",
  },
  {
    title: "Local Pick-Up",
    description:
      "Available in selected areas of Western Sydney. Quoted based on distance.",
  },
];

export default function ServiceOptions() {
  return (
    <section className="border-t border-metallic/40 bg-accent/5 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-semibold text-text">
          Service Options
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {options.map((option) => (
            <div
              key={option.title}
              className="rounded-lg border border-metallic/40 bg-background p-6 text-center shadow-sm"
            >
              <h3 className="font-medium text-text">
                {option.href ? (
                  <Link
                    href={option.href}
                    className="text-accent hover:underline"
                  >
                    {option.title}
                  </Link>
                ) : (
                  option.title
                )}
              </h3>
              <p className="mt-2 text-sm text-text/70">
                {option.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
