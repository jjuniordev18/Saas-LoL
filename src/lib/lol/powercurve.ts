// ============================================================
// Topo do Rift — Curva de poder & perfil de dano
// Valores autorais (0–100) baseados em conhecimento do jogo:
// - early/mid/late: força relativa do campeão em cada fase
//   (85+ = pico forte, 70+ = sólido, <55 = frágil na fase)
// - spikes: marcos de nível/item em que o campeão fica
//   visivelmente mais forte ("power spikes")
// - dmg: distribuição aproximada do tipo de dano na build
//   padrão — responde "armadura ou resistência mágica?"
// ============================================================
import type { Champion } from "./data";

export interface PowerCurve {
  early: number;
  mid: number;
  late: number;
  /** Marcos de poder (níveis, itens e condições) */
  spikes: string[];
  /** Perfil de dano aproximado (%) — soma ~100 */
  dmg: { fisico: number; magico: number; verdadeiro: number };
  /** Como responder ao dano deste campeão com itens */
  counterItemTip: string;
}

export const POWER_CURVES: Record<string, PowerCurve> = {
  // ---------- A ----------
  aatrox: {
    early: 68, mid: 86, late: 66,
    spikes: [
      "Nível 6 — World Eater cura em área e transforma toda briga prolongada",
      "1º item (Eclipse ou Sundered Sky) — o Q passa a picotar tanques",
    ],
    dmg: { fisico: 95, magico: 0, verdadeiro: 5 },
    counterItemTip: "Armadura e Plated Steelcaps derrubam quase todo o kit dele.",
  },
  anivia: {
    early: 48, mid: 80, late: 86,
    spikes: [
      "Nível 6 — Glacial Storm zoneia a rota inteira e garante farm seguro",
      "Rod of Ages completo — mana e vida para usar o kit sem medo",
    ],
    dmg: { fisico: 0, magico: 100, verdadeiro: 0 },
    counterItemTip: "Resistência mágica: Mercury's Treads e Spirit Visage.",
  },
  // ---------- C ----------
  camille: {
    early: 52, mid: 80, late: 92,
    spikes: [
      "Nível 6 — The Hookshot dá imobilidade e execução em torres",
      "Trinity Force + Ravenous Hydra — duelos e splitpush de elite",
    ],
    dmg: { fisico: 78, magico: 0, verdadeiro: 22 },
    counterItemTip: "Armadura, e o W (Aegis Protection) exige trocas curtas.",
  },
  chogath: {
    early: 62, mid: 75, late: 84,
    spikes: [
      "Nível 6 — Feast é execução verdadeira e empilha vida eterna",
      "6+ stacks de Feast — o tanque fica maior que a rota",
    ],
    dmg: { fisico: 8, magico: 77, verdadeiro: 15 },
    counterItemTip: "Resistência mágica; Kaenic Rookern anula o Feast no late.",
  },
  // ---------- D ----------
  darius: {
    early: 82, mid: 86, late: 62,
    spikes: [
      "Nível 6 — Noxian Might (5 stacks) é praticamente abate garantido",
      "1º item (Sundered Sky) — cada troca curta vira a favor dele",
    ],
    dmg: { fisico: 72, magico: 0, verdadeiro: 28 },
    counterItemTip: "Kite a distância; armadura ajuda, mas posicionamento é a resposta real.",
  },
  drmundo: {
    early: 55, mid: 80, late: 88,
    spikes: [
      "Nível 6 — Sadism vira um tanque que regenera mais rápido do que morre",
      "Warmog's + Heartsteel — impossível de derrubar em brigas longas",
    ],
    dmg: { fisico: 42, magico: 58, verdadeiro: 0 },
    counterItemTip: "Ferimentos Graves (Chempunk/Mortal Reminder) e resistência mágica cedo.",
  },
  // ---------- F ----------
  fiora: {
    early: 58, mid: 80, late: 95,
    spikes: [
      "Nível 6 — Duelist's Dance + ult expõe fraquezas em todo 1v1",
      "2º item (Ravenous Hydra) — splitpush que exige dois inimigos para segurar",
    ],
    dmg: { fisico: 68, magico: 0, verdadeiro: 32 },
    counterItemTip: "A vitela (Riposte) bloqueia CC — guarde seu atordoamento para depois dela.",
  },
  gangplank: {
    early: 44, mid: 72, late: 96,
    spikes: [
      "Nível 6 — Cannon Barrage muda brigas do mapa inteiro com o ult",
      "Trinity Force + crítica — barris de dois toques derretem times",
    ],
    dmg: { fisico: 100, magico: 0, verdadeiro: 0 },
    counterItemTip: "Armadura e fechar nele antes de empilhar barris.",
  },
  garen: {
    early: 76, mid: 76, late: 70,
    spikes: [
      "Nível 6 — Demacian Justice executa com dano baseado na vida perdida",
      "Stridebreaker + Dead Man's Plate — gira e alcança qualquer um",
    ],
    dmg: { fisico: 85, magico: 15, verdadeiro: 0 },
    counterItemTip: "Armadura contra o E; ele não tem gap closer real além da velocidade.",
  },
  gnar: {
    early: 60, mid: 86, late: 80,
    spikes: [
      "Nível 6 — GNAR! atordoa em área e abre TODA briga de teamfight",
      "Black Cleaver + Serylda's — o mega-Gnar governa corridas de obj",
    ],
    dmg: { fisico: 100, magico: 0, verdadeiro: 0 },
    counterItemTip: "Armadura; controle a barra de fúria para não brigar no mega-Gnar.",
  },
  gwen: {
    early: 46, mid: 76, late: 90,
    spikes: [
      "Nível 6 — Needlework (R) dá execução de área e sustain em briga",
      "Riftmaker + Nashor's — o Hallowed Mist escurece o 1v1",
    ],
    dmg: { fisico: 0, magico: 100, verdadeiro: 0 },
    counterItemTip: "Resistência mágica; saia da zona da W antes de trocar.",
  },
  // ---------- I ----------
  illaoi: {
    early: 72, mid: 86, late: 76,
    spikes: [
      "Nível 6 — From Beyond invoca tentáculos e vence 2v1 estáticos",
      "Ravenous/Sundered — cada tentáculo bate como um item",
    ],
    dmg: { fisico: 100, magico: 0, verdadeiro: 0 },
    counterItemTip: "Nunca brigue dentro do ult dela; armadura para o farm dos tentáculos.",
  },
  irelia: {
    early: 66, mid: 86, late: 80,
    spikes: [
      "Nível 6 — Vanguard's Edge + stacks de passive estouram trocas",
      "BotRK (Blade of the Ruined King) — tropas viram munição de Q",
    ],
    dmg: { fisico: 52, magico: 48, verdadeiro: 0 },
    counterItemTip: "Resistências mistas; negue tropas — sem minions, o Q dela morre.",
  },
  // ---------- J ----------
  jax: {
    early: 56, mid: 80, late: 92,
    spikes: [
      "Nível 6 — Grandmaster's Might (R) dá dano por 3º golpe em série",
      "Trinity Force + Sundered Sky — o Counter Strike neutraliza AD",
    ],
    dmg: { fisico: 38, magico: 62, verdadeiro: 0 },
    counterItemTip: "Dano misto: resistência mágica não basta, armadura também.",
  },
  jayce: {
    early: 86, mid: 75, late: 58,
    spikes: [
      "Nível 1-3 — Shock Blast + gate é o poke mais forte do early de topo",
      "1º item (Eclipse/Youmuu's) — a janela de abate mais perigosa",
    ],
    dmg: { fisico: 100, magico: 0, verdadeiro: 0 },
    counterItemTip: "Segundo Wind + Doran's Shield e force o jogo para depois do 20 min.",
  },
  // ---------- K ----------
  kayle: {
    early: 16, mid: 55, late: 100,
    spikes: [
      "Nível 6/11 — vira ranged e o dano mágico em área dispara",
      "Nível 16 — Transcendent: o late game mais temido do topo",
    ],
    dmg: { fisico: 28, magico: 72, verdadeiro: 0 },
    counterItemTip: "Mate ela ANTES do 16 — após isso, resistência mágica e CC constante.",
  },
  kled: {
    early: 76, mid: 80, late: 64,
    spikes: [
      "Desmontado → montado: cada troca pode recarregar a bravura dele",
      "Nível 6 — Violent Tendencies + ult em área abre qualquer side",
    ],
    dmg: { fisico: 100, magico: 0, verdadeiro: 0 },
    counterItemTip: "Derrube a Skaarl primeiro — ele desmontado é frágil e sem escape.",
  },
  ksante: {
    early: 58, mid: 80, late: 86,
    spikes: [
      "Nível 6 — Apex Prelude + Path Maker inicia brigas por trás de muralhas",
      "2-3 itens de tank — vira imortal no ponto de objective",
    ],
    dmg: { fisico: 88, magico: 12, verdadeiro: 0 },
    counterItemTip: "Ferimentos Graves e kiting — o all-in dele só funciona colado.",
  },
  // ---------- M ----------
  malphite: {
    early: 58, mid: 76, late: 82,
    spikes: [
      "Nível 6 — Unstoppable Force atordoa em área e abre toda teamfight",
      "Armadura acumulada — Ground Slam escala com armadura dele",
    ],
    dmg: { fisico: 22, magico: 78, verdadeiro: 0 },
    counterItemTip: "Não agrupe perto dele; dano mágico não resolve — ele compra MR também.",
  },
  mordekaiser: {
    early: 54, mid: 86, late: 80,
    spikes: [
      "Nível 6 — Realm of Death isola e geralmente vence qualquer 1v1",
      "Riftmaker + Rylai's — o Q conectado não deixa você fugir",
    ],
    dmg: { fisico: 0, magico: 100, verdadeiro: 0 },
    counterItemTip: "Resistência mágica e QSS/Cleanse para sair do mundo da ult.",
  },
  // ---------- N ----------
  nasus: {
    early: 40, mid: 76, late: 96,
    spikes: [
      "Siphoning Strike — cada stack é permanente: o tempo joga a favor dele",
      "Nível 6 + Fury of the Sands — o aura e a vida máxima dobra",
    ],
    dmg: { fisico: 60, magico: 40, verdadeiro: 0 },
    counterItemTip: "Negue stacks cedo com poke e dives — depois de 500 stacks só kiting salva.",
  },
  // ---------- O ----------
  olaf: {
    early: 86, mid: 78, late: 52,
    spikes: [
      "Nível 1-3 — Ragnarok imune a CC: all-in nível 2 é real",
      "1º item (Sundered/Stridebreaker) — ninguém troca com ele cedo",
    ],
    dmg: { fisico: 85, magico: 0, verdadeiro: 15 },
    counterItemTip: "Kite infinito — sem Fantasma ele morre sem tocar ninguém no late.",
  },
  ornn: {
    early: 55, mid: 86, late: 86,
    spikes: [
      "Nível 6 — avisa e derruba torres com Call of the Forge God",
      "Itens aprimorados (Masterworks) — o time inteiro fica mais forte",
    ],
    dmg: { fisico: 55, magico: 45, verdadeiro: 0 },
    counterItemTip: "Dano misto; a W ignora resistências parciais — position entre vocês e a torre.",
  },
  // ---------- P ----------
  pantheon: {
    early: 86, mid: 68, late: 48,
    spikes: [
      "Nível 1-5 — Comet Spear + escudo vence TODA troca curta do early",
      "Grand Starfall (R) — rotate antes de todo mundo e crie 2v1",
    ],
    dmg: { fisico: 100, magico: 0, verdadeiro: 0 },
    counterItemTip: "Armadura + sustain; sobreviva ao early e ele vira peão no late.",
  },
  poppy: {
    early: 70, mid: 76, late: 76,
    spikes: [
      "Nível 6 — Keeper's Verdict arremessa e separa o carry inimigo",
      "2 itens de tank — Iron Ambassador e W negam todos os dashes",
    ],
    dmg: { fisico: 100, magico: 0, verdadeiro: 0 },
    counterItemTip: "Armadura; evite usar dash perto dela — o W cancela e atordoa.",
  },
  quinn: {
    early: 76, mid: 80, late: 74,
    spikes: [
      "Nível 6 — Skystrike + Behind Enemy Lines gira o mapa inteiro",
      "1º item (Eclipse/Profane) — o poke de topo vira pressão de abate",
    ],
    dmg: { fisico: 100, magico: 0, verdadeiro: 0 },
    counterItemTip: "Doran's Shield + Second Wind; fixe visão — ela roam para o mid o tempo todo.",
  },
  // ---------- R ----------
  renekton: {
    early: 86, mid: 74, late: 54,
    spikes: [
      "Nível 3 — Slice & Dice com 50 de fúria vence a primeira onda de trocas",
      "Nível 6 — Dominus dá vida extra e fecha a rota no early",
    ],
    dmg: { fisico: 94, magico: 6, verdadeiro: 0 },
    counterItemTip: "Sobreviva ao early com Doran's Shield; ele esfria após o nível 11.",
  },
  riven: {
    early: 66, mid: 86, late: 80,
    spikes: [
      "Nível 6 — Blade of the Exile dá burst de execução em área",
      "Eclipse/Sundered + combo R-flash — mata carry em 1.5 segundos",
    ],
    dmg: { fisico: 100, magico: 0, verdadeiro: 0 },
    counterItemTip: "Bone Plating + trocas curtas; puna os cooldowns do dash (E) dela.",
  },
  rumble: {
    early: 60, mid: 86, late: 80,
    spikes: [
      "Nível 6 — The Equalizer decide teamfights do outro lado do mapa",
      "Liandry's + Rylai's — o perigo (Overheat) derrete times inteiros",
    ],
    dmg: { fisico: 0, magico: 100, verdadeiro: 0 },
    counterItemTip: "Resistência mágica e espalhe o time no ult dele.",
  },
  // ---------- S ----------
  sett: {
    early: 76, mid: 80, late: 68,
    spikes: [
      "Nível 6 — Showstopper pega dois por trás e vira a briga",
      "Grit cheio — o Haymaker (W) verdadeiro pune qualquer burst",
    ],
    dmg: { fisico: 78, magico: 0, verdadeiro: 22 },
    counterItemTip: "O W central é dano verdadeiro: evite agrupar vida máxima em linha.",
  },
  shen: {
    early: 60, mid: 80, late: 76,
    spikes: [
      "Nível 6 — Stand United: o ult global cria 2v1 em QUALQUER rota",
      "Sunfire + Spirit Visage — a espada Q atinge % de vida",
    ],
    dmg: { fisico: 28, magico: 72, verdadeiro: 0 },
    counterItemTip: "Puna o TP do ult; dano mágico ajuda, mas o bloqueio (W) nega básicos.",
  },
  singed: {
    early: 48, mid: 80, late: 86,
    spikes: [
      "Nível 6 — Insanity Potion vira o saco de gato mais difícil de matar",
      "Rod of Ages + Rylai's — a nuvem (% de vida) derrete quem persegue",
    ],
    dmg: { fisico: 0, magico: 100, verdadeiro: 0 },
    counterItemTip: "Resistência mágica + Ferimentos Graves; NUNCA persiga por trás da nuvem.",
  },
  sion: {
    early: 56, mid: 76, late: 86,
    spikes: [
      "Soul Furnace — cada abate empilha vida permanente (até no infinito)",
      "Nível 6 + Heartsteel — o alvo do ult nunca escapa do stun em área",
    ],
    dmg: { fisico: 86, magico: 14, verdadeiro: 0 },
    counterItemTip: "Armadura; fique de lado do ult dele e respeite o combo W-explosão.",
  },
  // ---------- T ----------
  teemo: {
    early: 70, mid: 74, late: 70,
    spikes: [
      "Nível 6 — Noxious Trap (shrooms) guarda a rota e mapeia o inimigo",
      "Liandry's + Nashor's — os shrooms tornam-se torres vivas",
    ],
    dmg: { fisico: 14, magico: 86, verdadeiro: 0 },
    counterItemTip: "Oracle Lens/visor; o W dele pune ganks — chame o jungle com CC instantâneo.",
  },
  tryndamere: {
    early: 55, mid: 76, late: 92,
    spikes: [
      "Nível 6 — Undying Rage: 5 segundos de imortalidade para dividir torres",
      "Berserker's + items críticos — o spin (E) atravessa a selva toda",
    ],
    dmg: { fisico: 100, magico: 0, verdadeiro: 0 },
    counterItemTip: "Randuin's/Frozen Heart (vel. ataque) e force o W antes do all-in dele.",
  },
  // ---------- U ----------
  urgot: {
    early: 64, mid: 86, late: 82,
    spikes: [
      "Nível 6 — Fear beyond Death executa metade da vida de qualquer um",
      "1º item (Black Cleaver) — as pernas de shred viram metralhadora",
    ],
    dmg: { fisico: 100, magico: 0, verdadeiro: 0 },
    counterItemTip: "Armadura + aproximação lateral; o E dele é a única mobilidade real.",
  },
  // ---------- V ----------
  vladimir: {
    early: 36, mid: 70, late: 96,
    spikes: [
      "Nível 9 — Hemoplague (Q evoluído) cura mais do que o dano recebe",
      "Nível 16 + Rabadon's — pool + ult deleta squads inteiros",
    ],
    dmg: { fisico: 0, magico: 100, verdadeiro: 0 },
    counterItemTip: "Resistência mágica + Ferimentos Graves; puna o early fraco SEM piedade.",
  },
  volibear: {
    early: 70, mid: 80, late: 68,
    spikes: [
      "Nível 6 — Stormbringer desativa torres e dá pressão de dive absurda",
      "Sunfire + Sterak's — o Q (dash) alcança quem está atrás de torre",
    ],
    dmg: { fisico: 54, magico: 46, verdadeiro: 0 },
    counterItemTip: "Dano misto; o escudo (E) é forte contra burst — troque com sustain.",
  },
  // ---------- W ----------
  warwick: {
    early: 80, mid: 74, late: 70,
    spikes: [
      "Nível 1-3 — a regeneração passiva vence guerras de desgaste",
      "Nível 6 — Infinite Duress suprime e pune qualquer baixa vida",
    ],
    dmg: { fisico: 34, magico: 66, verdadeiro: 0 },
    counterItemTip: "Resistência mágica + Ferimentos Graves; não brigue com pouca vida perto dele.",
  },
  wukong: {
    early: 70, mid: 80, late: 70,
    spikes: [
      "Nível 6 — Cyclone + clone em área vira teamfight inteira",
      "Eclipse/Black Cleaver — o clone aplica Cleaver em todos",
    ],
    dmg: { fisico: 100, magico: 0, verdadeiro: 0 },
    counterItemTip: "Armadura; o clone (W) é invisível — fixe o clone antes de gastar CC.",
  },
  // ---------- Y ----------
  yone: {
    early: 46, mid: 80, late: 90,
    spikes: [
      "Nível 6 — Fate Sealed isola o carry inimigo do time",
      "BotRK + Immortal Shieldbow — o E dobrado vira dinheiro duplo",
    ],
    dmg: { fisico: 50, magico: 50, verdadeiro: 0 },
    counterItemTip: "Dano misto (50/50); puna o E — preso no E, ele não tem escape.",
  },
  yorick: {
    early: 70, mid: 86, late: 80,
    spikes: [
      "Nível 6 — Eulogy of the Isles: a Dona + 4 capangas derrubam torres",
      "Trinity/Hullbreaker — splitpush que exige 3 inimigos para parar",
    ],
    dmg: { fisico: 82, magico: 18, verdadeiro: 0 },
    counterItemTip: "Limpe os túmulos; rote CC na Dona e force brigas de team, não de side.",
  },
  // ---------- Z ----------
  zac: {
    early: 54, mid: 80, late: 80,
    spikes: [
      "Nível 6 — Let's Bounce! salta duas vezes e abre brigas do fog",
      "Warmog's — os pedaços (Cell Division) dão farm eterno de vida",
    ],
    dmg: { fisico: 0, magico: 100, verdadeiro: 0 },
    counterItemTip: "Resistência mágica; o rebote da passiva — repita dano nele após explodir.",
  },
};

