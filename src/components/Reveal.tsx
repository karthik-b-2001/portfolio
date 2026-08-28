import type { ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";

interface RevealProps {
  children: ReactNode;
}

export function Reveal({ children }: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      data-reveal
      className={`transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        visible ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}
