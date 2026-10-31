"use client";

// ============================================================
// Topo do Rift — Tutorial interativo
// Passo a passo de como usar cada ferramenta do guia, com
// atalhos, links diretos para cada seção e botão de retorno
// à tela principal.
// ============================================================
import * as React from "react";
import {
  Search,
  MousePointerClick,
  ListFilter,
  Heart,
  BarChart3,
  Map,
  GitCompareArrows,
  Package,
  Palette,
  GraduationCap,
  ArrowLeft,
  Home,
  Lightbulb,
  Swords,
  ClipboardCopy,
  Download,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Step {
  icon: typeof Search;
  href: string;
  title: string;
  desc: string;
  tip?: string;
  color: string;
}

const STEPS: Step[] = [
  {
    icon: Search,
    href: "#inicio",
    title: "Busca instantânea",
    desc: "Aperte a tecla / a qualquer momento (ou use a barra no topo) e digite o nome do campeão — Darius, Garen, Fiora...",
    tip: "A busca filtra os cards populares e a lista completa ao mesmo tempo.",
    color: "#F0B93C",
  },
  {
    icon: MousePointerClick,
    href: "#populares",
    title: "Cards com segredos no hover",
    desc: "Passe o mouse sobre qualquer card para ver a taxa de vitória e o efeito de brilho. Clique para abrir a build completa.",
    tip: "O detalhe do campeão abre em uma janela — sem sair da página.",
    color: "#0AC8B9",
  },
  {
    icon: ListFilter,
    href: "#campeoes",
    title: "Filtros inteligentes",
    desc: "Na lista completa, combine função (Lutador, Tanque...), dificuldade e tier (S/A/B) até achar seu pick ideal.",
    tip: "Use \"Limpar filtros\" para recomeçar do zero com um clique.",
    color: "#C8AA6E",
  },
  {
    icon: Heart,
    href: "#favoritos",
    title: "Favoritos sem cadastro",
    desc: "Toque no coração no canto de qualquer card. Seus picks ficam salvos no navegador — nem precisa de conta.",
    tip: "O filtro \"Só favoritos\" mostra apenas os seus salvos.",
    color: "#E05A75",
  },
  {
    icon: Swords,
    href: "#matchup-do-dia",
    title: "Matchup do dia",
    desc: "Todo dia um confronto novo em destaque: quem leva vantagem, por quê e o plano de jogo para vencer a lane.",
    tip: "Volte amanhã — o confronto troca sozinho, sem recarregar nada.",
    color: "#C8324B",
  },
  {
    icon: BarChart3,
    href: "#tierlist",
    title: "Tier list clicável",
    desc: "Os 12 maiores win rates da rota do topo, com variação da patch, ban e pick rate. Clique na linha e a build abre na hora.",
    tip: "Na aba \"Comparar\" você vê quem subiu e quem caiu de tier entre a patch anterior e a atual.",
    color: "#4EC9D4",
  },
  {
    icon: Map,
    href: "#mapa",
    title: "Mapa interativo",
    desc: "Ligue e desligue as camadas Rotas, Selva e Wards sobre o Summoner's Rift oficial e passe o mouse nos pontos.",
    tip: "Repare: os buffs ficam \"cruzados\" — o azul do time azul fica perto do Barão.",
    color: "#7FB069",
  },
  {
    icon: GitCompareArrows,
    href: "#comparador",
    title: "Comparador de matchups",
    desc: "Escolha até 3 campeões e veja runas, feitiços, itens e ordem de habilidades lado a lado.",
    tip: "Perfeito antes de uma ranked: sabe exatamente quem leva vantagem no 1v1.",
    color: "#A25CE8",
  },
  {
    icon: Package,
    href: "#itens",
    title: "Busca de itens em PT e EN",
    desc: "Procure por \"Trindade\" ou \"Trinity Force\", filtre por categoria e ordene por preço — com ícones oficiais.",
    tip: "Clique no item para ver quais campeões do guia o usam.",
    color: "#D08B4C",
  },
  {
    icon: ClipboardCopy,
    href: "#campeoes",
    title: "Copiar build em 1 clique",
    desc: "Abra qualquer campeão e toque em \"Copiar build\" — runas, feitiços, habilidades e itens vão como texto pronto para colar.",
    tip: "Cole no Discord antes da ranked para o time conferir a composição.",
    color: "#C8AA6E",
  },
  {
    icon: Palette,
    href: "#inicio",
    title: "Temas de cor",
    desc: "O botão Hextech no topo alterna entre o escuro clássico, o modo claro e variações alternativas — escolha o seu.",
    tip: "Sua escolha de tema também fica salva no navegador.",
    color: "#E8902F",
  },
  {
    icon: GraduationCap,
    href: "#academia",
    title: "Academia do Topo",
    desc: "Macro que nenhuma build ensina: controle de onda, timers de objetivo, metas de farm e o uso do Teleporte.",
    tip: "Comece por \"Gerenciamento de onda\" — é o que mais muda seu elo.",
    color: "#F0B93C",
  },
  {
    icon: Download,
    href: "#inicio",
    title: "Instalar no celular",
    desc: "O guia é um app: toque no botão de instalar (no rodapé ou no topo) e o Topo do Rift entra na sua tela inicial, com ícone próprio.",
    tip: "No iPhone: use Compartilhar → \"Adicionar à Tela de Início\".",
    color: "#0AC8B9",
  },
];

export function Tutorial() {
  const goHome = React.useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.replaceState(null, "", "#inicio");
  }, []);

  return (
    <div className="space-y-6">
      {/* Botão discreto de retorno no topo da seção */}
      <div className="flex justify-end">
        <button
          type="button"
          onClick={goHome}
          className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-bold text-muted-foreground transition-colors hover:border-gold/60 hover:text-gold-bright focus-visible:outline-2 focus-visible:outline-gold"
        >
          <Home className="h-3.5 w-3.5" aria-hidden="true" />
          Voltar à tela principal
        </button>
      </div>

      {/* Passos */}
      <ol className="grid list-none gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {STEPS.map((s, i) => {
          const Icon = s.icon;
          return (
            <li key={s.title}>
              <a
                href={s.href}
                className={cn(
                  "card-hover-lift card-shine group flex h-full items-start gap-3 rounded-lg border border-border bg-card/60 p-4 focus-visible:outline-2 focus-visible:outline-gold"
                )}
              >
                <span
                  className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border"
                  style={{ borderColor: `${s.color}66`, color: s.color }}
                  aria-hidden="true"
                >
                  <Icon className="h-5 w-5" />
                  <span className="absolute -right-1.5 -top-1.5 flex h-4.5 w-4.5 min-w-[18px] items-center justify-center rounded-full bg-gold px-1 font-display text-[10px] font-black text-black">
                    {i + 1}
                  </span>
                </span>
                <span className="min-w-0">
                  <span className="flex items-center gap-1.5 font-display text-sm font-bold text-foreground transition-colors group-hover:text-gold-bright">
                    {s.title}
                  </span>
                  <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
                    {s.desc}
                  </span>
                  {s.tip && (
                    <span className="mt-2 flex items-start gap-1 text-[11px] font-semibold text-gold/90">
                      <Lightbulb className="mt-0.5 h-3 w-3 shrink-0" aria-hidden="true" />
                      {s.tip}
                    </span>
                  )}
                </span>
              </a>
            </li>
          );
        })}
      </ol>

      {/* CTA final — voltar à tela principal */}
      <div className="hextech-border relative overflow-hidden rounded-lg bg-gradient-to-b from-secondary/80 to-abyss px-6 py-8 text-center">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 55% 70% at 50% 0%, color-mix(in srgb, var(--gold) 14%, transparent), transparent 70%)",
          }}
        />
        <p className="relative font-display text-xl font-black text-gold-bright">
          Pronto — agora você conhece o guia inteiro
        </p>
        <p className="relative mx-auto mt-2 max-w-md text-sm text-muted-foreground">
          Volte para a tela principal, escolha seu campeão e domine a rota
          superior. Bons jogos, invocador!
        </p>
        <button
          type="button"
          onClick={goHome}
          className="gold-glow-hover relative mt-5 inline-flex items-center gap-2 rounded-lg border border-gold/60 bg-gradient-to-b from-gold to-gold-dark px-6 py-3 font-display text-sm font-black uppercase tracking-wide text-black shadow-lg transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-gold"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Voltar à tela principal
        </button>
      </div>
    </div>
  );
}
