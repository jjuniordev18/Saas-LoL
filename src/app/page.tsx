"use client";

// ============================================================
// Topo do Rift — Página inicial
// Busca + cards de campeões populares + lista com filtros
// ============================================================
import * as React from "react";
import { Search, Swords, Crown, ListFilter, X, Flame } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  CHAMPIONS,
  getPopularChampions,
  filterChampions,
  DEFAULT_FILTERS,
  CLASS_FILTERS,
  DIFFICULTY_FILTERS,
  TIER_FILTERS,
  type ChampionFilters,
} from "@/lib/lol";
import { CLASS_META, DIFFICULTY_META, TIER_META, PATCH_VERSION } from "@/lib/lol/data";
import type { Champion } from "@/lib/lol/data";
import { cn } from "@/lib/utils";
import { ChampionCard } from "@/components/lol/ChampionCard";
import { ChampionDialog } from "@/components/lol/ChampionDialog";

// ------------------------------------------------------------
// Cabeçalho fixo
// ------------------------------------------------------------
function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-[#785a28]/40 bg-[#0a1428]/90 backdrop-blur supports-[backdrop-filter]:bg-[#0a1428]/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <a
          href="#inicio"
          className="flex items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-gold rounded"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-md border border-[#785a28]/70 bg-gradient-to-b from-[#12314e] to-[#0a1c2e]">
            <Swords className="h-5 w-5 text-gold" aria-hidden="true" />
          </span>
          <span className="whitespace-nowrap font-display text-base font-black tracking-wide text-gold-gradient sm:text-lg">
            Topo do Rift
          </span>
        </a>

        <nav aria-label="Navegação principal" className="flex items-center gap-0.5 sm:gap-2">
          <a
            href="#populares"
            className="rounded-md px-2 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-gold-bright focus-visible:outline-2 focus-visible:outline-gold sm:px-3 sm:text-sm"
          >
            Populares
          </a>
          <a
            href="#campeoes"
            className="rounded-md px-2 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-gold-bright focus-visible:outline-2 focus-visible:outline-gold sm:px-3 sm:text-sm"
          >
            Campeões
          </a>
        </nav>
      </div>
    </header>
  );
}

// ------------------------------------------------------------
// Rodapé (sempre no fim da página)
// ------------------------------------------------------------
function Footer() {
  return (
    <footer className="mt-auto border-t border-[#785a28]/40 bg-[#081120] pb-[env(safe-area-inset-bottom)]">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-md border border-[#785a28]/70 bg-gradient-to-b from-[#12314e] to-[#0a1c2e]">
              <Swords className="h-4 w-4 text-gold" aria-hidden="true" />
            </span>
            <span className="font-display text-sm font-bold text-gold-bright">
              Topo do Rift
            </span>
          </div>
          <nav aria-label="Links do rodapé" className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
            <a href="#populares" className="transition-colors hover:text-gold-bright">
              Populares
            </a>
            <a href="#campeoes" className="transition-colors hover:text-gold-bright">
              Todos os campeões
            </a>
            <a href="#inicio" className="transition-colors hover:text-gold-bright">
              Voltar ao topo
            </a>
          </nav>
        </div>
        <p className="mt-6 text-center text-xs leading-relaxed text-muted-foreground">
          Patch {PATCH_VERSION} · Conteúdo educativo feito por fãs.{" "}
          Topo do Rift não é afiliado à Riot Games. League of Legends e todos os
          nomes de campeões são marcas da Riot Games, Inc.
        </p>
      </div>
    </footer>
  );
}

// ------------------------------------------------------------
// Chip de filtro
// ------------------------------------------------------------
function FilterChip({
  active,
  onClick,
  children,
  color,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-gold",
        active
          ? "border-gold bg-gold/15 text-gold-bright"
          : "border-border bg-card text-muted-foreground hover:border-gold/50 hover:text-foreground"
      )}
      style={active && color ? { borderColor: color, color } : undefined}
    >
      {children}
    </button>
  );
}

