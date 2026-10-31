"use client";

// ============================================================
// Topo do Rift — Tier list da rota do topo (estatísticas públicas)
// Tabela com rank, tier, taxa de vitória, variação do patch,
// ban/pick rate e partidas — os 12 melhores do topo (Esmeralda+).
// ============================================================
import * as React from "react";
import {
  TrendingUp,
  TrendingDown,
  Minus,
  ExternalLink,
  ShieldBan,
  Swords,
  Users,
  BarChart3,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TIER_STATS_LIST, STATS_SOURCE, TIER_META, PATCH_VERSION } from "@/lib/lol/data";
import type { Champion, TierStatsEntry } from "@/lib/lol/data";
import { CHAMPIONS } from "@/lib/lol";
import { cn } from "@/lib/utils";
import { ChampionAvatar } from "./ChampionCard";
import { TierBadge } from "./pieces";

// barras de taxa: escala visual de 49% a 53%
const wrBar = (wr: number) => Math.min(100, Math.max(4, ((wr - 49) / 4) * 100));
const banBar = (ban: number) => Math.min(100, Math.max(4, (ban / 12) * 100));

function DeltaCell({ value }: { value: number }) {
  const up = value > 0;
  const flat = value === 0;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 text-xs font-bold tabular-nums",
        flat ? "text-muted-foreground" : up ? "text-teal-300" : "text-rose-300"
      )}
      aria-label={`Variação de vitória: ${up ? "mais" : flat ? "estável" : "menos"} ${Math.abs(value).toFixed(1)} ponto${Math.abs(value) === 1 ? "" : "s"}`}
    >
      {flat ? (
        <Minus className="h-3 w-3" aria-hidden="true" />
      ) : up ? (
        <TrendingUp className="h-3.5 w-3.5" aria-hidden="true" />
      ) : (
        <TrendingDown className="h-3.5 w-3.5" aria-hidden="true" />
      )}
      {flat ? "0.0%" : `${up ? "+" : "−"}${Math.abs(value).toFixed(1)}%`}
    </span>
  );
}

