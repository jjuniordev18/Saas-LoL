"use client";

// ============================================================
// Topo do Rift — Academia do Topo (Macro 101)
// Conteúdo de macro autoral para iniciantes/intermediários:
// gerenciamento de onda, timers de objetivo (Temporada 2026),
// metas de farm, guia de Teleporte e glossário do roteiro.
// ============================================================
import * as React from "react";
import {
  Waves,
  Timer,
  GraduationCap,
  Snowflake,
  MoveRight,
  Zap,
  Undo2,
  Swords,
  Skull,
  Mountain,
  Flame,
  Sparkles,
  Bot,
  Wheat,
  Wand2,
  ChevronDown,
  BookOpen,
  Info,
} from "lucide-react";
import { InfoTooltip } from "./pieces";
import { cn } from "@/lib/utils";

// ------------------------------------------------------------
// Gerenciamento de onda
// ------------------------------------------------------------
const WAVE_TECHS = [
  {
    icon: Snowflake,
    color: "#7CC7E8",
    name: "Congelar (Freeze)",
    what: "Segurar a onda parada perto da SUA torre, fora do alcance do inimigo, mantendo 3–4 tropas inimigas vivas a mais.",
    when: "Quando você venceu a rota e quer negar farm/XP, ou quando está frágil e precisa farmar com segurança perto da torre.",
    care: "Congelar muito perto da torre quebra o freeze; e um freeze estático deixa você vulnerável a gank — ward antes.",
  },
  {
    icon: MoveRight,
    color: "#E8902F",
    name: "Empurrão lento (Slow push)",
    what: "Deixar a onda crescer pouco a pouco até virar uma legião que quebra a torre sozinha.",
    when: "Antes de recall ou rotação: construa o slow push, depois volte/bata — o inimigo perde tropas e XP na torre.",
    care: "Leva ~2 ondas para carregar; se a briga do Dragão aparecer antes, você fica preso na rota.",
  },
  {
    icon: Zap,
    color: "#F0B93C",
    name: "Empurrão rápido (Shove)",
    what: "Ligar a onda inteira o mais rápido possível para que ela bata na torre imediatamente.",
    when: "Para resetar em sincronia com o inimigo, negar farm quando ele recalla, ou responder um roam do mid.",
    care: "Onda empurrada = você avançado sem visão. Ward antes de empurrar além do meio da rota.",
  },
  {
    icon: Undo2,
    color: "#C8324B",
    name: "Bounce (Recuo da onda)",
    what: "Quando a onda bate na torre inimiga e volta mais forte para você — o ciclo natural de toda rota.",
    when: "Antes de objetivos: dê bounce no top e apareça no Dragão com TP em vantagem de onda.",
    care: "Quem domina o bounce controla o tempo do jogo; quem ignora, farma sob torre o tempo todo.",
  },
] as const;

// ------------------------------------------------------------
// Timers de objetivo — Temporada 2026 (verificados patch 26.21)
// ------------------------------------------------------------
const OBJECTIVES = [
  {
    icon: Flame,
    color: "#E05A75",
    time: "5:00 · a cada 5 min",
    name: "Dragões",
    desc: "Bônus permanentes por dragão; o 4º dá a Alma do Dragão. Depois, nasce o Ancião.",
    topPlay: "Com TP pronto, você decide toda briga de dragão — anuncie o timer ao seu time.",
  },
  {
    icon: Bot,
    color: "#0AC8B9",
    time: "8:00 · saem 14:45",
    name: "Voidgrubs (Larvas do Vazio)",
    desc: "3 larvas no fosso do Barão, nascem uma única vez e vão embora sem respawn. Recompensa máxima: 3 grubs.",
    topPlay: "Chegue com a onda empurrada; grubs cedo valem placas de torre no seu side.",
  },
  {
    icon: Mountain,
    color: "#E8902F",
    time: "15:00 · sai 19:45",
    name: "Arauto da Fenda",
    desc: "Uma única Arauto: solte-a na rota com mais pressão para derrubar a primeira torre.",
    topPlay: "Como top laner, é SEU objetivo: peça o eye e abra a rota com ela.",
  },
  {
    icon: Sparkles,
    color: "#A25CE8",
    time: "~14–20 min · uma vez",
    name: "Atakhan",
    desc: "Épico de meio de jogo (forma única Thornbound na temporada): buff de equipe no estilo de alma. O jogo anuncia quando ele aparece.",
    topPlay: "Nunca dispute sem visão e sem ults; o buff perdido alimenta o snowball inimigo.",
  },
  {
    icon: Skull,
    color: "#C8324B",
    time: "20:00 · reaparece ~6 min",
    name: "Barão Nashor",
    desc: "O objetivo de late game: buff que fortalece tropas e siege. Nunca 'abre' o Barão sem visão do jungle inimigo.",
    topPlay: "Com Barão vivo, segure a onda do top e force o inimigo a escolher entre perder torre ou o Barão.",
  },
] as const;

