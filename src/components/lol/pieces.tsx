"use client";

// ============================================================
// Topo do Rift — Peças compartilhadas de UI
// ============================================================
import * as React from "react";
import {
  Sword,
  Axe,
  Shield,
  Footprints,
  FlaskConical,
  Heart,
  Zap,
  Crosshair,
  Wand2,
  Crown,
  Hourglass,
  Flame,
  Hand,
  DoorOpen,
  Ghost,
  Coins,
  type LucideIcon,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import {
  ITEMS,
  RUNES,
  RUNE_TREES,
  SPELLS,
  CLASS_META,
  DIFFICULTY_META,
  TIER_META,
  type ItemGlyph,
} from "@/lib/lol/data";

// ------------------------------------------------------------
// Ícone por glifo de item/feitiço
// ------------------------------------------------------------
const GLYPH_ICONS: Record<string, LucideIcon> = {
  sword: Sword,
  axe: Axe,
  shield: Shield,
  boot: Footprints,
  flask: FlaskConical,
  heart: Heart,
  bolt: Zap,
  bow: Crosshair,
  staff: Wand2,
  crown: Crown,
  clock: Hourglass,
  flame: Flame,
  fist: Hand,
  portal: DoorOpen,
  ghost: Ghost,
};

export function GlyphIcon({
  glyph,
  className,
}: {
  glyph: string;
  className?: string;
}) {
  const Icon = GLYPH_ICONS[glyph] ?? Sword;
  return <Icon className={className} aria-hidden="true" />;
}

// ------------------------------------------------------------
// Chip com tooltip (padrão geral)
// ------------------------------------------------------------
export function InfoTooltip({
  content,
  children,
  side = "top",
  className,
}: {
  content: React.ReactNode;
  children: React.ReactNode;
  side?: "top" | "bottom";
  className?: string;
}) {
  return (
    <TooltipProvider delayDuration={120}>
      <Tooltip>
        <TooltipTrigger asChild className={className}>
          {children}
        </TooltipTrigger>
        <TooltipContent
          side={side}
          className="max-w-64 border border-[#785a28]/60 bg-popover text-popover-foreground shadow-xl"
        >
          {content}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

// ------------------------------------------------------------
// Ícone de item com tooltip (nome, preço, descrição)
// ------------------------------------------------------------
export function ItemIcon({
  id,
  size = "md",
  className,
}: {
  id: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const item = ITEMS[id];
  if (!item) return null;

  const sizes = {
    sm: "h-9 w-9 rounded",
    md: "h-12 w-12 rounded-md",
    lg: "h-14 w-14 rounded-md",
  } as const;
  const iconSizes = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  } as const;

  return (
    <InfoTooltip
      content={
        <div className="space-y-1">
          <p className="font-semibold text-gold-bright">{item.name}</p>
          <p className="flex items-center gap-1 text-xs text-gold">
            <Coins className="h-3 w-3" aria-hidden="true" /> {item.cost} de ouro
          </p>
          <p className="text-xs text-muted-foreground">{item.desc}</p>
        </div>
      }
    >
      <div
        tabIndex={0}
        role="img"
        aria-label={`${item.name} — ${item.desc}`}
        className={cn(
          "flex items-center justify-center border border-[#785a28]/70 bg-gradient-to-b from-[#12314e] to-[#0a1c2e] text-gold transition-colors hover:border-gold/80 hover:text-gold-bright focus-visible:outline-2 focus-visible:outline-gold cursor-help",
          sizes[size],
          className
        )}
      >
        <GlyphIcon glyph={item.glyph} className={iconSizes[size]} />
      </div>
    </InfoTooltip>
  );
}

// ------------------------------------------------------------
// Item + nota (usado nas listas de build)
// ------------------------------------------------------------
export function ItemChip({
  id,
  note,
  size = "md",
}: {
  id: string;
  note?: string;
  size?: "sm" | "md" | "lg";
}) {
  const item = ITEMS[id];
  if (!item) return null;
  return (
    <div className="flex items-start gap-3">
      <ItemIcon id={id} size={size} />
      <div className="min-w-0">
        <p className="text-sm font-medium leading-tight text-gold-bright">
          {item.name}
        </p>
        {note && (
          <p className="mt-0.5 text-xs leading-snug text-muted-foreground">
            {note}
          </p>
        )}
      </div>
    </div>
  );
}

// ------------------------------------------------------------
// Runa (keystone ou pequena) com tooltip
// ------------------------------------------------------------
export function RuneChip({
  id,
  size = "md",
  showTree = true,
}: {
  id: string;
  size?: "sm" | "md";
  showTree?: boolean;
}) {
  const rune = RUNES[id];
  if (!rune) return null;
  const tree = RUNE_TREES[rune.tree];
  const isKey = !!rune.keystone;

  const box = isKey
    ? "h-14 w-14 border-2"
    : size === "sm"
      ? "h-8 w-8 border"
      : "h-10 w-10 border";

  return (
    <InfoTooltip
      content={
        <div className="space-y-1">
          <p className="font-semibold text-gold-bright">{rune.name}</p>
          <p className="text-xs" style={{ color: tree.color }}>
            {showTree ? `Árvore: ${tree.name}` : tree.name}
            {isKey ? " · Keystone" : ""}
          </p>
          <p className="text-xs text-muted-foreground">{rune.desc}</p>
        </div>
      }
    >
      <div
        tabIndex={0}
        role="img"
        aria-label={`${rune.name} — ${rune.desc}`}
        className={cn(
          "flex items-center justify-center rounded-full bg-[#0a1c2e] font-display font-bold transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-gold cursor-help",
          box
        )}
        style={{
          borderColor: tree.color,
          color: tree.color,
          boxShadow: isKey ? `0 0 12px ${tree.color}44` : undefined,
        }}
      >
        {isKey ? rune.name.slice(0, 2).toUpperCase() : rune.name.slice(0, 2).toUpperCase()}
      </div>
    </InfoTooltip>
  );
}

// ------------------------------------------------------------
// Feitiço de invocador com tooltip
// ------------------------------------------------------------
export function SpellChip({
  id,
  note,
}: {
  id: string;
  note?: string;
}) {
  const spell = SPELLS[id];
  if (!spell) return null;
  return (
    <InfoTooltip
      content={
        <div className="space-y-1">
          <p className="font-semibold text-gold-bright">{spell.name}</p>
          <p className="text-xs text-muted-foreground">{spell.desc}</p>
        </div>
      }
    >
      <div className="flex items-center gap-3 cursor-help">
        <div
          tabIndex={0}
          role="img"
          aria-label={`${spell.name} — ${spell.desc}`}
          className="flex h-12 w-12 items-center justify-center rounded-md border border-[#785a28]/70 bg-gradient-to-b from-[#12314e] to-[#0a1c2e] text-teal-400 transition-colors hover:border-gold/80 focus-visible:outline-2 focus-visible:outline-gold"
        >
          <GlyphIcon glyph={spell.glyph} className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-medium leading-tight text-gold-bright">
            {spell.name}
          </p>
          {note && (
            <p className="mt-0.5 text-xs leading-snug text-muted-foreground">
              {note}
            </p>
          )}
        </div>
      </div>
    </InfoTooltip>
  );
}

// ------------------------------------------------------------
// Badges: classe, dificuldade, tier
// ------------------------------------------------------------
export function ClassBadge({ classe }: { classe: keyof typeof CLASS_META }) {
  const meta = CLASS_META[classe];
  return (
    <InfoTooltip content={meta.desc}>
      <span
        className="inline-flex cursor-help items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide"
        style={{ borderColor: `${meta.color}66`, color: meta.color, backgroundColor: `${meta.color}14` }}
      >
        {meta.label}
      </span>
    </InfoTooltip>
  );
}

export function DifficultyBadge({
  level,
}: {
  level: 1 | 2 | 3;
}) {
  const meta = DIFFICULTY_META[level];
  return (
    <InfoTooltip content={meta.desc}>
      <span className="inline-flex cursor-help items-center gap-1 rounded-full border border-border bg-muted px-2.5 py-0.5 text-[11px] font-semibold text-foreground/90">
        {meta.label}
        <span className="flex gap-0.5" aria-hidden="true">
          {[1, 2, 3].map((n) => (
            <span
              key={n}
              className={cn(
                "h-1.5 w-1.5 rounded-full",
                n <= level ? "bg-gold" : "bg-border"
              )}
            />
          ))}
        </span>
      </span>
    </InfoTooltip>
  );
}

export function TierBadge({ tier }: { tier: "S" | "A" | "B" }) {
  const meta = TIER_META[tier];
  return (
    <InfoTooltip content={meta.desc}>
      <span
        className="inline-flex h-7 min-w-7 cursor-help items-center justify-center rounded-md border px-1.5 font-display text-sm font-black"
        style={{
          borderColor: `${meta.color}80`,
          color: meta.color,
          backgroundColor: `${meta.color}14`,
        }}
      >
        {meta.label}
      </span>
    </InfoTooltip>
  );
}
