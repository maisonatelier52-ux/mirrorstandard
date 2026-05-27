// public/sw.js - Service Worker for aggressive caching
const CACHE_NAME = 'app-cache-v1';
const STATIC_CACHE = 'static-cache-v1';

// Resources to cache immediately
const PRECACHE_URLS = [
  '/',
  '/offline',
  '/_next/static/css/app.css',
  '/_next/static/js/app.js',
  '/fonts/inter-var.woff2'
];

// Install event - precache resources
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(cacheName => 
            cacheName !== CACHE_NAME && 
            cacheName !== STATIC_CACHE
          )
          .map(cacheName => caches.delete(cacheName))
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - cache strategy
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Handle different resource types with different strategies
  if (request.destination === 'image') {
    // Cache first for images
    event.respondWith(cacheFirst(request));
  } else if (url.pathname.startsWith('/_next/static/')) {
    // Cache first for static assets (they have hashes)
    event.respondWith(cacheFirst(request));
  } else if (request.destination === 'document') {
    // Network first for HTML pages
    event.respondWith(networkFirst(request));
  } else {
    // Stale while revalidate for other resources
    event.respondWith(staleWhileRevalidate(request));
  }
});

// Cache strategies
async function cacheFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);
  
  if (cached) {
    return cached;
  }
  
  try {
    const response = await fetch(request);
    if (response.status === 200) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    // Return offline page for navigation requests
    if (request.destination === 'document') {
      return caches.match('/offline');
    }
    throw error;
  }
}

async function networkFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  
  try {
    const response = await fetch(request);
    if (response.status === 200) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    const cached = await cache.match(request);
    if (cached) {
      return cached;
    }
    // Return offline page for navigation requests
    if (request.destination === 'document') {
      return caches.match('/offline');
    }
    throw error;
  }
}

async function staleWhileRevalidate(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);
  
  const fetchPromise = fetch(request).then(response => {
    if (response.status === 200) {
      cache.put(request, response.clone());
    }
    return response;
  });
  
  return cached || fetchPromise;
}