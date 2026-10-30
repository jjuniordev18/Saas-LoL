"use client";

// ============================================================
// Topo do Rift — Busca por item
// Busca tolerante + filtro por categoria + ordenação, com
// ícones oficiais e lista de campeões que usam cada item.
// ============================================================
import * as React from "react";
import { Search, X, Coins, ChevronsUpDown, ArrowDownUp, Users } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ITEMS, CLASS_META } from "@/lib/lol/data";
import type { ItemCategory } from "@/lib/lol/data";
import {
  ITEM_CATEGORY_FILTERS,
  championsUsingItem,
  normalizeText,
} from "@/lib/lol";
import { cn } from "@/lib/utils";
import { InfoTooltip, GlyphIcon } from "./pieces";
import { ChampionAvatar } from "./ChampionCard";
import { ITEM_DD, itemIconUrl } from "@/lib/lol/ddragon";
import type { Champion } from "@/lib/lol/data";

const CATEGORY_META: Record<ItemCategory, { label: string; color: string }> = {
  starter: { label: "Inicial", color: "#0AC8B9" },
  boots: { label: "Botas", color: "#E8902F" },
  ad: { label: "Dano / AD", color: "#C8AA6E" },
  tank: { label: "Tanque", color: "#5C8AA0" },
  ap: { label: "Poder Mágico", color: "#A25CE8" },
};

type SortMode = "nome" | "preco-asc" | "preco-desc" | "uso";

