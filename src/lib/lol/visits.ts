"use client";

// ============================================================
// Topo do Rift — Contador de visitas (localStorage)
// Incrementa 1 por sessão do navegador (não conta F5 repetido),
// guarda a data da primeira visita e a última visita.
// ============================================================

const KEY = "topo-do-rift:visitas";
const SESSION_FLAG = "topo-do-rift:visita-registrada";

export interface VisitData {
  count: number;
  first: string; // ISO da primeira visita
  last: string; // ISO da última visita
}

function read(): VisitData | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    if (
      typeof parsed === "object" &&
      parsed !== null &&
      typeof (parsed as VisitData).count === "number" &&
      typeof (parsed as VisitData).first === "string" &&
      typeof (parsed as VisitData).last === "string"
    ) {
      return parsed as VisitData;
    }
    return null;
  } catch {
    return null;
  }
}

/**
 * Registra a visita desta sessão (1× por aba/sessão do navegador)
 * e devolve o estado atualizado do contador.
 */
export function registerVisit(): VisitData {
  if (typeof window === "undefined") {
    return { count: 0, first: "", last: "" };
  }
  const nowIso = new Date().toISOString();
  let data = read();

  try {
    const alreadyCounted =
      window.sessionStorage.getItem(SESSION_FLAG) === "1";

    if (!data) {
      data = { count: 1, first: nowIso, last: nowIso };
    } else if (!alreadyCounted) {
      data = { ...data, count: data.count + 1, last: nowIso };
    }

    if (!alreadyCounted) {
      window.sessionStorage.setItem(SESSION_FLAG, "1");
    }
    window.localStorage.setItem(KEY, JSON.stringify(data));
  } catch {
    // storage indisponível (modo privado etc.): usa o estado em memória
    if (!data) data = { count: 1, first: nowIso, last: nowIso };
  }

  return data;
}

/** "31/10/2026" a partir de uma ISO */
export function formatIsoDate(iso: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(d);
}
