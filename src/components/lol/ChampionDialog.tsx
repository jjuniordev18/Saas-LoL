"use client";

// ============================================================
// Topo do Rift — Diálogo de detalhe do campeão
// ============================================================
import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Coins, Sparkles, Layers, GitBranch, Wand2, ListOrdered, Lightbulb, Swords } from "lucide-react";
import type { Champion } from "@/lib/lol/data";
import { cn } from "@/lib/utils";
import { ChampionDetail } from "./ChampionDetail";
import { FavoriteButton } from "./FavoriteButton";

const NAV = [
  { id: "build", label: "Build", icon: Coins },
  { id: "runas", label: "Runas", icon: GitBranch },
  { id: "feiticos", label: "Feitiços", icon: Wand2 },
  { id: "habilidades", label: "Habilidades", icon: ListOrdered },
  { id: "dicas", label: "Dicas", icon: Lightbulb },
  { id: "matchups", label: "Matchups", icon: Swords },
  { id: "alternativas", label: "Alternativas", icon: Layers },
] as const;

export function ChampionDialog({
  champion,
  open,
  onOpenChange,
}: {
  champion: Champion | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  if (!champion) return null;

  const scrollTo = (id: string) => {
    const el = document.getElementById(`champ-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="gold-scrollbar max-h-[92dvh] w-full max-w-3xl overflow-y-auto border-frame/60 bg-hex-navy p-0 sm:max-w-3xl md:max-w-4xl"
        aria-describedby={undefined}
      >
        <DialogTitle className="sr-only">
          Build de {champion.name}
        </DialogTitle>
        <DialogDescription className="sr-only">
          Build recomendada, runas, feitiços, ordem de habilidades, dicas e matchups de {champion.name} na rota superior.
        </DialogDescription>

        {/* Barra de navegação interna */}
        <nav
          aria-label="Seções da build"
          className="gold-scrollbar sticky top-0 z-20 flex min-w-0 items-center gap-1 overflow-x-auto border-b border-frame/40 bg-hex-navy/95 px-3 py-2 backdrop-blur supports-[backdrop-filter]:bg-hex-navy/85"
        >
          {NAV.map((n) => (
            <button
              key={n.id}
              type="button"
              onClick={() => scrollTo(n.id)}
              className="flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-gold-bright focus-visible:outline-2 focus-visible:outline-gold"
            >
              <n.icon className="h-3.5 w-3.5" aria-hidden="true" />
              {n.label}
            </button>
          ))}
          <span className="ml-auto flex shrink-0 items-center pl-2">
            <FavoriteButton championId={champion.id} championName={champion.name} />
          </span>
        </nav>

        <div className="min-w-0 flex-1 p-4 sm:p-6">
          <ChampionDetail champion={champion} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
