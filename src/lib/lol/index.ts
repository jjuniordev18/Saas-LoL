// ============================================================
// Topo do Rift — Índice agregado dos campeões + helpers
// ============================================================
import type { Champion, ChampionClass, Difficulty, Tier } from "./data";
import { CHAMPIONS_A } from "./champions-a";
import { CHAMPIONS_B } from "./champions-b";
import { CHAMPIONS_C } from "./champions-c";
import { CHAMPIONS_D } from "./champions-d";

export const CHAMPIONS: Champion[] = [
  ...CHAMPIONS_A,
  ...CHAMPIONS_B,
  ...CHAMPIONS_C,
  ...CHAMPIONS_D,
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
  const q = filters.query.trim().toLowerCase();
  return CHAMPIONS.filter((c) => {
    if (q && !c.name.toLowerCase().includes(q) && !c.title.toLowerCase().includes(q)) return false;
    if (filters.classe !== "todas" && !c.classes.includes(filters.classe)) return false;
    if (filters.dificuldade !== "todas" && c.difficulty !== filters.dificuldade) return false;
    if (filters.tier !== "todos" && c.tier !== filters.tier) return false;
    return true;
  });
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