// ------------------------------------------------------------
// Metas de farm (CS/min) — referência para evolução
// ------------------------------------------------------------
const CS_GOALS = [
  { elo: "Ferro → Prata", csMin: "4–5", cs10: "40–55", note: "Foco: não perder tropa para a torre." },
  { elo: "Ouro", csMin: "6–7", cs10: "60–70", note: "Farme também o jungle do inimigo quando empurrado." },
  { elo: "Platina → Esmeralda", csMin: "7–8", cs10: "70–80", note: "Reset sincronizado; quase nenhuma tropa perdida." },
  { elo: "Diamante+", csMin: "8–9", cs10: "80–90", note: "Wave management perfeito e farm de side no mid game." },
] as const;

// ------------------------------------------------------------
// Glossário do topo
// ------------------------------------------------------------
const GLOSSARY = [
  { term: "Freeze (Congelar)", def: "Onda parada perto da sua torre, negando farm ao inimigo." },
  { term: "Slow push (Empurrão lento)", def: "Acumular tropas aos poucos até a onda bater forte na torre inimiga." },
  { term: "Proxy", def: "Farmar ATRÁS da torre inimiga — arriscado, mas trava o inimigo sob a torre." },
  { term: "Splitpush", def: "Pressionar uma rota sozinho enquanto o time cria pressão do outro lado." },
  { term: "Bounce", def: "Onda que bate na torre e volta para você — timing de controle de rota." },
  { term: "Dive", def: "Matar alguém sob a torre, ignorando o dano dela por alguns segundos." },
  { term: "Kiting", def: "Atacar enquanto se move para trás — manter distância sem parar de bater." },
  { term: "Powerspike", def: "Marco (nível, item ou runa) em que o campeão fica visivelmente mais forte." },
  { term: "Sideline / Side lane", def: "Rotas laterais (top/bot) no mid e late game — o território do top laner." },
  { term: "Deep ward", def: "Ward colocado DENTRO da selva inimiga, antecipando ganks e rotações." },
  { term: "Roam", def: "Sair da rota para criar jogadas em outra — a especialidade da Quinn." },
  { term: "Reset sincronizado", def: "Recall junto com o inimigo, para que nenhum dos dois perca tropas." },
] as const;

