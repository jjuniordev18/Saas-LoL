// ============================================================
// Campeões (parte 5) — Yone, Irelia, Gangplank, Sion, Wukong
// Builds baseadas no patch 16.21 (Temporada 2026)
// ============================================================
import type { Champion } from "./data";

export const CHAMPIONS_E: Champion[] = [
  // ------------------------------------------------------------
  // YONE
  // ------------------------------------------------------------
  {
    id: "yone",
    name: "Yone",
    title: "o Inesquecido",
    classes: ["duelista", "lutador"],
    difficulty: 3,
    tier: "A",
    image: "Yone",
    color: "#C44567",
    playstyle: "Duelista híbrido de básicos",
    summary:
      "Yone alterna dano físico e mágico e tem mobilidade única: o E separa a alma do corpo para trocas sem risco. No late game ele fura qualquer build com dano misto — difícil de buildar contra ele.",
    strengths: [
      "Dano híbrido (AD + AP): resistências únicas dos inimigos nunca são suficientes",
      "E de trocas seguras: entra, bate e volta sem tomar punição",
      "3º Q é um empurrão: engage, escape e poke em um",
    ],
    weaknesses: [
      "Muito dependente do E: usar errado = morrer longe do corpo",
      "Fraco contra CC e burst cedo: precisa de itens para escalar",
      "Fracos os primeiros níveis: punível por lutadores agressivos",
    ],
    startItems: [
      { id: "dorans-blade", note: "Dano e sustain para trocar cedo" },
      { id: "health-potion" },
    ],
    boots: [
      { id: "berserker-greaves", note: "Velocidade de ataque para o kit de básicos" },
      { id: "plated-steelcaps", note: "Contra lutadores AD agressivos" },
    ],
    coreItems: [
      { id: "botrk", note: "Dano % da vida atual + roubo: o coração da build" },
      { id: "phantom-dancer", note: "Crítico e velocidade para os básicos alternados" },
      { id: "steraks-gage", note: "Vida + escudo para duelos prolongados" },
    ],
    situationalItems: [
      { id: "wits-end", note: "MR + dano on-hit contra times AP" },
      { id: "deaths-dance", note: "Sobreviva ao burst físico" },
      { id: "guardian-angel", note: "Segunda vida para flanquear sem medo" },
      { id: "mortal-reminder", note: "Anti-cura contra regeneração pesada" },
      { id: "mercury-treads", note: "Contra CC e AP quando não precisa de AS" },
    ],
    runes: {
      primaryTree: "precision",
      keystone: "lethal-tempo",
      primary: ["triumph", "legend-alacrity", "cut-down"],
      secondaryTree: "resolve",
      secondary: ["bone-plating", "overgrowth"],
      shards: ["+Velocidade de Ataque", "+9 Adaptativo (AD)", "+Vida bônus (escala com nível)"],
      explanation:
        "Lethal Tempo transforma seus básicos alternados em metralhadora; o empurrão do Q e o E permitem colar no alvo para aproveitar todas as stacks. Bone Plating te salva do burst na troca inicial.",
    },
    altRunesNote:
      "Fleet Footwork para matchups de poke difíceis: sustain e mobilidade na rota.",
    spells: [
      { id: "flash", note: "Escape e correção de posicionamento" },
      { id: "teleport", note: "Voltar à rota sem perder ondas" },
    ],
    skillPriority: ["Q", "E", "W"],
    abilities: [
      { key: "P", name: "Passagem do Caminhante", desc: "Metade do dano crítico vira dano mágico — por isso resistências únicas nunca resolvem Yone." },
      { key: "Q", name: "Corte Mortal", desc: "Perfura em linha; a cada 3 usos, o Q vira um empurrão que desloca você com o alvo." },
      { key: "W", name: "Fenda Espiritual", desc: "Golpeia em cone frontal, causando dano e gerando escudo proporcional aos alvos acertados." },
      { key: "E", name: "Alma Desatada", desc: "Sua alma sai do corpo: cause dano livremente e, ao terminar (ou reativar), volte e receba parte do dano causado." },
      { key: "R", name: "Selo da Escuridão", desc: "Avança atravessando inimigos marcados, arremessando todos por cima ao final da linha." },
    ],
    comboTips: [
      "E → Q (empurrão) → W → básicos → E de volta: troca completa sem risco.",
      "Guarde o 3º Q: é seu engage e seu escape ao mesmo tempo.",
      "R só acerta quem estiver na linha: alinhe com E para atravessar o alvo de surpresa.",
    ],
    tips: {
      early: [
        "Farme com Q à distância: o empurrão do 3º Q limpa tropas atrás da onda.",
        "Troque só com E pronto: entre, W de frente e saia antes do fim da barra.",
        "Antes do primeiro item você perde all-ins: jogue de poke e escala.",
      ],
      mid: [
        "Splitpush com E: se vierem dois, você foge com o Q; se vier um, morre.",
        "W de frente sempre: o escudo escala com os acertos.",
        "Cuide da barra do E: terminar longe do corpo é a morte mais comum de Yone.",
      ],
      late: [
        "Flanqueie com E + R: um R bem posicionado vira teamfight.",
        "Seu dano misto fura tanques: garanta o carry inimigo primeiro.",
        "Use o corpo do E como porta de saída: planeje a rota de fuga antes de entrar.",
      ],
    },
    strongAgainst: [
      { champion: "Garen", note: "Sem CC confiável: você E entra, troca e volta antes do E dele." },
      { champion: "Nasus", note: "Poke do Q e trocas com E não deixam ele farmar tranquilamente." },
      { champion: "Kayle", note: "Domine o early: finalize antes de ela alcançar o 16." },
    ],
    weakAgainst: [
      { champion: "Pantheon", note: "Burst + stun cedo: sua barra de vida não acompanha as trocas dele." },
      { champion: "Renekton", note: "All-in forte antes do 6 e vida suficiente para ignorar seu poke." },
      { champion: "Malphite", note: "Armadura alta + Q de poke: sua fase de escala vira tortura." },
    ],
    counterTips: [
      "Nunca use E sem ver o jungle inimigo: a alma presa é uma sentença.",
      "Contra CC pesado, jogue de Q poke e espere o item de MR/limpeza.",
      "O 3º Q também pula paredes finas: memorize as rotas de fuga.",
    ],
    altBuilds: [
      {
        name: "Yone Tanque de On-Hit",
        when: "Time precisa de um front line extra e o inimigo tem muito burst",
        items: [
          { id: "botrk" },
          { id: "wits-end", note: "MR + on-hit" },
          { id: "steraks-gage" },
        ],
        note: "Menos crítico, mais sobrevivência — você continua batendo forte.",
      },
      {
        name: "Anti-Cura Total",
        when: "Mundo, Aatrox, Swain ou times com muita regeneração",
        items: [
          { id: "mortal-reminder" },
          { id: "botrk" },
          { id: "deaths-dance" },
        ],
        note: "Ferimentos Graves cedo cortam o sustain deles pela metade.",
      },
    ],
  },

  // ------------------------------------------------------------
  // IRELIA
  // ------------------------------------------------------------
  {
    id: "irelia",
    name: "Irelia",
    title: "a Dançarina das Lâminas",
    classes: ["duelista"],
    difficulty: 3,
    tier: "A",
    image: "Irelia",
    color: "#D36BA0",
    playstyle: "Duelista de dashes infinitos",
    summary:
      "Irelia dança entre os minions: cada Q acertado reseta o dash e cura. No mid game ela é o pesadelo de qualquer linha de frente — dano percentual de vida, stun em área e mobilidade infinita dentro da onda.",
    strengths: [
      "Q com reset em minions: mobilidade e sustain absurdos na onda",
      "Dano baseado na vida máxima: tanques não te assustam",
      "Stun do E + desarme do R: ferramentas de luta e fuga",
    ],
    weaknesses: [
      "Sem minions, sem Irelia: fora da onda o Q não tem reset",
      "Exige mecânica: Q errado em inimigo em vez de minion = troca perdida",
      "Fraca contra poke e burst que evitam brigas longas",
    ],
    startItems: [
      { id: "dorans-blade", note: "Sustain para as trocas com Q" },
      { id: "health-potion" },
    ],
    boots: [
      { id: "berserker-greaves", note: "AS acelera as stacks da passiva" },
      { id: "plated-steelcaps", note: "Contra lutadores AD de básico" },
    ],
    coreItems: [
      { id: "botrk", note: "Dano % vida + roubo: sinergia total com o Q" },
      { id: "wits-end", note: "MR + velocidade de ataque + on-hit" },
      { id: "steraks-gage", note: "Vida para sobreviver ao foco inimigo" },
    ],
    situationalItems: [
      { id: "deaths-dance", note: "Contra times de dano físico" },
      { id: "guardian-angel", note: "Segunda vida para mergulhar no backline" },
      { id: "trinity-force", note: "Sheen + AS quando precisa de burst em torres" },
      { id: "mortal-reminder", note: "Anti-cura contra Mundo, Aatrox e companhia" },
    ],
    runes: {
      primaryTree: "precision",
      keystone: "conqueror",
      primary: ["triumph", "legend-alacrity", "last-stand"],
      secondaryTree: "resolve",
      secondary: ["second-wind", "overgrowth"],
      shards: ["+Velocidade de Ataque", "+9 Adaptativo (AD)", "+Vida bônus (escala com nível)"],
      explanation:
        "Conqueror enche em segundos com o Q em minions + campeões, e a cura da runa + do Q fazem você duelar quase eternamente. Last Stand brilha quando você luta com meia vida — o estado natural da Irelia.",
    },
    altRunesNote:
      "Lethal Tempo para brigas longas contra tanques que não escapam do seu alcance.",
    spells: [
      { id: "flash", note: "Fechar distância ou escapar" },
      { id: "teleport", note: "Rota e teamfights por todo o mapa" },
    ],
    skillPriority: ["Q", "E", "W"],
    abilities: [
      { key: "P", name: "Ímpeto Ioniano", desc: "Cada habilidade acertada cura e empilha velocidade de ataque; no máximo, habilidades marcam para o Q." },
      { key: "Q", name: "Lâminas Vagarosas", desc: "Dash que causa dano e cura; reseta completamente ao acertar alvo marcado ou morto." },
      { key: "W", name: "Desfazer", desc: "Carrega um golpe em área que causa dano e reduz o dano recebido enquanto carrega." },
      { key: "E", name: "Redemoinho Vanguarda", desc: "Lança duas lâminas; quem ficar entre elas é atordoado e marcado para o Q." },
      { key: "R", name: "Vanguarda Divina", desc: "Parede de lâminas que causa dano, marca, desarma e desacelera quem atravessar." },
    ],
    comboTips: [
      "E atrás de você, Q no minion: o stun fica entre você e o alvo para a troca.",
      "Q nos minions de vida baixa para reposicionar e renovar as stacks da passiva.",
      "R no meio da onda: marca todos e libera Qs infinitos na luta.",
    ],
    tips: {
      early: [
        "Deixe um minion quase morto como 'porta de saída' antes de qualquer troca.",
        "W reduz dano: use para absorver o burst do combo inimigo.",
        "Contra poke, Q em minions para curar — nunca desperdice o Q em poke inútil.",
      ],
      mid: [
        "Você manda em brigas de 2v2 perto de ondas: procuro skirmishes no mid/jungle.",
        "R + E + Q no carry: sequência de engage que desarma a defesa deles.",
        "Splitpush: se dobrarem, R na parede e foge; se vierem um, duelar.",
      ],
      late: [
        "Espere o engage do time: sua função é mergulhar o backline.",
        "Guarde um Q de minion para reentrar depois de matar o carry.",
        "O desarme do R anula atiradores: priorize acertá-los.",
      ],
    },
    strongAgainst: [
      { champion: "Dr. Mundo", note: "Dano % da vida atravessa a montanha de vida dele." },
      { champion: "Garen", note: "Stun do E + dashes: ele nunca fecha a distância para o R." },
      { champion: "Ornn", note: "Q resetado nos minions: nenhuma troca lenta funciona contra você." },
    ],
    weakAgainst: [
      { champion: "Renekton", note: "Burst em duas habilidades + sustain: vence suas trocas cedo." },
      { champion: "Pantheon", note: "Ele bloqueia seu all-in e te mata na janela de stun." },
      { champion: "Jax", note: "Counter Strike bloqueia seus Qs e devolve atordoado." },
    ],
    counterTips: [
      "Nunca Q direto no campeão sem minion por perto: é seu único escape.",
      "Contra Jax, espere o E dele acabar antes de encostar com as lâminas.",
      "O W também serve de purga: carregue-o ao defender o engage inimigo.",
    ],
    altBuilds: [
      {
        name: "Irelia Splitpush",
        when: "Seu time escala melhor e você quer pressionar o mapa",
        items: [
          { id: "botrk" },
          { id: "trinity-force" },
          { id: "hullbreaker" },
        ],
        note: "Derruba torres absurdamente rápido com as stacks de AS.",
      },
      {
        name: "Contra Times AP",
        when: "3+ fontes de dano mágico no inimigo",
        items: [
          { id: "wits-end" },
          { id: "maw-of-malmortius" },
          { id: "steraks-gage" },
        ],
        note: "MR + escudo do Maw cancela o burst mágico deles.",
      },
    ],
  },

  // ------------------------------------------------------------
  // GANGPLANK
  // ------------------------------------------------------------
  {
    id: "gangplank",
    name: "Gangplank",
    title: "o Flagelo dos Mares",
    classes: ["lutador"],
    difficulty: 3,
    tier: "B",
    image: "Gangplank",
    color: "#E8A33D",
    playstyle: "Poke com barris e impacto global",
    summary:
      "Gangplank joga xadrez com barris: combos de Q + E explodem em área e reduzem armadura. Com o R global, ele participa de toda briga do mapa. Alto teto de habilidade — quem domina os barris carrega jogos.",
    strengths: [
      "Combo de barris: burst em área que reduz armadura de todos",
      "R global: impacto em qualquer teamfight sem sair da rota",
      "W remove CC e cura: difícil de enganchar",
    ],
    weaknesses: [
      "Barris exigem treino: errar o combo = não ter dano",
      "Fraco no early contra lutadores de all-in",
      "Dependente de escala de itens e ouro",
    ],
    startItems: [
      { id: "dorans-blade", note: "Dano para o poke com Q" },
      { id: "health-potion" },
    ],
    boots: [
      { id: "plated-steelcaps", note: "Contra lutadores AD" },
      { id: "mercury-treads", note: "Contra magos e CC" },
    ],
    coreItems: [
      { id: "trinity-force", note: "Sheen amplifica Q e barris" },
      { id: "phantom-dancer", note: "Crítico e mobilidade para os básicos" },
      { id: "seryldas-grudge", note: "Penetração de armadura para o combo de barris" },
    ],
    situationalItems: [
      { id: "guardian-angel", note: "Segunda vida no late game" },
      { id: "steraks-gage", note: "Vida quando mergulha em brigas" },
      { id: "mortal-reminder", note: "Anti-cura contra regeneração" },
      { id: "wits-end", note: "Contra times AP de poke" },
    ],
    runes: {
      primaryTree: "resolve",
      keystone: "grasp",
      primary: ["demolish", "second-wind", "overgrowth"],
      secondaryTree: "inspiration",
      secondary: ["magical-footwear", "cosmic-insight"],
      shards: ["+Velocidade de Habilidade", "+9 Adaptativo (AD)", "+Vida bônus (escala com nível)"],
      explanation:
        "Grasp + Q = trocas grátis à distância. Second Wind + Doran's seguram o early contra lutadores agressivos enquanto você escala para o combo de barris. Cosmic Insight acelera o Flash e o TP.",
    },
    altRunesNote:
      "Fleet Footwork para sustain extra e matchups de poke espelhado.",
    spells: [
      { id: "flash", note: "Corrigir o posicionamento dos barris" },
      { id: "teleport", note: "R + TP: pressão global total" },
    ],
    skillPriority: ["Q", "E", "W"],
    abilities: [
      { key: "P", name: "Fogo de Pólvora", desc: "Q envenena o alvo; abater com Q rende prata e experiência — sua economia de passiva." },
      { key: "Q", name: "Disparo de Pistola", desc: "Tiro à distância que aplica efeitos on-hit; compra melhorias de R com a prata da passiva." },
      { key: "W", name: "Poção de Cítricos", desc: "Come uma laranja: cura e remove atordoamentos e outros efeitos de controle." },
      { key: "E", name: "Barril de Pólvora", desc: "Barris encadeados explodem em área, causando dano e reduzindo armadura dos atingidos." },
      { key: "R", name: "Bombardeio de Canhão", desc: "Ondas de canhão em qualquer lugar do mapa; melhore com a prata da passiva." },
    ],
    comboTips: [
      "Barril → tiro (Q) no barril: inicia a explosão à distância.",
      "Barris encadeados: coloque o segundo no limite de alcance do primeiro para acertar quem foge.",
      "Q + Grasp no início do cooldown: poke constante sem perder trocas.",
    ],
    tips: {
      early: [
        "Farme com Q quando o matchup é ruim: a prata compensa o farm perdido.",
        "Barril + W de defesa: a laranja quebra o stun do engage inimigo.",
        "Use o R para ayudar o time cedo: ouro e assistências valem mais que farm.",
      ],
      mid: [
        "Combo de 2 barris + Q derrete ondas: empurre e TP nos objetivos.",
        "Guarde o W para o CC do engage inimigo, não para cura trivial.",
        "Zona de barris na torre: quem se aproximar para defender leva burst.",
      ],
      late: [
        "Prata suficiente: R com 'Fire at Will' varre teamfights inteiras.",
        "Posicione barris antes do fight começar: o time inimigo pisou na mina.",
        "Você é o poke mais forte do jogo: force recuos com combo de longa distância.",
      ],
    },
    strongAgainst: [
      { champion: "Garen", note: "Poke do Q + barris: ele nunca chega perto o suficiente para o E." },
      { champion: "Nasus", note: "Zona de barris impede o farm dele — stacka menos com medo." },
      { champion: "Ornn", note: "Trocas à distância com Grasp + Q ganham do jogo lento dele." },
    ],
    weakAgainst: [
      { champion: "Irelia", note: "Ela dasha nos seus barris e nos minions: poke não segura o all-in." },
      { champion: "Riven", note: "Escudos + dashes fecham o combo antes dele começar." },
      { champion: "Camille", note: "Hookshot entra no seu rosto e o stun pune o barril mal posicionado." },
    ],
    counterTips: [
      "Pratique o combo de barris no treino: é a diferença entre um GP bom e um ótimo.",
      "Contra dashes, coloque o barril atrás de você: eles pulam para o rosto e levam burst.",
      "W remove o stun do Pantheon e o E de Renekton: guarde para esses momentos.",
    ],
    altBuilds: [
      {
        name: "GP Crítico de Late",
        when: "Jogo lento e você precisa carregar o late game",
        items: [
          { id: "trinity-force" },
          { id: "phantom-dancer" },
          { id: "guardian-angel" },
        ],
        note: "Barris críticos explodem teamf inteiras com um combo.",
      },
      {
        name: "GP Tanque de Zona",
        when: "Seu time tem dano suficiente e você é o front line",
        items: [
          { id: "sunfire-aegis" },
          { id: "sundered-sky" },
          { id: "steraks-gage" },
        ],
        note: "Menos burst, mais presença: barris ainda reduzem armadura.",
      },
    ],
  },

  // ------------------------------------------------------------
  // SION
  // ------------------------------------------------------------
  {
    id: "sion",
    name: "Sion",
    title: "o Colosso Não-Morto",
    classes: ["tank", "lutador"],
    difficulty: 1,
    tier: "A",
    image: "Sion",
    color: "#8B6F4E",
    playstyle: "Tanque de ondas e ultimate global",
    summary:
      "Sion empilha vida para sempre com o W, empurra ondas com o Q e morre de propósito para reiniciar brigas com a passiva. Um tanque simples de jogar que ensina wave management — perfeito para aprender a rota.",
    strengths: [
      "W dá vida permanente: fica mais tanque a cada onda",
      "Empurra ondas absurdamente rápido com Q + W",
      "Passiva de zumbi: até morto ele mata — cuidado ao divear",
    ],
    weaknesses: [
      "Sem mobilidade: punível por campeões de dash e poke",
      "Dano cai muito no late game (sem contar a passiva)",
      "Q precisa de carga: errar a janela de carga = dano zero",
    ],
    startItems: [
      { id: "dorans-shield", note: "Sustain para trocas com Q" },
      { id: "health-potion" },
    ],
    boots: [
      { id: "plated-steelcaps", note: "Contra lutadores e atiradores AD" },
      { id: "mercury-treads", note: "Contra magos e CC pesado" },
    ],
    coreItems: [
      { id: "heartsteel", note: "Vida infinita sinergiza com o W" },
      { id: "sunfire-aegis", note: "Dano em área para limpar ondas" },
      { id: "dead-mans-plate", note: "Mobilidade + burst no primeiro básico" },
    ],
    situationalItems: [
      { id: "thornmail", note: "Anti-cura contra regeneração inimiga" },
      { id: "kaenic-rookern", note: "MR contra times mágicos" },
      { id: "warmogs", note: "Recuperação absurda entre brigas" },
      { id: "randuins-omen", note: "Contra críticos e velocidade de ataque" },
      { id: "hollow-radiance", note: "Contra AP e ondas pesadas" },
    ],
    runes: {
      primaryTree: "resolve",
      keystone: "grasp",
      primary: ["demolish", "second-wind", "overgrowth"],
      secondaryTree: "inspiration",
      secondary: ["magical-footwear", "cosmic-insight"],
      shards: ["+Velocidade de Habilidade", "+9 Adaptativo (AD)", "+Vida bônus (escala com nível)"],
      explanation:
        "Grasp + Overgrowth + W + Heartsteel: quatro fontes de vida permanente. Second Wind contra poke, Magical Footwear economiza ouro para o Heartsteel mais cedo.",
    },
    altRunesNote:
      "Aftershock para engajamentos: o Q carregado e o R garantem o CC que ativa a runa.",
    spells: [
      { id: "flash", note: "Engajar com Q surpresa" },
      { id: "teleport", note: "Pressão de mapa e objetivos" },
    ],
    skillPriority: ["Q", "W", "E"],
    abilities: [
      { key: "P", name: "Glória na Morte", desc: "Ao morrer, Sion vira zumbi com vida decrescente, dano alto e velocidade — mate ou morra de novo." },
      { key: "Q", name: "Machado Colossal", desc: "Carrega um golpe em linha: desacelera e, totalmente carregado, arremessa para cima." },
      { key: "W", name: "Vontade Inquebrável", desc: "Escudo que explode em dano; matar unidades rende vida máxima permanente para sempre." },
      { key: "E", name: "Rugido do Carrasco", desc: "Arremessa um minion como projétil: dano, desaceleração e redução de armadura." },
      { key: "R", name: "Salto da Força Bruta", desc: "Investida em linha reta: knock-up em área no impacto. De longe, é um engage global." },
    ],
    comboTips: [
      "E no minion → acerta o alvo → Q carregado: combo de rota clássico.",
      "R em linha reta nas paredes da rota: alinhe a investida antes de usar.",
      "W antes de morrer: a explosão com a passiva continua o dano.",
    ],
    tips: {
      early: [
        "Farm de vida: mate cada minion com o W quando possível — cada um é vida permanente.",
        "Q carregado só quando o inimigo for farmar: force a escolha dele.",
        "Empurre a onda antes de voltar: seu farm sob torre é excelente.",
      ],
      mid: [
        "Heartsteel procs: bata nos tanques inimigos sempre que possível.",
        "R para engajar o mid game: alinhe a investida com o time entrando.",
        "Morrer empurrando onda não é problema: a passiva derruba torres.",
      ],
      late: [
        "Você é o engage: R na linha inimiga inteira decide a briga.",
        "Q carregado no carry: um stun de 1,75s é um carry morto.",
        "Use a morte de propósito para empurrar a rota durante o Baron.",
      ],
    },
    strongAgainst: [
      { champion: "Nasus", note: "Empurra as ondas antes dele: rouba o farm e os stacks." },
      { champion: "Ornn", note: "Trocas de poke com Q + Grasp: seu farm de W escala melhor." },
      { champion: "Kayle", note: "Punir o early com Q + E: finalize antes do 11." },
    ],
    weakAgainst: [
      { champion: "Fiora", note: "Vitals + true damage atravessam escudo e vida." },
      { champion: "Gwen", note: "Dano % vida + névoa: seu Q não acerta quem se esquiva." },
      { champion: "Camille", note: "Ela empurra mais rápido e o true damage ignora seu tank." },
    ],
    counterTips: [
      "Contra true damage, invista em dano + R para o time, não em mais vida.",
      "Q carregado também pula paredes? Não — mas o R destrói paredes finas.",
      "Sua passiva tem velocidade alta: mate um carry antes de morrer de vez.",
    ],
    altBuilds: [
      {
        name: "Sion Splitpusher",
        when: "Seu time escala e você quer derrubar torres",
        items: [
          { id: "heartsteel" },
          { id: "titanic-hydra" },
          { id: "hullbreaker" },
        ],
        note: "Titanic com 4000+ de vida empurra ondas em um básico.",
      },
      {
        name: "Anti-AD Absoluto",
        when: "Inimigo com 3+ campeões de dano físico",
        items: [
          { id: "thornmail" },
          { id: "randuins-omen" },
          { id: "frozen-heart" },
        ],
        note: "Redução de velocidade de ataque + armadura: eles param de bater.",
      },
    ],
  },

  // ------------------------------------------------------------
  // WUKONG
  // ------------------------------------------------------------
  {
    id: "wukong",
    name: "Wukong",
    title: "o Rei dos Macacos",
    classes: ["lutador", "duelista"],
    difficulty: 2,
    tier: "A",
    image: "MonkeyKing",
    color: "#E8B84B",
    playstyle: "Engajador com clones e burst",
    summary:
      "Wukong engana e explode: o clone do W confunde o inimigo enquanto o E fecha a distância e o R arremessa o time inteiro. Combina burst de assassino com engage de lutador — e a passiva o deja mais tanque em brigas.",
    strengths: [
      "W cria um clone: engana habilidades e troca de lugar na luta",
      "E + Q tem burst rápido e redução de armadura",
      "R duplo com knock-up: engage de teamfight completo",
    ],
    weaknesses: [
      "Sustentação baixa: trocas longas contra sustain não funcionam",
      "Cooldowns altas no early: errar o W deixa você sem escape",
      "Depende do combo completo: sem R o dano cai muito",
    ],
    startItems: [
      { id: "dorans-blade", note: "Dano para o burst do E + Q" },
      { id: "health-potion" },
    ],
    boots: [
      { id: "plated-steelcaps", note: "Contra lutadores AD" },
      { id: "mercury-treads", note: "Contra magos e CC" },
    ],
    coreItems: [
      { id: "sundered-sky", note: "Crítico garantido + cura nas trocas curtas" },
      { id: "black-cleaver", note: "Redução de armadura empilha com o Q" },
      { id: "steraks-gage", note: "Vida + escudo para o engage" },
    ],
    situationalItems: [
      { id: "deaths-dance", note: "Sobreviva ao burst físico" },
      { id: "maw-of-malmortius", note: "MR contra mágicos de burst" },
      { id: "titanic-hydra", note: "Dano em área + vida" },
      { id: "guardian-angel", note: "Segunda vida para o R de teamfight" },
    ],
    runes: {
      primaryTree: "precision",
      keystone: "conqueror",
      primary: ["triumph", "legend-alacrity", "last-stand"],
      secondaryTree: "domination",
      secondary: ["sudden-impact", "treasure-hunter"],
      shards: ["+Velocidade de Ataque", "+9 Adaptativo (AD)", "+Vida bônus (escala com nível)"],
      explanation:
        "Conqueror enche com E + Q + básicos do clone. Sudden Impact ativa com o dash do E e o W, dando penetração para o burst. Treasure Hunter acelera o Sundered Sky.",
    },
    altRunesNote:
      "Fleet Footwork contra matchups de poke pesado: sustain na rota.",
    spells: [
      { id: "flash", note: "Corrigir o R ou escapar" },
      { id: "teleport", note: "Rota e teamfights pelo mapa" },
    ],
    skillPriority: ["E", "Q", "W"],
    abilities: [
      { key: "P", name: "Pele de Pedra", desc: "Ganha resistências por campeão inimigo próximo — quanto mais gente perto, mais tanque você fica." },
      { key: "Q", name: "Praga da Vara", desc: "Os próximos básicos alcançam mais longe e causam dano extra reduzindo armadura." },
      { key: "W", name: "Clone de Guerra", desc: "Fica invisível e cria um clone que ataca e causa dano; o clone é o seu escape e seu engano." },
      { key: "E", name: "Nuvem Divina", desc: "Dash no alvo com dano; cria clones de ataque que batem junto de você." },
      { key: "R", name: "Ciclone", desc: "Gira a vara arremessando inimigos para cima; reative para estender o giro." },
    ],
    comboTips: [
      "W → reposicionar → E + Q no alvo real: o inimigo gastou habilidades no clone.",
      "E → Q → R com carga dupla: o knock-up estendido prende dois alvos.",
      "Guarde o W para escapar: invisibilidade quebra a mira do gank.",
    ],
    tips: {
      early: [
        "Trocas de 3 segundos: E + Q + básicos e saia com W se der ruim.",
        "A passiva te deixa mais tanque perto de minions inimigos: troque na onda.",
        "Q reduz armadura: alinhe com o E para o burst máximo.",
      ],
      mid: [
        "Procure flank no R: Ciclone no meio do time inimigo decide a luta.",
        "Splitpush com o W: o clone empurra? Não — mas engana o gank.",
        "Coordene o R com o engage do time: você é o segundo knock-up.",
      ],
      late: [
        "Sua passiva brilha em teamf: entre de frente, você é mais tanque do que parece.",
        "R no carry inimigo: dois ciclos de knock-up = zero dano deles.",
        "W em teamf não é só escape: é reposição de flanco.",
      ],
    },
    strongAgainst: [
      { champion: "Ornn", note: "Trocas curtas com W: o clone engana o poke e o burst vence." },
      { champion: "Kayle", note: "Punir o early com E + Q antes do 11." },
      { champion: "Yorick", note: "O clone engana o E dele e você dana sem tomar punição." },
    ],
    weakAgainst: [
      { champion: "Malphite", note: "Armadura alta + Q de poke: seu dano físico não vira nada." },
      { champion: "Renekton", note: "Burst + sustain: vence todas as trocas curtas dele." },
      { champion: "Jax", note: "Counter Strike bloqueia o combo e o stun devolve." },
    ],
    counterTips: [
      "Nunca use W ofensivamente sem o E pronto: sem escape você morre.",
      "Contra Malphite, considere Wit's End cedo: MR + dano contínuo.",
      "O knock-up do R interrompe teleportes e canais: guarde para o R inimigo.",
    ],
    altBuilds: [
      {
        name: "Wukong Assassino",
        when: "Inimigo com carry frágil e seu time tem front line",
        items: [
          { id: "eclipse" },
          { id: "youmuus-ghostblade" },
          { id: "seryldas-grudge" },
        ],
        note: "Burst de letalidade: E + Q apaga o carry em segundos.",
      },
      {
        name: "Wukong Tanque de Engage",
        when: "Seu time precisa de um iniciador durável",
        items: [
          { id: "black-cleaver" },
          { id: "deaths-dance" },
          { id: "spirit-visage" },
        ],
        note: "Resistências + passiva: o R de teamf vira o jogo.",
      },
    ],
  },
];
