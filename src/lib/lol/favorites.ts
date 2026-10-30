"use client";

// ============================================================
// Topo do Rift — Sistema de favoritos (localStorage)
// Sincronizado entre todos os componentes via evento customizado.
// ============================================================
import * as React from "react";

const STORAGE_KEY = "topo-do-rift:favoritos";
const CHANGE_EVENT = "topo-do-rift:favoritos-changed";

function readFavorites(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((x): x is string => typeof x === "string");
  } catch {
    return [];
  }
}

function writeFavorites(ids: string[]) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  } catch {
    // storage indisponível (modo privado etc.): mantém só em memória
  }
  window.dispatchEvent(new CustomEvent(CHANGE_EVENT));
}

export function useFavorites() {
  const [favorites, setFavorites] = React.useState<string[]>([]);
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    setFavorites(readFavorites());
    setLoaded(true);
    const onChange = () => setFavorites(readFavorites());
    window.addEventListener(CHANGE_EVENT, onChange);
    window.addEventListener("storage", onChange);
    return () => {
      window.removeEventListener(CHANGE_EVENT, onChange);
      window.removeEventListener("storage", onChange);
    };
  }, []);

  const toggle = React.useCallback((id: string) => {
    const current = readFavorites();
    const next = current.includes(id)
      ? current.filter((f) => f !== id)
      : [...current, id];
    writeFavorites(next);
  }, []);

  const clear = React.useCallback(() => {
    writeFavorites([]);
  }, []);

  const isFavorite = React.useCallback(
    (id: string) => favorites.includes(id),
    [favorites]
  );

  return { favorites, toggle, isFavorite, clear, loaded };
}
