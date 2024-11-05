'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "bab5a8a7ab084453c1408fb7f67e9f52",
"assets/AssetManifest.bin.json": "d40cfb4c82ea0cba6e8786336689b608",
"assets/AssetManifest.json": "76b89f6e322303803f590cbe864389ea",
"assets/assets/audio/music/Aylex-Off-Road.ogg": "9100e72bbe60ad5ebd3f66fecc4bb3ff",
"assets/assets/audio/sfx/bush-cut.mp3": "aa876cd88ebfb128428688a4948cede2",
"assets/assets/audio/sfx/sword-cut-type.mp3": "94cb315a101f040fbb8de42cd56ae020",
"assets/assets/fonts/Insanibc.ttf": "7ce72a53fdafee455ed0476fd32db756",
"assets/assets/fonts/Insanibu.ttf": "4124a6204d35abaf22db32c19d62d73e",
"assets/assets/fonts/Soft%2520Marshmallow.otf": "c92a9de22cbfd2f6122222244c1f6dbf",
"assets/assets/images/apple.png": "06d3a0cc145311479fbca59cef35a722",
"assets/assets/images/background.png": "c3be73f3c8beb2b19955d6b221bf0860",
"assets/assets/images/banana.png": "459edb9b9bea3f51e583a09944feec8a",
"assets/assets/images/bomb.png": "f760926044294f7efa2909734d87cd52",
"assets/assets/images/cherry.png": "78173fa80dd6eff91f6ebca81557f9a6",
"assets/assets/images/flame.png": "ee3b834bca7d59e5d282caca768411f8",
"assets/assets/images/flutter.png": "0b6c292f9da24d49e96fc6ac45dae477",
"assets/assets/images/kiwi.png": "46171c9d0ce2217217df0ef564a539ee",
"assets/assets/images/orange.png": "e39bf94af6f2c43fe65c90112c7a23e6",
"assets/assets/images/peach.png": "6498c8c4073e8e5a129883814c3235a3",
"assets/assets/images/pineapple.png": "58b42fbfa7f168271777e48b7134bd49",
"assets/assets/images/watermelon.png": "f032414bf86a02fddf02c4fa01a12c2d",
"assets/FontManifest.json": "66f1a2d46b046f75e822f87ec03b473b",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/icons/fruit_cutting_logo.png": "045752da1e2e0b9d435ec3d61e8ea120",
"assets/images/apple.png": "06d3a0cc145311479fbca59cef35a722",
"assets/images/background.png": "c3be73f3c8beb2b19955d6b221bf0860",
"assets/images/banana.png": "459edb9b9bea3f51e583a09944feec8a",
"assets/images/bomb.png": "f760926044294f7efa2909734d87cd52",
"assets/images/kiwi.png": "46171c9d0ce2217217df0ef564a539ee",
"assets/images/orange.png": "e39bf94af6f2c43fe65c90112c7a23e6",
"assets/images/peach.png": "6498c8c4073e8e5a129883814c3235a3",
"assets/images/pineapple.png": "58b42fbfa7f168271777e48b7134bd49",
"assets/load.gif": "42ee4d31c6e3eddf34d0aa8211a714ac",
"assets/manifest.json": "c9d701e059e4bb70e89999148726b0a4",
"assets/NOTICES": "4b465e3d787954ea060fae4b609ab0e3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "d013459ae83c2741755f17e806da3e85",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "1ebf78a0c145d067312fc4caf33ab47b",
"icons/Icon-192.png": "97b1eb6da642b5c879721b4a498d52fd",
"icons/Icon-512.png": "14a9d69f21be7b67853e5350b0a55b36",
"icons/Icon-maskable-192.png": "97b1eb6da642b5c879721b4a498d52fd",
"icons/Icon-maskable-512.png": "14a9d69f21be7b67853e5350b0a55b36",
"index.html": "89f671251a0645ae8eabc9ce36b3a45f",
"/": "89f671251a0645ae8eabc9ce36b3a45f",
"main.dart.js": "0987519fa8d04149dc67e64f3ede4675",
"manifest.json": "c9d701e059e4bb70e89999148726b0a4",
"version.json": "f10c1d4b94f547b3f03bade8f040b6d4"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
