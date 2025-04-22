const CACHE_NAME = 'main';
const ASSETS_TO_CACHE = [
    '/source/style/bootstrap-icons.min.css',
    '/source/style/bootstrap.min.css',
    '/source/style/animation.css',
    '/source/style/fonts/bootstrap-icons.woff',
    '/source/style/fonts/bootstrap-icons.woff2',
    '/source/script/bootstrap.min.js'
];

// Установка Service Worker и кэширование файлов
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('Кэширование файлов...');
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

// Интерцепция запросов и возвращение кэшированных ресурсов
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            // Если файл найден в кэше, возвращаем его
            if (response) {
                return response;
            }

            // Если файла нет в кэше, загружаем его из сети и добавляем в кэш
            return fetch(event.request).then((fetchResponse) => {
                return caches.open(CACHE_NAME).then((cache) => {
                    if (event.request.url.startsWith('http')) {
                        cache.put(event.request, fetchResponse.clone());
                    }
                    return fetchResponse;
                });
            });
        })
    );
});

// Очистка старого кэша при обновлении Service Worker
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        console.log('Удаление старого кэша:', cache);
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});
