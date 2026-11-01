// ============================================================
// Testes para AntigravityNotification.tsx
// ============================================================
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, cleanup, act } from "@testing-library/react";
import React from "react";
import { AntigravityNotification } from "../AntigravityNotification";

describe("AntigravityNotification", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    cleanup();
  });

  afterEach(() => {
    vi.useRealTimers();
    cleanup();
  });

  it("renderiza a notificação com o título correto", () => {
    render(<AntigravityNotification />);
    const titles = screen.getAllByText("Antigravity está funcionando");
    expect(titles.length).toBeGreaterThan(0);
  });

  it("mostra o botão de fechar (X)", () => {
    render(<AntigravityNotification />);
    const closeButton = screen.getByRole("button", { name: "Fechar notificação" });
    expect(closeButton).toBeInTheDocument();
  });

  it("fecha a notificação ao clicar no botão de fechar", () => {
    render(<AntigravityNotification />);
    const closeButton = screen.getByRole("button", { name: "Fechar notificação" });
    fireEvent.click(closeButton);
    expect(screen.queryAllByText("Antigravity está funcionando").length).toBe(0);
  });

  it("fecha automaticamente após o delay configurado", () => {
    render(<AntigravityNotification />);
    
    // Ainda visível - usa getAllByText para múltiplos elementos
    expect(screen.queryAllByText("Antigravity está funcionando").length).toBeGreaterThan(0);
    
    // Avança o tempo em 8 segundos (8000ms) dentro de act()
    act(() => {
      vi.advanceTimersByTime(8000);
    });
    
    // Agora deve estar fechado
    expect(screen.queryAllByText("Antigravity está funcionando").length).toBe(0);
  });

  it("tem acesso adequado para leitores de tela", () => {
    render(<AntigravityNotification />);
    const alerts = screen.getAllByRole("alert");
    expect(alerts.length).toBeGreaterThan(0);
  });

  it("mostra a descrição com informações sobre a referência antigravity", () => {
    render(<AntigravityNotification />);
    const descriptions = screen.getAllByText(/Referência Python/);
    expect(descriptions.length).toBeGreaterThan(0);
  });

  it("não renderiza quando visível é false após timeout", () => {
    render(<AntigravityNotification />);
    
    // Avança o tempo além do delay dentro de act()
    act(() => {
      vi.advanceTimersByTime(10000);
    });
    
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });
});