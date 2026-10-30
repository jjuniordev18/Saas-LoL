"use client";

// ============================================================
// Topo do Rift — Seletor de tema (Hextech / Ionia / Arcano / Noxus)
// ============================================================
import * as React from "react";
import { Check, Palette } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { THEMES, useTheme, type ThemeId } from "@/lib/lol/theme";

export function ThemeSwitcher() {
  const { theme, setTheme, loaded } = useTheme();
  const [open, setOpen] = React.useState(false);
  const current = THEMES.find((t) => t.id === theme) ?? THEMES[0];

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          aria-label={`Trocar tema — tema atual: ${current.label}`}
          aria-expanded={open}
          className="flex h-9 items-center gap-2 rounded-md border border-gold/40 bg-card px-2.5 text-xs font-semibold text-gold transition-colors hover:border-gold hover:bg-gold/10 hover:text-gold-bright focus-visible:outline-2 focus-visible:outline-gold"
        >
          <Palette className="h-4 w-4" aria-hidden="true" />
          <span className="hidden sm:inline">{current.label}</span>
          <span className="flex gap-0.5" aria-hidden="true">
            {current.swatches.map((c) => (
              <span
                key={c}
                className="h-3 w-3 rounded-full border border-black/30"
                style={{ background: c }}
              />
            ))}
          </span>
        </button>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        className="w-56 border-frame/60 bg-popover p-1.5 shadow-xl"
      >
        <p className="px-2 py-1.5 text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
          Modos de cor
        </p>
        {THEMES.map((t) => {
          const active = loaded && t.id === theme;
          return (
            <button
              key={t.id}
              type="button"
              role="menuitemradio"
              aria-checked={active}
              onClick={() => {
                setTheme(t.id as ThemeId);
                setOpen(false);
              }}
              className={cn(
                "flex w-full cursor-pointer items-center gap-2.5 rounded-md px-2 py-2 text-left transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-gold",
                active && "bg-gold/10"
              )}
            >
              <span className="flex shrink-0" aria-hidden="true">
                {t.swatches.map((c, i) => (
                  <span
                    key={c}
                    className={cn(
                      "h-5 w-5 rounded-full border border-black/30",
                      i > 0 && "-ml-2.5"
                    )}
                    style={{ background: c }}
                  />
                ))}
              </span>
              <span className="min-w-0 flex-1">
                <span
                  className={cn(
                    "block truncate text-sm font-semibold text-foreground",
                    active && "text-gold-bright"
                  )}
                >
                  {t.label}
                </span>
                <span className="block truncate text-[11px] text-muted-foreground">
                  {t.sub}
                </span>
              </span>
              {active && (
                <Check className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              )}
            </button>
          );
        })}
      </PopoverContent>
    </Popover>
  );
}
