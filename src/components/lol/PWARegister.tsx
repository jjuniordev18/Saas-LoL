"use client";

// ============================================================
// Topo do Rift — PWA: registro do service worker + botão instalar
// • <PWARegister /> (render null): registra /sw.js e escuta o
//   evento beforeinstallprompt do navegador.
// • <InstallAppButton />: botão "Instalar app" — aparece quando o
//   navegador permite a instalação; some quando já está instalado.
//   No iOS (sem beforeinstallprompt) o Tutorial ensina o caminho
//   manual: Compartilhar → Adicionar à Tela de Início.
// ============================================================
import * as React from "react";
import { Download, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

let deferredPrompt: BeforeInstallPromptEvent | null = null;
const AVAILABILITY_EVENT = "topo-do-rift:install-disponivel";

function isStandalone(): boolean {
  if (typeof window === "undefined") return false;
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    // iOS Safari
    (window.navigator as unknown as { standalone?: boolean }).standalone === true
  );
}

export function PWARegister() {
  React.useEffect(() => {
    // ---- Service worker ----
    if ("serviceWorker" in navigator) {
      const register = () => {
        navigator.serviceWorker
          .register("/sw.js", { scope: "/", updateViaCache: "none" })
          .catch(() => {
            // registro falhou (ex.: contexto não seguro): segue sem SW
          });
      };
      if (document.readyState === "complete") {
        register();
      } else {
        window.addEventListener("load", register, { once: true });
      }
    }

    // ---- Eventos de instalação ----
    const onBeforeInstall = (e: Event) => {
      e.preventDefault();
      deferredPrompt = e as BeforeInstallPromptEvent;
      window.dispatchEvent(new Event(AVAILABILITY_EVENT));
    };
    const onInstalled = () => {
      deferredPrompt = null;
      window.dispatchEvent(new Event(AVAILABILITY_EVENT));
    };
    window.addEventListener("beforeinstallprompt", onBeforeInstall);
    window.addEventListener("appinstalled", onInstalled);
    return () => {
      window.removeEventListener("beforeinstallprompt", onBeforeInstall);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, []);

  return null;
}

export function InstallAppButton({
  variant = "full",
  className,
}: {
  variant?: "full" | "icon";
  className?: string;
}) {
  const [available, setAvailable] = React.useState(false);
  const [installed, setInstalled] = React.useState(false);
  const [busy, setBusy] = React.useState(false);

  React.useEffect(() => {
    if (isStandalone()) {
      setInstalled(true);
      return;
    }
    const sync = () => {
      setAvailable(deferredPrompt !== null);
      if (isStandalone()) setInstalled(true);
    };
    sync();
    window.addEventListener(AVAILABILITY_EVENT, sync);
    return () => window.removeEventListener(AVAILABILITY_EVENT, sync);
  }, []);

  // Já instalado ou navegador sem suporte ao prompt: não mostra
  if (installed || (!available && !deferredPrompt)) return null;

  const install = async () => {
    if (!deferredPrompt || busy) return;
    setBusy(true);
    try {
      await deferredPrompt.prompt();
      const choice = await deferredPrompt.userChoice;
      if (choice.outcome === "accepted") setInstalled(true);
      deferredPrompt = null;
      setAvailable(false);
      window.dispatchEvent(new Event(AVAILABILITY_EVENT));
    } finally {
      setBusy(false);
    }
  };

  if (variant === "icon") {
    return (
      <button
        type="button"
        onClick={install}
        disabled={busy}
        aria-label="Instalar o Topo do Rift como aplicativo"
        title="Instalar o guia no celular ou computador"
        className={cn(
          "flex items-center justify-center rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-gold-bright focus-visible:outline-2 focus-visible:outline-gold",
          className
        )}
      >
        <Download className="h-4 w-4 text-gold" aria-hidden="true" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={install}
      disabled={busy}
      className={cn(
        "inline-flex items-center gap-2 rounded-lg border border-gold/50 bg-gold/10 px-4 py-2.5 text-sm font-bold text-gold transition-colors hover:bg-gold/20 hover:text-gold-bright focus-visible:outline-2 focus-visible:outline-gold",
        className
      )}
    >
      {installed ? (
        <>
          <Check className="h-4 w-4 text-emerald-400" aria-hidden="true" />
          App instalado
        </>
      ) : (
        <>
          <Download className="h-4 w-4" aria-hidden="true" />
          Instalar no celular
        </>
      )}
    </button>
  );
}
