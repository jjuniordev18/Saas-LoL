"use client";

// ============================================================
// Topo do Rift — Sistema de temas (Hextech, Ionia, Arcano, Noxus)
// Persistido no navegador via localStorage + atributo data-theme.
// ============================================================
import * as React from "react";

export type ThemeId = "hextech" | "ionia" | "arcano" | "noxus";

export interface ThemeMeta {
  id: ThemeId;
  label: string;
  sub: string;
  /** cores para as bolinhas de preview no seletor */
  swatches: [string, string, string];
}

export const THEMES: ThemeMeta[] = [
  {
    id: "hextech",
    label: "Hextech",
    sub: "Escuro clássico",
    swatches: ["#0a1428", "#c8aa6e", "#0ac8b9"],
  },
  {
    id: "ionia",
    label: "Ionia",
    sub: "Modo claro",
    swatches: ["#f6f1e3", "#96712d", "#2f8f84"],
  },
  {
    id: "arcano",
    label: "Arcano",
    sub: "Roxo profundo",
    swatches: ["#150f26", "#c9a2e8", "#7c5cff"],
  },
  {
    id: "noxus",
    label: "Noxus",
    sub: "Rubro imperial",
    swatches: ["#1c0d0d", "#d9a05b", "#c8324b"],
  },
];

const STORAGE_KEY = "topo-do-rift:tema";
const CHANGE_EVENT = "topo-do-rift:tema-changed";

export const DEFAULT_THEME: ThemeId = "hextech";

function isThemeId(v: unknown): v is ThemeId {
  return typeof v === "string" && THEMES.some((t) => t.id === v);
}

function readTheme(): ThemeId {
  if (typeof window === "undefined") return DEFAULT_THEME;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw && isThemeId(JSON.parse(raw))) return JSON.parse(raw);
    if (isThemeId(raw)) return raw; // compat com valor simples
  } catch {
    /* storage indisponível */
  }
  return DEFAULT_THEME;
}

function applyTheme(id: ThemeId) {
  const root = document.documentElement;
  root.dataset.theme = id;
  root.classList.toggle("dark", id !== "ionia");
}

export function useTheme() {
  // Estado inicial lazy - lê do localStorage uma única vez
  const [theme, setThemeState] = React.useState<ThemeId>(() => {
    return readTheme();
  });

  // Tema aplicado no servidor via THEME_BOOT_SCRIPT; aqui sincronizamos apenas no cliente

  // Aplicar tema e sincronizar com outras abas
  React.useEffect(() => {
    applyTheme(theme);

    const sync = () => {
      const t = readTheme();
      if (t !== theme) setThemeState(t);
    };

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) sync();
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener(CHANGE_EVENT, sync);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener(CHANGE_EVENT, sync);
    };
  }, [theme]);

  const setTheme = React.useCallback((id: ThemeId) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(id));
    } catch {
      /* storage indisponível: aplica só em memória */
    }
    applyTheme(id);
    setThemeState(id);
    window.dispatchEvent(new CustomEvent(CHANGE_EVENT));
  }, []);

  return { theme, setTheme };
}

/** Script inline que aplica o tema salvo ANTES da hidratação (evita flash). */
export const THEME_BOOT_SCRIPT = `(function(){try{var k="topo-do-rift:tema";var r=localStorage.getItem(k);var id=null;if(r){try{var p=JSON.parse(r);if(typeof p==="string")id=p;}catch(e){id=r;}}var ok=["hextech","ionia","arcano","noxus"];if(ok.indexOf(id)===-1)id="hextech";var d=document.documentElement;d.dataset.theme=id;d.classList.toggle("dark",id!=="ionia");}catch(e){}})();`;
