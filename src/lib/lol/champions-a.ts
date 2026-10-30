// ============================================================
// Campeões (parte 1/2) — Darius, Garen, Sett, Mordekaiser,
// Aatrox, Renekton, Jax, Fiora
// Builds baseadas no patch 16.21 (Temporada 2026)
// ============================================================
import type { Champion } from "./data";

export const CHAMPIONS_A: Champion[] = [
  // ------------------------------------------------------------
  // DARIUS
  // ------------------------------------------------------------
  {
    id: "darius",
    name: "Darius",
    title: "a Mão de Noxus",
    classes: ["lutador"],
    difficulty: 1,
    tier: "S",
    popular: true,
    image: "darius",
    color: "#D4472F",
    playstyle: "Juggernaut dominante",
    summary:
      "O algoz de Noxus. Darius pune qualquer erro na rota: uma vez que a Hemorragia chega a 5 stacks, o Guilhotina Noxiana se torna execução em área. Melhor pick de topo do patch 16.21 segundo estatísticas de alto elo.",
    strengths: [
      "Dano bruto altíssimo em trocas estendidas",
      "Execução resetável com o ultimate (R)",
      "Pressão de rota e controle de brush",
    ],
    weaknesses: [
      "Sem mobilidade — sofre contra kite e lentidões",
      "Depende de acertar o E (Apanhador) para engajar",
      "Pode ser pokeado à distância antes da briga",
    ],
    startItems: [
      { id: "dorans-blade", note: "Pressão de troca padrão" },
      { id: "health-potion" },
      { id: "health-potion" },
    ],
    boots: [
      { id: "plated-steelcaps", note: "Padrão contra lutadores AD" },
      { id: "mercury-treads", note: "Contra AP pesado ou CC demais" },
    ],
    coreItems: [
      { id: "youmuus-ghostblade", note: "Meta 16.21: velocidade para colar no alvo e completar stacks" },
      { id: "black-cleaver", note: "Rasga armadura e dá aceleração" },
      { id: "dead-mans-plate", note: "Armadura + investida carregada" },
    ],
    situationalItems: [
      { id: "steraks-gage", note: "Escudo anti-burst em brigas caóticas" },
      { id: "deaths-dance", note: "Contra times de dano físico" },
      { id: "force-of-nature", note: "Contra magos de dano em área" },
      { id: "maw-of-malmortius", note: "Anti-burst AP" },
      { id: "chempunk-chainsword", note: "Contra cura (Soraka/Fiora/Nasus)" },
      { id: "guardian-angel", note: "Seguro para forçar jogadas" },
    ],
    runes: {
      primaryTree: "sorcery",
      keystone: "stormraiders-surge",
      primary: ["nimbus-cloak", "celerity", "gathering-storm"],
      secondaryTree: "precision",
      secondary: ["legend-alacrity", "last-stand"],
      shards: ["+10% Velocidade de Ataque", "+9 Adaptativo (AD)", "+Vida bônus (escala com nível)"],
      explanation:
        "Stormraider's Surge (de volta desde o patch 26.9) resolve o maior problema do Darius: colar no alvo. Acerte Q + W + básico e a runa te dá corrida + resistência a lentidão — quase impossível escapar. A secundária em Precision acelera os stacks de Hemorragia.",
    },
    altRunesNote:
      "Alternativa sólida: Conqueror (Precision) + Resolve (Second Wind + Unflinching) para trocas mais longas e matchups de poke.",
    spells: [
      { id: "flash", note: "Engajar com E ou corrigir posicionamento" },
      { id: "ghost", note: "Persegue o time inteiro em teamfights longos" },
    ],
    skillPriority: ["Q", "E", "W"],
    abilities: [
      { key: "P", name: "Hemorragia", desc: "Ataques e habilidades aplicam sangramento acumulável. Com 5 stacks, você ganha Noxian Might: dano de ataque gigante e o R pode executar vários alvos." },
      { key: "Q", name: "Dilacerar", desc: "Golpe circular: a lâmina causa dano alto e cura você; o cabo causa menos dano. Inimigos atingidos pela lâmina ganham stack de Hemorragia." },
      { key: "W", name: "Golpe Debilitante", desc: "Básico carregado que desacelera e aplica um stack de Hemorragia. Reset de ataque básico." },
      { key: "E", name: "Apresar", desc: "Puxa todos os inimigos na área para perto de você. Sua ferramenta de engajar — errou o E, perdeu a troca." },
      { key: "R", name: "Guilhotina Noxiana", desc: "Salto com dano verdadeiro que escala com Hemorragia. ABATE reinicia a recarga parcialmente: pode executar o time inteiro." },
    ],
    comboTips: [
      "E (puxa) → W (lentidão) → básico → Q na lâmina: o combo de troca básico.",
      "Guarde o R para o alvo com 5 stacks de Hemorragia — o dano verdadeiro quase dobra.",
      "No 5º stack (Noxian Might), force a briga: seu dano de ataque fica absurdo.",
    ],
    tips: {
      early: [
        "Use Q na lâmina (borda) para curar e aplicar stack; o cabo do machado quase não machuca.",
        "Nível 1–3 é seu pico contra a maioria dos lutadores: troque no básico + W.",
        "E puxa o inimigo que foge — guarde para quando ele usar dash ou recuar.",
      ],
      mid: [
        "Com Stormraider's + Youmuu's, transforme abates de rota em invasões na jungle inimiga com seu jungler.",
        "Empurre a onda e procure o 5v5: Darius brilha em brigas em corredor.",
        "Sem E disponível, não force engajamento — é sua única forma de prender o alvo.",
      ],
      late: [
        "Em teamfight, deixe o frontline absorver o CC e entre para limpar com R resetado.",
        "Fantasma + Stormraider's te mantém grudado nos carregadores do time inimigo.",
        "Priorize execução em alvos já sangrando: R de abate reinicia e cria efeito dominó.",
      ],
    },
    strongAgainst: [
      { champion: "Nasus", note: "Bate NA cabeça do cachorro antes dos stacks: troque sempre no early." },
      { champion: "Garen", note: "Trocas estendidas favorecem Darius: 5 stacks vencem a regeneração dele." },
      { champion: "Mordekaiser", note: "Puxa com E antes do combo dele e vence o dano bruto no early." },
      { champion: "Sett", note: "Dano bruto superior em trocas curtas com Q na lâmina." },
    ],
    weakAgainst: [
      { champion: "Quinn", note: "Kite à distância: só entre com E confirmado ou ajuda do jungler." },
      { champion: "Jayce", note: "Poke antes da briga: busque all-in nível 6 com Fantasma." },
      { champion: "Kennen", note: "Desacelera e ataca à distância; segundo Wind/escudo inicial ajudam a sobreviver." },
      { champion: "Vayne", note: "Condem na parede te mata antes do R. Só pegue com ajuda." },
    ],
    counterTips: [
      "Contra range, comece com Doran's Shield + Second Wind e empurre a onda para negar farm sob torre.",
      "Guarde Fantasma para o momento do engage — sem ele você vira alvo fácil de kite.",
      "Peça ganks nos matchups de range: Darius + jungler com CC é abate quase garantido.",
    ],
    altBuilds: [
      {
        name: "Bruiser Clássico",
        when: "Quando o time precisa de frontline e você vai brigar muito",
        items: [
          { id: "stridebreaker", note: "Desaceleração em área para prender alvos" },
          { id: "steraks-gage" },
          { id: "deaths-dance" },
        ],
        note: "Mais vida e utilidade; menos velocidade de caça.",
      },
      {
        name: "Anti-Tank",
        when: "Contra dois ou mais tanques na composição inimiga",
        items: [
          { id: "black-cleaver" },
          { id: "botrk" },
          { id: "seryldas-grudge" },
        ],
        note: "Penetração total: % da vida atual + redução de armadura.",
      },
    ],
  },

  // ------------------------------------------------------------
  // GAREN
  // ------------------------------------------------------------
  {
    id: "garen",
    name: "Garen",
    title: "o Poder de Demacia",
    classes: ["lutador", "tank"],
    difficulty: 1,
    tier: "A",
    popular: true,
    image: "garen",
    color: "#6BA8E0",
    playstyle: "Lutador rotativo com regeneração",
    summary:
      "O campeão mais recomendado para iniciantes no topo. Sem mana, kit direto e uma regeneração passiva que perdoa erros. Garen gira, silencia e executa com Justiça de Demacia.",
    strengths: [
      "Sem mana — pode errar sem custo",
      "Regeneração passiva fora de combate",
      "Execução verdadeira no R (ignora escudos)",
    ],
    weaknesses: [
      "Sem mobilidade real (Q é o único turbo)",
      "Facilmente kiteado por lentidões",
      "Dano cai contra tanques armados",
    ],
    startItems: [
      { id: "dorans-shield", note: "Rota mais segura" },
      { id: "health-potion" },
    ],
    boots: [
      { id: "plated-steelcaps", note: "Padrão" },
      { id: "mercury-treads", note: "Contra CC/AP" },
    ],
    coreItems: [
      { id: "stridebreaker", note: "Desacelera em área — resolve o problema de kite" },
      { id: "phantom-dancer", note: "AS + fantasma temporário ao atacar" },
      { id: "dead-mans-plate", note: "Tanque + investida" },
    ],
    situationalItems: [
      { id: "steraks-gage", note: "Escudo salva-vidas" },
      { id: "force-of-nature", note: "Contra AP" },
      { id: "thornmail", note: "Contra cura e lutadores AD" },
      { id: "warmogs", note: "Vida + regen infinita" },
      { id: "mortal-reminder", note: "Anti-cura (Soraka, Aatrox, Fiora)" },
      { id: "guardian-angel" },
    ],
    runes: {
      primaryTree: "sorcery",
      keystone: "stormraiders-surge",
      primary: ["nimbus-cloak", "celerity", "transcendence"],
      secondaryTree: "resolve",
      secondary: ["second-wind", "unflinching"],
      shards: ["+10% Velocidade de Ataque", "+9 Adaptativo (AD)", "+Vida bônus (escala com nível)"],
      explanation:
        "Stormraider's Surge dispara quando o combo Q+E enche a barra de dano rápido: você ganha uma rajada de velocidade e resistência a desaceleração — entra, gira e sai (ou persegue). Second Wind + Unflinching compensam matchups de poke e CC.",
    },
    altRunesNote:
      "Contra tanques pesados: Conqueror (Precision) + Resolve aguenta trocas longas e escala melhor no late.",
    spells: [
      { id: "flash", note: "Correção de posicionamento" },
      { id: "ignite", note: "Fecha abates que o E não completa" },
    ],
    skillPriority: ["E", "Q", "W"],
    abilities: [
      { key: "P", name: "Perseverança", desc: "Fora de combate, regenera percentual da vida máxima por segundo. Errou a troca? Recue e volte cheio." },
      { key: "Q", name: "Golpe Decisivo", desc: "Remove lentidões, acelera, silencia no próximo básico e causa dano extra. Use para iniciar trocas ou fugir." },
      { key: "W", name: "Coragem", desc: "Escudo com redução de dano e tenacidade. Ativa passivamente ao abater tropas — use nos momentos de burst." },
      { key: "E", name: "Julgamento", desc: "Gira a espada causando dano por segundo; a cada golpe aplica corte. Críticos aumentam contra alvo único." },
      { key: "R", name: "Justiça de Demacia", desc: "Dano verdadeiro baseado na vida que FALTA ao alvo. Ignora escudos — o finisher mais honesto do jogo." },
    ],
    comboTips: [
      "Q (silencia) → E (gira) → R quando o alvo está abaixo de 25% de vida.",
      "Ative W no instante do burst inimigo (por exemplo: R do Darius) para reduzir muito o dano.",
      "O Q remove lentidões: guarde para depois do primeiro slow inimigo.",
    ],
    tips: {
      early: [
        "Troque com Q+alguns giros de E e saia com Stormraider's Surge antes do contra-ataque.",
        "Farme sob torre tranquilamente: sem mana, só preocupe-se com o cooldown do Q.",
        "Regeneração passiva: recue alguns segundos após tomar poke e volte com vantagem de vida.",
      ],
      mid: [
        "Garen tem rotação de mapa forte: empurre a onda e invada a jungle com o jungler.",
        "Com Stridebreaker você finalmente prende alvos móveis — force brigas no rio.",
        "Procure o alvo de maior ameaça e silencie com Q no início do teamfight.",
      ],
      late: [
        "R ignora escudos: execute o carry mesmo com Sterak/Lifeline ativos.",
        "Seja o frontline barato: a regeneração te traz toda a briga.",
        "Splitpush com Demolish quando o time inimigo agrupa no outro lado do mapa.",
      ],
    },
    strongAgainst: [
      { champion: "Mordekaiser", note: "Silencia o combo e gira mais rápido que o dano dele no early." },
      { champion: "Nasus", note: "Silencia o Q dele na troca e executa antes dos stacks." },
      { champion: "Sett", note: "Troca curta com Q+E e Phase Rush para sair antes do W." },
      { champion: "Darius", note: "Skill matchup: silencia e saia rápido da Hemorragia estendida." },
    ],
    weakAgainst: [
      { champion: "Quinn", note: "Kite e cegueira; farme sob torre e espere gank." },
      { champion: "Vayne", note: "Dano % da vida e condenação; evite trocas a qualquer custo." },
      { champion: "Jayce", note: "Poke de canhão te impede de regenerar; busque all-in nível 6." },
      { champion: "Fiora", note: "Riposte no seu Q e true damage; troque só sem cooldown do W dela." },
    ],
    counterTips: [
      "Contra range, martele a onda na torre deles e use a regeneração para absorver o poke.",
      "Nunca gaste o Q para iniciar contra campeões com parry (Fiora/Camille): use E primeiro.",
      "Chame o jungler quando a onda estiver congelada na sua metade — Garen com gank é abate fácil.",
    ],
    altBuilds: [
      {
        name: "Tanque Puro",
        when: "Time sem frontline / contra dano físico em massa",
        items: [
          { id: "sunfire-aegis" },
          { id: "thornmail" },
          { id: "warmogs" },
        ],
        note: "Giren ainda dá dano com E e R; vira muralha que regenera.",
      },
      {
        name: "Crítico Rotativo",
        when: "Quando você está feedado e precisa carregar",
        items: [
          { id: "trinity-force", note: "Sinergia de Sheen com Q" },
          { id: "steraks-gage" },
          { id: "guardian-angel" },
        ],
        note: "Dano de troca maior mantendo vida decente.",
      },
    ],
  },

  // ------------------------------------------------------------
  // SETT
  // ------------------------------------------------------------
  {
    id: "sett",
    name: "Sett",
    title: "o Chefe",
    classes: ["lutador"],
    difficulty: 1,
    tier: "A",
    popular: true,
    image: "sett",
    color: "#E8A33D",
    playstyle: "Brigão de trocas curtas",
    summary:
      "O Rei da Arena. Sett acumula agressão em trocas e explode tudo com o Trabalho Pesado (W) — quanto mais apanhou, mais devolve. Simples, forte e divertido.",
    strengths: [
      "W devolve todo o dano tomado como soco verdadeiro",
      "Regeneração de vida por atividade em combate (P)",
      "Ultimate que sequestra o tanque inimigo",
    ],
    weaknesses: [
      "Sem alcance: sofre com poke e kite",
      "Depende de acumular o W no tempo certo",
      "Gap curto no E limita engajamento à distância",
    ],
    startItems: [
      { id: "dorans-blade" },
      { id: "health-potion" },
    ],
    boots: [
      { id: "plated-steelcaps", note: "Padrão — aumenta o valor do seu W" },
      { id: "mercury-treads", note: "Contra CC" },
    ],
    coreItems: [
      { id: "sundered-sky", note: "Soco crítico no primeiro hit + cura: feito para o Sett" },
      { id: "steraks-gage", note: "Escudo quando a briga aperta" },
      { id: "deaths-dance", note: "Converte burst em sangramento lento" },
    ],
    situationalItems: [
      { id: "titanic-hydra", note: "Vida + dano em área nos básicos" },
      { id: "force-of-nature", note: "Contra AP" },
      { id: "thornmail", note: "Anti-cura contra lutadores" },
      { id: "warmogs", note: "Tanque rochoso" },
      { id: "guardian-angel", note: "Para forçar jogadas agressivas" },
      { id: "chempunk-chainsword", note: "Anti-cura" },
    ],
    runes: {
      primaryTree: "precision",
      keystone: "conqueror",
      primary: ["triumph", "legend-alacrity", "last-stand"],
      secondaryTree: "resolve",
      secondary: ["second-wind", "unflinching"],
      shards: ["+10% Velocidade de Ataque", "+9 Adaptativo (AD)", "+Vida bônus (escala com nível)"],
      explanation:
        "Conqueror enche rápido com os punhos duplos do Q e da sustain de briga que o Sett ama. Second Wind segura o poke da rota; Last Stand multiplica o W quando você está baixo.",
    },
    altRunesNote:
      "Contra matchups de burst (Pantheon/Renekton): Fleet Footwork + Resolve para sobreviver à fase de rota.",
    spells: [
      { id: "flash", note: "Flash + R: jogada de sequestro" },
      { id: "ignite", note: "Pressão de abate" },
    ],
    skillPriority: ["Q", "E", "W"],
    abilities: [
      { key: "P", name: "Pit Grit", desc: "Ataques alternam punhos; punhos à direita batem mais e mais rápido. Fora de combate, regenera vida com base no dano recente tomado." },
      { key: "Q", name: "Knuckle Down", desc: "Dois punhos carregados com dano extra baseado na vida MÁXIMA do alvo e velocidade de movimento para alcançar." },
      { key: "W", name: "Trabalho Pesado", desc: "Acumula guarda conforme apanha; libera um soco em cone com dano verdadeiro proporcional e escudo. O momento perfeito decide trocas." },
      { key: "E", name: "Quebra-Cara", desc: "Puxa inimigos das duas laterais; se acertar dos dois lados, atordoa. Ferramenta de engajar e impedir fuga." },
      { key: "R", name: "Roubo de Cena", desc: "Carrega o inimigo, salta e o esmaga no chão com dano baseado na vida extra do alvo. Roube o tanque para derrubar o time no seu W." },
    ],
    comboTips: [
      "E (puxa/atordoa) → Q (dois punhos) → saia com o restante da velocidade do Q.",
      "Guarde o W para DEPOIS de tomar o combo inimigo — o dano verdadeiro escala com o que você apanhou.",
      "R no tanque inimigo no meio do time deles = W em área com dano gigante.",
    ],
    tips: {
      early: [
        "Troque com Q sempre que o inimigo chegar — os punhos de direita são gratuitos e fortes.",
        "Nível 1–3 você ganha da maioria dos lutadores: procure troca, não fuja dela.",
        "W tem recarga longa no early: não o desperdice em harass inútil.",
      ],
      mid: [
        "Com Sundered Sky + Sterak, force duelos 1v1 na rota lateral e force rotação inimiga.",
        "R sequestra o frontline: jogue o tanque/bruiser deles na direção dos carries.",
        "Regen passiva te permite jogar agressivo mesmo depois de trocas ruins.",
      ],
      late: [
        "Em teamfight, quem entra primeiro em você perde: guarde o W para o burst mais pesado.",
        "Flash + R + E é a jogada de sequestro que vira jogos — treine o timing.",
        "Com Last Stand e vida baixa, seu W é o soco mais forte do jogo: não entre em pânico.",
      ],
    },
    strongAgainst: [
      { champion: "Yasuo", note: "Sem energia para kite; E cancela o dash dele no vazio." },
      { champion: "Yone", note: "Troca de perto favorece: W pune o combo inteiro dele." },
      { champion: "Jax", note: "Punhos do Q batem mais que o counter do E dele em trocas curtas." },
      { champion: "Aatrox", note: "Espera o combo dele e devolve com W carregado." },
    ],
    weakAgainst: [
      { champion: "Vayne", note: "Kite e condemn; só entre com E confirmado." },
      { champion: "Jayce", note: "Poke de canhão impede acumular guarda em paz." },
      { champion: "Kennen", note: "Range + atordoamento; farme com Second Wind." },
      { champion: "Quinn", note: "Ataque à distância negam os punhos." },
    ],
    counterTips: [
      "Contra range: Doran's Shield + Second Wind e procure o all-in com Fantasma no nível 6+.",
      "Nunca use W primeiro: deixe o inimigo commitar o combo antes de liberar o soco.",
      "E puxa dois lados: posicione entre a tropa e o campeão para o stun garantido.",
    ],
    altBuilds: [
      {
        name: "Muralha do Bosque",
        when: "Contra composição de dano físico concentrado",
        items: [
          { id: "heartsteel", note: "Vida infinita com punhos % vida" },
          { id: "titanic-hydra" },
          { id: "thornmail" },
        ],
        note: "Sett com 4k de vida vira o chefe de verdade: W e Q escalam com vida.",
      },
      {
        name: "Splitpush Pesado",
        when: "Quando seu time tem vantagem em outro lado",
        items: [
          { id: "hullbreaker", note: "Sozinho em rota = torre cai" },
          { id: "titanic-hydra" },
          { id: "steraks-gage" },
        ],
        note: "Difícil de duelar 1v1; força dois inimigos a irem até você.",
      },
    ],
  },

  // ------------------------------------------------------------
  // MORDEKAISER
  // ------------------------------------------------------------
  {
    id: "mordekaiser",
    name: "Mordekaiser",
    title: "o Renegado de Ferro",
    classes: ["mago", "lutador"],
    difficulty: 1,
    tier: "A",
    popular: true,
    image: "mordekaiser",
    color: "#8656E8",
    playstyle: "Lutador AP de área",
    summary:
      "Um mago de armadura que vence brigas longas e sequestra o carry inimigo para o Reino da Morte — um duelo 1v1 onde o R dele decide tudo. Simples de pilotar, difícil de escapar.",
    strengths: [
      "Dano em área constante com passiva",
      "R isola o inimigo mais perigoso em duelo forçado",
      "Escudo frequente com W",
    ],
    weaknesses: [
      "Sem dash: sofre com kite",
      "Habilidades telegrafadas (fáceis de desviar)",
      "Early fraco contra pressão física",
    ],
    startItems: [
      { id: "dorans-shield", note: "Segurança na rota" },
      { id: "health-potion" },
    ],
    boots: [
      { id: "plated-steelcaps", note: "Padrão contra AD" },
      { id: "sorcerers-shoes", note: "Mais dano quando você está à frente" },
    ],
    coreItems: [
      { id: "riftmaker", note: "AP + vida + dano crescente em combate" },
      { id: "rylais", note: "Todas as habilidades desaceleram: resolve o kite" },
      { id: "zhonyas", note: "Sobrevive ao burst e espera o próximo ciclo" },
    ],
    situationalItems: [
      { id: "liandrys", note: "Contra tanques de muita vida" },
      { id: "spirit-visage", note: "Amplifica o escudo/cura do W" },
      { id: "thornmail", note: "Anti-cura e armadura" },
      { id: "force-of-nature", note: "Contra AP pesado" },
      { id: "void-staff", note: "Penetração contra MR comprada" },
      { id: "morellonomicon", note: "Anti-cura AP" },
    ],
    runes: {
      primaryTree: "precision",
      keystone: "conqueror",
      primary: ["triumph", "legend-alacrity", "last-stand"],
      secondaryTree: "resolve",
      secondary: ["second-wind", "unflinching"],
      shards: ["+10% Velocidade de Ataque", "+9 Adaptativo (AP)", "+Vida bônus (escala com nível)"],
      explanation:
        "Conqueror enche rapidinho com a passiva em área e transforma o Morde numa parede que se cura. Rylai's + Stormraider's? Não precisa: com Rylai's na build, o kite vira história antiga.",
    },
    altRunesNote:
      "Contra times de muito CC: troque a secundária por Sorcery (Nimbus Cloak + Transcendence) para mobilidade e aceleração.",
    spells: [
      { id: "flash", note: "Necessário — você não tem dash" },
      { id: "ghost", note: "Cola no alvo durante o Reino da Morte" },
    ],
    skillPriority: ["Q", "E", "W"],
    abilities: [
      { key: "P", name: "Escuridão Ascendente", desc: "Habilidades causam dano em área e aplicam Escuridão; com 3 stacks, a aura queima ao redor por alguns segundos e dá parte do dano como cura." },
      { key: "Q", name: "Obliterar", desc: "Esmaga a clava em área: dano alto num alvo único, dividido entre vários. Acertar só o campeão maximiza o dano." },
      { key: "W", name: "Indestrutível", desc: "Converte parte do dano causado/tomado em escudo; reusa para consumir o escudo como cura. Gire o ritmo das trocas com ele." },
      { key: "E", name: "Mão da Morte", desc: "Puxa todos os inimigos numa cone à frente. Seu engajar — mesmo problema do Darius: errou, puniu." },
      { key: "R", name: "Reino da Morte", desc: "Sequestra um campeão por 7 segundos num duelo isolado; quem viver rouba stats parciais do outro. Delete o carry deles da teamfight." },
    ],
    comboTips: [
      "E (puxa) → Q → básicos com a aura acesa → W quando o escudo acumular.",
      "R no carry mais perigoso no início do teamfight: 7 segundos de 4v4.",
      "A passiva em área empurra onda rápido: use-a para resetar a rota antes de fazer jogadas.",
    ],
    tips: {
      early: [
        "Use Q para farmar e pokear ao mesmo tempo quando o inimigo se aproxima das tropas.",
        "Nível 1–5, evite trocas longas contra lutadores AD — seu pico vem com itens.",
        "E também rouba escudo/magia? Não: só puxa. Guarde-o para cancelar dashes inimigos.",
      ],
      mid: [
        "Com Riftmaker + Rylai's você vira o pior pesadelo de atiradores sem dash.",
        "Force duelos 1v1 com R ativo: dentro do Reino você cura com W e queima com passiva.",
        "Aguarde o inimigo gastar o dash para acertar o E com segurança.",
      ],
      late: [
        "R remove o carry do mapa por 7s: use no início da briga, não no final.",
        "Zhonya's dentro do Reino da Morte é legal? Sim — a duração continua correndo a seu favor.",
        "Fique na linha de frente: sua aura passiva pune quem chegar perto do seu time.",
      ],
    },
    strongAgainst: [
      { champion: "Volibear", note: "Dano em área vence a troca parada do urso; R anula o R dele." },
      { champion: "Nasus", note: "Reino da Morte rouba os stacks? Não, mas isola o duelão." },
      { champion: "Sett", note: "Rouba stats do soco; cuidado apenas com o W carregado." },
      { champion: "Garen", note: "Skill matchup: pokeie com Q e desacelere com Rylai's." },
    ],
    weakAgainst: [
      { champion: "Fiora", note: "Riposte no seu E e true damage; jogue com cautela." },
      { champion: "Jax", note: "Counter Strike nega seu combo; espere o E dele." },
      { champion: "Kayle", note: "Outscale: termine o jogo antes do minuto 30." },
      { champion: "Quinn", note: "Kite pesado sem o seu R disponível." },
    ],
    counterTips: [
      "Contra Fiora/Jax: guarde o E e aposte em poke de Q; nunca jogue E no vácuo.",
      "Rylai's é prioridade contra kite — desaceleração em toda habilidade.",
      "No Reino da Morte, lutar é obrigatório: entre com vida alta e W pronto.",
    ],
    altBuilds: [
      {
        name: "Derretedor de Tanques",
        when: "Contra composição com 2+ tanques/vida alta",
        items: [
          { id: "liandrys" },
          { id: "riftmaker" },
          { id: "void-staff" },
        ],
        note: "Dano percentual + penetração: vida máxima vira alvo fácil.",
      },
      {
        name: "Muro AP",
        when: "Quando seu time precisa de frontline mágico",
        items: [
          { id: "rod-of-ages" },
          { id: "spirit-visage" },
          { id: "thornmail" },
        ],
        note: "Mais sobrevivência; o dano vem da passiva e Conqueror.",
      },
    ],
  },

  // ------------------------------------------------------------
  // AATROX
  // ------------------------------------------------------------
  {
    id: "aatrox",
    name: "Aatrox",
    title: "a Espada Darkin",
    classes: ["lutador"],
    difficulty: 2,
    tier: "S",
    popular: true,
    image: "aatrox",
    color: "#C43B4E",
    playstyle: "Lutador de combos com cura",
    summary:
      "O Darkin combina golpes de espada em três combos com o sweet spot da ponta. Requer timing, mas recompensa com sustain brutal e presença de teamfight dominante.",
    strengths: [
      "Cura enorme em combos bem acertados",
      "Punição severa em errors de posicionamento",
      "Presença de teamfight com R (revive possibilidade)",
    ],
    weaknesses: [
      "Combos dependem de sweet spots (ponta da lâmina)",
      "Qs telegrafados e desviáveis",
      "Depende de cadência — sem habilidades, é alvo fácil",
    ],
    startItems: [
      { id: "dorans-blade" },
      { id: "health-potion" },
    ],
    boots: [
      { id: "plated-steelcaps", note: "Padrão" },
      { id: "mercury-treads", note: "Contra CC/AP" },
    ],
    coreItems: [
      { id: "sundered-sky", note: "Cura no primeiro hit — sinergia perfeita com combos" },
      { id: "black-cleaver", note: "Penetração + aceleração" },
      { id: "deaths-dance", note: "Converte burst físico em sangramento" },
    ],
    situationalItems: [
      { id: "steraks-gage", note: "Escudo de emergência" },
      { id: "maw-of-malmortius", note: "Contra AP" },
      { id: "seryldas-grudge", note: "Penetração + slow nas habilidades" },
      { id: "guardian-angel", note: "Ressuscite e reentre na briga" },
      { id: "chempunk-chainsword", note: "Anti-cura" },
      { id: "kaenic-rookern", note: "MR + escudo (contra poke mágico)" },
    ],
    runes: {
      primaryTree: "precision",
      keystone: "conqueror",
      primary: ["triumph", "legend-alacrity", "last-stand"],
      secondaryTree: "resolve",
      secondary: ["second-wind", "unflinching"],
      shards: ["+9 Adaptativo (AD)", "+9 Adaptativo (AD)", "+Vida bônus (escala com nível)"],
      explanation:
        "Conqueror é a engine do Aatrox: cada sweet spot cura e mantém a agressão. Second Wind segura o poke da rota até você comprar sustain.",
    },
    altRunesNote:
      "Contra matchups difíceis de acerto (Quinn/Vayne): Grasp + Resolve para trocas curtas com Q isolado.",
    spells: [
      { id: "flash", note: "Flash + W puxa o alvo de volta" },
      { id: "teleport", note: "Rota segura e presença de mapa" },
    ],
    skillPriority: ["Q", "E", "W"],
    abilities: [
      { key: "P", name: "Devorador de Guerra", desc: "Próximo básico após habilidade causa dano extra e cura baseado no dano causado. Ritmo de combo = sustain." },
      { key: "Q", name: "Darkin Blade", desc: "Três golpes em sequência; a PONTA da lâmina (sweet spot) causa dano extra, empurra e dobra a cura. Acertar 3 sweet spots vence qualquer troca." },
      { key: "W", name: "Cadeia Infernal", desc: "Golpe em linha; atinge dois: primeiro causa dano, segundo prende o inimigo numa parede. Chame-o de volta com um segundo golpe." },
      { key: "E", name: "Ombro Bestial", desc: "Dash curto com recarga baixa; pode ser usado durante o Q para reposicionar os sweet spots. O coração do kit." },
      { key: "R", name: "Final do Massacre", desc: "Aumenta tamanho, dano e cura recebida; participar de abate estende a duração. Vire o terror do teamfight." },
    ],
    comboTips: [
      "Q1 → E lateral (reposiciona a lâmina) → Q2 no sweet spot: o arco que pega quem foge.",
      "W acerta na direção do dash inimigo; use E para cortar a rota de fuga antes.",
      "Abates com R ativo estendem o massacre: procure alvos fáceis para manter o modo gigante.",
    ],
    tips: {
      early: [
        "Acerte Q na ponta contra a tropa + campeão para pokear sem tomar dano.",
        "Use E para REPOSICIONAR o Q, não apenas para chegar perto.",
        "Nível 1–3 tem dano absurdo nos sweet spots: force trocas contra lutadores de perto.",
      ],
      mid: [
        "Com Sundered Sky + Cleaver, você vira o bulwark que também mata: force 1v1 e 2v2.",
        "W prende na parede: coordene com o jungler para ganks garantidos.",
        "Empurre a onda e use TP para flanquear teamfights no rio.",
      ],
      late: [
        "R + GA + Sterak: você simplesmente não morre nas primeiras trocas do teamfight.",
        "Procure o alvo sem dash e martele W + Q3: preso na parede é alvo fácil.",
        "Cura do passivo + Death's Dance converte briga caótica em massacre prolongado.",
      ],
    },
    strongAgainst: [
      { champion: "Sett", note: "Punho a punho, sweet spots ganham: poke com Q e desengage com E." },
      { champion: "Volibear", note: "Kite com Q pontas e W; ele precisa chegar em você." },
      { champion: "Nasus", note: "Impede farm livre com pressão constante de Q." },
      { champion: "Mordekaiser", note: "Dano maior no early e cura equipara; cuidado com o R dele." },
    ],
    weakAgainst: [
      { champion: "Jax", note: "Counter Strike nega seu combo; espere o E dele." },
      { champion: "Fiora", note: "Riposte no seu E e true damage; troque só sem cooldown do W dela." },
      { champion: "Warwick", note: "A cura das Presas da Fera supera seu poke; brigas longas são o terreno dele." },
      { champion: "Quinn", note: "Kite à distância: use TP e farme sob torre." },
      { champion: "Kayle", note: "Escala melhor: termine antes do minuto 30." },
    ],
    counterTips: [
      "Contra Jax/Fiora: guarde o W e aposte em poke de Q na ponta — nunca desperdice os 3 Qs.",
      "Contra range: E tem recarga dupla (2 cargas), use uma para farm e guarde a outra.",
      "R cura aumentada + Death's Dance: brigar com vida baixa muitas vezes te favorece.",
    ],
    altBuilds: [
      {
        name: "Assassino de Rota",
        when: "Contra times frágeis sem tanque",
        items: [
          { id: "eclipse", note: "Dano % vida + escudo em 2 hits" },
          { id: "youmuus-ghostblade", note: "Velocidade de caça" },
          { id: "seryldas-grudge" },
        ],
        note: "Mais letalidade para caçar carries; menos vida.",
      },
      {
        name: "Colosso",
        when: "Contra composição física pesada",
        items: [
          { id: "steraks-gage" },
          { id: "deaths-dance" },
          { id: "guardian-angel" },
        ],
        note: "Frontline com R: quase impossível de derrubar no teamfight.",
      },
    ],
  },

  // ------------------------------------------------------------
  // RENEKTON
  // ------------------------------------------------------------
  {
    id: "renekton",
    name: "Renekton",
    title: "o Massacrador",
    classes: ["lutador"],
    difficulty: 2,
    tier: "A",
    popular: false,
    image: "renekton",
    color: "#B8A44A",
    playstyle: "Lutador de fúria",
    summary:
      "O crocodilo domina os primeiros minutos com Fúria: habilidades carregadas batem forte e curam. Se você gosta de punir early game e ditar o ritmo da rota, este é o seu lagarto.",
    strengths: [
      "Early game dominante com Fúria",
      "Trocas rápidas com dash duplo (E)",
      "Stun garantido no W carregado",
    ],
    weaknesses: [
      "Cai no late game comparado a escaladores",
      "Depende de ritmo: atrás, vira tanque mediano",
      "Fúria exige gestão entre dano e sustain",
    ],
    startItems: [
      { id: "dorans-blade" },
      { id: "health-potion" },
    ],
    boots: [
      { id: "plated-steelcaps", note: "Padrão" },
      { id: "mercury-treads", note: "Contra CC" },
    ],
    coreItems: [
      { id: "sundered-sky", note: "Cura + crítico no primeiro hit" },
      { id: "black-cleaver", note: "Penetração + vida" },
      { id: "steraks-gage", note: "Escudo nas brigas que você começa" },
    ],
    situationalItems: [
      { id: "deaths-dance", note: "Contra AD" },
      { id: "maw-of-malmortius", note: "Contra AP" },
      { id: "guardian-angel", note: "Para forçar jogadas" },
      { id: "chempunk-chainsword", note: "Anti-cura" },
      { id: "force-of-nature", note: "MR" },
      { id: "thornmail", note: "Armadura + anti-cura" },
    ],
    runes: {
      primaryTree: "precision",
      keystone: "conqueror",
      primary: ["triumph", "legend-alacrity", "last-stand"],
      secondaryTree: "resolve",
      secondary: ["second-wind", "unflinching"],
      shards: ["+10% Velocidade de Ataque", "+9 Adaptativo (AD)", "+Vida bônus (escala com nível)"],
      explanation:
        "Conqueror enche nas trocas de W + básicos e devolve vida para continuar agressivo. Second Wind cobre o poke; Unflinching mantém a mobilidade mesmo com CC.",
    },
    altRunesNote:
      "Para splitpush puro: Press the Attack? Não use — Conqueror é o padrão em todas as situações.",
    spells: [
      { id: "flash", note: "Correção de erro ou jogada ofensiva" },
      { id: "teleport", note: "Rota e presença de mapa" },
    ],
    skillPriority: ["Q", "E", "W"],
    abilities: [
      { key: "P", name: "Reinado da Fúria", desc: "Gera Fúria ao atacar/danificar; acima de 50, as habilidades ficam turbinadas (mais dano/efeitos) e consomem a barra." },
      { key: "Q", name: "Tyrant's Spin? Não: Dilaceração Tyrânica", desc: "Gira a espada causando dano em área e curando por inimigo atingido. Com Fúria: mais dano e mais cura. Sua ferramenta de troca e sustain." },
      { key: "W", name: "Pulverização Impiedosa", desc: "Dois golpes brutais com stun; com Fúria, bate três vezes e destrói escudos. Troca completa = stun + dano alto." },
      { key: "E", name: "Avanço Dominante", desc: "Dash em linha; ao acertar inimigo, pode reusar em segundos. Entrada e saída de troca no mesmo movimento." },
      { key: "R", name: "Reinado do Dominador", desc: "Cresce, ganha vida instantânea e aura de dano mágico ao redor. Fúria extra enquanto ativo. Vira o centro das brigas." },
    ],
    comboTips: [
      "E (entrada) → W com Fúria (stun) → Q (área + cura) → E (saída): o drive-by perfeito.",
      "Guarde 50+ de Fúria antes de trocar: W carregado muda completamente o dano da troca.",
      "R antes de mergulhar na torre: a vida instantânea absorve o dive.",
    ],
    tips: {
      early: [
        "Níveis 1–3 são seus: Q nas tropas + campeão cura e machuca ao mesmo tempo.",
        "Gerencie a Fúria: 50 para trocas ofensivas (W turbinado), cure com Q quando baixo.",
        "Congele a onda perto da sua torre contra counters e pune o overextend com E.",
      ],
      mid: [
        "Você é o relógio do jogo: forças no mid game valem mais que farm passivo.",
        "R + Fantasma? Não: com TP, mergulhe de rota e volte com o teleporte.",
        "Force objetivos (Herald/drake) com o jungler: seu stun garante abates.",
      ],
      late: [
        "Late game você vira frontline utilitário: stun o carry e tanque o burst.",
        "Ainda pune erros: E duplo alcança alvos mal posicionados atrás da tropa.",
        "Não se desespere por escala: feche o jogo cedo quando à frente.",
      ],
    },
    strongAgainst: [
      { champion: "Nasus", note: "Bate no cachorro antes dos stacks: negue farm com W." },
      { champion: "Kayle", note: "Janela enorme de domínio antes do nível 16." },
      { champion: "Yasuo", note: "Stun no W consome o escudo/passiva dele." },
      { champion: "Gwen", note: "Early agressivo pune o level 1–5 fraco dela." },
    ],
    weakAgainst: [
      { champion: "Quinn", note: "Range e kite: aposte em ganks e TP criativo." },
      { champion: "Vayne", note: "Condem + invisibilidade: jogo difícil." },
      { champion: "Kennen", note: "Poke elétrico à distância; aguarde o erro de posição." },
      { champion: "Riven", note: "Skill matchup clássica: cuidado com o burst dela no nível 6." },
    ],
    counterTips: [
      "Contra range: freeze sob a torre e castigue o passo em falso com E → W.",
      "W destrói escudos (ex.: W do Sett? não — escudos tipo Malphite W): use-o antes do dano principal.",
      "Não troque sem Fúria: espere a barra encher antes de commitar.",
    ],
    altBuilds: [
      {
        name: "Ladrão de Torres",
        when: "Contra times que agrupam cedo",
        items: [
          { id: "hullbreaker" },
          { id: "titanic-hydra" },
          { id: "steraks-gage" },
        ],
        note: "Splitpush pesado com TP: força resposta inimiga constante.",
      },
      {
        name: "Anti-AP",
        when: "Contra composição mágica (Kennen/Lissandra/Rumble)",
        items: [
          { id: "maw-of-malmortius" },
          { id: "kaenic-rookern", note: "Escudo mágico recarregável" },
          { id: "force-of-nature" },
        ],
        note: "Resistências para continuar na frente mesmo contra poke.",
      },
    ],
  },

  // ------------------------------------------------------------
  // JAX
  // ------------------------------------------------------------
  {
    id: "jax",
    name: "Jax",
    title: "o Mestre das Armas",
    classes: ["duelista", "lutador"],
    difficulty: 2,
    tier: "S",
    popular: true,
    image: "jax",
    color: "#8E63D9",
    playstyle: "Duelista escalador",
    summary:
      "O grande duelista late game. Jax perde a fase de rota para poucos no late: com Trinity e stacks de passiva, ele vence 1v1 contra quase qualquer coisa e destrói torres em segundos.",
    strengths: [
      "Melhor duelo 1v1 do late game",
      "E nega dano básico e causa stun em área",
      "Splitpush destruidor com passiva + Trinity",
    ],
    weaknesses: [
      "Early frágil antes dos itens",
      "Depende de acertar o E (stun) em trocas",
      "Vira alvo de ganks por pressionar rota",
    ],
    startItems: [
      { id: "dorans-blade" },
      { id: "health-potion" },
    ],
    boots: [
      { id: "berserker-greaves", note: "DPS com passiva" },
      { id: "plated-steelcaps", note: "Contra AD pesado" },
    ],
    coreItems: [
      { id: "trinity-force", note: "Sheen + AS: coração da build" },
      { id: "steraks-gage", note: "Vida + escudo para o duelo" },
      { id: "deaths-dance", note: "Sobrevivência contra dano físico" },
    ],
    situationalItems: [
      { id: "botrk", note: "Contra tanques de muita vida" },
      { id: "wits-end", note: "MR + on-hit contra AP" },
      { id: "hullbreaker", note: "Splitpush absoluto" },
      { id: "guardian-angel", note: "Ressuscite no duelo" },
      { id: "frozen-heart", note: "Armadura + AS reduction contra atiradores" },
      { id: "maw-of-malmortius", note: "Anti-burst AP" },
    ],
    runes: {
      primaryTree: "resolve",
      keystone: "grasp",
      primary: ["demolish", "second-wind", "overgrowth"],
      secondaryTree: "precision",
      secondary: ["triumph", "legend-alacrity"],
      shards: ["+10% Velocidade de Ataque", "+9 Adaptativo (AD)", "+Vida bônus (escala com nível)"],
      explanation:
        "Grasp dá sustain e vida permanente para atravessar o early frágil; Demolish converre pressão de rota em torres. A secundária em Precision devolve o DPS que o Grasp tira.",
    },
    altRunesNote:
      "Contra matchups tranquilas (Mordekaiser/Nasus): Conqueror + Resolve acelera o duelo e o splitpush.",
    spells: [
      { id: "flash", note: "Escapar de ganks (você será gankado)" },
      { id: "teleport", note: "Segurança de early + splitpush com TP" },
    ],
    skillPriority: ["W", "Q", "E"],
    abilities: [
      { key: "P", name: "Ataque Relentless", desc: "Ataques básicos consecutivos acumulam velocidade de ataque — o motor do DPS e do splitpush." },
      { key: "Q", name: "Salto Mortal? Leap Strike", desc: "Salta até um alvo (unidade ou ward) causando dano. Entrada, saída e perseguição — dá para saltar em wards para fugir." },
      { key: "W", name: "Empower", desc: "Carrega o próximo básico com dano mágico extra. Custo baixo, recarga curta: principal fonte de dano e troca." },
      { key: "E", name: "Counter Strike", desc: "Entra em defesa: DESVIA todos os ataques básicos e ao final atordoa em área. Counter de duelistas de básico." },
      { key: "R", name: "Grandmaster's Might", desc: "Terceiro básico causa dano mágico em área; ativa resistências bônus por vários segundos. O duelo final." },
    ],
    comboTips: [
      "Q (salta) → E (desvia o básico de resposta) → W carregado → básicos com passiva.",
      "Contra lutadores de básico (Yasuo/Tryn): E DEPOIS do engages deles = stun grátis.",
      "Salte numa ward para atravessar paredes na fuga: sempre deixe uma no bolso.",
    ],
    tips: {
      early: [
        "Level 1 é fraco: farme com W e evite trocar até ter E disponível.",
        "Use Q em tropa para escapar de ganks — mantenha mana para isso.",
        "Congele perto da torre: o early do Jax perde para a maioria dos juggernauts.",
      ],
      mid: [
        "Com Trinity completa, procure duelos 1v1: poucos te vencem com passiva cheia.",
        "Splitpush com Demolish + ward no brush: force o inimigo a te caçar.",
        "E nega tudo de Yasuo/Yone/Tryndamere: guarde para o momento do commito deles.",
      ],
      late: [
        "Você é o 1v1 king: force duelos laterais e pune o mapa dividido.",
        "Em teamfight, salte no carry com E + R: resistências aguentam o contra-ataque.",
        "GA + Sterak: mergulhe sem medo — ressuscite e continue a caçada.",
      ],
    },
    strongAgainst: [
      { champion: "Yasuo", note: "E desvia o dano dele todo: puna cada tentativa de troca." },
      { champion: "Yone", note: "Mesma história: Counter Strike resolve o combo de básicos." },
      { champion: "Mordekaiser", note: "E nega o combo? Melhor: W carregado + passiva vence o duelo estendido." },
      { champion: "Volibear", note: "DPS superior com passiva no late; cuide do early." },
    ],
    weakAgainst: [
      { champion: "Quinn", note: "Range + cegueira; farme e espere o late." },
      { champion: "Vayne", note: "Kite infernal; exija ajuda do jungler." },
      { champion: "Jayce", note: "Poke de canhão antes do seu primeiro item." },
      { champion: "Kennen", note: "Atordoamentos à distância negam o seu E." },
    ],
    counterTips: [
      "Nunca entre em troca sem E disponível — ele é sua defesa e seu stun.",
      "Contra range: compre Wit's End cedo ou aposte em ganks (você tem stun garantido).",
      "Salte em wards/animais para fugir: controle de visão é metade do jogo de splitpush.",
    ],
    altBuilds: [
      {
        name: "On-Hit Híbrido",
        when: "Contra tanques e vida alta em massa",
        items: [
          { id: "botrk" },
          { id: "wits-end" },
          { id: "trinity-force" },
        ],
        note: "Dano mágico + físico misturado: quase impossível de itemizar contra.",
      },
      {
        name: "Muralha Splitpush",
        when: "Quando o plano é pressão lateral total",
        items: [
          { id: "hullbreaker" },
          { id: "trinity-force" },
          { id: "frozen-heart", note: "AS reduzida nos caçadores" },
        ],
        note: "Torres derretem; duelos continuam vencíveis.",
      },
    ],
  },

  // ------------------------------------------------------------
  // FIORA
  // ------------------------------------------------------------
  {
    id: "fiora",
    name: "Fiora",
    title: "a Grande Duelista",
    classes: ["duelista"],
    difficulty: 3,
    tier: "A",
    popular: true,
    image: "fiora",
    color: "#4EC0C8",
    playstyle: "Duelista de precisão",
    summary:
      "A espadachina que identifica pontos vitais e os perfura com dano verdadeiro. Difícil de dominar, mas recompensada com o melhor duelo do jogo — e a capacidade de carregar sozinha no splitpush.",
    strengths: [
      "Dano verdadeiro % vida: ignora resistências",
      "Mobilidade com Q de baixa recarga",
      "R cura em área ao acertar todos os vitais",
    ],
    weaknesses: [
      "Exige leitura de pontos vitais (mecânica alta)",
      "Early frágil contra pressão pesada",
      "W (riposte) exige previsão do inimigo",
    ],
    startItems: [
      { id: "dorans-blade" },
      { id: "health-potion" },
    ],
    boots: [
      { id: "plated-steelcaps", note: "Sobrevivência de rota" },
      { id: "mercury-treads", note: "Contra CC (riposte não pega tudo)" },
    ],
    coreItems: [
      { id: "ravenous-hydra", note: "Omnivamp + área: sustain de duelo" },
      { id: "deaths-dance", note: "Converte o burst físico em sangramento" },
      { id: "steraks-gage", note: "Escudo quando a briga fecha" },
    ],
    situationalItems: [
      { id: "maw-of-malmortius", note: "Contra AP" },
      { id: "guardian-angel", note: "Seguro para duelos arriscados" },
      { id: "hullbreaker", note: "Splitpush máximo" },
      { id: "wits-end", note: "MR + on-hit" },
      { id: "seryldas-grudge", note: "Penetração + slow" },
      { id: "mortal-reminder", note: "Anti-cura" },
    ],
    runes: {
      primaryTree: "precision",
      keystone: "conqueror",
      primary: ["triumph", "legend-alacrity", "last-stand"],
      secondaryTree: "resolve",
      secondary: ["bone-plating", "demolish"],
      shards: ["+10% Velocidade de Ataque", "+9 Adaptativo (AD)", "+Vida bônus (escala com nível)"],
      explanation:
        "Conqueror enche rápido com os vitais e devolve sustain para duelos infinitos. Bone Plating + Demolish equilibram o early e amplificam o splitpush.",
    },
    altRunesNote:
      "Contra matchups de burst físico (Renekton/Pantheon): troque Bone Plating por Second Wind + comece Doran's Shield.",
    spells: [
      { id: "flash", note: "Necessário — sem escape real no Q" },
      { id: "teleport", note: "Escala com segurança e presença" },
    ],
    skillPriority: ["Q", "E", "W"],
    abilities: [
      { key: "P", name: "Duelista", desc: "Pontos vitais aparecem nos lados do inimigo; acertá-los causa dano verdadeiro % vida e concede cura + velocidade. O coração do campeão." },
      { key: "Q", name: "Investida", desc: "Dash curto que causa dano no ponto vital se alinhado. Recarga muito baixa: mobilidade constante e reset ao acertar vital." },
      { key: "W", name: "Riposte", desc: "Bloqueia TODO dano e CC de uma habilidade inimiga por um instante; atordoa se bloquear CC, desacelera caso contrário. Prever o inimigo é a maestoria." },
      { key: "E", name: "Bladework", desc: "Dois básicos turbinados: o primeiro nunca erra (reset de ataque), o segundo causa crítico. Sinergia perfeita com vitais." },
      { key: "R", name: "Grand Challenge", desc: "Marca 4 vitais no alvo; acertar todos (ou 2 + abater) cura você e aliados próximos em área. Duelo de vida ou morte — geralmente de vida." },
    ],
    comboTips: [
      "Q no vital → E (reset de básico) → segundo E crítico → recue com a velocidade do passivo.",
      "W no momento do CC inimigo (stun do Renekton, puxão do Darius): bloqueia e ATORDOA.",
      "R + Hydra + Conqueror: dentro do duelo, o sustain vira impossível de equiparar.",
    ],
    tips: {
      early: [
        "Ataque o vital quando ele aparecer do lado seguro (voltado para você).",
        "Use Q em ângulos diferentes para alcançar vitais sem tomar dano de tropa.",
        "Level 1–3 respeite juggernauts: seu pico real chega com itens.",
      ],
      mid: [
        "Com Hydra, procure duelos: poucos campeões vencem o sustain de vitais + omnivamp.",
        "Force splitpush com TP: o inimigo precisa mandar 2 para te parar.",
        "W é seu seguro de vida: guarde para o CC que mata (Jax E, Darius R?).",
      ],
      late: [
        "Dano verdadeiro % vida: tanques viram papel; ache o vital e perfure.",
        "R em teamfight no tanque = cura em área para o time todo.",
        "Você define o ritmo: force o mapa a se dividir e vence os 1v1 laterais.",
      ],
    },
    strongAgainst: [
      { champion: "Mordekaiser", note: "Riposte no combo e true damage através do escudo." },
      { champion: "Ornn", note: "Vitais perfuram a armadura do ferreiro." },
      { champion: "Nasus", note: "Duelo vencido em praticamente qualquer estágio pós-item." },
      { champion: "Sett", note: "Riposte no W carregado dele: bloqueia o soco verdadeiro." },
    ],
    weakAgainst: [
      { champion: "Quinn", note: "Range e cegueira negam vitais fáceis." },
      { champion: "Renekton", note: "Pressão early pesada antes dos seus itens." },
      { champion: "Pantheon", note: "Burst impossível de ripostar bem; jogue para escalar." },
      { champion: "Kennen", note: "Poke e stun à distância: busque TP criativo." },
      { champion: "Poppy", note: "A Presença Inabalável anula seu Q e o stun do E na parede; troque só sem a W dela." },
    ],
    counterTips: [
      "Guarde o W para o golpe que define a troca — errar o timing é perder metade do HP.",
      "Contra range: vitais ainda curam; farme passivo e espere gank ou item power spike.",
      "Nunca comprometa o Q ofensivamente contra ganks: ele é sua única fuga.",
    ],
    altBuilds: [
      {
        name: "Perfuradora de Tanques",
        when: "Contra 2+ tanques com armadura alta",
        items: [
          { id: "ravenous-hydra" },
          { id: "black-cleaver", note: "Reduz a armadura para o time inteiro" },
          { id: "seryldas-grudge" },
        ],
        note: "True damage + penetração: muralhas viram alvos.",
      },
      {
        name: "Assassina Latera? Não: Duelista Imortal",
        when: "Contra burst mágico pesado",
        items: [
          { id: "maw-of-malmortius" },
          { id: "steraks-gage" },
          { id: "guardian-angel" },
        ],
        note: "Dois escudos + ressurreição: quase impossível de focar.",
      },
    ],
  },
];
