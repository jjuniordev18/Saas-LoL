import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { TIER_STATS_LIST, PATCH_VERSION } from "@/lib/lol/data";

const db = new PrismaClient();

export async function GET() {
  try {
    const activePatch = await db.patch.findFirst({
      where: { isActive: true },
      include: { tierStats: true },
    });

    if (activePatch?.tierStats?.length) {
      return NextResponse.json({
        patch: activePatch.version,
        source: "database",
        stats: activePatch.tierStats.map((s) => ({
          championId: s.championId,
          name: s.championName,
          tier: s.tier as "S" | "A",
          winRate: s.winRate,
          wrChange: s.wrChange,
          banRate: s.banRate,
          pickRate: s.pickRate,
          matches: s.matches,
          rank: s.rank,
        })),
      });
    }
  } catch {
    // Banco indisponível ou vazio: usa fallback estático abaixo
  }

  // Fallback: dados estáticos hardcoded (comportamento original)
  return NextResponse.json({
    patch: PATCH_VERSION,
    source: "static",
    stats: TIER_STATS_LIST,
  });
}
