// Service Worker for TEDxIIMT UNIVERSITY Website
// Implements caching strategies for optimal performance

const CACHE_NAME = 'tedxIIMT UNIVERSITY-v1.0.0';
const STATIC_CACHE_NAME = 'tedxIIMT UNIVERSITY-static-v1.0.0';
const DYNAMIC_CACHE_NAME = 'tedxIIMT UNIVERSITY-dynamic-v1.0.0';

// Resources to cache immediately
const STATIC_ASSETS = [
  '/',
  '/static/css/main.css',
  '/static/js/main.js',
  '/manifest.json',
  '/favicon.ico',
  // Add your specific assets here
];

// Routes to cache dynamically
const CACHEABLE_ROUTES = [
  '/blog',
  '/speakers',
  '/sponsors',
  '/join-us',
  '/about'
];

// Install Event - Cache static assets
self.addEventListener('install', (event) => {
  console.log('[SW]: Installing Service Worker');
  
  event.waitUntil(
    Promise.all([
      // Cache static assets
      caches.open(STATIC_CACHE_NAME).then((cache) => {
        console.log('[SW]: Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      }),
      
      // Skip waiting to activate immediately
      self.skipWaiting()
    ])
  );
});

// Activate Event - Clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[SW]: Activating Service Worker');
  
  event.waitUntil(
    Promise.all([
      // Delete old caches
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE_NAME && 
                cacheName !== DYNAMIC_CACHE_NAME &&
                cacheName !== CACHE_NAME) {
              console.log('[SW]: Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      }),
      
      // Take control of all pages
      self.clients.claim()
    ])
  );
});

// Fetch Event - Implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') return;
  
  // Skip chrome-extension and other non-http requests
  if (!request.url.startsWith('http')) return;

  event.respondWith(handleRequest(request));
});

// Request handling with different strategies
async function handleRequest(request) {
  const url = new URL(request.url);
  const pathname = url.pathname;

  try {
    // Strategy 1: Cache First for static assets
    if (isStaticAsset(pathname)) {
      return await cacheFirst(request);
    }
    
    // Strategy 2: Network First for API calls
    if (isAPICall(pathname)) {
      return await networkFirst(request);
    }
    
    // Strategy 3: Stale While Revalidate for pages
    if (isCacheablePage(pathname)) {
      return await staleWhileRevalidate(request);
    }
    
    // Strategy 4: Network First for images with cache fallback
    if (isImage(request)) {
      return await networkFirstWithCacheFallback(request);
    }
    
    // Default: Network only
    return await fetch(request);
    
  } catch (error) {
    console.error('[SW]: Error handling request:', error);
    
    // Return offline page if available
    if (pathname === '/' || isCacheablePage(pathname)) {
      const offlineResponse = await caches.match('/offline.html');
      if (offlineResponse) return offlineResponse;
    }
    
    throw error;
  }
}

// Cache First Strategy
async function cacheFirst(request) {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }
  
  const networkResponse = await fetch(request);
  
  // Cache the response for future use
  const cache = await caches.open(STATIC_CACHE_NAME);
  cache.put(request, networkResponse.clone());
  
  return networkResponse;
}

// Network First Strategy
async function networkFirst(request) {
  try {
    const networkResponse = await fetch(request);
    
    // Cache successful responses
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    // Fall back to cache
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    throw error;
  }
}

// Stale While Revalidate Strategy
async function staleWhileRevalidate(request) {
  const cache = await caches.open(DYNAMIC_CACHE_NAME);
  const cachedResponse = await cache.match(request);
  
  // Start network request (don't await)
  const networkPromise = fetch(request).then((networkResponse) => {
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  }).catch(() => null);
  
  // Return cached version immediately if available
  if (cachedResponse) {
    return cachedResponse;
  }
  
  // Otherwise wait for network
  return await networkPromise;
}

// Network First with Cache Fallback for Images
async function networkFirstWithCacheFallback(request) {
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE_NAME);
      cache.put(request, networkResponse.clone());
      return networkResponse;
    }
  } catch (error) {
    console.log('[SW]: Network failed for image, trying cache');
  }
  
  // Try cache
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }
  
  // Return placeholder image
  const placeholderUrl = '/api/placeholder/400/300';
  return await fetch(placeholderUrl);
}

// Helper functions to determine request types
function isStaticAsset(pathname) {
  return pathname.match(/\.(css|js|ico|png|jpg|jpeg|gif|svg|woff|woff2)$/);
}

function isAPICall(pathname) {
  return pathname.startsWith('/api/') || pathname.includes('/api/');
}

function isCacheablePage(pathname) {
  return CACHEABLE_ROUTES.some(route => pathname.startsWith(route)) || pathname === '/';
}

function isImage(request) {
  return request.destination === 'image' || 
         request.url.match(/\.(png|jpg|jpeg|gif|svg|webp)$/);
}

// Background Sync for offline actions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  console.log('[SW]: Performing background sync');
  // Implement offline form submissions, etc.
}

// Push notifications
self.addEventListener('push', (event) => {
  if (!event.data) return;
  
  const data = event.data.json();
  const options = {
    body: data.body,
    icon: '/icon-192x192.png',
    badge: '/badge-icon.png',
    vibrate: [200, 100, 200],
    data: {
      url: data.url || '/'
    },
    actions: [
      {
        action: 'open',
        title: 'Open'
      },
      {
        action: 'close',
        title: 'Close'
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

// Notification click handling
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  if (event.action === 'open' || !event.action) {
    const url = event.notification.data.url;
    event.waitUntil(
      clients.matchAll().then((clients) => {
        // Check if there's already a window/tab open with the target URL
        const client = clients.find(c => c.url === url);
        
        if (client) {
          return client.focus();
        } else {
          return clients.openWindow(url);
        }
      })
    );
  }
});

// Performance monitoring
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'PERFORMANCE_METRICS') {
    // Log performance metrics
    console.log('[SW]: Performance metrics received:', event.data.metrics);
  }
  
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Periodic background sync for content updates
self.addEventListener('periodicsync', (event) => {
  if (event.tag === 'content-sync') {
    event.waitUntil(updateContent());
  }
});

async function updateContent() {
  try {
    // Update blog posts, speaker info, etc.
    const blogResponse = await fetch('/api/blog/latest');
    if (blogResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE_NAME);
      cache.put('/blog', blogResponse.clone());
    }
  } catch (error) {
    console.error('[SW]: Error updating content:', error);
  }
}

console.log('[SW]: Service Worker script loaded');