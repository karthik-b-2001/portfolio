export function Chip({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-paper)_5%,transparent)] px-[0.8em] py-[0.35em] text-[var(--step-caption)] leading-[1.4] text-[var(--color-slate)] transition-colors duration-200 hover:border-[color-mix(in_srgb,var(--color-edge)_45%,var(--color-border))] hover:bg-[var(--color-edge-soft)] hover:text-[var(--color-paper)]">
      {children}
    </span>
  );
}
