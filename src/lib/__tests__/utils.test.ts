// ============================================================
// Testes de unidade para utils.ts (função cn)
// ============================================================
import { describe, it, expect } from "vitest";
import { cn } from "../utils";

describe("cn (clsx + twMerge)", () => {
  it("junta classes separadas por espaço", () => {
    expect(cn("foo", "bar")).toBe("foo bar");
  });

  it("filtra valores falsy", () => {
    expect(cn("foo", null, "bar", undefined, "baz")).toBe("foo bar baz");
  });

  it("mescla classes do Tailwind conflicting", () => {
    expect(cn("bg-red-500", "bg-blue-500")).toBe("bg-blue-500");
  });

  it("mantém classes diferentes", () => {
    expect(cn("bg-red-500", "text-white")).toBe("bg-red-500 text-white");
  });

  it("lida com objetos de classe condicional", () => {
    const isActive = true;
    expect(cn("btn", { "btn-active": isActive })).toBe("btn btn-active");
  });

  it("não inclui classes condicionais falsas", () => {
    const isActive = false;
    expect(cn("btn", { "btn-active": isActive })).toBe("btn");
  });

  it("mescla utilitários do Tailwind corretamente", () => {
    // twMerge resolve conflitos como p-4 vs p-2
    expect(cn("p-4", "p-2")).toBe("p-2");
    // e h-10 vs h-8
    expect(cn("h-10", "h-8")).toBe("h-8");
  });

  it("funciona com template literals", () => {
    const size = "md";
    expect(cn(`text-${size}`, "font-bold")).toBe("text-md font-bold");
  });

  it("mescla variantes do Radix UI", () => {
    expect(cn(
      "flex items-center justify-center",
      "rounded-md",
      "bg-primary",
      "px-4 py-2",
      "text-sm",
      "font-medium",
      "text-white",
      "hover:bg-primary/90",
      "focus-visible:outline-none",
      "focus-visible:ring-2",
      "focus-visible:ring-ring",
      "focus-visible:ring-offset-2",
      "disabled:cursor-not-allowed",
      "disabled:opacity-50"
    )).toContain("flex items-center justify-center");
  });

  it("mescla classes vazias", () => {
    expect(cn()).toBe("");
    expect(cn(null)).toBe("");
    expect(cn(undefined)).toBe("");
  });
});