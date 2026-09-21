import type { ReactNode } from "react";
import clsx from "clsx";

type SectionProps = {
  children: ReactNode;
  className?: string;
};

export default function Section({ children, className }: SectionProps) {
  return (
    <section className={clsx("py-section", className)}>
      <div className="max-w-4xl mx-auto px-6">{children}</div>
    </section>
  );
}
