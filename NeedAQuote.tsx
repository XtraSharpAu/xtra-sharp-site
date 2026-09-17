import Checklist from "@/components/Checklist";

export default function NeedAQuote() {
  return (
    <section className="border-t border-metallic/40 px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold text-text">Need a Quote?</h2>
        <p className="mt-4 text-text/80">Send a message with:</p>
        <div className="mt-2 inline-block text-left">
          <Checklist
            items={[
              "Type of item",
              "Quantity",
              "Any damage or special requirements",
              "Preferred service method (drop-off, mail-in, pick-up)",
            ]}
          />
        </div>
        <p className="mt-6 text-text/80">
          You&apos;ll receive a clear, upfront quote with no surprises.
        </p>
      </div>
    </section>
  );
}
