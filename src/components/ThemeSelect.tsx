import { THEME_META, useTheme } from "../hooks/useTheme";

export function ThemeSelect() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      role="radiogroup"
      aria-label="Choose theme"
      className="flex items-center gap-[5px] rounded-[10px] border border-[var(--color-border)] bg-[var(--color-panel-raised)] px-2 py-[5px] transition-colors duration-300"
    >
      {THEME_META.map((t) => (
        <button
          key={t.id}
          type="button"
          role="radio"
          aria-checked={t.id === theme}
          aria-label={t.label}
          title={t.label}
          onClick={() => setTheme(t.id)}
          className="h-4 w-4 rounded-full transition-transform duration-200"
          style={{
            background: t.swatch,
            border: t.id === theme ? "2.5px solid var(--color-paper)" : "2.5px solid var(--color-border)",
            transform: t.id === theme ? "scale(1.2)" : "scale(1)",
          }}
        />
      ))}
    </div>
  );
}
