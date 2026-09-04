// DLRG JET Rettungsleitstelle – Service Worker
// Cached nur die App-Hülle (HTML/Manifest/Icons) für schnelleren Start und ein bisschen
// Offline-Toleranz. Karten (Leaflet), Adresssuche (Nominatim) und die Live-Verbindung
// (Firebase) brauchen weiterhin eine echte Internetverbindung – die laufen bewusst NICHT
// über den Cache, sondern immer direkt über das Netz.
const CACHE_NAME = "dlrg-jet-shell-v1";
const APP_SHELL = ["./", "./index.html", "./manifest.json", "./icon-192.png", "./icon-512.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  const url = new URL(e.request.url);
  // Nur eigene Dateien cachen; alles andere (CDN, Firebase, Nominatim, OSM-Kacheln)
  // geht direkt übers Netz, damit Live-Daten nie veraltet ausgeliefert werden.
  if (url.origin !== self.location.origin) return;

  e.respondWith(
    caches.match(e.request).then((cached) => {
      const network = fetch(e.request)
        .then((res) => {
          const clone = res.clone();
          caches.open(CACHE_NAME).then((c) => c.put(e.request, clone));
          return res;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});
