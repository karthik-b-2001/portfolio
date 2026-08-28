import { useLayoutEffect, useState } from "react";

export type PresetTheme = "dark" | "light" | "cyberpunk" | "sunset";

export interface ThemeMeta {
  id: PresetTheme;
  label: string;
  swatch: string;
}

export const THEME_META: ThemeMeta[] = [
  { id: "dark", label: "Dark", swatch: "#7c6af2" },
  { id: "light", label: "Light", swatch: "#6c4fe0" },
  { id: "cyberpunk", label: "Cyberpunk", swatch: "#ff2e88" },
  { id: "sunset", label: "Sunset", swatch: "#ff6b4a" },
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
