import type { ReactNode } from "react";

export function EntityCard({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`group relative isolate rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[linear-gradient(160deg,var(--color-panel-raised)_0%,var(--color-panel)_60%)] p-[clamp(1.5rem,3vw,2.25rem)] transition-[border-color,transform,box-shadow] duration-200 hover:-translate-y-[3px] hover:border-[color-mix(in_srgb,var(--color-edge)_50%,var(--color-border))] hover:shadow-[0_24px_48px_-28px_var(--color-edge-soft)] ${className ?? ""}`}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-px -left-px h-5 w-5 rounded-tl-[var(--radius-lg)] border-t-[1.5px] border-l-[1.5px] border-[var(--color-edge)] opacity-55 transition-opacity duration-200 group-hover:opacity-100"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-1 -left-1 z-[1] h-2 w-2 rounded-full border-[1.5px] border-[var(--color-edge)] bg-[var(--color-ink)]"
      />
      {children}
    </div>
  );
}
