const CACHE = 'controle-financeiro-v1';
const SHELL = ['controle-financeiro.html', 'assets/logo.png', 'assets/icon-192.png', 'assets/icon-512.png'];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(SHELL)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  if (url.origin !== location.origin || url.hostname.includes('googleapis') || url.hostname.includes('google')) return;
  event.respondWith(
    fetch(event.request)
      .then((res) => { caches.open(CACHE).then((cache) => cache.put(event.request, res.clone())); return res; })
      .catch(() => caches.match(event.request))
  );
});
