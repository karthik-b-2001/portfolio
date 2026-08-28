import type { Contact as ContactData, Social } from "../types/profile";
import { Icon } from "./Icon";
import { SectionHeading } from "./SectionHeading";

interface ContactProps {
  contact: ContactData;
  socials: Social[];
}

export function Contact({ contact, socials }: ContactProps) {
  return (
    <section id="contact" className="container py-[clamp(3rem,8vw,6rem)]">
      <div className="mb-12">
        <SectionHeading>{contact.eyebrow}</SectionHeading>
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[linear-gradient(135deg,var(--color-signal-soft),color-mix(in_srgb,var(--color-panel-raised)_60%,transparent))] px-8 py-14 text-center shadow-[0_2px_12px_rgba(255,255,255,0.06)] backdrop-blur-lg">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full"
          style={{ background: "radial-gradient(circle, var(--color-signal-soft), transparent)" }}
        />

        <p className="text-[20px] font-semibold text-[var(--color-paper)]">{contact.availability}</p>
        <p className="mx-auto mt-2 max-w-[480px] text-[15px] leading-[1.7] text-[var(--color-slate)]">
          {contact.blurb}
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-5">
          <div className="flex items-center gap-2 text-[14px]">
            <Icon name="mail" size={16} className="text-[var(--color-edge)]" />
            <a href={`mailto:${contact.email}`} className="font-medium text-[var(--color-signal)]">
              {contact.email}
            </a>
          </div>
          {contact.phone && (
            <div className="flex items-center gap-2 text-[14px] text-[var(--color-slate)]">
              <span aria-hidden="true">📱</span>
              <a href={`tel:${contact.phone}`} className="font-medium text-[var(--color-signal)]">
                {contact.phone}
              </a>
            </div>
          )}
          <div className="flex items-center gap-2 text-[14px] text-[var(--color-slate)]">
            <span aria-hidden="true">📍</span>
            {contact.location}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3.5">
          <a
            href={`mailto:${contact.email}`}
            className="rounded-xl bg-[var(--color-signal)] px-9 py-3.5 font-semibold text-[15px] text-[var(--color-ink)] shadow-[0_4px_20px_var(--color-signal-soft)] transition hover:brightness-110"
          >
            Say hello
          </a>
          {socials
            .filter((s) => s.icon !== "mail")
            .map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${social.label}: ${social.handle}`}
                className="rounded-xl border-2 border-[var(--color-signal-soft)] px-9 py-3.5 font-semibold text-[15px] text-[var(--color-signal)] transition hover:border-[var(--color-signal)]"
              >
                {social.label}
              </a>
            ))}
        </div>
      </div>
    </section>
  );
}