// ------------------------------------------------------------
// Página
// ------------------------------------------------------------
export default function Home() {
  const [filters, setFilters] = React.useState<ChampionFilters>(DEFAULT_FILTERS);
  const [selected, setSelected] = React.useState<Champion | null>(null);
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const popular = React.useMemo(() => {
    const pop = getPopularChampions();
    const q = filters.query.trim().toLowerCase();
    if (!q) return pop;
    return pop.filter(
      (c) =>
        c.name.toLowerCase().includes(q) || c.title.toLowerCase().includes(q)
    );
  }, [filters.query]);

  const results = React.useMemo(
    () => filterChampions(filters),
    [filters]
  );

  const hasActiveFilters =
    filters.classe !== "todas" ||
    filters.dificuldade !== "todas" ||
    filters.tier !== "todos" ||
    filters.query.trim() !== "";

  const handleSelect = (champion: Champion) => {
    setSelected(champion);
    setDialogOpen(true);
  };

  const clearFilters = () => setFilters(DEFAULT_FILTERS);

  return (
    <>
      <Header />

      <main id="inicio" className="flex-1">
        {/* ---------- Hero + busca ---------- */}
        <section className="relative overflow-hidden border-b border-[#785a28]/30">
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse 60% 55% at 50% 0%, rgba(200,170,110,0.12), transparent 70%)",
            }}
          />
          <div className="relative mx-auto max-w-6xl px-4 py-14 text-center sm:py-20">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#785a28]/50 bg-card px-3.5 py-1.5 text-xs font-semibold text-gold">
              <Flame className="h-3.5 w-3.5" aria-hidden="true" />
              Patch {PATCH_VERSION} · Temporada 2026
            </p>
            <h1 className="font-display text-4xl font-black leading-tight text-gold-gradient sm:text-5xl md:text-6xl">
              Domine a rota superior
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-balance text-sm leading-relaxed text-muted-foreground sm:text-base">
              Builds atualizadas, runas, feitiços, ordem de habilidades e dicas
              dos melhores top laners do League of Legends — direto ao ponto,
              para iniciantes e intermediários.
            </p>

            {/* Busca */}
            <div className="mx-auto mt-8 max-w-xl">
              <label htmlFor="busca-campeao" className="sr-only">
                Buscar campeão
              </label>
              <div className="relative">
                <Search
                  className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gold"
                  aria-hidden="true"
                />
                <Input
                  id="busca-campeao"
                  type="search"
                  placeholder="Buscar campeão (ex.: Darius, Garen...)"
                  value={filters.query}
                  onChange={(e) =>
                    setFilters((f) => ({ ...f, query: e.target.value }))
                  }
                  className="h-14 rounded-lg border-[#785a28]/60 bg-card pl-12 pr-12 text-base text-foreground shadow-lg placeholder:text-muted-foreground focus-visible:ring-gold"
                />
                {filters.query && (
                  <button
                    type="button"
                    onClick={() => setFilters((f) => ({ ...f, query: "" }))}
                    aria-label="Limpar busca"
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-gold"
                  >
                    <X className="h-4 w-4" aria-hidden="true" />
                  </button>
                )}
              </div>
            </div>

            {/* Estatísticas rápidas */}
            <dl className="mx-auto mt-10 grid max-w-lg grid-cols-3 gap-3 text-center">
              {[
                { label: "Campeões", value: CHAMPIONS.length },
                { label: "Builds completas", value: CHAMPIONS.length },
                { label: "Tier S", value: CHAMPIONS.filter((c) => c.tier === "S").length },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-lg border border-border bg-card/60 px-3 py-3"
                >
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-display text-2xl font-black text-gold">
                    {s.value}
                  </dd>
                  <dd className="text-[11px] uppercase tracking-wide text-muted-foreground">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ---------- Populares ---------- */}
        <section id="populares" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-12">
          <div className="mb-6 flex items-center gap-3">
            <Crown className="h-6 w-6 text-gold" aria-hidden="true" />
            <div>
              <h2 className="font-display text-2xl font-bold text-gold-bright">
                Campeões populares
              </h2>
              <p className="text-sm text-muted-foreground">
                Os picks mais jogados e confiáveis da rota superior agora
              </p>
            </div>
          </div>

          {popular.length === 0 ? (
            <p className="rounded-lg border border-border bg-card p-6 text-center text-sm text-muted-foreground">
              Nenhum campeão popular corresponde à busca &ldquo;{filters.query}&rdquo;.
            </p>
          ) : (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4">
              {popular.map((c) => (
                <ChampionCard key={c.id} champion={c} onSelect={handleSelect} />
              ))}
            </div>
          )}
        </section>

        {/* ---------- Todos os campeões + filtros ---------- */}
        <section
          id="campeoes"
          className="mx-auto max-w-6xl scroll-mt-20 px-4 pb-16"
        >
          <div className="mb-6 flex items-center gap-3">
            <ListFilter className="h-6 w-6 text-gold" aria-hidden="true" />
            <div>
              <h2 className="font-display text-2xl font-bold text-gold-bright">
                Todos os campeões
              </h2>
              <p className="text-sm text-muted-foreground">
                Filtre por função, dificuldade e tier para achar seu pick
              </p>
            </div>
          </div>

          {/* Filtros */}
          <div className="space-y-3 rounded-lg border border-border bg-card/60 p-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-1 text-xs font-bold uppercase tracking-wide text-muted-foreground">
                Função
              </span>
              {CLASS_FILTERS.map((f) => (
                <FilterChip
                  key={f.value}
                  active={filters.classe === f.value}
                  color={
                    f.value !== "todas" ? CLASS_META[f.value].color : undefined
                  }
                  onClick={() =>
                    setFilters((s) => ({ ...s, classe: f.value }))
                  }
                >
                  {f.label}
                </FilterChip>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-1 text-xs font-bold uppercase tracking-wide text-muted-foreground">
                Dificuldade
              </span>
              {DIFFICULTY_FILTERS.map((f) => (
                <FilterChip
                  key={String(f.value)}
                  active={filters.dificuldade === f.value}
                  onClick={() =>
                    setFilters((s) => ({ ...s, dificuldade: f.value }))
                  }
                >
                  {f.label}
                </FilterChip>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-1 text-xs font-bold uppercase tracking-wide text-muted-foreground">
                Tier
              </span>
              {TIER_FILTERS.map((f) => (
                <FilterChip
                  key={f.value}
                  active={filters.tier === f.value}
                  color={f.value !== "todos" ? TIER_META[f.value].color : undefined}
                  onClick={() => setFilters((s) => ({ ...s, tier: f.value }))}
                >
                  {f.label}
                </FilterChip>
              ))}
            </div>
          </div>

          {/* Contagem + limpar */}
          <div className="mb-4 mt-4 flex items-center justify-between gap-3">
            <p className="text-sm text-muted-foreground" aria-live="polite">
              <strong className="text-gold-bright">{results.length}</strong>{" "}
              {results.length === 1 ? "campeão encontrado" : "campeões encontrados"}
            </p>
            {hasActiveFilters && (
              <Button
                variant="outline"
                size="sm"
                onClick={clearFilters}
                className="border-border text-muted-foreground hover:border-gold/50 hover:text-gold-bright"
              >
                <X className="mr-1.5 h-3.5 w-3.5" aria-hidden="true" />
                Limpar filtros
              </Button>
            )}
          </div>

          {results.length === 0 ? (
            <div className="rounded-lg border border-dashed border-border bg-card/40 p-10 text-center">
              <p className="font-display text-lg font-bold text-gold-bright">
                Nenhum campeão encontrado
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Tente outro nome ou remova alguns filtros.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5">
              {results.map((c) => (
                <ChampionCard key={c.id} champion={c} onSelect={handleSelect} />
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />

      <ChampionDialog
        champion={selected}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </>
  );
}
