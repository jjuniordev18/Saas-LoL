// ============================================================
// Topo do Rift — Camada de dados (Patch 16.21)
// Catálogos de itens, runas e feitiços + tipos compartilhados
// ============================================================

export type ChampionClass = "lutador" | "tank" | "duelista" | "mago";
export type Difficulty = 1 | 2 | 3;
export type Tier = "S" | "A" | "B";

export interface ItemInfo {
  name: string;
  cost: number;
  glyph: ItemGlyph;
  category: ItemCategory;
  desc: string;
}

export type ItemGlyph =
  | "sword"
  | "axe"
  | "shield"
  | "boot"
  | "flask"
  | "heart"
  | "bolt"
  | "bow"
  | "staff"
  | "crown"
  | "clock"
  | "flame"
  | "fist";

export type ItemCategory = "starter" | "boots" | "ad" | "tank" | "ap";

export interface ItemRef {
  id: string;
  note?: string;
}

export type RuneTree = "precision" | "sorcery" | "resolve" | "inspiration" | "domination";

export interface RuneInfo {
  name: string;
  tree: RuneTree;
  keystone?: boolean;
  desc: string;
}

export interface RuneSetup {
  primaryTree: RuneTree;
  keystone: string;
  primary: string[];
  secondaryTree: RuneTree;
  secondary: string[];
  shards: string[];
  explanation: string;
}

export interface SpellInfo {
  name: string;
  glyph: "bolt" | "portal" | "flame" | "ghost";
  desc: string;
}

export interface Ability {
  key: "P" | "Q" | "W" | "E" | "R";
  name: string;
  desc: string;
}

export interface Matchup {
  champion: string;
  note: string;
}

export interface AltBuild {
  name: string;
  when: string;
  items: ItemRef[];
  note?: string;
}

export interface Champion {
  id: string;
  name: string;
  title: string;
  classes: ChampionClass[];
  difficulty: Difficulty;
  tier: Tier;
  popular?: boolean;
  image: string;
  color: string;
  playstyle: string;
  summary: string;
  strengths: string[];
  weaknesses: string[];
  startItems: ItemRef[];
  boots: ItemRef[];
  coreItems: ItemRef[];
  situationalItems: ItemRef[];
  runes: RuneSetup;
  altRunesNote: string;
  spells: { id: string; note: string }[];
  skillPriority: ("Q" | "W" | "E")[];
  abilities: Ability[];
  comboTips: string[];
  tips: { early: string[]; mid: string[]; late: string[] };
  strongAgainst: Matchup[];
  weakAgainst: Matchup[];
  counterTips: string[];
  altBuilds: AltBuild[];
}

