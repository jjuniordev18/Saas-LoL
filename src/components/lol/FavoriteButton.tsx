"use client";

// ============================================================
// Topo do Rift — Botão de favorito (persistido no navegador)
// ============================================================
import * as React from "react";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { useFavorites } from "@/lib/lol/favorites";

export function FavoriteButton({
  championId,
  championName,
  className,
  iconClassName,
}: {
  championId: string;
  championName: string;
  className?: string;
  iconClassName?: string;
}) {
  const { toggle, isFavorite, loaded } = useFavorites();
  const fav = loaded && isFavorite(championId);

  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        toggle(championId);
      }}
      aria-pressed={fav}
      aria-label={
        fav
          ? `Remover ${championName} dos favoritos`
          : `Adicionar ${championName} aos favoritos`
      }
      className={cn(
        "inline-flex cursor-pointer items-center justify-center rounded-full border bg-hex-navy/85 p-2 backdrop-blur transition-all focus-visible:outline-2 focus-visible:outline-gold active:scale-90 hover:scale-110",
        fav
          ? "border-rose-400/70 text-rose-400 shadow-[0_0_10px_rgba(251,113,133,0.35)]"
          : "border-border text-muted-foreground hover:border-rose-400/60 hover:text-rose-300",
        className
      )}
    >
      <Heart
        className={cn("h-4 w-4", fav && "fill-current", iconClassName)}
        aria-hidden="true"
      />
    </button>
  );
}
