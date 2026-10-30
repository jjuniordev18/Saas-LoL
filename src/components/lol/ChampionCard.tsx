"use client";

// ============================================================
// Topo do Rift — Card de campeão
// ============================================================
import * as React from "react";
import { championImageUrl } from "@/lib/lol";
import type { Champion } from "@/lib/lol/data";
import { cn } from "@/lib/utils";
import { ClassBadge, DifficultyBadge, TierBadge } from "./pieces";
import { FavoriteButton } from "./FavoriteButton";

export function ChampionAvatar({
  champion,
  className,
  size = 96,
}: {
  champion: Champion;
  className?: string;
  size?: number;
}) {
  const [failed, setFailed] = React.useState(false);
  const initials = champion.name.slice(0, 2).toUpperCase();

  return (
    <div
      className={cn(
        "relative shrink-0 overflow-hidden rounded-md border-2",
        className
      )}
      style={{ width: size, height: size, borderColor: `${champion.color}80` }}
    >
      {failed ? (
        <div
          className="flex h-full w-full items-center justify-center font-display font-bold text-white"
          style={{ background: `linear-gradient(160deg, ${champion.color}, var(--hex-navy))` }}
          aria-label={champion.name}
          role="img"
        >
          <span style={{ fontSize: size * 0.3 }}>{initials}</span>
        </div>
      ) : (
        <img
          src={championImageUrl(champion.image)}
          alt={`Retrato de ${champion.name}`}
          width={size}
          height={size}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
        />
      )}
    </div>
  );
}

export function ChampionCard({
  champion,
  onSelect,
}: {
  champion: Champion;
  onSelect: (champion: Champion) => void;
}) {
  return (
    // Envoltório: o coração fica FORA do <button> do card (HTML não permite
    // botão aninhado) e os dois são posicionados juntos.
    <div className="group/card relative h-full animate-fade-in-up">
      <div className="absolute -left-2 -top-2 z-10">
        <FavoriteButton
          championId={champion.id}
          championName={champion.name}
          iconClassName="h-3.5 w-3.5"
          className="p-1.5"
        />
      </div>

      <button
        type="button"
        onClick={() => onSelect(champion)}
        aria-label={`Ver build de ${champion.name}`}
        className="card-hover-lift card-shine group flex h-full w-full flex-col items-center gap-3 rounded-lg border border-border bg-card p-4 text-center focus-visible:outline-2 focus-visible:outline-gold"
      >
        <div className="relative">
          <ChampionAvatar
            champion={champion}
            size={88}
            className="transition-all duration-300 ease-out group-hover:scale-110 group-hover:-rotate-2"
          />
          {/* Halo dourado no hover */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 rounded-full opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-70"
            style={{ background: `radial-gradient(circle, ${champion.color}55, transparent 70%)` }}
          />
          <div className="absolute -right-2 -top-2 transition-transform duration-300 group-hover:scale-110">
            <TierBadge tier={champion.tier} />
          </div>
        </div>

        <div className="space-y-1">
          <h3 className="font-display text-base font-bold leading-tight text-gold-bright transition-colors group-hover:text-gold">
            {champion.name}
          </h3>
          <p className="text-xs text-muted-foreground">{champion.playstyle}</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-1.5">
          {champion.classes.map((c) => (
            <ClassBadge key={c} classe={c} />
          ))}
        </div>

        <DifficultyBadge level={champion.difficulty} />
      </button>
    </div>
  );
}
