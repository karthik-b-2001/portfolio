import type { About as AboutData, Highlight } from "../types/profile";
import { SectionHeading } from "./SectionHeading";

interface AboutProps {
  about: AboutData;
  highlights: Highlight[];
  location: string;
}

const cardClass =
  "rounded-2xl border border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-panel-raised)_60%,transparent)] p-6 shadow-[0_2px_12px_rgba(255,255,255,0.06)] backdrop-blur-lg";

export function About({ about, highlights, location }: AboutProps) {
  return (
    <section id="about" className="container py-[clamp(3rem,8vw,6rem)]">
      <div className="mb-12">
        <SectionHeading>{about.eyebrow}</SectionHeading>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.6fr_1fr]">
        <div className={`${cardClass} flex flex-col justify-center gap-4 p-7`}>
          {about.paragraphs.map((paragraph, i) => (
            <p
              key={i}
              className="text-[var(--step-body)] leading-[1.8] text-[var(--color-slate)]"
              style={i === about.paragraphs.length - 1 ? { opacity: 0.75 } : undefined}
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="grid grid-cols-2 content-center gap-4">
          {highlights.map((h) => (
            <div key={h.label} className={`${cardClass} flex flex-col items-center justify-center text-center`}>
              <div className="font-mono text-[26px] font-extrabold tracking-tight text-(--color-signal)">{h.value}</div>
              <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.06em] text-[var(--color-slate)]">
                {h.label}
              </div>
            </div>
          ))}

          <div className={`${cardClass} flex flex-col items-center justify-center gap-1 text-center`}>
            <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[var(--color-signal-soft)] text-base">
              📍
            </div>
            <div className="text-[13px] font-bold text-[var(--color-paper)]">{location}</div>
            <div className="text-[10px] leading-snug text-[var(--color-slate)]">Open to relocate anywhere in the US</div>
          </div>
        </div>
      </div>
    </section>
  );
}