export function ItemSearch({
  onSelectDetail,
}: {
  onSelectDetail: (c: Champion) => void;
}) {
  const [query, setQuery] = React.useState("");
  const [category, setCategory] = React.useState<ItemCategory | "todas">("todas");
  const [sort, setSort] = React.useState<SortMode>("nome");
  const [expanded, setExpanded] = React.useState<string | null>(null);

  const usage = React.useMemo(() => {
    const map = new Map<string, number>();
    for (const id of Object.keys(ITEMS)) {
      map.set(id, championsUsingItem(id).length);
    }
    return map;
  }, []);

  const results = React.useMemo(() => {
    const q = normalizeText(query);
    let list = Object.entries(ITEMS).filter(([, item]) => {
      if (category !== "todas" && item.category !== category) return false;
      if (!q) return true;
      return (
        normalizeText(item.name).includes(q) ||
        normalizeText(item.desc).includes(q) ||
        normalizeText(CATEGORY_META[item.category].label).includes(q)
      );
    });
    if (sort === "nome") {
      list.sort(([, a], [, b]) => a.name.localeCompare(b.name, "pt-BR"));
    } else if (sort === "preco-asc") {
      list.sort(([, a], [, b]) => a.cost - b.cost);
    } else if (sort === "preco-desc") {
      list.sort(([, a], [, b]) => b.cost - a.cost);
    } else {
      list.sort(
        ([aId], [bId]) =>
          (usage.get(bId) ?? 0) - (usage.get(aId) ?? 0) ||
          aId.localeCompare(bId)
      );
    }
    return list;
  }, [query, category, sort, usage]);

  const hasFilters =
    query.trim() !== "" || category !== "todas" || sort !== "nome";

  return (
    <div className="space-y-4">
      {/* Controles */}
      <div className="space-y-3 rounded-lg border border-border bg-card/60 p-4">
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <label htmlFor="busca-item" className="sr-only">
              Buscar item
            </label>
            <Search
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gold"
              aria-hidden="true"
            />
            <Input
              id="busca-item"
              type="search"
              placeholder="Buscar item (ex.: Heartsteel, botas, anti-cura...)"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="h-11 rounded-md border-border bg-card pl-10 pr-10 text-sm focus-visible:ring-gold"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Limpar busca de item"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-gold"
              >
                <X className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            )}
          </div>
          <div className="w-full sm:w-56">
            <label className="sr-only" htmlFor="ordenar-itens">
              Ordenar itens
            </label>
            <Select value={sort} onValueChange={(v) => setSort(v as SortMode)}>
              <SelectTrigger id="ordenar-itens" className="h-11 w-full border-border bg-card">
                <ArrowDownUp className="mr-1.5 h-3.5 w-3.5 text-gold" aria-hidden="true" />
                <SelectValue placeholder="Ordenar por..." />
              </SelectTrigger>
              <SelectContent className="border-frame/60 bg-popover">
                <SelectItem value="nome">Nome (A–Z)</SelectItem>
                <SelectItem value="preco-asc">Preço (mais barato)</SelectItem>
                <SelectItem value="preco-desc">Preço (mais caro)</SelectItem>
                <SelectItem value="uso">Mais usados pelos campeões</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-1 text-xs font-bold uppercase tracking-wide text-muted-foreground">
            Categoria
          </span>
          {ITEM_CATEGORY_FILTERS.map((f) => {
            const active = category === f.value;
            const color =
              f.value !== "todas" ? CATEGORY_META[f.value].color : undefined;
            return (
              <button
                key={f.value}
                type="button"
                aria-pressed={active}
                onClick={() => setCategory(f.value)}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-gold",
                  active
                    ? "border-gold bg-gold/15 text-gold-bright"
                    : "border-border bg-card text-muted-foreground hover:border-gold/50 hover:text-foreground"
                )}
                style={active && color ? { borderColor: color, color } : undefined}
              >
                {f.label}
              </button>
            );
          })}
          {hasFilters && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setQuery("");
                setCategory("todas");
                setSort("nome");
              }}
              className="ml-auto border-border text-muted-foreground hover:border-gold/50 hover:text-gold-bright"
            >
              <X className="mr-1.5 h-3.5 w-3.5" aria-hidden="true" />
              Limpar
            </Button>
          )}
        </div>
      </div>

      <p className="text-sm text-muted-foreground" aria-live="polite">
        <strong className="text-gold-bright">{results.length}</strong>{" "}
        {results.length === 1 ? "item encontrado" : "itens encontrados"} · ícones
        oficiais do patch
      </p>

      {results.length === 0 ? (
        <div className="rounded-lg border border-dashed border-border bg-card/40 p-10 text-center">
          <p className="font-display text-lg font-bold text-gold-bright">
            Nenhum item encontrado
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Tente outro nome (ex.: &ldquo;cleaver&rdquo;, &ldquo;poção&rdquo;,
            &ldquo;tanque&rdquo;) ou limpe os filtros.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {results.map(([id, item]) => {
            const users = championsUsingItem(id);
            const isOpen = expanded === id;
            const cat = CATEGORY_META[item.category];
            return (
              <div
                key={id}
                className="card-hover-lift flex h-full flex-col rounded-lg border border-border bg-card p-3.5"
              >
                <div className="flex items-start gap-3">
                  <InfoTooltip
                    content={
                      <div className="space-y-1">
                        <p className="font-semibold text-gold-bright">{item.name}</p>
                        <p className="flex items-center gap-1 text-xs text-gold">
                          <Coins className="h-3 w-3" aria-hidden="true" />{" "}
                          {item.cost} de ouro
                        </p>
                      </div>
                    }
                  >
                    <span
                      tabIndex={0}
                      role="img"
                      aria-label={item.name}
                      className="gold-glow-hover relative flex h-12 w-12 shrink-0 cursor-help items-center justify-center overflow-hidden rounded-md border border-frame/70 bg-gradient-to-b from-secondary to-abyss text-gold"
                    >
                      {/* Ícone oficial via ItemBadge (mantém fallback) */}
                      <ItemBadge id={id} />
                    </span>
                  </InfoTooltip>
                  <div className="min-w-0">
                    <p className="truncate font-display text-sm font-bold text-gold-bright">
                      {item.name}
                    </p>
                    <p className="mt-0.5 flex items-center gap-1 text-[11px] font-semibold text-gold">
                      <Coins className="h-3 w-3" aria-hidden="true" />
                      {item.cost}
                    </p>
                    <span
                      className="mt-1 inline-flex rounded-full border px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide"
                      style={{
                        borderColor: `${cat.color}66`,
                        color: cat.color,
                        backgroundColor: `${cat.color}14`,
                      }}
                    >
                      {cat.label}
                    </span>
                  </div>
                </div>

                <p className="mt-2.5 line-clamp-3 text-xs leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>

                <button
                  type="button"
                  onClick={() => setExpanded(isOpen ? null : id)}
                  aria-expanded={isOpen}
                  className="mt-auto flex items-center gap-1.5 pt-2.5 text-left text-[11px] font-bold text-gold transition-colors hover:text-gold-bright focus-visible:outline-2 focus-visible:outline-gold"
                >
                  <Users className="h-3 w-3" aria-hidden="true" />
                  {users.length > 0
                    ? `Usado por ${users.length} ${users.length === 1 ? "campeão" : "campeões"}`
                    : "Nenhum campeão da rota usa"}
                  <ChevronsUpDown className="h-3 w-3" aria-hidden="true" />
                </button>

                {isOpen && (
                  <div className="animate-fade-in-up mt-2 rounded-md border border-border bg-background/60 p-2.5">
                    {users.length === 0 ? (
                      <p className="text-xs text-muted-foreground">
                        Este item não está nas builds da rota superior — vale
                        para outras rotas ou situações especiais.
                      </p>
                    ) : (
                      <div className="flex flex-wrap gap-2">
                        {users.map(({ champion, where }) => (
                          <button
                            key={champion.id}
                            type="button"
                            onClick={() => onSelectDetail(champion)}
                            title={`${champion.name} — ${where}`}
                            aria-label={`Ver build de ${champion.name} (usa ${item.name}: ${where})`}
                            className="flex flex-col items-center gap-1 rounded-md p-1.5 transition-colors hover:bg-gold/10 focus-visible:outline-2 focus-visible:outline-gold"
                          >
                            <ChampionAvatar champion={champion} size={40} />
                            <span className="max-w-16 truncate text-[10px] font-semibold text-foreground/90">
                              {champion.name}
                            </span>
                            <span className="text-[9px] uppercase tracking-wide text-muted-foreground">
                              {where.split(" · ")[0]}
                            </span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ------------------------------------------------------------
// Ícone do item (arte oficial com fallback para glifo)
// ------------------------------------------------------------
function ItemBadge({ id }: { id: string }) {
  const [failed, setFailed] = React.useState(false);
  const dd = ITEM_DD[id];
  const item = ITEMS[id];
  if (!item) return null;
  return dd && !failed ? (
    <img
      src={itemIconUrl(dd.icon)}
      alt=""
      width={48}
      height={48}
      loading="lazy"
      onError={() => setFailed(true)}
      className="absolute inset-0 h-full w-full object-cover"
    />
  ) : (
    <GlyphIcon glyph={item.glyph} className="h-5 w-5" />
  );
}
