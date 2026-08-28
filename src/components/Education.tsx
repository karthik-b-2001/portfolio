import type { EducationData } from "../types/education";
import { EntityCard } from "./EntityCard";
import { SectionHeading } from "./SectionHeading";

interface EducationProps {
  data: EducationData;
}

export function Education({ data }: EducationProps) {
  return (
    <section id="education" className="container py-[clamp(3rem,8vw,6rem)]">
      <div className="mb-12">
        <SectionHeading>{data.eyebrow}</SectionHeading>
      </div>

      <div className="flex flex-col gap-5">
        {data.items.map((item) => (
          <EntityCard key={item.institution}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <p className="font-mono text-[var(--step-h3)] font-bold text-[var(--color-paper)]">{item.degree}</p>
                <p className="mt-0.5 font-mono text-[var(--step-caption)] font-semibold text-[var(--color-signal)]">
                  {item.institution}
                </p>
              </div>
              <div className="text-right font-mono text-[var(--step-caption)] text-[var(--color-slate)]">
                <p>
                  {item.start} – {item.end}
                </p>
                <p>{item.location}</p>
                {item.gpa && <p className="font-semibold text-[var(--color-edge)]">GPA {item.gpa}</p>}
              </div>
            </div>

            <ul className="mt-3.5 flex flex-col gap-2">
              {item.highlights.map((h, i) => (
                <li key={i} className="flex gap-2.5 text-[var(--step-body)] leading-[1.65] text-[var(--color-slate)]">
                  <span className="mt-0.5 flex-shrink-0 text-[var(--color-edge)]">▸</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </EntityCard>
        ))}
      </div>

      {data.certifications.length > 0 && (
        <div className="mt-10">
          <p className="mb-4 font-mono text-[var(--step-caption)] font-semibold uppercase tracking-[0.06em] text-[var(--color-slate)]">
            Certifications
          </p>
          <div className="grid gap-3 [grid-template-columns:repeat(auto-fill,minmax(260px,1fr))]">
            {data.certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex items-start gap-3.5 rounded-2xl border border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-panel-raised)_60%,transparent)] p-5 backdrop-blur-lg"
              >
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-[10px] bg-[var(--color-signal-soft)] text-base">
                  🏅
                </div>
                <div>
                  <p className="text-[14px] font-bold text-[var(--color-paper)]">{cert.name}</p>
                  <p className="mt-0.5 text-xs text-[var(--color-slate)]">
                    {cert.issuer} · {cert.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
