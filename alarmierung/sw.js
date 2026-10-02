// JET Alarmierung – Service Worker
// Ohne start_url im Manifest öffnet die installierte App genau die Adresse, unter der sie
// installiert wurde (inkl. Geräte-ID). Die Seite wird "Netz zuerst" geladen, damit Updates
// sofort ankommen; der Cache dient nur als Rückfall ohne Netz. Firebase läuft nie über den Cache.
const CACHE = "jet-alarm-v1";

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(["./", "./index.html", "./manifest.json"])));
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k.startsWith("jet-alarm-") && k !== CACHE).map((k) => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  const url = new URL(e.request.url);
  if (url.origin !== self.location.origin || !url.pathname.includes("/alarmierung/")) return;
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(e.request.mode === "navigate" ? "./index.html" : e.request, copy));
        return res;
      })
      .catch(() => caches.match(e.request.mode === "navigate" ? "./index.html" : e.request))
  );
});

self.addEventListener("notificationclick", (e) => {
  e.notification.close();
  e.waitUntil(
    clients.matchAll({ type: "window", includeUncontrolled: true }).then((list) => {
      for (const c of list) if (c.url.includes("/alarmierung/") && "focus" in c) return c.focus();
      if (clients.openWindow) return clients.openWindow("./");
    })
  );
});
