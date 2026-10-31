"use client";

// ============================================================
// Topo do Rift — Matchup do dia
// Escolhe, de forma determinística pela data (UTC), um confronto
// de topo entre campeões do guia: mostro quem leva vantagem,
// por quê e o plano de jogo. Muda automaticamente a cada dia.
// ============================================================
import * as React from "react";
import {
  CalendarDays,
  Swords,
  Lightbulb,
  ShieldAlert,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { TIER_STATS_LIST, getTierStats, PATCH_VERSION } from "@/lib/lol/data";
import type { Champion, Matchup } from "@/lib/lol/data";
import { CHAMPIONS, getChampionById } from "@/lib/lol";
import { cn } from "@/lib/utils";
import { ChampionAvatar } from "./ChampionCard";
import { TierBadge } from "./pieces";

// ------------------------------------------------------------
// Seleção determinística do confronto
// ------------------------------------------------------------
function daySeed(): number {
  const now = new Date();
  const utc = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
  return Math.floor(utc / 86_400_000);
}

interface DailyMatchup {
  pick: Champion;
  rival: Champion;
  rivalNote: string;
  kind: "desafiador" | "favoravel";
}

const isResolved = (
  x: { m: Matchup; c: Champion | undefined }
): x is { m: Matchup; c: Champion } => Boolean(x.c);

function resolveDailyMatchup(seed: number): DailyMatchup {
  const byName = new Map(CHAMPIONS.map((c) => [c.name.toLowerCase(), c]));
  for (let i = 0; i < TIER_STATS_LIST.length; i++) {
    const entry = TIER_STATS_LIST[(seed + i) % TIER_STATS_LIST.length];
    const pick = getChampionById(entry.championId);
    if (!pick) continue;

    // Prioridade: matchup desafiador (contra um counter do guia)
    const hard = pick.weakAgainst
      .map((m) => ({ m, c: byName.get(m.champion.toLowerCase()) }))
      .find(isResolved);
    if (hard) {
      return { pick, rival: hard.c, rivalNote: hard.m.note, kind: "desafiador" };
    }

    // Sem counter mapeado? Mostra um confronto favorável
    const easy = pick.strongAgainst
      .map((m) => ({ m, c: byName.get(m.champion.toLowerCase()) }))
      .find(isResolved);
    if (easy) {
      return { pick, rival: easy.c, rivalNote: easy.m.note, kind: "favoravel" };
    }
  }
  // Fallback defensivo (nunca deve rolar — todo campeão tem matchups)
  const pick = CHAMPIONS[0];
  const rival = CHAMPIONS[1 % CHAMPIONS.length];
  return {
    pick,
    rival,
    rivalNote: pick.strongAgainst[0]?.note ?? pick.weakAgainst[0]?.note ?? "",
    kind: "favoravel",
  };
}

function formatDateLabel(): string {
  const label = new Intl.DateTimeFormat("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date());
  return label.charAt(0).toUpperCase() + label.slice(1);
}

// ------------------------------------------------------------
// Componente
// ------------------------------------------------------------
export function MatchupOfDay({
  onSelectDetail,
}: {
  onSelectDetail: (c: Champion) => void;
}) {
  const seed = React.useMemo(daySeed, []);
  const matchup = React.useMemo(() => resolveDailyMatchup(seed), [seed]);
  const dateLabel = React.useMemo(formatDateLabel, []);
  const { pick, rival, rivalNote, kind } = matchup;
  const desafiador = kind === "desafiador";

  const pickWr = getTierStats(pick.id)?.winRate;
  const rivalWr = getTierStats(rival.id)?.winRate;

  const plano = desafiador
    ? pick.counterTips.slice(0, 3)
    : [rivalNote, pick.comboTips[0], pick.strengths[0]].filter(
        (t): t is string => Boolean(t)
      );

  return (
    <div
      className={cn(
        "card-shine relative overflow-hidden rounded-lg border bg-card/60 p-5 sm:p-6",
        desafiador ? "border-rose-900/40" : "border-emerald-900/40"
      )}
      aria-label={`Matchup do dia: ${pick.name} contra ${rival.name}`}
    >
      {/* brilho de fundo */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background: desafiador
            ? "radial-gradient(ellipse 55% 65% at 50% 0%, color-mix(in srgb, #C8324B 10%, transparent), transparent 70%)"
            : "radial-gradient(ellipse 55% 65% at 50% 0%, color-mix(in srgb, #0AC8B9 10%, transparent), transparent 70%)",
        }}
      />

      {/* Cabeçalho: badge + data */}
      <div className="relative flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/50 bg-gold/10 px-3 py-1 text-xs font-bold text-gold">
          <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
          Matchup do dia
        </span>
        <span className="text-xs text-muted-foreground">{dateLabel}</span>
        <span className="ml-auto text-[11px] text-muted-foreground">
          Patch {PATCH_VERSION}
        </span>
      </div>

      {/* Confronto: pick VS rival */}
      <div className="relative mt-6 flex items-center justify-center gap-3 sm:gap-8">
        {/* Seu pick */}
        <div className="flex min-w-0 flex-col items-center gap-1.5 text-center">
          <div className="rounded-xl border-2 border-gold/60 shadow-[0_0_18px_color-mix(in_srgb,var(--gold)_25%,transparent)]">
            <ChampionAvatar champion={pick} size={72} />
          </div>
          <p className="font-display text-sm font-black text-gold-bright sm:text-base">
            {pick.name}
          </p>
          <div className="flex items-center gap-1.5">
            <TierBadge tier={pick.tier} />
            {pickWr !== undefined && (
              <span className="text-[11px] font-semibold tabular-nums text-muted-foreground">
                {pickWr.toFixed(1)}% WR
              </span>
            )}
          </div>
        </div>

        {/* VS */}
        <div className="flex shrink-0 flex-col items-center" aria-hidden="true">
          <Swords className="h-6 w-6 text-gold" />
          <span className="font-display text-xl font-black text-gold-gradient sm:text-3xl">
            VS
          </span>
        </div>

        {/* Rival */}
        <div className="flex min-w-0 flex-col items-center gap-1.5 text-center">
          <div
            className={cn(
              "rounded-xl border-2",
              desafiador
                ? "border-rose-500/50 shadow-[0_0_18px_color-mix(in_srgb,#C8324B_25%,transparent)]"
                : "border-emerald-500/50 shadow-[0_0_18px_color-mix(in_srgb,#0AC8B9_25%,transparent)]"
            )}
          >
            <ChampionAvatar champion={rival} size={72} />
          </div>
          <p className="font-display text-sm font-black text-gold-bright sm:text-base">
            {rival.name}
          </p>
          <div className="flex items-center gap-1.5">
            <TierBadge tier={rival.tier} />
            {rivalWr !== undefined && (
              <span className="text-[11px] font-semibold tabular-nums text-muted-foreground">
                {rivalWr.toFixed(1)}% WR
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Veredito */}
      <div
        className={cn(
          "relative mt-6 rounded-md border p-3.5",
          desafiador
            ? "border-rose-900/50 bg-rose-950/20"
            : "border-emerald-900/50 bg-emerald-950/20"
        )}
      >
        <p className="flex items-center gap-2 text-sm font-bold">
          {desafiador ? (
            <>
              <ShieldAlert className="h-4 w-4 text-rose-300" aria-hidden="true" />
              <span className="text-rose-300">
                Confronto difícil — {rival.name} leva vantagem
              </span>
            </>
          ) : (
            <>
              <ShieldCheck className="h-4 w-4 text-emerald-300" aria-hidden="true" />
              <span className="text-emerald-300">
                Confronto favorável — {pick.name} domina
              </span>
            </>
          )}
        </p>
        <p className="mt-1 text-sm leading-relaxed text-foreground/85">
          {rivalNote}
        </p>
      </div>

      {/* Plano de jogo */}
      <div className="relative mt-4">
        <p className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-gold">
          <Lightbulb className="h-3.5 w-3.5" aria-hidden="true" />
          Plano de jogo de hoje
        </p>
        <ul className="space-y-1.5">
          {plano.map((tip, i) => (
            <li
              key={i}
              className="flex gap-2 rounded-md border border-border/60 bg-muted/40 p-2.5 text-sm leading-relaxed text-foreground/90"
            >
              <span
                className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 font-display text-[11px] font-black text-gold"
                aria-hidden="true"
              >
                {i + 1}
              </span>
              {tip}
            </li>
          ))}
        </ul>
      </div>

      {/* Ações */}
      <div className="relative mt-5 flex flex-wrap items-center gap-2">
        <Button
          size="sm"
          onClick={() => onSelectDetail(pick)}
          className="gap-1.5 border border-gold/60 bg-gradient-to-b from-gold to-gold-dark font-display font-bold text-black hover:from-gold-bright hover:to-gold"
        >
          Build do {pick.name}
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={() => onSelectDetail(rival)}
          className="border-border text-foreground hover:border-gold/50 hover:text-gold-bright"
        >
          Build do {rival.name}
        </Button>
        <span className="ml-auto text-[11px] text-muted-foreground">
          O confronto muda automaticamente a cada dia
        </span>
      </div>
    </div>
  );
}
