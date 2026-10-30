// ============================================================
// Campeões (parte 6) — Kled, Gnar, Singed, Vladimir, Jayce
// Builds baseadas no patch 16.21 (Temporada 2026)
// ============================================================
import type { Champion } from "./data";

export const CHAMPIONS_F: Champion[] = [
  // ------------------------------------------------------------
  // KLED
  // ------------------------------------------------------------
  {
    id: "kled",
    name: "Kled",
    title: "o Cavaleiro Caçamba",
    classes: ["lutador", "duelista"],
    difficulty: 2,
    tier: "B",
    image: "Kled",
    color: "#B0473C",
    playstyle: "Montaria com segunda vida",
    summary:
      "Kled é dois campeões em um: montado na Skaarl, é um lutador explosivo; desmontado, ganha velocidade e bônus de ataque. A remontagem surpresa durante o all-in é o pesadelo de quem calcula mal a vida dele.",
    strengths: [
      "Skaarl é uma vida extra: inimigos subestimam a remontagem",
      "W causa dano % de vida no 4º golpe: tritura tanques",
      "Desmontado ele fica rápido: recuar e remontar é fácil",
    ],
    weaknesses: [
      "Sem Skaarl no early é muito frágil: punível ao desmontar",
      "Depende de acertar os arpões para colar no alvo",
      "All-in depende do R: sem ele o engage é ruim",
    ],
    startItems: [
      { id: "dorans-blade", note: "Dano para o W de 4 golpes" },
      { id: "health-potion" },
    ],
    boots: [
      { id: "plated-steelcaps", note: "Contra lutadores AD" },
      { id: "mercury-treads", note: "Contra magos e CC" },
    ],
    coreItems: [
      { id: "stridebreaker", note: "Ativo cola no alvo para o W" },
      { id: "black-cleaver", note: "Armadura caindo com cada golpe" },
      { id: "steraks-gage", note: "Vida para sobreviver entre montarias" },
    ],
    situationalItems: [
      { id: "deaths-dance", note: "Contra burst físico" },
      { id: "titanic-hydra", note: "Dano em área + vida" },
      { id: "mortal-reminder", note: "Anti-cura contra regeneração" },
      { id: "guardian-angel", note: "Terceira vida com Skaarl" },
      { id: "maw-of-malmortius", note: "MR contra mágicos de burst" },
    ],
    runes: {
      primaryTree: "precision",
      keystone: "conqueror",
      primary: ["triumph", "legend-alacrity", "last-stand"],
      secondaryTree: "resolve",
      secondary: ["second-wind", "overgrowth"],
      shards: ["+Velocidade de Ataque", "+9 Adaptativo (AD)", "+Vida bônus (escala com nível)"],
      explanation:
        "Conqueror + W de 4 golpes = trocas que você quase sempre vence. Last Stand combina com o estilo Kled: lutar com meia vida e remontar no rosto do inimigo.",
    },
    altRunesNote:
      "Fleet Footwork para sustain extra contra poke e trocas desgastantes.",
    spells: [
      { id: "flash", note: "Engajar ou reposicionar" },
      { id: "teleport", note: "Rota e pressão de mapa" },
    ],
    skillPriority: ["Q", "E", "W"],
    abilities: [
      { key: "P", name: "Coragem Descarada", desc: "Kled desmonta quando a Skaarl cai; com coragem suficiente ele remonta — e a remontagem cura e surpreende." },
      { key: "Q", name: "Arpão de Bolso", desc: "Arpões que grudam no alvo, desaceleram e puxam; montado, Kled lança dois." },
      { key: "W", name: "Metralhadora de Bolso", desc: "4 básicos com velocidade alta; o último causa dano baseado na vida máxima do alvo." },
      { key: "E", name: "Carga de Cavalhada", desc: "Dash no alvo e de volta; montado, ganha uma segunda carga." },
      { key: "R", name: "Aposta de Conselho", desc: "Investida de longa distância que dá escudo e velocidade para Kled e aliados no caminho." },
    ],
    comboTips: [
      "Q → E → W: arpão prende, dash fecha, 4 golpes derretem.",
      "Guarde o 4º golpe do W para depois do all-in: é onde está o dano %.",
      "R de longe na rota: o escudo + velocidade fazem o engage parecer impossível de fugir.",
    ],
    tips: {
      early: [
        "Troque com Q montado: dois arpões = desaceleração dupla.",
        "Desmontou? Recue: desmontado você é rápido, não forte.",
        "W contra tanques: o 4º golpe escala com a vida deles.",
      ],
      mid: [
        "Splitpush com E duplo: um dash para entrar, outro para sair.",
        "R para engajar teamf do lado do time: escudo para todos.",
        "Cuide da Skaarl: montado você tem CC e vida; desmontado, só pressa.",
      ],
      late: [
        "Sua remontagem é um mini-Resurrect: use o all-in com medo zero.",
        "Arpão no carry: puxa ele para o seu time na luta.",
        "Contra true damage, jogue de poke com Q e espere o time.",
      ],
    },
    strongAgainst: [
      { champion: "Kayle", note: "W de dano % + arpões: puna cada segundo antes do 11." },
      { champion: "Yorick", note: "Arpões pegam ele no meio dos gados e o E engana a troca." },
      { champion: "Volibear", note: "Sua remontagem quebra o all-in dele — ele gasta tudo na Skaarl." },
    ],
    weakAgainst: [
      { champion: "Renekton", note: "Burst + sustain vencem as trocas antes de você remontar." },
      { champion: "Pantheon", note: "Stun + burst: a Skaarl cai sem você fazer dano." },
      { champion: "Fiora", note: "Vitals + true damage: ela mata a Skaarl e você sobra exposto." },
    ],
    counterTips: [
      "Nunca all-in desmontado: espere a coragem encher antes de atacar de novo.",
      "Contra burst, leve Sterak's cedo: o escudo cobre o dano do combo.",
      "O pull do Q interrompe canais: guarde para teleportes e ultimates.",
    ],
    altBuilds: [
      {
        name: "Kled Tanque de Engage",
        when: "Seu time precisa de um iniciador com escudo",
        items: [
          { id: "black-cleaver" },
          { id: "deaths-dance" },
          { id: "spirit-visage" },
        ],
        note: "R + escudo do Spirit Visage: o time entra inteiro atrás de você.",
      },
      {
        name: "Kled Anti-Cura",
        when: "Mundo, Aatrox ou Volibear com regeneração pesada",
        items: [
          { id: "mortal-reminder" },
          { id: "stridebreaker" },
          { id: "steraks-gage" },
        ],
        note: "Ferimentos Graves cortam a cura deles na troca.",
      },
    ],
  },

  // ------------------------------------------------------------
  // GNAR
  // ------------------------------------------------------------
  {
    id: "gnar",
    name: "Gnar",
    title: "o Elo Perdido",
    classes: ["lutador", "tank"],
    difficulty: 2,
    tier: "B",
    image: "Gnar",
    color: "#7BC94A",
    playstyle: "Híbrido de poke e CC em massa",
    summary:
      "Gnar alterna entre o mini ágil (poke com bumerangue) e o mega tanque (stun em área e R que arremessa o time inteiro). Controlar a barra de fúria é a habilidade: transformar na hora certa vira teamfights.",
    strengths: [
      "Poke à distância no mini: trocas sem tomar dano",
      "Mega Gnar: tanque com stun e R de engage em área",
      "Transformação imprevisível para o inimigo controlar",
    ],
    weaknesses: [
      "Fúria descontrolada: virar Mega na hora errada é desastroso",
      "Mini Gnar é frágil: punível por dashes e burst",
      "R depende de acertar contra parede ou inimigo",
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
      { id: "black-cleaver", note: "Dano + redução de armadura" },
      { id: "iceborn-gauntlet", note: "Sheen para tanque + zona de gelo" },
      { id: "dead-mans-plate", note: "Mobilidade e burst no primeiro golpe" },
    ],
    situationalItems: [
      { id: "randuins-omen", note: "Contra críticos e velocidade de ataque" },
      { id: "force-of-nature", note: "MR contra poke mágico contínuo" },
      { id: "kaenic-rookern", note: "MR puro contra times mágicos" },
      { id: "steraks-gage", note: "Vida para o Mega Gnar entrar" },
      { id: "thornmail", note: "Anti-cura contra regeneração" },
    ],
    runes: {
      primaryTree: "precision",
      keystone: "fleet-footwork",
      primary: ["triumph", "legend-alacrity", "cut-down"],
      secondaryTree: "resolve",
      secondary: ["second-wind", "bone-plating"],
      shards: ["+Velocidade de Ataque", "+9 Adaptativo (AD)", "+Vida bônus (escala com nível)"],
      explanation:
        "Fleet Footwork + Q de bumerangue: sustain e poke na rota enquanto você administra a fúria. Second Wind + Bone Plating te protegem no momento em que o mini fica vulnerável.",
    },
    altRunesNote:
      "Grasp of the Undying para matchups corpo a corpo longos contra tanques.",
    spells: [
      { id: "flash", note: "Engajar com o R na parede" },
      { id: "teleport", note: "Teamfights e objetivos" },
    ],
    skillPriority: ["Q", "E", "W"],
    abilities: [
      { key: "P", name: "Gene da Fúria", desc: "Ataques e dano recebido empilham fúria; ao encher, Gnar se transforma em Mega Gnar por 15 segundos." },
      { key: "Q", name: "Pedrada", desc: "Mini: bumerangue que desacelera e volta; Mega: rocha que racha no chão e desacelera em área." },
      { key: "W", name: "Hiper Hidropulador", desc: "Mini: marcas empilhadas causam dano + velocidade; Mega: golpe em área que atordoa." },
      { key: "E", name: "Rebote", desc: "Mini: pula e quica mais longe; Mega: pulo único com dano em área no pouso." },
      { key: "R", name: "GNAR!", desc: "Mega: arremessa todos os inimigos na frente; acertar parede ou outro inimigo atordoa em área." },
    ],
    comboTips: [
      "Mini: Q de bumerangue + W nas marcas: poke duplo sem tomar retorno.",
      "Chegue perto do Mega com E: pule para dentro com o R pronto.",
      "R + parede: arremesse o carry contra a parede para o stun em área.",
    ],
    tips: {
      early: [
        "Administre a fúria: chegue ao Mega só quando a troca vale a pena.",
        "Pegue o bumerangue de volta: reduz o cooldown do Q.",
        "Mini Gnar kite: E para trás depois de cada troca.",
      ],
      mid: [
        "Empurre com o Mega e volte a ser mini: a onda cai e você poke de novo.",
        "Procure teamf com o R pronto: é o melhor engage da rota.",
        "Contra dashes, guárd o E para fugir da troca.",
      ],
      late: [
        "R em área decide teamf: flanqueie para arremessar 2+ inimigos.",
        "Mega Gnar é seu front line: entre primeiro, saia quando virar mini.",
        "Q longo no backline: poke antes do engage do seu time.",
      ],
    },
    strongAgainst: [
      { champion: "Renekton", note: "Poke do Q antes dele carregar o dash: trocas dele nunca começam." },
      { champion: "Garen", note: "Bumerangue desacelera e você nunca fica no alcance do E dele." },
      { champion: "Nasus", note: "Poke constante rouba o farm e o stack do W dele." },
    ],
    weakAgainst: [
      { champion: "Jayce", note: "Guerra de poke: o combo dele supera o seu bumerangue." },
      { champion: "Pantheon", note: "Stun + burst na janela em que o mini é frágil." },
      { champion: "Irelia", note: "Dashes resetados fecham a distância antes do poke somar." },
    ],
    counterTips: [
      "Aparece o Mega na rota sem querer? Recue: sem habilidades ele é um alvo lento.",
      "Contra dashes, use o E sempre como escape, nunca como engage.",
      "O stun do Mega W pode iniciar o all-in: chegue com fúria cheia de propósito.",
    ],
    altBuilds: [
      {
        name: "Gnar Tanque de Engage",
        when: "Seu time precisa de front line e CC",
        items: [
          { id: "sunfire-aegis" },
          { id: "iceborn-gauntlet" },
          { id: "kaenic-rookern" },
        ],
        note: "Mega Gnar imortal: o R entra, o time segue.",
      },
      {
        name: "Gnar Anti-AD",
        when: "Inimigo com 3+ campeões de dano físico",
        items: [
          { id: "randuins-omen" },
          { id: "thornmail" },
          { id: "frozen-heart" },
        ],
        note: "Reduz a velocidade de ataque de todo o time deles.",
      },
    ],
  },

  // ------------------------------------------------------------
  // SINGED
  // ------------------------------------------------------------
  {
    id: "singed",
    name: "Singed",
    title: "o Químico Louco",
    classes: ["tank", "mago"],
    difficulty: 2,
    tier: "B",
    image: "Singed",
    color: "#7A9B3F",
    playstyle: "Splitpusher de veneno e fuga",
    summary:
      "Singed corre e o veneno atrás dele mata: o Q deixa um rastro que derrete quem persegue. Com o fling do E e a velocidade do R, ele empurra torres sozinho e faz o time inimigo escolher entre segui-lo ou perder o mapa.",
    strengths: [
      "O rastro do Q limpa ondas sem parar de correr",
      "Fling do E: joga o inimigo para trás da sua linha",
      "Splitpush com fuga impossível: 2+ inimigos para pegá-lo",
    ],
    weaknesses: [
      "Dano direto baixo: você vence por tempo, não por burst",
      "Fraco contra poke à distância que não precisa te seguir",
      "Depende de itens de mana/vida para escalar",
    ],
    startItems: [
      { id: "corrupting-potion", note: "Sustain + queimadura para as trocas" },
      { id: "refillable-potion" },
    ],
    boots: [
      { id: "boots-of-swiftness", note: "Velocidade é a sua defesa" },
      { id: "mercury-treads", note: "Contra CC que te prende" },
    ],
    coreItems: [
      { id: "rod-of-ages", note: "Mana + vida + AP para escalar" },
      { id: "rylais", note: "O veneno desacelera: ninguém te alcança" },
      { id: "dead-mans-plate", note: "Mobilidade + armadura" },
    ],
    situationalItems: [
      { id: "liandrys", note: "Dano % vida: derrete quem corre atrás de você" },
      { id: "hollow-radiance", note: "MR + limpeza de ondas" },
      { id: "force-of-nature", note: "Velocidade + MR contra poke mágico" },
      { id: "warmogs", note: "Regeneração absurda entre emboscadas" },
      { id: "thornmail", note: "Anti-cura contra regeneração" },
    ],
    runes: {
      primaryTree: "sorcery",
      keystone: "stormraiders-surge",
      primary: ["manaflow-band", "transcendence", "gathering-storm"],
      secondaryTree: "resolve",
      secondary: ["second-wind", "overgrowth"],
      shards: ["+9 Adaptativo (AP)", "+9 Adaptativo (AP)", "+Vida bônus (escala com nível)"],
      explanation:
        "Stormraider's Surge ativa com seu poke contínuo: a velocidade extra torna a perseguição impossível. Manaflow sustenta o Q permanente na rota; Gathering Storm cresce com seu estilo escalante.",
    },
    altRunesNote:
      "Conqueror para brigas longas contra corpo a corpo: cura com o dano contínuo do veneno.",
    spells: [
      { id: "ghost", note: "Velocidade extra para correr ou perseguir" },
      { id: "teleport", note: "Voltar à rota e aparecer nos objetivos" },
    ],
    skillPriority: ["Q", "E", "W"],
    abilities: [
      { key: "P", name: "Aproveitamento", desc: "Ganha vida bônus proporcional à mana máxima: itens de mana viram tank." },
      { key: "Q", name: "Névoa Envenenada", desc: "Deixa um rastro de veneno atrás de você que causa dano contínuo a quem passar." },
      { key: "W", name: "Adesivo Mega", desc: "Joga uma poça de cola: quem fica no centro fica preso e não se move." },
      { key: "E", name: "Arremesso Forte", desc: "Joga o inimigo por cima de você para trás: desorganiza linhas inteiras." },
      { key: "R", name: "Frenesi Químico", desc: "Bebe a poção: vida, regeneração, dano e velocidade de movimento amplificados." },
    ],
    comboTips: [
      "Corra em volta do alvo com o Q: faça um círculo de veneno ao redor dele.",
      "W no chão → E fling para dentro da cola: prende por mais tempo.",
      "Ghost + R + Stormraider: a velocidade soma em camadas — ninguém alcança.",
    ],
    tips: {
      early: [
        "Farm correndo: deixe o Q ligado e passe pelos minions.",
        "Nunca ligue o Q à toa antes do rod-of-ages: a mana acaba rápido.",
        "Contra poke, jogue atrás das tropas: seu sustain das poções compensa.",
      ],
      mid: [
        "Splitpush infinito: empurra, corre, repete — o mapa fica do seu tamanho.",
        "Fling o jungler inimigo durante o gank: vira troca de 2v1 ao contrário.",
        "Apareça nos objetivos com TP: fling o carry deles na briga.",
      ],
      late: [
        "Force o time deles a te seguir: 3 inimigos atrás de Singed = Baron grátis.",
        "Fling o engage inimigo para trás: a formação deles quebra.",
        "Liandry's + veneno: tanques que te perseguem se derretem.",
      ],
    },
    strongAgainst: [
      { champion: "Garen", note: "Fling tira ele da troca e o veneno mata quem persegue." },
      { champion: "Nasus", note: "Ele nunca alcança você: stacka menos e corre atrás do vento." },
      { champion: "Yorick", note: "Fling tira ele do gado e o rastro derrete os ghouls." },
    ],
    weakAgainst: [
      { champion: "Pantheon", note: "Burst à distância que não precisa te seguir: poke trava seu jogo." },
      { champion: "Kayle", note: "Dano à distância + anti-cura: seu sustain não acompanha." },
      { champion: "Mordekaiser", note: "O R isola você e o dano mágico passa pelo seu MR cedo." },
    ],
    counterTips: [
      "Contra poke, compra MR cedo (Hollow Radiance) e jogue de farm seguro.",
      "O W prende: jogue a cola atrás de você antes de fugir.",
      "Nunca use o E ofensivamente se o jungler pode aparecer: é seu único escape real.",
    ],
    altBuilds: [
      {
        name: "Singed Derretedor de Tanques",
        when: "Inimigo com 2+ tanques de vida alta",
        items: [
          { id: "liandrys" },
          { id: "rylais" },
          { id: "abyssal-mask" },
        ],
        note: "Veneno % vida + redução de MR: ninguém aguenta correr atrás.",
      },
      {
        name: "Singed Imortal",
        when: "Você é o único front line do time",
        items: [
          { id: "rod-of-ages" },
          { id: "warmogs" },
          { id: "force-of-nature" },
        ],
        note: "Vida + regeneração + MR: morrer deixa de ser uma opção.",
      },
    ],
  },

  // ------------------------------------------------------------
  // VLADIMIR
  // ------------------------------------------------------------
  {
    id: "vladimir",
    name: "Vladimir",
    title: "o Terror Escarlate",
    classes: ["mago"],
    difficulty: 2,
    tier: "A",
    image: "Vladimir",
    color: "#B04A5A",
    playstyle: "Mago de sustain e escala infinita",
    summary:
      "Vladimir rouba vida com cada Q e escala sem limite: no late game ele é um imortal que causa dano em área com o E e cura com o R. A poça do W torna ele impossível de enganchar — jogue com paciência e domine o fim do jogo.",
    strengths: [
      "Q cura constantemente: sustain infinito na rota",
      "W (poça) é imunidade temporária: cancela engages e ultimates",
      "Escala absurda: late game com AP alto + cura gigante",
    ],
    weaknesses: [
      "Fraco antes do primeiro item: jogue com paciência",
      "Sem escape real além do W: o cooldown pune erros",
      "Dano em área depende de chegar perto: punível por burst",
    ],
    startItems: [
      { id: "dorans-ring", note: "AP + mana para o poke com Q" },
      { id: "health-potion" },
    ],
    boots: [
      { id: "sorcerers-shoes", note: "Penetração para o burst do E" },
      { id: "plated-steelcaps", note: "Contra lutadores AD agressivos" },
    ],
    coreItems: [
      { id: "riftmaker", note: "AP + vida + omnivamp para brigas longas" },
      { id: "rod-of-ages", note: "Escala segura de mana e vida" },
      { id: "rabaddons", note: "AP máximo para o late game" },
    ],
    situationalItems: [
      { id: "zhonyas", note: "Imunidade extra depois do W" },
      { id: "void-staff", note: "Penetração quando comprarem MR" },
      { id: "cryptbloom", note: "Penetração + cura em área para o time" },
      { id: "shadowflame", note: "Contra escudos (Camille, Sterak's)" },
      { id: "morellonomicon", note: "Anti-cura quando precisar aplicar Ferimentos" },
    ],
    runes: {
      primaryTree: "sorcery",
      keystone: "stormraiders-surge",
      primary: ["manaflow-band", "transcendence", "gathering-storm"],
      secondaryTree: "resolve",
      secondary: ["second-wind", "overgrowth"],
      shards: ["+9 Adaptativo (AP)", "+9 Adaptativo (AP)", "+Vida bônus (escala com nível)"],
      explanation:
        "Stormraider's Surge depois do combo E + Q: a velocidade deixa você reposicionar ou fugir sem gastar o W. Second Wind + o susto do Q fazem o early rolar sem quedas.",
    },
    altRunesNote:
      "Arcane Comet para poke pesado em matchups fáceis: mais pressão na rota.",
    spells: [
      { id: "flash", note: "Engajar com R ou escapar" },
      { id: "teleport", note: "Escala de farm + teamfights" },
    ],
    skillPriority: ["Q", "E", "W"],
    abilities: [
      { key: "P", name: "Carmesim", desc: "Habilidades empilham cargas; cheias, o próximo Q é fortalecido com dano e cura aumentados." },
      { key: "Q", name: "Transfusão", desc: "Rouba vida do alvo; fortalecido pela passiva, cura muito mais." },
      { key: "W", name: "Poça de Sangue", desc: "Vira poça por 2s: imune a qualquer dano e desacelera quem ficar dentro. Custa vida." },
      { key: "E", name: "Mar de Sangue", desc: "Carrega e explode em área ao redor, causando dano e desacelerando; carregar mais = mais alcance." },
      { key: "R", name: "Catástrofe Hemática", desc: "Infecta os inimigos na área; ao causar dano neles depois, o dano amplifica e você cura." },
    ],
    comboTips: [
      "R → E → Q fortalecido: o burst completo cura metade da sua vida.",
      "W depois de tomar CC: cancela o combo do engage inimigo.",
      "E carregado de longe: poke em área antes do all-in.",
    ],
    tips: {
      early: [
        "Farm com Q quando possível: cada Q é vida grátis.",
        "Guarde o W: sem ele você é enganchável por qualquer dash.",
        "Antes do 6, jogue de poke e não aceite trocas longas.",
      ],
      mid: [
        "Rod of Ages + Riftmaker: você já escala — procure brigas longas.",
        "R em 2+ inimigos: a cura amplificada vira teamf.",
        "Splitpush com E: a onda derrete e você foge do gank com W.",
      ],
      late: [
        "Você é imortal com itens: entre, R, E, Q e saia com W.",
        "Flash + R no backline: o combo apaga o carry e cura você inteiro.",
        "Contra anti-cura, jogue mais atrás e confie no dano em área.",
      ],
    },
    strongAgainst: [
      { champion: "Ornn", note: "Poke do Q vence as trocas lentas dele." },
      { champion: "Cho'Gath", note: "O dano em área + cura ignora a vida dele." },
      { champion: "Sion", note: "Q poke constante não deixa ele farmar de W com paz." },
    ],
    weakAgainst: [
      { champion: "Pantheon", note: "Burst cedo + stun: sua W não cobre o combo inteiro." },
      { champion: "Irelia", note: "Dashes fecham a distância e o stun pune a rotação." },
      { champion: "Kled", note: "R de longa distância + remontagem: trocas longas te matam." },
    ],
    counterTips: [
      "Contra burst, compre Zhonya's cedo: W + Zhonya's = 4,5s de imunidade.",
      "Sua W custa vida: nunca use com pouca vida — a poça não salva se você já estava quase morto.",
      "O R precisa de dano depois para curar: sempre complete o combo.",
    ],
    altBuilds: [
      {
        name: "Vladimir Burst de Assassino",
        when: "Inimigo frágil e você precisa de dano instantâneo",
        items: [
          { id: "stormsurge" },
          { id: "shadowflame" },
          { id: "rabaddons" },
        ],
        note: "R + E + Q apaga frágeis antes de reagirem.",
      },
      {
        name: "Vladimir Imortal",
        when: "Times com muito burst que focam você",
        items: [
          { id: "riftmaker" },
          { id: "zhonyas" },
          { id: "cryptbloom" },
        ],
        note: "Três camadas de sobrevivência: poça, invulnerabilidade e cura de área.",
      },
    ],
  },

  // ------------------------------------------------------------
  // JAYCE
  // ------------------------------------------------------------
  {
    id: "jayce",
    name: "Jayce",
    title: "o Defensor do Amanhã",
    classes: ["lutador", "duelista"],
    difficulty: 3,
    tier: "B",
    image: "Jayce",
    color: "#C9A45C",
    playstyle: "Híbrido de poke e burst em duas formas",
    summary:
      "Jayce troca entre canhão (poke com Q + portal) e martelo (burst corpo a corpo). É o poke mais forte da rota: 10 habilidades em um kit, mas exige mecânica e gestão de mana — recompensa quem pratica os combos.",
    strengths: [
      "Q + portal: poke de longa distância com dano alto",
      "Duas formas = 6 habilidades: combo completo apaga frágeis",
      "Punidor de escalas: mata laners fracos antes do late",
    ],
    weaknesses: [
      "Gestão de mana delicada: spam sem critério te deixa sem poke",
      "6 habilidades ativas exigem mecânica real",
      "Fraco contra all-in sustentado depois do primeiro item deles",
    ],
    startItems: [
      { id: "dorans-blade", note: "Dano para o poke com Q" },
      { id: "health-potion" },
    ],
    boots: [
      { id: "ionian-boots", note: "Aceleração para girar as habilidades" },
      { id: "plated-steelcaps", note: "Contra lutadores AD de all-in" },
    ],
    coreItems: [
      { id: "eclipse", note: "Dano % vida + escudo nas trocas" },
      { id: "youmuus-ghostblade", note: "Letalidade + ativo para caçar" },
      { id: "seryldas-grudge", note: "Penetração + desaceleração nas habilidades" },
    ],
    situationalItems: [
      { id: "deaths-dance", note: "Sobreviva ao burst físico" },
      { id: "maw-of-malmortius", note: "MR contra mágicos" },
      { id: "guardian-angel", note: "Segunda vida no late" },
      { id: "mortal-reminder", note: "Anti-cura contra regeneração" },
    ],
    runes: {
      primaryTree: "sorcery",
      keystone: "arcane-comet",
      primary: ["manaflow-band", "transcendence", "scorch"],
      secondaryTree: "inspiration",
      secondary: ["magical-footwear", "cosmic-insight"],
      shards: ["+Velocidade de Habilidade", "+9 Adaptativo (AD)", "+Vida bônus (escala com nível)"],
      explanation:
        "Comet + Scorch no Q com portal: cada poke é uma mão dupla de dano. Manaflow sustenta o spam, e Magical Footwear economiza para o Eclipse cedo.",
    },
    altRunesNote:
      "Conqueror para brigas corpo a corpo quando o time precisa de dano contínuo.",
    spells: [
      { id: "flash", note: "Engajar com martelo ou escapar" },
      { id: "teleport", note: "Farm e pressão de mapa" },
    ],
    skillPriority: ["Q", "W", "E"],
    abilities: [
      { key: "P", name: "Condensador Hextec", desc: "Ao trocar de forma, ganha velocidade de movimento e atravessa unidades por 1,25s." },
      { key: "Q", name: "Choque Elétrico", desc: "Canhão: tiro de energia; Martelo: salto no alvo com dano em área ao pousar." },
      { key: "W", name: "Carga Elétrica", desc: "Canhão: 3 ataques rápidos com dano mágico; Martelo: campo que causa dano em área constante." },
      { key: "E", name: "Portal Acelerador", desc: "Canhão: portal que acelera o Q e aumenta o dano; Martelo: golpe que arremessa o inimigo para trás." },
      { key: "R", name: "Transformação Mercúrio", desc: "Troca entre canhão e martelo; o próximo ataque ganha dano bônus mágico." },
    ],
    comboTips: [
      "E (portal) → Q atravessando o portal: o combo de poke clássico.",
      "Canhão: Q + W + básicos → R → martelo: E fling → saia com a passiva.",
      "Guarde o fling do martelo para punir quem encosta na rota.",
    ],
    tips: {
      early: [
        "Poke com Q pelo portal só quando acertar: a mana é finita.",
        "Troque para martelo quando o inimigo estiver a menos de 50%: burst fatal.",
        "A passiva te dá velocidade: use para pegar o portal ou fugir.",
      ],
      mid: [
        "Empurre ondas com W + Q e apareça nas brigas do mid com TP.",
        "Contra escalas (Kayle, Nasus): poke até não ter volta.",
        "Eclipse pronto: procure o all-in no carry inimigo.",
      ],
      late: [
        "Você não escala tão bem: termine antes com poke em torres e skirmishes.",
        "Portal + Q nas teamf: poke o backline antes do engage.",
        "Fling do martelo salva seu carry: use na diva inimiga que mergulhou.",
      ],
    },
    strongAgainst: [
      { champion: "Nasus", note: "Poke constante impede o farm e os stacks." },
      { champion: "Kayle", note: "Domine até o 11: ela não sobrevive ao combo completo." },
      { champion: "Ornn", note: "Trocas de poke sem resposta: ele nunca fecha a distância." },
    ],
    weakAgainst: [
      { champion: "Irelia", note: "Dashes resetados fecham a distância antes do poke somar." },
      { champion: "Camille", note: "Hookshot ignora o portal e o stun pune o all-in." },
      { champion: "Kled", note: "Arpões + remontada: trocas longas te matam." },
    ],
    counterTips: [
      "Controle a mana: sem portal você perde metade do kit.",
      "Contra dashes, mantenha o fling do martelo pronto.",
      "A forma de martelo também farm com W: não desperdice a mana do Q.",
    ],
    altBuilds: [
      {
        name: "Jayce de Letalidade Pura",
        when: "Inimigo frágil e seu time precisa de burst",
        items: [
          { id: "youmuus-ghostblade" },
          { id: "eclipse" },
          { id: "seryldas-grudge" },
        ],
        note: "Q + portal derrete frágeis em um combo.",
      },
      {
        name: "Jayce Híbrido Durável",
        when: "Você está sendo focado em teamf",
        items: [
          { id: "eclipse" },
          { id: "deaths-dance" },
          { id: "maw-of-malmortius" },
        ],
        note: "Escudos + resistências: você sobrevive para completar o combo.",
      },
    ],
  },
];
