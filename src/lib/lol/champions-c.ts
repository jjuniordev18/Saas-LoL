// ============================================================
// Campeões (parte 3/4) — Illaoi, Volibear, Tryndamere, Olaf,
// Yorick, K'Sante
// Builds baseadas no patch 16.21 (Temporada 2026)
// ============================================================
import type { Champion } from "./data";

export const CHAMPIONS_C: Champion[] = [
  // ------------------------------------------------------------
  // ILLAOI
  // ------------------------------------------------------------
  {
    id: "illaoi",
    name: "Illaoi",
    title: "a Sacerdotisa do Kraken",
    classes: ["lutador"],
    difficulty: 2,
    tier: "A",
    popular: true,
    image: "illaoi",
    color: "#A05EB5",
    playstyle: "Juggernaut de área",
    summary:
      "A profetisa do Deus Tentáculo transforma a rota num campo de tentáculos. Acerte o E (Teste de Espírito) e o alvo vira um 'vaso': cada tentáculo bate nele à distância. Em teamfights apertadas, o R pode atingir 3, 4, 5 alvos e curar Illaoi o suficiente para vencer brigas 1v3.",
    strengths: [
      "Melhor farm sob torre do jogo: Q mata a onda inteira",
      "Vence brigas em área apertada (rio, jungle, caminho de Baron)",
      "E cria pressão à distância mesmo contra campeões de alcance",
    ],
    weaknesses: [
      "Muito dependente de acertar o E — sem ele, não existe lane",
      "Fraca em matchups de poke longe (ela precisa de alvos próximos)",
      "Lenta para girar o mapa: splitpush e teamfights em área aberta a penalizam",
    ],
    startItems: [
      { id: "dorans-blade", note: "Dano e sustain para trocas" },
      { id: "health-potion" },
    ],
    boots: [
      { id: "plated-steelcaps", note: "Padrão: lutadores AD batem muito nos tentáculos" },
      { id: "mercury-treads", note: "Contra AP pesado e times com muito CC" },
    ],
    coreItems: [
      { id: "sundered-sky", note: "Dano em trocas curtas + cura: sinergia perfeita com W" },
      { id: "black-cleaver", note: "O E e o W aplicam stacks rápido" },
      { id: "steraks-gage", note: "Vida para o R de briga longa" },
    ],
    situationalItems: [
      { id: "spirit-visage", note: "Amplifica TODAS as suas curas (R + Sundered Sky)" },
      { id: "deaths-dance", note: "Contra times físicos: evita morrer no meio do R" },
      { id: "hullbreaker", note: "Splitpush: um campeão sozinho não resolve 2 tentáculos + você" },
      { id: "thornmail", note: "Contra básicos e cura" },
      { id: "force-of-nature", note: "Contra magos de dano contínuo" },
    ],
    runes: {
      primaryTree: "precision",
      keystone: "conqueror",
      primary: ["triumph", "legend-alacrity", "last-stand"],
      secondaryTree: "resolve",
      secondary: ["second-wind", "bone-plating"],
      shards: ["+10% Velocidade de Ataque", "+9 Adaptativo (AD)", "+Vida bônus (escala com nível)"],
      explanation:
        "Conqueror enche rápido com W + básicos nos tentáculos e cura junto com o R — Illaoi vira imortal em briga longa. Bone Plating segura o burst do all-in inimigo enquanto os tentáculos trabalham.",
    },
    altRunesNote:
      "Contra poke extremo (Quinn, Teemo): Grasp of the Undying + Second Wind + Doran's Shield transforma a rota num empate pacífico até o 6.",
    spells: [
      { id: "flash", note: "E Flash é o combo que decide a rota" },
      { id: "teleport", note: "Volta à rota com onda montada e participa de brigas no dragão" },
    ],
    skillPriority: ["E", "Q", "W"],
    abilities: [
      { key: "P", name: "Profecia do Kraken", desc: "Tentáculos surgem periodicamente ao seu lado e atacam quem passar perto. Eles ficam mais fortes conforme o jogo avança." },
      { key: "Q", name: "Golpe do Tentáculo", desc: "Dano em linha que mata ondas inteiras; se acertar campeões, ativa os tentáculos próximos por alguns segundos." },
      { key: "W", name: "Fúria do Espectro", desc: "Básico rápido que aplica dano baseado na vida do alvo e faz TODOS os tentáculos próximos atacarem de uma vez." },
      { key: "E", name: "Teste de Espírito", desc: "Projétil que 'arranca' o espírito do alvo: enquanto você bate no espírito, o corpo fica lento e cada tentáculo acerta o jogador real. Mate o espírito e os tentáculos continuam esmurrando o alvo." },
      { key: "R", name: "Salto Confidente do Deus", desc: "Dano em área e um tentáculo por inimigo atingido. Durante o R, os tentáculos atacam mais rápido e curam Illaoi." },
    ],
    comboTips: [
      "E acertou? W no espírito + Q: o alvo toma dano duplo enquanto foge.",
      "R em 2+ inimigos na área do seu W: os tentáculos curam mais do que o dano que você toma.",
      "Cultive tentáculos: segure o Q para matar 3 minions E acertar o campeão na mesma linha.",
    ],
    tips: {
      early: [
        "Level 1 pegue Q e limpe a onda sob torre sem risco — Illaoi é a rainha do farm seguro.",
        "Só use o E quando o inimigo for farmar (movimento previsível) — cada E errado são 8 segundos de fraqueza.",
        "Perto da sua torre os tentáculos pune o dive: recue e deixe eles trabalharem.",
      ],
      mid: [
        "Monte a onda, mande o TP no rio e force briga no dragão: R de Illaoi em corredor é letal.",
        "Splitpush com Hullbreaker: quem vier sozinho perde o 1v1 para espírito + tentáculos.",
        "Comunique o jungler: invasão na jungle inimiga em área apertada = R de 2+ alvos.",
      ],
      late: [
        "Não entre primeiro: deixe o time inimigo se aglomerar num corredor e R no meio.",
        "Com Spirit Visage, seu R cura mais que o burst deles — seja o segundo front da briga.",
        "Fique perto de paredes e corredores: área aberta mata seus tentáculos.",
      ],
    },
    strongAgainst: [
      { champion: "Sett", note: "Sett quer briga longa perto de você: exatamente onde Illaoi é mais forte." },
      { champion: "Nasus", note: "Poke com E antes dos stacks e o cachorro não farma em paz." },
      { champion: "Mordekaiser", note: "R do Morde? R de volta DENTRO do reino dele: tentáculos não respeitam dimensão." },
    ],
    weakAgainst: [
      { champion: "Camille", note: "Dash do W dela esquiva o E e o escudo reduz o poke —Illaoi nunca segura a Campeã." },
      { champion: "Fiora", note: "Parry no E e ela desmonta o espírito: trocas curtas antes que você reaja." },
      { champion: "Teemo", note: "Poke à distância fora do alcance dos tentáculos: farme com Q e espere o 6." },
    ],
    counterTips: [
      "Contra dashes, guarde o W: acerte o espírito ANTES que ele pule em você.",
      "Doran's Shield + Second Wind tornam o poke suportável — jogue para escalar.",
      "Se o E nunca acerta, farme com Q e peça gank: Illaoi com jungler perto é prisão de rota.",
    ],
    altBuilds: [
      {
        name: "Imortal de Teamfight",
        when: "Times que brigam 5v5 em corredores (Baron, mid)",
        items: [
          { id: "spirit-visage", note: "Curas ampliadas" },
          { id: "jaksho", note: "Resistências crescentes para briga longa" },
          { id: "thornmail" },
        ],
        note: "Menos dano, mais tempo vivo: os tentáculos fazem o trabalho pesado.",
      },
      {
        name: "Splitpush Onda Infinita",
        when: "Time inimigo sem resposta 1v1 ou com teleporte queimado",
        items: [
          { id: "hullbreaker" },
          { id: "titanic-hydra", note: "Onda cai com 1 combo" },
          { id: "steraks-gage" },
        ],
        note: "Empurre, coloque tentáculo, troque de rota — o mapa gira ao seu redor.",
      },
    ],
  },

  // ------------------------------------------------------------
  // VOLIBEAR
  // ------------------------------------------------------------
  {
    id: "volibear",
    name: "Volibear",
    title: "o Trovão Errante",
    classes: ["lutador", "tank"],
    difficulty: 1,
    tier: "S",
    popular: true,
    image: "volibear",
    color: "#4E8FCB",
    playstyle: "Diver com engajamento de torre",
    summary:
      "O temível urso de Freljord mescla dano, tanqueza e o engajamento mais assustador da rota: o Q acelera e ATACA TORRES. Com o R no nível 6, qualquer erro do inimigo é morte — pule a parede, arremesse com E e fique grudento com o W.",
    strengths: [
      "Dive de torre absurdo: R desativa torres por alguns segundos",
      "Q dá velocidade + atordoamento: pune posições avançadas",
      "W cura muito contra alvos de muita vida",
    ],
    weaknesses: [
      "Recarga longa: sem Q/E você é um alvo lento",
      "Sofre com kiting em campo aberto",
      "R precisa acertar em área: fácil de escapar com dash/alerta",
    ],
    startItems: [
      { id: "dorans-shield", note: "Sustain para trocas longas" },
      { id: "health-potion" },
    ],
    boots: [
      { id: "plated-steelcaps", note: "Contra o padrão AD da rota" },
      { id: "mercury-treads", note: "Contra CC e AP pesado" },
    ],
    coreItems: [
      { id: "sundered-sky", note: "Dano crítico garantido no W + cura" },
      { id: "black-cleaver", note: "Q, W e E aplicam stacks constantemente" },
      { id: "steraks-gage", note: "Escudo para dive de torre" },
    ],
    situationalItems: [
      { id: "spirit-visage", note: "Amplifica o W e a regeneração do R" },
      { id: "thornmail", note: "Contra lutadores de básico e cura" },
      { id: "deaths-dance", note: "Contra burst físico" },
      { id: "force-of-nature", note: "Contra magos" },
      { id: "dead-mans-plate", note: "Mais velocidade para engajar de longe" },
    ],
    runes: {
      primaryTree: "precision",
      keystone: "conqueror",
      primary: ["triumph", "legend-alacrity", "last-stand"],
      secondaryTree: "resolve",
      secondary: ["second-wind", "unflinching"],
      shards: ["+10% Velocidade de Ataque", "+9 Adaptativo (AD)", "+Vida bônus (escala com nível)"],
      explanation:
        "Conqueror + W curam uma quantidade absurda em trocas estendidas. Unflinching + Mercury compensam o maior medo do urso: ficar preso no CC enquanto tenta chegar perto.",
    },
    altRunesNote:
      "Estilo tanque de engage: Aftershock + Resolve (Demolish + Overgrowth) — menos dano, dive de torre ainda mais seguro.",
    spells: [
      { id: "flash", note: "Q Flash surpresa é o combo de dive" },
      { id: "teleport", note: "TP de dive no dragão: R desativa a torre" },
    ],
    skillPriority: ["W", "Q", "E"],
    abilities: [
      { key: "P", name: "O Relâmpago Ataca", desc: "Cada certa quantidade de dano em habilidade concede velocidade de ataque e dano mágico nos básicos." },
      { key: "Q", name: "Fúria Trovejante", desc: "Aceleração forte; o próximo ataque atordoa e, se o alvo for TORRE, ataca-a com dano extra e desativa-a por instantes." },
      { key: "W", name: "Fúria Voraz", desc: "Mordida com dano baseado na vida do alvo que cura você; no segundo uso (com marca), o dano e a cura dobram." },
      { key: "E", name: "Grito Celestial", desc: "Chama um raio que desacelera e dá escudo — mesmo se você sair da área." },
      { key: "R", name: "Tempestade", desc: "Salto com dano em área que DESATIVA torres próximas e aumenta seu tamanho, vida e dano. O ult do dive." },
    ],
    comboTips: [
      "Q (corre) → básico (atordoa) → E (escudo + slow) → W duas vezes: a troca padrão.",
      "Nível 6: R na cabeça + Q segure o alvo enquanto a torre está desligada — dive garantido com jungler.",
      "Guarde o E para quando o burst inimigo vier: o escudo vira trocas ganhas.",
    ],
    tips: {
      early: [
        "Nível 1–3 troque no W: a mordida dupla cura mais do que o dano que você toma.",
        "Q tem uso defensivo: use para fugir ou atravessar minion wall quando o jungler vier.",
        "Rastreie o jungler inimigo: Volibear avança demais depois do Q — recue antes.",
      ],
      mid: [
        "Seu R quebra qualquer campana sob torre: comunique os dives ao time.",
        "Empurre e rotacione para o rio: Q+E pega qualquer um no corredor.",
        "W de dupla mordida em tanque inimigo = metade da vida de volta: lute no frontline.",
      ],
      late: [
        "Você é o dive: R no carry inimigo ou na torre para forçar objetivos.",
        "Splitpush com TP: Q bate em torres — pressão lateral absurda.",
        "Em teamfight, não suba sozinho: entre depois do primeiro CC do seu time.",
      ],
    },
    strongAgainst: [
      { champion: "Garen", note: "W cura mais do que o giro dele e Q garante a fuga sem silêncio doer." },
      { champion: "Nasus", note: "Dive antes dos stacks: R do urso desliga a torre que protege o cachorro." },
      { champion: "Illaoi", note: "Atordoo com Q quebra o ciclo dos tentáculos — e o W morde o espírito dela." },
    ],
    weakAgainst: [
      { champion: "Camille", note: "W dela para no ar e o hookshot escapa do seu alcance — você nunca segura a Campeã." },
      { champion: "Jax", note: "Counter Strike bloqueeia seus básicos e o W do urso perde a briga longa." },
      { champion: "Quinn", note: "Kite eterno: o urso morre antes de chegar. Doran's Shield + TP." },
    ],
    counterTips: [
      "Contra kiting, invista em boots cedo e use Q para COLAR, não para fugir.",
      "Guarde o E para o momento do engage inimigo: escudo + slow anula o all-in.",
      "Se o matchup é perdido, farme com W e escale para tank — seu R sempre vale algo.",
    ],
    altBuilds: [
      {
        name: "Tanque de Engage",
        when: "Time sem frontlane e você é o único iniciador",
        items: [
          { id: "jaksho" },
          { id: "thornmail" },
          { id: "kaenic-rookern" },
        ],
        note: "R de tanque puro: sobrevive o suficiente para o W curar tudo.",
      },
      {
        name: "AP Tempo (alternativo)",
        when: "Time cheio de AD e você quer dano mágico",
        items: [
          { id: "riftmaker", note: "Dano crescente + cura" },
          { id: "nashors-tooth", note: "Sinergia com a passiva de AS" },
          { id: "spirit-visage" },
        ],
        note: "Build divertida e forte em elos baixos: dano mágico surpresa.",
      },
    ],
  },

  // ------------------------------------------------------------
  // TRYNDAMERE
  // ------------------------------------------------------------
  {
    id: "tryndamere",
    name: "Tryndamere",
    title: "o Rei Bárbaro",
    classes: ["duelista"],
    difficulty: 1,
    tier: "A",
    image: "tryndamere",
    color: "#C9A227",
    playstyle: "Splitpusher imortal",
    summary:
      "O Rei Bárbaro é a definição de pressão lateral: com Lethal Tempo e o W reduzindo dano à distância, ele vence quase todo 1v1 — e o R garante 5 segundos de imortalidade para torres caírem. O jogo dele é simples: farme, bata, splitpush, repita.",
    strengths: [
      "R de imortalidade: dive e fuga sem risco de morte",
      "Melhor splitpush do jogo com Lethal Tempo",
      "Spin escapa de ganks e atravessa paredes",
    ],
    weaknesses: [
      "Zero utilidade em teamfight: se o time perde 4v5 na rota, o jogo vira",
      "Fácil de CC: um atordoamento nas 5s do R desperdiça tudo",
      "Muito dependente de farm e de não perder a rota no early",
    ],
    startItems: [
      { id: "dorans-blade", note: "Roubo de vida para trocas" },
      { id: "health-potion" },
    ],
    boots: [
      { id: "berserker-greaves", note: "Padrão: Lethal Tempo + AS" },
      { id: "plated-steelcaps", note: "Contra lutadores AD fortes" },
    ],
    coreItems: [
      { id: "botrk", note: "Dano % vida + roubo: o 1º item padrão" },
      { id: "trinity-force", note: "Sheen + AS + MS: sinergia total" },
      { id: "phantom-dancer", note: "Mais AS e fantasma de velocidade" },
    ],
    situationalItems: [
      { id: "ravenous-hydra", note: "Limpeza de onda e omnivamp" },
      { id: "deaths-dance", note: "Sobreviva ao burst para usar o R com calma" },
      { id: "mortal-reminder", note: "Contra cura (Aatrox, Mundo, Fiora)" },
      { id: "seryldas-grudge", note: "Contra tanques: penetração + slow nas habilidades" },
      { id: "wits-end", note: "Contra AP: MR + dano on-hit" },
    ],
    runes: {
      primaryTree: "precision",
      keystone: "lethal-tempo",
      primary: ["triumph", "legend-alacrity", "last-stand"],
      secondaryTree: "domination",
      secondary: ["taste-of-blood", "treasure-hunter"],
      shards: ["+10% Velocidade de Ataque", "+9 Adaptativo (AD)", "+Vida bônus (escala com nível)"],
      explanation:
        "Lethal Tempo empilha velocidade de ataque infinita: no 3º segundo de briga, Tryndamere ataca mais rápido do que qualquer outro campeão do jogo. Taste of Blood + Doran's Blade mantém a rota saudável.",
    },
    altRunesNote:
      "Contra matchups de poke pesado: Fleet Footwork + Resolve (Second Wind + Overgrowth) sustenta a rota até você ter 2 itens.",
    spells: [
      { id: "flash", note: "Corrigir o E ou escapar de CC" },
      { id: "ghost", note: "Perseguir após o R ou fugir de kite" },
    ],
    skillPriority: ["E", "W", "Q"],
    abilities: [
      { key: "P", name: "Fúria de Batalha", desc: "Cada ataque/habilidade/abate gera Fúria. Com Fúria cheia, seu crítico aumenta absurdamente — quase todo básico crita." },
      { key: "Q", name: "Sede de Sangue", desc: "Cura baseada em dano causado + Fúria gasta; quanto menos vida, mais cura e mais dano de ataque." },
      { key: "W", name: "Grito Desafiador", desc: "Desacelera fortemente inimigos que estão de costas e reduz o dano de campeões à distância." },
      { key: "E", name: "Giro Mortal", desc: "Dash que atravessa paredes e causa dano; recarga reduzida quando você crita." },
      { key: "R", name: "Fúria Indomável", desc: "5 segundos de IMORTALIDADE (não cai abaixo de 30 de vida) e Fúria cheia. Nada te mata dentro dele." },
    ],
    comboTips: [
      "E → W no alvo de costas → básicos com Fúria cheia: o combo de all-in.",
      "R quando estiver com 30% de vida, não em 5%: use os 5s inteiros de dano.",
      "Q entre trocas: gaste Fúria para curar e recarregue básicando minions.",
    ],
    tips: {
      early: [
        "Nível 1–2 você vence a maioria: aproveite a Fúria cheia e force trocas.",
        "Nunca R para 'não morrer': morrer com R disponível é o maior erro do Tryndamere.",
        "Foque farm: Tryndamere precisa de 2 itens antes de dominar.",
      ],
      mid: [
        "Wave management é tudo: onda lenta na sua torre = 1v1 garantido.",
        "Splitpush a rota oposta ao objetivo: o time inimigo escolhe entre você e o dragão.",
        "W reduz dano de poke: use antes de tentar farmar sob pressão.",
      ],
      late: [
        "Nunca entre em teamfight 5v5: seu valor é o 1v1 e as torres laterais.",
        "R + Ghost = atrair 3 inimigos por 10 segundos enquanto seu time pega Baron.",
        "Guarde o E para atravessar a parede de fuga, não para entrar.",
      ],
    },
    strongAgainst: [
      { champion: "Malphite", note: "Críticos ignoram armadura acumulada e o R anula o poke dele." },
      { champion: "Nasus", note: "Antes dos stacks, Tryndamere vence qualquer troca — pressione o early." },
      { champion: "Ornn", note: "Dano contínuo com Lethal Tempo derrete o tanque antes dele escalar." },
    ],
    weakAgainst: [
      { champion: "Pantheon", note: "Punção no early te mata antes do R: TP e farme até 2 itens." },
      { champion: "Shen", note: "O ult dele acompanha o time e a provocação interrompe seu R de dano." },
      { champion: "Jax", note: "Counter Strike bloqueia o all-in inteiro: espere ele gastar." },
    ],
    counterTips: [
      "Contra Frozen Heart/Thornmail, troque para Serylda's + BOTRK antes do 3º item.",
      "CC no R? Compre Mercury's Treads e R depois do atordoamento deles.",
      "Se o time inimigo agrupa 5 no seu lado, forcem objetivos no outro — você não precisa vencer 1v5.",
    ],
    altBuilds: [
      {
        name: "Crítico Absoluto",
        when: "Contra times sem tanques ou quando você está fedado",
        items: [
          { id: "trinity-force" },
          { id: "phantom-dancer" },
          { id: "seryldas-grudge", note: "Penetração para fechar" },
        ],
        note: "Dano absurdo com passiva de crítico — cada básico tira metade da vida.",
      },
      {
        name: "Sustain Eterno",
        when: "Contra poke pesado e brigas longas",
        items: [
          { id: "botrk" },
          { id: "ravenous-hydra" },
          { id: "deaths-dance" },
        ],
        note: "Você simplesmente não morre: cure tudo com Q + omnivamp.",
      },
    ],
  },

  // ------------------------------------------------------------
  // OLAF
  // ------------------------------------------------------------
  {
    id: "olaf",
    name: "Olaf",
    title: "o Berserker",
    classes: ["lutador"],
    difficulty: 1,
    tier: "B",
    image: "olaf",
    color: "#7A9E3B",
    playstyle: "Berserker anti-CC",
    summary:
      "O viking de Freljord fica MAIS forte quanto mais perto da morte: com o W de cura, o E de dano verdadeiro e o R ignorando CC, Olaf corre pela briga inteira e esmaga o carry inimigo. Perfeito para quem quer all-in agressivo sem medo de atordoamento.",
    strengths: [
      "R anula CC: nenhum atordoamento segura o viking",
      "E causa dano verdadeiro: tanques também morrem",
      "W cura em briga longa: quanto menos vida, mais perigoso",
    ],
    weaknesses: [
      "Sem mobilidade além da corrida do R",
      "Fraco contra kiting de longo alcance",
      "Escala mal no late se não ficar fedado no early",
    ],
    startItems: [
      { id: "dorans-blade", note: "Dano para o all-in nível 1" },
      { id: "health-potion" },
    ],
    boots: [
      { id: "plated-steelcaps", note: "Padrão AD da rota" },
      { id: "mercury-treads", note: "Contra AP/CC restante depois do R" },
    ],
    coreItems: [
      { id: "sundered-sky", note: "Dano crítico + cura: o motor do Olaf" },
      { id: "black-cleaver", note: "E e Q aplicam stacks em área" },
      { id: "steraks-gage", note: "Vida para o R de briga longa" },
    ],
    situationalItems: [
      { id: "deaths-dance", note: "Sobreviva ao burst físico" },
      { id: "spirit-visage", note: "Amplifica W + Sundered Sky" },
      { id: "thornmail", note: "Contra básicos e cura" },
      { id: "maw-of-malmortius", note: "Contra burst AP" },
      { id: "mortal-reminder", note: "Contra times de cura" },
    ],
    runes: {
      primaryTree: "precision",
      keystone: "conqueror",
      primary: ["triumph", "legend-alacrity", "last-stand"],
      secondaryTree: "resolve",
      secondary: ["bone-plating", "overgrowth"],
      shards: ["+10% Velocidade de Ataque", "+9 Adaptativo (AD)", "+Vida bônus (escala com nível)"],
      explanation:
        "Conqueror + Last Stand: com pouca vida, Olaf tem os dois multiplicadores ativos — é literalmente o champion design da runa. Bone Plating segura o burst inicial enquanto você escala os stacks.",
    },
    altRunesNote:
      "Estilo agressivo de rota: Press the Attack + Domination (Sudden Impact + Treasure Hunter) para abates rápidos no early.",
    spells: [
      { id: "flash", note: "Corrigir posicionamento no all-in" },
      { id: "ghost", note: "Correr 8 segundos de briga com o R" },
    ],
    skillPriority: ["Q", "E", "W"],
    abilities: [
      { key: "P", name: "Fúria Berserker", desc: "Velocidade de ataque aumenta conforme sua vida está baixa — até +100% com vida crítica." },
      { key: "Q", name: "Arremesso de Machado", desc: "Arremessa o machado (pegue de volta para não gastar mana) e desacelera o alvo." },
      { key: "W", name: "Embate Vicioso", desc: "Cura baseada em dano causado; com vida baixa, a cura é enorme." },
      { key: "E", name: "Ruptura Implacável", desc: "Golpe com DANO VERDADEIRO; custo: um pouco da própria vida. Recarrega ao abater." },
      { key: "R", name: "Fúria de Ragnarok", desc: "Remove e IMUNIZA contra CC, ganha armadura, penatração e velocidade. Você não pode ser parado por 6 segundos." },
    ],
    comboTips: [
      "Q no rosto (pega de volta) → W para curar → E com dano verdadeiro: o ciclo da rota.",
      "R + Ghost: corra 6s sem CC até o carry inimigo — ninguém segura.",
      "Com vida baixa, NÃO fuja: W + Conqueror + Last Stand curam mais do que o dano que você toma.",
    ],
    tips: {
      early: [
        "Nível 1 Olaf é dos mais fortes do jogo: invada ou force troca com Q pego de volta.",
        "E tem dano verdadeiro: use SEMPRE que disponível, a vida gasta volta com W.",
        "Contra poke, farme com Q à distância e R quando ele tentar all-in.",
      ],
      mid: [
        "Olaf é o melhor diver de dragão: R + Ghost no carry inimigo enquanto seu time segura o resto.",
        "Com 2 itens, procure abates laterais: seu all-in 1v1 vence a maioria dos lutadores.",
        "Controle o Baron com o R: CC inimigo não te segura para contestar.",
      ],
      late: [
        "Você é o assassino de carries: R no ADC/mage, ignore o tanque.",
        "Cuidado com times de kiting: entre por flancos, nunca pela frente.",
        "W com vida baixa em teamfight = farm de cura: confie na mecânica.",
      ],
    },
    strongAgainst: [
      { champion: "Mordekaiser", note: "R do Morde? Olaf entra junto e o R anula o CC do reino da morte." },
      { champion: "Sett", note: "Dano verdadeiro no E ignora a vida do Sett e o W cura os socos." },
      { champion: "Garen", note: "Troca longa favorece Olaf com Conqueror + W de cura constante." },
    ],
    weakAgainst: [
      { champion: "Camille", note: "O hookshot escapa do all-in e a zona do R dela te prende sem CC para anular." },
      { champion: "Gwen", note: "A névoa bloqueia seus básicos e ela escala melhor — poke e espere." },
      { champion: "Teemo", note: "Poke à distância + cegueira: farme com Q e all-in só no 6 com Ghost." },
    ],
    counterTips: [
      "Contra range, comece Doran's Shield e Q farm até o 6: seu all-in com R resolve.",
      "Guarde o R para o CC ESSENCIAL (R do Morde, W do Sett) — não gaste no primeiro slow.",
      "Se ficar atrás, jogue de tank com Black Cleaver + Spirit Visage e seja o segundo engage.",
    ],
    altBuilds: [
      {
        name: "Tanque Berserker",
        when: "Time sem frontlane e você precisa iniciar",
        items: [
          { id: "jaksho" },
          { id: "spirit-visage" },
          { id: "thornmail" },
        ],
        note: "Menos dano, mas o R ainda anula o CC e você vira o murro da briga.",
      },
      {
        name: "Anti-Tank Perfurante",
        when: "Dois ou mais tanques inimigos",
        items: [
          { id: "botrk" },
          { id: "black-cleaver" },
          { id: "seryldas-grudge" },
        ],
        note: "Dano verdadeiro do E + % vida + penetração: tanque vira manteiga.",
      },
    ],
  },

  // ------------------------------------------------------------
  // YORICK
  // ------------------------------------------------------------
  {
    id: "yorick",
    name: "Yorick",
    title: "o Pastor de Almas",
    classes: ["lutador"],
    difficulty: 1,
    tier: "A",
    image: "yorick",
    color: "#7D8A5C",
    playstyle: "Splitpusher de ghouls",
    summary:
      "O último pastor de Freljord transforma cada minion morto num ghoul e cada parede de W numa prisão. Yorick é a definição de splitpush: com Maiden + 4 ghouls, uma onda inteira some em 2 segundos e torres caem sozinhas. Enquanto o time briga 4v4, Yorick derruba inibidor.",
    strengths: [
      "Splitpush mais rápido do jogo com Maiden viva",
      "W (parede) prende e pune quem erra posicionamento",
      "Cura forte com Q e passiva de ghouls",
    ],
    weaknesses: [
      "Zero mobilidade: ganks o pegam facilmente",
      "Depende de farmar ghouls (Q em minion morto)",
      "Maiden morre fácil se você brigar longe dela",
    ],
    startItems: [
      { id: "dorans-blade", note: "Dano + roubo com Q" },
      { id: "health-potion" },
    ],
    boots: [
      { id: "plated-steelcaps", note: "Padrão AD" },
      { id: "mercury-treads", note: "Contra AP e CC pesado" },
    ],
    coreItems: [
      { id: "trinity-force", note: "Sheen sinergiza com Q de túmulo" },
      { id: "titanic-hydra", note: "Ghouls + onda: dano em área absurdo" },
      { id: "steraks-gage", note: "Vida para o all-in com Maiden" },
    ],
    situationalItems: [
      { id: "hullbreaker", note: "O item do splitpush: resistências quando sozinho" },
      { id: "deaths-dance", note: "Sobreviva ao dive no splitpush" },
      { id: "spirit-visage", note: "Amplifica a cura do Q" },
      { id: "thornmail", note: "Contra lutadores de básico" },
      { id: "force-of-nature", note: "Contra magos de poke" },
    ],
    runes: {
      primaryTree: "resolve",
      keystone: "grasp",
      primary: ["demolish", "second-wind", "overgrowth"],
      secondaryTree: "precision",
      secondary: ["triumph", "legend-alacrity"],
      shards: ["+10% Velocidade de Ataque", "+9 Adaptativo (AD)", "+Vida bônus (escala com nível)"],
      explanation:
        "Grasp + Demolish: Yorick troca no Grasp a cada 4s e DEMOLE torres — cada placa vale ouro. Overgrowth soma com a passiva de ghouls para um splitpusher insano de vida.",
    },
    altRunesNote:
      "Estilo agressivo: Conqueror + Resolve (Demolish + Overgrowth) para all-ins de rota com Maiden no 6.",
    spells: [
      { id: "flash", note: "W Flash para prender por surpresa" },
      { id: "teleport", note: "TP no objetivo com Maiden: pressão global" },
    ],
    skillPriority: ["E", "Q", "W"],
    abilities: [
      { key: "P", name: "Cemitério do Pastor", desc: "Minions mortos perto viram túmulos (até 4). Q consome túmulos para curar e invocar ghouls." },
      { key: "Q", name: "Última Suplica", desc: "Golpe que cura; se matar o alvo, deixa túmulo. Com túmulo próximo, invoca um ghoul." },
      { key: "W", name: "Muralha Sombria", desc: "Anel de pedra que PRENDE inimigos dentro (eles quebram com 4 ataques). Punir posicionamento." },
      { key: "E", name: "Pranto Melancólico", desc: "Marca alvos: ghouls e Maiden vão atrás, e o dano é baseado na vida máxima do alvo." },
      { key: "R", name: "Eulogias de Fim de Século", desc: "Invoca a MAIDEN (e 4 ghouls): ela empurra a onda, dá dano em área e aumenta a pressão lateral em 300%." },
    ],
    comboTips: [
      "E (marca) → W (prende) → ghouls + básicos com Q: o all-in padrão.",
      "Antes de empurrar, farme 4 túmulos: Q neles = 4 ghouls + Maiden = onda some.",
      "Maiden ativa + E no campeão inimigo: tudo corre atrás dele de uma vez.",
    ],
    tips: {
      early: [
        "Q em minion morto SEMPRE: ghouls são farm, torre e troca ao mesmo tempo.",
        "W prender o inimigo perto da SUA torre = gank grátis do jungler.",
        "Nível 6 com Maiden: empurre e TP no dragão — Maiden segura a rota sozinha.",
      ],
      mid: [
        "Splitpush na rota oposta ao objetivo: com Maiden, torres caem em 15 segundos.",
        "Guarde o W para o inimigo que tentar te parar: prenda e fuja pela floresta.",
        "Maiden morre? Ela renasce com o R — não brigue 4v5 sem ela.",
      ],
      late: [
        "Você não é o teamfighter: deixe o time segurar e derrube inibidor lateral.",
        "Hullbreaker + Maiden = 1v2 possível: pune o time que manda 1 responder.",
        "Baron com Maiden viva: ela tanqueia o Baron enquanto o time foca os inimigos.",
      ],
    },
    strongAgainst: [
      { champion: "Sett", note: "W prende o soco dele e ghouls + Maiden vencem a briga longa." },
      { champion: "Nasus", note: "Você escala MAIS rápido: Maiden empurra e Nasus fica preso farmando." },
      { champion: "Garen", note: "W anula a investida e Grasp + ghouls vencem as trocas curtas." },
    ],
    weakAgainst: [
      { champion: "Camille", note: "Hookshot escapa do W e o R dela isola o Yorick sem Maiden." },
      { champion: "Illaoi", note: "Tentáculos limpam ghouls e o espírito dela puna o all-in." },
      { champion: "Mordekaiser", note: "R isola Yorick SEM os ghouls: brigue perto do reino dele só com Maiden no 6." },
    ],
    counterTips: [
      "Contra mobilidade, guarde o W para PRENDER, não para machucar.",
      "Maiden morrendo cedo? Recue e R de novo: ela vale mais que a troca.",
      "Contra poke, Doran's Shield + Second Wind: farme ghouls e escale para o 6.",
    ],
    altBuilds: [
      {
        name: "Splitpush Puro",
        when: "Time inimigo sem resposta lateral e você já tem Trinity",
        items: [
          { id: "hullbreaker" },
          { id: "titanic-hydra" },
          { id: "deaths-dance" },
        ],
        note: "Torres caem em 10 segundos com Maiden + ghouls + Hullbreaker.",
      },
      {
        name: "Tanque de Brigas",
        when: "Time precisa de você em teamfight (composição agressiva)",
        items: [
          { id: "jaksho" },
          { id: "spirit-visage" },
          { id: "abyssal-mask" },
        ],
        note: "Ghouls + Maiden ainda dão dano: você só sobrevive mais para usá-los.",
      },
    ],
  },

  // ------------------------------------------------------------
  // K'SANTE
  // ------------------------------------------------------------
  {
    id: "ksante",
    name: "K'Sante",
    title: "o Orgulho de Nazumah",
    classes: ["tank", "lutador"],
    difficulty: 3,
    tier: "A",
    image: "KSante",
    color: "#3E8E7E",
    playstyle: "Tanque híbrido de engajamento",
    summary:
      "O caçador de Nazumah é o tanque mais completo da rota: com Grasp ele troca forte, com o R ele vira um assassino de tanque. O desafio é o timing do R — transformar, engajar, executar e VOLTAR com o segundo uso. Altíssimo teto de habilidade.",
    strengths: [
      "CC em cadeia: Q (atordoar) + W (arremessar) + E (puxar)",
      "R remove a vida máxima do alvo: tanques viram papel",
      "Escudo do E dá mobilidade e tanqueza",
    ],
    weaknesses: [
      "Difícil de dominar: R mal usado te deixa fraco no meio do inimigo",
      "Dano limitado sem o R transformado",
      "Depende de acertar W (é fácil de escapar)",
    ],
    startItems: [
      { id: "dorans-shield", note: "Sustain para trocas com Grasp" },
      { id: "health-potion" },
    ],
    boots: [
      { id: "plated-steelcaps", note: "Padrão AD" },
      { id: "mercury-treads", note: "Contra CC e AP" },
    ],
    coreItems: [
      { id: "sunfire-aegis", note: "Dano + tank: sinergia com trocas de Grasp" },
      { id: "iceborn-gauntlet", note: "Sheen de tanque: slow para colar" },
      { id: "kaenic-rookern", note: "MR contra o AP do time inimigo" },
    ],
    situationalItems: [
      { id: "thornmail", note: "Contra básicos e cura" },
      { id: "unending-despair", note: "Drenagem em teamfight" },
      { id: "randuins-omen", note: "Contra críticos (Tryndamere, ADC)" },
      { id: "force-of-nature", note: "Contra magos de poke" },
      { id: "abyssal-mask", note: "Se seu time tem 2+ AP" },
    ],
    runes: {
      primaryTree: "resolve",
      keystone: "grasp",
      primary: ["demolish", "second-wind", "overgrowth"],
      secondaryTree: "precision",
      secondary: ["triumph", "legend-haste"],
      shards: ["+Velocidade de Habilidade", "+9 Adaptativo (AD)", "+Vida bônus (escala com nível)"],
      explanation:
        "Grasp pune cada troca curta do inimigo e Overgrowth soma com sua passiva de vida. Legend: Haste acelera o Q para o atordoamento virar spam.",
    },
    altRunesNote:
      "Contra times de poke: Aftershock + Resolve (Second Wind + Unflinching) — o escudo do E garante o proc da Aftershock.",
    spells: [
      { id: "flash", note: "W Flash e R Flash são os combos decisivos" },
      { id: "teleport", note: "Engage global no dragão com R" },
    ],
    skillPriority: ["Q", "E", "W"],
    abilities: [
      { key: "P", name: "Cacete de Cauda", desc: "Habilidades aplicam stacks no alvo; com 2 stacks, o próximo Q atordoa." },
      { key: "Q", name: "Ntofo Strikes", desc: "Golpe em cone que desacelera; com 2 stacks de passiva, ATORDOA e causa dano extra baseado na vida máxima." },
      { key: "W", name: "Path Maker", desc: "Canaliza e arremessa o inimigo para frente (pode atravessar paredes com Flash)." },
      { key: "E", name: "Footwork", desc: "Dash curto que dá escudo e puxa aliados (ou inimigos com o R transformado)." },
      { key: "R", name: "All Out", desc: "Arremessa o alvo por cima e TRANSFORMA: perde vida/resistências, ganha dano/mobilidade. Segundo uso volta ao normal após 4+ segundos." },
    ],
    comboTips: [
      "Q ×2 (atordoa) → W (arremessa para seu time) → E de volta: o combo de engage.",
      "R no carry inimigo: arremessa por cima da torre e mata com o dano transformado.",
      "R mal posicionado? Segundo uso recua: use para SAIR, não só para entrar.",
    ],
    tips: {
      early: [
        "Grasp a cada 4s: troque e recue — K'Sante no early é pressão, não all-in.",
        "Q duplo atordoa: conte os stacks e force o all-in quando o 2º Q estiver pronto.",
        "W atravessa paredes: use para escapar de ganks por ângulos inesperados.",
      ],
      mid: [
        "Seu W é o melhor engage da rota: flanqueie e arremesse o carry para o seu time.",
        "R para iniciar: transformado, você dana mais que o lutador inimigo.",
        "Demolish + placa: empurre e bata nas torres entre rotações.",
      ],
      late: [
        "Você é o engage principal: W Flash ou R Flash decidem teamfights.",
        "NÃO use R por impulso: transformado, você perde a tanqueza — calcule a saída.",
        "Em brigas de Baron, guarde o R para o transporte do Baron steal inimigo.",
      ],
    },
    strongAgainst: [
      { champion: "Sett", note: "W arremessa o Sett ANTES do soco e o escudo do E anula o dano." },
      { champion: "Darius", note: "Grasp + escudo vencem as trocas curtas; W arremessa o Darius para longe do 5º stack." },
      { champion: "Aatrox", note: "Second Wind + escudo do E tornam o poke dele ineficaz; W quebra o combo." },
    ],
    weakAgainst: [
      { champion: "Fiora", note: "Parry no W e true damage no Q dela: K'Sante é vitamina para a Duelista." },
      { champion: "Gwen", note: "A névoa bloqueia o CC do Q e ela escala mais rápido que Grasp." },
      { champion: "Riven", note: "Shields + dashes ignoram o W e o burst vence antes do R transformado." },
    ],
    counterTips: [
      "Contra duelistas, só troque com o 2º stack de Q pronto: atordoamento = troca ganha.",
      "Guarde o E para o all-in deles: o escudo dobra sua vida efetiva.",
      "Se o matchup é perdido, build cedo em resistências e escale com Grasp.",
    ],
    altBuilds: [
      {
        name: "Engage Máximo",
        when: "Você é o único iniciador do time",
        items: [
          { id: "iceborn-gauntlet" },
          { id: "force-of-nature" },
          { id: "randuins-omen" },
        ],
        note: "Velocidade + CC: entre, arremesse e saia com o segundo R.",
      },
      {
        name: "Briga Prolongada",
        when: "Times que brigam 5v5 em objetivos",
        items: [
          { id: "sunfire-aegis" },
          { id: "unending-despair" },
          { id: "kaenic-rookern" },
        ],
        note: "Grasp + Despair drenam a briga inteira: você é o muro.",
      },
    ],
  },
];
