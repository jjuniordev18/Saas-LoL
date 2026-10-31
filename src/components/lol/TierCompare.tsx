"use client";

// ============================================================
// Topo do Rift — Comparação de tier lists (patch atual vs anterior)
// Mostra movimento de rank, mudança de tier e delta de win rate
// entre a patch 16.21 e a 16.20, com destaques da atualização.
// ============================================================
import * as React from "react";
import {
  TrendingUp,
  TrendingDown,
  Minus,
  ArrowUp,
  ArrowDown,
  Sparkles,
  Scale,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  TIER_STATS_LIST,
  PREV_TIER_STATS_LIST,
  PREV_PATCH_VERSION,
  PATCH_VERSION,
  TIER_META,
} from "@/lib/lol/data";
import type { Champion, Tier, TierStatsEntry } from "@/lib/lol/data";
import { CHAMPIONS } from "@/lib/lol";
import { cn } from "@/lib/utils";
import { ChampionAvatar } from "./ChampionCard";
import { TierBadge } from "./pieces";

interface CompareRow {
  current: TierStatsEntry;
  prevRank: number;
  prevTier: Tier;
  prevWinRate: number;
  rankDelta: number; // positivo = subiu
  wrDelta: number; // positivo = melhorou
  tierChange: "up" | "down" | "same";
}

const byChampionId = new Map(CHAMPIONS.map((c) => [c.id, c]));

/** Monta as linhas de comparação ordenadas pelo rank atual */
function buildRows(): CompareRow[] {
  const prevById = new Map(PREV_TIER_STATS_LIST.map((p) => [p.championId, p]));
  return TIER_STATS_LIST.map((current) => {
    const prev = prevById.get(current.championId);
    const prevRank = prev?.rank ?? current.rank;
    const prevTier = prev?.tier ?? current.tier;
    const prevWinRate = prev?.winRate ?? current.winRate;
    const tierChange: CompareRow["tierChange"] =
      prevTier === current.tier
        ? "same"
        : TIER_ORDER[current.tier] > TIER_ORDER[prevTier]
          ? "up"
          : "down";
    return {
      current,
      prevRank,
      prevTier,
      prevWinRate,
      rankDelta: prevRank - current.rank, // subiu se rank atual < anterior
      wrDelta: current.winRate - prevWinRate,
      tierChange,
    };
  }).sort((a, b) => a.current.rank - b.current.rank);
}

const TIER_ORDER: Record<Tier, number> = { B: 0, A: 1, S: 2 };

function RankMovement({ delta }: { delta: number }) {
  const up = delta > 0;
  const flat = delta === 0;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-bold tabular-nums",
        flat
          ? "border-border bg-muted/50 text-muted-foreground"
          : up
            ? "border-teal-700/50 bg-teal-950/40 text-teal-300"
            : "border-rose-900/50 bg-rose-950/40 text-rose-300"
      )}
      aria-label={flat ? "Posição estável" : up ? `Subiu ${delta} posição${delta === 1 ? "" : "es"}` : `Caiu ${Math.abs(delta)} posição${Math.abs(delta) === 1 ? "" : "es"}`}
    >
      {flat ? (
        <Minus className="h-3 w-3" aria-hidden="true" />
      ) : up ? (
        <ArrowUp className="h-3 w-3" aria-hidden="true" />
      ) : (
        <ArrowDown className="h-3 w-3" aria-hidden="true" />
      )}
      {flat ? "0" : `${up ? "" : "−"}${Math.abs(delta)}`}
    </span>
  );
}

function TierTransition({ from, to }: { from: Tier; to: Tier }) {
  const changed = from !== to;
  return (
    <span className="inline-flex items-center gap-1.5">
      <span
        className={cn(
          "inline-flex h-6 min-w-6 items-center justify-center rounded px-1 font-display text-xs font-black",
          changed ? "text-muted-foreground line-through decoration-1" : ""
        )}
        style={changed ? undefined : { color: TIER_META[to].color }}
        aria-hidden={changed}
      >
        {from}
      </span>
      {changed && (
        <>
          <span aria-hidden="true" className="text-[10px] font-bold text-muted-foreground">→</span>
          <TierBadge tier={to} />
        </>
      )}
      {!changed && <TierBadge tier={to} />}
      <span className="sr-only">
        {changed ? `Mudou de tier ${from} para ${to}` : `Permaneceu no tier ${to}`}
      </span>
    </span>
  );
}

function WrDelta({ value }: { value: number }) {
  const up = value > 0;
  const flat = value === 0;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 text-xs font-bold tabular-nums",
        flat ? "text-muted-foreground" : up ? "text-teal-300" : "text-rose-300"
      )}
    >
      {up ? (
        <TrendingUp className="h-3.5 w-3.5" aria-hidden="true" />
      ) : flat ? (
        <Minus className="h-3 w-3" aria-hidden="true" />
      ) : (
        <TrendingDown className="h-3.5 w-3.5" aria-hidden="true" />
      )}
      {flat ? "0.0" : `${up ? "+" : "−"}${Math.abs(value).toFixed(1)}`} p.p.
    </span>
  );
}

