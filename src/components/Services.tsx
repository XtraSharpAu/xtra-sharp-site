const services = [
  {
    title: "Knife Sharpening",
    description:
      "Kitchen knives, chef knives, utility knives, specialty blades.",
  },
  {
    title: "Scissor Sharpening",
    description:
      "Kitchen scissors, grooming scissors, fabric scissors, professional shears.",
  },
  {
    title: "Clipper Blade Sharpening",
    description:
      "Pet grooming blades, barber blades, professional clipper sets.",
  },
  {
    title: "Chisels & Tool Sharpening",
    description: "Carpentry tools, woodworking chisels, garden tools.",
  },
  {
    title: "School & Commercial Sharpening",
    description:
      "Bulk sharpening for schools, childcare centres, hospitality venues, grooming salons and workshops.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="border-t border-metallic/40 bg-ausBlue/5 px-6 py-20"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-semibold text-text">
          Services
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-lg border border-metallic/40 bg-background p-6 shadow-sm"
            >
              <h3 className="text-lg font-medium text-text">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-text/70">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
