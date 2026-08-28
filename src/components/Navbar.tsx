import { useState } from "react";
import type { Navigation } from "../types/site";
import { Icon } from "./Icon";
import { ThemeSelect } from "./ThemeSelect";

interface NavbarProps {
  navigation: Navigation;
}

export function Navbar({ navigation }: NavbarProps) {
  const [open, setOpen] = useState(false);

  const linkClass =
    "inline-flex items-center gap-[0.35em] text-[var(--step-caption)] tracking-[0.02em] text-[var(--color-slate)] transition-colors duration-150 hover:text-[var(--color-paper)]";

  const renderLink = (link: Navigation["links"][number]) =>
    link.type === "external" ? (
      <a key={link.label} className={linkClass} href={link.href} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
        {link.label}
        <Icon name="external" size={13} />
      </a>
    ) : (
      <a key={link.label} className={linkClass} href={link.href} onClick={() => setOpen(false)}>
        {link.label}
      </a>
    );

  return (
    <header className="sticky top-0 z-50 flex h-[var(--nav-height)] items-center border-b border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-ink)_85%,transparent)] backdrop-blur-[10px] transition-colors duration-300">
      <div className="container flex w-full items-center justify-between gap-6">
        <a
          href="#home"
          className="inline-flex items-center gap-2 rounded-[var(--radius-sm)] border border-[var(--color-border)] px-[0.6em] py-[0.3em] text-[1.05rem] font-bold tracking-[0.02em]"
        >
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[var(--color-signal)]" />
          {navigation.brand}
        </a>

        <nav className="hidden items-center gap-7 min-[860px]:flex" aria-label="Primary">
          {navigation.links.map(renderLink)}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeSelect />

          <a
            className="hidden rounded-[var(--radius-sm)] bg-[var(--color-signal)] px-[1em] py-[0.55em] text-[var(--step-caption)] font-semibold text-[var(--color-ink)] transition-[filter] duration-150 hover:brightness-110 min-[860px]:inline-flex"
            href={navigation.resume.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {navigation.resume.label}
          </a>

          <button
            type="button"
            className="inline-flex text-[var(--color-paper)] min-[860px]:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "close" : "menu"} size={22} />
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="fixed inset-x-0 bottom-0 top-[var(--nav-height)] z-40 flex flex-col gap-6 bg-[var(--color-ink)] px-[clamp(1.25rem,4vw,2.5rem)] py-8 min-[860px]:hidden"
          aria-label="Mobile"
        >
          {navigation.links.map((link) =>
            link.type === "external" ? (
              <a
                key={link.label}
                className="inline-flex items-center gap-[0.35em] text-[var(--step-lead)] text-[var(--color-paper)]"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                {link.label}
                <Icon name="external" size={13} />
              </a>
            ) : (
              <a
                key={link.label}
                className="inline-flex items-center gap-[0.35em] text-[var(--step-lead)] text-[var(--color-paper)]"
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ),
          )}
          <a
            className="inline-flex w-fit rounded-[var(--radius-sm)] bg-[var(--color-signal)] px-[1em] py-[0.55em] text-[var(--step-caption)] font-semibold text-[var(--color-ink)]"
            href={navigation.resume.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            {navigation.resume.label}
          </a>
        </nav>
      )}
    </header>
  );
}
