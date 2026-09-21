import type { ReactNode } from "react";
import clsx from "clsx";

type ContentBlockProps = {
  children: ReactNode;
  className?: string;
};

export default function ContentBlock({ children, className }: ContentBlockProps) {
  return <div className={clsx("mb-stack", className)}>{children}</div>;
}
