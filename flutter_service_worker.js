'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "241f4a42b47957020519cd2a4cf2c7a2",
"iot-sparrow/version.json": "241f4a42b47957020519cd2a4cf2c7a2",
"iot-sparrow/index.html": "0ace57d2934d5190ad1807f6e6621d0f",
"/": "d4b7caf6c3c6a2dda10c62f63b2c2ee6",
"iot-sparrow/main.dart.js": "2e8822fb8c4ccbc73b16786c4c10fdf2",
"iot-sparrow/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"iot-sparrow/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"iot-sparrow/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"iot-sparrow/manifest.json": "c942661c42538e6fff1aae8663fdfafd",
"iot-sparrow/.git/config": "40b0710d37a8574e7dfe8661a08c51ba",
"iot-sparrow/.git/objects/92/e536f62ab841f5a25829e6e8d649a28a9f098b": "133d49c6053194482718ccc2f8699d99",
"iot-sparrow/.git/objects/68/a332977591731407cd487f66590dc67de298b7": "194e31766ce78561d6221a9132f7c42c",
"iot-sparrow/.git/objects/b5/2ff414ccfae2652966887c4435984f4d8f6a52": "42c0e08642beadc609822ddc70369b50",
"iot-sparrow/.git/objects/fd/95ce5ea0436c399c606edd26edd52fb04227f1": "6c629c37ea5b8bcee442a1b9482a07c6",
"iot-sparrow/.git/objects/pack/pack-086fc3d6ee34efb29bdb4e2832174623aed1ccd2.idx": "e80a5a9ba5be82fcc7842bf6796fb5b4",
"iot-sparrow/.git/objects/pack/pack-086fc3d6ee34efb29bdb4e2832174623aed1ccd2.pack": "c41d8de16427a3b48737953d2f48def6",
"iot-sparrow/.git/objects/42/1d106fb8084264ea04355867196c5a6530bf3d": "eb075de51e6f309e7385de708b13da5c",
"iot-sparrow/.git/objects/7e/70d5f1aaff23d0ea0b50162ccc29327861738b": "8c8a21d248a85dcb334014ff9b54d0a7",
"iot-sparrow/.git/objects/91/eb4015b4d428378537ffef538f5a9c31ed9a26": "329bb23e411f300c51b925abd436cc6d",
"iot-sparrow/.git/objects/90/fb4054f0040ba4ec3a0c27fd759f557b52b2d3": "8e72c4b04e626baca4360e7bf459a0ad",
"iot-sparrow/.git/objects/af/bc060759c8af537fa7f1d9a4bc4fc3520637b1": "de8481cb8155a81d06a56a02fa8a88a8",
"iot-sparrow/.git/objects/f0/38a884fade1e524ae64028b290b33bc2dc33f0": "cd5abb4ed0ec116fb2168220061d561a",
"iot-sparrow/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"iot-sparrow/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"iot-sparrow/.git/logs/HEAD": "e63d5820b5961df685c6c6fe3b2de39e",
"iot-sparrow/.git/logs/refs/heads/main": "e63d5820b5961df685c6c6fe3b2de39e",
"iot-sparrow/.git/logs/refs/remotes/origin/HEAD": "3f42879428c7de7474a66f6060acce94",
"iot-sparrow/.git/logs/refs/remotes/origin/main": "31efe7597da08337ccf3f56ec1b41081",
"iot-sparrow/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"iot-sparrow/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"iot-sparrow/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"iot-sparrow/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"iot-sparrow/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"iot-sparrow/.git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
"iot-sparrow/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"iot-sparrow/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"iot-sparrow/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"iot-sparrow/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"iot-sparrow/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"iot-sparrow/.git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
"iot-sparrow/.git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
"iot-sparrow/.git/refs/heads/main": "607cd720b1f0dfc7dde966fba460f108",
"iot-sparrow/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"iot-sparrow/.git/refs/remotes/origin/main": "607cd720b1f0dfc7dde966fba460f108",
"iot-sparrow/.git/index": "3f9e25f36a2922d8926ec11bfd5a6f4f",
"iot-sparrow/.git/packed-refs": "1ec3a4a88942febdc82b3cd8693519e4",
"iot-sparrow/.git/COMMIT_EDITMSG": "dd76730da0e747192da9173b331895c1",
"iot-sparrow/assets/AssetManifest.json": "5441152a8126500dbb9ea91b7293bf66",
"iot-sparrow/assets/NOTICES": "389b4975775a135bbd65ca4b6fcdbfe6",
"iot-sparrow/assets/FontManifest.json": "ca0784f01aca47c67d8000349d24d839",
"iot-sparrow/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"iot-sparrow/assets/fonts/Roboto-Regular.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"iot-sparrow/assets/fonts/PlayfairDisplay-VariableFont_wght.ttf": "20e1565dd5c9e47bd241d99c0dd55ad1",
"iot-sparrow/assets/fonts/Proxima-Nova-Rg-Regular.ttf": "feface72008e6857da27f939e1eceffa",
"iot-sparrow/assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"iot-sparrow/assets/fonts/Roboto-Bold.ttf": "e07df86cef2e721115583d61d1fb68a6",
"iot-sparrow/assets/assets/lyfx.png": "95a33cc44e73ef2e7e14e4fdefa4acd9",
"iot-sparrow/assets/assets/casa.png": "f7302f2a4824737f4b708fbf53cffb77",
"iot-sparrow/assets/assets/phlips.png": "496e132cf8b7d6fe18566b7bfcffdb31",
"iot-sparrow/assets/assets/erlo.png": "8622112aa8f4798140a616cc66835104",
"iot-sparrow/assets/assets/iotlogo.png": "a29c79c0559909e7663f99c290137ac5",
"iot-sparrow/assets/assets/wize.png": "e312ef86b379345b8495ed8eb8d1d796",
"iot-sparrow/assets/assets/bulb.png": "7e827ec2a5cf00103864a98466024485",
"iot-sparrow/assets/assets/goggle.png": "89b20cb6e6ff87acda1f5947935115cc",
"index.html": "d4b7caf6c3c6a2dda10c62f63b2c2ee6",
"iotlogo.png": "a29c79c0559909e7663f99c290137ac5",
"main.dart.js": "db2e1bf906679a6c4696b2f25c945afe",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "c942661c42538e6fff1aae8663fdfafd",
".git/config": "38881ccff4dc4e249623736f3cd97a15",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
"assets/AssetManifest.json": "71364a96b4d4b1d803dd0b8316e8149a",
"assets/NOTICES": "389b4975775a135bbd65ca4b6fcdbfe6",
"assets/FontManifest.json": "ca0784f01aca47c67d8000349d24d839",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/Roboto-Regular.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"assets/fonts/PlayfairDisplay-VariableFont_wght.ttf": "20e1565dd5c9e47bd241d99c0dd55ad1",
"assets/fonts/Proxima-Nova-Rg-Regular.ttf": "feface72008e6857da27f939e1eceffa",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/fonts/Roboto-Bold.ttf": "e07df86cef2e721115583d61d1fb68a6",
"assets/assets/lyfx.png": "95a33cc44e73ef2e7e14e4fdefa4acd9",
"assets/assets/casa.png": "f7302f2a4824737f4b708fbf53cffb77",
"assets/assets/phlips.png": "496e132cf8b7d6fe18566b7bfcffdb31",
"assets/assets/erlo.png": "8622112aa8f4798140a616cc66835104",
"assets/assets/iotlogo.png": "a29c79c0559909e7663f99c290137ac5",
"assets/assets/wize.png": "e312ef86b379345b8495ed8eb8d1d796",
"assets/assets/iotlabel_erlo.json": "bf1c941b282099a2e6378ab5d86934f6",
"assets/assets/iotlabel_phlips.json": "6ec635e553d37aa4f69b0bff5c0741cb",
"assets/assets/iotlabel_goggle.json": "5ce9187dcbf42c04604900d3879012ae",
"assets/assets/bulb.png": "7e827ec2a5cf00103864a98466024485",
"assets/assets/iotlabel_wize.json": "3ed9f3bade88c53b9238d1240e7417f3",
"assets/assets/iotlabel_lyfx.json": "e63e218401f5f9c1561d47c1181f9800",
"assets/assets/goggle.png": "89b20cb6e6ff87acda1f5947935115cc",
"assets/assets/iotlabel_casa.json": "5c5174cf972241fbebb1c919862584a9",
"assets/assets/preferences.json": "52fc9f19b2bc9ddaa212f002820c6fd5"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
