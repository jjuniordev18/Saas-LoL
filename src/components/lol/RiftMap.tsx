"use client";

// ============================================================
// Topo do Rift — Mapa do Summoner's Rift incorporado
// Arte oficial (Data Dragon) + pontos de interesse interativos.
// ============================================================
import * as React from "react";
import { MapPin, Crown, Flame, Mountain, Skull, Home, ArrowUpRight } from "lucide-react";
import { InfoTooltip } from "./pieces";
import { RIFT_MAP_URL } from "@/lib/lol/ddragon";
import { cn } from "@/lib/utils";

interface Hotspot {
  id: string;
  /** posição em % dentro do mapa (left, top) */
  x: number;
  y: number;
  label: string;
  desc: string;
  icon: typeof MapPin;
  color: string;
  highlight?: boolean;
}

// O minimapa oficial: base azul no canto superior-esquerdo, base vermelha
// no canto inferior-direito, rio na diagonal oposta.
const HOTSPOTS: Hotspot[] = [
  {
    id: "top",
    x: 30,
    y: 16,
    label: "Rota Superior (Top)",
    desc: "A rota mais isolada do mapa: duelos de 1v1 longos, splitpush e pouca ajuda — a mais competitiva de todas.",
    icon: Crown,
    color: "#F0B93C",
    highlight: true,
  },
  {
    id: "mid",
    x: 50,
    y: 50,
    label: "Rota do Meio",
    desc: "A rota mais curta: magos e assassinos, acesso rápido aos dois lados do rio.",
    icon: MapPin,
    color: "#C8AA6E",
  },
  {
    id: "bot",
    x: 70,
    y: 84,
    label: "Rota Inferior (Bot)",
    desc: "Duo de atirador + suporte. Cuidado com o flanco: o jungle inimigo gosta de passar por aqui.",
    icon: MapPin,
    color: "#5C8AA0",
  },
  {
    id: "baron",
    x: 66,
    y: 33,
    label: "Barão Nashor",
    desc: "O objetivo mais importante do late game. Abrir o Barão com o top laner segurando a onda é a jogada clássica.",
    icon: Skull,
    color: "#C8324B",
  },
  {
    id: "herald",
    x: 57,
    y: 42,
    label: "Arauto da Fenda",
    desc: "Nasce no fosso do Barão a partir dos 14 minutos: entregue ao top laner, ela derruba a primeira torre em segundos.",
    icon: Mountain,
    color: "#E8902F",
  },
  {
    id: "dragon",
    x: 34,
    y: 68,
    label: "Dragão",
    desc: "Bônus permanentes para o time. Dragon Souls decidem partidas — e o top laner com TP decide as brigas.",
    icon: Flame,
    color: "#E05A75",
  },
  {
    id: "blue-base",
    x: 10,
    y: 10,
    label: "Base Azul",
    desc: "Fonte, Nexus e loja. Se você é azul, sua torre de top fica no canto superior-direito do mapa.",
    icon: Home,
    color: "#3C9BD8",
  },
  {
    id: "red-base",
    x: 90,
    y: 90,
    label: "Base Vermelha",
    desc: "O Ninho do inimigo. Vitória = destruir o Nexus aqui, com a onda de top empurrada na frente.",
    icon: Home,
    color: "#E0564B",
  },
];

export function RiftMap() {
  const [failed, setFailed] = React.useState(false);
  const [active, setActive] = React.useState<string | null>(null);

  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-start">
      {/* Mapa com pontos */}
      <div
        className="hextech-border relative aspect-square w-full overflow-hidden rounded-lg"
        role="img"
        aria-label="Mapa do Summoner's Rift com pontos de interesse marcados"
      >
        {failed ? (
          <div className="flex h-full w-full items-center justify-center bg-abyss text-center">
            <p className="max-w-xs text-sm text-muted-foreground">
              O mapa oficial não pôde ser carregado. Verifique sua conexão — a
              arte vem da Data Dragon da Riot Games.
            </p>
          </div>
        ) : (
          <img
            src={RIFT_MAP_URL}
            alt="Minimapa oficial do Summoner's Rift"
            width={1024}
            height={1024}
            loading="lazy"
            onError={() => setFailed(true)}
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}

        {/* Pontos de interesse */}
        {!failed &&
          HOTSPOTS.map((h) => {
            const Icon = h.icon;
            const isActive = active === h.id;
            return (
              <InfoTooltip
                key={h.id}
                content={
                  <div className="space-y-1">
                    <p className="font-semibold text-gold-bright">{h.label}</p>
                    <p className="text-xs text-muted-foreground">{h.desc}</p>
                  </div>
                }
              >
                <button
                  type="button"
                  onClick={() => setActive(isActive ? null : h.id)}
                  onFocus={() => setActive(h.id)}
                  onMouseEnter={() => setActive(h.id)}
                  aria-label={`${h.label}: ${h.desc}`}
                  className={cn(
                    "absolute -translate-x-1/2 -translate-y-1/2 rounded-full border-2 bg-black/55 p-1.5 backdrop-blur-sm transition-all hover:scale-125 focus-visible:outline-2 focus-visible:outline-gold",
                    isActive && "scale-125"
                  )}
                  style={{
                    left: `${h.x}%`,
                    top: `${h.y}%`,
                    borderColor: h.color,
                    color: h.color,
                    boxShadow: isActive
                      ? `0 0 14px ${h.color}AA`
                      : `0 0 8px ${h.color}55`,
                  }}
                >
                  <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
                  {h.highlight && (
                    <span
                      aria-hidden="true"
                      className="animate-pulse-ring absolute inset-0 rounded-full"
                    />
                  )}
                </button>
              </InfoTooltip>
            );
          })}

        {/* Rótulo da rota superior */}
        {!failed && (
          <span className="pointer-events-none absolute left-1/2 top-[8%] -translate-x-1/2 rounded-full border border-gold/60 bg-black/70 px-3 py-1 font-display text-[11px] font-black tracking-wide text-gold backdrop-blur-sm sm:text-xs">
            ROTAS 5V5 · FOCO EM TOP
          </span>
        )}
      </div>

      {/* Legenda / explicação */}
      <div className="space-y-3">
        <p className="text-sm leading-relaxed text-muted-foreground">
          O <strong className="text-gold-bright">Summoner&apos;s Rift</strong>{" "}
          é o mapa 5v5 clássico do League of Legends. A rota superior (destacada
          em dourado) é o território deste guia: uma &ldquo;ilha&rdquo;
          isolada onde Duelos de 1v1 decidem quem domina o flanco nordeste do
          mapa.
        </p>
        <ul className="space-y-2" aria-label="Pontos de interesse do mapa">
          {HOTSPOTS.map((h) => {
            const Icon = h.icon;
            return (
              <li key={h.id}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(h.id)}
                  onMouseLeave={() => setActive(null)}
                  onClick={() => setActive(h.id)}
                  className={cn(
                    "flex w-full items-start gap-2.5 rounded-md border border-transparent px-2.5 py-2 text-left transition-colors hover:border-gold/40 hover:bg-gold/5 focus-visible:outline-2 focus-visible:outline-gold",
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
        <p className="flex items-start gap-1.5 rounded-md border border-gold/30 bg-gold/5 p-3 text-xs leading-relaxed text-foreground/90">
          <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" aria-hidden="true" />
          Dica de top laner: com Teleporte pronto, você transforma qualquer
          briga no rio em vantagem — o mapa inteiro está a um TP de distância
          da sua rota.
        </p>
      </div>
    </div>
  );
}
