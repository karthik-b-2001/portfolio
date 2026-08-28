import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { runCommand, type TerminalContext } from "../lib/terminal";
import { Icon } from "./Icon";
import styles from "./Terminal.module.css";

interface TerminalLine {
  kind: "command" | "output";
  text: string;
}

interface TerminalProps {
  username: string;
  role: string;
  sectionIds: string[];
  highlights: { label: string; value: string }[];
  resumeHref: string;
}

function prompt(user: string) {
  return `${user}@portfolio:~$`;
}

export function Terminal({ username, role, sectionIds, highlights, resumeHref }: TerminalProps) {
  const context: TerminalContext = { username, role, sectionIds, highlights, resumeHref };

  const [lines, setLines] = useState<TerminalLine[]>(() => {
    const boot = runCommand("neofetch", context);
    return [
      { kind: "output", text: "Welcome. Type 'help' to see available commands." },
      { kind: "output", text: "" },
      ...boot.lines.map((text) => ({ kind: "output" as const, text })),
    ];
  });
  const [value, setValue] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);
  const [minimized, setMinimized] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight });
  }, [lines]);

  function submit() {
    const raw = value;
    const result = runCommand(raw, context);

    if (result.action?.type === "clear") {
      setLines([]);
    } else {
      setLines((prev) => [
        ...prev,
        { kind: "command", text: raw },
        ...result.lines.map((text) => ({ kind: "output" as const, text })),
      ]);
    }

    if (raw.trim() !== "") {
      setHistory((prev) => [...prev, raw]);
    }
    setHistoryIndex(null);
    setValue("");

    if (result.action?.type === "navigate") {
      const el = document.getElementById(result.action.id);
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      el?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    }
    if (result.action?.type === "open") {
      window.open(result.action.href, "_blank", "noopener,noreferrer");
    }
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      event.preventDefault();
      submit();
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      if (history.length === 0) return;
      const nextIndex = historyIndex === null ? history.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setValue(history[nextIndex]);
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (historyIndex === null) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= history.length) {
        setHistoryIndex(null);
        setValue("");
      } else {
        setHistoryIndex(nextIndex);
        setValue(history[nextIndex]);
      }
    }
  }

  function handleTitlebarClick() {
    if (minimized) {
      setMinimized(false);
      inputRef.current?.focus();
    }
  }

  return (
    <div className={`${styles.dock} ${minimized ? styles.minimized : ""}`}>
      <div
        className={styles.titlebar}
        onClick={handleTitlebarClick}
        role={minimized ? "button" : undefined}
        tabIndex={minimized ? 0 : undefined}
        onKeyDown={(event) => {
          if (minimized && (event.key === "Enter" || event.key === " ")) {
            event.preventDefault();
            handleTitlebarClick();
          }
        }}
        aria-label={minimized ? "Expand terminal" : undefined}
      >
        <div className={styles.dots} aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <p className={styles.title}>
          {minimized && <span className={styles.liveDot} aria-hidden="true" />}
          <span className={styles.titleText}>{minimized ? username : `${username}@portfolio: ~`}</span>
        </p>
        <button
          type="button"
          className={styles.minimizeButton}
          onClick={(event) => {
            event.stopPropagation();
            setMinimized((prev) => !prev);
          }}
          aria-expanded={!minimized}
          aria-controls="terminal-body"
          aria-label={minimized ? "Expand terminal" : "Minimize terminal"}
        >
          <Icon name={minimized ? "chevron-up" : "chevron-down"} size={16} />
        </button>
      </div>

      <div className={styles.collapsible}>
        <div className={styles.collapsibleInner}>
          <div id="terminal-body" className={styles.body} ref={bodyRef} onClick={() => inputRef.current?.focus()}>
            {lines.map((line, i) => (
              <p key={i} className={line.kind === "command" ? styles.commandLine : styles.outputLine}>
                {line.kind === "command" && <span className={styles.prompt}>{prompt(username)}</span>}
                <span>{line.text}</span>
              </p>
            ))}

            <div className={styles.inputRow}>
              <span className={styles.prompt}>{prompt(username)}</span>
              <input
                ref={inputRef}
                className={styles.input}
                type="text"
                value={value}
                onChange={(event) => setValue(event.target.value)}
                onKeyDown={handleKeyDown}
                autoComplete="off"
                autoCapitalize="off"
                spellCheck={false}
                aria-label="Terminal command input"
                tabIndex={minimized ? -1 : 0}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
