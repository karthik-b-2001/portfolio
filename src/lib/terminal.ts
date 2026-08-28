export interface TerminalContext {
  username: string;
  role: string;
  sectionIds: string[];
  highlights: { label: string; value: string }[];
  resumeHref: string;
}

export type TerminalAction =
  | { type: "navigate"; id: string }
  | { type: "open"; href: string }
  | { type: "clear" };

export interface CommandResult {
  lines: string[];
  action?: TerminalAction;
}

const HELP_LINES = [
  "Available commands:",
  "  help              show this message",
  "  whoami            print current user",
  "  neofetch          show a quick system summary",
  "  ls                list sections",
  "  cd <section>      jump to a section (e.g. cd projects)",
  "  /<section>        shortcut for cd <section> (e.g. /projects)",
  "  resume            open resume in a new tab",
  "  contact           jump to the contact section",
  "  clear             clear the terminal",
];

export function runCommand(raw: string, ctx: TerminalContext): CommandResult {
  const trimmed = raw.trim();
  if (trimmed === "") return { lines: [] };

  if (trimmed.startsWith("/")) {
    return resolveSection(trimmed.slice(1), ctx);
  }

  const [cmd, ...rest] = trimmed.split(/\s+/);
  const arg = rest.join(" ");

  switch (cmd) {
    case "help":
      return { lines: HELP_LINES };
    case "whoami":
      return { lines: [ctx.username] };
    case "neofetch":
    case "fetch": {
      const header = `${ctx.username}@portfolio`;
      return {
        lines: [
          header,
          "-".repeat(header.length),
          `role: ${ctx.role}`,
          ...ctx.highlights.map((h) => `${h.label}: ${h.value}`),
        ],
      };
    }
    case "ls":
      return {
        lines: [
          ctx.sectionIds
            .filter((s) => s !== "home")
            .map((s) => `${s}/`)
            .join("  "),
        ],
      };
    case "cd":
      return resolveSection(arg, ctx);
    case "resume":
      return { lines: ["Opening resume..."], action: { type: "open", href: ctx.resumeHref } };
    case "contact":
      return resolveSection("contact", ctx);
    case "clear":
      return { lines: [], action: { type: "clear" } };
    case "sudo":
      return { lines: ["Permission denied: nice try."] };
    default:
      return { lines: [`bash: ${cmd}: command not found`] };
  }
}

function resolveSection(arg: string, ctx: TerminalContext): CommandResult {
  const id = arg.trim().toLowerCase();
  if (id === "") {
    return { lines: ["/home"] };
  }
  if (ctx.sectionIds.includes(id)) {
    return { lines: [`→ ${id}`], action: { type: "navigate", id } };
  }
  return { lines: [`bash: cd: ${id}: No such file or directory`] };
}
