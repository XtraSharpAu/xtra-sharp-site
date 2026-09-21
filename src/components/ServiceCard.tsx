import type { ReactNode } from "react";

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  icon?: ReactNode;
};

export default function ServiceCard({ title, description, href, icon }: ServiceCardProps) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
      {icon && <div className="mb-stack">{icon}</div>}
      <h3 className="text-2xl font-semibold mb-stack">{title}</h3>
      <p className="text-text/80 mb-stack">{description}</p>
      <a
        href={href}
        className="inline-block bg-ctaRed text-white px-6 py-3 rounded-full transition-colors hover:bg-ctaRed/90"
      >
        Learn More
      </a>
    </div>
  );
}
