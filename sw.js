const CACHE_NAME = 'okki-cache-v' + Date.now();

self.addEventListener('install', event => {
  self.skipWaiting(); // активируется сразу
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(key => {
        if (key !== CACHE_NAME) return caches.delete(key);
      }))
    )
  );
  self.clients.claim(); // сразу контролирует все вкладки
});

self.addEventListener('fetch', event => {
    const req = event.request;
  
    // Пропускаем неподдерживаемые схемы (например, расширения Chrome)
    if (req.url.startsWith('chrome-extension://')) return;
  
    if (req.method !== 'GET') return;
  
    event.respondWith(
      fetch(req)
        .then(response => {
          const clone = response.clone();
          if (response.ok && req.url.startsWith('http')) {
            caches.open(CACHE_NAME).then(cache => cache.put(req, clone));
          }
          return response;
        })
        .catch(() => caches.match(req))
    );
  });
