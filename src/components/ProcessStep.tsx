import type { ReactNode } from "react";

type ProcessStepProps = {
  number: number;
  title: string;
  alt?: boolean;
  children: ReactNode;
};

export default function ProcessStep({
  number,
  title,
  alt = false,
  children,
}: ProcessStepProps) {
  return (
    <section
      className={`border-t border-metallic/40 px-6 py-16 ${
        alt ? "bg-accent/5" : ""
      }`}
    >
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-accent text-lg font-semibold text-background">
            {number}
          </div>
          <h2 className="text-2xl font-semibold text-text sm:text-3xl">
            {title}
          </h2>
        </div>
        <div className="mt-6 sm:pl-16">{children}</div>
      </div>
    </section>
  );
}
