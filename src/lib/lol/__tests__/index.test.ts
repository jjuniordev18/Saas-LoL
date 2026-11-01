// ============================================================
// Testes de unidade para index.ts (helpers de filtro e busca)
// ============================================================
import { describe, it, expect } from "vitest";
import {
  getChampionById,
  getPopularChampions,
  filterChampions,
  DEFAULT_FILTERS,
  CLASS_FILTERS,
  DIFFICULTY_FILTERS,
  TIER_FILTERS,
  type ChampionFilters,
} from "../index";

describe("filterChampions", () => {
  describe("comportamento básico", () => {
    it("retorna todos quando query vazia e filtros padrão", () => {
      const result = filterChampions(DEFAULT_FILTERS);
      expect(result.length).toBeGreaterThan(0);
    });

    it("FILTRA POR QUERY (busca por nome)", () => {
      const result = filterChampions({ ...DEFAULT_FILTERS, query: "darius" });
      expect(result.length).toBeGreaterThan(0);
    });
  });

  describe("filtro de classe", () => {
    it("filterChampions retorna resultados para LUTADOR", () => {
      const result = filterChampions({ ...DEFAULT_FILTERS, classe: "lutador" });
      expect(result.every((c) => c.classes.includes("lutador"))).toBe(true);
    });

    it("filterChampions retorna resultados para TANQUE", () => {
      const result = filterChampions({ ...DEFAULT_FILTERS, classe: "tank" });
      expect(result.every((c) => c.classes.includes("tank"))).toBe(true);
    });

    it("filterChampions retorna resultados para MAGE", () => {
      const result = filterChampions({ ...DEFAULT_FILTERS, classe: "mago" });
      expect(result.every((c) => c.classes.includes("mago"))).toBe(true);
    });
  });

  describe("filtro de dificuldade", () => {
    it("FILTRO FÁCIL (1)", () => {
      const result = filterChampions({ ...DEFAULT_FILTERS, dificuldade: 1 });
      expect(result.every((c) => c.difficulty === 1)).toBe(true);
    });

    it("FILTRO MODERADA (2)", () => {
      const result = filterChampions({ ...DEFAULT_FILTERS, dificuldade: 2 });
      expect(result.every((c) => c.difficulty === 2)).toBe(true);
    });

    it("FILTRO DIFÍCIL (3)", () => {
      const result = filterChampions({ ...DEFAULT_FILTERS, dificuldade: 3 });
      expect(result.every((c) => c.difficulty === 3)).toBe(true);
    });
  });

  describe("filtro de tier", () => {
    it("FILTRO TIER S", () => {
      const result = filterChampions({ ...DEFAULT_FILTERS, tier: "S" });
      expect(result.every((c) => c.tier === "S")).toBe(true);
    });

    it("FILTRO TIER A", () => {
      const result = filterChampions({ ...DEFAULT_FILTERS, tier: "A" });
      expect(result.every((c) => c.tier === "A")).toBe(true);
    });

    it("FILTRO TIER B", () => {
      const result = filterChampions({ ...DEFAULT_FILTERS, tier: "B" });
      expect(result.every((c) => c.tier === "B")).toBe(true);
    });
  });
});

describe("CLASS_FILTERS", () => {
  it("tem 5 opções de classe (todas + 4 classes)", () => {
    expect(CLASS_FILTERS).toHaveLength(5);
  });

  it("primeira opção é 'todas'", () => {
    expect(CLASS_FILTERS[0].value).toBe("todas");
    expect(CLASS_FILTERS[0].label).toBe("Todas");
  });
});

describe("DIFFICULTY_FILTERS", () => {
  it("tem 4 opções de dificuldade (todas + 3 níveis)", () => {
    expect(DIFFICULTY_FILTERS).toHaveLength(4);
  });

  it("primeira opção é 'todas'", () => {
    expect(DIFFICULTY_FILTERS[0].value).toBe("todas");
    expect(DIFFICULTY_FILTERS[0].label).toBe("Todas");
  });
});

describe("TIER_FILTERS", () => {
  it("tem 4 opções de tier (todos + 3 tiers)", () => {
    expect(TIER_FILTERS).toHaveLength(4);
  });

  it("primeira opção é 'todos'", () => {
    expect(TIER_FILTERS[0].value).toBe("todos");
    expect(TIER_FILTERS[0].label).toBe("Todos");
  });
});

describe("DEFAULT_FILTERS", () => {
  it("tem valores vazios padrão", () => {
    expect(DEFAULT_FILTERS.query).toBe("");
    expect(DEFAULT_FILTERS.classe).toBe("todas");
    expect(DEFAULT_FILTERS.dificuldade).toBe("todas");
    expect(DEFAULT_FILTERS.tier).toBe("todos");
  });
});

describe("getChampionById", () => {
  it("encontra campeão existente", () => {
    const champ = getChampionById("darius");
    expect(champ).toBeDefined();
    expect(champ?.id).toBe("darius");
  });
});

describe("getPopularChampions", () => {
  it("retorna apenas campeões marcados como populares", () => {
    const populars = getPopularChampions();
    for (const c of populars) {
      expect(c.popular).toBe(true);
    }
  });
});