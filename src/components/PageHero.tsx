import type { ReactNode } from "react";

type PageHeroProps = {
  title: string;
  subtitle: string;
  children?: ReactNode;
};

export default function PageHero({ title, subtitle, children }: PageHeroProps) {
  return (
    <section className="px-6 py-12 text-center">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="mx-auto max-w-2xl text-lg text-gray-700 mb-6">{subtitle}</p>
      {children}
    </section>
  );
}
