# Relatório de Análise — App `src/app`

**Projeto:** Topo do Rift (Next.js 16 + Tailwind + shadcn/ui + TypeScript + Prisma + NextAuth + next-intl + TanStack Query)
**Foco:** pasta `src/` (app, componentes, hooks, lib)
**Data:** 01/11/2026
**Testes:** 69/69 passando (vitest). Build com `ignoreBuildErrors: true` — erros de TS são mascarados.

---

## Resumo Executivo

O app é um guia de builds de Top Lane do League of Legends, funcional e bem estruturado. É essencialmente **estático/cliente-side** (dados importados, favoritos/tema/visitas em `localStorage`). Não há rotas de API reais além de um placeholder `/api`, nem uso do Prisma/NextAuth apesar de estarem instalados.

Foram encontrados **1 bug de hidratação SSR (alto)**, **1 máscara de erros de build (alto)**, **problemas de portabilidade do build no Windows (médio)** e vários pontos fracos de médio/baixo risco listados abaixo.

---

## 🔴 Bugs Encontrados

### 1. Hidratação SSR quebrada no `VisitCounter` — ALTO
**Arquivo:** `src/components/lol/VisitCounter.tsx:12-19`

`registerVisit()` é chamado dentro do initializador lazy do `useState`, que roda **tanto no servidor (SSR) quanto no cliente**:

- Servidor: `typeof window === "undefined"` → retorna `{ count: 0, ... }`; o HTML é renderizado com "Visita nº 0".
- Cliente: ao hidratar, o initializer roda de novo, `window` existe → grava/contabiliza visita (count 1).

O React detecta diferença entre o HTML do servidor (0) e o do cliente (1) e lança **erro de hidratação (hydration mismatch)**, podendo fazer o componente montar duas vezes ou causar aviso no console. O comentário no código diz que evita o mismatch, mas a implementação não o faz.

**Correção sugerida:**
```tsx
const [visits, setVisits] = React.useState<VisitData | null>(null); // null no SSR
React.useEffect(() => {
  setVisits(registerVisit()); // roda só no cliente
}, []);
```
E manter o `if (!visits)` retornando um esqueleto neutro até montar no cliente.

---

### 2. `ignoreBuildErrors: true` mascara erros de TypeScript — ALTO
**Arquivo:** `next.config.ts:7-9`

```ts
typescript: { ignoreBuildErrors: true },
```

Com isso, o build **não falha** mesmo com erros de tipo. O `tsc --noEmit` confirma problemas reais que estão sendo ignorados:

- `src/components/ui/carousel.tsx:67-68` — `emblaApi` possivelmente `undefined`
- `src/components/ui/toast.tsx:4` — módulo `@radix-ui/react-toast` não encontrado (o projeto usa `sonner`, não o radix toast)
- Testes: matchers `toBeInTheDocument`, `toHaveAttribute`, etc. faltam tipos do `@testing-library/jest-dom` (os testes passam em tempo de execução, mas não tipam)

**Risco:** bugs de tipo podem chegar à produção silenciosamente.

**Correção:** remover `ignoreBuildErrors: true` e corrigir os erros listados (ou instalar os tipos ausentes). Manter `reactStrictMode: false` apenas se houver justificativa documentada.

---

### 3. Scripts de build não rodam no Windows — MÉDIO
**Arquivo:** `package.json:7-8`

```json
"build": "next build && cp -r .next/static .next/standalone/.next/ && cp -r public .next/standalone/",
"dev": "next dev -p 3000 2>&1 | tee dev.log",
"start": "NODE_ENV=production bun .next/standalone/server.js 2>&1 | tee server.log",
```

`cp -r` e `tee` são comandos Unix. No ambiente atual (win32) esses scripts falham. O projeto está sendo executado no Windows.

**Correção:** usar scripts cross-platform (ex. `copyfiles`, `cross-env`, `shx`) ou simplificar para confiar apenas no `output: "standalone"` do Next.js (que já gera a pasta standalone com os assets necessários quando configurado corretamente).

---

