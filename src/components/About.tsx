import PillList from "@/components/PillList";

const trustedBy = [
  "Schools",
  "Childcare centres",
  "Chefs",
  "Groomers",
  "Tradies",
  "Local households across Western Sydney",
];

export default function About() {
  return (
    <section id="about" className="border-t border-metallic/40 px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-3xl font-semibold text-text">
          About Xtra Sharp
        </h2>
        <p className="mt-6 text-center text-text/80">
          Xtra Sharp is a home-based, appointment-only sharpening service
          located in Campbelltown, NSW. We provide professional sharpening
          for knives, scissors, clipper blades, chisels and tools — with
          flexible options to suit both everyday customers and commercial
          clients.
        </p>
        <p className="mt-4 text-center text-text/80">
          There are no walk-ins. All services are appointment-only, ensuring
          fast turnaround, consistent quality, and personalised service.
        </p>
        <div className="mt-10 text-center">
          <p className="font-medium text-text">Trusted by:</p>
          <div className="mt-4">
            <PillList items={trustedBy} />
          </div>
        </div>
      </div>
    </section>
  );
}
