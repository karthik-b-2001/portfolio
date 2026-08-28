import type { ExperienceData } from "../types/experience";
import { EntityCard } from "./EntityCard";
import { Chip } from "./Chip";
import { SectionHeading } from "./SectionHeading";

interface ExperienceProps {
  data: ExperienceData;
}

export function Experience({ data }: ExperienceProps) {
  return (
    <section id="experience" className="container py-[clamp(3rem,8vw,6rem)]">
      <div className="mb-12 max-w-[60ch]">
        <SectionHeading>{data.eyebrow}</SectionHeading>
        <p className="mt-3 text-[var(--step-lead)] text-[var(--color-slate)]">{data.subheading}</p>
      </div>

      <div className="flex flex-col">
        {data.items.map((item, i) => (
          <div key={`${item.company}-${item.start}`} className="mb-8 flex gap-5">
            <div className="flex flex-shrink-0 flex-col items-center pt-1.5">
              <span
                className="h-3.5 w-3.5 rounded-full border-2 border-[var(--color-ink)]"
                style={{
                  background: i === 0 ? "var(--color-signal)" : "var(--color-edge)",
                  boxShadow: `0 0 0 2px ${i === 0 ? "var(--color-signal)" : "var(--color-edge)"}`,
                }}
              />
              {i < data.items.length - 1 && (
                <span
                  className="mt-2 w-px flex-1"
                  style={{
                    background: "linear-gradient(var(--color-signal-soft), var(--color-edge-soft))",
                  }}
                />
              )}
            </div>

            <EntityCard className="flex-1">
              <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <p className="font-mono text-[var(--step-h3)] font-bold text-[var(--color-paper)]">{item.role}</p>
                  <p className="mt-0.5 font-mono text-[var(--step-caption)] font-semibold text-[var(--color-signal)]">
                    {item.company}
                    {item.client ? ` · ${item.client}` : ""}
                  </p>
                </div>
                <div className="text-right font-mono text-[var(--step-caption)] text-[var(--color-slate)]">
                  <p>
                    {item.start} – {item.end}
                  </p>
                  <p>{item.location}</p>
                </div>
              </div>

              <p className="mt-3 text-[var(--step-body)] italic text-[var(--color-slate)]">{item.summary}</p>

              <ul className="mt-3.5 flex flex-col gap-2.5">
                {item.highlights.map((h, hi) => (
                  <li key={hi} className="flex gap-2.5 text-[var(--step-body)] leading-[1.65] text-[var(--color-slate)]">
                    <span className="mt-0.5 flex-shrink-0 text-[var(--color-edge)]">▸</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {item.stack.map((s) => (
                  <Chip key={s}>{s}</Chip>
                ))}
              </div>
            </EntityCard>
          </div>
        ))}
      </div>
    </section>
  );
}
