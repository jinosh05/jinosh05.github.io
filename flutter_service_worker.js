'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "9b5d4a715044d25688df3b941cb169ce",
"version.json": "2f471bccc051ffd1813ab0c0066f74de",
"index.html": "9f274f69ce8a129e917a6e9774ca763e",
"/": "9f274f69ce8a129e917a6e9774ca763e",
"main.dart.js": "e76da366fbf7038049385bcaf0ef05fa",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e249e2a36be8b2f2fc5ac1adf74377f9",
".git/ORIG_HEAD": "0477c2ea00291af7bbe50e54c5be5826",
".git/config": "70537e123ca5fe5a1b2a0153fadb1e53",
".git/objects/95/8f9467ee452391e8685d4f1f8475754fda2b33": "000a19808a0ea37be395bcb4c391a515",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/68/2af89a793b06ece927bb2ae5eff2d84481e0cb": "6fdfa8fbc350b57ac2d0b58851dcf118",
".git/objects/6f/d5d2c5d915d1a33e8e7f3bffaee09ff791d9cd": "b25b73398e51f7eb0266ad6124e828b6",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/56/8581e6c6a3bdc0fa913cf0ccde871573c68391": "12c0174493bd16e279c85eb2fade21d2",
".git/objects/34/d641f23529445018c901477d10f0a4ad18173a": "ecfba913d8ab835d4f69501ece20c63d",
".git/objects/b5/250a642ed247480ab0d217c3fe1948b5d55321": "ccafa8057ccca73a4966fa9859d3309c",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/667d3867b3724a528404836f03dd4e81f428cc": "c551187a50ed44a3107785fb02b965cc",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ca/73cdeffc35cc223ec719228fa8fd3bfe8e8246": "8a75f2b5df6530a915defb5181e967e1",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/c8/957e7d893a0f24c1a2c5620d2c34cec8b09e29": "0d35b25e19f0d5136deafba0c6613a67",
".git/objects/4e/e86193277c3da9efd19644a13faa4914df0c9c": "ebb86298129f2228392638a8875bf13f",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7c/806357abc085ca5e218d2cd6be90f4afd669cd": "d7907f958cc5865ca81259af3d11ae2d",
".git/objects/16/84dea403a46cb479e2e99b5f3f7eaf18307364": "b712d108327c72603527ff5095ab1c8d",
".git/objects/74/9e6a01cd6ae31020e1ab206f2be21945126007": "664aed510c25495790a743fc32bc666f",
".git/objects/8a/8b8e00b4b2aaa6f1a67bad381bd2534d559bbd": "d7894bc8456e6e8049a5363a04030a4b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/8ac509e74b43f3487134b2089f9d31081341cd": "547436f53ea748fa81b2c701ff35eff6",
".git/objects/10/c3d4c3bb4456022f32005bc4127dc41fdade02": "246bbe9eafaf9826f12575b3141b6e99",
".git/objects/86/432b250418e9ee85e71e714703c730b1e7a3df": "b1e5fec69dd10d467d45e11c2d53df8b",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/44/77e8667de0a0aef760633b5b57e8e29035cffa": "71638d07fa0f015ef729c2ab4e486560",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/00/73baa7b59731ab31556497655122448b92b854": "4b0cc5e6f30abc89c0e9f6421262a46e",
".git/objects/36/9bb9a54a08be12f3f294e1ce8745f213f73215": "7a2b92fc1828b8695c1f77150fa0894d",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/3f/8a68b6b2ad466ac25ffea0608f7d0391895168": "eee1691af1fa3654b964822817d6a0f8",
".git/objects/5b/d526302cd7fcaa752cc08fab8aaeb744e039ee": "27639347fc5d701ee70be190f4b86d8e",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/99/b43e44c131f664e7b2720cde90d5f4ba29a2f4": "32c7237274b2517bf54c840d6a95ea0d",
".git/objects/0f/40ad8b437ad787069bedd1d2d2bcd5cfa2c870": "97d087decb534a87b312023859881736",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/0e90f64ceb06efcbe1d97ef7edafbf529f48d1": "c075fa13abfd386c5446e18e05dbde35",
".git/objects/ba/63e5658566ec7278f97c641952fe49d21f018d": "7f46ac1742d23beafec35754a2888104",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/dc/67dd363b44f82d30dc9bd7cf661744278f4dd3": "fedc759dd4ef5de29d7b523f1c03f1a6",
".git/objects/d2/348ca879b953a6c5525505b3b005bde7a6eb19": "2fadf8c540d98607d59c89a2811e8725",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/93675576a5efa31568cb7c91bd595ac7208469": "4e183f6bb29ab6d6f6d144801f3db7b5",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/ed691b044b11a1c7ee16df6d584024039c8d56": "7596de85f733c6f454fc1f4b72971358",
".git/objects/cc/5ac29b26652973e34e26d70dfc16bb44fc4a15": "c916065459917dd07fbddf1edd60fba9",
".git/objects/e6/e652b38a5985e4766231108bc4a88b12edb434": "c99246265bc61476a96136a54ab6f595",
".git/objects/f9/1157177cb5bbc38092f638f0246aaa30806b93": "bd6c563e1aaeb0c28c0b1d3cabe4fb60",
".git/objects/ce/e573c7fffc91a13e95c07427dbec3742300976": "956cf717f7382cd201fe0cd56687e7ed",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/84/2758cc9b804b27f845efde900ce19f416239c7": "f98eb981faa76db9b2febc3e9bca24d0",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/8d/6fb34866d0f9a5a7209cd1408b3837ab1c3b30": "0a3471e7f332a2480c5a551e2fa5cf2a",
".git/objects/12/a7f66bfa20200433c306574ae2c0894f2ed344": "071dde8937a89d26e2cc4b5fc3631374",
".git/objects/12/94127146b28cb7eacc14f1122eed0e4245a516": "19cdbdbdd388293491c5b057a56608b0",
".git/objects/8c/afc335ddfa47c3514c76311d5f26c2d2954a80": "e1869455bc4e917f24f43f2364cc8b51",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/7f/a1c76de31d54d84c695598e72240d69142989f": "c0f7c5482b2b55921cf20d3f61d4291d",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7652204a42d65538193b653828a3681d",
".git/logs/refs/heads/main": "4f5d55fdb7f9a61539e822c70641539c",
".git/logs/refs/remotes/origin/main": "80a08f8ffd46ea61bc8c7e2b37434e4c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "0477c2ea00291af7bbe50e54c5be5826",
".git/refs/remotes/origin/main": "0477c2ea00291af7bbe50e54c5be5826",
".git/index": "941e38a365dfbba2c22fb4c5753a9355",
".git/COMMIT_EDITMSG": "58c9dad18fa56bd9bcd154921b57d88e",
".git/FETCH_HEAD": "59e7f1679bb3fcc5a4e0c6d23fef39bd",
"assets/AssetManifest.json": "c52ecc9f980a13e087834899b7104d0e",
"assets/NOTICES": "10aa1d27a0731b0475d3ecc17b8c76d4",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "091c64fb32c73b1ded9aeb3102b996ce",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "ea1e28de4fb0da378ca1b5e7e2d082ac",
"assets/fonts/MaterialIcons-Regular.otf": "52afe9838475864a0b575996cfdc1844",
"assets/assets/wallpaper.jpg": "6c64ee395d63e914634dde79d9fcd7f6",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
