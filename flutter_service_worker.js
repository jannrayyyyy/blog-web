'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "5f26826d56821573bd9775448295ce5c",
".git/config": "2f5f852a00428260f7f291380e52a65b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "44880cc65cdaa9c7d690cd116def6c99",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e290492fa15fd0eb661f4d880914746c",
".git/logs/refs/heads/main": "84efa96387d7cbef6edbb51d1f6ac584",
".git/logs/refs/remotes/origin/main": "4bdcb7cbdd7b084e53dd81c33070565a",
".git/objects/03/a20d6d92cadddcacc952dd20e245a68309800a": "c0c2051d74d0b5d4d19b53dc179dae64",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/05/aa2a23460253cdf19ea67828a9c3d787eb4664": "fc9e92a61d5b9977adb060e6583d5b4f",
".git/objects/05/ae4754493a0c589e3e7701c17a6afe71a575f6": "41da174e6f78ee0962ada176655beffd",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0f/1d7406af1061c3604e190ca16bc3a4a7ed6de1": "bf70c12803c03c9afcb4f8b6ca878496",
".git/objects/16/12987de47f10b728d4b3217a993210c505c68c": "654ae1f1e4aa4d6cd9ee716509430fae",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/4da47077f25e766836028ba4bd0a7f7957fd5e": "a49a29c01c8903efc82a200a6e3510c5",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/1f/b9a229c5f8b2bdac6837915582c21daa05ee4d": "d70cef6a75c2d307e7dbe832bc767cd0",
".git/objects/25/5cd200e99415f6b923a2c2fcda1400e3ce8ba9": "e3020ffee682d19726bfede8b89d8933",
".git/objects/26/483619a3ca48c8819f3489a64a4db1dff39f00": "c0611b336a4d483fd7066931501011fb",
".git/objects/29/5c5caa7ddb44a71d23951af3f96dce09db0c10": "f1478baedb4573dfbf0545a8db713bab",
".git/objects/2b/a054b17a115aac19d05539a62eb1f0108b7484": "1d299a0ea3f1e62ac1c41afeebdd3803",
".git/objects/2e/ddbe3a58e10122f6ad16cf8914e3358ffa792b": "80173c7f88955f011bd16a769b26f31a",
".git/objects/30/42e21cd9d5dc29a097573e525bcd1d863e592d": "ca8d63b8fe48728be86164ce2f4b8ec4",
".git/objects/31/599729d70f8cf12cd97d0d48c3a4b9d06df923": "38eb9b06500ae2eb8aefe27942ab23fd",
".git/objects/31/e2a86af1c6e5e1aed3dc1cf50b467605f9576c": "96e9bd7819ea903965bb52a27008b47e",
".git/objects/34/644ffb47b8c08d91c03f6e93bf31bca7b52567": "d02e4a981181ce0055ae7a15d9af3357",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/39/28a9171426f044dcec55a7627f48f251ed73c3": "db7cffa0077168feb925ad45e0c36a55",
".git/objects/3c/d2ba4aac0a4e7505954c3e420f1c105eed6bb8": "9059c28973163eda72d6c00af6b6a858",
".git/objects/40/cf1ae1e0762041e6a6c6c25c544f8af4d6c4b2": "a8fbe7f898ca9d1c3913984b1ef46a00",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/42/cfd62a02d0a12cd8ba26df3879c85134eb0fd0": "875384801b8e094cb190ac635b4055c0",
".git/objects/44/410bb81e7cc56a71e37fedae3680f0da890fa4": "bf493c6da18755d13434cfb33909fd70",
".git/objects/45/6ef6955638ca2594afa66e21bb8ed8a2f70b7f": "75252cb7641afeb0fc225868f0ec46a9",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/f61e03a9706f7d7479fa1784f753bc07b5198c": "39d49da604de9e33004e7c00363e190e",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/54/55eb39afcb682a39f14cb515797bdfdbf6ed5f": "247c3e76c268af4ba9f9e564975fa125",
".git/objects/5b/f57c46bf5fa4d06e1305c591f50d1d80324efc": "c94a9c510f3dc5bd1db776d405fe9e6b",
".git/objects/61/1097e07379a9fc84ea21ddb5f6e19519ac8d66": "77d0d726a4892ea91651f6ef3ae3ee66",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/63/7a53eff6d4c2e2d4095ef439ea9d6fef3363cb": "e5830cce49562ba69ca55f1a132174b7",
".git/objects/69/35636cef701474834e68c766072fef70f3332e": "d63e37bf3b7ebcc39f15c4e3edfc229c",
".git/objects/69/715971ad3e9871969ed217ef309ed1105e7870": "a2f5750c5264696b603ace364464fe42",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/79/65e7dc6088c2f25b75335bc825e016370cfd76": "a6f1bbf97e2910f6b76e668ac7d58a7b",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/34222eb4139b860e1dd4b47328b22b6d22b7a5": "123e56797418531b47db253deb76d434",
".git/objects/7b/f19ff72208d7f8a63d6f2e5e0326a84fdab2ee": "e639e63dfe6e489a3b1a8bda6a7ab792",
".git/objects/7e/07402de1d241eb86f02793880b6858b0696947": "79ea6bdaee7570d036ac5c83bcd619e5",
".git/objects/82/de93f0b97704ce9fd5398e2f62b9f9c39acaf4": "ffb8d89599d0ccee1cb6127610676e4f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/c56a25ae37cc355d8cf54dcce37c9582f9c170": "ff36b33ed9086179b2c4d0f409df727b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/92/3cab6c140883f23138185fe182854e671bef66": "89f2705cf40df223c976b65d86ff5e2e",
".git/objects/93/13dfa1b2872d65bc04f1c9141cd56a57cc659a": "e8ef6fd2968ce34b5a7520d0626d5308",
".git/objects/96/dc90112af7f43c36fdf9876e6897f8b65700de": "d1b8c4eb433e56924cdaadbf77aa3b65",
".git/objects/98/f82771ebf87b607e51c45c97cb8cbb198cbe1e": "55b6f0e49c976cc84c0b6485f4069e5d",
".git/objects/9a/ce323d64501009747035bc5dd8865bae33088a": "f64ae233a33e984381a7f382ddb33690",
".git/objects/9e/e91263314e18b789fb30857310a1686fd8a259": "397259b10c661539a0ef61afeed8d383",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/4619394b85822d3f5bdbf261ed03562b8cf977": "ba18d420ed065fb988d094f14d57fd17",
".git/objects/a2/4f15f9ca08259bad168a54393d4767f23fcdc3": "7d31bc2c612ca2d39b9ad6ea9f2f9be4",
".git/objects/a4/0ebd71a4073b50d280013ba4b5a8801304bca8": "43bf9f26a2402eaddb61d994ac9623f5",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/aa/e89d3c65dfde4e33c9c3a4f6c803f87cd054ca": "7b10394c947b42f033826a177ccca3de",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ad/9c983dd98b46dc856821386ba2612d67c365c2": "fe4687ae31a590ed449166f96ceada3f",
".git/objects/ae/147140cd95039df0da6f523e783d2787f08aa5": "41781e51571a222dcf7b89facb4b1a2b",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b1/fe32182a507b1b156b5c39683216ca8de9524a": "254858a1d9c7c2aa9460442c784818ab",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b3/826f8b2498fe46a2487d37fcb03631fac24a18": "830b354e0eadfccd307cff10a933507b",
".git/objects/b6/b7a1b0f3f07b607494a22d6d24f8ca6e60e7f4": "6985ba6fcd1c03e71275257fb63b3189",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/502529c9c1b0b3f245082e1fbc26d94e02821c": "f1d84965a08ff201747bc217bb3772bb",
".git/objects/ba/5e3cc4c349d5fbe77523ced73258c1503e79cf": "53e9bc930bb331a22a2e576d353a1c04",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/be/9ddd171624be754e5e88cd665f5acdac16a9ef": "189089893d5924185837576522c871b7",
".git/objects/c8/4e9e1923dde35ef85bdb3fcbb9522b7eebb284": "8f7183e683aacd64616a0eb28cf9965d",
".git/objects/cb/72405399c27058f2b6fc1f141da9203534dec4": "f719787217a88cb2c9b5d2a57dbc25b1",
".git/objects/cb/7a894931c8add8b34ede9e06692f7766a22bcf": "daa3bce10a1c5d4e958e5020715b10be",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/cd/f9bb4be591a77aca043dc4322aba7c1d4c79f0": "53d0ee0dd50da0d328b03618337f26a9",
".git/objects/d1/494ac92e1d9234e99ff75363bb758a859398e5": "7993ae030df6663b83aa77975d4126f4",
".git/objects/d1/c91bb6366959d500b677e4667f65f497a353cd": "713bf517e05dae2036b49a1575ee2850",
".git/objects/d3/57f75495ea79a1f5308b918170b1ad914c93fa": "3ec86d2ae852e38df36ba23a736decb6",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/fa16760f9b75afb0b54684b65d0e9ab423a29a": "97e986a88d390903e200bd972adab13a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7575b326204e7fa2c99221fef2a362fa3f4154": "a068845845afd56e2f55ba8253bb7c75",
".git/objects/d9/3834477d498fad10a59bf380b584ec31557702": "05ff228de3ed7b7aefed4f34ad3042e0",
".git/objects/d9/57c1bd0b743b3b6c78d5dbf97a63b492d367ce": "368b89050a446b3240d19eecef756e1f",
".git/objects/dc/d26eb7cb6577bd7c6017dd2a52e50b29d1c1f3": "86afdbf94c91b0cc8c421b8b2a736a8f",
".git/objects/e0/bc032087ab97fe5008c84c9695f143b80c902e": "5a651cb0c09cc3e16c6eafaceb4d10e3",
".git/objects/e2/82804c896e6b2b2913a11937fb4b57c2e63195": "7169849b3e75eb5384e6dd3b3ab0bc1d",
".git/objects/e3/e8e7a041865e21ec35a776ec89d23a3d5c3b26": "cc172625a17e3d58adee54ab303e8e24",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/e8/4a25db1be6993d580ec0abe7d89f04e7e46ca6": "3157dd0d72b67f26e53d5d2698b553f6",
".git/objects/eb/32763662472416d83d2da35f413dcd785a41f4": "36feba19fb523b8996e41314d060d04f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/8a2c67e0995b7020ffe7aad4bf9042579664dd": "4ea4d5d1d427cb3dbddbcb21a6c6d2e5",
".git/objects/fb/268a1774a8157d92e8dac14228388709d7f977": "0ad9365bfdecb2fbbd66c4d97f1b2fb2",
".git/objects/fc/6cc13154d4f23d37abbd26b0c73016ff6f69ac": "a427c5a206785f81d4ebd395d75fa6f7",
".git/objects/fc/f0e7d8d8b7a659906ac8b1ad50e7e802876531": "25e520f943c36af18e0ec680496a35fd",
".git/refs/heads/main": "eb1533cd2b7ffc513ec46e2424e5d32e",
".git/refs/remotes/origin/main": "eb1533cd2b7ffc513ec46e2424e5d32e",
"assets/AssetManifest.json": "180eb5e95c6404e4c8770bc0c4f5041e",
"assets/AssetManifest.smcbin": "942bcbaaea2a0551665dc0ab21dc31e3",
"assets/assets/blog-icon.png": "91622b9763e8369ad06840ee93b82979",
"assets/assets/vid-bg.mp4": "3b8690be912a3e20dd7a3ba050bae3a3",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "b375f4acd16ef91f520a53b957e589c5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "791e476d060fb236b462965a2727c980",
"/": "791e476d060fb236b462965a2727c980",
"main.dart.js": "639864be4b17b02512350545a3ff59ff",
"manifest.json": "d56729672ed883d8842f94d7610217bd",
"version.json": "6362f2e91ed8994ecb20cde572c66ace"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
