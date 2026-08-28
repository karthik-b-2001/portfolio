import type { Navigation } from "../types/site";
import type { Social } from "../types/profile";
import { Icon } from "./Icon";

interface FooterProps {
  brand: Navigation["brand"];
  name: string;
  tagline: string;
  socials: Social[];
}

export function Footer({ brand, name, tagline, socials }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-[var(--color-border)] py-10">
      <div className="container flex flex-wrap items-center justify-between gap-6">
        <span className="inline-flex items-center gap-2 text-base font-bold">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[var(--color-signal)]" />
          {brand}
        </span>

        <div className="flex gap-3">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.icon === "mail" ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={`${social.label}: ${social.handle}`}
              className="text-[var(--color-slate)] transition-colors duration-150 hover:text-[var(--color-edge)]"
            >
              <Icon name={social.icon} size={16} />
            </a>
          ))}
        </div>

        <p className="w-full text-[var(--step-caption)] text-[var(--color-slate)]">
          © {year} {name} · {tagline}
        </p>
      </div>
    </footer>
  );
}