// ------------------------------------------------------------
// Catálogo de itens
// ------------------------------------------------------------
export const ITEMS: Record<string, ItemInfo> = {
  // Iniciais
  "dorans-blade": {
    name: "Doran's Blade",
    cost: 450,
    glyph: "sword",
    category: "starter",
    desc: "Dano de ataque, vida e um pouco de roubo de vida. Inicial clássica de lutadores AD.",
  },
  "dorans-shield": {
    name: "Doran's Shield",
    cost: 450,
    glyph: "shield",
    category: "starter",
    desc: "Vida e regeneração; após tomar dano de campeão, seus básicos causam dano extra. Inicial contra poke e matchups difíceis.",
  },
  "dorans-ring": {
    name: "Doran's Ring",
    cost: 400,
    glyph: "crown",
    category: "starter",
    desc: "Poder de habilidade, vida e regeneração de mana (restaura mana ao abater tropas). Inicial de magos.",
  },
  "health-potion": {
    name: "Poção de Vida",
    cost: 50,
    glyph: "flask",
    category: "starter",
    desc: "Restaura vida ao longo de 15 segundos. Sempre leve ao menos uma.",
  },
  "refillable-potion": {
    name: "Poção Reutilizável",
    cost: 150,
    glyph: "flask",
    category: "starter",
    desc: "Duas cargas que recarregam ao voltar à base. Economiza ouro no longo prazo.",
  },

  // Botas
  "plated-steelcaps": {
    name: "Plated Steelcaps",
    cost: 1200,
    glyph: "boot",
    category: "boots",
    desc: "Armadura e reduz 12% do dano de ataques básicos. Essencial contra lutadores e atiradores AD.",
  },
  "mercury-treads": {
    name: "Mercury's Treads",
    cost: 1250,
    glyph: "boot",
    category: "boots",
    desc: "Resistência mágica e Tenacidade (reduz a duração de desacelerações e atordoamentos).",
  },
  "berserker-greaves": {
    name: "Berserker's Greaves",
    cost: 1100,
    glyph: "boot",
    category: "boots",
    desc: "Velocidade de ataque para campeões que dependem de básicos.",
  },
  "sorcerers-shoes": {
    name: "Sorcerer's Shoes",
    cost: 1100,
    glyph: "boot",
    category: "boots",
    desc: "Penetração mágica para maximizar o dano de habilidades.",
  },
  "ionian-boots": {
    name: "Ionian Boots of Lucidity",
    cost: 900,
    glyph: "boot",
    category: "boots",
    desc: "Aceleração de habilidade e redução do tempo de recarga de feitiços de invocador.",
  },
  "boots-of-swiftness": {
    name: "Boots of Swiftness",
    cost: 1000,
    glyph: "boot",
    category: "boots",
    desc: "Velocidade de movimento alta e resistência a desacelerações.",
  },

  // Lutadores / AD
  "sundered-sky": {
    name: "Sundered Sky",
    cost: 3100,
    glyph: "sword",
    category: "ad",
    desc: "Seu primeiro básico contra cada alvo causa dano crítico garantido e cura você. Excelente em trocas curtas.",
  },
  "black-cleaver": {
    name: "Black Cleaver",
    cost: 3000,
    glyph: "axe",
    category: "ad",
    desc: "Acumula redução de armadura no alvo e concede aceleração. Item anti-tank clássico.",
  },
  "steraks-gage": {
    name: "Sterak's Gage",
    cost: 3200,
    glyph: "fist",
    category: "ad",
    desc: "Vida e dano; quando você cai de vida, ativa um escudo salva-vidas. Ideal para brigas prolongadas.",
  },
  "stridebreaker": {
    name: "Stridebreaker",
    cost: 3300,
    glyph: "axe",
    category: "ad",
    desc: "Ativo em área ao redor que desacelera todos os inimigos. Ajuda a colar em alvos móveis.",
  },
  "titanic-hydra": {
    name: "Titanic Hydra",
    cost: 3300,
    glyph: "axe",
    category: "ad",
    desc: "Muita vida; seus básicos causam dano em área que escala com sua vida máxima.",
  },
  "ravenous-hydra": {
    name: "Ravenous Hydra",
    cost: 3300,
    glyph: "axe",
    category: "ad",
    desc: "Omnivamp e dano em área com básicos. Sustain e limpeza de onda fortes.",
  },
  botrk: {
    name: "Blade of the Ruined King",
    cost: 3200,
    glyph: "sword",
    category: "ad",
    desc: "Básicos causam dano baseado na vida atual do alvo — tritura tanques e campeões de muita vida.",
  },
  "trinity-force": {
    name: "Trinity Force",
    cost: 3333,
    glyph: "sword",
    category: "ad",
    desc: "Ataque, vida e passiva tipo Sheen: após usar habilidade, o próximo básico causa dano extra.",
  },
  hullbreaker: {
    name: "Hullbreaker",
    cost: 3000,
    glyph: "shield",
    category: "ad",
    desc: "Enorme poder de splitpush: resistências extras e mais dano a estruturas quando sozinho em rota.",
  },
  "dead-mans-plate": {
    name: "Dead Man's Plate",
    cost: 2900,
    glyph: "shield",
    category: "tank",
    desc: "Armadura e vida; acumula velocidade em movimento e o básico carregado desacelera o alvo.",
  },
  "youmuus-ghostblade": {
    name: "Youmuu's Ghostblade",
    cost: 2800,
    glyph: "bolt",
    category: "ad",
    desc: "Letalidade e ativo de velocidade de movimento para caçar alvos frágeis ou alcançar quem foge.",
  },
  eclipse: {
    name: "Eclipse",
    cost: 2900,
    glyph: "bolt",
    category: "ad",
    desc: "Dois golpes seguidos no mesmo alvo causam dano baseado na vida máxima e geram um escudo.",
  },
  "deaths-dance": {
    name: "Death's Dance",
    cost: 3300,
    glyph: "shield",
    category: "ad",
    desc: "Armadura; converte parte do dano físico recebido em sangramento gradual — evita mortes instantâneas.",
  },
  "maw-of-malmortius": {
    name: "Maw of Malmortius",
    cost: 3100,
    glyph: "shield",
    category: "ad",
    desc: "Resistência mágica; escudo poderoso quando sua vida cai baixo contra dano mágico.",
  },
  "guardian-angel": {
    name: "Guardian Angel",
    cost: 3200,
    glyph: "crown",
    category: "ad",
    desc: "Armadura e dano; ressuscita com parte da vida uma vez a cada intervalo. Seguro para brigas arriscadas.",
  },
  "chempunk-chainsword": {
    name: "Chempunk Chainsword",
    cost: 3000,
    glyph: "flame",
    category: "ad",
    desc: "Vida e dano; aplica Ferimentos Graves (reduz curas). Contra campeões com muita regeneração.",
  },
  "mortal-reminder": {
    name: "Mortal Reminder",
    cost: 3000,
    glyph: "flame",
    category: "ad",
    desc: "Penetração de armadura e Ferimentos Graves. Anti-cura para finalizar a build.",
  },
  "seryldas-grudge": {
    name: "Serylda's Grudge",
    cost: 3000,
    glyph: "bolt",
    category: "ad",
    desc: "Penetração de armadura; suas habilidades desaceleram os alvos atingidos.",
  },
  "wits-end": {
    name: "Wit's End",
    cost: 2800,
    glyph: "bow",
    category: "ad",
    desc: "Resistência mágica e dano mágico on-hit nos básicos. Item híbrido contra times AP.",
  },
  "phantom-dancer": {
    name: "Phantom Dancer",
    cost: 2800,
    glyph: "bow",
    category: "ad",
    desc: "Velocidade de ataque e movimento; ao atacar, ganha um fantasma temporário que acelera você. Para lutadores que dependem de básicos constantes.",
  },

  // Tanques
  heartsteel: {
    name: "Heartsteel",
    cost: 3000,
    glyph: "heart",
    category: "tank",
    desc: "Vida gigante; próximo básico com 3 stacks causa dano e converte parte em vida permanente.",
  },
  warmogs: {
    name: "Warmog's Armor",
    cost: 3100,
    glyph: "heart",
    category: "tank",
    desc: "Vida massiva e regeneração aceleradíssima fora de combate. Recupere entre brigas.",
  },
  jaksho: {
    name: "Jak'Sho, The Protean",
    cost: 3200,
    glyph: "shield",
    category: "tank",
    desc: "Resistências que crescem a cada segundo em combate prolongado — quanto mais a briga dura, mais tanque você fica.",
  },
  "sunfire-aegis": {
    name: "Sunfire Aegis",
    cost: 2800,
    glyph: "flame",
    category: "tank",
    desc: "Imolação: dano mágico constante em área ao redor. Dano e pressão de rota.",
  },
  "hollow-radiance": {
    name: "Hollow Radiance",
    cost: 2800,
    glyph: "flame",
    category: "tank",
    desc: "Versão com resistência mágica da Sunfire e limpeza de ondas ainda mais forte.",
  },
  "kaenic-rookern": {
    name: "Kaenic Rookern",
    cost: 2900,
    glyph: "shield",
    category: "tank",
    desc: "Grande resistência mágica com escudo mágico que regenera fora de combate.",
  },
  "force-of-nature": {
    name: "Force of Nature",
    cost: 2800,
    glyph: "bolt",
    category: "tank",
    desc: "Resistência mágica; acumula velocidade e redução de dano mágico ao receber habilidades.",
  },
  "spirit-visage": {
    name: "Spirit Visage",
    cost: 2700,
    glyph: "heart",
    category: "tank",
    desc: "Resistência mágica e vida; amplifica todas as suas curas e regenerações.",
  },
  thornmail: {
    name: "Thornmail",
    cost: 2450,
    glyph: "shield",
    category: "tank",
    desc: "Armadura pesada; quem te ataca sofre dano e Ferimentos Graves. Contra lutadores de básico.",
  },
  "frozen-heart": {
    name: "Frozen Heart",
    cost: 2500,
    glyph: "clock",
    category: "tank",
    desc: "Armadura e mana; reduz a velocidade de ataque de inimigos próximos. Contra atiradores e lutadores de AS.",
  },
  "randuins-omen": {
    name: "Randuin's Omen",
    cost: 2700,
    glyph: "shield",
    category: "tank",
    desc: "Armadura e vida; reduz dano crítico recebido e o ativo desacelera em área.",
  },
  "unending-despair": {
    name: "Unending Despair",
    cost: 2800,
    glyph: "heart",
    category: "tank",
    desc: "Vida e resistências; drena vida e causa dano percentual nos inimigos ao redor periodicamente.",
  },
  "iceborn-gauntlet": {
    name: "Iceborn Gauntlet",
    cost: 2900,
    glyph: "fist",
    category: "tank",
    desc: "Passiva tipo Sheen para tanques: cria campo de gelo que desacelera após usar habilidade.",
  },
  "abyssal-mask": {
    name: "Abyssal Mask",
    cost: 2650,
    glyph: "staff",
    category: "tank",
    desc: "Vida e MR; reduz a resistência mágica dos inimigos próximos — amplifica o AP do seu time.",
  },

  // AP
  riftmaker: {
    name: "Riftmaker",
    cost: 3100,
    glyph: "staff",
    category: "ap",
    desc: "AP, vida e omnivamp; dano crescente enquanto você permanece em combate. O 'Sundered Sky' dos lutadores AP.",
  },
  "rod-of-ages": {
    name: "Rod of Ages",
    cost: 2600,
    glyph: "staff",
    category: "ap",
    desc: "AP, vida e mana que escalam com o tempo — seguro para early fraco e late forte.",
  },
  rylais: {
    name: "Rylai's Crystal Scepter",
    cost: 2600,
    glyph: "staff",
    category: "ap",
    desc: "Vida e AP; suas habilidades desaceleram os alvos. Fácil de acertar combos.",
  },
  liandrys: {
    name: "Liandry's Torment",
    cost: 3000,
    glyph: "flame",
    category: "ap",
    desc: "AP e vida; dano contínuo baseado na vida máxima do alvo. Derrete tanques.",
  },
  zhonyas: {
    name: "Zhonya's Hourglass",
    cost: 3250,
    glyph: "clock",
    category: "ap",
    desc: "AP e armadura; ativo de invulnerabilidade por 2,5s. Adia ultimates e agressões.",
  },
  rabaddons: {
    name: "Rabadon's Deathcap",
    cost: 3500,
    glyph: "crown",
    category: "ap",
    desc: "AP altíssimo; amplifica todo o seu poder de habilidade. Item de late game.",
  },
  "void-staff": {
    name: "Void Staff",
    cost: 3000,
    glyph: "staff",
    category: "ap",
    desc: "Penetração mágica alta — obrigatório quando o inimigo compra resistência mágica.",
  },
  cryptbloom: {
    name: "Cryptbloom",
    cost: 3000,
    glyph: "flask",
    category: "ap",
    desc: "Penetração mágica; ao abater um inimigo, explode em cura em área para o seu time.",
  },
  "nashors-tooth": {
    name: "Nashor's Tooth",
    cost: 2900,
    glyph: "bow",
    category: "ap",
    desc: "AP, velocidade de ataque e dano mágico nos básicos. Para magos que lutam corpo a corpo.",
  },
  stormsurge: {
    name: "Stormsurge",
    cost: 2800,
    glyph: "bolt",
    category: "ap",
    desc: "AP; ao acumular dano suficiente em um alvo, causa uma explosão mágica em área e dá velocidade.",
  },
  morellonomicon: {
    name: "Morellonomicon",
    cost: 2850,
    glyph: "flame",
    category: "ap",
    desc: "AP e vida; aplica Ferimentos Graves ao causar dano mágico. Anti-cura AP.",
  },
  shadowflame: {
    name: "Shadowflame",
    cost: 3000,
    glyph: "bolt",
    category: "ap",
    desc: "AP e penetração mágica; contra alvos escudados, causa dano crítico extra. Execute de poke.",
  },
};

