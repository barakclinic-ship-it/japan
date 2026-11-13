const C="japan-v19";
self.addEventListener("install",e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(["./","index.html","manifest.json","icon.svg","icon-192.png","icon-512.png"])))});
self.addEventListener("activate",e=>e.waitUntil(self.clients.claim()));
// network first, so every push shows up right away; cache when offline (e.g. on the plane)
self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;
 e.respondWith(fetch(e.request).then(r=>{const cp=r.clone();caches.open(C).then(c=>c.put(e.request,cp));return r}).catch(()=>caches.match(e.request)))});
