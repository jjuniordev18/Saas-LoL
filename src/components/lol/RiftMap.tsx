"use client";

// ============================================================
// Topo do Rift — Mapa do Summoner's Rift incorporado
// Arte oficial (Data Dragon) + camadas: rotas, selva, objetivos e wards.
// Base azul = canto inferior-esquerdo · Barão = alto-esquerdo · Dragão = baixo-direito.
// ============================================================
import * as React from "react";
import {
  MapPin, Crown, Flame, Mountain, Skull, Home, ArrowUpRight, Eye,
  EyeOff, Route, PawPrint, Bird, Shell, Leaf, Snowflake, FlameKindling, Pickaxe, Trees,
} from "lucide-react";
import { InfoTooltip } from "./pieces";
import { RIFT_MAP_URL } from "@/lib/lol/ddragon";
import { cn } from "@/lib/utils";

type Group = "objective" | "camp" | "ward";

interface MapPoint {
  id: string;
  /** posição em % dentro do mapa (left, top) */
  x: number;
  y: number;
  label: string;
  desc: string;
  icon: typeof MapPin;
  color: string;
  group: Group;
  /** lado do mapa (para colorir o anel dos acampamentos) */
  side?: "blue" | "red" | "river";
  highlight?: boolean;
}

// ------------------------------------------------------------
// Rotas (desenhadas como SVG sobre o mapa)
// ------------------------------------------------------------
const LANES = [
  {
    id: "lane-top",
    label: "Rota Superior (Top)",
    d: "M 15 85 C 7 62 7 34 20 20 C 36 8 62 7 85 14",
    color: "#F0B93C",
    width: 1.1,
    highlight: true,
  },
  {
    id: "lane-mid",
    label: "Rota do Meio (Mid)",
    d: "M 17 83 C 38 62 62 38 83 17",
    color: "#C8AA6E",
    width: 0.85,
    highlight: false,
  },
  {
    id: "lane-bot",
    label: "Rota Inferior (Bot)",
    d: "M 15 85 C 40 93 65 93 82 82 C 93 65 93 40 85 15",
    color: "#5C8AA0",
    width: 0.85,
    highlight: false,
  },
] as const;

// ------------------------------------------------------------
// Objetivos épicos + rotas + bases (sempre visíveis)
// No minimapa oficial (map11.png) a base azul fica no canto
// INFERIOR-esquerdo e a vermelha no canto SUPERIOR-direito;
// o fosso do Barão fica no trecho ALTO do rio e o do Dragão no BAIXO.
// ------------------------------------------------------------
const OBJECTIVES: MapPoint[] = [
  {
    id: "top",
    x: 30, y: 15,
    label: "Rota Superior (Top)",
    desc: "A rota mais isolada do mapa: duelos de 1v1 longos, splitpush e pouca ajuda — a mais competitiva de todas.",
    icon: Crown, color: "#F0B93C", group: "objective", highlight: true,
  },
  {
    id: "mid",
    x: 50, y: 50,
    label: "Rota do Meio (Mid)",
    desc: "A rota mais curta: magos e assassinos, acesso rápido aos dois lados do rio.",
    icon: MapPin, color: "#C8AA6E", group: "objective",
  },
  {
    id: "bot",
    x: 70, y: 85,
    label: "Rota Inferior (Bot)",
    desc: "Duo de atirador + suporte. Cuidado com o flanco: o jungle inimigo gosta de passar por aqui.",
    icon: MapPin, color: "#5C8AA0", group: "objective",
  },
  {
    id: "baron",
    x: 34, y: 30,
    label: "Barão Nashor",
    desc: "O objetivo mais importante do late game — no trecho ALTO do rio, perto do topo. Nasce aos 20:00. Abrir o Barão com o top laner segurando a onda é a jogada clássica.",
    icon: Skull, color: "#C8324B", group: "objective",
  },
  {
    id: "herald",
    x: 39, y: 34,
    label: "Arauto da Fenda",
    desc: "Nasce no mesmo fosso do Barão aos 14 minutos (sai aos 19:45): entregue ao top laner, ela derruba a primeira torre em segundos.",
    icon: Pickaxe, color: "#E8902F", group: "objective",
  },
  {
    id: "dragon",
    x: 66, y: 70,
    label: "Dragão",
    desc: "No trecho BAIXO do rio, perto do bot. Bônus permanentes para o time — Dragon Souls decidem partidas, e o top laner com TP decide as brigas.",
    icon: Flame, color: "#E05A75", group: "objective",
  },
  {
    id: "blue-base",
    x: 10, y: 90,
    label: "Base Azul",
    desc: "Fonte, Nexus e loja — canto inferior-esquerdo. Se você é azul, a sua torre de top fica na lateral esquerda do mapa.",
    icon: Home, color: "#3C9BD8", group: "objective",
  },
  {
    id: "red-base",
    x: 90, y: 10,
    label: "Base Vermelha",
    desc: "O Ninho do inimigo — canto superior-direito. Vitória = destruir o Nexus aqui, com a onda de top empurrada na frente.",
    icon: Home, color: "#E0564B", group: "objective",
  },
];

