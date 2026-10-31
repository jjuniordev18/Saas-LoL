"use client";

// ============================================================
// Topo do Rift — Contador de visitas exibido no rodapé
// ============================================================
import * as React from "react";
import { Eye } from "lucide-react";
import { registerVisit, formatIsoDate, type VisitData } from "@/lib/lol/visits";

export function VisitCounter() {
  // Estado inicial lazy para evitar cascading renders
  const [visits, setVisits] = React.useState<VisitData | null>(() => {
    return registerVisit();
  });

  // Use useEffect para evitar mismatch de SSR - o estado já está inicializado
  React.useEffect(() => {
    // Nenhuma ação necessária - estado já inicializado via lazy initializer
  }, []);

  // Estado neutro até montar no cliente (evita mismatch de SSR)
  if (!visits) {
    return (
      <p className="flex items-center gap-1.5 text-xs text-muted-foreground opacity-0" aria-hidden="true">
        <Eye className="h-3.5 w-3.5" />
        Visita nº —
      </p>
    );
  }

  const first = formatIsoDate(visits.first);

  return (
    <p
      className="flex items-center gap-1.5 text-xs text-muted-foreground"
      aria-label={`Esta é sua visita de número ${visits.count}`}
      title="Contador salvo no seu navegador"
    >
      <Eye className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
      <span>
        Visita nº{" "}
        <strong className="font-display font-black text-gold-bright">
          {visits.count}
        </strong>
        {first && (
          <>
            {" · "}invocador desde {first}
          </>
        )}
      </span>
    </p>
  );
}
