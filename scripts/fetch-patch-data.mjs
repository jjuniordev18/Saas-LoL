import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const DATA_DRAGON_VERSIONS_URL = "https://ddragon.leagueoflegends.com/api/versions.json";

// Fonte de analytics para win rates (LoLalytics)
// Atenção: este site renderiza dados via JavaScript após o carregamento.
// O scraping abaixo é best-effort; se não encontrar dados válidos, lança erro
// e não insere nada no banco (evita poluir com dados incompletos ou fictícios).
const ANALYTICS_URL = "https://lolalytics.com/lol/tierlist/?lane=top";

// Mapeia nomes de campeões do LoLalytics para os ids internos do app.
// Mantenha sincronizado com src/lib/lol/champions-*.ts
const CHAMPION_NAME_TO_ID = {
  aatrox: "aatrox",
  akali: "akali",
  akshan: "akshan",
  alistar: "alistar",
  amumu: "amumu",
  anivia: "anivia",
  annie: "annie",
  aphelios: "aphelios",
  ashe: "ashe",
  azir: "azir",
  bard: "bard",
  blitzcrank: "blitzcrank",
  brand: "brand",
  braum: "braum",
  briar: "briar",
  caitlyn: "caitlyn",
  camille: "camille",
  cassiopeia: "cassiopeia",
  chogath: "chogath",
  corki: "corki",
  darius: "darius",
  diana: "diana",
  drmundo: "drmundo",
  draven: "draven",
  ekko: "ekko",
  elise: "elise",
  evelynn: "evelynn",
  ezreal: "ezreal",
  fiddlesticks: "fiddlesticks",
  fiora: "fiora",
  fizz: "fizz",
  galio: "galio",
  gangplank: "gangplank",
  garen: "garen",
  gnar: "gnar",
  gragas: "gragas",
  graves: "graves",
  gwen: "gwen",
  hecarim: "hecarim",
  illaoi: "illaoi",
  irelia: "irelia",
  ivern: "ivern",
  janna: "janna",
  jarvaniv: "jarvaniv",
  jax: "jax",
  jayce: "jayce",
  jhin: "jhin",
  jinx: "jinx",
  ksante: "ksante",
  kaisa: "kaisa",
  kalista: "kalista",
  karma: "karma",
  karthus: "karthus",
  kassadin: "kassadin",
  katarina: "katarina",
  kayle: "kayle",
  kayn: "kayn",
  kennen: "kennen",
  khazix: "kha'zix",
  kindred: "kindred",
  leblanc: "leblanc",
  leesin: "leesin",
  leona: "leona",
  lillia: "lillia",
  lissandra: "lissandra",
  lucian: "lucian",
  lulu: "lulu",
  lux: "lux",
  malphite: "malphite",
  malzahar: "malzahar",
  maokai: "maokai",
  masteryi: "masteryi",
  mordekaiser: "mordekaiser",
  morgana: "morgana",
  nautilus: "nautilus",
  neeko: "neeko",
  nidalee: "nidalee",
  nocturne: "nocturne",
  nunu: "nunu",
  olaf: "olaf",
  orianna: "orianna",
  ornn: "ornn",
  pantheon: "pantheon",
  poppy: "poppy",
  pyke: "pyke",
  qiyana: "qiyana",
  quinn: "quinn",
  rakan: "rakan",
  rammus: "rammus",
  rektsai: "rek'sai",
  renekton: "renekton",
  rengar: "rengar",
  riven: "riven",
  rumble: "rumble",
  ryze: "ryze",
  samira: "samira",
  sejuani: "sejuani",
  senna: "senna",
  seraphine: "seraphine",
  sett: "sett",
  shaco: "shaco",
  shen: "shen",
  shyvana: "shyvana",
  singed: "singed",
  sion: "sion",
  sivir: "sivir",
  skarner: "skarner",
  sona: "sona",
  soraka: "soraka",
  swain: "swain",
  sylas: "sylas",
  syndra: "syndra",
  tahmkench: "tahm kench",
  taliyah: "taliyah",
  talon: "talon",
  taric: "taric",
  teemo: "teemo",
  thresh: "thresh",
  tristana: "tristana",
  trundle: "trundle",
  tryndamere: "tryndamere",
  twistedfate: "twisted fate",
  twitch: "twitch",
  udyr: "udyr",
  urgot: "urgot",
  varus: "varus",
  vayne: "vayne",
  veigar: "veigar",
  velkoz: "vel'koz",
  vi: "vi",
  viego: "viego",
  viktor: "viktor",
  vladimir: "vladimir",
  volibear: "volibear",
  warwick: "warwick",
  wukong: "wukong",
  xerath: "xerath",
  xin: "xin zhao",
  yasuo: "yasuo",
  yone: "yone",
  yorick: "yorick",
  yuumi: "yuumi",
  zac: "zac",
  zed: "zed",
  zeri: "zeri",
  ziggs: "ziggs",
  zilean: "zilean",
  zoe: "zoe",
  zyra: "zyra",
};

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "")
    .replace(/'/g, "");
}

