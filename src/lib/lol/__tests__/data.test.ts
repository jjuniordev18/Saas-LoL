// ============================================================
// Testes de unidade para data.ts
// ============================================================
import { describe, it, expect } from "vitest";
import {
  getTierStats,
  getPrevTierStats,
  TIER_STATS_LIST,
  PREV_TIER_STATS_LIST,
  PATCH_VERSION,
  PREV_PATCH_VERSION,
  type TierStatsEntry,
  type PrevTierStatsEntry,
} from "../data";

// Mock dos dados para testes rápidos
const mockTierStats: TierStatsEntry = {
  rank: 1,
  championId: "quinn",
  name: "Quinn",
  tier: "S",
  winRate: 52.2,
  wrChange: 0.3,
  banRate: 0.4,
  pickRate: 0.4,
  matches: 12960,
};

describe("getTierStats", () => {
  // Notar que os dados reais são carregados dos arquivos de campeões
  // Porém, para testes de unidade, testamos a função em si
  it("retorna undefined para campeão inexistente", () => {
    const stats = getTierStats("nonexistent");
    expect(stats).toBeUndefined();
  });

  it("retorna campeão existente com os dados corretos", () => {
    const stats = getTierStats("quinn");
    expect(stats).toBeDefined();
    expect(stats?.name).toBe("Quinn");
    expect(stats?.tier).toBe("S");
    expect(stats?.winRate).toBe(52.2);
    expect(stats?.rank).toBe(1);
  });

  it("consegue encontrar campeão por ID", () => {
    const stats = getTierStats("malphite");
    expect(stats).toBeDefined();
    expect(stats?.name).toBe("Malphite");
  });
});

describe("getPrevTierStats", () => {
  it("encontra estatísticas da patch anterior", () => {
    const stats = getPrevTierStats("malphite");
    expect(stats).toBeDefined();
    expect(stats?.name).toBe("Malphite");
    expect(stats?.winRate).toBe(51.8);
  });

  it("retorna undefined para campeão inexistente", () => {
    const stats = getPrevTierStats("nonexistent");
    expect(stats).toBeUndefined();
  });
});

describe("PREV_PATCH_VERSION", () => {
  it("é uma versão válida no formato X.XX", () => {
    expect(PREV_PATCH_VERSION).toMatch(/^\d+\.\d+$/);
  });

  it("é diferente da patch atual", () => {
    const currentPatch = PATCH_VERSION;
    expect(PREV_PATCH_VERSION).not.toBe(currentPatch);
  });
});

describe("TIER_STATS_LIST", () => {
  it("tem 12 entradas", () => {
    expect(TIER_STATS_LIST).toHaveLength(12);
  });

  it("está ordenado por rank", () => {
    for (let i = 0; i < TIER_STATS_LIST.length - 1; i++) {
      expect(TIER_STATS_LIST[i].rank).toBeLessThanOrEqual(TIER_STATS_LIST[i + 1].rank);
    }
  });

  it("os campeões têm campos obrigatórios", () => {
    for (const entry of TIER_STATS_LIST) {
      expect(entry.championId).toBeDefined();
      expect(entry.name).toBeDefined();
      expect(["S", "A"]).toContain(entry.tier);
      expect(entry.winRate).toBeGreaterThan(0);
      expect(entry.winRate).toBeLessThan(100);
    }
  });
});

describe("PREV_TIER_STATS_LIST", () => {
  it("tem entradas", () => {
    expect(PREV_TIER_STATS_LIST.length).toBeGreaterThan(0);
  });

  it("os campeões temos campos obrigatórios", () => {
    for (const entry of PREV_TIER_STATS_LIST) {
      expect(entry.championId).toBeDefined();
      expect(entry.name).toBeDefined();
      expect(entry.rank).toBeGreaterThan(0);
    }
  });
});