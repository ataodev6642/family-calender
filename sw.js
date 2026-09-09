const CACHE_NAME = 'family-calendar-v3';

// アプリの「見た目」を構成する静的ファイルだけをキャッシュする。
// Firebase(認証・データ同期)や宅内NASへの通信はキャッシュしない
// →常に最新のデータをやり取りできるようにするため。
const PRECACHE_URLS = [
  './calendar.html',
  './login.html',
  './shopping.html',
  './todo.html',
  './wall.html',
  './manifest.json',
  './js/firebase-config.js',
  './icons/icon-192.png',
  './icons/icon-512.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // 同じオリジンの静的ファイルだけキャッシュ対象にする。
  // Firebase / Google Fonts / 宅内NAS(別オリジン)などは素通しさせる。
  if (url.origin !== self.location.origin) return;
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      const networkFetch = fetch(event.request)
        .then((response) => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => cached); // オフライン時はキャッシュを返す

      // キャッシュがあればすぐ返しつつ、裏で最新版に更新(stale-while-revalidate)
      return cached || networkFetch;
    })
  );
});