### 4. `SKILL_COLOR_MAP` definido após o uso — MÉDIO (fragilidade)
**Arquivo:** `src/components/lol/ChampionDetail.tsx:336` usa `SKILL_COLOR_MAP`, que só é declarado na linha 487 (depois do componente).

Como `ChampionDetail` é uma `function` declarada (hoisted) mas seu corpo só executa quando o React o renderiza (já após o módulo ser totalmente avaliado), **funciona em tempo de execução**. Porém é frágil: se alguém refatorar para arrow function, importar o mapa em outro módulo ou mudar a ordem de declaração, vira `ReferenceError` (zona morta temporal do `const`).

**Correção:** mover `SKILL_COLOR_MAP` para antes do componente (ou para um arquivo utilitário compartilhado com `SkillOrderTable`, que já duplica as mesmas cores nas linhas 18-23).

---

### 5. Busca de campeões não normaliza acentos — BAIXO
**Arquivo:** `src/lib/lol/index.ts:67-76` (`filterChampions`)

Usa `c.name.toLowerCase().includes(q)` sem normalizar. O helper `normalizeText` (remove acentos, apóstrofos, espaços) existe na mesma pasta e é usado em `Comparator.fuzzyMatch` e `ItemSearch`, mas **não** na busca principal.

Consequência: digitar `"ksante"` não encontra `"K'Sante"`, e `"drmundo"` não encontra `"Dr. Mundo"`. Inconsistência de UX dentro do mesmo app.

**Correção:** usar `normalizeText` nos dois lados da comparação em `filterChampions` (e na busca popular da home), alinhando com o resto do app.

---

### 6. Linhas clicáveis da TierList falham silenciosamente sem campeão — BAIXO
**Arquivo:** `src/components/lol/TierList.tsx:186-192` (e análogo em `TierCompare.tsx:246-261`)

```tsx
onClick={() => champ && onSelectDetail(champ)}
```

Se um `championId` da `TIER_STATS_LIST` não existir em `CHAMPIONS`, `champ` será `undefined` e o clique não fará nada, sem aviso. Não há validação de que todos os 12 IDs da tier list estão nos dados de campeões.

**Correção:** adicionar um `useEffect` de validação no montar (ou um teste) que garanta que todo `championId` de `TIER_STATS_LIST` / `PREV_TIER_STATS_LIST` existe em `CHAMPIONS`, e exibir um aviso no console em desenvolvimento caso contrário.

---

### 7. Estado `loaded` sempre `true` (código morto) — BAIXO
**Arquivos:** `src/lib/lol/favorites.ts:39`, `src/lib/lol/theme.ts:102`

```ts
const [loaded, setLoaded] = React.useState(true); // nunca muda para false
```

`loaded` nunca é alterado e não influencia nenhum fluxo. Componentes fazem `loaded && isFavorite(id)` que se reduz a `isFavorite(id)`. É confusão desnecessária.

**Correção:** remover o estado `loaded` (ou torná-lo real, começando em `false` e setando `true` após a leitura inicial).

---

### 8. Código não utilizado / placeholder — BAIXO
- `src/app/api/route.ts` — retorna apenas `{ message: "Hello, world!" }`, nunca consumido pelo frontend.
- `src/lib/db.ts` — instancia um `PrismaClient`, mas nunca é importado em nenhum componente/página. O schema do Prisma tem os modelos padrão `User` e `Post` (não relacionados ao app; favoritos usam `localStorage`).

**Correção:** remover ou documentar. Se o plano é usar banco futuramente, manter o `db.ts` mas importá-lo onde for usado; caso contrário, excluir para evitar dependência fantasma (especialmente porque Prisma Client precisa de `prisma generate` e variável de ambiente `DATABASE_URL`).

---

### 9. Nenhum Error Boundary / `error.tsx` — BAIXO
**Arquivo:** `src/app/layout.tsx` (ausente)

Não há `error.tsx`, `global-error.tsx` nem um Error Boundary React. Se qualquer componente cliente lançar uma exceção (ex. imagem de ícone do Data Dragon falhando sem `onError`, erro no `clipboard.writeText` sem contexto seguro), a árvore pode desmontar parcialmente sem UI de erro amigável.

