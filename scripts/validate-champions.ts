// Valida referências de itens/runas/feitiços dos campeões
import { ITEMS, RUNES, SPELLS, buildSkillSequence } from "../src/lib/lol/data";
import { CHAMPIONS_A } from "../src/lib/lol/champions-a";
import { CHAMPIONS_B } from "../src/lib/lol/champions-b";
import { CHAMPIONS_C } from "../src/lib/lol/champions-c";
import { CHAMPIONS_D } from "../src/lib/lol/champions-d";
import { CHAMPIONS_E } from "../src/lib/lol/champions-e";
import { CHAMPIONS_F } from "../src/lib/lol/champions-f";
import { CHAMPIONS_G } from "../src/lib/lol/champions-g";
import { TIER_STATS_LIST } from "../src/lib/lol/data";

const ALL = [
  ...CHAMPIONS_A,
  ...CHAMPIONS_B,
  ...CHAMPIONS_C,
  ...CHAMPIONS_D,
  ...CHAMPIONS_E,
  ...CHAMPIONS_F,
  ...CHAMPIONS_G,
];

let errors = 0;
const seen = new Set<string>();

for (const c of ALL) {
  if (seen.has(c.id)) {
    console.error(`[ID DUPLICADO] ${c.id}`);
    errors++;
  }
  seen.add(c.id);

  const checkItem = (id: string, ctx: string) => {
    if (!ITEMS[id]) {
      console.error(`[ITEM FALTANDO] ${c.name} (${ctx}): "${id}"`);
      errors++;
    }
  };
  c.startItems.forEach((i) => checkItem(i.id, "startItems"));
  c.boots.forEach((i) => checkItem(i.id, "boots"));
  c.coreItems.forEach((i) => checkItem(i.id, "coreItems"));
  c.situationalItems.forEach((i) => checkItem(i.id, "situational"));
  c.altBuilds.forEach((b) => b.items.forEach((i) => checkItem(i.id, `altBuild:${b.name}`)));

  if (!RUNES[c.runes.keystone]) {
    console.error(`[RUNA FALTANDO] ${c.name}: keystone "${c.runes.keystone}"`);
    errors++;
  }
  c.runes.primary.forEach((r) => {
    if (!RUNES[r]) {
      console.error(`[RUNA FALTANDO] ${c.name}: primary "${r}"`);
      errors++;
    }
  });
  c.runes.secondary.forEach((r) => {
    if (!RUNES[r]) {
      console.error(`[RUNA FALTANDO] ${c.name}: secondary "${r}"`);
      errors++;
    }
  });
  c.spells.forEach((s) => {
    if (!SPELLS[s.id]) {
      console.error(`[FEITIÇO FALTANDO] ${c.name}: "${s.id}"`);
      errors++;
    }
  });
  // skill sequence deve ter 18 níveis
  const seq = buildSkillSequence(c.skillPriority);
  if (seq.length !== 18) {
    console.error(`[SKILL SEQ INVÁLIDA] ${c.name}: ${seq.length} níveis`);
    errors++;
  }
  if (c.abilities.length !== 5) {
    console.error(`[ABILITIES INVÁLIDAS] ${c.name}: ${c.abilities.length} habilidades`);
    errors++;
  }
}

// Tier list Blitz deve apontar sempre para campeões existentes
for (const e of TIER_STATS_LIST) {
  if (!ALL.some((c) => c.id === e.championId)) {
    console.error(`[TIER-STATS] championId inexistente: "${e.championId}"`);
    errors++;
  }
}

console.log(errors === 0 ? `✅ OK — ${ALL.length} campeões validados sem erros` : `❌ ${errors} erros encontrados`);
process.exit(errors === 0 ? 0 : 1);
