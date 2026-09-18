import { useLayoutEffect, useState } from "react";

export type PresetTheme = "dark" | "light" | "cyberpunk" | "sunset";

export interface ThemeMeta {
  id: PresetTheme;
  label: string;
  swatch: string;
}

// Each swatch is split diagonally: the theme's background against its accent.
// Accent alone can't tell Dark from Light — both are the same purple.
export const THEME_META: ThemeMeta[] = [
  { id: "dark", label: "Dark", swatch: "linear-gradient(135deg, #0b0d14 0 50%, #7c6af2 50% 100%)" },
  { id: "light", label: "Light", swatch: "linear-gradient(135deg, #f7f7fb 0 50%, #6c4fe0 50% 100%)" },
  { id: "cyberpunk", label: "Cyberpunk", swatch: "linear-gradient(135deg, #0a0014 0 50%, #ff2e88 50% 100%)" },
  { id: "sunset", label: "Sunset", swatch: "linear-gradient(135deg, #1a0b2e 0 50%, #ff6b4a 50% 100%)" },
];

const PRESET_IDS = THEME_META.map((t) => t.id);

function getInitialTheme(): PresetTheme {
  const stored = window.localStorage.getItem("theme");
  if (stored && (PRESET_IDS as string[]).includes(stored)) {
    return stored as PresetTheme;
  }
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

export function useTheme() {
  const [theme, setThemeState] = useState<PresetTheme>(getInitialTheme);

  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  function setTheme(next: PresetTheme) {
    setThemeState(next);
  }

  return { theme, setTheme };
}
