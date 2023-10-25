
// src/serviceWorker.ts

self.addEventListener('install', (event) => {
                    event.waitUntil(
                      caches.open('my-cache').then((cache) => {
                        return cache.addAll([
                          '/',
                          '/index.html',
                          '/app.js',
                          // Add more URLs for assets to cache
                        ]);
                      })
                    );
                  });
                  
                  self.addEventListener('fetch', (event) => {
                    event.respondWith(
                      caches.match(event.request).then((response) => {
                        return response || fetch(event.request);
                      })
                    );
                  })