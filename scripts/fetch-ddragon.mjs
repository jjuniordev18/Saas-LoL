// ============================================================
// Baixa dados da Data Dragon (Riot) e gera src/lib/lol/ddragon.ts
// com os IDs/ícones OFICIAIS de itens, runas e feitiços.
// ============================================================
const VERSION = "16.21.1";
const BASE = `https://ddragon.leagueoflegends.com/cdn/${VERSION}`;
const CDN = "https://ddragon.leagueoflegends.com/cdn";

async function getJSON(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} em ${url}`);
  return res.json();
}

// slug usado no catálogo interno -> nome oficial em inglês no item.json
const ITEM_NAME_MAP = {
  "dorans-blade": "Doran's Blade",
  "dorans-shield": "Doran's Shield",
  "dorans-ring": "Doran's Ring",
  "health-potion": "Health Potion",
  "refillable-potion": "Refillable Potion",
  "corrupting-potion": "Corrupting Potion",
  "plated-steelcaps": "Plated Steelcaps",
  "mercury-treads": "Mercury's Treads",
  "berserker-greaves": "Berserker's Greaves",
  "sorcerers-shoes": "Sorcerer's Shoes",
  "ionian-boots": "Ionian Boots of Lucidity",
  "boots-of-swiftness": "Boots of Swiftness",
  "sundered-sky": "Sundered Sky",
  "black-cleaver": "Black Cleaver",
  "steraks-gage": "Sterak's Gage",
  stridebreaker: "Stridebreaker",
  "titanic-hydra": "Titanic Hydra",
  "ravenous-hydra": "Ravenous Hydra",
  botrk: "Blade of The Ruined King",
  "trinity-force": "Trinity Force",
  hullbreaker: "Hullbreaker",
  "dead-mans-plate": "Dead Man's Plate",
  "youmuus-ghostblade": "Youmuu's Ghostblade",
  eclipse: "Eclipse",
  "deaths-dance": "Death's Dance",
  "maw-of-malmortius": "Maw of Malmortius",
  "guardian-angel": "Guardian Angel",
  "chempunk-chainsword": "Chempunk Chainsword",
  "mortal-reminder": "Mortal Reminder",
  "seryldas-grudge": "Serylda's Grudge",
  "wits-end": "Wit's End",
  "phantom-dancer": "Phantom Dancer",
  heartsteel: "Heartsteel",
  warmogs: "Warmog's Armor",
  jaksho: "Jak'Sho, The Protean",
  "sunfire-aegis": "Sunfire Aegis",
  "hollow-radiance": "Hollow Radiance",
  "kaenic-rookern": "Kaenic Rookern",
  "force-of-nature": "Force of Nature",
  "spirit-visage": "Spirit Visage",
  thornmail: "Thornmail",
  "frozen-heart": "Frozen Heart",
  "randuins-omen": "Randuin's Omen",
  "unending-despair": "Unending Despair",
  "iceborn-gauntlet": "Iceborn Gauntlet",
  "abyssal-mask": "Abyssal Mask",
  riftmaker: "Riftmaker",
  "rod-of-ages": "Rod of Ages",
  rylais: "Rylai's Crystal Scepter",
  liandrys: "Liandry's Torment",
  zhonyas: "Zhonya's Hourglass",
  rabaddons: "Rabadon's Deathcap",
  "void-staff": "Void Staff",
  cryptbloom: "Cryptbloom",
  "nashors-tooth": "Nashor's Tooth",
  stormsurge: "Stormsurge",
  morellonomicon: "Morellonomicon",
  shadowflame: "Shadowflame",
};

// slug interno -> nome oficial da runa em inglês (runesReforged.json)
const RUNE_NAME_MAP = {
  conqueror: "Conqueror",
  "lethal-tempo": "Lethal Tempo",
  "fleet-footwork": "Fleet Footwork",
  "press-the-attack": "Press the Attack",
  triumph: "Triumph",
  "presence-of-mind": "Presence of Mind",
  "legend-alacrity": "Legend: Alacrity",
  "legend-bloodline": "Legend: Bloodline",
  "legend-haste": "Legend: Haste",
  "last-stand": "Last Stand",
  "cut-down": "Cut Down",
  "coup-de-grace": "Coup de Grace",
  "stormraiders-surge": "Stormraider's Surge",
  "arcane-comet": "Arcane Comet",
  "summon-aery": "Summon Aery",
  "deathfire-touch": "Deathfire Touch",
  aery: "Summon Aery",
  "nimbus-cloak": "Nimbus Cloak",
  celerity: "Celerity",
  transcendence: "Transcendence",
  scorch: "Scorch",
  "gathering-storm": "Gathering Storm",
  "manaflow-band": "Manaflow Band",
  "absolute-focus": "Absolute Focus",
  grasp: "Grasp of the Undying",
  aftershock: "Aftershock",
  demolish: "Demolish",
  "second-wind": "Second Wind",
  "bone-plating": "Bone Plating",
  "conditioning": "Conditioning",
  overgrowth: "Overgrowth",
  unflinching: "Unflinching",
  revitalize: "Revitalize",
  "font-of-life": "Font of Life",
  "shield-bash": "Shield Bash",
  "magical-footwear": "Magical Footwear",
  "cosmic-insight": "Cosmic Insight",
  "biscuit-delivery": "Biscuit Delivery",
  "triple-tonic": "Triple Tonic",
  "approach-velocity": "Approach Velocity",
  "time-warp-tonic": "Time Warp Tonic",
  "cash-back": "Cash Back",
  "sudden-impact": "Sudden Impact",
  "taste-of-blood": "Taste of Blood",
  "cheap-shot": "Cheap Shot",
  "sixth-sense": "Sixth Sense",
  "grisly-mementos": "Grisly Mementos",
  "deep-ward": "Deep Ward",
  "ultimate-hunter": "Ultimate Hunter",
  "relentless-hunter": "Relentless Hunter",
  "treasure-hunter": "Treasure Hunter",
  electrocute: "Electrocute",
  "dark-harvest": "Dark Harvest",
};

// slug interno -> id oficial do feitiço em summoner.json
const SPELL_ID_MAP = {
  flash: "SummonerFlash",
  teleport: "SummonerTeleport",
  ignite: "SummonerDot",
  ghost: "SummonerHaste",
  heal: "SummonerHeal",
  barrier: "SummonerBarrier",
  exhaust: "SummonerExhaust",
  cleanse: "SummonerBoost",
  smite: "SummonerSmite",
};

// Campeões novos -> chave Data Dragon + nome pt_BR para checagem
const NEW_CHAMPS = [
  "Illaoi", "Volibear", "Tryndamere", "Olaf", "Yorick", "KSante",
  "DrMundo", "Pantheon", "Chogath", "Kayle", "Rumble", "Urgot",
  // Alta taxa de vitória na rota do topo (Blitz.gg)
  "Quinn", "Poppy", "Warwick", "Zac", "Anivia",
];

// Campeões cujos nomes de habilidades serão extraídos em pt_BR
const ABILITY_CHAMPS = ["Quinn", "Poppy", "Warwick", "Zac", "Anivia"];

const norm = (s) =>
  s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/['’]/g, "'").trim();

async function main() {
  const [items, itemsPt, runes, runesPt, spells, spellsPt, champsEn, champsPt] = await Promise.all([
    getJSON(`${BASE}/data/en_US/item.json`),
    getJSON(`${BASE}/data/pt_BR/item.json`),
    getJSON(`${BASE}/data/en_US/runesReforged.json`),
    getJSON(`${BASE}/data/pt_BR/runesReforged.json`),
    getJSON(`${BASE}/data/en_US/summoner.json`),
    getJSON(`${BASE}/data/pt_BR/summoner.json`),
    getJSON(`${BASE}/data/en_US/champion.json`),
    getJSON(`${BASE}/data/pt_BR/champion.json`),
  ]);

  // ---------- Itens ----------
  const byName = new Map();
  for (const [id, it] of Object.entries(items.data)) {
    byName.set(norm(it.name), { id, icon: it.image.full });
    if (it.name !== it.plaintext) { /* noop */ }
  }
  const itemOut = {};
  const misses = [];
  for (const [slug, name] of Object.entries(ITEM_NAME_MAP)) {
    const hit = byName.get(norm(name));
    if (hit) itemOut[slug] = hit;
    else misses.push(`ITEM: ${slug} -> "${name}"`);
  }

  // Nome oficial em pt_BR de cada item mapeado (mesma ID)
  const itemPtOut = {};
  for (const [slug, hit] of Object.entries(itemOut)) {
    const pt = itemsPt.data[hit.id];
    itemPtOut[slug] = pt ? pt.name : null;
    if (!pt) misses.push(`ITEM-PT: ${slug} (id ${hit.id})`);
  }

  // ---------- Runas ----------
  const runeByName = new Map();
  for (const tree of runes) {
    runeByName.set(norm(tree.name), { icon: tree.icon, key: tree.id });
    for (const slot of tree.slots) {
      for (const r of slot.runes) {
        runeByName.set(norm(r.name), { icon: r.icon, key: r.id });
      }
    }
  }
  const runeOut = {};
  for (const [slug, name] of Object.entries(RUNE_NAME_MAP)) {
    const hit = runeByName.get(norm(name));
    if (hit) runeOut[slug] = hit.icon;
    else misses.push(`RUNA: ${slug} -> "${name}"`);
  }

  // Nome oficial em pt_BR de cada runa mapeada (mesma key)
  const runePtByKey = new Map();
  for (const tree of runesPt) {
    runePtByKey.set(String(tree.id), tree.name);
    for (const slot of tree.slots) {
      for (const r of slot.runes) {
        runePtByKey.set(String(r.id), r.name);
      }
    }
  }
  const runePtOut = {};
  for (const [slug, name] of Object.entries(RUNE_NAME_MAP)) {
    const hit = runeByName.get(norm(name));
    runePtOut[slug] = hit ? (runePtByKey.get(String(hit.key)) ?? null) : null;
    if (!runePtOut[slug]) misses.push(`RUNA-PT: ${slug} -> "${name}"`);
  }

  // ---------- Feitiços ----------
  const spellOut = {};
  for (const [slug, sid] of Object.entries(SPELL_ID_MAP)) {
    const s = spells.data[sid];
    if (s) spellOut[slug] = s.image.full;
    else misses.push(`FEITIÇO: ${slug} -> "${sid}"`);
  }

  // Nome oficial em pt_BR de cada feitiço mapeado
  const spellPtOut = {};
  for (const [slug, sid] of Object.entries(SPELL_ID_MAP)) {
    const s = spellsPt.data[sid];
    spellPtOut[slug] = s ? s.name : null;
    if (!s) misses.push(`FEITIÇO-PT: ${slug} -> "${sid}"`);
  }

  // ---------- Campeões novos ----------
  const champOut = {};
  for (const key of NEW_CHAMPS) {
    const en = champsEn.data[key];
    const pt = champsPt.data[key];
    if (en && pt) champOut[key] = { name: pt.name, title: pt.title };
    else misses.push(`CAMPEÃO: ${key}`);
  }

  // Nomes oficiais das habilidades (pt_BR) dos campeões novos
  const abilityOut = {};
  for (const key of ABILITY_CHAMPS) {
    try {
      const full = await getJSON(`${BASE}/data/pt_BR/champion/${key}.json`);
      const data = full.data[key];
      abilityOut[key] = {
        P: data.passive.name,
        Q: data.spells[0].name,
        W: data.spells[1].name,
        E: data.spells[2].name,
        R: data.spells[3].name,
      };
    } catch {
      misses.push(`HABILIDADES: ${key}`);
    }
  }

  // ---------- Emitir TS ----------
  const ts = `// ============================================================
