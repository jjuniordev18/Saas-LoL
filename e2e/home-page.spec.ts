// ============================================================
// Testes E2E para a página inicial do Topo do Rift
// Usa Playwright para testes de ponta-a-ponta
// ============================================================
import { test, expect } from "@playwright/test";

test.describe("Página Inicial - Topo do Rift", () => {
  test("deve carregar a página com sucesso", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Topo do Rift/i);
  });

  test("deve exibir o header com navegação", async ({ page }) => {
    await page.goto("/");

    // Verificar logo/nome
    await expect(page.locator("text=Topo do Rift")).toBeVisible();
  });

  test("deve exibir a seção de busca", async ({ page }) => {
    await page.goto("/");

    const searchInput = page.locator('input[placeholder*="Buscar campeão"]');
    await expect(searchInput).toBeVisible();
  });

  test("deve exibir estatísticas rápidas", async ({ page }) => {
    await page.goto("/");

    // Verificar contadores
    await expect(page.locator("text=Campeões")).toBeVisible();
    await expect(page.locator("text=Itens catalogados")).toBeVisible();
    await expect(page.locator("text=Tier S")).toBeVisible();
  });

  test("deve navegar para a Tier List", async ({ page }) => {
    await page.goto("/");

    await page.click("text=Tier list");
    await expect(page.locator("text=Tier list do topo")).toBeVisible();
    await expect(page.locator("text=Win rates públicos")).toBeVisible();
  });

  test("deve navegar para o Mapa", async ({ page }) => {
    await page.goto("/");

    await page.click("text=Mapa");
    await expect(page.locator("text=O Summoner's Rift")).toBeVisible();
  });

  test("deve navegar para o Comparador", async ({ page }) => {
    await page.goto("/");

    await page.click("text=Comparador");
    await expect(page.locator("text=Comparador de matchups")).toBeVisible();
  });

  test("deve navegar para a Busca de Itens", async ({ page }) => {
    await page.goto("/");

    await page.click("text=Itens");
    await expect(page.locator("text=Busca por item")).toBeVisible();
  });

  test("deve navegar para a Todos os campeões", async ({ page }) => {
    await page.goto("/");

    await page.click("text=Todos os campeões");
    await expect(page.locator("text=Todos os campeões")).toBeVisible();
    await expect(page.locator("text=Filtre por função")).toBeVisible();
  });
});

test.describe("Busca e Filtros - Topo do Rift", () => {
  test("deve filtrar campeões por nome", async ({ page }) => {
    await page.goto("/");

    await page.click("text=Todos os campeões");
    await page.fill('input[placeholder*="Buscar campeão"]', "Darius");

    const results = page.locator('[role="button"]');
    await expect(results.filter({ hasText: "Darius" })).toBeVisible();
  });

  test("deve limpar filtros", async ({ page }) => {
    await page.goto("/");

    await page.click("text=Todos os campeões");
    await page.click("text=Limpar filtros");

    // Deve mostrar todos os campeões novamente
    await expect(page.locator("text=0 campeões encontrados")).not.toBeVisible();
  });
});

test.describe("Acessibilidade - Topo do Rift", () => {
  test("deve navegar com teclado", async ({ page }) => {
    await page.goto("/");

    await page.keyboard.press("Tab");
    // Deve focar em elementos navegáveis
    await expect(page.locator("a, button")).toBeFocused();
  });

  test("deve respeitar aria-labels", async ({ page }) => {
    await page.goto("/");

    const buttons = page.locator("button[aria-label]");
    // Alguns botões devem ter aria-label
    await expect(buttons.count()).toBeGreaterThan(0);
  });
});

test.describe("Componente AntigravityNotification", () => {
  test("deve exibir a notificação com título correto", async ({ page }) => {
    await page.goto("/");

    // Verifica se a notificação está visível
    await expect(page.locator("text=Antigravity está funcionando")).toBeVisible();
  });

  test("deve permitir fechamento pelo botão X", async ({ page }) => {
    await page.goto("/");

    // Botão de fechar deve estar presente
    const closeButton = page.locator('button[aria-label="Fechar notificação"]');
    await expect(closeButton).toBeVisible();

    // Clica no botão de fechar
    await closeButton.click();

    // Notificação deve desaparecer
    await expect(page.locator("text=Antigravity está funcionando")).not.toBeVisible();
  });

  test("deve fechar automaticamente após timeout", async ({ page }) => {
    await page.goto("/");

    // Verifica que está visível inicialmente
    await expect(page.locator("text=Antigravity está funcionando")).toBeVisible();

    // Aguarda o timeout (8 segundos + margem)
    await page.waitForTimeout(9000);

    // Notificação deve desaparecer automaticamente
    await expect(page.locator("text=Antigravity está funcionando")).not.toBeVisible();
  });
});