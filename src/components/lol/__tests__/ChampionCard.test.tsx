// ============================================================
// Testes de componentes para ChampionCard.tsx
// Testes de renderização e interação usando React Testing Library
// ============================================================
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { ChampionCard, ChampionAvatar } from "../ChampionCard";
import type { Champion } from "@/lib/lol/data";

const mockChampion: Champion = {
  id: "darius",
  name: "Darius",
  title: "Lords Global",
  classes: ["lutador"],
  difficulty: 1,
  tier: "S",
  image: "Darius",
  color: "#993333",
  playstyle: "Dano AD e sustentação contínua",
  summary: "Campeão de linha única versátil",
  strengths: ["Alta consistência", "Sustentação", "Controle de onda"],
  weaknesses: ["Movimento lento", "Vulnerável a dano mágico"],
  startItems: [{ id: "dorans-blade", note: "Item inicial" }],
  boots: [{ id: "berserker-greaves" }],
  coreItems: [{ id: "black-cleaver" }, { id: "steraks-gage" }],
  situationalItems: [{ id: "death-dance" }],
  runes: {
    primaryTree: "precision",
    keystone: "conqueror",
    primary: ["conqueror", "presence-of-mind", "legend-alacrity"],
    secondaryTree: "resolve",
    secondary: ["conditioning", "unflinching"],
    shards: ["attackSpeed", "adaptiveForce", "health"],
    explanation: "Build padrão para fase de rota",
  },
  altRunesNote: "Contra poke, troque por Fleet Footwork",
  spells: [
    { id: "flash", note: "Escapar e reposicionamento" },
    { id: "ignite", note: "Kill pressure na rota" },
  ],
  skillPriority: ["Q", "W", "E"],
  abilities: [
    { key: "Q", name: "Decimate", desc: "Ataque principal" },
    { key: "W", name: "Hemotap", desc: "Passiva de sustentação" },
    { key: "E", name: "Crippling Strike", desc: "Desaceleração" },
    { key: "R", name: "Noxian Guillotine", desc: "Ultimate de alta dano" },
  ],
  comboTips: ["Q > W > Q > E"],
  tips: {
    early: ["Use Q para last hit"],
    mid: ["Stack o Hemotap com W"],
    late: ["Ultimate em teamfight"],
  },
  strongAgainst: [{ champion: "Garen", note: "Vantagem clara" }],
  weakAgainst: [{ champion: "Teemo", note: "Poke intenso" }],
  counterTips: ["Buy QSS contra crowd control"],
  altBuilds: [],
};

// Mock para a função championImageUrl
vi.mock("@/lib/lol", () => ({
  championImageUrl: (image: string) => `https://test.cdn/${image}.png`,
  getTierStats: () => ({
    rank: 1,
    championId: "darius",
    name: "Darius",
    tier: "S",
    winRate: 52.2,
    wrChange: 0.3,
    banRate: 1.0,
    pickRate: 2.5,
    matches: 50000,
  }),
  CHAMPIONS: [],
}));

describe("ChampionCard", () => {
  const mockOnSelect = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renderiza o nome do campeão", () => {
    render(<ChampionCard champion={mockChampion} onSelect={mockOnSelect} />);
    expect(screen.getByText("Darius")).toBeInTheDocument();
  });

  it("renderiza o playstyle do campeão", () => {
    render(<ChampionCard champion={mockChampion} onSelect={mockOnSelect} />);
    expect(screen.getByText("Dano AD e sustentação contínua")).toBeInTheDocument();
  });

  it("exibe o tier badge", () => {
    render(<ChampionCard champion={mockChampion} onSelect={mockOnSelect} />);
    expect(screen.getByText("S")).toBeInTheDocument();
  });

  it("renderiza badges de classe e dificuldade", () => {
    render(<ChampionCard champion={mockChampion} onSelect={mockOnSelect} />);
    expect(screen.getByText("Lutador")).toBeInTheDocument();
    expect(screen.getByText("Fácil")).toBeInTheDocument();
  });

  it("chama onSelect ao clicar", () => {
    render(<ChampionCard champion={mockChampion} onSelect={mockOnSelect} />);
    const button = screen.getByRole("button", { name: /ver build de darius/i });
    fireEvent.click(button);
    expect(mockOnSelect).toHaveBeenCalledWith(mockChampion);
  });

  it("tem aria-label acessível", () => {
    render(<ChampionCard champion={mockChampion} onSelect={mockOnSelect} />);
    const button = screen.getByRole("button", { name: /ver build de darius/i });
    expect(button).toHaveAttribute("aria-label", "Ver build de Darius");
  });
});

describe("ChampionAvatar", () => {
  it("exibe a imagem do campeão", () => {
    render(<ChampionAvatar champion={mockChampion} />);
    const img = screen.getByAltText("Retrato de Darius");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "https://test.cdn/Darius.png");
  });

  it("aceita className customizado", () => {
    const { container } = render(
      <ChampionAvatar champion={mockChampion} className="w-64 h-64" />
    );
    expect(container.firstChild).toHaveClass("w-64", "h-64");
  });

  it("permite tamanho customizado", () => {
    const { container } = render(
      <ChampionAvatar champion={mockChampion} size={128} />
    );
    expect(container.firstChild).toHaveStyle({ width: "128px", height: "128px" });
  });
});