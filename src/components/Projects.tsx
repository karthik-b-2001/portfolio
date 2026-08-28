import type { ProjectItem, ProjectsData } from "../types/projects";
import { Chip } from "./Chip";
import { Icon } from "./Icon";
import { SectionHeading } from "./SectionHeading";

interface ProjectsProps {
  data: ProjectsData;
}

function ProjectCard({ project, large }: { project: ProjectItem; large?: boolean }) {
  return (
    <div className="relative h-full overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-panel-raised)_60%,transparent)] p-7 shadow-[0_2px_12px_rgba(255,255,255,0.06)] backdrop-blur-lg">
      <span
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{ background: "linear-gradient(90deg, var(--color-signal), var(--color-edge))" }}
      />

      <div className="flex items-start justify-between gap-2">
        <h3 className={large ? "text-[22px] font-extrabold text-[var(--color-paper)]" : "text-[18px] font-extrabold text-[var(--color-paper)]"}>
          {project.title}
        </h3>
        <span className="whitespace-nowrap rounded-full bg-[var(--color-signal-soft)] px-2.5 py-1 font-mono text-[11px] font-semibold text-[var(--color-slate)]">
          {project.year}
        </span>
      </div>
      <p className="mt-1.5 font-mono text-[13px] font-semibold text-[var(--color-signal)]">{project.subtitle}</p>

      <p className={`mt-3 leading-[1.75] text-[var(--color-slate)] ${large ? "text-[var(--step-body)]" : "text-[13px]"}`}>
        {project.blurb}
      </p>

      {project.details.length > 0 && (
        <ul className="mt-3 flex flex-col gap-2">
          {project.details.map((d, i) => (
            <li key={i} className="flex gap-2 text-[13px] leading-[1.6] text-[var(--color-slate)]">
              <span className="flex-shrink-0 text-[var(--color-edge)]">▸</span>
              <span>{d}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-3.5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Chip key={tag}>{tag}</Chip>
        ))}
        {project.stack.map((s) => (
          <Chip key={s}>{s}</Chip>
        ))}
      </div>

      {project.links.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-4">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[var(--color-edge)] transition-colors hover:text-[var(--color-signal)]"
            >
              <Icon name={link.icon} size={14} />
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export function Projects({ data }: ProjectsProps) {
  const featured = data.items.filter((p) => p.featured);
  const rest = data.items.filter((p) => !p.featured);

  return (
    <section id="projects" className="container py-[clamp(3rem,8vw,6rem)]">
      <div className="mb-12 max-w-[60ch]">
        <SectionHeading>{data.eyebrow}</SectionHeading>
        <p className="mt-3 text-[var(--step-lead)] text-[var(--color-slate)]">{data.subheading}</p>
      </div>

      {featured.length > 0 && (
        <div className="mb-5 grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(320px,1fr))]">
          {featured.map((project) => (
            <ProjectCard key={project.title} project={project} large />
          ))}
        </div>
      )}

      {rest.length > 0 && (
        <div className="grid gap-4 [grid-template-columns:repeat(auto-fill,minmax(280px,1fr))]">
          {rest.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      )}
    </section>
  );
}