// ------------------------------------------------------------
// Catálogo de runas
// ------------------------------------------------------------
export const RUNES: Record<string, RuneInfo> = {
  // Precision
  conqueror: {
    name: "Conqueror",
    tree: "precision",
    keystone: true,
    desc: "Acumula dano adaptativo a cada ataque/habilidade em combate; ao encher, cura parte do dano causado. Ideal para brigas longas.",
  },
  "lethal-tempo": {
    name: "Lethal Tempo",
    tree: "precision",
    keystone: true,
    desc: "Ataques seguidos concedem velocidade de ataque acumulável (pode ultrapassar o limite) e estendem a duração em combate. Para quem depende de básicos constantes.",
  },
  "fleet-footwork": {
    name: "Fleet Footwork",
    tree: "precision",
    keystone: true,
    desc: "Básicos carregam energia; o básico carregado causa dano extra, cura e dá velocidade. Para fases de rota tranquilas.",
  },
  triumph: {
    name: "Triumph",
    tree: "precision",
    desc: "Restaura vida (e dá ouro) ao participar de abates — salva em trocas muito próximas.",
  },
  "presence-of-mind": {
    name: "Presence of Mind",
    tree: "precision",
    desc: "Restaura mana/energia em abates e participações e reduz custos por alguns segundos.",
  },
  "legend-alacrity": {
    name: "Legend: Alacrity",
    tree: "precision",
    desc: "Velocidade de ataque acumulável com tropas, monstros e abates.",
  },
  "legend-haste": {
    name: "Legend: Haste",
    tree: "precision",
    desc: "Aceleração de habilidade acumulável com tropas, monstros e abates — mais Qs por minuto.",
  },
  "legend-bloodline": {
    name: "Legend: Bloodline",
    tree: "precision",
    desc: "Vida e omnivamp acumuláveis. Sustain passivo para a rota.",
  },
  "last-stand": {
    name: "Last Stand",
    tree: "precision",
    desc: "Causa mais dano quando você está com pouca vida — sinergia com escudos e salvamentos.",
  },
  "taste-of-blood": {
    name: "Taste of Blood",
    tree: "domination",
    desc: "Cura periódica ao atacar campeões — sustain barato para a rota.",
  },
  "treasure-hunter": {
    name: "Treasure Hunter",
    tree: "domination",
    desc: "Ouro extra por abate único, acelerando seu primeiro item.",
  },
  "cut-down": {
    name: "Cut Down",
    tree: "precision",
    desc: "Dano extra contra alvos com mais vida que você.",
  },

  // Sorcery
  "arcane-comet": {
    name: "Arcane Comet",
    tree: "sorcery",
    keystone: true,
    desc: "O primeiro dano em um campeão a cada intervalo chama um cometa em área. O poke de habilidades fica muito mais doloroso.",
  },
  "manaflow-band": {
    name: "Manaflow Band",
    tree: "sorcery",
    desc: "Mana máxima extra e restauração periódica de mana — sustenta o spam de habilidades na rota.",
  },
  "stormraiders-surge": {
    name: "Stormraider's Surge",
    tree: "sorcery",
    keystone: true,
    desc: "Ao causar dano suficiente em um campeão em pouco tempo, ganha velocidade de movimento e resistência a desaceleração. Perfeito para colar nos alvos (retornou no patch 26.9).",
  },
  "nimbus-cloak": {
    name: "Nimbus Cloak",
    tree: "sorcery",
    desc: "Após usar Flash ou outro feitiço de invocador, ganha velocidade de movimento por alguns segundos.",
  },
  celerity: {
    name: "Celerity",
    tree: "sorcery",
    desc: "Velocidade de movimento extra convertida em dano adaptativo.",
  },
  transcendence: {
    name: "Transcendence",
    tree: "sorcery",
    desc: "Concede aceleração de habilidade bônus conforme o jogo avança.",
  },
  scorch: {
    name: "Scorch",
    tree: "sorcery",
    desc: "O primeiro dano em um campeão a cada intervalo queima por dano mágico extra. Pressão de rota.",
  },
  "gathering-storm": {
    name: "Gathering Storm",
    tree: "sorcery",
    desc: "Dano adaptativo que cresce a cada minuto — fortalece o late game.",
  },

  // Resolve
  aftershock: {
    name: "Aftershock",
    tree: "resolve",
    keystone: true,
    desc: "Após imobilizar um inimigo, ganha resistências e explode em dano ao redor. Para tanques que iniciam com CC.",
  },
  grasp: {
    name: "Grasp of the Undying",
    tree: "resolve",
    keystone: true,
    desc: "A cada 4s em combate, seu próximo básico causa dano baseado na sua vida máxima, cura você e dá vida permanente. Runa de trocas curtas.",
  },
  demolish: {
    name: "Demolish",
    tree: "resolve",
    desc: "Quando sozinho perto de uma torre, carrega um golpe extra contra ela — pressão de rota e placas de ouro.",
  },
  "second-wind": {
    name: "Second Wind",
    tree: "resolve",
    desc: "Regenera vida após receber dano de campeões. Essencial contra poke e trocas desgastantes.",
  },
  "bone-plating": {
    name: "Bone Plating",
    tree: "resolve",
    desc: "Após ser atingido por uma habilidade, reduz o dano dos próximos 3 golpes. Anti-burst.",
  },
  overgrowth: {
    name: "Overgrowth",
    tree: "resolve",
    desc: "Acumula vida permanente conforme tropas morrem perto de você.",
  },
  unflinching: {
    name: "Unflinching",
    tree: "resolve",
    desc: "Tenacidade e resistência a desaceleração; aumenta ao usar feitiços de invocador.",
  },

  // Inspiration
  "magical-footwear": {
    name: "Magical Footwear",
    tree: "inspiration",
    desc: "Recebe botas gratuitas aos 12 minutos (com velocidade extra). Economia de ouro.",
  },
  "cosmic-insight": {
    name: "Cosmic Insight",
    tree: "inspiration",
    desc: "Aceleração de habilidade e redução de recarga de feitiços de invocador e itens.",
  },

  // Domination
  "sudden-impact": {
    name: "Sudden Impact",
    tree: "domination",
    desc: "Após um dash, teleporte ou sair de furtividade, ganha penetração por alguns segundos.",
  },
  "ultimate-hunter": {
    name: "Ultimate Hunter",
    tree: "domination",
    desc: "Redução de recarga do ultimate acumulável com abates. Mais Rs por partida.",
  },
};

