import { TypeAnimation } from "react-type-animation";
import { motion, useReducedMotion } from "framer-motion";
import type { Hero as HeroData, Headshot, Social } from "../types/profile";
import { Icon } from "./Icon";

interface HeroProps {
  hero: HeroData;
  headshot: Headshot;
  socials: Social[];
}

export function Hero({ hero, headshot, socials }: HeroProps) {
  const reduceMotion = useReducedMotion();

  const typedSequence = hero.rotatingRoles.flatMap((role) => [role, 1800]);

  return (
    <section id="home" className="relative overflow-hidden pt-[clamp(3rem,8vw,6rem)] pb-[clamp(2.5rem,6vw,4rem)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-[-10%] h-[26rem] w-[26rem] rounded-full bg-[var(--color-signal)] opacity-[0.12] blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-[-10%] h-[22rem] w-[22rem] rounded-full bg-[var(--color-edge)] opacity-[0.1] blur-[110px]"
      />

      <div className="container relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-panel)] px-3 py-1.5 font-mono text-[var(--step-caption)] text-[var(--color-slate)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-edge)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-edge)]" />
            </span>
            {hero.availability}
          </div>

          <h1 className="mt-6 whitespace-nowrap text-[clamp(1.05rem,4.5vw,1.75rem)] leading-tight">
            {hero.headline}{" "}
            <span className="sr-only">{hero.rotatingRoles.join(", ")}.</span>
            <span aria-hidden="true" className="text-[var(--color-signal)]">
              <TypeAnimation
                sequence={typedSequence}
                wrapper="span"
                speed={50}
                deletionSpeed={65}
                repeat={Infinity}
                cursor
              />
            </span>
          </h1>

          <p className="mt-6 max-w-[46ch] text-[var(--step-lead)] text-[var(--color-slate)]">{hero.subheadline}</p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              className="rounded-[var(--radius-sm)] bg-[var(--color-signal)] px-6 py-3 font-mono text-[var(--step-caption)] font-semibold text-[var(--color-ink)] transition hover:brightness-110"
              href={hero.primaryCta.href}
            >
              {hero.primaryCta.label}
            </a>
            <a
              className="rounded-[var(--radius-sm)] border border-[var(--color-border)] px-6 py-3 font-mono text-[var(--step-caption)] font-semibold text-[var(--color-paper)] transition hover:border-[var(--color-edge)] hover:text-[var(--color-edge)]"
              href={hero.secondaryCta.href}
            >
              {hero.secondaryCta.label}
            </a>

            <div className="flex items-center gap-3 pl-1">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.icon === "mail" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={`${social.label}: ${social.handle}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-slate)] transition hover:border-[var(--color-edge)] hover:text-[var(--color-edge)]"
                >
                  <Icon name={social.icon} size={16} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, scale: 0.95 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="overflow-hidden rounded-[20px] border border-[var(--color-border)] bg-[var(--color-panel-raised)] shadow-2xl">
            <div className="flex items-center gap-2 border-b border-[var(--color-border)] bg-[var(--color-signal-soft)] px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ef4444]" aria-hidden="true" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#eab308]" aria-hidden="true" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#22c55e]" aria-hidden="true" />
              <span className="flex-1 text-center font-mono text-[11px] text-[var(--color-slate)]">
                karthik.dev
              </span>
            </div>

            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={headshot.src}
                alt={headshot.alt}
                className="h-full w-full object-cover brightness-[1.4] contrast-[1.08] saturate-[1.35]"
                loading="eager"
              />
            </div>

            <div className="px-5 py-3.5 font-mono text-xs leading-[1.8] text-[var(--color-slate)]">
              <span className="text-[var(--color-edge)]">class</span>{" "}
              <span className="text-[var(--color-signal)]">Karthik</span> extends{" "}
              <span className="text-[var(--color-edge)]">Engineer</span> {"{"}
              <br />
              &nbsp;&nbsp;backend | frontend = <span className="text-[var(--color-edge)]">true</span>;
              <br />
              &nbsp;&nbsp;ai = <span className="text-[var(--color-edge)]">true</span>;
              <br />
              &nbsp;&nbsp;camera = <span className="text-[var(--color-edge)]">true</span>;
              <br />
              &nbsp;&nbsp;<span className="text-[var(--color-edge)]">learn</span>() {"{"}{" "}
              <span className="text-orange-400">/* always */</span> {"}"}
              <br />
              {"};"}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
