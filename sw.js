/* Púlpito — funciona sem internet.
   Troque a versão abaixo sempre que publicar uma mudança. */
const VERSAO = "pulpito-v7";
const ARQUIVOS = [
  "./", "./index.html", "./jszip.min.js", "./manifest.webmanifest",
  "./icon-180.png", "./icon-192.png", "./icon-512.png", "./icon-512-maskable.png"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSAO).then(c => c.addAll(ARQUIVOS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== VERSAO).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  e.respondWith(
    caches.match(req).then(achado => {
      if (achado) return achado;
      return fetch(req).then(resp => {
        if (resp && resp.ok && new URL(req.url).origin === self.location.origin) {
          const copia = resp.clone();
          caches.open(VERSAO).then(c => c.put(req, copia));
        }
        return resp;
      }).catch(() => {
        if (req.mode === "navigate") return caches.match("./index.html");
        return new Response("", { status: 504, statusText: "sem conexão" });
      });
    })
  );
});
