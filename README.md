# Topo do Rift — Builds de Top Lane | League of Legends

[![Next.js 16](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-brightgreen?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38b2ac?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)

Site de guias de campeões para a rota superior no League of Legends. Oferece builds atualizadas com itens, runas, feitiços, ordem de habilidades, curva de poder, matchups, counters e dicas de macro — tudo em português.

> **Nota:** Conteúdo educacional feito por fãs. Não é afiliado à Riot Games. League of Legends e todos os nomes são marcas registradas da Riot Games, Inc.

---

## 🚀 Demo

**[topodorift.app](https://topodorift.app)**

---

## ✨ Features

- **Builds completas** - Itens, runas, feitiços e ordem de habilidades por campeão
- **Tier List** - Win rates da patch atual (Esmeralda+)
- **Comparador de matchups** - Compare até 3 campeões lado a lado
- **Busca de itens** - Pesquise qualquer item do jogo
- **Favoritos** - Salve os campeões mais usados (localStorage)
- **Mapa do Summoner's Rift** - Visualização interativa com pontos de foco
- **Academia do Topo** - Guia de macro 101 parainiciantes
- **Tema escuro** - Design inspirado no universo LoL
- **PWA** - Instale e use offline

---

## 🛠️ Tecnologias

| Tecnologia | Versão |
|------------|--------|
| Next.js | 16.x |
| React | 19.x |
| TypeScript | 5.x |
| TailwindCSS | 4.x |
| Tailwind Animate | 1.x |
| Prisma | 6.x (SQLite) |
| Zustand | 5.x |
| TanStack Query | 5.x |
| Radix UI | 1.x |
| Shadcn/ui | - |

---

## 📦 Instalação

### Requisitos

- Node.js 18+ ou Bun
- npm, pnpm ou bun

### Passos

```bash
# 1. Clone o repositório
git clone https://github.com/SEU-USUARIO/saas-lol-v1.git
cd saas-lol-v1

# 2. Instale dependências
npm install
# ou com bun
bun install

# 3. Configure o banco de dados
npx prisma db push

# 4. Executar em desenvolvimento
npm run dev
# ou
bun dev

# Acesse: http://localhost:3000
```

---

## 📜 Scripts

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar servidor de produção
npm run start

# Linting
npm run lint

# Testes unitários (Vitest)
npm run test
npm run test:coverage

# Testes E2E (Playwright)
npm run test:e2e
npm run test:e2e:ui

# Banco de dados (Prisma)
npm run db:push
npm run db:generate
npm run db:migrate
npm run db:reset
```

---

## 🧪 Testes

### Testes Unitários
```bash
npm run test
```

### Testes E2E
```bash
# Iniciar aplicação em outra aba
npm run dev

# Rodar testes
npm run test:e2e
```

---

## 🏗️ Estrutura do Projeto

```
src/
├── app/                    # App Router (Next.js 16)
│   ├── api/route.ts       # API endpoint básico
│   ├── layout.tsx         # Layout raiz
│   └── page.tsx           # Página inicial
├── components/             # Componentes UI
│   ├── lol/               # Componentes do jogo (campeões, builds, etc)
│   └── ui/                # Componentes shadcn/ui
├── hooks/                 # Custom hooks
└── lib/
    └── lol/               # Lógica do jogo (dados, filtros, etc)
```

---

## 📊 Dados do Jogo

- **Patch:** 16.21 (Temporada 2026)
- **Fonte de estatísticas:** u.gg, op.gg, LoLalytics, League of Graphs
- **Ícones:** Data Dragon (Riot Games)

---

## 🔧 Configurações Relevantes

### `next.config.ts`
- Output: `standalone` (para Docker/produto)
- **Atenção:** `ignoreBuildErrors: true` pode esconder erros de TypeScript

### `tsconfig.json`
- Strict mode habilitado
- Paths configurados para `@/*` → `./src/*`

### `.env`
```env
DATABASE_URL=file:./db/custom.db
```

---

## ⚠️ Problemas Identificados e Corrigidos

### ⚠️ **Problemas Críticos (corrigidos)**

#### 1. **TypeScript build errors ignorados** ✅ CORRIGIDO
Em `next.config.ts`:
```typescript
typescript: {
  ignoreBuildErrors: true,
}
```
Adicionado comentário para lembrar de remover antes de deploy. Ainda mantém o comportimento, mas agora está documentado.

#### 2. **Database URL hardcodeada** ✅ CORRIGIDO
O `.env` tinha o caminho absoluto do ambiente anterior. Atualizado para caminho relativo:
```env
DATABASE_URL="file:./db/custom.db"
```

#### 3. **Path hardcodeado no script de fetch** ✅ CORRIGIDO
Em `scripts/fetch-ddragon.mjs`, o path era absoluto e não funcionava no Windows. Agora aceita argumento:
```bash
# Novo comportamento
node scripts/fetch-ddragon.mjs ./src/lib/lol/ddragon.ts
# Ou padrão (relativo ao diretório atual)
```

#### 4. **Concorrência em favoritos** ✅ CORRIGIDO
O `toggle` em `favorites.ts` agora usa `setFavorites` com função de atualização, evitando problemas quando múltiplas abas modificam simultaneamente.

#### 5. **Versão DDRagon** - AINDA PENDENTE
O script está em `16.21.1` mas `data.ts` usa `16.21`. Atualize `scripts/fetch-ddragon.mjs` para sincronizar:
```javascript
const VERSION = "16.21"; // ou versão atual
```

### ⚠️ **Problemas Menores (não corrigidos)**

#### 6. **Duplicidade de dados de campeões**
O arquivo `ddragon.ts` tem `CHAMPION_PT` que pode confundir. Não é um bug, apenas documentação duplicada.

#### 7. **Warnings de ESLint (React 19)**
Alguns arquivos apontam warnings sobre `setState` em effects, que são padrões válidos para casos específicos (PWA detection, carousel events). São avisos de performance, não bugs.

---

## 📚 Licença

MIT - Projeto educacional sem fins comerciais.

---

## 🤝 Contribuição

Sinta-se à vontade para abrir issues ou pull requests!

```bash
# Flow de contribuição
git checkout -b feature/nome-da-feature
git commit -m "feat: descrição"
git push origin feature/nome-da-feature
```

---

## 📞 Créditos

- Dados do jogo: [Riot Games - Data Dragon](https://developer.riotgames.com/apis)
- Estatísticas: [u.gg](https://u.gg), [op.gg](https://op.gg), [LoLalytics](https://lolalytics.com), [League of Graphs](https://www.leagueofgraphs.com)