export const RUNE_TREES: Record<RuneTree, { name: string; color: string }> = {
  precision: { name: "Precision", color: "#C8AA6E" },
  sorcery: { name: "Sorcery", color: "#4EC9D4" },
  resolve: { name: "Resolve", color: "#5FAF6E" },
  inspiration: { name: "Inspiration", color: "#A0A8B8" },
  domination: { name: "Domination", color: "#C8324B" },
};

// ------------------------------------------------------------
// Feitiços de invocador
// ------------------------------------------------------------
export const SPELLS: Record<string, SpellInfo> = {
  flash: {
    name: "Flash",
    glyph: "bolt",
    desc: "Teleporte instantâneo de curta distância. O feitiço mais importante do jogo — use para escapar, caçar ou corrigir o posicionamento.",
  },
  teleport: {
    name: "Teleporte",
    glyph: "portal",
    desc: "Viaja até uma torre, tropa ou ward. Volta rápido à rota, alcança brigas no mapa e cria pressão de splitpush.",
  },
  ignite: {
    name: "Incendiar",
    glyph: "flame",
    desc: "Dano verdadeiro ao longo do tempo e reduz curas. Pressão de abate na rota — cuidado, pois você fica sem TP.",
  },
  ghost: {
    name: "Fantasma",
    glyph: "ghost",
    desc: "Velocidade de movimento por muito tempo. Para campeões que precisam colar no alvo durante toda a briga.",
  },
};

