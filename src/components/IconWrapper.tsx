import type { ReactNode } from "react";

type IconWrapperProps = {
  children: ReactNode;
};

export default function IconWrapper({ children }: IconWrapperProps) {
  return <div className="text-ctaRed mb-stack text-4xl">{children}</div>;
}
