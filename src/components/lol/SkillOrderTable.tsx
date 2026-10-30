"use client";

// ============================================================
// Topo do Rift — Tabela de ordem de habilidades (níveis 1–18)
// ============================================================
import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { buildSkillSequence, type Champion } from "@/lib/lol/data";
import { cn } from "@/lib/utils";

const SKILL_COLORS: Record<string, string> = {
  Q: "#5C8AA0",
  W: "#5FAF6E",
  E: "#E8902F",
  R: "#C8324B",
};

export function SkillOrderTable({ champion }: { champion: Champion }) {
  const sequence = React.useMemo(
    () => buildSkillSequence(champion.skillPriority),
    [champion.skillPriority]
  );

  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="sticky left-0 z-10 bg-card text-xs text-muted-foreground">
              Nível
            </TableHead>
            {Array.from({ length: 18 }, (_, i) => (
              <TableHead
                key={i}
                className="min-w-8 px-1 text-center text-xs text-muted-foreground"
              >
                {i + 1}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="sticky left-0 z-10 bg-card text-xs font-semibold text-foreground">
              Habilidade
            </TableCell>
            {sequence.map((skill, idx) => (
              <TableCell key={idx} className="px-1 py-2 text-center">
                <span
                  className={cn(
                    "inline-flex h-7 w-7 items-center justify-center rounded font-display text-xs font-bold text-white",
                    skill === "R" && "ring-2 ring-[#C8324B]/50"
                  )}
                  style={{ backgroundColor: SKILL_COLORS[skill] }}
                  title={`Nível ${idx + 1}: ${skill}`}
                >
                  {skill}
                </span>
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export function SkillPriorityNote({ champion }: { champion: Champion }) {
  const [p1, p2, p3] = champion.skillPriority;
  return (
    <p className="text-sm text-muted-foreground">
      Prioridade: maximize{" "}
      <strong className="text-gold-bright">{p1}</strong> primeiro, depois{" "}
      <strong className="text-gold-bright">{p2}</strong>, por último{" "}
      <strong className="text-gold-bright">{p3}</strong>. O <strong className="text-[#C8324B]">R</strong> entra
      sempre nos níveis 6, 11 e 16.
    </p>
  );
}
