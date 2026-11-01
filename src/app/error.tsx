"use client";

// ============================================================
// Topo do Rift — Error Boundary (client)
// Renderiza quando um componente filho lança exceção durante o render.
// ============================================================
import * as React from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <title>Erro — Topo do Rift</title>
      </head>
      <body className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <div className="rounded-lg border border-border bg-card p-8 text-center max-w-md w-full mx-4">
          <h1 className="font-display text-2xl font-black text-gold-bright mb-2">
            Algo deu errado
          </h1>
          <p className="text-sm text-muted-foreground mb-6">
            {error.message ?? "Erro inesperado ao carregar a página."}
          </p>
          <button
            type="button"
            onClick={() => reset()}
            className="flex items-center gap-2 rounded-md border border-gold/40 bg-gold/10 px-4 py-2 text-sm font-bold text-gold hover:bg-gold/20 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            Tentar novamente
          </button>
        </div>
      </body>
    </html>
  );
}
