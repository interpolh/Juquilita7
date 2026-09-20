const CACHE_NAME = "juquilita-v4";
const ARCHIVOS = ["./","./index.html","./Cooperaciones.html","./Proyecto.html","./Depositos.html","./gastos.html","./index2.html","./juquilita.css","./config.js","./manifest.json","./icono.png"];
self.addEventListener("install",e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ARCHIVOS)))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;e.respondWith(fetch(e.request).then(res=>{const copia=res.clone();caches.open(CACHE_NAME).then(c=>c.put(e.request,copia));return res}).catch(()=>caches.match(e.request)))});