// ------------------------------------------------------------
// Selva: 12 acampamentos + 2 caranguejos
// Layout pontualmente simétrico: Gromp/Buff Azul/Lobos de um lado
// da rota do meio; Buff Vermelho/Rapazes/Krugs do outro.
// ------------------------------------------------------------
const CAMPS: MapPoint[] = [
  // --- metade azul (triângulo inferior-esquerdo) ---
  { id: "gromp-blue",   x: 16, y: 42, side: "blue", label: "Gromp (azul)",        icon: Leaf,           color: "#7FB069", group: "camp", desc: "Nasce 1:42 · respawn 2:15. O sapo venenoso guarda a entrada da selva perto do topo — o level 1 do jungler azul costuma começar aqui." },
  { id: "bluebuff-blue",x: 26, y: 47, side: "blue", label: "Buff Azul (azul)",    icon: Snowflake,      color: "#3C9BD8", group: "camp", desc: "Nasce 1:30 · respawn 5:00. Restaura mana e reduz cooldowns. Repare: o Buff Azul do time azul fica do lado do BARÃO." },
  { id: "wolves-blue",  x: 36, y: 57, side: "blue", label: "Lobos (azul)",        icon: PawPrint,       color: "#8B93A7", group: "camp", desc: "Nasce 1:42 · respawn 2:15. Acampamento rápido entre o Buff Azul e o meio — bom para junglers com clear em área." },
  { id: "raptors-blue", x: 48, y: 70, side: "blue", label: "Rapazes (azul)",      icon: Bird,           color: "#D08B4C", group: "camp", desc: "Nasce 1:42 · respawn 2:15. Pássaros frágeis que morrem em área — pune quem erra o clear. Vizinho do Buff Vermelho." },
  { id: "redbuff-blue", x: 53, y: 74, side: "blue", label: "Buff Vermelho (azul)",icon: FlameKindling,  color: "#E0564B", group: "camp", desc: "Nasce 1:30 · respawn 5:00. Regeneração de vida + queimadura que lentifica — o buff mais disputado do early game." },
  { id: "krugs-blue",   x: 58, y: 84, side: "blue", label: "Krugs (azul)",        icon: Mountain,       color: "#B0A08E", group: "camp", desc: "Nasce 1:42 · respawn 2:15. Pedras que se dividem: o acampamento mais demorado da selva, porém o que dá mais ouro." },
  { id: "scuttle-baron",x: 26, y: 26, side: "river", label: "Caranguejo (rio do Barão)", icon: Shell,   color: "#4EC9D4", group: "camp", desc: "Nasce 3:30 · respawn 3:30. Não ataca: dá visão do rio e velocidade fora de combate. Dispute sempre antes do primeiro objetivo." },
  // --- metade vermelha (triângulo superior-direito) ---
  { id: "gromp-red",    x: 84, y: 58, side: "red", label: "Gromp (vermelho)",     icon: Leaf,           color: "#7FB069", group: "camp", desc: "Espelho do Gromp azul, na selva superior-direita. Ward aqui revela o clear do jungler inimigo." },
  { id: "bluebuff-red", x: 74, y: 53, side: "red", label: "Buff Azul (vermelho)", icon: Snowflake,      color: "#3C9BD8", group: "camp", desc: "O Buff Azul do time vermelho fica do lado do DRAGÃO — os buffs ficam 'cruzados' no mapa." },
  { id: "wolves-red",   x: 64, y: 43, side: "red", label: "Lobos (vermelho)",     icon: PawPrint,       color: "#8B93A7", group: "camp", desc: "Espelho dos Lobos azuis, entre o Buff Azul vermelho e o meio." },
  { id: "raptors-red",  x: 52, y: 30, side: "red", label: "Rapazes (vermelho)",   icon: Bird,           color: "#D08B4C", group: "camp", desc: "Pertinho do fosso do Barão — deep ward aqui antecipa o clear inimigo antes do Arauto." },
  { id: "redbuff-red",  x: 47, y: 26, side: "red", label: "Buff Vermelho (vermelho)", icon: FlameKindling, color: "#E0564B", group: "camp", desc: "O Buff Vermelho do time vermelho nasce perto do rio do Barão — por isso o lado do Barão é tão disputado no early." },
  { id: "krugs-red",    x: 42, y: 16, side: "red", label: "Krugs (vermelho)",     icon: Mountain,       color: "#B0A08E", group: "camp", desc: "Espelho dos Krugs azuis, colados na rota do topo — cuidado ao overextend aqui." },
  { id: "scuttle-dragon",x: 74, y: 74, side: "river", label: "Caranguejo (rio do Dragão)", icon: Shell,  color: "#4EC9D4", group: "camp", desc: "Controla o rio do Dragão. Com TP pronto, o top laner chega cedo demais para o inimigo reagir." },
];

