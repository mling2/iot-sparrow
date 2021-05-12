'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "241f4a42b47957020519cd2a4cf2c7a2",
"index.html": "f72373478364f624116faef9bf1a75ee",
"/": "f72373478364f624116faef9bf1a75ee",
"iotlogo.png": "a29c79c0559909e7663f99c290137ac5",
"main.dart.js": "7301262af6d6c42d9543a5a9555f3745",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "c942661c42538e6fff1aae8663fdfafd",
".git/config": "a33fcadcba9c7096cf75f76133a2db0a",
".git/objects/68/6d7360156b1882ef54dd7fa99b4d0239dfc39f": "bdf0b3add03efaf48f0db2bac2a104b3",
".git/objects/68/a332977591731407cd487f66590dc67de298b7": "194e31766ce78561d6221a9132f7c42c",
".git/objects/51/d0788499265ea27ba0c478728f1ca59525d444": "599bbd364fec4f737166686ac84c31f7",
".git/objects/67/29a78c80d63be9cd33c7eb7bde9d249c03675f": "00f452e4e49e3cd4e6f18695044caada",
".git/objects/5f/9bf01ae74cc8ed3e13cfcea1cdb4f4a75effba": "d27a3e8fb13b80598596843a93fc4f29",
".git/objects/9c/0c54b2d1b1a4d2cb4dede4b87e69a89eecce4f": "48821522d3b37c4e678c34fa5c1f29a1",
".git/objects/d9/98cf5b468413ca1c950096dc9d0f5dfdb1359f": "872d06090d2311cd71232a001d72623a",
".git/objects/a2/5e8f38bdfde6b9cddf243f778e86ddc91a5927": "92aab70640610f7c78a05f629e5adbf3",
".git/objects/d6/7f9003c5f6f16f1b37c8d9a87abf91ac35c04d": "6a442e38bec5c134d98a92d06875a30f",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/fd/36ea79ca79cd209e7b9ec9fee9697632c95b82": "9d8dd2a06dc9213855d83a8868d2c1d6",
".git/objects/fe/08117a0b52cdb538346cc09b2ec6b177ca350b": "e88d163632c3175b90be193c895ad193",
".git/objects/ec/e8b97144163e0836ef1c944f6456e6c3db2ff5": "584c45e61f3850772c17ca08bc76085d",
".git/objects/4b/b576c9c25615150c26280e14b169eb992184a8": "8154dcfe95c2a80181ffbabeb2c7c9d6",
".git/objects/7c/d8b5f6f1ac3480cc61f4b69f8d9c2232402fe1": "fe2a7fa2e9651b9a7b34ee0c4b21a5ea",
".git/objects/80/47b914faf91687140a8ba900722eacfea4ab25": "0ba0bb383ae9697de4cd16a80876b6ee",
".git/objects/8f/0dff1170927b6f38dcb550aa4c1d2fd749e0aa": "a8b97ab2612b014c987b13f7e070de7f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/31c0e7ada4c6a5744ce8b149a52fd4ab977c79": "ae7c6955a35cf1cda3051fb45a607fbe",
".git/objects/4c/fef3897e539c46f7d917ea8d76146e71e41b48": "bec6f8ec14d79c25c3f7fb960b059b14",
".git/objects/4c/dc6f03cbbe6c3d90fd8a748f2e692c7f6becbf": "33090a94d23349c278897cc87cc7fc11",
".git/objects/4c/ca91911489c6c26ebd702aee5688117005940a": "c74324c9c3d194579605ed7680e3dc92",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/72/6e54ccc8a22e701b5bfe35210bd82ad2ca0297": "8115970cb5e3db9e08cfc53c5c1c3c1a",
".git/objects/44/e18b666f7c8f62b986a0c4dc0675b33719d27b": "37ca1f77c6bdfa9de41657cd49f98ce3",
".git/objects/43/b13d4147962667951fe2ef7a5e51987752b87b": "03e62a9a86af56b779434bad861227d1",
".git/objects/07/7bbe214326cf19e81fe611cc8c1c2638862ac2": "cb8ae0ffd72b6f67b6cc267a42d32f89",
".git/objects/6e/e915501ec038f80b0bdb326cc6583a8082083a": "adafaf47739c5b82a797ec9cd9b4b812",
".git/objects/5d/23944a9b4d5744f984c22647b7a8de4bff81ba": "1e9346aa111bfd19f0179085faaad3c3",
".git/objects/31/a6f6cb43cca8d3c78aff0a170654a5a0fdf35b": "39a2a37048f96c08442300ef7715e43e",
".git/objects/98/945e21c4e1f7e9e33dea834f592b3dd8091a29": "56fe90e8bc51dfca49f7cf9a409597e7",
".git/objects/08/b55498a225734a4f85c701b9e2e10c5849b9ae": "c1a645d4224dbaa4da26844ed4e4d24a",
".git/objects/6d/b917a2ba8b21f191972ecf237a5a1a13b341fc": "cde3aee719bd7a7cb2dd45ee6866c426",
".git/objects/39/1b1ee2ed53bcfd1b1104b37941b9be4a12a65f": "344e7de0e1e8c61b824123798d0b7df0",
".git/objects/39/3edec672e92cc85be62efb410b2c8df73356b4": "c2db7902d4b7c8db7be7419f103a3778",
".git/objects/99/0ce0084f1e0abbb9b801c790f4597919fba7ff": "7332f196cf8d245c081092297a8963ba",
".git/objects/97/94bc44319c3f8e27ad13c785d3ef0c046f9d56": "a43f624497c84b6a157e28e1a1399bdd",
".git/objects/0f/0c01d006f988938398df6b8524707da2bcafa6": "064a77bf705e47617bc843b08d254d51",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/bf/9d9191e2e25dbb85d0d85dd3cc2739e0607c78": "6a0ffa66e49f374b71c6dc2a8383337e",
".git/objects/a7/87e986b59687ef57d99d3fa84e7c02e61089a6": "a85d766bff147651ffc956454a2ddb6c",
".git/objects/b1/7869d1f467e0aa08dcd39a8b0ae22233fde186": "986e99cad3249ae5b9c4d81cabeddde7",
".git/objects/dd/3476e2ff786a4d43c8824d8db8c6c2c1dc7c9f": "4ef9b072e50ed5bfbf68f1f1900cb461",
".git/objects/b6/338d1ce95c3ad5cba21d0d2318ffa7595cd1ff": "b21b154b7de4d40bb27bdc8af9b5fd59",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ef/f9ed1d279b77a0f74837f1e41187ba18755599": "f2777b7c04de4362db8b20198e647b5a",
".git/objects/c4/635879aa87a8016ebc9a2ae9947010b604bc1f": "0d3afcf18c3c08ce85151c9251527dd9",
".git/objects/e6/28ae5e1fe4ebcefb6a30b20262df3c260419e9": "8ad41bf8da07f769cf29d7fa2f3bc487",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/f7/d7c1a4c995ed2bd6ab79cf74242b28e6f798b6": "864602cfbc54736b932ed6f83eaf3298",
".git/objects/e8/60c29663624dd691236207822f326ab9607561": "b15fefd243d476970e2e170a0186223e",
".git/objects/ff/652fd5c53450b2a42e1721fff50ad57de11e29": "bc3cbacf1b4b83729d03f1cda4f6be7a",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/76/94b8cab06a602e7f898e56407170f9020ef349": "58e22eee37bfd2d4499cdfca4adc5a69",
".git/objects/76/de8e249af1b6d72aa7224e58acae4b670a6e47": "a8b4230cc8702295e0581dc14aa6ea55",
".git/objects/49/ae18f09beacee1d61efc328d6f790aeba42de8": "fcb90688355489e8ecd66ed9a1a40579",
".git/objects/2b/8c53f10d31ae9194894fa26ed8f517e436bb0a": "2713728b21623e789b2eb3477f41616b",
".git/objects/2b/6392ffe8712b9c5450733320cd220d6c0f4bce": "8c5765aae9760c295ac45acfb0e04a63",
".git/objects/7f/0354fa0906781fb65d37d419bb0e4907f14c6c": "2bc8d7d5d00dcf92c54b6d759152cbfe",
".git/objects/14/f9f02d418bd0db8efc2017083b9e1409ba4bad": "ffda22f6fa67a5384a3577bba800050f",
".git/HEAD": "431f7728f8e1f9bcfc0c2c80081d3e53",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "72f237532b6b4f08bd500756cb3fc7af",
".git/logs/refs/heads/beta": "c3cda0a5f167bd676632747e37e79426",
".git/logs/refs/heads/master": "38eea4c2543ba4a64f9b94eca5daacb6",
".git/logs/refs/remotes/origin/master": "4e3385517bf349b0efbec068c8ffde85",
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
".git/refs/heads/beta": "4d7cc6bd8cd7f5a0e94ba19854c07bfc",
".git/refs/heads/master": "4d7cc6bd8cd7f5a0e94ba19854c07bfc",
".git/refs/remotes/origin/master": "4d7cc6bd8cd7f5a0e94ba19854c07bfc",
".git/index": "9847aab0db89ec14fb9ee9dbfb778586",
".git/COMMIT_EDITMSG": "caa02e6a9bdaea9bf50e8d38afa0e76e",
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
"assets/assets/preferences.json": "2115bc302fa697f933ec370d0608a8e8"
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
