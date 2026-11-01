// ============================================================
// Configuração do Vitest
// ============================================================
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: [".vitest/setup.ts"],
    pool: "threads",
    poolOptions: {
      threads: {
        singleThread: true,
      },
    },
    css: false,
    include: ["src/**/*.test.ts", "src/**/*.test.tsx"],
    exclude: ["e2e/**", "node_modules/**", "src/app/**", "src/components/ui/**"],
    alias: {
      "@": "/src",
    },
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      exclude: [
        "node_modules/",
        "src/app/**",
        "src/components/ui/**",
        "**/*.test.ts",
        "**/*.test.tsx",
      ],
    },
  },
});