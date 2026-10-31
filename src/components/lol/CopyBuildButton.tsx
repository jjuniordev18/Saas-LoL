"use client";

// ============================================================
// Topo do Rift — Botão "Copiar build"
// Exporta runas + feitiços + habilidades + itens como texto
// formatado para colar no Discord / chat do time.
// variant="chip"  → botão destacado dentro da seção de build
// variant="nav"   → versão compacta para a barra do diálogo
// ============================================================
import * as React from "react";
import { ClipboardCopy, Check } from "lucide-react";
import type { Champion } from "@/lib/lol/data";
import { RUNES, RUNE_TREES, SPELLS, ITEMS } from "@/lib/lol/data";
import { ITEM_PT } from "@/lib/lol/ddragon";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

export function buildExportText(champion: Champion): string {
  const itemName = (id: string) => ITEM_PT[id] ?? ITEMS[id]?.name ?? id;
  const primaryTree = RUNE_TREES[champion.runes.primaryTree];
  const secondaryTree = RUNE_TREES[champion.runes.secondaryTree];
  const lines = [
    `${champion.name} — build de topo (Topo do Rift)`,
    ``,
    `Runas: ${RUNES[champion.runes.keystone]?.name ?? champion.runes.keystone} (${primaryTree.name}) + ${secondaryTree.name}`,
    `  • ${champion.runes.primary.map((r) => RUNES[r]?.name ?? r).join(", ")}`,
    `  • ${champion.runes.secondary.map((r) => RUNES[r]?.name ?? r).join(", ")}`,
    `  • Shards: ${champion.runes.shards.join(", ")}`,
    `Feitiços: ${champion.spells.map((s) => SPELLS[s.id]?.name ?? s.id).join(" + ")}`,
    `Ordem de habilidades: ${champion.skillPriority.join(" > ")} (R nos níveis 6/11/16)`,
    `Itens core:`,
    ...champion.coreItems.map((r, i) => `  ${i + 1}. ${itemName(r.id)}${r.note ? ` — ${r.note}` : ""}`),
    `Iniciais: ${champion.startItems.map((r) => itemName(r.id)).join(", ")}`,
    `Botas: ${champion.boots.map((r) => itemName(r.id)).join(", ")}`,
    `Situacionais: ${champion.situationalItems.map((r) => itemName(r.id)).join(", ")}`,
  ];
  return lines.join("\n");
}

export function CopyBuildButton({
  champion,
  variant = "chip",
  className,
}: {
  champion: Champion;
  variant?: "chip" | "nav";
  className?: string;
}) {
  const [copied, setCopied] = React.useState(false);
  const { toast } = useToast();

  const copyBuild = React.useCallback(async () => {
    try {
      await navigator.clipboard.writeText(buildExportText(champion));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
      toast({
        title: "Build copiada!",
        description: `A build de ${champion.name} está na área de transferência — cole no Discord ou no chat do time.`,
      });
    } catch {
      toast({
        title: "Não foi possível copiar",
        description: "Seu navegador bloqueou o acesso à área de transferência.",
        variant: "destructive",
      });
    }
  }, [champion, toast]);

  return (
    <button
      type="button"
      onClick={copyBuild}
      aria-label={`Copiar build completa de ${champion.name} para a área de transferência`}
      className={
        variant === "chip"
          ? cn(
              "inline-flex items-center gap-2 rounded-md border border-gold/40 bg-gold/10 px-3 py-1.5 text-xs font-bold text-gold transition-colors hover:bg-gold/20 hover:text-gold-bright focus-visible:outline-2 focus-visible:outline-gold",
              className
            )
          : cn(
              "inline-flex items-center gap-1.5 rounded-md px-2 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-gold-bright focus-visible:outline-2 focus-visible:outline-gold",
              className
            )
      }
    >
      {copied ? (
        <Check className={cn("h-3.5 w-3.5", variant === "chip" ? "text-emerald-400" : "text-emerald-400")} aria-hidden="true" />
      ) : (
        <ClipboardCopy className="h-3.5 w-3.5" aria-hidden="true" />
      )}
      {variant === "chip" ? (copied ? "Copiada!" : "Copiar build (runas + itens)") : copied ? "Copiada!" : "Copiar build"}
    </button>
  );
}
