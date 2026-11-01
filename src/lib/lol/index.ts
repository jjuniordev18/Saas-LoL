// ============================================================
// Topo do Rift — Índice agregado dos campeões + helpers
// ============================================================
import type { Champion, ChampionClass, Difficulty, Tier, ItemCategory } from "./data";
import { CHAMPIONS_A } from "./champions-a";
import { CHAMPIONS_B } from "./champions-b";
import { CHAMPIONS_C } from "./champions-c";
import { CHAMPIONS_D } from "./champions-d";
import { CHAMPIONS_E } from "./champions-e";
import { CHAMPIONS_F } from "./champions-f";
import { CHAMPIONS_G } from "./champions-g";

export const CHAMPIONS: Champion[] = [
  ...CHAMPIONS_A,
  ...CHAMPIONS_B,
  ...CHAMPIONS_C,
  ...CHAMPIONS_D,
  ...CHAMPIONS_E,
  ...CHAMPIONS_F,
  ...CHAMPIONS_G,
];

export function getChampionById(id: string): Champion | undefined {
  return CHAMPIONS.find((c) => c.id === id);
}

export function getPopularChampions(): Champion[] {
  return CHAMPIONS.filter((c) => c.popular);
}

export const CLASS_FILTERS: { value: ChampionClass | "todas"; label: string }[] = [
  { value: "todas", label: "Todas" },
  { value: "lutador", label: "Lutador" },
  { value: "tank", label: "Tanque" },
  { value: "duelista", label: "Duelista" },
  { value: "mago", label: "Mago" },
];

export const DIFFICULTY_FILTERS: { value: Difficulty | "todas"; label: string }[] = [
  { value: "todas", label: "Todas" },
  { value: 1, label: "Fácil" },
  { value: 2, label: "Moderada" },
  { value: 3, label: "Difícil" },
];

export const TIER_FILTERS: { value: Tier | "todos"; label: string }[] = [
  { value: "todos", label: "Todos" },
  { value: "S", label: "Tier S" },
  { value: "A", label: "Tier A" },
  { value: "B", label: "Tier B" },
];

export interface ChampionFilters {
  query: string;
  classe: ChampionClass | "todas";
  dificuldade: Difficulty | "todas";
  tier: Tier | "todos";
}

export const DEFAULT_FILTERS: ChampionFilters = {
  query: "",
  classe: "todas",
  dificuldade: "todas",
  tier: "todos",
};

export function filterChampions(filters: ChampionFilters): Champion[] {
  const q = normalizeText(filters.query);
  return CHAMPIONS.filter((c) => {
    if (q && !normalizeText(c.name).includes(q) && !normalizeText(c.title).includes(q)) return false;
    if (filters.classe !== "todas" && !c.classes.includes(filters.classe)) return false;
    if (filters.dificuldade !== "todas" && c.difficulty !== filters.dificuldade) return false;
    if (filters.tier !== "todos" && c.tier !== filters.tier) return false;
    return true;
  });
}

// ------------------------------------------------------------
// Helpers de busca por item
// ------------------------------------------------------------
export const ITEM_CATEGORY_FILTERS: { value: ItemCategory | "todas"; label: string }[] = [
  { value: "todas", label: "Todas" },
  { value: "starter", label: "Iniciais" },
  { value: "boots", label: "Botas" },
  { value: "ad", label: "Dano / AD" },
  { value: "tank", label: "Tanque" },
  { value: "ap", label: "Poder Mágico" },
];

/** Normaliza texto para busca tolerante (sem acentos, apóstrofos, caixa) */
export function normalizeText(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/['’.]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

/** Campeões que usam o item em qualquer parte da build (core, boot, situacional, alternativa) */
export function championsUsingItem(itemId: string): { champion: Champion; where: string }[] {
  const out: { champion: Champion; where: string }[] = [];
  for (const c of CHAMPIONS) {
    const spots: string[] = [];
    if (c.startItems.some((r) => r.id === itemId)) spots.push("Inicial");
    if (c.boots.some((r) => r.id === itemId)) spots.push("Botas");
    if (c.coreItems.some((r) => r.id === itemId)) spots.push("Core");
    if (c.situationalItems.some((r) => r.id === itemId)) spots.push("Situacional");
    if (c.altBuilds.some((b) => b.items.some((r) => r.id === itemId))) spots.push("Alt. build");
    if (spots.length > 0) out.push({ champion: c, where: spots.join(" · ") });
  }
  return out;
}

// URL das imagens oficiais (Data Dragon / Riot Games)
// A versão vem do arquivo gerado por scripts/fetch-ddragon.mjs
import { DDRAGON_VERSION } from "./ddragon";
export { DDRAGON_VERSION };

export function championImageUrl(image: string): string {
  // Nomes simples em minúsculas ("darius") viram "Darius";
  // chaves com caixa mista ("DrMundo", "KSante") são usadas como estão.
  const key = /^[a-z]+$/.test(image)
    ? image.charAt(0).toUpperCase() + image.slice(1)
    : image;
  return `https://ddragon.leagueoflegends.com/cdn/${DDRAGON_VERSION}/img/champion/${key}.png`;
}
