self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  return self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // PWA install requirement pass karne ke liye dummy fetch
  event.respondWith(fetch(event.request).catch(() => new Response("Offline")));
});