// ------------------------------------------------------------
// Fallback: deriva uma curva plausível quando não há dados autorais
// ------------------------------------------------------------
export function getPowerCurve(champion: Champion): PowerCurve {
  const known = POWER_CURVES[champion.id];
  if (known) return known;

  const isTank = champion.classes.includes("tank");
  const isMage = champion.classes.includes("mago");
  const isDuelist = champion.classes.includes("duelista");

  const early = isDuelist ? 62 : champion.tier === "S" ? 72 : 60;
  const mid = 78;
  const late = isTank || isMage ? 82 : isDuelist ? 86 : 68;
  const dmg = isMage
    ? { fisico: 5, magico: 95, verdadeiro: 0 }
    : isTank
      ? { fisico: 45, magico: 55, verdadeiro: 0 }
      : { fisico: 92, magico: 8, verdadeiro: 0 };

  return {
    early, mid, late,
    spikes: [
      `Nível 6 — o ultimate abre novas jogadas`,
      `1º item completo — ${champion.name} atinge o pico de rota`,
    ],
    dmg,
    counterItemTip: isMage
      ? "Resistência mágica (Mercury's Treads, Spirit Visage)."
      : "Armadura (Plated Steelcaps, Death's Dance) e trocas curtas.",
  };
}

// ------------------------------------------------------------
// Helpers de veredito por fase (usado no comparador)
// ------------------------------------------------------------
export type GamePhase = "early" | "mid" | "late";

export const PHASE_META: Record<GamePhase, { label: string; hint: string; color: string }> = {
  early: { label: "Early game", hint: "Minutos 0–14, trocas de rota", color: "#F0B93C" },
  mid: { label: "Mid game", hint: "Objetivos e primeiras brigas de time", color: "#E8902F" },
  late: { label: "Late game", hint: "Teamfights de 40+ minutos", color: "#C8324B" },
};

/** Retorna os campeões vencedores de cada fase (empate = todos empatados) */
export function phaseWinners(champions: Champion[]): Record<GamePhase, Champion[]> {
  const out = {} as Record<GamePhase, Champion[]>;
  for (const phase of ["early", "mid", "late"] as GamePhase[]) {
    let best = -1;
    let winners: Champion[] = [];
    for (const c of champions) {
      const v = getPowerCurve(c)[phase];
      if (v > best) {
        best = v;
        winners = [c];
      } else if (v === best) {
        winners.push(c);
      }
    }
    out[phase] = winners;
  }
  return out;
}
