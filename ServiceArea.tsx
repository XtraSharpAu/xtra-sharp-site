const suburbs = [
  "Campbelltown",
  "Glenfield",
  "Ingleburn",
  "Minto",
  "St Helens Park",
  "Ruse",
  "Bradbury",
  "Ambarvale",
  "Rosemeadow",
  "Leumeah",
  "Macquarie Fields",
];

export default function ServiceArea() {
  return (
    <section
      id="service-area"
      className="border-t border-metallic/40 px-6 py-20"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-semibold text-text">
          Areas We Serve
        </h2>
        <p className="mt-6 text-text/80">
          Xtra Sharp proudly serves the Campbelltown and Macarthur region,
          including: {suburbs.join(" • ")} • and surrounding Western Sydney
          suburbs.
        </p>
      </div>
    </section>
  );
}
