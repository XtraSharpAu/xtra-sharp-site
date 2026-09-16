import type { ReactNode } from "react";

type PolicySection = {
  title: string;
  paragraphs: ReactNode[];
};

type PolicySectionsProps = {
  sections: PolicySection[];
};

export default function PolicySections({ sections }: PolicySectionsProps) {
  return (
    <div className="mx-auto max-w-3xl divide-y divide-metallic/40">
      {sections.map((section) => (
        <div key={section.title} className="py-8 first:pt-0">
          <h2 className="text-xl font-semibold text-text">
            {section.title}
          </h2>
          <div className="mt-3 space-y-2 text-text/80">
            {section.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
