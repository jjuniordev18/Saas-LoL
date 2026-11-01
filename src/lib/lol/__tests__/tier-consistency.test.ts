// ============================================================
// Teste de consistência: TIER_STATS_LIST ↔ CHAMPIONS
// Garante que todo campeão listado nas estatísticas da tier
// exista no catálogo de campeões, evitando cliques silenciosos.
// ============================================================
import { describe, it, expect } from "vitest";
import { TIER_STATS_LIST } from "../data";
import { CHAMPIONS } from "../index";

describe("Tier stats consistency", () => {
  it("todo campeão da TIER_STATS_LIST existe em CHAMPIONS", () => {
    const ids = new Set(CHAMPIONS.map((c) => c.id));
    for (const entry of TIER_STATS_LIST) {
      expect(ids.has(entry.championId)).toBe(true);
    }
  });

  it("todo campeão da TIER_STATS_LIST tem tier S ou A", () => {
    for (const entry of TIER_STATS_LIST) {
      expect(["S", "A"]).toContain(entry.tier);
    }
  });

  it("TIER_STATS_LIST está ordenado por rank crescente", () => {
    for (let i = 0; i < TIER_STATS_LIST.length - 1; i++) {
      expect(TIER_STATS_LIST[i].rank).toBeLessThanOrEqual(TIER_STATS_LIST[i + 1].rank);
    }
  });
});
