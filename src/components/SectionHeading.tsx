import type { ReactNode } from "react";

export function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="m-3 bg-[linear-gradient(90deg,var(--color-paper)_0%,var(--color-signal)_50%,var(--color-paper)_100%)] bg-clip-text text-transparent">
      {children}
    </h2>
  );
}