**Correção:** adicionar `src/app/error.tsx` (React Server Error Boundary) e/ou envolver seções críticas em um Error Boundary do lado do cliente.

---

## 🟡 Melhorias Sugeridas

| Área | Sugestão | Prioridade |
|------|----------|------------|
| **Estabilidade** | Corrigir hidratação do `VisitCounter` (item #1 acima) | Crítica |
| **Qualidade de código** | Remover `ignoreBuildErrors: true` e zerar erros de `tsc` | Alta |
| **Portabilidade** | Tornar scripts `build`/`dev`/`start` cross-platform | Alta |
| **Busca** | Aplicar `normalizeText` na busca de campeões (item #5) | Média |
| **Validação de dados** | Garantir consistência entre `TIER_STATS_LIST` e `CHAMPIONS` | Média |
| **PWA / Offline** | O service worker (`public/sw.js`) é registrado com `updateViaCache: "none"`; verificar se faz precache dos ícones do Data Dragon para funcionar offline | Média |
| **Acessibilidade** | Manter padrão `role="button"` + `tabIndex` + `onKeyDown` já presente; adicionar `aria-label` dinâmico nos cards que muda com favorito | Média |
| **Imagens** | Todas as imagens de campeão/item vêm de CDN externo (`ddragon.leagueoflegends.com`). Já existem fallbacks (`onError` → iniciais/glifo). Manter e talvez adicionar `loading="lazy"` (já presente) | Baixa |
| **Observabilidade** | Contador de visitas só grava em `localStorage`; não há métrica server-side. Aceitável para escopo atual, mas documentar limitação | Baixa |
| **Internacionalização** | `next-intl` está instalado mas não usado no `src/app`. Todo o conteúdo está em português. Se houver planos de multilíngue, configurar `next-intl` no middleware e rotas | Baixa |
| **Testes** | Adicionar testes de integração/E2E (Playwright já está configurado) para fluxos críticos: busca, favoritos, comparador, instalação PWA | Média |
| **Desempenho** | Tier list e comparador são pequenos (12 campeões), não precisam de virtualização. Se a lista de campeões crescer muito, considerar virtualização na grade de cards | Baixa |
| **Limpeza** | Remover `loaded` morto, `api/route.ts` placeholder e `db.ts` não utilizado | Baixa |

---

## ✅ O que está bom (pontos fortes)

- Testes unitários passando (69/69) cobrindo `filterChampions`, `useFavorites`, tier stats e `ChampionCard`.
- Dados bem tipados com TypeScript (`Champion`, `ItemInfo`, `RuneSetup`, etc.).
- Fallbacks de imagem para ícones de campeão/item/runa/feitiço (`onError` → glifo ou iniciais), evitando quebrar a UI se o CDN falhar.
- Suporte a temas (Hextech/Ionia/Arcano/Noxus) com script de boot que evita flash de tema errado na hidratação.
- Acessibilidade razoável: `aria-label`, `aria-pressed`, `tabIndex`, foco visível, teclado (`/` para buscar, Enter/Espaço nas linhas da tier list).
- PWA com registro de service worker, botão de instalação e modo standalone detectado.
- Comparador de matchups com pontuação, veredito por fase (early/mid/late) e exemplos rápidos.

---

## 📋 Priorização de correções (sugerida)

1. **Crítica:** corrigir `VisitCounter` (hidratação SSR).
2. **Alta:** remover `ignoreBuildErrors: true` e corrigir erros de `tsc` (`carousel`, `toast`, tipos de teste).
3. **Alta:** tornar scripts de build cross-platform (Windows).
4. **Média:** alinhar busca de campeões com `normalizeText`; validar consistência `TIER_STATS_LIST` ↔ `CHAMPIONS`.
5. **Baixa:** remover código morto (`loaded`, `api/route.ts`, `db.ts`); adicionar `error.tsx`.

Deseja que eu implemente alguma dessas correções (por exemplo, o bug de hidratação do `VisitCounter` ou a remoção do `ignoreBuildErrors`)? Posso abrir um worktree e aplicar as mudanças diretamente.