"use client";

// ============================================================
// Topo do Rift — Comparador de matchups (até 3 campeões)
// Confrontos par-a-par + ranking geral com pontuação.
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
  Medal,
  Plus,
  X,
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
import { CHAMPIONS, championImageUrl, normalizeText } from "@/lib/lol";
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
  onClear,
  label,
  accent,
}: {
  value: Champion | null;
  onChange: (id: string | null) => void;
  onClear?: () => void;
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
        <PopoverContent className="w-[min(20rem,80vw)] border-frame/60 bg-popover p-0" align="start">
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
      {value && onClear && (
        <button
          type="button"
          onClick={onClear}
          className="self-start text-[11px] font-semibold text-muted-foreground transition-colors hover:text-destructive focus-visible:outline-2 focus-visible:outline-gold"
        >
          <X className="mr-0.5 inline h-3 w-3" aria-hidden="true" />
          Limpar
        </button>
      )}
    </div>
  );
}

// ------------------------------------------------------------
// Painel lateral de um campeão
// ------------------------------------------------------------
function CompareSide({
  champion,
  accent,
  points,
  rank,
  onSelectDetail,
}: {
  champion: Champion;
  accent: string;
  points?: number;
  rank?: number;
  onSelectDetail: (c: Champion) => void;
}) {
  const primaryTree = RUNE_TREES[champion.runes.primaryTree];
  return (
    <div
      className="flex min-w-0 flex-1 flex-col gap-4 rounded-lg border border-border bg-card/70 p-4 transition-colors hover:border-gold/50"
      style={{ borderTop: `3px solid ${accent}` }}
    >
      {/* Cabeçalho */}
      <div className="flex items-start gap-3">
        <ChampionAvatar champion={champion} size={64} className="shrink-0" />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-1.5">
            {rank !== undefined && (
              <span
                className="font-display text-xs font-black"
                style={{ color: accent }}
                aria-label={`${rank}º lugar no confronto`}
              >
                {rank}º
              </span>
            )}
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

      <div className="flex flex-wrap items-center gap-2">
        <DifficultyBadge level={champion.difficulty} />
        {points !== undefined && (
          <span
            className="rounded-full border border-gold/40 bg-gold/10 px-2.5 py-0.5 text-[11px] font-bold text-gold"
            title="Pontuação no confronto par-a-par"
          >
            {points} {points === 1 ? "ponto" : "pontos"}
          </span>
        )}
      </div>

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
// Confronto par-a-par
// ------------------------------------------------------------
type PairResult = {
  a: Champion;
  b: Champion;
  scoreA: number;
  scoreB: number;
  notes: { from: Champion; text: string; kind: "pro" | "contra" }[];
};

function computePair(a: Champion, b: Champion): PairResult {
  const notes: PairResult["notes"] = [];
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

  // Desempate leve por tier quando não há notas diretas (S > A > B)
  if (scoreA === 0 && scoreB === 0) {
    const order = { S: 2, A: 1, B: 0 } as const;
    if (order[a.tier] > order[b.tier]) scoreA = 1;
    else if (order[b.tier] > order[a.tier]) scoreB = 1;
  }

  return { a, b, scoreA, scoreB, notes };
}

const RANK_MEDAL: Record<number, { icon: typeof Medal; color: string }> = {
  1: { icon: Trophy, color: "#F0B93C" },
  2: { icon: Medal, color: "#C0C8D0" },
  3: { icon: Medal, color: "#C88A50" },
};

const EXAMPLES: { ids: string[]; label: string }[] = [
  { ids: ["quinn", "darius"], label: "Quinn vs Darius" },
  { ids: ["poppy", "fiora", "jax"], label: "Poppy vs Fiora vs Jax" },
  { ids: ["warwick", "aatrox"], label: "Warwick vs Aatrox" },
  { ids: ["anivia", "garen", "kled"], label: "Anivia vs Garen vs Kled" },
  { ids: ["ksante", "sett", "malphite"], label: "K'Sante vs Sett vs Malphite" },
];

// Busca tolerante: ignora acentos, apóstrofos e caixa; aceita subsequência
// (ex.: "kante" encontra "K'Sante", "drmundo" encontra "Dr. Mundo")
function fuzzyMatch(value: string, search: string): number {
  if (!search) return 1;
  const t = normalizeText(value);
  const q = normalizeText(search);
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
const SLOT_META = [
  { label: "Campeão A", accent: "#0AC8B9" },
  { label: "Campeão B", accent: "#C8324B" },
  { label: "Campeão C (opcional)", accent: "#C8AA6E" },
];

export function Comparator({
  onSelectDetail,
}: {
  onSelectDetail: (c: Champion) => void;
}) {
  const [ids, setIds] = React.useState<(string | null)[]>([null, null, null]);

  const champs = React.useMemo(
    () =>
      ids.map((id) =>
        id ? CHAMPIONS.find((c) => c.id === id) ?? null : null
      ),
    [ids]
  );
  const active = champs.filter((c): c is Champion => c !== null);
  const hasThird = active.length === 3;

  const pairs = React.useMemo(() => {
    const out: PairResult[] = [];
    for (let i = 0; i < active.length; i++) {
      for (let j = i + 1; j < active.length; j++) {
        out.push(computePair(active[i], active[j]));
      }
    }
    return out;
  }, [active]);

  const scores = React.useMemo(() => {
    const map = new Map<string, number>();
    for (const c of active) map.set(c.id, 0);
    for (const p of pairs) {
      map.set(p.a.id, (map.get(p.a.id) ?? 0) + p.scoreA);
      map.set(p.b.id, (map.get(p.b.id) ?? 0) + p.scoreB);
    }
    // ranking: ordena por pontos; empate mantém ordem de seleção
    const order = [...active].sort(
      (x, y) => (map.get(y.id) ?? 0) - (map.get(x.id) ?? 0)
    );
    return { map, order };
  }, [active, pairs]);

  const rankOf = (id: string): number => {
    const idx = scores.order.findIndex((c) => c.id === id);
    if (idx <= 0) return idx + 1;
    // empate compartilha a posição de quem está acima
    const mine = scores.map.get(id) ?? 0;
    for (let k = 0; k < idx; k++) {
      if ((scores.map.get(scores.order[k].id) ?? 0) === mine) {
        return k + 1;
      }
    }
    return idx + 1;
  };

  const setId = (slot: number, id: string | null) =>
    setIds((prev) => prev.map((v, i) => (i === slot ? id : v)));

  const swap = () =>
    setIds((prev) => [prev[1] ?? null, prev[0] ?? null, prev[2] ?? null]);

  const clearThird = () => setId(2, null);

  return (
    <div className="space-y-5">
      {/* Seletores */}
      <div className="space-y-3 rounded-lg border border-border bg-card/60 p-4">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-end">
          {champs.map((c, i) => (
            <React.Fragment key={i}>
              {i === 1 && (
                <Button
                  variant="outline"
                  size="icon"
                  onClick={swap}
                  disabled={!champs[0] && !champs[1]}
                  aria-label="Inverter lados do comparador"
                  className="mx-auto h-10 w-10 shrink-0 border-gold/40 text-gold hover:bg-gold/10"
                >
                  <ArrowLeftRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              )}
              {i === 2 && (
                <span
                  aria-hidden="true"
                  className="mx-auto hidden h-10 w-10 items-center justify-center text-gold lg:flex"
                >
                  <Plus className="h-4 w-4" />
                </span>
              )}
              <ChampionPicker
                value={c}
                onChange={(id) => setId(i, id)}
                onClear={i === 2 ? clearThird : undefined}
                label={SLOT_META[i].label}
                accent={SLOT_META[i].accent}
              />
            </React.Fragment>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          Compare <strong className="text-gold">2 ou 3 campeões</strong> — o
          terceiro slot é opcional. O ranking soma os pontos de todos os
          confrontos par-a-par.
        </p>
      </div>

      {/* Exemplos rápidos */}
      {active.length === 0 && (
        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <span className="text-xs font-bold uppercase tracking-wide">Experimente:</span>
          {EXAMPLES.map((ex) => {
            const all = ex.ids.every((id) => CHAMPIONS.some((c) => c.id === id));
            if (!all) return null;
            return (
              <button
                key={ex.ids.join("-")}
                type="button"
                onClick={() =>
                  setIds([ex.ids[0] ?? null, ex.ids[1] ?? null, ex.ids[2] ?? null])
                }
                className="cursor-pointer rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground/90 transition-colors hover:border-gold/60 hover:text-gold-bright focus-visible:outline-2 focus-visible:outline-gold"
              >
                {ex.label}
              </button>
            );
          })}
        </div>
      )}

      {/* Resultado */}
      {active.length >= 2 ? (
        <div className="space-y-4">
          {/* Ranking */}
          <div className="rounded-lg border border-gold/40 bg-gold/5 p-4 sm:p-5">
            <p className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-muted-foreground">
              <Scale className="h-4 w-4 text-gold" aria-hidden="true" />
              Ranking do confronto
            </p>
            <ol className="space-y-2">
              {scores.order.map((c, i) => {
                const pts = scores.map.get(c.id) ?? 0;
                const medal = RANK_MEDAL[rankOf(c.id)] ?? RANK_MEDAL[2];
                const MedalIcon = medal.icon;
                return (
                  <li
                    key={c.id}
                    className="flex items-center gap-2.5 rounded-md border border-border bg-card/60 px-3 py-2 transition-colors hover:border-gold/50"
                  >
                    <MedalIcon
                      className="h-5 w-5 shrink-0"
                      style={{ color: medal.color }}
                      aria-hidden="true"
                    />
                    <span className="font-display text-sm font-black text-gold-bright sm:text-base">
                      {rankOf(c.id)}º {c.name}
                    </span>
                    <span className="ml-auto text-xs font-bold text-gold">
                      {pts} {pts === 1 ? "ponto" : "pontos"}
                    </span>
                  </li>
                );
              })}
            </ol>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
              2 pontos por matchup favorável direta, 1 por desvantagem conhecida
              do adversário
              {hasThird && " — e desempate leve por tier quando não há notas"}.
              {scores.order.length === 2 &&
                (scores.map.get(scores.order[0].id) ?? 0) ===
                  (scores.map.get(scores.order[1].id) ?? 0) && (
                  <span className="mt-2 block font-semibold text-gold">
                    Confronto equilibrado — decida pela sua proficiência!
                  </span>
                )}
            </p>
          </div>

          {/* Notas dos confrontos par-a-par */}
          {pairs.some((p) => p.notes.length > 0) && (
            <div className="space-y-3">
              {pairs.map((p) => {
                const winner =
                  p.scoreA > p.scoreB ? p.a : p.scoreB > p.scoreA ? p.b : null;
                if (!winner && p.notes.length === 0) return null;
                return (
                  <div
                    key={`${p.a.id}-${p.b.id}`}
                    className="rounded-lg border border-border bg-card/60 p-4"
                  >
                    <p className="flex flex-wrap items-center gap-1.5 font-display text-sm font-black text-gold-bright">
                      <Swords className="h-4 w-4 text-gold" aria-hidden="true" />
                      {p.a.name} <span className="text-gold">vs</span> {p.b.name}
                      <span className="ml-2 text-xs font-semibold text-muted-foreground">
                        {p.scoreA} × {p.scoreB}
                      </span>
                    </p>
                    {winner ? (
                      <p className="mt-1 text-sm">
                        <span className="font-semibold text-teal-300">
                          {winner.name} tem vantagem
                        </span>
                      </p>
                    ) : (
                      <p className="mt-1 text-sm text-muted-foreground">
                        Confronto equilibrado nas notas diretas.
                      </p>
                    )}
                    {p.notes.length > 0 && (
                      <ul className="mt-2 space-y-1.5">
                        {p.notes.map((n, i) => (
                          <li
                            key={i}
                            className="flex gap-2 text-sm leading-relaxed text-foreground/90"
                          >
                            <Swords
                              className={cn(
                                "mt-0.5 h-3.5 w-3.5 shrink-0",
                                n.kind === "pro" ? "text-teal-400" : "text-rose-400"
                              )}
                              aria-hidden="true"
                            />
                            <span>
                              <strong className="text-gold-bright">{n.from.name}:</strong>{" "}
                              {n.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Lados */}
          <div
            className={cn(
              "grid gap-4",
              active.length === 3 ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2"
            )}
          >
            {champs.map((c, i) =>
              c ? (
                <CompareSide
                  key={c.id}
                  champion={c}
                  accent={SLOT_META[i].accent}
                  points={scores.map.get(c.id)}
                  rank={rankOf(c.id)}
                  onSelectDetail={onSelectDetail}
                />
              ) : null
            )}
          </div>

          {/* Plano de jogo */}
          <div
            className={cn(
              "grid gap-4",
              active.length === 3 ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2"
            )}
          >
            {active.map((c) => (
              <div
                key={c.id}
                className="rounded-lg border border-border bg-card/60 p-4 transition-colors hover:border-gold/50"
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
            Escolha dois ou três campeões para comparar
          </p>
          <p className="mx-auto mt-1 max-w-md text-sm text-muted-foreground">
            Vemos runas, feitiços, build e notas de matchup lado a lado — e
            dizemos quem tem vantagem em cada confronto.
          </p>
        </div>
      )}
    </div>
  );
}
