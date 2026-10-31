"use client";

// ============================================================
// Topo do Rift — Curva de poder & perfil de dano
// Barras early/mid/late animadas + power spikes + composição
// de dano com dica de counter-item.
// ============================================================
import * as React from "react";
import { TrendingUp, Zap, Swords, Info } from "lucide-react";
import type { Champion } from "@/lib/lol/data";
import { getPowerCurve, PHASE_META, type GamePhase } from "@/lib/lol/powercurve";
import { InfoTooltip } from "./pieces";
import { cn } from "@/lib/utils";

const PHASES: GamePhase[] = ["early", "mid", "late"];

const BAR_GRADIENT: Record<GamePhase, string> = {
  early: "linear-gradient(90deg, #b89968, #F0B93C)",
  mid: "linear-gradient(90deg, #b56a24, #E8902F)",
  late: "linear-gradient(90deg, #8a2c3f, #C8324B)",
};

function curveLabel(v: number): string {
  if (v >= 85) return "Pico";
  if (v >= 72) return "Forte";
  if (v >= 58) return "Sólido";
  if (v >= 45) return "Frágil";
  return "Muito frágil";
}

export function PowerCurveSection({ champion }: { champion: Champion }) {
  const curve = React.useMemo(() => getPowerCurve(champion), [champion]);
  // Use state inicial true para evitar mismatch de SSR - animações só no cliente
  const [mounted, setMounted] = React.useState(true);
  React.useEffect(() => {
    // Não precisa fazer nada aqui - mounted já está true
  }, []);

  const dmgSum = curve.dmg.fisico + curve.dmg.magico + curve.dmg.verdadeiro || 100;

  return (
    <section className="rounded-lg border border-border bg-card/60 p-4 sm:p-5">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <h3 className="flex items-center gap-2 font-display text-lg font-bold text-gold-bright">
          <TrendingUp className="h-5 w-5 text-gold" aria-hidden="true" />
          Curva de poder
        </h3>
        <InfoTooltip content="Força relativa em cada fase do jogo, de 0 a 100. Use para decidir: acelerar, farmar ou correr para o late.">
          <span
            tabIndex={0}
            role="note"
            aria-label="Explicação da curva de poder"
            className="inline-flex cursor-help items-center gap-1 text-[11px] font-semibold text-gold"
          >
            <Info className="h-3.5 w-3.5" aria-hidden="true" />
            como ler
          </span>
        </InfoTooltip>
      </div>

      {/* Barras por fase */}
      <div className="space-y-3">
        {PHASES.map((phase) => {
          const meta = PHASE_META[phase];
          const value = curve[phase];
          return (
            <div key={phase}>
              <div className="mb-1 flex items-baseline justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-wide" style={{ color: meta.color }}>
                  {meta.label}
                  <span className="ml-1.5 font-medium normal-case text-muted-foreground">
                    ({meta.hint})
                  </span>
                </span>
                <span className="shrink-0 text-xs font-black text-foreground/90">
                  {curveLabel(value)} <span className="text-gold">· {value}</span>
                </span>
              </div>
              <div
                role="meter"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={value}
                aria-label={`Força no ${meta.label}: ${value} de 100 (${curveLabel(value)})`}
                className="h-2.5 w-full overflow-hidden rounded-full bg-muted"
              >
                <div
                  className="h-full rounded-full transition-[width] duration-700 ease-out"
                  style={{
                    width: mounted ? `${value}%` : "0%",
                    background: BAR_GRADIENT[phase],
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Power spikes */}
      <div className="mt-5">
        <p className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-muted-foreground">
          <Zap className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
          Pontos de poder
        </p>
        <ul className="grid gap-2 sm:grid-cols-2">
          {curve.spikes.map((s, i) => (
            <li
              key={i}
              className="flex items-start gap-2 rounded-md border border-gold/25 bg-gold/5 p-2.5 text-sm leading-snug text-foreground/90"
            >
              <Zap className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" aria-hidden="true" />
              {s}
            </li>
          ))}
        </ul>
      </div>

      {/* Perfil de dano */}
      <div className="mt-5">
        <p className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-muted-foreground">
          <Swords className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
          Perfil de dano
        </p>
        <div
          role="img"
          aria-label={`Dano físico ${curve.dmg.fisico}%, mágico ${curve.dmg.magico}%, verdadeiro ${curve.dmg.verdadeiro}%`}
          className="flex h-3.5 w-full overflow-hidden rounded-full"
        >
          <span
            className={cn("h-full bg-gradient-to-r from-amber-600 to-amber-400 transition-[width] duration-700")}
            style={{ width: mounted ? `${(curve.dmg.fisico / dmgSum) * 100}%` : "0%" }}
          />
          <span
            className="h-full bg-gradient-to-r from-sky-600 to-sky-400 transition-[width] duration-700"
            style={{ width: mounted ? `${(curve.dmg.magico / dmgSum) * 100}%` : "0%" }}
          />
          <span
            className="h-full bg-gradient-to-r from-rose-700 to-rose-500 transition-[width] duration-700"
            style={{ width: mounted ? `${(curve.dmg.verdadeiro / dmgSum) * 100}%` : "0%" }}
          />
        </div>
        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] font-semibold text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-amber-400" aria-hidden="true" />
            Físico {curve.dmg.fisico}%
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-sky-400" aria-hidden="true" />
            Mágico {curve.dmg.magico}%
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-rose-500" aria-hidden="true" />
            Verdadeiro {curve.dmg.verdadeiro}%
          </span>
        </div>
        <p className="mt-2.5 rounded-md border border-border/70 bg-muted/40 p-2.5 text-xs leading-relaxed text-foreground/90">
          <strong className="text-gold">Resposta com itens:</strong>{" "}
          {curve.counterItemTip}
        </p>
      </div>
    </section>
  );
}