// GERADO AUTOMATICAMENTE por scripts/fetch-ddragon.mjs
// Dados oficiais da Data Dragon (Riot Games) — patch ${VERSION}
// Mapeia slugs internos -> ícones/IDs oficiais do jogo.
// ============================================================

export const DDRAGON_VERSION = "${VERSION}";

/** slug interno do item -> { id numérico oficial, arquivo de ícone } */
export const ITEM_DD: Record<string, { id: string; icon: string }> = ${JSON.stringify(itemOut, null, 2)};

/** slug interno da runa -> caminho oficial do ícone (perk-images) */
export const RUNE_DD: Record<string, string> = ${JSON.stringify(runeOut, null, 2)};

/** slug interno do feitiço -> arquivo oficial de ícone (SummonerX.png) */
export const SPELL_DD: Record<string, string> = ${JSON.stringify(spellOut, null, 2)};

/** slug interno do item -> nome oficial no cliente em pt_BR */
export const ITEM_PT: Record<string, string | null> = ${JSON.stringify(itemPtOut, null, 2)};

/** slug interno da runa -> nome oficial no cliente em pt_BR */
export const RUNE_PT: Record<string, string | null> = ${JSON.stringify(runePtOut, null, 2)};

/** slug interno do feitiço -> nome oficial no cliente em pt_BR */
export const SPELL_PT: Record<string, string | null> = ${JSON.stringify(spellPtOut, null, 2)};

