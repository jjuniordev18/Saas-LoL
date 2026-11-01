// ============================================================
// Testes para o hook useFavorites
// ============================================================
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useFavorites } from "../lol/favorites";

// Mock do localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: vi.fn((key: string) => store[key] || null),
    setItem: vi.fn((key: string, value: string) => {
      store[key] = value;
    }),
    removeItem: vi.fn((key: string) => {
      delete store[key];
    }),
    clear: vi.fn(() => {
      store = {};
    }),
  };
})();

Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
});

describe("useFavorites", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorageMock.clear();
  });

  afterEach(() => {
    localStorageMock.clear();
  });

  it("inicia com array vazio quando não há favoritos", () => {
    const { result } = renderHook(() => useFavorites());
    expect(result.current.favorites).toEqual([]);
  });

  it("carrega favoritos existentes do localStorage", () => {
    localStorageMock.setItem("topo-do-rift:favoritos", JSON.stringify(["darius", "garen"]));
    
    const { result } = renderHook(() => useFavorites());
    
    expect(result.current.favorites).toEqual(["darius", "garen"]);
  });

  it("ignora localStorage corrompido", () => {
    localStorageMock.setItem("topo-do-rift:favoritos", "not valid json");
    
    const { result } = renderHook(() => useFavorites());
    
    expect(result.current.favorites).toEqual([]);
  });

  it("ignora localStorage com estrutura incorreta", () => {
    localStorageMock.setItem("topo-do-rift:favoritos", JSON.stringify({ foo: "bar" }));
    
    const { result } = renderHook(() => useFavorites());
    
    expect(result.current.favorites).toEqual([]);
  });

  describe("toggle", () => {
    it("adiciona favorito quando não existe", () => {
      const { result } = renderHook(() => useFavorites());
      
      act(() => {
        result.current.toggle("darius");
      });
      
      expect(result.current.favorites).toContain("darius");
      expect(localStorageMock.setItem).toHaveBeenCalledWith(
        "topo-do-rift:favoritos",
        JSON.stringify(["darius"])
      );
    });

    it("remove favorito quando já existe", () => {
      localStorageMock.setItem("topo-do-rift:favoritos", JSON.stringify(["darius", "garen"]));
      
      const { result } = renderHook(() => useFavorites());
      
      act(() => {
        result.current.toggle("darius");
      });
      
      expect(result.current.favorites).not.toContain("darius");
      expect(result.current.favorites).toContain("garen");
    });

    it("múltiplos toggles alternam corretamente", () => {
      const { result } = renderHook(() => useFavorites());
      
      act(() => {
        result.current.toggle("darius");
      });
      act(() => {
        result.current.toggle("garen");
      });
      act(() => {
        result.current.toggle("darius");
      });
      
      expect(result.current.favorites).toEqual(["garen"]);
      expect(result.current.favorites).not.toContain("darius");
    });
  });

  describe("isFavorite", () => {
    it("retorna true para favorito existente", () => {
      localStorageMock.setItem("topo-do-rift:favoritos", JSON.stringify(["darius"]));
      
      const { result } = renderHook(() => useFavorites());
      
      expect(result.current.isFavorite("darius")).toBe(true);
    });

    it("retorna false para campeão não favorito", () => {
      const { result } = renderHook(() => useFavorites());
      
      expect(result.current.isFavorite("darius")).toBe(false);
      expect(result.current.isFavorite("garen")).toBe(false);
    });
  });

  describe("clear", () => {
    it("limpa todos os favoritos", () => {
      localStorageMock.setItem("topo-do-rift:favoritos", JSON.stringify(["darius", "garen"]));
      
      const { result } = renderHook(() => useFavorites());
      
      act(() => {
        result.current.clear();
      });
      
      expect(result.current.favorites).toEqual([]);
    });
  });

  describe("persistência", () => {
    it("dispara evento customizado após mudança", () => {
      const { result } = renderHook(() => useFavorites());
      
      const dispatchSpy = vi.spyOn(window, "dispatchEvent");
      
      act(() => {
        result.current.toggle("darius");
      });
      
      expect(dispatchSpy).toHaveBeenCalled();
    });
  });
});