// mlf os · service worker: giữ khung trang để mở nhanh như app.
// Ưu tiên mạng (luôn lấy bản mới), mất mạng thì dùng bản đã lưu. Dữ liệu Supabase không lưu ở đây.
var CACHE = 'mlf-os-v7';
var SHELL = ['./', './index.html', './config.js', './expense-cats.js', './shopping-items.js', './manifest.webmanifest', './icon-192.png'];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(SHELL); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (ks) {
    return Promise.all(ks.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener('fetch', function (e) {
  var u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== location.origin || u.pathname.indexOf('/os/') !== 0) return;
  e.respondWith(fetch(e.request).then(function (r) {
    var copy = r.clone();
    caches.open(CACHE).then(function (c) { c.put(e.request, copy); });
    return r;
  }).catch(function () { return caches.match(e.request).then(function (m) { return m || caches.match('./index.html'); }); }));
});

// Thông báo đẩy: hiện thông báo khi server gửi, bấm vào thì mở app.
self.addEventListener('push', function (e) {
  var d = {};
  try { d = e.data.json(); } catch (x) { d = { title: 'mlf os', body: e.data ? e.data.text() : '' }; }
  e.waitUntil(self.registration.showNotification(d.title || 'mlf os', {
    body: d.body || '',
    icon: './icon-192.png',
    badge: './icon-192.png',
    tag: 'mlf-morning',
    data: { url: d.url || '/os/' }
  }));
});
self.addEventListener('notificationclick', function (e) {
  e.notification.close();
  var u = (e.notification.data && e.notification.data.url) || '/os/';
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (cs) {
    for (var i = 0; i < cs.length; i++) { if (cs[i].url.indexOf('/os/') >= 0 && 'focus' in cs[i]) return cs[i].focus(); }
    return self.clients.openWindow(u);
  }));
});
