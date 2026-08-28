import type { About as AboutData, Highlight } from "../types/profile";

interface AboutProps {
  about: AboutData;
  highlights: Highlight[];
  location: string;
}

const cardClass =
  "rounded-2xl border border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-panel-raised)_60%,transparent)] p-7 shadow-[0_2px_12px_rgba(255,255,255,0.06)] backdrop-blur-lg";

export function About({ about, highlights, location }: AboutProps) {
  return (
    <section id="about" className="container py-[clamp(3rem,8vw,6rem)]">
      <div className="mb-12">
        <h2 className="bg-[linear-gradient(90deg,var(--color-paper)_0%,var(--color-signal)_50%,var(--color-paper)_100%)] bg-clip-text text-transparent text-lg m-3">
          {about.eyebrow}
        </h2>
      </div>

      <div className="grid grid-cols-6 gap-4 auto-rows-[minmax(100px,auto)]">
        <div className={`${cardClass} col-span-6 flex flex-col justify-center gap-4 lg:col-span-4 lg:row-span-2`}>
          {about.paragraphs.map((paragraph, i) => (
            <p
              key={i}
              className="leading-[1.8] text-[var(--color-slate)]"
              style={i === about.paragraphs.length - 1 ? { opacity: 0.75 } : undefined}
            >
              {paragraph}
            </p>
          ))}
        </div>

        {highlights.map((h) => (
          <div key={h.label} className={`${cardClass} col-span-3 flex flex-col items-center justify-center text-center lg:col-span-2`}>
            <div className="font-mono text-[28px] font-extrabold tracking-tight text-(--color-signal)">{h.value}</div>
            <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.06em] text-[var(--color-slate)]">
              {h.label}
            </div>
          </div>
        ))}

        <div className={`${cardClass} col-span-6 flex items-center gap-3.5 lg:col-span-2`}>
          <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-[10px] bg-[var(--color-signal-soft)] text-base">
            📍
          </div>
          <div className="font-bold text-[var(--color-paper)]">{location}</div>
        </div>
      </div>
    </section>
  );
}
