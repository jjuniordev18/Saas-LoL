"use client";

// ============================================================
// Topo do Rift — Comparador de matchups entre dois campeões
// ============================================================
import * as React from "react";
import {
  ChevronsUpDown,
  ArrowLeftRight,
  Swords,
  Trophy,
  Scale,
  Coins,
  GitBranch,
  Wand2,
  ListOrdered,
  Eye,
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { CHAMPIONS, championImageUrl } from "@/lib/lol";
import type { Champion } from "@/lib/lol/data";
import { RUNE_TREES, TIER_META } from "@/lib/lol/data";
import { cn } from "@/lib/utils";
import {
  ClassBadge,
  DifficultyBadge,
  InfoTooltip,
  ItemIcon,
  RuneChip,
  SpellIcon,
  TierBadge,
} from "./pieces";
import { ChampionAvatar } from "./ChampionCard";
import { FavoriteButton } from "./FavoriteButton";

// ------------------------------------------------------------
// Seletor com busca (Popover + Command)
// ------------------------------------------------------------
function ChampionPicker({
  value,
  onChange,
  label,
  accent,
}: {
  value: Champion | null;
  onChange: (id: string | null) => void;
  label: string;
  accent: string;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex flex-col gap-1.5">
      <span
        className="text-xs font-bold uppercase tracking-wide"
        style={{ color: accent }}
      >
        {label}
      </span>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            aria-label={`${label}: escolher campeão`}
            className="h-auto w-full justify-between gap-2 border-border bg-card px-3 py-2.5 text-left hover:border-gold/60"
          >
            {value ? (
              <span className="flex min-w-0 items-center gap-2.5">
                <ChampionAvatar champion={value} size={36} />
                <span className="min-w-0">
                  <span className="block truncate font-display text-sm font-bold text-gold-bright">
                    {value.name}
                  </span>
                  <span className="block truncate text-[11px] text-muted-foreground">
                    {value.playstyle}
                  </span>
                </span>
              </span>
            ) : (
              <span className="py-1 text-sm text-muted-foreground">
                Escolher campeão...
              </span>
            )}
            <ChevronsUpDown className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[min(20rem,80vw)] border-[#785a28]/60 bg-[#0a1428] p-0" align="start">
          <Command filter={fuzzyMatch}>
            <CommandInput placeholder="Buscar campeão..." className="text-foreground" />
            <CommandList className="gold-scrollbar">
              <CommandEmpty>Nenhum campeão encontrado.</CommandEmpty>
              <CommandGroup>
                {CHAMPIONS.map((c) => (
                  <CommandItem
                    key={c.id}
                    value={c.name}
                    onSelect={() => {
                      onChange(c.id === value?.id ? null : c.id);
                      setOpen(false);
                    }}
                    className="cursor-pointer gap-2.5 aria-selected:bg-gold/10 aria-selected:text-gold-bright"
                  >
                    <ChampionAvatar champion={c} size={28} />
                    <span className="flex-1 truncate text-sm">{c.name}</span>
                    <span
                      className="font-display text-[10px] font-black"
                      style={{ color: TIER_META[c.tier].color }}
                    >
                      {c.tier}
                    </span>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}

// ------------------------------------------------------------
// Painel lateral de um campeão
// ------------------------------------------------------------
function CompareSide({
  champion,
  onSelectDetail,
}: {
  champion: Champion;
  onSelectDetail: (c: Champion) => void;
}) {
  const primaryTree = RUNE_TREES[champion.runes.primaryTree];
  return (
    <div className="flex min-w-0 flex-1 flex-col gap-4 rounded-lg border border-border bg-card/70 p-4">
      {/* Cabeçalho */}
      <div className="flex items-start gap-3">
        <ChampionAvatar champion={champion} size={64} className="shrink-0" />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-1.5">
            <h4 className="truncate font-display text-lg font-black text-gold-bright">
              {champion.name}
            </h4>
            <TierBadge tier={champion.tier} />
          </div>
          <p className="truncate text-xs text-muted-foreground">{champion.playstyle}</p>
          <div className="mt-1.5 flex flex-wrap gap-1">
            {champion.classes.map((c) => (
              <ClassBadge key={c} classe={c} />
            ))}
          </div>
        </div>
        <FavoriteButton championId={champion.id} championName={champion.name} />
      </div>

      <DifficultyBadge level={champion.difficulty} />

      {/* Feitiços */}
      <div>
        <p className="mb-1.5 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
          <Wand2 className="h-3 w-3 text-gold" aria-hidden="true" /> Feitiços
        </p>
        <div className="flex gap-2">
          {champion.spells.map((s) => (
            <SpellIcon key={s.id} id={s.id} size={40} />
          ))}
        </div>
      </div>

      {/* Keystone */}
      <div>
        <p className="mb-1.5 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
          <GitBranch className="h-3 w-3 text-gold" aria-hidden="true" /> Keystone · {primaryTree.name}
        </p>
        <RuneChip id={champion.runes.keystone} />
      </div>

      {/* Itens core */}
      <div>
        <p className="mb-1.5 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
          <Coins className="h-3 w-3 text-gold" aria-hidden="true" /> Itens core
        </p>
        <div className="flex flex-wrap gap-2">
          {champion.coreItems.map((ref) => (
            <ItemIcon key={ref.id} id={ref.id} size="sm" />
          ))}
        </div>
      </div>

      {/* Prioridade de skills */}
      <div>
        <p className="mb-1.5 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
          <ListOrdered className="h-3 w-3 text-gold" aria-hidden="true" /> Skills
        </p>
        <p className="text-sm text-foreground/90">
          <strong className="text-gold-bright">{champion.skillPriority[0]}</strong>
          {" > "}
          <strong className="text-gold-bright">{champion.skillPriority[1]}</strong>
          {" > "}
          <strong className="text-gold-bright">{champion.skillPriority[2]}</strong>
        </p>
      </div>

      <Button
        variant="outline"
        size="sm"
        onClick={() => onSelectDetail(champion)}
        className="mt-auto w-full border-gold/40 text-gold hover:bg-gold/10 hover:text-gold-bright"
      >
        <Eye className="mr-1.5 h-3.5 w-3.5" aria-hidden="true" />
        Ver build completa
      </Button>
    </div>
  );
}

// ------------------------------------------------------------
// Veredito do confronto
// ------------------------------------------------------------
type Verdict = {
  winner: "a" | "b" | "empate";
  notes: { from: Champion; text: string; kind: "pro" | "contra" }[];
};

function computeVerdict(a: Champion, b: Champion): Verdict {
  const notes: Verdict["notes"] = [];
  let scoreA = 0;
  let scoreB = 0;

  const aStrong = a.strongAgainst.find((m) => m.champion === b.name);
  const aWeak = a.weakAgainst.find((m) => m.champion === b.name);
  const bStrong = b.strongAgainst.find((m) => m.champion === a.name);
  const bWeak = b.weakAgainst.find((m) => m.champion === a.name);

  if (aStrong) {
    scoreA += 2;
    notes.push({ from: a, text: aStrong.note, kind: "pro" });
  }
  if (bWeak) {
    scoreA += 1;
    notes.push({ from: b, text: bWeak.note, kind: "contra" });
  }
  if (bStrong) {
    scoreB += 2;
    notes.push({ from: b, text: bStrong.note, kind: "pro" });
  }
  if (aWeak) {
    scoreB += 1;
    notes.push({ from: a, text: aWeak.note, kind: "contra" });
  }

  const winner = scoreA > scoreB ? "a" : scoreB > scoreA ? "b" : "empate";
  return { winner, notes };
}

const EXAMPLES: [string, string][] = [
  ["darius", "mordekaiser"],
  ["fiora", "garen"],
  ["ksante", "sett"],
];

// Busca tolerante: ignora acentos, apóstrofos e caixa; aceita subsequência
// (ex.: "kante" encontra "K'Sante", "drmundo" encontra "Dr. Mundo")
function fuzzyMatch(value: string, search: string): number {
  if (!search) return 1;
  const norm = (s: string) =>
    s
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/['’.]/g, "")
      .replace(/\s+/g, "");
  const t = norm(value);
  const q = norm(search);
  if (t.includes(q)) return 1;
  let i = 0;
  for (const ch of t) {
    if (ch === q[i]) i++;
    if (i === q.length) return 1;
  }
  return 0;
}

// ------------------------------------------------------------
// Comparador
// ------------------------------------------------------------
export function Comparator({
  onSelectDetail,
}: {
  onSelectDetail: (c: Champion) => void;
}) {
  const [idA, setIdA] = React.useState<string | null>(null);
  const [idB, setIdB] = React.useState<string | null>(null);

  const champA = React.useMemo(
    () => CHAMPIONS.find((c) => c.id === idA) ?? null,
    [idA]
  );
  const champB = React.useMemo(
    () => CHAMPIONS.find((c) => c.id === idB) ?? null,
    [idB]
  );

  const both = champA && champB;
  const verdict = React.useMemo(
    () => (both ? computeVerdict(champA!, champB!) : null),
    [both, champA, champB]
  );

  const swap = () => {
    setIdA(idB);
    setIdB(idA);
  };

  return (
    <div className="space-y-5">
      {/* Seletores */}
      <div className="flex flex-col items-stretch gap-3 rounded-lg border border-border bg-card/60 p-4 sm:flex-row sm:items-end">
        <div className="min-w-0 flex-1">
          <ChampionPicker value={champA} onChange={setIdA} label="Campeão A" accent="#0AC8B9" />
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={swap}
          disabled={!champA && !champB}
          aria-label="Inverter lados do comparador"
          className="mx-auto h-10 w-10 shrink-0 border-gold/40 text-gold hover:bg-gold/10 sm:mb-0.5"
        >
          <ArrowLeftRight className="h-4 w-4" aria-hidden="true" />
        </Button>
        <div className="min-w-0 flex-1">
          <ChampionPicker value={champB} onChange={setIdB} label="Campeão B" accent="#C8324B" />
        </div>
      </div>

      {/* Exemplos rápidos */}
      {!both && (
        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <span className="text-xs font-bold uppercase tracking-wide">Experimente:</span>
          {EXAMPLES.map(([a, b]) => {
            const ca = CHAMPIONS.find((c) => c.id === a);
            const cb = CHAMPIONS.find((c) => c.id === b);
            if (!ca || !cb) return null;
            return (
              <button
                key={`${a}-${b}`}
                type="button"
                onClick={() => {
                  setIdA(a);
                  setIdB(b);
                }}
                className="cursor-pointer rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground/90 transition-colors hover:border-gold/60 hover:text-gold-bright focus-visible:outline-2 focus-visible:outline-gold"
              >
                {ca.name} <span className="text-gold">vs</span> {cb.name}
              </button>
            );
          })}
        </div>
      )}

      {/* Resultado */}
      {both && champA && champB && verdict ? (
        <div className="space-y-4">
          {/* Veredito */}
          <div
            className={cn(
              "rounded-lg border p-4 sm:p-5",
              verdict.winner === "a" && "border-teal-500/50 bg-teal-950/20",
              verdict.winner === "b" && "border-rose-500/50 bg-rose-950/20",
              verdict.winner === "empate" && "border-gold/40 bg-gold/5"
            )}
          >
            <p className="mb-2 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-muted-foreground">
              {verdict.winner === "empate" ? (
                <Scale className="h-4 w-4 text-gold" aria-hidden="true" />
              ) : (
                <Trophy className="h-4 w-4 text-gold" aria-hidden="true" />
              )}
              Veredito do confronto
            </p>
            <p className="font-display text-xl font-black leading-snug sm:text-2xl">
              {verdict.winner === "a" && (
                <span className="text-teal-300">
                  {champA.name} tem vantagem sobre {champB.name}
                </span>
              )}
              {verdict.winner === "b" && (
                <span className="text-rose-300">
                  {champB.name} tem vantagem sobre {champA.name}
                </span>
              )}
              {verdict.winner === "empate" && (
                <span className="text-gold">
                  {champA.name} vs {champB.name}: confronto equilibrado
                </span>
              )}
            </p>
            {verdict.notes.length > 0 && (
              <ul className="mt-3 space-y-2">
                {verdict.notes.map((n, i) => (
                  <li key={i} className="flex gap-2 text-sm leading-relaxed text-foreground/90">
                    <Swords
                      className={cn(
                        "mt-0.5 h-4 w-4 shrink-0",
                        n.kind === "pro" ? "text-teal-400" : "text-rose-400"
                      )}
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="text-gold-bright">{n.from.name}:</strong> {n.text}
                    </span>
                  </li>
                ))}
              </ul>
            )}
            {verdict.notes.length === 0 && (
              <p className="mt-2 text-sm text-muted-foreground">
                Não temos notas diretas desse confronto — compare runas, builds e
                fraquezas abaixo e observe como cada um escala ao longo do jogo.
              </p>
            )}
          </div>

          {/* Lados */}
          <div className="grid gap-4 md:grid-cols-2">
            <CompareSide champion={champA} onSelectDetail={onSelectDetail} />
            <CompareSide champion={champB} onSelectDetail={onSelectDetail} />
          </div>

          {/* Plano de jogo */}
          <div className="grid gap-4 md:grid-cols-2">
            {[champA, champB].map((c) => (
              <div
                key={c.id}
                className="rounded-lg border border-border bg-card/60 p-4"
              >
                <p className="mb-2 flex items-center gap-2 text-sm font-bold text-gold">
                  <InfoTooltip content="Como viver esse confronto do ponto de vista deste campeão.">
                    <span className="inline-flex cursor-help items-center gap-1.5">
                      Plano de {c.name}
                      <Eye className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                  </InfoTooltip>
                </p>
                <ul className="space-y-1.5">
                  {c.counterTips.slice(0, 2).map((t, i) => (
                    <li key={i} className="text-sm leading-relaxed text-foreground/90">
                      • {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="rounded-lg border border-dashed border-border bg-card/40 p-8 text-center">
          <p className="font-display text-lg font-bold text-gold-bright">
            Escolha dois campeões para comparar
          </p>
          <p className="mx-auto mt-1 max-w-md text-sm text-muted-foreground">
            Vemos runas, feitiços, build e notas de matchup lado a lado — e dizemos
            quem tem vantagem no confronto.
          </p>
        </div>
      )}
    </div>
  );
}
