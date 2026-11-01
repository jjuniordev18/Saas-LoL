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
  // Estado inicial lazy - lê do localStorage uma única vez
  const [favorites, setFavorites] = React.useState<string[]>(() => {
    return readFavorites();
  });

  // Escuta mudanças em outras abas
  React.useEffect(() => {
    const onChange = () => setFavorites(readFavorites());
    window.addEventListener(CHANGE_EVENT, onChange);
    window.addEventListener("storage", onChange);
    return () => {
      window.removeEventListener(CHANGE_EVENT, onChange);
      window.removeEventListener("storage", onChange);
    };
  }, []);

  const toggle = React.useCallback((id: string) => {
    setFavorites((current) => {
      const next = current.includes(id)
        ? current.filter((f) => f !== id)
        : [...current, id];
      writeFavorites(next);
      return next;
    });
  }, []);

  const clear = React.useCallback(() => {
    writeFavorites([]);
  }, []);

  const isFavorite = React.useCallback(
    (id: string) => favorites.includes(id),
    [favorites]
  );

  return { favorites, toggle, isFavorite, clear };
}
