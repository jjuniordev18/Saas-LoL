"use client";

// ============================================================
// Topo do Rift — Página inicial
// Busca + cards populares + favoritos + comparador + lista com filtros
// ============================================================
import * as React from "react";
import { Search, Swords, Crown, ListFilter, X, Flame, GitCompareArrows, Heart, Star, Map, Package, BarChart3, ArrowUp, GraduationCap } from "lucide-react";
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
import { CLASS_META, DIFFICULTY_META, TIER_META, PATCH_VERSION, ITEMS } from "@/lib/lol/data";
import type { Champion } from "@/lib/lol/data";
import { cn } from "@/lib/utils";
import { useFavorites } from "@/lib/lol/favorites";
import { ChampionCard } from "@/components/lol/ChampionCard";
import { ChampionDialog } from "@/components/lol/ChampionDialog";
import { Comparator } from "@/components/lol/Comparator";
import { ItemSearch } from "@/components/lol/ItemSearch";
import { RiftMap } from "@/components/lol/RiftMap";
import { TopAcademy } from "@/components/lol/TopAcademy";
import { ThemeSwitcher } from "@/components/lol/ThemeSwitcher";
import { TierList } from "@/components/lol/TierList";

// ------------------------------------------------------------
// Cabeçalho fixo
// ------------------------------------------------------------
function Header({ favoritesCount }: { favoritesCount: number }) {
  return (
    <header className="sticky top-0 z-30 border-b border-frame/40 bg-hex-navy/90 backdrop-blur supports-[backdrop-filter]:bg-hex-navy/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <a
          href="#inicio"
          className="flex items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-gold rounded"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-md border border-frame/70 bg-gradient-to-b from-secondary to-abyss">
            <Swords className="h-5 w-5 text-gold" aria-hidden="true" />
          </span>
          <span className="hidden whitespace-nowrap font-display text-base font-black tracking-wide text-gold-gradient sm:inline sm:text-lg">
            Topo do Rift
          </span>
        </a>

        <nav aria-label="Navegação principal" className="flex items-center gap-0.5 sm:gap-2">
          <a
            href="#tierlist"
            className="hidden rounded-md px-2 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-gold-bright focus-visible:outline-2 focus-visible:outline-gold sm:flex sm:items-center sm:gap-1.5 sm:px-3 sm:text-sm"
          >
            <BarChart3 className="h-4 w-4 text-gold" aria-hidden="true" />
            Tier list
          </a>
          <a
            href="#mapa"
            className="hidden rounded-md px-2 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-gold-bright focus-visible:outline-2 focus-visible:outline-gold md:flex md:items-center md:gap-1.5 sm:px-3 sm:text-sm"
          >
            <Map className="h-4 w-4 text-gold" aria-hidden="true" />
            Mapa
          </a>
          <a
            href="#academia"
            className="hidden rounded-md px-2 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-gold-bright focus-visible:outline-2 focus-visible:outline-gold md:flex md:items-center md:gap-1.5 sm:px-3 sm:text-sm"
          >
            <GraduationCap className="h-4 w-4 text-gold" aria-hidden="true" />
            Academia
          </a>
          <a
            href="#comparador"
            className="hidden rounded-md px-2 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-gold-bright focus-visible:outline-2 focus-visible:outline-gold sm:flex sm:items-center sm:gap-1.5 sm:px-3 sm:text-sm"
          >
            <GitCompareArrows className="h-4 w-4 text-gold" aria-hidden="true" />
            Comparador
          </a>
          <a
            href="#itens"
            className="hidden rounded-md px-2 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-gold-bright focus-visible:outline-2 focus-visible:outline-gold md:flex md:items-center md:gap-1.5 sm:px-3 sm:text-sm"
          >
            <Package className="h-4 w-4 text-gold" aria-hidden="true" />
            Itens
          </a>
          <a
            href="#campeoes"
            className="rounded-md px-2 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-gold-bright focus-visible:outline-2 focus-visible:outline-gold sm:px-3 sm:text-sm"
          >
            Campeões
          </a>
          <a
            href="#favoritos"
            className="flex items-center gap-1.5 rounded-md px-2 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-gold-bright focus-visible:outline-2 focus-visible:outline-gold sm:px-3 sm:text-sm"
          >
            <Heart className="h-4 w-4 text-rose-400" aria-hidden="true" />
            <span className="hidden sm:inline">Favoritos</span>
            <span
              className={cn(
                "inline-flex h-5 min-w-5 items-center justify-center rounded-full px-1 text-[10px] font-bold",
                favoritesCount > 0
                  ? "bg-rose-500/20 text-rose-300"
                  : "bg-muted text-muted-foreground"
              )}
              aria-label={`${favoritesCount} favoritos salvos`}
            >
              {favoritesCount}
            </span>
          </a>
          <ThemeSwitcher />
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
    <footer className="mt-auto border-t border-frame/40 bg-hex-deep pb-[env(safe-area-inset-bottom)]">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-md border border-frame/70 bg-gradient-to-b from-secondary to-abyss">
              <Swords className="h-4 w-4 text-gold" aria-hidden="true" />
            </span>
            <span className="font-display text-sm font-bold text-gold-bright">
              Topo do Rift
            </span>
          </div>
          <nav aria-label="Links do rodapé" className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
            <a href="#tierlist" className="transition-colors hover:text-gold-bright">
              Tier list
            </a>
            <a href="#mapa" className="transition-colors hover:text-gold-bright">
              Mapa
            </a>
            <a href="#academia" className="transition-colors hover:text-gold-bright">
              Academia do Topo
            </a>
            <a href="#campeoes" className="transition-colors hover:text-gold-bright">
              Todos os campeões
            </a>
            <a href="#comparador" className="transition-colors hover:text-gold-bright">
              Comparador
            </a>
            <a href="#itens" className="transition-colors hover:text-gold-bright">
              Busca de itens
            </a>
            <a href="#favoritos" className="transition-colors hover:text-gold-bright">
              Favoritos
            </a>
            <a href="#inicio" className="transition-colors hover:text-gold-bright">
              Voltar ao topo
            </a>
          </nav>
        </div>
        <p className="mt-6 text-center text-xs leading-relaxed text-muted-foreground">
          Patch {PATCH_VERSION} · Taxa de vitória, ban e pick rate: Blitz.gg (Esmeralda+) ·{" "}
          Conteúdo educativo feito por fãs.{" "}
          Topo do Rift não é afiliado à Riot Games. League of Legends e todos os
          nomes e ícones de campeões são marcas da Riot Games, Inc.
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
// Botão "voltar ao topo" — aparece após rolagem
// ------------------------------------------------------------
function BackToTop() {
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!visible) return null;
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Voltar ao topo da página"
      className="animate-fade-in-up fixed bottom-5 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-frame/70 bg-card text-gold shadow-lg transition-all hover:scale-105 hover:border-gold hover:shadow-[0_0_14px_color-mix(in_srgb,var(--gold)_40%,transparent)] focus-visible:outline-2 focus-visible:outline-gold"
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </button>
  );
}

