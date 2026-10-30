// ============================================================
// Campeões (parte 2/2) — Malphite, Nasus, Teemo, Riven,
// Gwen, Ornn, Camille, Shen
// Builds baseadas no patch 16.21 (Temporada 2026)
// ============================================================
import type { Champion } from "./data";

export const CHAMPIONS_B: Champion[] = [
  // ------------------------------------------------------------
  // MALPHITE
  // ------------------------------------------------------------
  {
    id: "malphite",
    name: "Malphite",
    title: "a Malha de Pedra",
    classes: ["tank", "mago"],
    difficulty: 1,
    tier: "S",
    popular: true,
    image: "malphite",
    color: "#6B8F5A",
    playstyle: "Tanque de engajamento AP",
    summary:
      "Um monólito ambulante. Malphite acumula armadura contra lutadores e estoura teamfights com o R em área. Kit simples, objetivo e vencedor: perfeito para quem quer aprender top lane sem complicar.",
    strengths: [
      "Ultimate em área que decide teamfights",
      "Cresce com a armadura do time inimigo (E escala com ela)",
      "Kit direto, difícil de errar",
    ],
    weaknesses: [
      "Sofre contra dano mágico e dano verdadeiro",
      "Mana-hungry no early: sem Q constante você fica sem pressão",
      "Depende do R para engajar — sem ele, vira pedra decorativa",
    ],
    startItems: [
      { id: "dorans-shield", note: "Segurança e regeneração" },
      { id: "health-potion" },
    ],
    boots: [
      { id: "plated-steelcaps", note: "Contra lutadores AD" },
      { id: "mercury-treads", note: "Contra CC e AP" },
    ],
    coreItems: [
      { id: "hollow-radiance", note: "Limpeza de onda + MR" },
      { id: "dead-mans-plate", note: "Armadura + investida para o R" },
      { id: "kaenic-rookern", note: "Escudo mágico recarregável" },
    ],
    situationalItems: [
      { id: "thornmail", note: "Contra lutadores de básico e cura" },
      { id: "frozen-heart", note: "Reduz a velocidade de ataque inimiga" },
      { id: "force-of-nature", note: "Contra magos de dano contínuo" },
      { id: "warmogs", note: "Vida absurda + regen fora de combate" },
      { id: "abyssal-mask", note: "Amplifica o dano mágico do time" },
      { id: "rylais", note: "Opção com dano: habilidades desaceleram" },
    ],
    runes: {
      primaryTree: "resolve",
      keystone: "grasp",
      primary: ["demolish", "second-wind", "overgrowth"],
      secondaryTree: "inspiration",
      secondary: ["magical-footwear", "cosmic-insight"],
      shards: ["+Velocidade de Habilidade", "+9 Adaptativo (AD)", "+Vida bônus (escala com nível)"],
      explanation:
        "Grasp pune cada troca curta com dano % vida e te dá vida permanente — combinado com Second Wind, você ganha a guerra de desgaste contra qualquer lutador. Cosmic Insight acelera o Teleporte, essencial para o mapa.",
    },
    altRunesNote:
      "Contra ranged: troque a secundária para Sorcery (Nimbus Cloak + Scorch) e comece com Doran's Shield para aguentar o poke.",
    spells: [
      { id: "flash", note: "Combinar com R para engajamentos longos" },
      { id: "teleport", note: "Presença de mapa e volta à rota" },
    ],
    skillPriority: ["Q", "E", "W"],
    abilities: [
      { key: "P", name: "Escudo Granítico", desc: "Ganha um escudo quando fora de combate há alguns segundos. Absorve poke e te mantém saudável na rota." },
      { key: "Q", name: "Estilhaço Sísmico", desc: "Rouba velocidade de movimento do alvo e causa dano mágico. Sua ferramenta de poke e de fuga." },
      { key: "W", name: "Trovão", desc: "Golpe em área que fortalece seus básicos por alguns segundos: dano em área ao redor do alvo." },
      { key: "E", name: "Impacto Sísmico", desc: "Esmaga o chão ao redor: dano que escala com SUA armadura e reduz a velocidade de ataque dos inimigos." },
      { key: "R", name: "Força Imparável", desc: "Avança sem controle em linha reta, lançando inimigos ao ar. O melhor engajamento em área do jogo." },
    ],
    comboTips: [
      "R no maior número de inimigos → E (reduz AS) → W + básicos: o combo de teamfight completo.",
      "Q no carry inimigo antes de entrar: roubar velocidade te dá alcance extra para o R.",
      "Sem R disponível, jogue de poke com Q e espere — não force briga sem seu ult.",
    ],
    tips: {
      early: [
        "Use Q quando o inimigo for farmar: poke gratuito e você rouba a velocidade dele.",
        "Com Grasp, troque a cada 4 segundos: básico carregado + recue com o escudo passivo.",
        "Contra ranged, foque em farmar com E e não force trocas distantes.",
      ],
      mid: [
        "Empurre a onda com E + Hollow Radiance e rotacione com TP para o dragão ou arauto.",
        "Guarde o R para contra-engajar: usar depois que o inimigo se compromete é mais garantido.",
        "Flash + R no carry inimigo desprotegido é uma jogada de abate praticamente garantida.",
      ],
      late: [
        "Seja quem inicia TODAS as brigas: com o R em 3+ inimigos, a luta já nasceu vencida.",
        "Sua armadura transforma o E em dano sério contra times AD inteiros.",
        "Em defesa de torre, R em área limpa ondas e afasta o siege do inimigo.",
      ],
    },
    strongAgainst: [
      { champion: "Jax", note: "Armadura + redução de velocidade de ataque anulam o on-hit dele." },
      { champion: "Yasuo", note: "Poke com Q, armadura alta e R que ignora o windwall." },
      { champion: "Aatrox", note: "Trocas curtas com Grasp vencem a recarga do combo dele." },
      { champion: "Garen", note: "Q de poke + armadura: ele nunca chega perto para girar o E." },
    ],
    weakAgainst: [
      { champion: "Mordekaiser", note: "Dano mágico % vida ignora toda a sua armadura." },
      { champion: "Fiora", note: "Vitais com dano verdadeiro: sua principal resistência é ignorada." },
      { champion: "Gwen", note: "Dano verdadeiro % vida e a névoa bloqueia seu counter-play." },
      { champion: "Vayne", note: "Dano verdadeiro em roll: pedra vira queijo." },
    ],
    counterTips: [
      "Contra dano mágico, acelere Kaenic Rookern e evite comprar só armadura.",
      "Guarde o R para contra-engajar quando o inimigo avançar demais na rota.",
      "Peça ganks no early: Malphite com lentidão do jungler fecha abates fáceis.",
    ],
    altBuilds: [
      {
        name: "Malphite AP (Burst)",
        when: "Quando o time precisa de dano mágico e o inimigo é frágil",
        items: [
          { id: "rylais", note: "Lentidão em todas as habilidades" },
          { id: "liandrys", note: "Dano % vida em área" },
          { id: "sorcerers-shoes", note: "Penetração mágica" },
        ],
        note: "R em área com essa build pode apagar o time inteiro; menos tanque, mais impacto.",
      },
      {
        name: "Anti-AD Máximo",
        when: "Contra três ou mais ameaças de dano físico",
        items: [
          { id: "thornmail" },
          { id: "frozen-heart" },
          { id: "randuins-omen" },
        ],
        note: "Vira um muro: reduz AS, crítico e reflete dano. O E escala com tanta armadura que machuca.",
      },
    ],
  },

  // ------------------------------------------------------------
  // NASUS
  // ------------------------------------------------------------
  {
    id: "nasus",
    name: "Nasus",
    title: "o Curador de Areia",
    classes: ["lutador", "tank"],
    difficulty: 1,
    tier: "B",
    popular: false,
    image: "nasus",
    color: "#C9A84C",
    playstyle: "Escalador de stacks",
    summary:
      "O guardião do Conhecimento. Nasus troca o early game fraco por um late game monstruoso: cada abate com o Q adiciona dano PERMANENTE. Se você aguenta a fase inicial, vira o monstro da partida.",
    strengths: [
      "Q com dano permanente infinito",
      "Lentidão gigante no W (até 95%)",
      "R com vida extra e dano em área constante",
    ],
    weaknesses: [
      "Early game fraco contra lutadores agressivos",
      "Sem mobilidade: kited com facilidade",
      "Depende de farmar stacks para existir",
    ],
    startItems: [
      { id: "dorans-shield", note: "Sobreviva ao early" },
      { id: "health-potion" },
    ],
    boots: [
      { id: "plated-steelcaps", note: "Padrão contra AD" },
      { id: "mercury-treads", note: "Contra AP/CC pesado" },
    ],
    coreItems: [
      { id: "trinity-force", note: "Sheen sinergiza com o Q curto" },
      { id: "heartsteel", note: "Vida infinita para escalar junto com o Q" },
      { id: "spirit-visage", note: "Amplifica o roubo de vida do passivo" },
    ],
    situationalItems: [
      { id: "thornmail", note: "Anti-cura + armadura" },
      { id: "force-of-nature", note: "Contra AP" },
      { id: "jaksho", note: "Resistências crescentes em brigas longas" },
      { id: "frozen-heart", note: "Contra velocidade de ataque alta" },
      { id: "steraks-gage", note: "Escudo + dano no late" },
      { id: "unending-despair", note: "Sustain em teamfights" },
    ],
    runes: {
      primaryTree: "resolve",
      keystone: "grasp",
      primary: ["demolish", "second-wind", "overgrowth"],
      secondaryTree: "precision",
      secondary: ["presence-of-mind", "legend-bloodline"],
      shards: ["+Velocidade de Habilidade", "+9 Adaptativo (AD)", "+Vida bônus (escala com nível)"],
      explanation:
        "Grasp + Second Wind mantêm você vivo na fase mais fraca do jogo. Presence of Mind resolve seu problema de mana para farmar Q, e Bloodline soma roubo de vida ao passivo — Nasus nunca sai da rota.",
    },
    altRunesNote:
      "Contra ranged: Fleet Footwork + Resolve (Bone Plating + Overgrowth) te mantém na rota até o item completo.",
    spells: [
      { id: "flash", note: "Obrigatório — você não tem dash" },
      { id: "ghost", note: "Cola no alvo com W e executa com Q" },
    ],
    skillPriority: ["Q", "E", "W"],
    abilities: [
      { key: "P", name: "Devorador de Almas", desc: "Roubo de vida passivo baseado no dano causado. Sua sustentação de rota constante." },
      { key: "Q", name: "Golpe Absorvedor", desc: "Abater com o Q concede dano PERMANENTE extra. Cada stack é forever: farme tropas com Q o jogo inteiro." },
      { key: "W", name: "Murchidão", desc: "Reduz drasticamente a velocidade de movimento e de ataque do alvo. Qualquer carry vira estátua." },
      { key: "E", name: "Fogo Espiritual", desc: "Área de dano mágico que reduz a armadura dos inimigos dentro. Limpa ondas e ajuda a farmar Q à distância." },
      { key: "R", name: "Fúria das Areias", desc: "Ganha vida máxima, alcance, dano mágico em área constante e acelera o cooldown do Q. O monstro desperta." },
    ],
    comboTips: [
      "W no alvo → E (reduz armadura) → Q: o combo de execução padrão.",
      "R + W + Q: com Fantasma ativo, ninguém escapa da lentidão de 95%.",
      "Farme Q nas ondas com E quando o matchup estiver perigoso — stacks > trocas.",
    ],
    tips: {
      early: [
        "Priorize stacks: um Q por tropa, todo Q que puder. Abates são bônus, stacks são a missão.",
        "Sofra o early em paz: Doran's Shield + Second Wind aguentam até o Trinity Force.",
        "Nunca fique em trocas longas antes do item: recue e continue farmando.",
      ],
      mid: [
        "Com Heartsteel + stacks, você já vence duelos: peça o 1v1 na lateral.",
        "W em quem tenta escapar: a lentidão dura 5 segundos, uma eternidade.",
        "Use TP para não perder ondas de stack e chegar nas brigas de dragão.",
      ],
      late: [
        "Q com 500+ stacks mata metade da vida de um carry: busque o all-in.",
        "No R, você vira frontline e ameaça ao mesmo tempo — brigue no meio do time.",
        "W no carry mais perigoso do timefight: ele simplesmente para de existir na luta.",
      ],
    },
    strongAgainst: [
      { champion: "Garen", note: "W neutraliza a investida e você escala melhor que ele." },
      { champion: "Yorick", note: "Duelo de escalada: seus stacks vencem os ghouls no late." },
      { champion: "Tryndamere", note: "Murchidão reduz o AS e a MS dele — todo o kit depende disso." },
    ],
    weakAgainst: [
      { champion: "Darius", note: "Pune cada tentativa de farmar Q com all-in." },
      { champion: "Riven", note: "Burst antes do R: você morre sem reagir no early." },
      { champion: "Quinn", note: "Poke constante e você nunca chega perto do Q." },
      { champion: "Fiora", note: "Escala tão rápido quanto você, mas vence os duelos cedo." },
    ],
    counterTips: [
      "Contra agressivos, use E para farmar de longe e não perca stacks sob torre.",
      "Peça ganks: Nasus com CC do jungler converte W em abate fácil.",
      "Se o inimigo rotacionar, troque a torre: Demolish + stacks nas tropas compensam.",
    ],
    altBuilds: [
      {
        name: "Splitpush com TP",
        when: "Quando o time inimigo não tem resposta 1v1",
        items: [
          { id: "trinity-force" },
          { id: "hullbreaker", note: "Torres caem sozinhas" },
          { id: "steraks-gage" },
        ],
        note: "Com stacks + Hullbreaker, dois inimigos precisam te responder ou a base cai.",
      },
      {
        name: "Frontline de Time",
        when: "Quando seu time não tem tanque",
        items: [
          { id: "heartsteel" },
          { id: "jaksho" },
          { id: "spirit-visage" },
        ],
        note: "Vida e resistências para abrir brigas e sobreviver ao foco inicial.",
      },
    ],
  },

  // ------------------------------------------------------------
  // TEEMO
  // ------------------------------------------------------------
  {
    id: "teemo",
    name: "Teemo",
    title: "o Batedor Veloz",
    classes: ["mago"],
    difficulty: 2,
    tier: "B",
    popular: false,
    image: "teemo",
    color: "#6FA848",
    playstyle: "Poke à distância e controle de mapa",
    summary:
      "O batedor de Bandle. Teemo pune lutadores corpo a corpo com poke constante, cegueira e cogumelos que dominam o mapa no late. Frágil se pego, letal se souber manter distância.",
    strengths: [
      "Poke constante contra melee",
      "Cegueira anula básicos (Darius, Garen, Jax choram)",
      "Cogumelos controlam objetivos e rotas no late",
    ],
    weaknesses: [
      "Muito frágil: um all-in bem executado te mata",
      "Depende de manter distância o jogo inteiro",
      "Cogumelos exigem ward e posicionamento prévio",
    ],
    startItems: [
      { id: "dorans-ring", note: "Mana para o poke com Q" },
      { id: "health-potion" },
    ],
    boots: [
      { id: "sorcerers-shoes", note: "Mais dano no poke" },
      { id: "boots-of-swiftness", note: "Escapar de ganks e kite" },
    ],
    coreItems: [
      { id: "liandrys", note: "Veneno + dano % vida: derrete lutadores" },
      { id: "nashors-tooth", note: "AS + dano on-hit sinergiza com o E" },
      { id: "rylais", note: "Veneno desacelera: impossível alcançar" },
    ],
    situationalItems: [
      { id: "zhonyas", note: "Contra burst e all-in" },
      { id: "void-staff", note: "Quando comprarem resistência mágica" },
      { id: "morellonomicon", note: "Contra cura (Aatrox, Nasus)" },
      { id: "rabaddons", note: "Dano máximo no late" },
      { id: "cryptbloom", note: "Penetração + cura para o time" },
    ],
    runes: {
      primaryTree: "sorcery",
      keystone: "arcane-comet",
      primary: ["nimbus-cloak", "transcendence", "scorch"],
      secondaryTree: "domination",
      secondary: ["sudden-impact", "ultimate-hunter"],
      shards: ["+Velocidade de Habilidade", "+9 Adaptativo (AP)", "+Vida bônus (escala com nível)"],
      explanation:
        "Arcane Comet deixa cada Q e cogumelo ainda mais dolorosos no poke — com Nimbus Cloak você corre do all-in depois do combo. Ultimate Hunter reduz a recarga dos cogumelos — mais controle do mapa, o coração do Teemo.",
    },
    altRunesNote:
      "Contra lutadores de all-in: Fleet Footwork + Resolve (Bone Plating + Overgrowth) sustenta a rota até escalar.",
    spells: [
      { id: "flash", note: "Escapar do all-in ou posicionar o R" },
      { id: "ignite", note: "Fecha abates no poke + anti-cura" },
    ],
    skillPriority: ["E", "Q", "W"],
    abilities: [
      { key: "P", name: "Guerrilha", desc: "Parado no mato, fica invisível e ganha velocidade de ataque ao sair. Agressão surpresa e escapes criativos." },
      { key: "Q", name: "Dardo Cegante", desc: "Dano mágico e CEGUEIRA: os básicos do alvo podem errar. Anula lutadores de básico por 2 segundos." },
      { key: "W", name: "Corrida", desc: "Velocidade de movimento passiva que triplica por alguns segundos quando ativada ou quando tomado dano." },
      { key: "E", name: "Tiro Tóxico", desc: "Seus básicos causam dano mágico extra e envenenam por 4 segundos. A base do seu poke." },
      { key: "R", name: "Armadilha Pestilenta", desc: "Cogumelos invisíveis que explodem em veneno em área. Domine entradas, rios e objetivos." },
    ],
    comboTips: [
      "Q (cega) + Comet poke e recue com W antes do inimigo reagir: o ciclo de poke.",
      "Guarde o W ativo: com ele você é mais rápido que quase todo lutador de topo — poke e NUNCA termine a troca perto dele.",
      "Cogumelo atrás de você antes de trocar: se o all-in vier, o R te salva.",
    ],
    tips: {
      early: [
        "Nível 1–3 poke com Q + básicos toda vez que ele for farmar.",
        "Contra Darius/Garen, a cegueira no Q deles? Não: cegueira anula BÁSICOS. Q quando ele for básicar.",
        "Warde os arbustos: sua força é saber onde o jungler NÃO está.",
      ],
      mid: [
        "Plante cogumelos nas entradas da jungle do seu lado e ao redor do dragão.",
        "Com Liandry's + veneno, tanques derretem: force trocas longas à distância.",
        "Sua torre é segura com cogumelos: poke e empurre enquanto o R defende.",
      ],
      late: [
        "Plante cogumelos ao redor do Baron 60 segundos antes de começar: área sua.",
        "Em teamfight, fique atrás do time: veneno acumula e Phase Rush salva do dive.",
        "Cogumelo nas costas do inimigo em teamfight = fuga cortada para os carrys.",
      ],
    },
    strongAgainst: [
      { champion: "Nasus", note: "Cega os básicos dele e poke antes dos stacks: pesadelo do cachorro." },
      { champion: "Darius", note: "Kite com W + cegueira: ele nunca encaixa o combo completo." },
      { champion: "Garen", note: "O E dele depende de básicos que a cegueira anula." },
      { champion: "Sett", note: "Poke à distância antes de qualquer troca real." },
    ],
    weakAgainst: [
      { champion: "Renekton", note: "All-in com stun fecha a troca antes do seu poke acumular." },
      { champion: "Jax", note: "Q nele + E resiste ao poke: quando chega perto, você morre." },
      { champion: "Irelia", note: "Q nas tropas te alcança — não tem onde correr na rota." },
      { champion: "Quinn", note: "Guerra de range: ela tem mobilidade e burst maiores." },
    ],
    counterTips: [
      "Contra dive (Renekton, Jax), plante cogumelo ATRÁS de você antes de trocar.",
      "Guarde W para os gaps closers: não gaste a velocidade ofensivamente sem visão.",
      "Zhonya's cedo contra burst: sobreviver ao all-in é metade do matchup.",
    ],
    altBuilds: [
      {
        name: "Burst AP",
        when: "Quando o time precisa de dano rápido e o inimigo é frágil",
        items: [
          { id: "stormsurge", note: "Explosão após o burst" },
          { id: "zhonyas" },
          { id: "rabaddons" },
        ],
        note: "Q + básico + Stormsurge remove metade da vida de um carry frágil.",
      },
      {
        name: "On-hit híbrido",
        when: "Contra tanques de muita vida",
        items: [
          { id: "nashors-tooth" },
          { id: "liandrys" },
          { id: "void-staff" },
        ],
        note: "Veneno + on-hit + penetração: nenhum tanque aguenta a rotação.",
      },
    ],
  },

  // ------------------------------------------------------------
  // RIVEN
  // ------------------------------------------------------------
  {
    id: "riven",
    name: "Riven",
    title: "a Exilada",
    classes: ["duelista"],
    difficulty: 3,
    tier: "A",
    popular: false,
    image: "riven",
    color: "#4EA8A0",
    playstyle: "Duelista de combos rápidos",
    summary:
      "A guerreira sem lâmina quebrada. Riven recompensa prática: combos rápidos, resets de animação e shields no timing certo. O teto de habilidade é altíssimo — e a recompensa também.",
    strengths: [
      "Dano de burst com combos rápidos",
      "Escudo + dash no E: trocas quase sem custo",
      "Ultimate com execução em área",
    ],
    weaknesses: [
      "Difícil de dominar (animation canceling)",
      "Perde trocas longas contra lutadores de vida",
      "Sem cooldowns, vira alvo fácil",
    ],
    startItems: [
      { id: "dorans-blade", note: "Dano para trocas nível 1–3" },
      { id: "health-potion" },
    ],
    boots: [
      { id: "ionian-boots", note: "Aceleração de habilidade para os combos" },
      { id: "plated-steelcaps", note: "Contra AD pesado" },
    ],
    coreItems: [
      { id: "sundered-sky", note: "Cura + crítico no primeiro hit" },
      { id: "black-cleaver", note: "Penetração + aceleração" },
      { id: "deaths-dance", note: "Sobrevive ao burst e sangra menos" },
    ],
    situationalItems: [
      { id: "steraks-gage", note: "Escudo para o all-in" },
      { id: "maw-of-malmortius", note: "Contra AP" },
      { id: "guardian-angel", note: "Segunda vida nas jogadas" },
      { id: "seryldas-grudge", note: "Penetração + slow nas habilidades" },
      { id: "chempunk-chainsword", note: "Anti-cura" },
      { id: "eclipse", note: "Alternativa de burst % vida" },
    ],
    runes: {
      primaryTree: "precision",
      keystone: "conqueror",
      primary: ["triumph", "legend-alacrity", "last-stand"],
      secondaryTree: "sorcery",
      secondary: ["transcendence", "nimbus-cloak"],
      shards: ["+Velocidade de Habilidade", "+9 Adaptativo (AD)", "+Vida bônus (escala com nível)"],
      explanation:
        "Conqueror enche rápido com o Q triplo e cura no all-in. Transcendence + shards de Haste deixam o combo sempre pronto; Nimbus Cloak combina com Flash + R para jogadas de execução.",
    },
    altRunesNote:
      "Contra poke: secundária Resolve (Second Wind + Overgrowth) e comece Doran's Shield.",
    spells: [
      { id: "flash", note: "Flash + W + R: jogada de execução" },
      { id: "ignite", note: "Pressão de abate no early" },
    ],
    skillPriority: ["Q", "E", "W"],
    abilities: [
      { key: "P", name: "Lâmina Rúnica", desc: "Carrega a espada com habilidades: os próximos básicos causam dano extra. Nunca pare de atacar entre os Q." },
      { key: "Q", name: "Asas Partidas", desc: "Três golpes com dash curto; o terceiro lança e atordoa levemente. Seu motor de dano e mobilidade." },
      { key: "W", name: "Explosão de Ki", desc: "Atordoa inimigos próximos. Encaixe no meio do combo para travar a fuga." },
      { key: "E", name: "Valor", desc: "Dash curto com escudo. Sua ferramenta de troca segura: entre, dê dano, saia." },
      { key: "R", name: "Lâmina do Exílio", desc: "Potencializa a espada (dano + alcance); reativar lança o Golpe do Vento, execução em área baseada na vida faltante." },
    ],
    comboTips: [
      "E → W → básico → QQQ (com resets) → R2: o combo de all-in completo.",
      "Use E para cancelar a animação do Q: mais dano em menos tempo.",
      "R1 antes do combo e R2 no final: o Golpe do Vento executa quem fugiu com pouca vida.",
    ],
    tips: {
      early: [
        "Nível 1–3 você vence quase todo mundo: troque com Q + passiva e saia com E.",
        "Treine o animation canceling no treino: a diferença de dano é enorme.",
        "Guarde o terceiro Q para o knockup quando o inimigo tentar escapar.",
      ],
      mid: [
        "Com Sundered Sky + Cleaver, all-in em quem errar um cooldown.",
        "Sua mobilidade atravessa paredes com E? Não: E não atravessa paredes — planeje o roteiro.",
        "R em teamfights com 2+ alvos baixos: a execução em área limpa.",
      ],
      late: [
        "Você não é frontline: entre DEPOIS do CC inicial inimigo.",
        "Flash + W em 2+ pessoas é a jogada que fecha o jogo.",
        "Splits com TP: poucos duelistas batem você com a build completa.",
      ],
    },
    strongAgainst: [
      { champion: "Nasus", note: "All-in antes dos stacks: ele não tem como reagir no early." },
      { champion: "Garen", note: "Kite com Q dash + escudo do E neutraliza a troca dele." },
      { champion: "Yorick", note: "Burst nos ghouls e no Yorick: trocas curtas são suas." },
    ],
    weakAgainst: [
      { champion: "Malphite", note: "Armadura alta anula seu dano físico e o R dele te lança no meio do combo." },
      { champion: "Renekton", note: "Trocas mais fortes no early com mais vida e stun confiável." },
      { champion: "Fiora", note: "Riposte no W e vitais: o duelo depende da execução dela." },
      { champion: "Jax", note: "Counter Strike bloqueia seu Q triplo e vence o duelo estendido." },
    ],
    counterTips: [
      "Contra tanques de armadura, acelere Black Cleaver antes do segundo item de dano.",
      "Nunca all-in sem E disponível: o escudo é metade da sua troca.",
      "Contra Fiora/Jax, espere eles gastarem o CC defensivo antes do R.",
    ],
    altBuilds: [
      {
        name: "Burst de Letalidade",
        when: "Contra times frágeis e sem frontline",
        items: [
          { id: "eclipse" },
          { id: "youmuus-ghostblade", note: "Velocidade para caçar" },
          { id: "seryldas-grudge" },
        ],
        note: "Combo inteiro apaga um carry: risco alto, recompensa alta.",
      },
      {
        name: "Bruiser Sustentável",
        when: "Quando o time precisa de um segundo frontline",
        items: [
          { id: "sundered-sky" },
          { id: "steraks-gage" },
          { id: "deaths-dance" },
        ],
        note: "Cura + escudo + sangramento: mais brigas longas, menos burst.",
      },
    ],
  },

  // ------------------------------------------------------------
  // GWEN
  // ------------------------------------------------------------
  {
    id: "gwen",
    name: "Gwen",
    title: "a Costureira Abençoada",
    classes: ["duelista", "mago"],
    difficulty: 2,
    tier: "A",
    popular: false,
    image: "gwen",
    color: "#E88AC0",
    playstyle: "Lutadora AP on-hit",
    summary:
      "A boneca que ganhou vida. Gwen corta tanques com dano verdadeiro % vida e fica intocável dentro da própria névoa. Escala forte com itens e vira um pesadelo 1v1 no mid game.",
    strengths: [
      "Dano verdadeiro % vida: tanques derretem",
      "W bloqueia TODA habilidade externa — anti-burst único",
      "Sustain com a cura da passiva",
    ],
    weaknesses: [
      "Fase de rota moderada: sofre all-in agressivo",
      "Depende de acertar o Q com as tesouradas cheias",
      "A névoa só protege de fora: CC dentro dela funciona",
    ],
    startItems: [
      { id: "dorans-ring", note: "Mana para o poke com Q" },
      { id: "health-potion" },
    ],
    boots: [
      { id: "berserker-greaves", note: "On-hit é seu dano: AS escala" },
      { id: "plated-steelcaps", note: "Contra lutadores AD agressivos" },
    ],
    coreItems: [
      { id: "riftmaker", note: "Dano crescente + omnivamp em brigas longas" },
      { id: "nashors-tooth", note: "AS + on-hit: o motor do corte" },
      { id: "zhonyas", note: "Sobreviva ao burst e espere a W" },
    ],
    situationalItems: [
      { id: "rabaddons", note: "AP máximo no late" },
      { id: "void-staff", note: "Contra MR comprada" },
      { id: "liandrys", note: "Contra tanques de vida alta" },
      { id: "spirit-visage", note: "Amplifica a cura da passiva" },
      { id: "morellonomicon", note: "Anti-cura" },
      { id: "cryptbloom", note: "Penetração + cura em área" },
    ],
    runes: {
      primaryTree: "precision",
      keystone: "conqueror",
      primary: ["presence-of-mind", "legend-alacrity", "last-stand"],
      secondaryTree: "resolve",
      secondary: ["second-wind", "overgrowth"],
      shards: ["+Velocidade de Ataque", "+9 Adaptativo (AP)", "+Vida bônus (escala com nível)"],
      explanation:
        "Conqueror empilha rápido com os básicos on-hit e cura junto com a passiva — Gwen vira quase impossível de matar em brigas longas. Second Wind cobre o poke no early, sua fase mais fraca.",
    },
    altRunesNote:
      "Contra ranged pesado: Fleet Footwork + Second Wind e comece Doran's Shield para sobreviver ao poke.",
    spells: [
      { id: "flash", note: "Reposicionar dentro do W ou caçar com R" },
      { id: "ignite", note: "Fecha o duelo que seu sustain já vence" },
    ],
    skillPriority: ["Q", "E", "W"],
    abilities: [
      { key: "P", name: "Mil Cortes", desc: "Ataques causam dano mágico % vida do alvo e curam Gwen. Cortar tanques e curar: tudo ao mesmo tempo." },
      { key: "Q", name: "Snip Snip", desc: "Tesouradas em cone; acertar inimigos/carrega o corte final. Dano maior com mais acertos." },
      { key: "W", name: "Névoa Sagrada", desc: "Névoa ao seu redor: TODA habilidade de fora não te afeta. Sua zona de poder — brigue dentro dela." },
      { key: "E", name: "Salto e Corte", desc: "Dash que aumenta o alcance dos ataques e reseta. Perseguição e reset de básico." },
      { key: "R", name: "Trabalho de Agulha", desc: "Três ondas de agulhas que aplicam a passiva; cada acerto cura. Máximo 3 usos com acertos em campeões." },
    ],
    comboTips: [
      "E (dash + alcance) → básicos → Q cheio → R nas ondas: o loop de dano máximo.",
      "Ative W ANTES do all-in inimigo: dentro da névoa, o burst dele não existe.",
      "R multiuso: use a primeira onda para poke, guarde as outras para o duelo.",
    ],
    tips: {
      early: [
        "Poke com Q através das tropas quando ele for farmar.",
        "Guarde a W para o all-in: gastar de graça te deixa exposta por 5 segundos.",
        "Contra Renekton/Jax, respeite o nível 3–6 e farme de longe com Q.",
      ],
      mid: [
        "Com Riftmaker + Nashor's, force duelos laterais: quase ninguém vence.",
        "A névoa bloqueia torres? Não bloqueia dano de torre — cuidado nos dives.",
        "R através de paredes para garantir abates de longe.",
      ],
      late: [
        "Seu dano verdadeiro % vida derrete o frontline: corte o tanque primeiro se ele te ameaçar.",
        "W no meio do timefight anula o poke inimigo inteiro por alguns segundos.",
        "Zhonya + névoa + cura da passiva: você é o último a morrer e o primeiro a matar.",
      ],
    },
    strongAgainst: [
      { champion: "Malphite", note: "Dano verdadeiro % vida ignora toda a armadura dele." },
      { champion: "Ornn", note: "Mesmo problema: resistências não te protegem da tesoura." },
      { champion: "Nasus", note: "Vence as trocas estendidas com a cura da passiva + Conqueror." },
      { champion: "Mordekaiser", note: "A névoa bloqueia o combo à distância dele antes do R." },
    ],
    weakAgainst: [
      { champion: "Renekton", note: "All-in no early antes dos itens: te mata sem reagir." },
      { champion: "Jax", note: "Counter Strike bloqueia os on-hit — seu motor de dano." },
      { champion: "Camille", note: "R isola você fora da névoa e o Q verdadeiro compete com o dela." },
      { champion: "Riven", note: "Burst rápido antes da W: sem reação, é baixa." },
    ],
    counterTips: [
      "Contra Jax, espere o E dele acabar antes de entrar na troca com básicos.",
      "Guarde a névoa SEMPRE para o burst — nunca para poke pequeno.",
      "Contra dive, Zhonya's no segundo item salva mais jogos que dano extra.",
    ],
    altBuilds: [
      {
        name: "Sustain Tanque",
        when: "Quando você precisa viver mais que causar dano",
        items: [
          { id: "riftmaker" },
          { id: "spirit-visage", note: "Dobra a cura da passiva" },
          { id: "wits-end", note: "MR + on-hit extra" },
        ],
        note: "Imortal em brigas longas: cura escala com o dano % vida.",
      },
      {
        name: "Burst AP",
        when: "Contra times frágeis sem tanque",
        items: [
          { id: "nashors-tooth" },
          { id: "stormsurge" },
          { id: "rabaddons" },
        ],
        note: "Q + R apaga carrys: menos sustain, mais explosão.",
      },
    ],
  },

  // ------------------------------------------------------------
  // ORNN
  // ------------------------------------------------------------
  {
    id: "ornn",
    name: "Ornn",
    title: "a Chama das Montanhas",
    classes: ["tank"],
    difficulty: 2,
    tier: "A",
    popular: false,
    image: "ornn",
    color: "#D98A3F",
    playstyle: "Tanque de utilidade e engajamento",
    summary:
      "O ferreiro divino. Ornn aguenta tudo, aplica Frágil com o W e atualiza os itens do TIME INTEIRO de graça. Um tanque que nunca fica para trás em ouro — utilidade do início ao fim.",
    strengths: [
      "Upgrades de itens gratuitos para o time (economia gigante)",
      "CC em cadeia com R + E",
      "Sustentação de rota e escala natural de resistências",
    ],
    weaknesses: [
      "Dano moderado: depende do time para fechar",
      "Ultimate exige posicionamento do carneiro",
      "Fraco contra dano % vida",
    ],
    startItems: [
      { id: "dorans-shield", note: "Sustain de rota padrão" },
      { id: "health-potion" },
    ],
    boots: [
      { id: "plated-steelcaps", note: "Contra AD" },
      { id: "mercury-treads", note: "Contra AP/CC" },
    ],
    coreItems: [
      { id: "sunfire-aegis", note: "Imolação + pressão de onda" },
      { id: "jaksho", note: "Escala em brigas longas" },
      { id: "thornmail", note: "Anti-cura + armadura" },
    ],
    situationalItems: [
      { id: "kaenic-rookern", note: "Contra AP alto" },
      { id: "force-of-nature", note: "Contra magos móveis" },
      { id: "frozen-heart", note: "Contra AS alta" },
      { id: "randuins-omen", note: "Contra crítico" },
      { id: "unending-despair", note: "Sustain de teamfight" },
      { id: "iceborn-gauntlet", note: "Desacelera com habilidades" },
    ],
    runes: {
      primaryTree: "resolve",
      keystone: "grasp",
      primary: ["demolish", "second-wind", "overgrowth"],
      secondaryTree: "inspiration",
      secondary: ["magical-footwear", "cosmic-insight"],
      shards: ["+Velocidade de Habilidade", "+9 Adaptativo (AD)", "+Vida bônus (escala com nível)"],
      explanation:
        "Grasp + Overgrowth transformam seu early já tanky em imortal progressivo. Demolish combina com a sua pressão de torre natural. Cosmic Insight acelera TP e o tempo de compra dos upgrades.",
    },
    altRunesNote:
      "Contra AP pesado: secundária Resolve (Bone Plating + Unflinching) e acelere Kaenic Rookern.",
    spells: [
      { id: "flash", note: "Flash + R ou Flash + E para CC garantido" },
      { id: "teleport", note: "Presença global e defesa de torre" },
    ],
    skillPriority: ["Q", "W", "E"],
    abilities: [
      { key: "P", name: "Forja Viva", desc: "Compra itens 'mestres' e, a partir do nível 13, atualiza itens do time de graça (mais vida/resistências). Economia invisível que vence jogos." },
      { key: "Q", name: "Fissura Vulcânica", desc: "Projetil que abre rachadura e desacelera. Poke de rota e setup para o E." },
      { key: "W", name: "Sopro de Fole", desc: "Jato de fogo que causa dano % vida MÁXIMA e aplica FRÁGIL: seu próximo ataque quebra, causando % de vida atual." },
      { key: "E", name: "Investida Flamejante", desc: "Dash que lança ao ar ao parar em Q, estrutura ou monstro. Mobilidade + CC em um só cooldown." },
      { key: "R", name: "Chamado do Deus Ferreiro", desc: "Carneiro de fogo atravessa o mapa causando dano e aplicando Frágil; reativar chama o carneiro de volta com knockup em área." },
    ],
    comboTips: [
      "Q (rachadura) → E na rachadura: knockup garantido no inimigo.",
      "R1 (carneiro passa) → R2 (knockup em área) → W com Frágil → E para finalizar o CC.",
      "W quebra o Frágil: sequencie W → básico para o dano % vida completo.",
    ],
    tips: {
      early: [
        "Poke com Q toda vez que ele for last hit: a rachadura desacelera e te dá troca livre.",
        "Você tem uma das melhores regenerações de rota: use Grasp e aguarde os erros.",
        "Nível 6: R1 + R2 + E é knockup em cadeia — peça gank agora.",
      ],
      mid: [
        "Avise o time dos upgrades de item: a economia muda o jogo.",
        "Engaje com R de longe: o carneiro atravessa paredes e abre teamfights.",
        "Defenda torres: Frágil + imolação limpam ondas sob pressão.",
      ],
      late: [
        "Você abre TODAS as brigas: R1 poke + R2 knockup em 3+ é vitória automática.",
        "Com Jak'Sho ativo, você aguenta o foco do time inteiro.",
        "W em quem avança: % vida máxima pune tanques e lutadores igualmente.",
      ],
    },
    strongAgainst: [
      { champion: "Sett", note: "Sua vida escala mais e o Frágil pune as trocas dele." },
      { champion: "Garen", note: "Ele não tem resposta para o CC em cadeia, e sua escala de tanque é melhor." },
      { champion: "Renekton", note: "Aguenta o early e passa ele no mid game com Jak'Sho." },
    ],
    weakAgainst: [
      { champion: "Gwen", note: "Dano verdadeiro % vida: sua especialidade é resistir, e ela ignora isso." },
      { champion: "Mordekaiser", note: "Dano mágico % vida + R que te isola do time." },
      { champion: "Fiora", note: "Vitais perfuram tudo que você constrói." },
    ],
    counterTips: [
      "Contra % vida (Gwen, Fiora, Morde), stack vida pura + MR e jogue de equipe.",
      "Nunca isole-se na lateral contra duelistas: seu valor está no teamfight com R.",
      "Use o carneiro para checar bushes: visão gratuita e Frágil de brinde.",
    ],
    altBuilds: [
      {
        name: "Anti-AD Total",
        when: "Contra times de dano físico pesado",
        items: [
          { id: "thornmail" },
          { id: "frozen-heart" },
          { id: "randuins-omen" },
        ],
        note: "Reduz AS, crítico e reflete dano: atiradores desligam.",
      },
      {
        name: "Anti-AP Total",
        when: "Contra times de dano mágico pesado",
        items: [
          { id: "kaenic-rookern" },
          { id: "force-of-nature" },
          { id: "spirit-visage" },
        ],
        note: "MR + escudo regenerável + velocidade: magos não te acham.",
      },
    ],
  },

  // ------------------------------------------------------------
  // CAMILLE
  // ------------------------------------------------------------
  {
    id: "camille",
    name: "Camille",
    title: "a Sombra de Aço",
    classes: ["duelista"],
    difficulty: 3,
    tier: "A",
    popular: false,
    image: "camille",
    color: "#8C9BA8",
    playstyle: "Duelista de precisão e gancho",
    summary:
      "A lâmina assíncrona de Piltover. Camille apaga alvos isolados com o R, atravessa o mapa pelas paredes e executa com dano verdadeiro no Q. Alta exigência mecânica, altíssimo retorno.",
    strengths: [
      "R isola o alvo — duelos 1v1 garantidos",
      "E gancho através de paredes: mobilidade absurda",
      "Q com dano verdadeiro no segundo golpe",
    ],
    weaknesses: [
      "Difícil de dominar (timing do gancho e do escudo)",
      "Cooldowns longos no early: errou, recue",
      "Fraca contra armadura alta antes do Q nível 5",
    ],
    startItems: [
      { id: "dorans-blade", note: "Dano de troca" },
      { id: "health-potion" },
    ],
    boots: [
      { id: "plated-steelcaps", note: "Padrão contra AD" },
      { id: "mercury-treads", note: "Contra CC/AP" },
    ],
    coreItems: [
      { id: "trinity-force", note: "Sheen + AS: coração da build" },
      { id: "steraks-gage", note: "Escudo no duelo isolado" },
      { id: "deaths-dance", note: "Converte burst em sangramento" },
    ],
    situationalItems: [
      { id: "ravenous-hydra", note: "Omnivamp + limpeza de onda" },
      { id: "hullbreaker", note: "Splitpush máximo" },
      { id: "guardian-angel", note: "Ressuscite e feche a jogada" },
      { id: "maw-of-malmortius", note: "Contra AP" },
      { id: "wits-end", note: "MR + on-hit contra AP" },
      { id: "seryldas-grudge", note: "Penetração + slow" },
    ],
    runes: {
      primaryTree: "precision",
      keystone: "conqueror",
      primary: ["triumph", "legend-alacrity", "last-stand"],
      secondaryTree: "resolve",
      secondary: ["bone-plating", "demolish"],
      shards: ["+Velocidade de Ataque", "+9 Adaptativo (AD)", "+Vida bônus (escala com nível)"],
      explanation:
        "Conqueror + Q verdadeiro em brigas longas = execução garantida. Demolish brilha junto com o R: você prende o alvo perto da torre e o bônus contra estruturas acelera o dive.",
    },
    altRunesNote:
      "Contra poke: Second Wind no lugar de Bone Plating e Doran's Shield de inicial.",
    spells: [
      { id: "flash", note: "Flash + E para ganchos impossíveis" },
      { id: "ignite", note: "Pressão de abate no all-in do R" },
    ],
    skillPriority: ["Q", "E", "W"],
    abilities: [
      { key: "P", name: "Defesas Adaptativas", desc: "Ao sofrer dano mágico ou físico, ganha escudo desse tipo. Timing certo = troca gratuita." },
      { key: "Q", name: "Protocolo de Precisão", desc: "Dois golpes; o segundo causa dano extra — e com nível alto, dano VERDADEIRO. Sua execução." },
      { key: "W", name: "Varredura Tática", desc: "Cone de dano: a parte EXTERNA causa dano adicional, cura Camille e desacelera. Trocas de sustain." },
      { key: "E", name: "Gancho Piltover", desc: "Gruda na parede e dispara: no acerto, atordoa e dasha. Atravessa paredes: mobilidade de jungle." },
      { key: "R", name: "Ultimato Hextec", desc: "Salta e cria uma zona: o alvo NÃO pode escapar com dash/flash até sair. Duelo garantido." },
    ],
    comboTips: [
      "E (atordoa) → Q1 → W na borda (cura) → Q2 verdadeiro → R para prender a fuga.",
      "R em alvo isolado na lateral: sem jungler por perto, é execução.",
      "Passeive pela parede com E após o R: o alvo preso na zona não te alcança.",
    ],
    tips: {
      early: [
        "O gancho E só atordoa se o primeiro disparo acertar: treine os ângulos.",
        "Use W na borda do cone: dano total + cura significativa.",
        "Passiva no timing certo bloqueia o burst: aprenda o cooldown do combo inimigo.",
      ],
      mid: [
        "Com Trinity + Sterak's, caça carrys na lateral com E por paredes.",
        "R isola o alvo mesmo se ele pular a parede: a zona segue ele.",
        "TP em brigas de dragão e R no mid laner desprotegido: abate + zona de controle.",
      ],
      late: [
        "Q2 verdadeiro executa tanques também: você não tem problema de escala.",
        "Nunca entre em teamfight frontal: busque o alvo isolado com E + R.",
        "Guardian Angel + R: jogue a vida e ressuscite dentro da zona.",
      ],
    },
    strongAgainst: [
      { champion: "Nasus", note: "R isola o cachorro antes dos stacks importarem." },
      { champion: "Mordekaiser", note: "E gancho através das paredes do reino dele." },
      { champion: "Garen", note: "Kite com E entre paredes e execute com Q verdadeiro." },
      { champion: "Sett", note: "Trocas com W na borda + Q verdadeiro vencem o sustain dele." },
    ],
    weakAgainst: [
      { champion: "Malphite", note: "Armadura alta vs Q físico + R te lança no meio do combo." },
      { champion: "Renekton", note: "All-in nível 3 te mata antes do seu power spike." },
      { champion: "Jax", note: "Counter Strike bloqueia seus básicos e vence o duelo." },
      { champion: "Riven", note: "Burst mais rápido e escudo no E igualmente frequente." },
    ],
    counterTips: [
      "Contra armadura, acelere o Q nível 5 (verdadeiro) antes de forçar duelos.",
      "Nunca R em duelos que você não vence: a zona trava VOCÊS dois.",
      "Guarde o gancho E para escapar — usá-lo ofensivamente sem visão é gol contra.",
    ],
    altBuilds: [
      {
        name: "Splitpush Máximo",
        when: "Quando o inimigo precisa mandar dois para te parar",
        items: [
          { id: "trinity-force" },
          { id: "hullbreaker" },
          { id: "ravenous-hydra" },
        ],
        note: "Torres caem em segundos; com E, ninguém te alcança fugindo.",
      },
      {
        name: "Anti-Tank",
        when: "Contra frontline pesado",
        items: [
          { id: "trinity-force" },
          { id: "botrk", note: "% vida atual" },
          { id: "seryldas-grudge" },
        ],
        note: "Q verdadeiro + BotRK + penetração: tanques derretem.",
      },
    ],
  },

  // ------------------------------------------------------------
  // SHEN
  // ------------------------------------------------------------
  {
    id: "shen",
    name: "Shen",
    title: "o Olho do Crepúsculo",
    classes: ["tank"],
    difficulty: 2,
    tier: "S",
    popular: false,
    image: "shen",
    color: "#3F7A5C",
    playstyle: "Tanque global de proteção",
    summary:
      "O ninja sem emoção. Shen empurra a onda, faz push global com o R e vira o seguro de vida do time. Seu W anula básicos em área — o pior pesadelo dos atiradores e lutadores de AS.",
    strengths: [
      "R global: escudo + teleporte em qualquer aliado",
      "W anula básicos em área (anti-Jax/Sett/ADC)",
      "Empurrão de onda constante com energia",
    ],
    weaknesses: [
      "Dano baixo: depende do time para converter vantagem",
      "R mal usado deixa a rota perdida (e você fora dela)",
      "Energia limita combos rápidos",
    ],
    startItems: [
      { id: "dorans-shield", note: "Sustain e segurança" },
      { id: "health-potion" },
    ],
    boots: [
      { id: "plated-steelcaps", note: "Contra AD" },
      { id: "mercury-treads", note: "Contra CC/AP" },
    ],
    coreItems: [
      { id: "hollow-radiance", note: "Limpeza de onda + MR" },
      { id: "spirit-visage", note: "Amplifica escudo e cura do Q" },
      { id: "thornmail", note: "Armadura + anti-cura" },
    ],
    situationalItems: [
      { id: "titanic-hydra", note: "Dano em área + vida para o push" },
      { id: "kaenic-rookern", note: "Contra AP alto" },
      { id: "force-of-nature", note: "Contra magos móveis" },
      { id: "unending-despair", note: "Sustain em teamfight" },
      { id: "frozen-heart", note: "Contra AS alta" },
      { id: "jaksho", note: "Resistências crescentes" },
    ],
    runes: {
      primaryTree: "resolve",
      keystone: "grasp",
      primary: ["demolish", "second-wind", "overgrowth"],
      secondaryTree: "inspiration",
      secondary: ["magical-footwear", "cosmic-insight"],
      shards: ["+Velocidade de Habilidade", "+9 Adaptativo (AD)", "+Vida bônus (escala com nível)"],
      explanation:
        "Grasp é a única keystone que se importa com o seu estilo de troca curta. Cosmic Insight acelera o Teleporte e o R — seu valor global cresce com cada segundo de recarga economizado.",
    },
    altRunesNote:
      "Contra times com muito CC: troque Demolish por Unflinching e vença as brigas de controle.",
    spells: [
      { id: "flash", note: "Flash + E para atordoar o time inteiro" },
      { id: "teleport", note: "Dobra a presença global com o R" },
    ],
    skillPriority: ["Q", "E", "W"],
    abilities: [
      { key: "P", name: "Barreira Ki", desc: "Usar uma habilidade concede um escudo se você não foi atingido recentemente. Trocas quase gratuitas quando bem timed." },
      { key: "Q", name: "Investida do Crepúsculo", desc: "Puxa a espada espiritual: seus 3 próximos básicos causam dano extra; se a espada atravessa o inimigo, cura e acelera." },
      { key: "W", name: "Refúgio Espiritual", desc: "Cria uma zona onde ALIADOS (e você) não são atingidos por ataques básicos. Anula atiradores e lutadores de AS." },
      { key: "E", name: "Investida Sombria", desc: "Dash que atordoa campeões atingidos. Energia recuperada por campeão atingido." },
      { key: "R", name: "Unidos", desc: "Escudo global em um aliado + teleporte até ele. Transforme qualquer gank sofrido em contra-jogada." },
    ],
    comboTips: [
      "E (atordoa) → Q com espada atravessando (cura) → básicos com passiva: a troca padrão.",
      "W ANTES do básico do inimigo: 1,75s sem auto-ataques = troca vencida.",
      "R no aliado em perigo + TP de volta: você não perde quase nada de tempo de rota.",
    ],
    tips: {
      early: [
        "Empurre ondas com Q + passiva e faça o inimigo escolher: farm ou troca.",
        "Espada atravessando o alvo no Q = cura: posicione a lâmina antes de trocar.",
        "Nível 6: avise o time que o R está pronto — a pressão global começa.",
      ],
      mid: [
        "R no jungler invadindo ou no dive do time: toda jogada vira 4v5 a seu favor.",
        "Depois do R, TP de volta: você perde no máximo uma onda.",
        "W anula o ADC inteiro por 1,75s: use na entrada do dive inimigo.",
      ],
      late: [
        "Você é o seguro do carry: W quando o assassino pular nele.",
        "Splitpush leve + R: force o inimigo a responder em dois lugares.",
        "Flash + E em teamfight decide: atordoar 2+ abre a briga para o time.",
      ],
    },
    strongAgainst: [
      { champion: "Jax", note: "W anula os básicos do Counter Strike e o E cancela o leap dele." },
      { champion: "Sett", note: "Os básicos dele não existem dentro da sua W." },
      { champion: "Garen", note: "O E giratório são auto-ataques: sua W desliga o damage dele." },
    ],
    weakAgainst: [
      { champion: "Mordekaiser", note: "Dano de habilidade ignora sua W e escala % vida." },
      { champion: "Gwen", note: "Toda a kit dela é habilidade: sua W não bloqueia nada." },
      { champion: "Riven", note: "Burst rápido antes do escudo recarregar." },
      { champion: "Ornn", note: "Escala de tanque melhor + Frágil pune seu sustain." },
    ],
    counterTips: [
      "Contra magos, acelere Hollow Radiance + Kaenic e jogue de Q poke.",
      "Seu R vale mais que uma onda: rotacione SEM medo, mas com TP guardado.",
      "Passiva + W juntos: o combo defensivo que vence qualquer all-in de AS.",
    ],
    altBuilds: [
      {
        name: "Shen Híbrido de Dano",
        when: "Quando o time precisa de um segundo motor de dano",
        items: [
          { id: "titanic-hydra" },
          { id: "iceborn-gauntlet", note: "Sheen + desaceleração" },
          { id: "spirit-visage" },
        ],
        note: "Push de onda brutal e dano relevante mantendo o tanque.",
      },
      {
        name: "Frontline Absoluto",
        when: "Quando você é o único tanque do time",
        items: [
          { id: "hollow-radiance" },
          { id: "jaksho" },
          { id: "unending-despair" },
        ],
        note: "Resistências crescentes + drenagem: o frontline que não morre.",
      },
    ],
  },
];