// ------------------------------------------------------------
// Pontos de ward (visão) — ligados/desligados por botão
// ------------------------------------------------------------
const WARDS: MapPoint[] = [
  {
    id: "ward-tri",
    x: 21, y: 23,
    label: "Arbusto Tri (top)",
    desc: "A entrada clássica de gank da rota do topo. Sem ward aqui, todo gank do jungle te pega empurrado.",
    icon: Eye, color: "#4EC9D4", group: "ward",
  },
  {
    id: "ward-lane",
    x: 24, y: 10,
    label: "Arbusto da lane",
    desc: "Ward de rota: enxerga quem avança pela lane e protege o push além do meio da rota.",
    icon: Eye, color: "#4EC9D4", group: "ward",
  },
  {
    id: "ward-river",
    x: 40, y: 27,
    label: "Arbusto do rio (Barão)",
    desc: "Enxerga as rotações para o Barão/Arauto. Um TP do inimigo vindo daqui é game-over do side.",
    icon: Eye, color: "#4EC9D4", group: "ward",
  },
  {
    id: "ward-deep",
    x: 51, y: 24,
    label: "Deep ward — selva inimiga",
    desc: "Ward avançado entre o Buff Vermelho e os Rapazes deles: antecipa ganks e dá tempo de recuar ou montar o counter-gank.",
    icon: Eye, color: "#4EC9D4", group: "ward",
  },
  {
    id: "ward-pit",
    x: 30, y: 35,
    label: "Visão do fosso do Barão",
    desc: "Antes de qualquer Arauto/Barão, a regra é: sem ward no fosso, não se abre objetivo — nunca.",
    icon: Eye, color: "#4EC9D4", group: "ward",
  },
];