// ------------------------------------------------------------
// Página
// ------------------------------------------------------------
export default function Home() {
  const [filters, setFilters] = React.useState<ChampionFilters>(DEFAULT_FILTERS);
  const [favoriteOnly, setFavoriteOnly] = React.useState(false);
  const [selected, setSelected] = React.useState<Champion | null>(null);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const { favorites, isFavorite } = useFavorites();

  // Atalho de teclado: "/" foca a busca de campeões
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "/" || e.ctrlKey || e.metaKey || e.altKey) return;
      const t = e.target as HTMLElement | null;
      if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)) return;
      e.preventDefault();
      document.getElementById("busca-campeao")?.focus();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const favoriteChampions = React.useMemo(
    () => CHAMPIONS.filter((c) => isFavorite(c.id)),
    [favorites, isFavorite]
  );

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
    () =>
      favoriteOnly
        ? filterChampions(filters).filter((c) => isFavorite(c.id))
        : filterChampions(filters),
    [filters, favoriteOnly, favorites, isFavorite]
  );

  const hasActiveFilters =
    filters.classe !== "todas" ||
    filters.dificuldade !== "todas" ||
    filters.tier !== "todos" ||
    filters.query.trim() !== "" ||
    favoriteOnly;

  const handleSelect = (champion: Champion) => {
    setSelected(champion);
    setDialogOpen(true);
  };

  const clearFilters = () => setFilters(DEFAULT_FILTERS);

  return (
    <>
      <Header favoritesCount={favorites.length} />

      <main id="inicio" className="flex-1">
        {/* ---------- Hero + busca ---------- */}
        <section className="relative overflow-hidden border-b border-frame/30">
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse 60% 55% at 50% 0%, var(--glow-1), transparent 70%)",
            }}
          />
          <div className="relative mx-auto max-w-6xl px-4 py-14 text-center sm:py-20">
            <p className="animate-float mb-3 inline-flex items-center gap-2 rounded-full border border-frame/50 bg-card px-3.5 py-1.5 text-xs font-semibold text-gold">
              <Flame className="h-3.5 w-3.5" aria-hidden="true" />
              Patch {PATCH_VERSION} · Temporada 2026
            </p>
            <h1 className="font-display text-4xl font-black leading-tight text-gold-gradient sm:text-5xl md:text-6xl">
              Domine a rota superior
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-balance text-sm leading-relaxed text-muted-foreground sm:text-base">
              Builds atualizadas com ícones oficiais, runas, feitiços, ordem de
              habilidades, comparador de matchups de até 3 campeões, busca de
              itens em português e inglês, tier list com dados do Blitz.gg e
              favoritos salvos no seu navegador — direto ao ponto, para
              iniciantes e intermediários.
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
              <p className="mt-2 text-center text-[11px] text-muted-foreground">
                Dica: aperte{" "}
                <kbd className="rounded border border-border bg-card px-1.5 py-0.5 font-mono text-[10px] font-bold text-gold">/</kbd>{" "}
                a qualquer momento para buscar
              </p>
            </div>

            {/* Estatísticas rápidas */}
            <dl className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-3 text-center sm:grid-cols-4">
              {[
                { label: "Campeões", value: CHAMPIONS.length },
                { label: "Itens catalogados", value: Object.keys(ITEMS).length },
                { label: "Tier S", value: CHAMPIONS.filter((c) => c.tier === "S").length },
                { label: "Seus favoritos", value: favorites.length },
              ].map((s) => (
                <div
                  key={s.label}
                  className="card-hover-lift rounded-lg border border-border bg-card/60 px-3 py-3"
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

        {/* ---------- Tier list da patch (Blitz.gg) ---------- */}
        <section id="tierlist" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-12">
          <div className="mb-8 flex items-center gap-3">
            <BarChart3 className="h-6 w-6 text-gold" aria-hidden="true" />
            <div>
              <h2 className="section-underline font-display text-2xl font-bold text-gold-bright">
                Tier list do topo — dados Blitz.gg
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Os 12 maiores win rates da rota superior em Esmeralda+ — clique
                na linha para abrir a build completa do campeão
              </p>
            </div>
          </div>
          <TierList onSelectDetail={handleSelect} />
        </section>

        {/* ---------- Mapa do Summoner's Rift ---------- */}
        <section id="mapa" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-12">
          <div className="mb-8 flex items-center gap-3">
            <Map className="h-6 w-6 text-gold" aria-hidden="true" />
            <div>
              <h2 className="section-underline font-display text-2xl font-bold text-gold-bright">
                O Summoner's Rift
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                O mapa oficial 5v5 com as 3 rotas desenhadas, os 12 acampamentos
                da selva, objetivos épicos e wards — passe o mouse pelos pontos
                para entender onde a rota superior se encaixa no jogo
              </p>
            </div>
          </div>
          <RiftMap />
        </section>

        {/* ---------- Academia do Topo (macro) ---------- */}
        <section id="academia" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-12">
          <div className="mb-6 flex items-center gap-3">
            <GraduationCap className="h-6 w-6 text-gold" aria-hidden="true" />
            <div>
              <h2 className="section-underline font-display text-2xl font-bold text-gold-bright">
                Academia do Topo — Macro 101
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                O que separa iniciantes de veteranos: controle de onda, timers de
                objetivo, metas de farm e o uso correto do Teleporte — o
                conteúdo que nenhuma build avisa
              </p>
            </div>
          </div>
          <TopAcademy />
        </section>

        {/* ---------- Populares ---------- */}
        <section id="populares" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-12">
          <div className="mb-6 flex items-center gap-3">
            <Crown className="h-6 w-6 text-gold" aria-hidden="true" />
            <div>
              <h2 className="section-underline font-display text-2xl font-bold text-gold-bright">
                Campeões populares
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
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

        {/* ---------- Favoritos ---------- */}
        <section id="favoritos" className="mx-auto max-w-6xl scroll-mt-20 px-4 pb-12">
          <div className="mb-6 flex items-center gap-3">
            <Heart className="h-6 w-6 text-rose-400" aria-hidden="true" />
            <div>
              <h2 className="section-underline font-display text-2xl font-bold text-gold-bright">
                Seus favoritos
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Salvos no navegador — estejam aqui sempre que você voltar
              </p>
            </div>
          </div>

          {favoriteChampions.length === 0 ? (
            <div className="rounded-lg border border-dashed border-border bg-card/40 p-8 text-center">
              <p className="flex items-center justify-center gap-2 font-display text-lg font-bold text-gold-bright">
                <Star className="h-5 w-5 text-gold" aria-hidden="true" />
                Nenhum favorito ainda
              </p>
              <p className="mx-auto mt-1 max-w-md text-sm text-muted-foreground">
                Toque no <Heart className="inline h-3.5 w-3.5 text-rose-400" aria-hidden="true" /> no
                canto de qualquer card para salvar a build aqui — fica gravado no
                seu navegador, sem cadastro.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4">
              {favoriteChampions.map((c) => (
                <ChampionCard key={c.id} champion={c} onSelect={handleSelect} />
              ))}
            </div>
          )}
        </section>

        {/* ---------- Comparador ---------- */}
        <section id="comparador" className="mx-auto max-w-6xl scroll-mt-20 px-4 pb-12">
          <div className="mb-6 flex items-center gap-3">
            <GitCompareArrows className="h-6 w-6 text-gold" aria-hidden="true" />
            <div>
              <h2 className="section-underline font-display text-2xl font-bold text-gold-bright">
                Comparador de matchups — até 3 lados
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Escolha dois ou três campeões e veja runas, feitiços e build
                lado a lado — com ranking de quem leva vantagem em cada
                confronto
              </p>
            </div>
          </div>

          <Comparator onSelectDetail={handleSelect} />
        </section>

        {/* ---------- Busca de itens ---------- */}
        <section id="itens" className="mx-auto max-w-6xl scroll-mt-20 px-4 pb-12">
          <div className="mb-6 flex items-center gap-3">
            <Package className="h-6 w-6 text-gold" aria-hidden="true" />
            <div>
              <h2 className="section-underline font-display text-2xl font-bold text-gold-bright">
                Busca por item
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Pesquise qualquer item do guia, filtre por categoria, ordene por
                preço e descubra quem usa — com ícones oficiais do patch
              </p>
            </div>
          </div>

          <ItemSearch onSelectDetail={handleSelect} />
        </section>

        {/* ---------- Todos os campeões + filtros ---------- */}
        <section
          id="campeoes"
          className="mx-auto max-w-6xl scroll-mt-20 px-4 pb-16"
        >
          <div className="mb-6 flex items-center gap-3">
            <ListFilter className="h-6 w-6 text-gold" aria-hidden="true" />
            <div>
              <h2 className="section-underline font-display text-2xl font-bold text-gold-bright">
                Todos os campeões
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
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

            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-1 text-xs font-bold uppercase tracking-wide text-muted-foreground">
                Extras
              </span>
              <FilterChip active={favoriteOnly} onClick={() => setFavoriteOnly(!favoriteOnly)}>
                <Heart className={cn("mr-1 inline h-3 w-3", favoriteOnly ? "fill-current" : "")} aria-hidden="true" />
                Só favoritos ({favorites.length})
              </FilterChip>
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
                onClick={() => {
                  clearFilters();
                  setFavoriteOnly(false);
                }}
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

      <BackToTop />
      <Footer />

      <ChampionDialog
        champion={selected}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </>
  );
}
