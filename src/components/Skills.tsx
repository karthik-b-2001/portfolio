import { useState } from "react";
import type { Skill, SkillsData } from "../types/skills";
import { SectionHeading } from "./SectionHeading";

interface SkillsProps {
  data: SkillsData;
}

function SkillTile({ skill, index }: { skill: Skill; index: number }) {
  const [failed, setFailed] = useState(!skill.logo);

  return (
    <div
      className="flex flex-col items-center gap-2.5 rounded-2xl border border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-panel-raised)_60%,transparent)] px-3 py-5 text-center opacity-0 backdrop-blur-lg [animation:fadeUp_0.4s_ease_forwards]"
      style={{ animationDelay: `${Math.min(index, 24) * 30}ms` }}
    >
      <div className="flex h-11 w-11 items-center justify-center overflow-hidden">
        {!failed ? (
          <img
            src={skill.logo}
            alt={skill.name}
            loading="lazy"
            onError={() => setFailed(true)}
            className="h-9 w-9 object-contain"
          />
        ) : (
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-signal-soft)] text-[13px] font-extrabold tracking-tight text-[var(--color-signal)]">
            {skill.fallback ?? skill.name.slice(0, 2).toUpperCase()}
          </span>
        )}
      </div>
      <div className="text-[12px] font-semibold text-[var(--color-paper)]">{skill.name}</div>
    </div>
  );
}

export function Skills({ data }: SkillsProps) {
  const [active, setActive] = useState("All");
  const visible = active === "All" ? data.items : data.items.filter((s) => s.category === active);

  return (
    <section id="skills" className="container py-[clamp(3rem,8vw,6rem)]">
      <div className="mb-8 max-w-[60ch]">
        <SectionHeading>{data.eyebrow}</SectionHeading>
        <p className="mt-3 text-[var(--step-lead)] text-[var(--color-slate)]">{data.subheading}</p>
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        {["All", ...data.categories].map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className="rounded-full px-4 py-2 text-[13px] font-semibold transition-colors duration-200"
            style={
              active === cat
                ? { background: "linear-gradient(135deg, var(--color-signal), var(--color-edge))", color: "var(--color-ink)" }
                : { background: "var(--color-signal-soft)", color: "var(--color-signal)" }
            }
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid gap-3 [grid-template-columns:repeat(auto-fill,minmax(100px,1fr))] mb-5">
        {visible.map((skill, i) => (
          <SkillTile key={`${active}-${skill.name}`} skill={skill} index={i} />
        ))}
      </div>
    </section>
  );
}
