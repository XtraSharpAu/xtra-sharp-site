import type { ReactNode } from "react";

type PageLayoutProps = {
  children: ReactNode;
};

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-white text-text/90">{children}</div>
  );
}
