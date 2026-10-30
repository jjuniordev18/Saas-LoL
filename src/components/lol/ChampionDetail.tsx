"use client";

// ============================================================
// Topo do Rift — Detalhe completo do campeão (13 seções)
// ============================================================
import * as React from "react";
import {
  TrendingUp,
  TrendingDown,
  Swords,
  Lightbulb,
  Coins,
  Footprints as Boot,
  Sparkles,
  Layers,
  Wand2,
  ListOrdered,
  Sunrise,
  Sun,
  Moon,
  ShieldCheck,
  ShieldAlert,
  GitBranch,
  type LucideIcon,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import type { Champion } from "@/lib/lol/data";
import { RUNE_TREES } from "@/lib/lol/data";
import { cn } from "@/lib/utils";
import { championImageUrl } from "@/lib/lol";
import {
  ClassBadge,
  DifficultyBadge,
  ItemChip,
  ItemIcon,
  RuneChip,
  SpellChip,
  TierBadge,
} from "./pieces";
import { ChampionAvatar } from "./ChampionCard";
import { SkillOrderTable, SkillPriorityNote } from "./SkillOrderTable";

// ------------------------------------------------------------
// Cabeçalho de seção
// ------------------------------------------------------------
function SectionHeader({
  icon: Icon,
  title,
  hint,
}: {
  icon: LucideIcon;
  title: string;
  hint?: string;
}) {
  return (
    <div className="mb-4">
      <h3 className="flex items-center gap-2 font-display text-lg font-bold text-gold-bright">
        <Icon className="h-5 w-5 text-gold" aria-hidden="true" />
        {title}
      </h3>
      {hint && <p className="mt-1 text-xs text-muted-foreground">{hint}</p>}
    </div>
  );
}

// ------------------------------------------------------------
// Caixa genérica de seção
// ------------------------------------------------------------
function Section({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn("rounded-lg border border-border bg-card/60 p-4 sm:p-5", className)}
    >
      {children}
    </section>
  );
}

