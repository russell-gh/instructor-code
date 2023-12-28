var CACHE_NAME = "my-site-cache-v3d";
var urlsToCache = ["/download.jfif"];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("activate", function (event) {
  self.Clients.claim();
});

self.addEventListener("fetch", function (event) {
  console.log("Fetching");
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      }

      return fetch(event.request);
    })
  );
});
