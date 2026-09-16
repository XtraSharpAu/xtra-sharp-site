import type { Metadata } from "next";
import Link from "next/link";
import HowItWorksHero from "@/components/HowItWorksHero";
import ProcessStep from "@/components/ProcessStep";
import Checklist from "@/components/Checklist";
import OptionCards from "@/components/OptionCards";

export const metadata: Metadata = {
  title: "How It Works | Xtra Sharp",
  description:
    "The step-by-step process behind every Xtra Sharp job — booking, drop-off/mail-in/pick-up options, sharpening, quality checks, and return.",
};

const sendOptions = [
  {
    title: "Drop-Off (Appointment Only)",
    description:
      "You bring your items to Campbelltown NSW at the agreed time. You'll be given a completion estimate and collection details.",
  },
  {
    title: "Mail-In Service",
    description:
      "You send your items via Australia Post. Return postage can be included in the quote or billed separately.",
  },
  {
    title: "Local Pick-Up",
    description:
      "Available in selected areas of Western Sydney. Pick-up is quoted based on distance and job size.",
  },
];

const returnOptions = [
  {
    title: "Drop-Off Jobs",
    description: "You collect your items at the agreed time.",
  },
  {
    title: "Mail-In Jobs",
    description:
      "Your items are securely packed and sent back via Australia Post.",
  },
  {
    title: "Local Pick-Up Jobs",
    description: "Items are returned as arranged during booking.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <HowItWorksHero />

      <ProcessStep number={1} title="Book Your Appointment">
        <p className="text-text/80">
          You contact Xtra Sharp to arrange a time and service type.
        </p>
        <p className="mt-4 text-sm font-medium text-text">You can:</p>
        <Checklist
          items={[
            "Request a quote",
            "Ask about specific tools or blades",
            "Confirm turnaround time",
          ]}
        />
      </ProcessStep>

      <ProcessStep number={2} title="Choose How You Send Your Items" alt>
        <OptionCards options={sendOptions} />
      </ProcessStep>

      <ProcessStep number={3} title="Sharpening Process">
        <p className="text-text/80">
          Once your items arrive, they go through a consistent workflow:
        </p>
        <Checklist
          items={[
            "Inspection of each item",
            "Edge angle and condition checked",
            "Sharpening on professional machines",
            "Honing and polishing where required",
            "Final test (cut or run) before completion",
          ]}
        />
      </ProcessStep>

      <ProcessStep number={4} title="Quality Check & Completion" alt>
        <p className="text-text/80">Before your items are returned:</p>
        <Checklist
          items={[
            "Edges are checked for consistency",
            "Tools are wiped down",
            "Any issues are noted and communicated",
          ]}
        />
        <p className="mt-4 text-text/80">
          You receive a confirmation that your job is complete and ready for
          collection or return shipping.
        </p>
      </ProcessStep>

      <ProcessStep number={5} title="Collection or Return">
        <OptionCards options={returnOptions} />
      </ProcessStep>

      <section className="border-t border-metallic/40 bg-ausBlue/5 px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-text">
            Questions or Special Requests?
          </h2>
          <p className="mt-4 text-text/80">
            If you have urgent jobs, large batches, or specialty tools, you
            can discuss options during booking. Xtra Sharp aims to provide
            clear communication and reliable turnaround for every job.
          </p>
          <Link
            href="/#contact"
            className="mt-6 inline-block rounded-full bg-ctaRed px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-ctaRed/90"
          >
            Book Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