// ------------------------------------------------------------
// Componente
// ------------------------------------------------------------
export function TopAcademy() {
  const [openGlossary, setOpenGlossary] = React.useState(false);

  return (
    <div className="space-y-5">
      {/* Gerenciamento de onda */}
      <div>
        <p className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-muted-foreground">
          <Waves className="h-4 w-4 text-gold" aria-hidden="true" />
          As 4 técnicas de onda
          <InfoTooltip content="O top lane é a rota do wave management: quem controla a onda controla o farm, o gank e os objetivos.">
            <span tabIndex={0} role="note" aria-label="Sobre gerenciamento de onda" className="cursor-help">
              <Info className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
            </span>
          </InfoTooltip>
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {WAVE_TECHS.map((w) => {
            const Icon = w.icon;
            return (
              <div
                key={w.name}
                className="card-hover-lift rounded-lg border border-border bg-card p-4"
              >
                <p className="flex items-center gap-2 font-display text-sm font-black text-foreground">
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border"
                    style={{ borderColor: `${w.color}66`, color: w.color, backgroundColor: `${w.color}14` }}
                    aria-hidden="true"
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  {w.name}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-foreground/90">
                  <strong className="text-gold">O que é:</strong> {w.what}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-foreground/90">
                  <strong className="text-gold">Quando:</strong> {w.when}
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                  <strong className="text-rose-300">Cuidado:</strong> {w.care}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Timers de objetivo */}
      <div>
        <p className="mb-3 flex flex-wrap items-center gap-2 text-sm font-bold uppercase tracking-wide text-muted-foreground">
          <Timer className="h-4 w-4 text-gold" aria-hidden="true" />
          Timers de objetivo — Temporada 2026
          <span className="rounded-full border border-frame/50 bg-muted px-2 py-0.5 text-[10px] font-semibold normal-case tracking-normal">
            referência do patch 26.21 — pode variar em atualizações
          </span>
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[560px] text-left text-sm">
            <caption className="sr-only">
              Timers de nascimento dos objetivos do Summoner&apos;s Rift e o papel do top laner em cada um
            </caption>
            <thead>
              <tr className="border-b border-border bg-muted/60 text-xs uppercase tracking-wide text-muted-foreground">
                <th scope="col" className="px-3 py-2.5 font-bold">Objetivo</th>
                <th scope="col" className="px-3 py-2.5 font-bold">Horário</th>
                <th scope="col" className="px-3 py-2.5 font-bold">O que é</th>
                <th scope="col" className="px-3 py-2.5 font-bold">O papel do topo</th>
              </tr>
            </thead>
            <tbody>
              {OBJECTIVES.map((o) => {
                const Icon = o.icon;
                return (
                  <tr key={o.name} className="border-b border-border/60 last:border-0 transition-colors hover:bg-gold/5">
                    <th scope="row" className="whitespace-nowrap px-3 py-3 font-display font-bold text-foreground">
                      <span className="flex items-center gap-2">
                        <span
                          className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border"
                          style={{ borderColor: `${o.color}88`, color: o.color }}
                          aria-hidden="true"
                        >
                          <Icon className="h-3.5 w-3.5" />
                        </span>
                        {o.name}
                      </span>
                    </th>
                    <td className="whitespace-nowrap px-3 py-3 font-mono text-xs font-bold text-gold">{o.time}</td>
                    <td className="px-3 py-3 text-xs leading-relaxed text-foreground/85">{o.desc}</td>
                    <td className="px-3 py-3 text-xs leading-relaxed text-muted-foreground">{o.topPlay}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Farm + TP */}
      <div className="grid gap-4 lg:grid-cols-2">
        {/* Metas de farm */}
        <div className="rounded-lg border border-border bg-card p-4">
          <p className="mb-1 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-muted-foreground">
            <Wheat className="h-4 w-4 text-gold" aria-hidden="true" />
            Metas de farm (CS)
          </p>
          <p className="mb-3 text-xs leading-relaxed text-muted-foreground">
            CS = tropas abatidas. O topo vive de farm: compare-se com a meta do seu elo, não com o proplayer.
          </p>
          <ul className="space-y-2">
            {CS_GOALS.map((g) => (
              <li key={g.elo} className="rounded-md border border-border/60 bg-muted/40 px-3 py-2">
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <span className="text-sm font-bold text-foreground">{g.elo}</span>
                  <span className="text-xs font-black text-gold">
                    {g.csMin} CS/min · {g.cs10} aos 10 min
                  </span>
                </div>
                <p className="mt-0.5 text-xs text-muted-foreground">{g.note}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Guia de TP */}
        <div className="rounded-lg border border-border bg-card p-4">
          <p className="mb-1 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-muted-foreground">
            <Wand2 className="h-4 w-4 text-gold" aria-hidden="true" />
            Quando usar o Teleporte
          </p>
          <p className="mb-3 text-xs leading-relaxed text-muted-foreground">
            TP é o feitiço mais decisivo do topo — o erro clássico é gastá-lo cedo e chorar no Dragão.
          </p>
          <ul className="space-y-2 text-sm leading-relaxed text-foreground/90">
            <li className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
              <span><strong className="text-gold">TP de linha (antes de 14 min):</strong> voltou à base com onda acumulada? Use para não perder farm — nunca dê free wave para o inimigo.</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
              <span><strong className="text-gold">TP de flanco (depois de 14 min):</strong> guarde para entrar POR TRÁS nas brigas de Arauto/Dragão — o flanco do topo decide o jogo.</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
              <span><strong className="text-gold">TP de split:</strong> com Hullbreaker/Guardian Angel, pressione a rota oposta ao Barão e force o 1v1 — ou o inimigo perde a base.</span>
            </li>
            <li className="flex gap-2 rounded-md border border-gold/25 bg-gold/5 p-2.5">
              <Swords className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              <span className="text-xs"><strong className="text-gold">Regra de ouro:</strong> se o TP está pronto e o Dragão nasce em 1 min, não gaste em farm — segure.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Glossário */}
      <div className="rounded-lg border border-border bg-card p-4">
        <button
          type="button"
          onClick={() => setOpenGlossary((v) => !v)}
          aria-expanded={openGlossary}
          aria-controls="glossario-topo"
          className="flex w-full items-center justify-between gap-3 text-left focus-visible:outline-2 focus-visible:outline-gold"
        >
          <span className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-muted-foreground">
            <BookOpen className="h-4 w-4 text-gold" aria-hidden="true" />
            Dicionário do topo (PT-BR ⇄ EN)
          </span>
          <ChevronDown
            className={cn("h-4 w-4 shrink-0 text-gold transition-transform", openGlossary && "rotate-180")}
            aria-hidden="true"
          />
        </button>
        {openGlossary && (
          <dl id="glossario-topo" className="animate-fade-in-up mt-3 grid gap-2 sm:grid-cols-2">
            {GLOSSARY.map((g) => (
              <div key={g.term} className="rounded-md border border-border/60 bg-muted/40 px-3 py-2">
                <dt className="text-xs font-black text-gold-bright">{g.term}</dt>
                <dd className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{g.def}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>

      {/* Fonte */}
      <p className="flex items-start gap-1.5 text-[11px] leading-relaxed text-muted-foreground">
        <GraduationCap className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" aria-hidden="true" />
        Conteúdo de macro autoral do Topo do Rift, alinhado ao patch 26.21 (Temporada 2026). Timers confirmados
        em guias atualizados de objetivos (Voidgrubs 8:00, Arauto 15:00, Barão 20:00).
      </p>
    </div>
  );
}
