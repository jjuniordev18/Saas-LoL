// ============================================================
// Campeões da meta — alta taxa de vitória na rota do topo
// Fonte dos tiers/win rates: Blitz.gg (Esmeralda+, captura de
// nov/2026). Quinn, Poppy, Warwick, Zac e Anivia.
// Builds baseadas no patch 16.21 (Temporada 2026).
// ============================================================
import type { Champion } from "./data";

export const CHAMPIONS_G: Champion[] = [
  // ------------------------------------------------------------
  // QUINN — #1 taxa de vitória (Blitz.gg): 52.2% · Tier S
  // ------------------------------------------------------------
  {
    id: "quinn",
    name: "Quinn",
    title: "as Asas de Demacia",
    classes: ["duelista"],
    difficulty: 2,
    tier: "S",
    popular: true,
    image: "quinn",
    color: "#C2703F",
    playstyle: "Atiradora que humilha corpo a corpo",
    summary:
      "A #1 da rota superior no Blitz.gg (52.2% de vitória). Quinn castiga qualquer lutador sem dash: a marca do Valoro + básicos escorrem a vida do oponente à distância, e a ultimate transforma cada abate de rota em roam pelos outros cantos do mapa.",
    strengths: [
      "Pune melee à distância: poke com marca + básicos sem resposta",
      "Ultimate global de velocidade — roam e splits rápidos",
      "Forte em 1v1 e excelente para fechar o jogo sozinha",
    ],
    weaknesses: [
      "Muito frágil: all-in acertado te mata na hora",
      "Sofre com tanques de engage e desaceleração em área",
      "Precisa administrar a onda — empurrada, você vira gank fácil",
    ],
    startItems: [
      { id: "dorans-blade", note: "Vida + roubo para as trocas de básicos" },
      { id: "health-potion" },
    ],
    boots: [
      { id: "berserker-greaves", note: "Padrão: mais básicos = mais marcas" },
      { id: "plated-steelcaps", note: "Contra lutadores AD agressivos (Renekton, Sett)" },
    ],
    coreItems: [
      { id: "botrk", note: "Dano % da vida atual + roubo: castiga tanques e lutadores de vida alta" },
      { id: "wits-end", note: "Resistência mágica + dano on-hit: completa o estilo de básicos constantes" },
      { id: "phantom-dancer", note: "Velocidade de ataque e movimento para kitar enquanto atira" },
    ],
    situationalItems: [
      { id: "guardian-angel", note: "Segurança para flanquear com R sem medo" },
      { id: "deaths-dance", note: "Contra burst físico (Kled, Renekton, Pantheon)" },
      { id: "mortal-reminder", note: "Anti-cura: contra Warwick, Dr. Mundo e afins" },
      { id: "seryldas-grudge", note: "Penetração + lentidão nas habilidades para prender fugitivos" },
      { id: "youmuus-ghostblade", note: "Estilo burst: apaga carregadores frágeis no mid game" },
    ],
    runes: {
      primaryTree: "precision",
      keystone: "press-the-attack",
      primary: ["triumph", "legend-alacrity", "cut-down"],
      secondaryTree: "domination",
      secondary: ["sudden-impact", "treasure-hunter"],
      shards: ["+10% Velocidade de Ataque", "+9 Adaptativo (AD)", "+Armadura fixa"],
      explanation:
        "Press the Attack é a runa perfeita para as trocas curtas: marca do Valoro + 3 básicos expõem o alvo e TODA a sua sequência machuca mais. Sudden Impact ativa no E e no R — penetração de graça no seu combo. Cut Down segura a build contra os tanques do topo.",
    },
    altRunesNote:
      "Alternativa: Lethal Tempo (Precision) + Taste of Blood + Ultimate Hunter (Domination) para brigas mais longas e mais escala no late game.",
    spells: [
      { id: "flash", note: "Corrigir posição ou escapar do all-in inimigo" },
      { id: "ignite", note: "Converte o poke de marca em abate real na rota" },
    ],
    skillPriority: ["Q", "E", "W"],
    abilities: [
      { key: "P", name: "Rapina", desc: "Valoro marca periodicamente inimigos próximos; atacar o alvo marcado causa dano extra em área. É o motor do seu poke — troque sempre que a marca aparecer." },
      { key: "Q", name: "Investida Anuviante", desc: "Valoro dispara um projétil que explode no primeiro alvo, causando dano em área e CEGANDO (reduz o dano dos básicos) quem estiver dentro. O ataque à distância fica sem dentes." },
      { key: "W", name: "Sentidos Apurados", desc: "Atacar um alvo marcado revela a área ao redor e concede velocidade de ataque e movimento. Controle de brush e anti-gank de graça." },
      { key: "E", name: "Salto", desc: "Valoro investe, danifica e empurra o alvo para trás; Quinn então reposiciona atrás. É dash de defesa — use para desengajar, não para entrar primeiro." },
      { key: "R", name: "Retaguarda do Inimigo", desc: "Valoro assume o comando com velocidade de movimento gigante pelo mapa; ao reativar, causa dano em área enorme. A melhor ultimate de roam do jogo — apareça no mid ou na jungle em segundos." },
    ],
    comboTips: [
      "Troca padrão: básico na marca (P) → Q (cega) → básico + E para reposicionar: 3 golpes ativam o Press the Attack.",
      "Contra lutadores de básico (Garen, Darius), o Q no rosto deles anula a próxima troca inteira.",
      "Use R para chegar em brigas no mid/rio ou para split rápido — nunca para fugir a 1 km da torre inimiga (o cancelamento te deixa exposta).",
    ],
    tips: {
      early: [
        "Poke no cooldown da marca: todo básico na Rapina é dano de graça sem troca de resposta.",
        "Empurre a onda nos níveis 1–3 e gaste o inimigo — depois segure a onda perto da sua torre (você é o gank favorito da jungle).",
        "W revela brush: gaste o lado da rota com segurança e negue os buffs de brush do inimigo.",
      ],
      mid: [
        "Com R disponível, empurre a onda e suma: roam para o mid ou invade com seu jungler — a velocidade de Valoro ganha toda a corrida.",
        "No 1v1 do split, sempre E o dash do inimigo e reabra distância antes de continuar os básicos.",
        "Cuide do posicionamento: sua barra de vida é curta — nunca fique à frente da sua onda.",
      ],
      late: [
        "Flanqueie pelas laterais com R e corte o caminho dos carregadores — o dano em área do R limpa times inteiros enfraquecidos.",
        "Em teamfight, ataque de borda: só entre no alcance depois do engage inimigo gastar o CC.",
        "Guardian Angel + R: mesmo se derrubarem, o time continua e você renasce em posição de flanco.",
      ],
    },
    strongAgainst: [
      { champion: "Darius", note: "Sem dash para alcançar: o poke de marca decide a rota antes da briga existir." },
      { champion: "Garen", note: "Cegueira do Q nega o girar do E; kiting infinito com marca + básicos." },
      { champion: "Sett", note: "Ele nunca completa a troca: cada aproximação custa metade da vida." },
    ],
    weakAgainst: [
      { champion: "Malphite", note: "O R dele em você é morte na hora; a armadura também encarece seu dano físico." },
      { champion: "Poppy", note: "A W dela anula o seu E e o stun na parede é morte garantida." },
      { champion: "Zac", note: "Engage inescapável de E + dano em área que não depende de acertar você." },
    ],
    counterTips: [
      "Contra engage (Malphite/Zac/Poppy): fique atrás dos minions e guarde o E exclusivamente para desengajar.",
      "Peça swaps ou troque de rota no late: seu dano brilha mais contra o frontline inimigo do que contra tanques de engage.",
      "Se a rota está perdida, R roam para o mid: Quinn compensa a rota criando vantagem nos outros corredores.",
    ],
    altBuilds: [
      {
        name: "Letalidade (Burst)",
        when: "Quando o time inimigo tem 2+ carregadores frágeis e pouco frontline",
        items: [
          { id: "youmuus-ghostblade", note: "Velocidade para flanquear com R" },
          { id: "seryldas-grudge", note: "Penetração + lentidão" },
          { id: "eclipse", note: "Dano % da vida + escudo no combo" },
        ],
        note: "Corta alvos frágeis em um combo; menos dano contínuo contra tanques.",
      },
      {
        name: "Anti-Tanque",
        when: "Contra Malphite, Ornn ou duplas de tanque no time inimigo",
        items: [
          { id: "botrk" },
          { id: "mortal-reminder" },
          { id: "black-cleaver", note: "Redução de armadura acumulada com os básicos" },
        ],
        note: "Mantém o dano relevante mesmo contra 2 tanques montados.",
      },
    ],
  },

  // ------------------------------------------------------------
  // POPPY — #2 taxa de vitória (Blitz.gg): 52.0% · +1.5% no patch
  // ------------------------------------------------------------
  {
    id: "poppy",
    name: "Poppy",
    title: "a Guardiã do Martelo",
    classes: ["tank", "lutador"],
    difficulty: 2,
    tier: "S",
    popular: true,
    image: "poppy",
    color: "#7FA3C8",
    playstyle: "Tanque antidor que trava dashes",
    summary:
      "A grande subida do patch no Blitz.gg (+1.5%, 52.0% de vitória). A Presença Inabalável apaga o dash de Fiora, Jax, Camille e companhia, e o Veredito da Guardiã desmonta qualquer briga. Tanque simples de jogar e pavor dos duelistas do topo.",
    strengths: [
      "A W para TODO dash do jogo — duelistas perdem o kit principal",
      "Trocas curtas fortes: Q duplo + escudo do passivo",
      "Ultimate versátil: tira o diver inimigo da briga ou abre o caminho",
    ],
    weaknesses: [
      "Sem sustain: poke constante a desgasta da rota",
      "Mana apertada no early — Q no vácuo custa caro",
      "Fraca contra range que não usa dash (Quinn, Vladimir)",
    ],
    startItems: [
      { id: "dorans-shield", note: "Sustain contra o poke do topo" },
      { id: "health-potion" },
    ],
    boots: [
      { id: "plated-steelcaps", note: "Padrão contra lutadores AD" },
      { id: "mercury-treads", note: "Contra AP ou times com CC demais" },
    ],
    coreItems: [
      { id: "sunfire-aegis", note: "Imolação: pressão de onda e dano constante nas trocas" },
      { id: "iceborn-gauntlet", note: "Campo de gelo após habilidade: prender alvos sem gastar o E" },
      { id: "dead-mans-plate", note: "Investida carregada + básico que desacelera" },
    ],
    situationalItems: [
      { id: "thornmail", note: "Contra Warwick, Aatrox e qualquer campeão de cura" },
      { id: "kaenic-rookern", note: "Escudo mágico gigante contra times AP" },
      { id: "randuins-omen", note: "Contra crítico e atiradores (Yone, Tryndamere)" },
      { id: "unending-despair", note: "Dreno em área nas brigas longas do late" },
      { id: "force-of-nature", note: "Contra magos que spamam habilidade em você" },
    ],
    runes: {
      primaryTree: "resolve",
      keystone: "grasp",
      primary: ["demolish", "second-wind", "overgrowth"],
      secondaryTree: "inspiration",
      secondary: ["magical-footwear", "cosmic-insight"],
      shards: ["+10% Velocidade de Ataque", "+9 Adaptativo (AD)", "+Vida bônus (escala com nível)"],
      explanation:
        "Grasp transforme cada troca curta em dano baseado na sua vida + cura + vida permanente. Second Wind segura as rotas de poke, e a secundária de Inspiration acelera seu power spike (botas grátis + cooldowns menores para E e R).",
    },
    altRunesNote:
      "Alternativa: Aftershock (Resolve) + Taste of Blood + Ultimate Hunter (Domination) quando você for a única opção de engage do time.",
    spells: [
      { id: "flash", note: "Engajar com E → flash na parede ou escapar" },
      { id: "teleport", note: "Defende a rota e chega nas brigas que seu R abre" },
    ],
    skillPriority: ["Q", "E", "W"],
    abilities: [
      { key: "P", name: "Embaixadora de Ferro", desc: "Guarda o escudo ao atacar de perto; quando desarmada, arremessa o escudo — pegá-lo de volta concede proteção e velocidade. Colete o escudo no meio da troca para vencer." },
      { key: "Q", name: "Choque do Martelo", desc: "Martela o chão em duas etapas: dano imediato + dano extra na segunda explosão, com desaceleração. Acerte as duas partes na parede do E." },
      { key: "W", name: "Presença Inabalável", desc: "Passiva: velocidade de movimento. Ativa: para TODOS os dashes na área e desacelera a velocidade de ataque de quem estiver dentro. A runa ambulante contra duelistas." },
      { key: "E", name: "Investida Heroica", desc: "Investe no alvo e empurra; se bater em parede, atordoa por mais tempo. Sua ferramenta de engage e punish de posicionamento." },
      { key: "R", name: "Veredito da Guardiã", desc: "Carrega o martelo e desce: arremessa inimigos PARA LONGE (ou para cima se rápido). Tira o inimigo cheio de abates que mergulha no seu time ou limpa o caminho para o engage." },
    ],
    comboTips: [
      "E na parede → Q com as duas explosões + básico: a troca completa com atordoamento e dano dobrado.",
      "Guarde a W para o dash do inimigo — ela CANCELA o movimento (Fiora Q, Jax Q/E, Camille E, Kled E) e ainda desacelera o ataque dele.",
      "R carregado arremessa para longe: use no diver que entra no seu carregador — nem precisa acertar ninguém mais.",
    ],
    tips: {
      early: [
        "Contra range, apenas farme com Q a distância e aceite perder CS seguro — seu power spike é 2 itens.",
        "Q nas tropas + imolação: empurre a onda rápido e busque o escudo do passivo antes de trocar.",
        "Nível 3 com E na parede é sua janela de abate: chame o jungler para o stun estendido.",
      ],
      mid: [
        "TP em brigas no rio: um R carregado ou um E com stun na parede decide o confronto.",
        "No split, W impede o dash do duelistas inimigos de fugir ou entrar: force o 1v1 só de quem você pune.",
        "Colete o escudo do passivo em recuo: proteção + velocidade salvam de ganks.",
      ],
      late: [
        "Fique colada no carregador: E qualquer mergulhador e R ele para longe da briga.",
        "Se seu time não tem engage, R rápido (para cima) + E na parede abre a briga com atordoamento.",
        "Iceborn + Sunfire: brigue dentro do time inimigo — o campo de gelo e a imolação machucam todos ao redor.",
      ],
    },
    strongAgainst: [
      { champion: "Fiora", note: "A W anula o Q dela e o parry não resolve o stun na parede: duelista sem mobilidade." },
      { champion: "Jax", note: "Q e E dele param na sua W — sem dash, ele só tem o básico para oferecer." },
      { champion: "Camille", note: "O E dela vira chute na parede; o stun do seu E castiga o recuo." },
    ],
    weakAgainst: [
      { champion: "Quinn", note: "Não usa dash, poke à distância e cegueira: a rota é torturante." },
      { champion: "Gnar", note: "Range + desaceleração no mini e burst no mega: trocas sempre do lado dele." },
      { champion: "Vladimir", note: "Sem dash para punir, escala de graça e cura o poke da rota." },
    ],
    counterTips: [
      "Contra range: Doran's Shield + Second Wind, farme com Q e não gaste mana em Q fora de alcance.",
      "Contra poke, empurre a onda ANTES de voltar: sua torre segura a onda e o TP volta sem perder tropas.",
      "W só quando o dash COMEÇAR — gastar cedo deixa a janela livre para o dash de verdade.",
    ],
    altBuilds: [
      {
        name: "Muralha permanente",
        when: "Quando o time precisa de frontline que não morre nunca",
        items: [
          { id: "heartsteel", note: "Vida permanente a cada roubo em alvo" },
          { id: "warmogs", note: "Regeneração absurda entre brigas" },
          { id: "unending-despair", note: "Dreno que escala com sua vida gigante" },
        ],
        note: "Menos dano, mais presença: vire o obstáculo da rota.",
      },
    ],
  },

  // ------------------------------------------------------------
  // WARWICK — #3 taxa de vitória (Blitz.gg): 52.0% · +0.9%
  // ------------------------------------------------------------
  {
    id: "warwick",
    name: "Warwick",
    title: "a Ira Desimpedida de Zaun",
    classes: ["lutador"],
    difficulty: 1,
    tier: "S",
    popular: false,
    image: "warwick",
    color: "#7D5BA6",
    playstyle: "Caçador de sangue com cura infinita",
    summary:
      "O terceiro maior win rate do topo no Blitz.gg (52.0%). Warwick sustenta trocas com as Presas da Fera, rastreia alvos feridos com a Caçada Sangrenta e prende o carregador com a Coerção Infinita. Simples de jogar, quase impossível de ganhar por atrito.",
    strengths: [
      "Cura constante em trocas e ondas — atrito nunca vira abate",
      "W rastreia e acelera contra alvos com pouca vida: abate garantido",
      "R suprime e segue o alvo — pega dash e Flash junto",
    ],
    weaknesses: [
      "Facilmente kitado antes do R (Quinn, Anivia, Jayce)",
      "Dano depende de brigas longas — burst apaga ele antes",
      "Depende de entrar com R: errar é ficar sem nada",
    ],
    startItems: [
      { id: "dorans-blade", note: "Roubo de vida para o sustain inicial" },
      { id: "health-potion" },
    ],
    boots: [
      { id: "plated-steelcaps", note: "Padrão contra lutadores AD" },
      { id: "mercury-treads", note: "Contra CC e dano mágico" },
    ],
    coreItems: [
      { id: "sundered-sky", note: "Crítico garantido no primeiro básico + cura: sinergia total com o kit" },
      { id: "spirit-visage", note: "Amplifica TODAS as suas curas (presas, Sundered Sky, passiva)" },
      { id: "titanic-hydra", note: "Dano em área que escala com vida: limpa onda e machuca em briga" },
    ],
    situationalItems: [
      { id: "botrk", note: "Contra tanques de vida alta (Cho'Gath, Sion, Zac)" },
      { id: "thornmail", note: "Anti-cura espelhada: contra Aatrox, Dr. Mundo e Renekton" },
      { id: "steraks-gage", note: "Escudo gigante nas brigas prolongadas" },
      { id: "kaenic-rookern", note: "Contra burst mágico do time inimigo" },
      { id: "randuins-omen", note: "Contra crítico (Yone, Tryndamere, Kayle)" },
    ],
    runes: {
      primaryTree: "precision",
      keystone: "press-the-attack",
      primary: ["triumph", "legend-alacrity", "last-stand"],
      secondaryTree: "domination",
      secondary: ["taste-of-blood", "ultimate-hunter"],
      shards: ["+10% Velocidade de Ataque", "+9 Adaptativo (AD)", "+Armadura fixa"],
      explanation:
        "Press the Attack amplifica todo o dano das suas presas nos 3 primeiros golpes — exatamente o tamanho da sua troca. Ultimate Hunter reduz o R para caçar mais vezes, e Taste of Blood soma mais uma camada de cura à rota.",
    },
    altRunesNote:
      "Alternativa: Conqueror (Precision) + Second Wind + Overgrowth (Resolve) para brigas longas contra lutadores de dano contínuo.",
    spells: [
      { id: "flash", note: "Ajusta o alcance do R ou foge do all-in" },
      { id: "ghost", note: "Cola no alvo caçado pelo W — quase impossível escapar do seu alcance" },
    ],
    skillPriority: ["Q", "W", "E"],
    abilities: [
      { key: "P", name: "Fome Eterna", desc: "Ataques curam, especialmente quando você está com pouca vida. Sua fonte de sustain nas trocas e nas ondas." },
      { key: "Q", name: "Presas da Fera", desc: "Morde o alvo causando dano % da vida máxima e curando você. Segurando, Warwick se agarra atrás de DASHES — acompanha o salto do inimigo. O dano e a cura são os motores da rota." },
      { key: "W", name: "Caçada Sangrenta", desc: "Passiva: detecta inimigos com pouca vida e ganha velocidade de movimento e ataque contra eles. Ativa: fareja e ganha bônus em todos os inimigos feridos próximos." },
      { key: "E", name: "Uivo Primitivo", desc: "Reduz o dano recebido e, ao reativar, AMEDRONTA (medo) os inimigos ao redor. Ative antes de entrar: a redução segura o burst e o medo abre a briga." },
      { key: "R", name: "Coerção Infinita", desc: "Salta na direção do alvo e SUPRIME, aplicando seus ataques 3 vezes com roubo de vida gigante. O alcance cresce com a velocidade de movimento — Fantasma + W deixam o R interminável." },
    ],
    comboTips: [
      "E (redução de dano) → R no alvo → Q + básicos com Press the Attack: a sequência clássica de abate.",
      "Segure o Q quando o inimigo tem dash: você VIAJA grudado nele (Fiora Q, Camille E, Renekton E) e a cura continua.",
      "W ativo quando o time inimigo está ferido: velocidade + ataque transformam recuo em abate.",
    ],
    tips: {
      early: [
        "Q nas tropas grandes + básicos: cure-se no meio da onda e force trocas atrito — você sempre sai melhor.",
        "Nível 3 com E + Q é a janela de all-in: a maioria dos lutadores subestima a cura do Warwick.",
        "Contra range, Doran's Shield + Second Wind e farme com Q a distância até o nível 6.",
      ],
      mid: [
        "Caçada com W: alvo com menos de 50% de vida no mapa = abate. Procure os outros corredores depois de empurrar.",
        "R pela jungle em linha reta: o alcance gigante pega quem está fugindo pela parede.",
        "Titanic Hydra + Q limpa ondas num piscar de olhos: empurre e force o inimigo a defender a base.",
      ],
      late: [
        "Seu R é para o carregador inimigo: entre com E ativo, suprima e deixe o time terminar.",
        "Não abra teamfights contra time de CC: espere as habilidades gastas e entre no flanco com Fantasma.",
        "Com Spirit Visage + Sundered Sky, você regenera a vida inteira em uma briga — force o atrito e não saia nunca.",
      ],
    },
    strongAgainst: [
      { champion: "Aatrox", note: "A cura das presas supera o poke dele: cada troca longa termina com você cheio de vida." },
      { champion: "Sett", note: "O escudo do W não supera a cura contínua; brigas prolongadas são o terreno dele." },
      { champion: "Mordekaiser", note: "No 1v1 dentro do R dele, a cura das presas decide — brigue de olhos abertos." },
    ],
    weakAgainst: [
      { champion: "Quinn", note: "Kite à distância: o R nunca alcança e a cegueira negra seus básicos." },
      { champion: "Anivia", note: "Muro + lentidão do R mantém você a 400 de distância para sempre." },
      { champion: "Jayce", note: "Poke de canhão desgasta antes do seu all-in existir." },
    ],
    counterTips: [
      "Contra kite: Doran's Shield + Second Wind e use a velocidade do W para girar a rota em vez de sofrer.",
      "Espere o R deles gastar (Malphite, Zac) antes de entrar — seu valor está na briga longa, não na entrada.",
      "Se a rota trava, TP para brigas: seu sustain e o R mudam qualquer confronto no rio.",
    ],
    altBuilds: [
      {
        name: "Juggernaut de área",
        when: "Quando o time precisa de dano em área e você vai brigar no meio do time",
        items: [
          { id: "stridebreaker", note: "Lentidão em área para prender fugitivos" },
          { id: "steraks-gage" },
          { id: "deaths-dance", note: "Sobrevive ao burst físico das brigas" },
        ],
        note: "Mais dano e utilidade de briga; perde um pouco de sustain.",
      },
    ],
  },

  // ------------------------------------------------------------
  // ZAC — Tier A (Blitz.gg): 51.7% · engage gigante
  // ------------------------------------------------------------
  {
    id: "zac",
    name: "Zac",
    title: "a Arma Secreta",
    classes: ["tank"],
    difficulty: 2,
    tier: "A",
    popular: false,
    image: "zac",
    color: "#3FA65C",
    playstyle: "Tanque elástico de engage impossível",
    summary:
      "Tanque de 51.7% de vitória no Blitz.gg. O Estilingue Elástico alcança ângulos que ninguém mais alcança, os glóbulos curam a rota inteira e o Vamos pular! desmonta formação inimiga. O pick dos times que precisam de uma briga começada do nada.",
    strengths: [
      "E atravessa metade do mapa a partir de ângulos sem visão",
      "Glóbulos curam e escalam vida máxima: paciência vence rota",
      "Dano % da vida máxima (W) e CC em área abundante",
    ],
    weaknesses: [
      "Early fraco: poke recolhe seus glóbulos e te nega farm",
      "E é previsível — wardado, você paga o engage",
      "Depende do time para converter o engage em dano",
    ],
    startItems: [
      { id: "dorans-shield", note: "Sustain para a fase de glóbulos" },
      { id: "health-potion" },
    ],
    boots: [
      { id: "mercury-treads", note: "Padrão: tenacidade para sobreviver ao CC após o E" },
      { id: "plated-steelcaps", note: "Contra lutadores AD pesados" },
    ],
    coreItems: [
      { id: "sunfire-aegis", note: "Imolação: compensa seu dano de briga e empurra ondas" },
      { id: "spirit-visage", note: "Amplifica a cura dos glóbulos — item obrigatório" },
      { id: "warmogs", note: "Vida massiva: regeneração entre engages transforma você em eterno" },
    ],
    situationalItems: [
      { id: "kaenic-rookern", note: "Contra times AP com burst" },
      { id: "thornmail", note: "Contra cura e básicos (Warwick, Fiora, Aatrox)" },
      { id: "force-of-nature", note: "Contra magos de spam (Rumble, Vladimir, Anivia)" },
      { id: "unending-despair", note: "Dreno em área nas brigas longas" },
      { id: "hollow-radiance", note: "Substitui a Sunfire contra ondas AP e lanes de mago" },
    ],
    runes: {
      primaryTree: "resolve",
      keystone: "aftershock",
      primary: ["demolish", "second-wind", "overgrowth"],
      secondaryTree: "inspiration",
      secondary: ["magical-footwear", "cosmic-insight"],
      shards: ["+Vida bônus (escala com nível)", "+9 Adaptativo (AP)", "+Armadura fixa"],
      explanation:
        "Aftershock dispara logo após o E: as resistências garantem que você SOBREVIVA ao engage e continue com o W e o R girando. Demolish + TP punem qualquer rotação descuidada do inimigo.",
    },
    altRunesNote:
      "Alternativa: Grasp (Resolve) com secundária Precision (Triumph + Legend: Alacrity) para rotas de trocas curtas contra lutadores — menos engage, mais troca.",
    spells: [
      { id: "flash", note: "Ajusta o pouso do E ou engata a curta distância" },
      { id: "teleport", note: "Chega nas brigas com o E já pronto e defende a rota" },
    ],
    skillPriority: ["Q", "W", "E"],
    abilities: [
      { key: "P", name: "Divisão Celular", desc: "Ao perder vida por habilidades, lascas caem no chão: pegue-as para curar e ganhar vida máxima permanente. Sua farm e sua cura ao mesmo tempo — nunca deixe glóbulo no chão." },
      { key: "Q", name: "Esticada", desc: "Estica a mão, danifica e desacelera o alvo; a segunda ativação lança o blob que pega, causando dano em área. O poke da rota e o setup do W." },
      { key: "W", name: "Matéria Instável", desc: "Explosão em área com dano % da vida máxima dos inimigos. Seu dano principal — gira a cada habilidade usada." },
      { key: "E", name: "Estilingue Elástico", desc: "Carrega e se lança uma ENORME distância, arremessando inimigos ao pouso. O engage mais longo do jogo — venha de onde eles não têm visão." },
      { key: "R", name: "Vamos pular!", desc: "Zac quica, arremessando inimigos ao ar em cada salto e acelerando a si mesmo. Segunda onda de CC depois do E — ou escape em estilo." },
    ],
    comboTips: [
      "E do fog → Aftershock ativa → W + Q no grupo → R para re-arremessar quem sobrou.",
      "Q pega o blob da passiva: a segunda parte da habilidade é dano em área de graça — use a mão esticada para colher glóbulos longe.",
      "R também serve de desengage: quique no meio do time inimigo espalha a briga inteira.",
    ],
    tips: {
      early: [
        "Não brigue antes do nível 3: colete glóbulos atrás dos minions e aceite farm sob torre se poked.",
        "Q desacelera o poke da rota: use a mão esticada para coletar glóbulos e machucar de graça.",
        "Avise o time onde seu E alcança (nível 6+): o jungler pode brigar sabendo que você chega.",
      ],
      mid: [
        "TP + E de ângulos profundos: apareça do próprio minion ou do brush do rio — os poucos lugares wardados são os que você evita.",
        "Spirit Visage + glóbulos: fique na rota até a vida encher de novo, sua barra é enganosa.",
        "Cuide do timer do E: voltar com a habilidade pronta vale mais que 3 tropas.",
      ],
      late: [
        "Você é o botão de start: E a partir do fog no carregador ou no agrupamento inteiro do time inimigo.",
        "Depois do engage, fique em pé no meio: Aftershock + Warmog's + imolação mantêm você vivo enquanto o time segue.",
        "R para espalhar o frontline do inimigo: separe o tanque do carregador e a briga vira 5v3.",
      ],
    },
    strongAgainst: [
      { champion: "Renekton", note: "Ele não tem burst para apagar os glóbulos; brigas longas curam mais que o dano dele." },
      { champion: "Garen", note: "Sem gap closer confiável, o E dele nunca te alcança depois do seu E." },
      { champion: "Sett", note: "O dano % do W dele não supera a cura dos glóbulos + Spirit Visage." },
    ],
    weakAgainst: [
      { champion: "Fiora", note: "Dano verdadeiro % da vida: sua vida gigante vira número na barra dela." },
      { champion: "Kayle", note: "Escala e dano % com on-hit: quando chega no late, você não segura mais." },
      { champion: "Gwen", note: "A névoa corta seu dano e o dano verdadeiro da tesoura não perdoa tanques." },
    ],
    counterTips: [
      "Contra Fiora/Gwen/Kayle: aposte em HP bruto (Warmog's) e brigue PELO TIME, não pelo 1v1.",
      "Recue glóbulos antes do all-in: pegá-los no meio da troca é metade da sua barra sumindo.",
      "E wardado não é engage: espere o blink do ward expirar ou venha do lado sem visão.",
    ],
    altBuilds: [
      {
        name: "Tanque de vida infinita",
        when: "Rota travada e jogo longo — vire a muralha da base",
        items: [
          { id: "heartsteel", note: "Vida permanente a cada roubo" },
          { id: "warmogs" },
          { id: "unending-despair", note: "Dreno que escala com a vida acumulada" },
        ],
        note: "Menos engage explosivo, mais presença que não morre.",
      },
    ],
  },

  // ------------------------------------------------------------
  // ANIVIA — Tier A (Blitz.gg): 51.5% · maga de controle
  // ------------------------------------------------------------
  {
    id: "anivia",
    name: "Anivia",
    title: "a Criofênix",
    classes: ["mago"],
    difficulty: 3,
    tier: "A",
    popular: false,
    image: "anivia",
    color: "#5FB8D9",
    playstyle: "Maga de kite e muro que congela o topo",
    summary:
      "A surpresa da tier list do Blitz.gg (51.5% na rota do topo). O muro de gelo corta qualquer briga, o Congelamento dobra de dano em alvos atingidos e o Renascimento anula o gank. Lutadores sem dash jogam contra um pássaro que nunca deixa a distância cair.",
    strengths: [
      "Kite perfeito: R + W seguram qualquer perseguição",
      "Burst garantido: Q ou R acertado = E com dano dobrado",
      "Passiva de ovo anula ganks e all-ins arriscados",
    ],
    weaknesses: [
      "Sem mobilidade e sem sustain: erro de posição custa o ovo",
      "Mana muito apertada no early — spam sem Manaflow quebra a rota",
      "Skillshots: Q errado = troca inteira do lado do inimigo",
    ],
    startItems: [
      { id: "dorans-ring", note: "Mana + AP para o poke de E" },
      { id: "health-potion" },
    ],
    boots: [
      { id: "sorcerers-shoes", note: "Penetração para o burst de Q + E" },
      { id: "boots-of-swiftness", note: "Contra melee insistente e desacelerações do topo" },
    ],
    coreItems: [
      { id: "rod-of-ages", note: "AP + vida + mana escalando: o item de escala da rota" },
      { id: "liandrys", note: "Dano % da vida com a Tempestade Glacial ligada — derrete tanques" },
      { id: "zhonyas", note: "Segura o all-in entre o ovo e a briga" },
    ],
    situationalItems: [
      { id: "rabaddons", note: "Late game: AP para apagar qualquer um no Q + E" },
      { id: "void-staff", note: "Obrigatório contra Mercúrio e resistência mágica" },
      { id: "rylais", note: "Tudo que você lança desacelera: kite ainda mais cruel" },
      { id: "morellonomicon", note: "Anti-cura (Warwick, Dr. Mundo, Aatrox)" },
      { id: "cryptbloom", note: "Penetração + cura em área para o time" },
    ],
    runes: {
      primaryTree: "sorcery",
      keystone: "arcane-comet",
      primary: ["manaflow-band", "transcendence", "scorch"],
      secondaryTree: "domination",
      secondary: ["taste-of-blood", "ultimate-hunter"],
      shards: ["+9 Adaptativo (AP)", "+Vida bônus (escala com nível)", "+Armadura fixa"],
      explanation:
        "Cometa no Q é quase garantido contra melee sem dash — e depois do Q, o E dobrado decide a troca. Manaflow resolve o maior problema do early, e Ultimate Hunter mantém a Tempestade Glacial disponível para cada troca.",
    },
    altRunesNote:
      "Alternativa defensiva: mantenha o Cometa e troque a secundária para Resolve (Bone Plating + Second Wind) contra burst físico — a rota fica muito mais tranquila.",
    spells: [
      { id: "flash", note: "Reposiciona o muro ou foge do all-in" },
      { id: "teleport", note: "Volta à rota sem perder onda e entra em brigas globais" },
    ],
    skillPriority: ["E", "Q", "W"],
    abilities: [
      { key: "P", name: "Renascimento", desc: "Ao morrer, vira um OVO: se sobreviver 6 segundos, volta à vida com parte da vida. Ganks precisam gastar duas barras — e o ovo sob torre é quase imortal." },
      { key: "Q", name: "Lampejo Gelado", desc: "Projétil de gelo que explode ao reativar: dano + ATORDOAMENTO em área. O acerto abre o E dobrado e o Cometa — sua troca inteira em duas habilidades." },
      { key: "W", name: "Cristalizar", desc: "Ergue uma PAREDE de gelo que corta o caminho. Separa times, fecha rotas de fuga e anula dashes de linha reta — a habilidade que define o campeão." },
      { key: "E", name: "Congelamento", desc: "Projétil rápido de dano; contra alvos atingidos por Q ou R, o dano DOBRA. O poke da rota e o burst do combo." },
      { key: "R", name: "Tempestade Glacial", desc: "Área de chuva de gelo que desacelera e dana continuamente — e deixa todos CONGELADOS para o E. Segura a onda, kiteia melee e zoneia briga inteira." },
    ],
    comboTips: [
      "Q (atordoa) → E: dano dobrado garantido. A troca básica da rota.",
      "R no chão → E: a Tempestade deixa o alvo chillado — o E dobra mesmo sem acertar o Q.",
      "W atrás de VOCÊ ao fugir: a parede corta o perseguidor e o R no seu pé mantém a distância.",
    ],
    tips: {
      early: [
        "Poke com Q→E quando o lutador for basicar; senão, E de longe e administre a mana (Manaflow + Anel de Doran).",
        "NÃO empurre sem visão: Anivia morre para qualquer gank — segure a onda perto da torre.",
        "O ovo é recurso: brigue perto da SUA torre para renascer protegida, nunca no meio da rota inimiga.",
      ],
      mid: [
        "R empurra ondas inteiras: limpe, ward e atrase o jogo até o Rod of Ages completar.",
        "Em brigas no rio, W divide a rota: metade do time inimigo fica do lado errado da parede.",
        "Com Ultimate Hunter, o R está quase sempre pronto: kiteie e force o inimigo a brigar na sua poça.",
      ],
      late: [
        "Em teamfight, R no centro + W cortando o flank: você controla a geometria da briga inteira.",
        "Guarde o Q para o assassino/dash que procurar você — atordoar na cara é a sua única defesa.",
        "Liandry's + R: tanques derretem em 4 segundos dentro da Tempestade — deixe a briga acontecer na sua zona.",
      ],
    },
    strongAgainst: [
      { champion: "Darius", note: "Kite infinito com R + muro: ele nunca chega no alcance do E dele." },
      { champion: "Garen", note: "A desaceleração constante anula a fila do Q; troque do lado de fora do girar." },
      { champion: "Sett", note: "Sem gap closer, os punhos dele ficam a 600 de distância para sempre." },
    ],
    weakAgainst: [
      { champion: "Kled", note: "All-in constante e dashes em cadeia: o ovo só atrasa a morte." },
      { champion: "Zac", note: "Engage do E de ângulos sem visão — a parede não corta o que você não vê." },
      { champion: "Irelia", note: "Reset de dash nas tropas: ela chega no Q e o burst não volta." },
    ],
    counterTips: [
      "Contra dashes (Kled/Irelia): W atrás de você, não na frente — a parede defensiva vale mais que a ofensiva.",
      "Contra all-in: guarde Q e Zhonya; o ovo + torre + R no pé transformam gank em abate invertido.",
      "Mana é vida: volte ANTES de ficar sem mana — Anivia sem mana é um alvo de treino.",
    ],
    altBuilds: [
      {
        name: "Controle total",
        when: "Contra times de briga longa e tanques (composição de 5v5)",
        items: [
          { id: "rylais", note: "Tudo desacelera: kite absurdo" },
          { id: "liandrys" },
          { id: "cryptbloom", note: "Penetração + cura para o time na limpeza" },
        ],
        note: "Menos burst, mais zona: a briga acontece onde você quiser.",
      },
      {
        name: "Burst de poke",
        when: "Contra rotas frágeis e para fechar o jogo no mid game",
        items: [
          { id: "shadowflame", note: "Penetração + dano contra escudos" },
          { id: "stormsurge", note: "Explosão extra no combo de burst" },
          { id: "rabaddons" },
        ],
        note: "Q + E apaga carregadores em um combo; perde segurança do Rod of Ages.",
      },
    ],
  },
];
