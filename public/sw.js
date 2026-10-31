/* ============================================================
   Topo do Rift — Service Worker
   • Navegação: network-first (página sempre fresca) com fallback
     para o cache e, por fim, para /offline.html
   • Assets same-origin estáticos: cache-first com versão
   • Imagens do Data Dragon (ícones Riot): stale-while-revalidate
     — ótimo offline e mais rápido no dia a dia
   ============================================================ */
const VERSION = "topo-do-rift-v1";
const STATIC_CACHE = `${VERSION}-static`;
const IMG_CACHE = `${VERSION}-ddragon`;

const APP_SHELL = [
  "/",
  "/offline.html",
  "/manifest.webmanifest",
  "/logo.svg",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
  "/icons/icon-maskable-192.png",
  "/icons/icon-maskable-512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(STATIC_CACHE)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((k) => k !== STATIC_CACHE && k !== IMG_CACHE)
            .map((k) => caches.delete(k))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);

  // ---- Navegação (HTML): rede primeiro, cache/offline como fallback ----
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(STATIC_CACHE).then((cache) => cache.put("/", copy)).catch(() => {});
          return response;
        })
        .catch(async () => {
          const cached = await caches.match(request);
          return cached || (await caches.match("/")) || (await caches.match("/offline.html")) || Response.error();
        })
    );
    return;
  }

  // ---- Imagens do Data Dragon: stale-while-revalidate ----
  if (url.hostname === "ddragon.leagueoflegends.com") {
    event.respondWith(
      caches.open(IMG_CACHE).then(async (cache) => {
        const cached = await cache.match(request);
        const network = fetch(request)
          .then((response) => {
            if (response.ok) cache.put(request, response.clone());
            return response;
          })
          .catch(() => cached || Response.error());
        return cached || network;
      })
    );
    return;
  }

  // ---- Assets estáticos same-origin: cache-first ----
  if (
    url.origin === self.location.origin &&
    (url.pathname.startsWith("/icons/") ||
      url.pathname === "/logo.svg" ||
      url.pathname === "/manifest.webmanifest" ||
      url.pathname === "/offline.html" ||
      url.pathname.startsWith("/_next/static/"))
  ) {
    event.respondWith(
      caches.match(request).then(
        (cached) =>
          cached ||
          fetch(request).then((response) => {
            if (response.ok) {
              const copy = response.clone();
              caches.open(STATIC_CACHE).then((cache) => cache.put(request, copy)).catch(() => {});
            }
            return response;
          })
      )
    );
  }
  // demais requisições (API local etc.): deixa passar sem cache
});
