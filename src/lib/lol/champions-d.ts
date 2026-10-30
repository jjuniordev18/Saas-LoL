// ============================================================
// Campeões (parte 4/4) — Dr. Mundo, Pantheon, Cho'Gath, Kayle,
// Rumble, Urgot
// Builds baseadas no patch 16.21 (Temporada 2026)
// ============================================================
import type { Champion } from "./data";

export const CHAMPIONS_D: Champion[] = [
  // ------------------------------------------------------------
  // DR. MUNDO
  // ------------------------------------------------------------
  {
    id: "drmundo",
    name: "Dr. Mundo",
    title: "o Psicopata de Zaun",
    classes: ["tank", "lutador"],
    difficulty: 1,
    tier: "A",
    image: "DrMundo",
    color: "#6FA83F",
    playstyle: "Tanque de sustentação infinita",
    summary:
      "O médico mais louco de Zaun regenera mais rápido do que qualquer build consegue matar. Mundo empurra ondas com o Q, tanqueia torres com o R e no late game é literalmente imortal: Spirit Visage + regeneração passiva = o inimigo precisa de anti-cura, ou perde.",
    strengths: [
      "Regeneração absurda: 3% da vida máxima por segundo fora de combate",
      "Q acerta à distância e desacelera: farm seguro e poke",
      "R dá velocidade + regeneração gigante: dive e fuga",
    ],
    weaknesses: [
      "Anti-cura (Execução) corta metade do seu valor",
      "Sem CC de engage além do Q: dependente do time para iniciar",
      "Dano baixo no late: você é muro, não assassino",
    ],
    startItems: [
      { id: "dorans-shield", note: "Sustain máximo da rota" },
      { id: "health-potion" },
    ],
    boots: [
      { id: "plated-steelcaps", note: "Contra lutadores AD" },
      { id: "mercury-treads", note: "Contra AP e CC pesado" },
    ],
    coreItems: [
      { id: "heartsteel", note: "Vida infinita que escala o Q" },
      { id: "sunfire-aegis", note: "Dano em área + tank" },
      { id: "spirit-visage", note: "OBRIGATÓRIO: amplia TODA a sua regeneração" },
    ],
    situationalItems: [
      { id: "thornmail", note: "Anti-cura deles + anti-AD" },
      { id: "kaenic-rookern", note: "MR contra magos" },
      { id: "warmogs", note: "Com Heartsteel cheio, regen absurdo" },
      { id: "unending-despair", note: "Drenagem em teamfight" },
      { id: "force-of-nature", note: "Contra poke AP contínuo" },
    ],
    runes: {
      primaryTree: "resolve",
      keystone: "grasp",
      primary: ["demolish", "second-wind", "overgrowth"],
      secondaryTree: "precision",
      secondary: ["triumph", "legend-haste"],
      shards: ["+Velocidade de Habilidade", "+9 Adaptativo (AD)", "+Vida bônus (escala com nível)"],
      explanation:
        "Grasp + Overgrowth + Heartsteel: as TRÊS fontes de vida permanente do jogo. Segundo Wind + Doran's Shield tornam o poke deles inútil — Mundo simplesmente regenera tudo.",
    },
    altRunesNote:
      "Estilo briga longa: Conqueror + Resolve (Second Wind + Overgrowth) — o Q e o W enchem Conqueror rápido.",
    spells: [
      { id: "flash", note: "Corrigir posicionamento" },
      { id: "teleport", note: "Volta à rota e participa de objetivos" },
    ],
    skillPriority: ["Q", "E", "W"],
    abilities: [
      { key: "P", name: "Vai a Onde Dói", desc: "Regenera % da vida máxima por segundo, acelerado quando ferido. Anti-cura corta isso — fique atento." },
      { key: "Q", name: "Machado Contagiante", desc: "Arremessa o machado: dano baseado na vida ATUAL do alvo + desaceleração. Custa vida, mas devolve metade ao acertar." },
      { key: "W", name: "Coração Zumbi", desc: "Tanque de dano em área: converte parte em cura. Ativo contra ondas e brigas próximas." },
      { key: "E", name: "Socos Amassadores", desc: "Golpe forte contra minion (execute) e campeões; com carga dupla para bater de novo." },
      { key: "R", name: "Máximo Esforço Mundo", desc: "Paga vida e ganha regeneração GIGANTE + velocidade de movimento + dano de ataque. Dive, fuga ou all-in." },
    ],
    comboTips: [
      "Q no alvo fugindo: dano por vida atual + slow — farm ou poke, sempre vale.",
      "R antes do all-in: velocidade + regen cobrem o custo de vida.",
      "W nas ondas: a cura do W + passiva mantém você cheio sem voltar à base.",
    ],
    tips: {
      early: [
        "Farm com Q à distância quando o matchup for ruim: machado devolve vida ao acertar.",
        "Nunca Q com pouca vida: o custo mata mais que o inimigo.",
        "Antes do 6 você é fraco: jogue com Grasp e espere itens.",
      ],
      mid: [
        "Heartsteel chegou? Procure procs batendo nos tanques inimigos.",
        "Empurre e TP nos objetivos: Mundo sob torre inimiga é quase impossível de matar.",
        "Fique atento ao anti-cura inimigo: se compraram, jogue mais seguro.",
      ],
      late: [
        "Você é o muro do Baron: entre primeiro, tanque tudo, saia com R.",
        "Q no carry inimigo de vida baixa tira 25%+ de uma vez.",
        "Spirit Visage + Warmog's: recue 5 segundos da briga e volte CHEIO.",
      ],
    },
    strongAgainst: [
      { champion: "Olaf", note: "O dano verdadeiro dele é irrelevante: sua regeneração supera a cura." },
      { champion: "Sett", note: "Trocas longas são seu terreno: regen + Grasp vencem o soco." },
      { champion: "Tryndamere", note: "Ele bate 5 segundos? Você regenera 20% de vida depois — Thornmail cedo." },
    ],
    weakAgainst: [
      { champion: "Fiora", note: "O dano VERDADEIRO dela ignora toda sua vida e a cura dela supera o poke." },
      { champion: "Gwen", note: "Dano % vida + cura dela: poke do Q não faz nada contra a névoa." },
      { champion: "Camille", note: "True damage + mobilidade: ela farm de graça e escala melhor." },
    ],
    counterTips: [
      "Viu anti-cura no inimigo? Troque Spirit Visage para 2º item e jogue de tanque puro.",
      "Contra true damage (Fiora/Camille), resistências valem menos: invista em dano + CC do time.",
      "Guarde o R para escapar do all-in, não só para entrar.",
    ],
    altBuilds: [
      {
        name: "Anti-AD Total",
        when: "Time inimigo com 3+ fontes de dano físico",
        items: [
          { id: "thornmail" },
          { id: "sunfire-aegis" },
          { id: "randuins-omen" },
        ],
        note: "Armadura + anti-cura: eles param de te bater por tédio.",
      },
      {
        name: "Mundo Bilhador",
        when: "Seu time já tem 2 tanques e você precisa de dano",
        items: [
          { id: "titanic-hydra", note: "Dano escala com a sua vida absurda" },
          { id: "spirit-visage" },
          { id: "heartsteel" },
        ],
        note: "Titanic com 5000 de vida bate como um lutador fedado.",
      },
    ],
  },

  // ------------------------------------------------------------
  // PANTHEON
  // ------------------------------------------------------------
  {
    id: "pantheon",
    name: "Pantheon",
    title: "a Lança Resoluta",
    classes: ["lutador", "duelista"],
    difficulty: 1,
    tier: "A",
    image: "pantheon",
    color: "#C8A24B",
    playstyle: "Dominador de early game",
    summary:
      "O espartano vence a rota nos primeiros 15 minutos e transforma vantagem em mapa: R salta metade do mapa, W trava o alvo e o Q pune qualquer um que erre posicionamento. Se você não fechar o jogo com Pantheon, ele fica fraco — seja agressivo.",
    strengths: [
      "Melhor nível 1–6 da rota: Q poke + W stun vence qualquer troca",
      "R é engage global: influencia todas as rotas",
      "E bloqueia TODO o dano frontal: dive e fuga seguros",
    ],
    weaknesses: [
      "Escala mal: depois do 20º minuto você precisa fechar",
      "E só protege a FRENTE: burst por trás te mata",
      "Sem all-in depois que o inimigo compra armadura",
    ],
    startItems: [
      { id: "dorans-blade", note: "Dano para o poke do Q" },
      { id: "health-potion" },
    ],
    boots: [
      { id: "plated-steelcaps", note: "Padrão AD" },
      { id: "ionian-boots", note: "Mais Ws e Es: spam de utilidade" },
    ],
    coreItems: [
      { id: "sundered-sky", note: "Dano crítico garantido + cura" },
      { id: "black-cleaver", note: "Q e W aplicam stacks instantâneos" },
      { id: "deaths-dance", note: "Sobreviva para usar o R de novo" },
    ],
    situationalItems: [
      { id: "steraks-gage", note: "Escudo para dives" },
      { id: "maw-of-malmortius", note: "Contra burst AP" },
      { id: "seryldas-grudge", note: "Penetração + slow" },
      { id: "guardian-angel", note: "Seguro para R agressivo" },
      { id: "youmuus-ghostblade", note: "Velocidade para alcançar alvos" },
    ],
    runes: {
      primaryTree: "precision",
      keystone: "conqueror",
      primary: ["triumph", "legend-haste", "last-stand"],
      secondaryTree: "resolve",
      secondary: ["bone-plating", "unflinching"],
      shards: ["+Velocidade de Habilidade", "+9 Adaptativo (AD)", "+Vida bônus (escala com nível)"],
      explanation:
        "Conqueror enche com Q + básico + W em 2 segundos — Pantheon vence o early ANTES de Conqueror encher. Legend: Haste dá mais Ws (mais stuns = mais vitórias).",
    },
    altRunesNote:
      "Poke agressivo de rota: Arcane Comet + Sorcery (Manaflow + Scorch) transforma o Q em canhão de poke.",
    spells: [
      { id: "flash", note: "W Flash é o combo decisivo" },
      { id: "ignite", note: "Feche abates no early — seu pico de poder" },
    ],
    skillPriority: ["Q", "E", "W"],
    abilities: [
      { key: "P", name: "Força Mortal", desc: "A cada 5 habilidades, o próximo ataque/habilidade crita. Q com proc = metade da vida do alvo." },
      { key: "Q", name: "Lança Cometária", desc: "Estocada ou arremesso (segurar): dano alto e crit com proc de passiva. Seu poke principal." },
      { key: "W", name: "Salto de Aegis", desc: "Salto até o alvo que ATORDOA e dá escudo. O combo de all-in." },
      { key: "E", name: "Aegis de Azure", desc: "Bloqueia TODO o dano vindo da FRENTE por 1,5s e acelera ao final. Dive sob torre sem morrer." },
      { key: "R", name: "Corrida Estelar", desc: "Salto global: prepeara e aterrissa causando dano em área. Rotacione por metade do mapa." },
    ],
    comboTips: [
      "Q poke até a passiva carregar → W (stun) → Q com proc crítico: metade da vida some.",
      "E no momento do burst inimigo (R do Darius, soco do Sett): dano zerado.",
      "R no dragão com o inimigo empurrando topo: troque de rota e crie 4v4 + você.",
    ],
    tips: {
      early: [
        "Nível 1 pegue Q e poke TUDO: com ignite, primeiro sangue é seu.",
        "Proc de passiva + W = atordoamento garantido: conte as habilidades.",
        "E sob torre inimiga te salva do dive: bloqueia o tiro da torre também!",
      ],
      mid: [
        "Com 2 itens, R para a rota do bot e mate o ADC: você vence qualquer 1v1 no early-mid.",
        "Não farme: pressione torres e rode o mapa — seu valor é o tempo.",
        "Comunique os timings do R: o time precisa se posicionar quando você aterrissar.",
      ],
      late: [
        "Você não vence o late: force objetivos e termine antes do 30.",
        "Em teamfight, W no carry ou E para proteger o SEU carry do assassino.",
        "R defensivo para chegar ao Baron a tempo também é válido.",
      ],
    },
    strongAgainst: [
      { champion: "K'Sante", note: "Poke do Q antes das resistências dele: o early dele não existe." },
      { champion: "Nasus", note: "Punção nível 1: o cachorro não farma em paz até o 6." },
      { champion: "Kayle", note: "Ela é fraca demais no early: mate toda vez que o Q carregar." },
    ],
    weakAgainst: [
      { champion: "Malphite", note: "Armadura acumulada + Grasp: seu poke morre no early-mid." },
      { champion: "Jax", note: "Counter Strike bloqueia W+Q e ele escala melhor que você." },
      { champion: "Renekton", note: "Trocas curtas com escudo dele anulam seu combo e ele sustenta o early." },
    ],
    counterTips: [
      "Contra tanques, troque Ignite por TP e escale com Black Cleaver cedo.",
      "Procure kills em OUTRAS rotas com o R: seu early é global, não só de topo.",
      "Late chegou? Divida com E: você sobrevive a ganks e cria pressão lateral.",
    ],
    altBuilds: [
      {
        name: "Assassino de Rota",
        when: "Contra campeões fracos no early (Kayle, Nasus, Kled)",
        items: [
          { id: "eclipse", note: "Dano % vida + escudo" },
          { id: "youmuus-ghostblade" },
          { id: "seryldas-grudge" },
        ],
        note: "One-shot no Q com proc: poke até ele não poder mais farmar.",
      },
      {
        name: "Frontline Utilitário",
        when: "Time precisa de tanque e você já está atrás",
        items: [
          { id: "black-cleaver" },
          { id: "steraks-gage" },
          { id: "deaths-dance" },
        ],
        note: "W stun + E bloqueio: você ainda decide teamfights.",
      },
    ],
  },

  // ------------------------------------------------------------
  // CHO'GATH
  // ------------------------------------------------------------
  {
    id: "chogath",
    name: "Cho'Gath",
    title: "o Terror do Vazio",
    classes: ["tank", "mago"],
    difficulty: 2,
    tier: "B",
    image: "Chogath",
    color: "#9A5BC4",
    playstyle: "Tanque de escalação infinita",
    summary:
      "O monstro do Vazio come campeões e GROW literalmente: cada R com abate dá vida permanente — Cho'Gath com 8 stacks tem 4000+ de vida no 25º minuto. O Q arremessa, o W silencia e o E empurra ondas: ele é um tanque com dano de mago.",
    strengths: [
      "R dá vida PERMANENTE por abate: escala sozinho",
      "Q + W = 2 segundos de CC em cadeia",
      "Farm seguro com E: onda some sem entrar no alcance",
    ],
    weaknesses: [
      "Q é lento: inimigos bons desviam sempre",
      "Mana pesada no early: sem Manaflow você farm com fome",
      "Mobilidade zero: kiting te mata",
    ],
    startItems: [
      { id: "dorans-ring", note: "Mana para o spam de Q/E" },
      { id: "health-potion" },
      { id: "health-potion" },
    ],
    boots: [
      { id: "mercury-treads", note: "CC não pode te parar (você é lento)" },
      { id: "plated-steelcaps", note: "Contra AD puro" },
    ],
    coreItems: [
      { id: "heartsteel", note: "Sua vida escala DUAS vezes (Heartsteel + R)" },
      { id: "sunfire-aegis", note: "Dano para farm + tank" },
      { id: "spirit-visage", note: "Regeneração da passiva ampliada" },
    ],
    situationalItems: [
      { id: "abyssal-mask", note: "Seu Q/W amplificam o AP do time" },
      { id: "kaenic-rookern", note: "Contra AP pesado" },
      { id: "thornmail", note: "Contra básicos e cura" },
      { id: "rylais", note: "Seu Q slow + Rylai = prender tudo" },
      { id: "unending-despair", note: "Drenagem no meio do time" },
    ],
    runes: {
      primaryTree: "resolve",
      keystone: "aftershock",
      primary: ["demolish", "second-wind", "overgrowth"],
      secondaryTree: "sorcery",
      secondary: ["manaflow-band", "transcendence"],
      shards: ["+Velocidade de Habilidade", "+9 Adaptativo (AP)", "+Vida bônus (escala com nível)"],
      explanation:
        "Aftershock dispara SEMPRE que o Q acerta (atordoa) — resistências grátis no all-in. Manaflow Band resolve seu maior problema: mana para farm com E e Q no early.",
    },
    altRunesNote:
      "Dano de rota: Arcane Comet + Sorcery (Manaflow + Transcendence) — cada Q acertado vira poke pesado.",
    spells: [
      { id: "flash", note: "Q Flash é o engage decisivo" },
      { id: "teleport", note: "Volta com stacks e participa de dragões" },
    ],
    skillPriority: ["Q", "E", "W"],
    abilities: [
      { key: "P", name: "Camada Carnal", desc: "Abates com R dão vida máxima permanente (stacks visíveis no buff). Cho'Gath GROW de verdade." },
      { key: "Q", name: "Fenda", desc: "Erupção em área que arremessa e atordoa. É lenta — acerte em alvos CC ou de costas." },
      { key: "W", name: "Grito Selvagem", desc: "Silêncio em cone: cancela dashes e habilidades. Combo com Q." },
      { key: "E", name: "Espinhos Vorazes", desc: "Ativo: próximos 3 ataques lançam espinhos que empurram onda e punem quem chega perto." },
      { key: "R", name: "Devorar", desc: "Dano verdadeiro GIGANTE; se ABATER, ganha stack de vida permanente (dobrado em epic monster)." },
    ],
    comboTips: [
      "W (silêncio, não pode dashar) → Q no mesmo lugar: atordoamento garantido.",
      "Q Flash em quem foge: o timing do Flash cobre a demora do Q.",
      "R para EXECUTAR (dano verdadeiro), não para iniciar: é seu finisher.",
    ],
    tips: {
      early: [
        "Farm com E: os espinhos empurram a onda sem entrar no alcance do inimigo.",
        "Guarde mana: Q custa caro — só use em all-ins confirmados.",
        "Nível 6: R em minion GRANDE (carrinho) também dá stack? Não — só campeões e épicos dão stacks DORADOS.",
      ],
      mid: [
        "Procure R em dragão/herald: stack dobrado + objetivo para o time.",
        "Com Heartsteel, agrupe com o time: você é o muro do Baron.",
        "W em quem for engajar: silêncio cancela o combo inimigo inteiro.",
      ],
      late: [
        "Com 6+ stacks, você tem 4500+ de vida: seja o frontline ABSOLUTO.",
        "Q Flash no carry inimigo decide teamfight — pratique o timing.",
        "R também serve de anti-dive: coma o assassino que pulou no seu ADC.",
      ],
    },
    strongAgainst: [
      { champion: "Tryndamere", note: "W silencia antes do R dele e Q+W = 2s parado: o barco não navega." },
      { champion: "Garen", note: "Silêncio cancela o Q dele e sua vida com stacks supera o R dele." },
      { champion: "Pantheon", note: "Depois do 6, Aftershock + stacks: o early dele vira inútil." },
    ],
    weakAgainst: [
      { champion: "Fiora", note: "True damage + Parry no Q: Cho'Gath é o alvo favorito dela." },
      { champion: "Camille", note: "R dela isola e o W escapa do seu Q lento." },
      { champion: "Renekton", note: "Poke com Q + escudo: ele troca e sai antes do seu combo." },
    ],
    counterTips: [
      "Contra duelistas, farme com E e espere ganks: seu combo precisa de ajuda.",
      "Guarde o W para cancelar o dash/engage deles, não para poke.",
      "Stacks do R não morrem: se perder a rota, R em dragão e volte mais forte.",
    ],
    altBuilds: [
      {
        name: "AP Terror do Vazio",
        when: "Time precisa de dano mágico e você está confiado",
        items: [
          { id: "riftmaker", note: "AP + vida + cura" },
          { id: "liandrys", note: "Q e W derretem tanques" },
          { id: "rylais" },
        ],
        note: "Dano absurdo, mas você perde a tanqueza: só com vantagem.",
      },
      {
        name: "Anti-AP Completo",
        when: "2+ magos no time inimigo",
        items: [
          { id: "kaenic-rookern" },
          { id: "force-of-nature" },
          { id: "spirit-visage" },
        ],
        note: "MR total: os magos inimigos desistem de você.",
      },
    ],
  },

  // ------------------------------------------------------------
  // KAYLE
  // ------------------------------------------------------------
  {
    id: "kayle",
    name: "Kayle",
    title: "a Justa Radiante",
    classes: ["duelista", "mago"],
    difficulty: 2,
    tier: "B",
    image: "kayle",
    color: "#E8C34A",
    playstyle: "Hipercarregador de late game",
    summary:
      "A arcanja escala de fraca a deusa: nos níveis 1–11 você sofre, no 16 você é um hypercarry de alcance infinito. Kayle é o pick para quem aguenta jogar 'debaixo da torre' por 15 minutos e quer carregar o late com ataques de alcance global.",
    strengths: [
      "Nível 16: ataques de ALCANCE GLOBAL com dano verdadeiro",
      "R dá invulnerabilidade para você ou um aliado",
      "Passiva escala sozinha: seu late é garantido se farmar",
    ],
    weaknesses: [
      "Levels 1–11 são dos PIORES do jogo: qualquer lutador te destrói",
      "Depende de farm e de não morrer: cada morte atrasa seu deus",
      "Sem CC nem mobilidade: posicionamento é tudo",
    ],
    startItems: [
      { id: "dorans-ring", note: "Mana para o poke do Q" },
      { id: "health-potion" },
      { id: "health-potion" },
    ],
    boots: [
      { id: "berserker-greaves", note: "AS para o on-hit" },
      { id: "plated-steelcaps", note: "Contra lutadores agressivos" },
    ],
    coreItems: [
      { id: "nashors-tooth", note: "AP + AS: o motor do on-hit" },
      { id: "riftmaker", note: "Dano crescente + cura para brigas longas" },
      { id: "ravenous-hydra", note: "Onda + omnivamp" },
    ],
    situationalItems: [
      { id: "wits-end", note: "MR + on-hit contra AP" },
      { id: "zhonyas", note: "Sobreviva ao burst antes do R" },
      { id: "rabaddons", note: "AP máximo no late" },
      { id: "botrk", note: "Contra tanques" },
      { id: "void-staff", note: "Quando comprarem MR" },
    ],
    runes: {
      primaryTree: "precision",
      keystone: "lethal-tempo",
      primary: ["presence-of-mind", "legend-alacrity", "last-stand"],
      secondaryTree: "resolve",
      secondary: ["second-wind", "bone-plating"],
      shards: ["+10% Velocidade de Ataque", "+9 Adaptativo (AD)", "+Vida bônus (escala com nível)"],
      explanation:
        "Lethal Tempo + Nashor's: no 16, você ataca em alcance GLOBAL com velocidade absurda. Second Wind + Doran's Ring tornam o early 'sóbrio' suportável.",
    },
    altRunesNote:
      "Poke do early: Arcane Comet + Sorcery (Manaflow + Scorch) para farmar de longe com Q — troque no 11 quando a passiva virar ranged.",
    spells: [
      { id: "flash", note: "Corrigir posicionamento no late" },
      { id: "teleport", note: "Volte à rota sem perder farm — cada tropa conta" },
    ],
    skillPriority: ["Q", "E", "W"],
    abilities: [
      { key: "P", name: "Ascensão Divina", desc: "Evolui em níveis 6/11/16: ganha AoE, on-hit e, por fim, ataques de alcance GLOBAL com dano verdadeiro." },
      { key: "Q", name: "Cintilante", desc: "Projétil que desacelera e aplica dano baseado em resistências — poke do early." },
      { key: "W", name: "Bênkão Celestial", desc: "Cura + velocidade para você ou um aliado. Escape ou support." },
      { key: "E", name: "Lâmina Estelar", desc: "Ataque aprimorado com dano baseado na vida FALTA do alvo — execute do poke." },
      { key: "R", name: "Julgamento Divino", desc: "Invulnerabilidade para você ou aliado + espadas caem em área. Salve o carry ou garanta seu all-in." },
    ],
    comboTips: [
      "Q (slow) → E no alvo ferido: o poke básico do early.",
      "R em VOCÊ no all-in: espadas caem e o inimigo perde o burst.",
      "Nível 16+: básicos de alcance global — posiciona-se ATRÁS do time e meta fogo.",
    ],
    tips: {
      early: [
        "NÃO tente trocar: farme com Q/E de longe e aceite a rota perdida até o 11.",
        "Doran's Ring + Second Wind + TP: a fórmula de sobrevivência.",
        "Wave sob torre é sua amiga: E executa carros sob pressão.",
      ],
      mid: [
        "Nível 11 (on-hit AoE): comece a brigas laterais com cautela.",
        "R para SALVAR o jungler no dragão também vale: use globalmente.",
        "Farm > kills: cada nível te aproxima do deus.",
      ],
      late: [
        "Nível 16 = deus: básicos globais com dano verdadeiro EXECUTAM tanques.",
        "R no seu ADC se o assassino inimigo for o problema.",
        "Splitpush cauteloso: você vence 1v1 late, mas não tem escape.",
      ],
    },
    strongAgainst: [
      { champion: "Ornn", note: "Dano % vida + true damage no 16: o tanque dele vira papel." },
      { champion: "Cho'Gath", note: "Ele é lento: poke com Q e escale para o late livre." },
      { champion: "Sion", note: "Same: tanque lento que não alcança seu farm de longe." },
    ],
    weakAgainst: [
      { champion: "Pantheon", note: "Ele te mata no early toda vez: TP + farm sob torre é o máximo." },
      { champion: "Darius", note: "Ele avança no seu farm e o 1v1 é perdido até o 16." },
      { champion: "Renekton", note: "Trocas curtas constantes: você nunca farma em paz." },
    ],
    counterTips: [
      "Contra agressores, Doran's Ring + Second Wind + TP: sobreviva, é TUDO que importa.",
      "Peça jungler para campar a rota: seu early é o mais gankável do jogo.",
      "W para fugir, NÃO para poke: a mobilidade é sua única defesa.",
    ],
    altBuilds: [
      {
        name: "On-Hit Tanque",
        when: "Contra times de burst que matam você antes do R",
        items: [
          { id: "wits-end" },
          { id: "botrk" },
          { id: "spirit-visage" },
        ],
        note: "Menos dano, mas você chega VIVA ao nível 16 — que é o objetivo.",
      },
      {
        name: "AP Burst Divino",
        when: "Time cheio de AD e você quer dano máximo",
        items: [
          { id: "nashors-tooth" },
          { id: "rabaddons" },
          { id: "zhonyas" },
        ],
        note: "E com AP alto executa de metade da tela.",
      },
    ],
  },

  // ------------------------------------------------------------
  // RUMBLE
  // ------------------------------------------------------------
  {
    id: "rumble",
    name: "Rumble",
    title: "a Ameaça Mecanizada",
    classes: ["mago", "lutador"],
    difficulty: 3,
    tier: "A",
    image: "rumble",
    color: "#D2622A",
    playstyle: "Zonador de área AP",
    summary:
      "O piloto de Zaun gerencia um medidor de CALOR: entre 50–100 você tem bônus, acima disso fica bloqueado. Rumble vence com áreas: Q chama em cone, R solta um raio de destruição que decide teamfights inteiras. Master o calor e você domina a rota.",
    strengths: [
      "Q empurra onda e poke ao mesmo tempo: controle total da rota",
      "R é a melhor ultimate de zona do jogo: decide objetivos",
      "Escudo do W + velocidade: trocas seguras",
    ],
    weaknesses: [
      "Gerenciar calor é difícil: bloqueio no momento errado perde a troca",
      "Fraco contra dashes que saem da sua área",
      "Mana dependente no early",
    ],
    startItems: [
      { id: "dorans-ring", note: "Mana + AP para o Q" },
      { id: "health-potion" },
    ],
    boots: [
      { id: "sorcerers-shoes", note: "Penetração mágica: Q e R doem mais" },
      { id: "plated-steelcaps", note: "Contra AD agressivo" },
    ],
    coreItems: [
      { id: "liandrys", note: "Dano % vida: sinergia com Q e R contínuos" },
      { id: "riftmaker", note: "Dano crescente + cura: briga longa" },
      { id: "rylais", note: "Q e R desaceleram: impossível fugir" },
    ],
    situationalItems: [
      { id: "zhonyas", note: "Contra burst e dive" },
      { id: "void-staff", note: "Quando comprarem MR" },
      { id: "shadowflame" , note: "Penetração + execute" },
      { id: "morellonomicon", note: "Contra cura (Mundo, Aatrox)" },
      { id: "cryptbloom", note: "Penetração + cura para o time" },
    ],
    runes: {
      primaryTree: "sorcery",
      keystone: "arcane-comet",
      primary: ["manaflow-band", "transcendence", "scorch"],
      secondaryTree: "resolve",
      secondary: ["second-wind", "bone-plating"],
      shards: ["+Velocidade de Habilidade", "+9 Adaptativo (AP)", "+Vida bônus (escala com nível)"],
      explanation:
        "Arcane Comet + Q: cada chama acerta Comet no poke. Manaflow sustenta o spam de calor, Scorch pune cada troca. Second Wind segura o all-in até seu R chegar.",
    },
    altRunesNote:
      "All-in de briga longa: Conqueror + Resolve — o Q contínuo enche rápido e Riftmaker cura mais.",
    spells: [
      { id: "flash", note: "R Flash para zonas surpresa" },
      { id: "teleport", note: "R global no dragão: sua ultimate viaja pelo mapa" },
    ],
    skillPriority: ["Q", "E", "W"],
    abilities: [
      { key: "P", name: "Junkyard Titan", desc: "Medidor de calor: 50+ dá bônus (Q/W/E ficam mais fortes), 100 bloqueia tudo por 6s. ZONA DE PERIGO." },
      { key: "Q", name: "Sopro Flamejante", desc: "Chama em cone por 3s: empurra onda, poke e zona de dano. Fica MAIS forte entre 50–99 de calor." },
      { key: "W", name: "Escudo Aprimorado", desc: "Escudo + velocidade; com bônus de calor, escudo maior." },
      { key: "E", name: "Arremesso Eletro-Harpo", desc: "Duas harpas que desaceleram e acertam à distância — poke seguro e setup do Q." },
      { key: "R", name: "Penalidade Igualitária", desc: "Míssil que cria uma TRILHA de destruição: desacelera e causa dano % vida por segundo. A melhor zona do jogo." },
    ],
    comboTips: [
      "E (slow) → Q na cara: o combo de troca — saia com W.",
      "R na RETA de fuga do inimigo: ele atravessa a trilha inteira ou fica nela.",
      "Guarde 50–70 de calor antes do all-in: Q e W bônus vencem trocas.",
    ],
    tips: {
      early: [
        "Gerencie calor: nunca fique em 80+ sem motivo — o bloqueio te mata.",
        "Q empurra onda E poke: controle o reset da onda para farmar seguro.",
        "Nível 6: R na onda + Q = dive ou kill garantido com jungler.",
      ],
      mid: [
        "R no BARON/dragão pit: a trilha divide o time inimigo ao meio.",
        "TP no flanco: R de trás vira teamfight instantânea.",
        "Liandry's chegou? Seu poke derrete tanques: force brigas.",
      ],
      late: [
        "R em corredores (Baron, mid lane): zona intransponível = objetivo ganho.",
        "Você é o ZONA, não o assassino: force o inimigo a atravessar seu R.",
        "Zhonyas dentro do próprio R: a trilha continua enquanto você é invulnerável.",
      ],
    },
    strongAgainst: [
      { champion: "Mordekaiser", note: "R do Morde? Seu R continua dentro do reino dele e o Q derrete." },
      { champion: "Garen", note: "Ele precisa chegar perto: Q + slow das harpas = poke eterno." },
      { champion: "Nasus", note: "Onda empurrada + poke: o cachorro nunca farma em paz." },
    ],
    weakAgainst: [
      { champion: "Camille", note: "Dash do W dela sai da sua zona e o burst vence antes do R." },
      { champion: "Fiora", note: "Ela se cura com o poke e o Parry pune o all-in." },
      { champion: "Jax", note: "Counter Strike + dash: seu Q não acerta e o all-in dele vence." },
    ],
    counterTips: [
      "Contra dashes, guarde o E: o slow das harpas é sua única defesa.",
      "Nunca all-in com calor bloqueado: recue com W e espere 6 segundos.",
      "Se o matchup é perdido, farme com E de longe e escale para Liandry's.",
    ],
    altBuilds: [
      {
        name: "Burst de Emboscada",
        when: "Contra campeões frágeis na rota",
        items: [
          { id: "shadowflame" },
          { id: "stormsurge" },
          { id: "sorcerers-shoes" },
        ],
        note: "R + Q one-shot squishies: pune quem sai de posição.",
      },
      {
        name: "Tanque de Zona",
        when: "Time precisa de frontline e você quer sobreviver",
        items: [
          { id: "riftmaker" },
          { id: "rylais" },
          { id: "zhonyas" },
        ],
        note: "Zona dura mais: seu R vale mais que seu dano.",
      },
    ],
  },

  // ------------------------------------------------------------
  // URGOT
  // ------------------------------------------------------------
  {
    id: "urgot",
    name: "Urgot",
    title: "o presidente do Dreadnought",
    classes: ["lutador"],
    difficulty: 2,
    tier: "A",
    image: "urgot",
    color: "#A33B3B",
    playstyle: "Antiaéreo de longo alcance",
    summary:
      "O ex-executor de Noxus ataca de LONGE como um ADC com vida de lutador. O Q poke, o W metralha e o E agarra; o R executa com dano verdadeiro GIGANTE e causa medo em todo o mapa — quem vê o R de Urgot foge. Tanque que mata de longe.",
    strengths: [
      "Alcance de ADC com vida de lutador: poke seguro",
      "R executa 25% da vida com dano verdadeiro e causa medo em área",
      "E + R = agarrão impossível de escapar",
    ],
    weaknesses: [
      "Sem mobilidade real: kiting em campo aberto é possível contra você",
      "W consome muita mana no early",
      "R precisa de precisão: errar o execute desperdiça o engage",
    ],
    startItems: [
      { id: "dorans-blade", note: "Dano para o poke do Q" },
      { id: "health-potion" },
    ],
    boots: [
      { id: "plated-steelcaps", note: "Padrão AD da rota" },
      { id: "mercury-treads", note: "Contra AP e CC pesado" },
    ],
    coreItems: [
      { id: "black-cleaver", note: "W metralha stacks instantâneos" },
      { id: "sundered-sky", note: "Dano + cura nas trocas longas" },
      { id: "steraks-gage", note: "Vida para brigas de R" },
    ],
    situationalItems: [
      { id: "deaths-dance", note: "Contra burst físico" },
      { id: "thornmail", note: "Contra básicos e cura" },
      { id: "maw-of-malmortius", note: "Contra burst AP" },
      { id: "seryldas-grudge", note: "Penetração + slow nas habilidades" },
      { id: "guardian-angel", note: "Seguro para R agressivo" },
    ],
    runes: {
      primaryTree: "precision",
      keystone: "conqueror",
      primary: ["triumph", "legend-alacrity", "cut-down"],
      secondaryTree: "resolve",
      secondary: ["bone-plating", "unflinching"],
      shards: ["+10% Velocidade de Ataque", "+9 Adaptativo (AD)", "+Vida bônus (escala com nível)"],
      explanation:
        "Conqueror enche com o W metralhadora — Urgot vira um tanque que cura em briga longa. Cut Down pune os tanques de vida alta que seu R adora executar.",
    },
    altRunesNote:
      "Poke agressivo: Arcane Comet + Sorcery (Manaflow + Scorch) transforma o Q em canhão de lane.",
    spells: [
      { id: "flash", note: "E Flash ou R Flash: os combos decisivos" },
      { id: "ghost", note: "Colar no alvo para o execute" },
    ],
    skillPriority: ["Q", "W", "E"],
    abilities: [
      { key: "P", name: "Zona de Destino", desc: "Cada perna tem escudo próprio; ao acertar habilidades, as pernas disparam tiros cônicos. Poke passivo." },
      { key: "Q", name: "Bomba Corrosiva", desc: "Explosão à distância que desacelera e aplica dano — poke seguro e setup do E." },
      { key: "W", name: "Purga", desc: "Metralhadora que ataca o inimigo próximo: dano em área com tiro em cadeia. O seu dano principal." },
      { key: "E", name: "Investida Implacável", desc: "Dash que ARRASTA o primeiro campeão atingido e atordoa contra paredes." },
      { key: "R", name: "Medo Superior", desc: "Arremesso que EXECUTA com dano verdadeiro se o alvo estiver abaixo de 25% de vida + MEDO em área nos sobreviventes." },
    ],
    comboTips: [
      "Q (slow) → E agarra → W metralha: o combo de troca padrão.",
      "R no alvo abaixo de 25%: execute + medo no time inimigo = fight ganha.",
      "Posicione-se de lado: as pernas da passiva disparam para quem está na FRENTE.",
    ],
    tips: {
      early: [
        "Poke com Q à distância: Urgot tem alcance de ADC na rota de lutadores.",
        "W gasta MUITA mana: use só em trocas, não para farm.",
        "E contra parede = atordoamento extra: posicione-se perto de paredes.",
      ],
      mid: [
        "Com Black Cleaver, procure brigas: seu W rasga o frontline inteiro.",
        "R em quem foge: o medo em área pega 2-3 inimigos juntos.",
        "Splitpush com cautela: você vence 1v1, mas não tem escape real.",
      ],
      late: [
        "Você é o anti-dive: W no assassino que pular no seu carry.",
        "R decide objetivos: execute o Baron stealer ou o jungler inimigo.",
        "Posicionamento atrás do frontline: você ataca de longe, NÃO entre primeiro.",
      ],
    },
    strongAgainst: [
      { champion: "Illaoi", note: "Poke do Q antes dos tentáculos e o R executa por cima do R dela." },
      { champion: "Garen", note: "Ele nunca alcança: Q poke + W metralha em range." },
      { champion: "Sett", note: "Trocas à distância: o soco dele não acerta quem atira de longe." },
    ],
    weakAgainst: [
      { champion: "Camille", note: "Dash do W dela esquiva o E e o R isola você sem passiva." },
      { champion: "Jax", note: "Counter Strike bloqueia o W inteiro e ele escala melhor." },
      { champion: "Riven", note: "Shields + dashes: ela entra, mata e sai antes do seu combo." },
    ],
    counterTips: [
      "Contra mobilidade, guarde o E: o agarre é sua única forma de vencer.",
      "Mana no early: Doran's Blade + Q poke, espere 2 itens para brigas.",
      "R com Flash: pratique o combo para o execute inesperado.",
    ],
    altBuilds: [
      {
        name: "Anti-Tanque Metralhadora",
        when: "Dois ou mais tanques inimigos",
        items: [
          { id: "botrk" },
          { id: "black-cleaver" },
          { id: "seryldas-grudge" },
        ],
        note: "W + % vida + penetração: tanques derretem no metralhamento.",
      },
      {
        name: "Tanque de Frente",
        when: "Time sem frontlane e brigas constantes",
        items: [
          { id: "deaths-dance" },
          { id: "steraks-gage" },
          { id: "thornmail" },
        ],
        note: "Você continua atirando de longe, só que AGUENTA muito mais.",
      },
    ],
  },
];