// ------------------------------------------------------------
// Componente
// ------------------------------------------------------------
function LayerChip({
  active, onClick, icon: Icon, children, color,
}: {
  active: boolean;
  onClick: () => void;
  icon: typeof Eye;
  children: React.ReactNode;
  color: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-bold transition-colors focus-visible:outline-2 focus-visible:outline-gold",
        active
          ? "border-current bg-current/10"
          : "border-border bg-card text-muted-foreground hover:text-foreground"
      )}
      style={active ? { color } : undefined}
    >
      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
      {children}
    </button>
  );
}

function MapMarker({
  p, active, onActivate, small,
}: {
  p: MapPoint;
  active: boolean;
  onActivate: () => void;
  small?: boolean;
}) {
  const Icon = p.icon;
  return (
    <InfoTooltip
      content={
        <div className="space-y-1">
          <p className="font-semibold text-gold-bright">{p.label}</p>
          <p className="text-xs text-muted-foreground">{p.desc}</p>
        </div>
      }
    >
      <button
        type="button"
        onClick={onActivate}
        onFocus={onActivate}
        onMouseEnter={onActivate}
        aria-label={`${p.label}: ${p.desc}`}
        className={cn(
          "absolute -translate-x-1/2 -translate-y-1/2 rounded-full border-2 bg-black/60 backdrop-blur-sm transition-all hover:scale-125 focus-visible:outline-2 focus-visible:outline-gold",
          small ? "p-1" : "p-1.5",
          active && "scale-125"
        )}
        style={{
          left: `${p.x}%`,
          top: `${p.y}%`,
          borderColor: p.color,
          color: p.color,
          boxShadow: active ? `0 0 14px ${p.color}AA` : `0 0 8px ${p.color}55`,
        }}
      >
        <Icon className={cn(small ? "h-2.5 w-2.5 sm:h-3 sm:w-3" : "h-3.5 w-3.5 sm:h-4 sm:w-4")} aria-hidden="true" />
        {p.highlight && (
          <span aria-hidden="true" className="animate-pulse-ring absolute inset-0 rounded-full" />
        )}
      </button>
    </InfoTooltip>
  );
}