/** chave Data Dragon -> nomes oficiais das habilidades em pt_BR */
export const CHAMPION_ABILITIES: Record<string, { P: string; Q: string; W: string; E: string; R: string }> = ${JSON.stringify(abilityOut, null, 2)};

/** chave Data Dragon -> nome e título em pt_BR (campeões novos) */
export const CHAMPION_PT: Record<string, { name: string; title: string }> = ${JSON.stringify(champOut, null, 2)};

export function itemIconUrl(iconFile: string): string {
  return \`${BASE}/img/item/\${iconFile}\`;
}

export function spellIconUrl(iconFile: string): string {
  return \`${BASE}/img/spell/\${iconFile}\`;
}

export function runeIconUrl(iconPath: string): string {
  // iconPath já vem como "perk-images/Styles/..."
  return \`${CDN}/img/\${iconPath}\`;
}

export function championSquareUrl(champKey: string): string {
  return \`${BASE}/img/champion/\${champKey}.png\`;
}

/** Mapa oficial do Summoner's Rift (minimapa carregado do patch atual) */
export const RIFT_MAP_URL = \`${BASE}/img/map/map11.png\`;
/** Minimapa com o desenho estilo "mapa-múndi" alternativo */
export const RIFT_MAP_ALT_URL = \`${BASE}/img/map/map11_shrouded.png\`;
`;

  await (await import("node:fs/promises")).writeFile(
    "/home/z/my-project/src/lib/lol/ddragon.ts",
    ts,
    "utf8"
  );

  console.log(`Itens mapeados: ${Object.keys(itemOut).length}/${Object.keys(ITEM_NAME_MAP).length}`);
  console.log(`Runas mapeadas: ${Object.keys(runeOut).length}/${Object.keys(RUNE_NAME_MAP).length}`);
  console.log(`Feitiços mapeados: ${Object.keys(spellOut).length}/${Object.keys(SPELL_ID_MAP).length}`);
  console.log(`Campeões: ${Object.keys(champOut).length}/${NEW_CHAMPS.length}`);
  console.log(`Habilidades pt_BR: ${Object.keys(abilityOut).length}/${ABILITY_CHAMPS.length}`);
  if (misses.length) {
    console.log("\n=== NÃO ENCONTRADOS ===");
    misses.forEach((m) => console.log(" - " + m));
  } else {
    console.log("Tudo encontrado ✔");
  }
}

main().catch((e) => {
  console.error("FALHA:", e.message);
  process.exit(1);
});
