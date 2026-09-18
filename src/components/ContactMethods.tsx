const methods = [
  {
    icon: "📞",
    title: "Phone",
    description:
      "Call or text to arrange a drop-off, pick-up, or mail-in job. You'll receive a confirmation time and any details needed for your service.",
    link: {
      href: "tel:0412974277",
      label: "0412 974 277",
    },
  },
  {
    icon: "📧",
    title: "Email",
    description:
      "Send photos of your tools, ask for quotes, or request batch pricing. Email is ideal for mail-in jobs or larger workshop orders.",
    link: {
      href: "mailto:phil@xtrasharp.com.au",
      label: "phil@xtrasharp.com.au",
    },
  },
  {
    icon: "📍",
    title: "Location",
    description:
      "Woodbine, Campbelltown NSW. Drop-off is strictly appointment-only.",
    link: {
      href: "https://www.google.com/maps/place/22+Queenscliff+Dr,+Woodbine+NSW+2560",
      label: "22 Queenscliff Drive, Woodbine NSW",
      external: true,
    },
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
            <a
              href={method.link.href}
              target={method.link.external ? "_blank" : undefined}
              rel={method.link.external ? "noopener noreferrer" : undefined}
              className="mt-3 inline-block font-medium text-accent hover:underline"
            >
              {method.link.label}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
