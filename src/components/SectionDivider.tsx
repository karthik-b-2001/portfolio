import { useReveal } from "../hooks/useReveal";

function Line({ origin, visible }: { origin: "left" | "right"; visible: boolean }) {
  return (
    <span className="relative h-px flex-1 overflow-hidden bg-[var(--color-border)]">
      <span
        className={`absolute inset-0 bg-[var(--color-edge)] transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          origin === "left" ? "origin-left" : "origin-right"
        } ${visible ? "scale-x-100" : "scale-x-0"}`}
      />
    </span>
  );
}

export function SectionDivider() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} data-divider className="container flex items-center" role="presentation" aria-hidden="true">
      <Line origin="left" visible={visible} />
      <span
        className={`h-[7px] w-[7px] flex-shrink-0 rounded-full border border-[var(--color-edge)] bg-[var(--color-ink)] transition-all duration-[400ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] delay-[650ms] ${
          visible ? "scale-100 opacity-100" : "scale-30 opacity-0"
        }`}
      />
      <Line origin="right" visible={visible} />
    </div>
  );
}