export function TierCompare({
  onSelectDetail,
}: {
  onSelectDetail: (c: Champion) => void;
}) {
  const rows = React.useMemo(() => buildRows(), []);

  const tierUps = rows.filter((r) => r.tierChange === "up");
  const tierDowns = rows.filter((r) => r.tierChange === "down");
  const biggestClimb = [...rows].sort((a, b) => b.rankDelta - a.rankDelta)[0];
  const biggestFall = [...rows].sort((a, b) => a.rankDelta - b.rankDelta)[0];
  const champOf = (id: string) => byChampionId.get(id);

  return (
    <div className="space-y-4">
      {/* Destaques da virada de patch */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border border-teal-900/50 bg-teal-950/25 p-3">
          <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide text-teal-300">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Destaques da patch
          </p>
          <p className="mt-1.5 text-sm font-semibold text-foreground">
            {tierUps.length > 0
              ? tierUps.map((r) => r.current.name).join(", ")
              : "Nenhum campeão subiu de tier"}
          </p>
          <p className="text-[11px] text-muted-foreground">subiram para o tier S/A</p>
        </div>
        <div className="rounded-lg border border-rose-900/50 bg-rose-950/25 p-3">
          <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide text-rose-300">
            <TrendingDown className="h-3.5 w-3.5" aria-hidden="true" />
            Perderam espaço
          </p>
          <p className="mt-1.5 text-sm font-semibold text-foreground">
            {tierDowns.length > 0
              ? tierDowns.map((r) => r.current.name).join(", ")
              : "Nenhum campeão caiu de tier"}
          </p>
          <p className="text-[11px] text-muted-foreground">caíram de tier nesta patch</p>
        </div>
        <div className="rounded-lg border border-border bg-card/60 p-3">
          <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide text-gold">
            <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
            Maior salto de rank
          </p>
          <p className="mt-1.5 text-sm font-semibold text-foreground">
            {champOf(biggestClimb.current.championId)?.name ?? biggestClimb.current.name}
          </p>
          <p className="text-[11px] text-muted-foreground">
            {biggestClimb.rankDelta > 0
              ? `subiu ${biggestClimb.rankDelta} posições (#${biggestClimb.prevRank} → #${biggestClimb.current.rank})`
              : "manteve a posição"}
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card/60 p-3">
          <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide text-gold">
            <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" />
            Maior queda de rank
          </p>
          <p className="mt-1.5 text-sm font-semibold text-foreground">
            {champOf(biggestFall.current.championId)?.name ?? biggestFall.current.name}
          </p>
          <p className="text-[11px] text-muted-foreground">
            {biggestFall.rankDelta < 0
              ? `caiu ${Math.abs(biggestFall.rankDelta)} posições (#${biggestFall.prevRank} → #${biggestFall.current.rank})`
              : "manteve a posição"}
          </p>
        </div>
      </div>

      {/* Tabela lado a lado */}
      <div className="gold-scrollbar overflow-x-auto rounded-lg border border-border">
        <Table className="min-w-[680px]">
          <TableHeader>
            <TableRow className="border-border bg-card/80 hover:bg-card/80">
              <TableHead className="w-12 text-center text-[11px] font-bold uppercase tracking-wide text-muted-foreground">#</TableHead>
              <TableHead className="text-[11px] font-bold uppercase tracking-wide text-muted-foreground">Campeão</TableHead>
              <TableHead className="text-center text-[11px] font-bold uppercase tracking-wide text-muted-foreground">Tier</TableHead>
              <TableHead className="text-right text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
                WR {PREV_PATCH_VERSION}
              </TableHead>
              <TableHead className="text-right text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
                WR {PATCH_VERSION}
              </TableHead>
              <TableHead className="text-[11px] font-bold uppercase tracking-wide text-muted-foreground">Δ Win rate</TableHead>
              <TableHead className="text-center text-[11px] font-bold uppercase tracking-wide text-muted-foreground">Movimento</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row) => {
              const champ = champOf(row.current.championId);
              const name = row.current.name;
              return (
                <TableRow
                  key={row.current.championId}
                  onClick={() => champ && onSelectDetail(champ)}
                  tabIndex={0}
                  role="button"
                  aria-label={`${name}: win rate foi de ${row.prevWinRate}% na patch ${PREV_PATCH_VERSION} para ${row.current.winRate}% na ${PATCH_VERSION}`}
                  onKeyDown={(e) => {
                    if ((e.key === "Enter" || e.key === " ") && champ) {
                      e.preventDefault();
                      onSelectDetail(champ);
                    }
                  }}
                  className="animate-fade-in-up cursor-pointer border-border transition-colors hover:bg-gold/5 focus-visible:outline-2 focus-visible:outline-gold"
                >
                  <TableCell className="text-center font-display text-sm font-black text-muted-foreground">
                    {row.current.rank}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      {champ ? (
                        <ChampionAvatar champion={champ} size={36} />
                      ) : (
                        <span className="h-9 w-9 rounded-md border border-border bg-muted" aria-hidden="true" />
                      )}
                      <p className="font-display text-sm font-bold text-gold-bright">{name}</p>
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <TierTransition from={row.prevTier} to={row.current.tier} />
                  </TableCell>
                  <TableCell className="text-right text-sm tabular-nums text-muted-foreground">
                    {row.prevWinRate.toFixed(1)}%
                  </TableCell>
                  <TableCell className="text-right text-sm font-bold tabular-nums text-foreground">
                    {row.current.winRate.toFixed(1)}%
                  </TableCell>
                  <TableCell>
                    <WrDelta value={row.wrDelta} />
                  </TableCell>
                  <TableCell className="text-center">
                    <RankMovement delta={row.rankDelta} />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>

      <p className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
        <Scale className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" aria-hidden="true" />
        <span>
          Comparação entre o snapshot da <strong className="text-gold">patch {PREV_PATCH_VERSION}</strong> e a
          atual ({PATCH_VERSION}) para os 12 melhores da rota superior. Os valores da patch
          anterior são o histórico editorial deste guia — coerentes com a coluna
          &ldquo;Variação&rdquo; da tabela atual. Clique em uma linha para abrir a build.
        </span>
      </p>
    </div>
  );
}