function RateBar({
  value,
  label,
  color,
  width,
}: {
  value: number;
  label: string;
  color: string;
  width: number;
}) {
  return (
    <div className="min-w-24">
      <p className="text-xs font-semibold tabular-nums text-foreground/90">{label}</p>
      <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-muted" aria-hidden="true">
        <div
          className="h-full rounded-full transition-all"
          style={{ width: `${width}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
}

export function TierList({
  onSelectDetail,
}: {
  onSelectDetail: (c: Champion) => void;
}) {
  const byId = React.useMemo(
    () => new Map(CHAMPIONS.map((c) => [c.id, c])),
    []
  );

  return (
    <div className="space-y-4">
      {/* Fonte dos dados */}
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 rounded-lg border border-frame/40 bg-card/60 px-4 py-2.5 text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5 font-semibold text-gold">
          <BarChart3 className="h-3.5 w-3.5" aria-hidden="true" />
          Win rates públicos · {STATS_SOURCE.elo} · {STATS_SOURCE.region}
        </span>
        <span>· Patch {PATCH_VERSION}</span>
        <span className="hidden sm:inline">· {STATS_SOURCE.updatedLabel}</span>
        <span className="ml-auto flex flex-wrap items-center gap-1.5">
          <span className="hidden md:inline">Compare em:</span>
          {STATS_SOURCE.partners.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-2.5 py-1 font-semibold text-gold transition-colors hover:border-gold/60 hover:text-gold-bright focus-visible:outline-2 focus-visible:outline-gold"
            >
              {p.name}
              <ExternalLink className="h-3 w-3" aria-hidden="true" />
            </a>
          ))}
        </span>
      </div>

      <div className="gold-scrollbar overflow-x-auto rounded-lg border border-border">
        <Table className="min-w-[640px]">
          <TableHeader>
            <TableRow className="border-border bg-card/80 hover:bg-card/80">
              <TableHead className="w-12 text-center text-[11px] font-bold uppercase tracking-wide text-muted-foreground">#</TableHead>
              <TableHead className="text-[11px] font-bold uppercase tracking-wide text-muted-foreground">Campeão</TableHead>
              <TableHead className="w-16 text-center text-[11px] font-bold uppercase tracking-wide text-muted-foreground">Tier</TableHead>
              <TableHead className="min-w-36 text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <Swords className="h-3 w-3 text-gold" aria-hidden="true" />
                  Taxa de vitória
                </span>
              </TableHead>
              <TableHead className="w-24 text-[11px] font-bold uppercase tracking-wide text-muted-foreground">Variação</TableHead>
              <TableHead className="hidden min-w-28 md:table-cell text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <ShieldBan className="h-3 w-3 text-gold" aria-hidden="true" />
                  Ban rate
                </span>
              </TableHead>
              <TableHead className="hidden w-20 lg:table-cell text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <Users className="h-3 w-3 text-gold" aria-hidden="true" />
                  Pick
                </span>
              </TableHead>
              <TableHead className="hidden w-24 text-right lg:table-cell text-[11px] font-bold uppercase tracking-wide text-muted-foreground">Partidas</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {TIER_STATS_LIST.map((entry: TierStatsEntry) => {
              const champ = byId.get(entry.championId);
              const tierColor = TIER_META[entry.tier].color;
              return (
                <TableRow
                  key={entry.championId}
                  onClick={() => champ && onSelectDetail(champ)}
                  tabIndex={0}
                  role="button"
                  aria-label={`Ver build de ${entry.name} — ${entry.winRate}% de vitória, tier ${entry.tier}`}
                  onKeyDown={(e) => {
                    if ((e.key === "Enter" || e.key === " ") && champ) {
                      e.preventDefault();
                      onSelectDetail(champ);
                    }
                  }}
                  className="animate-fade-in-up cursor-pointer border-border transition-colors hover:bg-gold/5 focus-visible:outline-2 focus-visible:outline-gold"
                >
                  <TableCell className="text-center font-display text-sm font-black text-muted-foreground">
                    {entry.rank}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      {champ ? (
                        <ChampionAvatar champion={champ} size={40} />
                      ) : (
                        <span className="h-10 w-10 rounded-md border border-border bg-muted" aria-hidden="true" />
                      )}
                      <div className="min-w-0">
                        <p className="font-display text-sm font-bold text-gold-bright">
                          {entry.name}
                        </p>
                        {champ && (
                          <p className="truncate text-[11px] text-muted-foreground">
                            {champ.playstyle}
                          </p>
                        )}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <TierBadge tier={entry.tier} />
                  </TableCell>
                  <TableCell>
                    <RateBar
                      value={entry.winRate}
                      label={`${entry.winRate.toFixed(1)}%`}
                      color={tierColor}
                      width={wrBar(entry.winRate)}
                    />
                  </TableCell>
                  <TableCell>
                    <DeltaCell value={entry.wrChange} />
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    <RateBar
                      value={entry.banRate}
                      label={`${entry.banRate.toFixed(1)}%`}
                      color="#C8324B"
                      width={banBar(entry.banRate)}
                    />
                  </TableCell>
                  <TableCell className="hidden lg:table-cell text-xs font-semibold tabular-nums text-foreground/90">
                    {entry.pickRate.toFixed(1)}%
                  </TableCell>
                  <TableCell className="hidden lg:table-cell text-right text-xs tabular-nums text-muted-foreground">
                    {entry.matches.toLocaleString("pt-BR")}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>

      <p className="text-xs leading-relaxed text-muted-foreground">
        Clique em qualquer linha para abrir a build completa do campeão. Win
        rate, ban e pick rate são da rota <strong className="text-gold">Top</strong> em
        partidas ranqueadas {STATS_SOURCE.elo.toLowerCase()}, consolidados de sites públicos e
        gratuitos de analytics — a fonte oficial de balanceamento continua
        sendo a Riot Games.
      </p>
    </div>
  );
}
