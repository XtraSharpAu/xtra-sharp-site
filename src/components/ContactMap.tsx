export default function ContactMap() {
  return (
    <section className="border-t border-metallic/40 bg-ausBlue/5 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-semibold text-text">
          Find Us
        </h2>
        <div className="mt-8 overflow-hidden rounded-lg border border-metallic/40">
          <iframe
            title="Xtra Sharp workshop location on Google Maps"
            src="https://www.google.com/maps?q=22+Queenscliff+Dr,+Woodbine+NSW+2560&output=embed"
            width="100%"
            height="350"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