// ------------------------------------------------------------
// Metadados de classes / dificuldade / tier
// ------------------------------------------------------------
export const CLASS_META: Record<ChampionClass, { label: string; color: string; desc: string }> = {
  lutador: {
    label: "Lutador",
    color: "#E8902F",
    desc: "Vida e dano equilibrados; briga corpo a corpo prolongada.",
  },
  tank: {
    label: "Tanque",
    color: "#5C8AA0",
    desc: "Muita vida e resistências; inicia brigas e protege o time.",
  },
  duelista: {
    label: "Duelista",
    color: "#C8324B",
    desc: "Dano altíssimo 1v1 e mobilidade; vence trocas isoladas.",
  },
  mago: {
    label: "Mago",
    color: "#A25CE8",
    desc: "Dano mágico com habilidades; alcance e área de efeito.",
  },
};

export const DIFFICULTY_META: Record<Difficulty, { label: string; desc: string }> = {
  1: { label: "Fácil", desc: "Kit direto, ótimo para começar na rota." },
  2: { label: "Moderada", desc: "Exige noção de timing e recursos." },
  3: { label: "Difícil", desc: "Mecânicas exigentes; recompensa prática." },
};

export const TIER_META: Record<Tier, { label: string; color: string; desc: string }> = {
  S: { label: "S", color: "#F0B93C", desc: "Forte no meta atual — prioridade de pick." },
  A: { label: "A", color: "#0AC8B9", desc: "Sólido e confiável na maioria dos elos." },
  B: { label: "B", color: "#8C9BA8", desc: "Situacional; exige mais do jogador." },
};

export const PATCH_VERSION = "16.21";
export const SEASON_LABEL = "Temporada 2026";

// ------------------------------------------------------------
// Gera a sequência de habilidades (níveis 1–18) da prioridade
// Padrão: 1×P1 / 1×P2 / 1×P3, completa P1, depois P2, por fim P3
// ------------------------------------------------------------
export function buildSkillSequence(priority: ("Q" | "W" | "E")[]): ("Q" | "W" | "E" | "R")[] {
  const [p1, p2, p3] = priority;
  const pool: ("Q" | "W" | "E")[] = [p1, p2, p3];
  pool.push(p1, p1, p1, p1); // P1 total = 5 (maximizada ~nível 8)
  pool.push(p2, p2, p2, p2); // P2 total = 5 (maximizada ~nível 13)
  pool.push(p3, p3, p3, p3); // P3 total = 5 (maximizada no 18)
  const result: ("Q" | "W" | "E" | "R")[] = [];
  let idx = 0;
  for (let level = 1; level <= 18; level++) {
    if (level === 6 || level === 11 || level === 16) {
      result.push("R");
    } else {
      result.push(pool[idx] ?? p3);
      idx++;
    }
  }
  return result;
}
