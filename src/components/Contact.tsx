const contactOptions = [
  { label: "Book Appointment", href: "#book" },
  { label: "Call / SMS", href: "#contact" },
  { label: "Mail-In Instructions", href: "#how-it-works" },
  { label: "Commercial / School Enquiries", href: "#contact" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-metallic/40 bg-ausBlue/5 px-6 py-20"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold text-text">Ready to Book?</h2>
        <p className="mt-4 text-text/80">
          Appointments are essential — no walk-ins.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {contactOptions.map((option) => (
            <a
              key={option.label}
              href={option.href}
              className="rounded-full border border-ausBlue px-5 py-2.5 text-sm font-medium text-ausBlue transition-colors hover:bg-ausBlue/10"
            >
              {option.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