// ------------------------------------------------------------
// Detalhe completo
// ------------------------------------------------------------
export function ChampionDetail({ champion }: { champion: Champion }) {
  const [imgFailed, setImgFailed] = React.useState(false);
  const primaryTree = RUNE_TREES[champion.runes.primaryTree];
  const secondaryTree = RUNE_TREES[champion.runes.secondaryTree];

  return (
    <div className="space-y-5">
      {/* ---------- Cabeçalho ---------- */}
      <header
        className="relative overflow-hidden rounded-lg border border-border p-5"
        style={{
          background: `linear-gradient(135deg, ${champion.color}22 0%, #0c1c30 60%)`,
        }}
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          {imgFailed ? (
            <div
              className="flex h-20 w-20 shrink-0 items-center justify-center rounded-lg border-2 font-display text-2xl font-bold text-white"
              style={{ borderColor: `${champion.color}80`, background: `linear-gradient(160deg, ${champion.color}, #0a1428)` }}
              role="img"
              aria-label={champion.name}
            >
              {champion.name.slice(0, 2).toUpperCase()}
            </div>
          ) : (
            <img
              src={championImageUrl(champion.image)}
              alt={`Retrato de ${champion.name}`}
              width={80}
              height={80}
              onError={() => setImgFailed(true)}
              className="h-20 w-20 shrink-0 rounded-lg border-2 object-cover"
              style={{ borderColor: `${champion.color}80` }}
            />
          )}
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="font-display text-2xl font-black text-gold-gradient sm:text-3xl">
                {champion.name}
              </h2>
              <TierBadge tier={champion.tier} />
              <DifficultyBadge level={champion.difficulty} />
            </div>
            <p className="text-sm text-muted-foreground">
              {champion.title} · {champion.playstyle}
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {champion.classes.map((c) => (
                <ClassBadge key={c} classe={c} />
              ))}
            </div>
          </div>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-foreground/90">
          {champion.summary}
        </p>
      </header>

      {/* ---------- Forças e fraquezas ---------- */}
      <div className="grid gap-4 md:grid-cols-2">
        <Section className="border-emerald-900/50 bg-emerald-950/20">
          <SectionHeader icon={TrendingUp} title="Pontos fortes" />
          <ul className="space-y-2">
            {champion.strengths.map((s, i) => (
              <li key={i} className="flex gap-2 text-sm text-foreground/90">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" aria-hidden="true" />
                {s}
              </li>
            ))}
          </ul>
        </Section>
        <Section className="border-rose-900/50 bg-rose-950/20">
          <SectionHeader icon={TrendingDown} title="Fraquezas" />
          <ul className="space-y-2">
            {champion.weaknesses.map((s, i) => (
              <li key={i} className="flex gap-2 text-sm text-foreground/90">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" aria-hidden="true" />
                {s}
              </li>
            ))}
          </ul>
        </Section>
      </div>

      {/* ---------- Itens ---------- */}
      <Section id="champ-build" className="scroll-mt-20">
        <SectionHeader
          icon={Coins}
          title="Build recomendada"
          hint="Ordem de compra dos itens principais — siga a numeração"
        />
        <div className="grid gap-2">
          {champion.coreItems.map((ref, i) => {
            return (
              <div key={ref.id} className="flex items-center gap-3 rounded-md border border-border/60 bg-muted/40 p-2.5">
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold/15 font-display text-sm font-bold text-gold"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <ItemChip id={ref.id} note={ref.note} />
              </div>
            );
          })}
        </div>
      </Section>

      <div className="grid gap-4 md:grid-cols-2">
        <Section>
          <SectionHeader icon={Sparkles} title="Itens iniciais" hint="O que comprar na primeira ida à rota" />
          <div className="space-y-3">
            {champion.startItems.map((ref, i) => (
              <ItemChip key={`${ref.id}-${i}`} id={ref.id} note={ref.note} size="sm" />
            ))}
          </div>
        </Section>
        <Section>
          <SectionHeader icon={Boot} title="Botas" hint="Escolha conforme o time inimigo" />
          <div className="space-y-3">
            {champion.boots.map((ref) => (
              <ItemChip key={ref.id} id={ref.id} note={ref.note} size="sm" />
            ))}
          </div>
        </Section>
      </div>

      <Section>
        <SectionHeader
          icon={Layers}
          title="Itens situacionais"
          hint="Terceiro, quarto e quinto itens — compre conforme a partida"
        />
        <div className="grid gap-2 sm:grid-cols-2">
          {champion.situationalItems.map((ref, i) => (
            <div key={`${ref.id}-${i}`} className="rounded-md border border-border/60 bg-muted/40 p-2.5">
              <ItemChip id={ref.id} note={ref.note} size="sm" />
            </div>
          ))}
        </div>
      </Section>

      {/* ---------- Runas ---------- */}
      <Section id="champ-runas" className="scroll-mt-20">
        <SectionHeader
          icon={GitBranch}
          title="Runas"
          hint="A configuração padrão mais forte no patch atual"
        />
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-3">
              <RuneChip id={champion.runes.keystone} />
              <div>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">
                  Keystone · {primaryTree.name}
                </p>
              </div>
            </div>
            <Separator orientation="vertical" className="hidden h-10 sm:block" />
            <div>
              <p className="mb-1.5 text-xs uppercase tracking-wide text-muted-foreground">
                Árvore principal ({primaryTree.name})
              </p>
              <div className="flex gap-2">
                {champion.runes.primary.map((r) => (
                  <RuneChip key={r} id={r} size="sm" />
                ))}
              </div>
            </div>
            <Separator orientation="vertical" className="hidden h-10 sm:block" />
            <div>
              <p className="mb-1.5 text-xs uppercase tracking-wide text-muted-foreground">
                Secundária ({secondaryTree.name})
              </p>
              <div className="flex gap-2">
                {champion.runes.secondary.map((r) => (
                  <RuneChip key={r} id={r} size="sm" />
                ))}
              </div>
            </div>
          </div>

          <div>
            <p className="mb-1.5 text-xs uppercase tracking-wide text-muted-foreground">
              Fragmentos (shards)
            </p>
            <div className="flex flex-wrap gap-2">
              {champion.runes.shards.map((s, i) => (
                <span
                  key={i}
                  className="rounded-md border border-border bg-muted px-2.5 py-1 text-xs text-foreground/90"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-md border border-gold/25 bg-gold/5 p-3">
            <p className="text-sm leading-relaxed text-foreground/90">
              <strong className="text-gold">Por que funciona:</strong>{" "}
              {champion.runes.explanation}
            </p>
          </div>
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground/80">Variação:</strong>{" "}
            {champion.altRunesNote}
          </p>
        </div>
      </Section>

      {/* ---------- Feitiços ---------- */}
      <Section id="champ-feiticos" className="scroll-mt-20">
        <SectionHeader icon={Wand2} title="Feitiços de invocador" />
        <div className="grid gap-3 sm:grid-cols-2">
          {champion.spells.map((s) => (
            <SpellChip key={s.id} id={s.id} note={s.note} />
          ))}
        </div>
      </Section>

      {/* ---------- Ordem de habilidades ---------- */}
      <Section id="champ-habilidades" className="scroll-mt-20">
        <SectionHeader
          icon={ListOrdered}
          title="Ordem de habilidades"
          hint="O que maximizar em cada nível, do 1 ao 18"
        />
        <div className="space-y-4">
          <SkillPriorityNote champion={champion} />
          <SkillOrderTable champion={champion} />

          <div className="space-y-3">
            {champion.abilities.map((ab) => {
              const color =
                ab.key === "P"
                  ? "#C8AA6E"
                  : SKILL_COLOR_MAP[ab.key];
              return (
                <div key={ab.key} className="flex gap-3">
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md font-display text-sm font-bold text-white"
                    style={{ backgroundColor: color }}
                    aria-hidden="true"
                  >
                    {ab.key}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-gold-bright">
                      {ab.name}
                    </p>
                    <p className="text-sm leading-snug text-muted-foreground">
                      {ab.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* ---------- Combos ---------- */}
      <Section>
        <SectionHeader icon={Swords} title="Combos essenciais" hint="Sequências que você vai repetir toda partida" />
        <ul className="space-y-2">
          {champion.comboTips.map((c, i) => (
            <li key={i} className="rounded-md border border-border/60 bg-muted/40 p-3 text-sm leading-relaxed text-foreground/90">
              {c}
            </li>
          ))}
        </ul>
      </Section>

      {/* ---------- Dicas por fase ---------- */}
      <Section id="champ-dicas" className="scroll-mt-20">
        <SectionHeader icon={Lightbulb} title="Dicas por fase do jogo" />
        <Tabs defaultValue="early">
          <TabsList className="bg-muted">
            <TabsTrigger value="early" className="gap-1.5 data-[state=active]:text-gold-bright">
              <Sunrise className="h-4 w-4" aria-hidden="true" /> Early game
            </TabsTrigger>
            <TabsTrigger value="mid" className="gap-1.5 data-[state=active]:text-gold-bright">
              <Sun className="h-4 w-4" aria-hidden="true" /> Mid game
            </TabsTrigger>
            <TabsTrigger value="late" className="gap-1.5 data-[state=active]:text-gold-bright">
              <Moon className="h-4 w-4" aria-hidden="true" /> Late game
            </TabsTrigger>
          </TabsList>
          {(
            [
              ["early", "Primeiros 14 minutos: rota, farm e trocas"],
              ["mid", "Rotações, objetivos e primeiras brigas de time"],
              ["late", "Teamfights, Baron e decisões de fechar o jogo"],
            ] as const
          ).map(([key, hint]) => (
            <TabsContent key={key} value={key} className="mt-3">
              <p className="mb-2 text-xs text-muted-foreground">{hint}</p>
              <ul className="space-y-2">
                {champion.tips[key].map((t, i) => (
                  <li key={i} className="flex gap-2 text-sm leading-relaxed text-foreground/90">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                    {t}
                  </li>
                ))}
              </ul>
            </TabsContent>
          ))}
        </Tabs>
      </Section>

      {/* ---------- Matchups ---------- */}
      <Section id="champ-matchups" className="scroll-mt-20">
        <SectionHeader
          icon={Swords}
          title="Matchups"
          hint="Contra quem você brilha e contra quem você sofre"
        />
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-emerald-900/50 bg-emerald-950/20 p-4">
            <p className="mb-3 flex items-center gap-2 text-sm font-bold text-emerald-300">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              Forte contra
            </p>
            <ul className="space-y-2.5">
              {champion.strongAgainst.map((m) => (
                <li key={m.champion}>
                  <p className="text-sm font-semibold text-foreground">{m.champion}</p>
                  <p className="text-xs leading-snug text-muted-foreground">{m.note}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-rose-900/50 bg-rose-950/20 p-4">
            <p className="mb-3 flex items-center gap-2 text-sm font-bold text-rose-300">
              <ShieldAlert className="h-4 w-4" aria-hidden="true" />
              Fraco contra (counters)
            </p>
            <ul className="space-y-2.5">
              {champion.weakAgainst.map((m) => (
                <li key={m.champion}>
                  <p className="text-sm font-semibold text-foreground">{m.champion}</p>
                  <p className="text-xs leading-snug text-muted-foreground">{m.note}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-4 rounded-md border border-gold/25 bg-gold/5 p-3">
          <p className="mb-1 text-sm font-semibold text-gold">Como jogar contra counters</p>
          <ul className="space-y-1.5">
            {champion.counterTips.map((t, i) => (
              <li key={i} className="text-sm leading-relaxed text-foreground/90">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* ---------- Builds alternativas ---------- */}
      <Section id="champ-alternativas" className="scroll-mt-20">
        <SectionHeader
          icon={Layers}
          title="Builds alternativas"
          hint="Mesmo campeão, planos diferentes — escolha pelo jogo"
        />
        <div className="grid gap-4 md:grid-cols-2">
          {champion.altBuilds.map((b) => (
            <div key={b.name} className="rounded-lg border border-border bg-muted/30 p-4">
              <p className="font-display text-base font-bold text-gold-bright">{b.name}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{b.when}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {b.items.map((ref, i) => (
                  <ItemIcon key={`${ref.id}-${i}`} id={ref.id} size="sm" />
                ))}
              </div>
              {b.note && (
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{b.note}</p>
              )}
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

const SKILL_COLOR_MAP: Record<string, string> = {
  Q: "#5C8AA0",
  W: "#5FAF6E",
  E: "#E8902F",
  R: "#C8324B",
};
