const e = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), i = [
  e + "/_app/immutable/entry/app.0b5dbc92.js",
  e + "/_app/immutable/assets/0.21c296f6.css",
  e + "/_app/immutable/nodes/0.12046c4a.js",
  e + "/_app/immutable/nodes/1.75ae8c13.js",
  e + "/_app/immutable/nodes/2.0f8754fc.js",
  e + "/_app/immutable/chunks/index.8c4e6442.js",
  e + "/_app/immutable/chunks/scheduler.ed1f4acb.js",
  e + "/_app/immutable/chunks/singletons.0f8a2a1a.js",
  e + "/_app/immutable/entry/start.323ca4f9.js"
], p = [
  e + "/PL-new_maop-web.png",
  e + "/PL-new_maop_2-web.png",
  e + "/favicon.png",
  e + "/logo-192.png",
  e + "/logo-512.png",
  e + "/logo.png",
  e + "/manifest.json",
  e + "/old/01_PL200_COUVERTURE.jpg",
  e + "/old/02_PL200_ARTICLE.jpg",
  e + "/old/03_PL200_ARCHIVES.jpg",
  e + "/old/04_PL200_ANALYSE_DE_DONNEES.jpg",
  e + "/old/05_PL200_RECUEIL.jpg",
  e + "/old/06_PL200_4E_COUVERTURE.jpg",
  e + "/old/07_PL200_COFFRET.jpg",
  e + "/robots.txt",
  e + "/subset-SelfModern-Italic.woff",
  e + "/subset-SelfModern-Italic.woff2",
  e + "/subset-SelfModern-Regular.woff",
  e + "/subset-SelfModern-Regular.woff2"
], u = "1700502965742", o = `cache-${u}`, l = [
  ...i,
  // the app itself
  ...p
  // everything in `static`
];
self.addEventListener("install", (a) => {
  async function s() {
    await (await caches.open(o)).addAll(l);
  }
  a.waitUntil(s());
});
self.addEventListener("activate", (a) => {
  async function s() {
    for (const t of await caches.keys())
      t !== o && await caches.delete(t);
  }
  a.waitUntil(s());
});
self.addEventListener("fetch", (a) => {
  if (a.request.method !== "GET")
    return;
  async function s() {
    const t = new URL(a.request.url), n = await caches.open(o);
    if (l.includes(t.pathname))
      return n.match(a.request);
    try {
      const c = await fetch(a.request);
      return c.status === 200 && n.put(a.request, c.clone()), c;
    } catch {
      return n.match(a.request);
    }
  }
  a.respondWith(s());
});