export function RiftMap() {
  const [failed, setFailed] = React.useState(false);
  const [active, setActive] = React.useState<string | null>(null);
  const [showLanes, setShowLanes] = React.useState(true);
  const [showCamps, setShowCamps] = React.useState(true);
  const [showWards, setShowWards] = React.useState(true);

  const camps = React.useMemo(() => (showCamps ? CAMPS : []), [showCamps]);
  const wards = React.useMemo(() => (showWards ? WARDS : []), [showWards]);
  const visibleCount = OBJECTIVES.length + camps.length + wards.length;

  const blueCamps = CAMPS.filter((c) => c.side === "blue");
  const redCamps = CAMPS.filter((c) => c.side === "red");
  const riverCamps = CAMPS.filter((c) => c.side === "river");

  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-start">
      {/* ============================ MAPA ============================ */}
      <div>
        {/* Alternadores de camada */}
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
            Pontos visíveis: {visibleCount}
          </p>
          <div className="flex flex-wrap items-center gap-1.5">
            <LayerChip active={showLanes} onClick={() => setShowLanes((v) => !v)} icon={Route} color="#F0B93C">
              Rotas
            </LayerChip>
            <LayerChip active={showCamps} onClick={() => setShowCamps((v) => !v)} icon={Trees} color="#7FB069">
              Selva
            </LayerChip>
            <LayerChip active={showWards} onClick={() => setShowWards((v) => !v)} icon={showWards ? Eye : EyeOff} color="#4EC9D4">
              Wards
            </LayerChip>
          </div>
        </div>

        <div
          className="hextech-border relative aspect-square w-full overflow-hidden rounded-lg"
          role="img"
          aria-label="Mapa do Summoner's Rift com rotas, acampamentos da selva, objetivos e pontos de ward marcados"
        >
          {failed ? (
            <div className="flex h-full w-full items-center justify-center bg-abyss text-center">
              <p className="max-w-xs text-sm text-muted-foreground">
                O mapa oficial não pôde ser carregado. Verifique sua conexão — a
                arte vem da Data Dragon da Riot Games.
              </p>
            </div>
          ) : (
            <>
              <img
                src={RIFT_MAP_URL}
                alt="Minimapa oficial do Summoner's Rift"
                width={1024}
                height={1024}
                loading="lazy"
                onError={() => setFailed(true)}
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* ---- Camada de ROTAS (SVG) ---- */}
              {showLanes && (
                <svg
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  className="pointer-events-none absolute inset-0 h-full w-full"
                  aria-hidden="true"
                >
                  {LANES.map((lane) => (
                    <g key={lane.id}>
                      {/* contorno escuro p/ contraste */}
                      <path
                        d={lane.d}
                        fill="none"
                        stroke="rgba(0,0,0,0.55)"
                        strokeWidth={lane.width + 0.9}
                        strokeLinecap="round"
                      />
                      <path
                        d={lane.d}
                        fill="none"
                        stroke={lane.color}
                        strokeWidth={lane.width}
                        strokeLinecap="round"
                        opacity={lane.highlight ? 0.95 : 0.7}
                      />
                    </g>
                  ))}
                </svg>
              )}

              {/* ---- Marcadores ---- */}
              {OBJECTIVES.map((p) => (
                <MapMarker key={p.id} p={p} active={active === p.id} onActivate={() => setActive(active === p.id ? null : p.id)} />
              ))}
              {camps.map((p) => (
                <MapMarker key={p.id} p={p} small active={active === p.id} onActivate={() => setActive(active === p.id ? null : p.id)} />
              ))}
              {wards.map((p) => (
                <MapMarker key={p.id} p={p} small active={active === p.id} onActivate={() => setActive(active === p.id ? null : p.id)} />
              ))}

              {/* Rótulo do foco */}
              <span className="pointer-events-none absolute left-1/2 top-[4%] -translate-x-1/2 rounded-full border border-gold/60 bg-black/70 px-3 py-1 font-display text-[11px] font-black tracking-wide text-gold backdrop-blur-sm sm:text-xs">
                ROTAS 5V5 · FOCO EM TOP
              </span>
            </>
          )}
        </div>
      </div>

      {/* ============================ LEGENDA ============================ */}
      <div className="space-y-4">
        <p className="text-sm leading-relaxed text-muted-foreground">
          O <strong className="text-gold-bright">Summoner&apos;s Rift</strong>{" "}
          é o mapa 5v5 clássico do League of Legends. A rota superior
          (traçado dourado) é o território deste guia: uma &ldquo;ilha&rdquo;
          isolada onde duelos de 1v1 decidem quem domina o flanco nordeste do
          mapa. Ative as camadas <strong className="text-foreground">Rotas</strong>,{" "}
          <strong className="text-foreground">Selva</strong> e{" "}
          <strong className="text-foreground">Wards</strong> acima do mapa.
        </p>

        {/* --- Objetivos e rotas --- */}
        <div>
          <p className="mb-1.5 text-[11px] font-black uppercase tracking-widest text-gold">
            Rotas &amp; objetivos épicos
          </p>
          <ul className="space-y-1" aria-label="Rotas e objetivos do mapa">
            {OBJECTIVES.map((h) => {
              const Icon = h.icon;
              return (
                <li key={h.id}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(h.id)}
                    onMouseLeave={() => setActive(null)}
                    onClick={() => setActive(h.id)}
                    className={cn(
                      "flex w-full items-start gap-2.5 rounded-md border border-transparent px-2.5 py-1.5 text-left transition-colors hover:border-gold/40 hover:bg-gold/5 focus-visible:outline-2 focus-visible:outline-gold",
                      active === h.id && "border-gold/40 bg-gold/5"
                    )}
                  >
                    <span
                      className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border"
                      style={{ borderColor: `${h.color}88`, color: h.color }}
                      aria-hidden="true"
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                    <span>
                      <span className="flex items-center gap-1.5 text-sm font-bold text-foreground">
                        {h.label}
                        {h.highlight && (
                          <span className="inline-flex items-center rounded-full bg-gold/15 px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wide text-gold">
                            nosso foco
                          </span>
                        )}
                      </span>
                      <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">
                        {h.desc}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* --- Selva (grade compacta) --- */}
        <div>
          <p className="mb-1.5 text-[11px] font-black uppercase tracking-widest text-gold">
            Selva — 12 acampamentos + caranguejos
          </p>
          <div className="space-y-2">
            {[
              { title: "Lado azul (canto inferior-esquerdo)", items: blueCamps, dot: "bg-[#3C9BD8]" },
              { title: "Lado vermelho (canto superior-direito)", items: redCamps, dot: "bg-[#E0564B]" },
              { title: "Rio", items: riverCamps, dot: "bg-[#4EC9D4]" },
            ].map((grp) => (
              <div key={grp.title}>
                <p className="mb-1 flex items-center gap-1.5 text-xs font-bold text-muted-foreground">
                  <span className={cn("inline-block h-2 w-2 rounded-full", grp.dot)} aria-hidden="true" />
                  {grp.title}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {grp.items.map((c) => {
                    const Icon = c.icon;
                    return (
                      <button
                        key={c.id}
                        type="button"
                        onMouseEnter={() => setActive(c.id)}
                        onMouseLeave={() => setActive(null)}
                        onClick={() => setActive(c.id)}
                        title={`${c.label}: ${c.desc}`}
                        className={cn(
                          "inline-flex items-center gap-1.5 rounded-full border bg-card px-2 py-1 text-xs font-semibold text-foreground transition-colors hover:border-gold/50 hover:bg-gold/5 focus-visible:outline-2 focus-visible:outline-gold",
                          active === c.id ? "border-gold/60 bg-gold/10" : "border-border"
                        )}
                      >
                        <Icon className="h-3 w-3" style={{ color: c.color }} aria-hidden="true" />
                        {c.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
            <p className="text-xs leading-relaxed text-muted-foreground">
              Os buffs ficam <strong className="text-foreground">cruzados</strong>: o Buff Azul
              do time azul nasce perto do Barão, e o do time vermelho perto do Dragão.
              Por isso a selva superior é zona de disputa constante no early.
            </p>
          </div>
        </div>

        {/* --- Wards --- */}
        {showWards && (
          <div>
            <p className="mb-1.5 text-[11px] font-black uppercase tracking-widest text-[#4EC9D4]">
              Visão — wards essenciais do topo
            </p>
            <ul className="space-y-1" aria-label="Pontos de ward">
              {WARDS.map((h) => {
                const Icon = h.icon;
                return (
                  <li key={h.id}>
                    <button
                      type="button"
                      onMouseEnter={() => setActive(h.id)}
                      onMouseLeave={() => setActive(null)}
                      onClick={() => setActive(h.id)}
                      className={cn(
                        "flex w-full items-start gap-2.5 rounded-md border border-transparent px-2.5 py-1.5 text-left transition-colors hover:border-[#4EC9D4]/40 hover:bg-[#4EC9D4]/5 focus-visible:outline-2 focus-visible:outline-gold",
                        active === h.id && "border-[#4EC9D4]/40 bg-[#4EC9D4]/5"
                      )}
                    >
                      <span
                        className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border"
                        style={{ borderColor: `${h.color}88`, color: h.color }}
                        aria-hidden="true"
                      >
                        <Icon className="h-3.5 w-3.5" />
                      </span>
                      <span>
                        <span className="block text-sm font-bold text-foreground">{h.label}</span>
                        <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">
                          {h.desc}
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        <p className="flex items-start gap-1.5 rounded-md border border-gold/30 bg-gold/5 p-3 text-xs leading-relaxed text-foreground/90">
          <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" aria-hidden="true" />
          Dica de top laner: com Teleporte pronto, você transforma qualquer
          briga no rio em vantagem — o mapa inteiro está a um TP de distância
          da sua rota. E antes de empurrar: ward no Arbusto Tri primeiro.
        </p>
      </div>
    </div>
  );
}