/**
 * Tenta extrair win rates do HTML do LoLalytics.
 * Retorna null se não houver dados confiáveis (o site renderiza via JS).
 */
function tryParseLoLalytics(html) {
  // O LoLalytics carrega os dados via JS após o carregamento inicial.
  // Se o HTML não conter JSON embutido com win rates, não conseguimos parsear de forma confiável.
  const hasEmbeddedData = /"winRate"\s*:\s*[\d.]+/gi.test(html) || /winrate/gi.test(html);

  if (!hasEmbeddedData) {
    return null;
  }

  // Se houver dados, tente extrair (implementação futura quando o site expor JSON)
  // Por enquanto, retornamos null para não forçar parse frágil de HTML.
  return null;
}

async function fetchTierStatsFromAnalytics(patchVersion) {
  console.log("Buscando win rates de " + ANALYTICS_URL + " para patch " + patchVersion + "...");

  const res = await fetch(ANALYTICS_URL, {
    headers: { "User-Agent": "Mozilla/5.0 (compatible; Topo-do-Rift/1.0)" },
  });

  if (!res.ok) {
    throw new Error("LoLalytics status " + res.status);
  }

  const html = await res.text();
  const parsed = tryParseLoLalytics(html);

  if (!parsed || parsed.length === 0) {
    throw new Error(
      "LoLalytics renderiza dados via JavaScript após o carregamento inicial. " +
      "Não foi possível extrair win rates do HTML estático. " +
      "Configure uma fonte de dados real (API oficial ou scraping com navegador headless) " +
      "antes de habilitar a ingestão automática de TierStats."
    );
  }

  return parsed;
}

async function main() {
  const latest = await getLatestDragonVersion();
  console.log("Última versão Data Dragon detectada:", latest);

  const existing = await prisma.patch.findUnique({ where: { version: latest } });
  if (existing) {
    console.log("Patch já existe no banco. Nenhuma ação necessária.");
    return;
  }

  // Marca patch anterior como inativo
  await prisma.patch.updateMany({ where: { isActive: true }, data: { isActive: false } });

  // Cria novo patch ativo
  const patch = await prisma.patch.create({
    data: { version: latest, isActive: true },
  });
  console.log("Novo patch criado:", patch.version);

  // ------------------------------------------------------------
  // Ingestão de estatísticas de win rate (LoLalytics)
  // Se a fonte não estiver disponível, não insere TierStats fictícios.
  // ------------------------------------------------------------
  try {
    const stats = await fetchTierStatsFromAnalytics(latest);
    await prisma.tierStat.createMany({
      data: stats.map(function (s) {
        return {
          patchId: patch.id,
          championId: s.championId,
          championName: s.championName,
          tier: s.tier,
          winRate: s.winRate,
          wrChange: s.wrChange,
          banRate: s.banRate,
          pickRate: s.pickRate,
          matches: s.matches,
          rank: s.rank,
        };
      }),
    });
    console.log(stats.length + " TierStats inseridos para o patch " + latest + ".");
  } catch (err) {
    console.warn("Não foi possível importar TierStats automaticamente:", err.message);
    console.warn(
      "O patch foi criado sem estatísticas. A tier list continuará usando os dados estáticos " +
      "de src/lib/lol/data.ts até que TierStats sejam inseridos manualmente ou via fonte configurada."
    );
  }

  console.log("Concluído.");
}

async function getLatestDragonVersion() {
  const res = await fetch(DATA_DRAGON_VERSIONS_URL, { signal: AbortSignal.timeout(10000) });
  if (!res.ok) throw new Error("Data Dragon status " + res.status);
  const versions = await res.json();
  return versions[0]; // ex: "16.21.1"
}

main()
  .catch(function (err) {
    console.error("Erro no fetch-patch-data:", err);
    process.exit(1);
  })
  .finally(async function () {
    await prisma.$disconnect();
  });
