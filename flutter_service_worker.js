'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "dbd233b6b90882bbed55dc88b39046df",
"assets/AssetManifest.bin.json": "ffbecf345a06aaa1ee4f23f7b0e4ff1e",
"assets/AssetManifest.json": "5058c3ac31c913b86e0172ddcf9bb450",
"assets/assets/fonts/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/assets/fonts/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/assets/fonts/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/images/about_us.png": "0c50ee9a3e2b3d1bfb94c9646a817806",
"assets/assets/images/address.png": "54ab0d0935ed0c5024c044ab661e61fc",
"assets/assets/images/authentic.png": "e4a85db88fecb97d65efc8809aeef749",
"assets/assets/images/background.jpg": "2ea99d0f380055c520fe5816911728ab",
"assets/assets/images/bag.png": "003f87dc794f4dd87c015d4e7182d8b6",
"assets/assets/images/bkash.png": "09f88e8c2a8ff5d5a5b89e30df908b4e",
"assets/assets/images/call_icon.png": "977355a7e2c779debb379fa0b48b20fd",
"assets/assets/images/cancelled.png": "55b94a9a6b09a29b88a11f7796d51f95",
"assets/assets/images/cart.png": "39a203b4c596384d2ceeb041f562f05b",
"assets/assets/images/cart_arrow_down.png": "c65b70717b7d56760da4bb8f43d80b2b",
"assets/assets/images/chat.png": "5880f9fc21a8e89457cce3cef5b2625f",
"assets/assets/images/chats.png": "7bf79db14eb9f9d5a11f0a1f2b4760fb",
"assets/assets/images/clock.png": "6a3243b565eb38e98dfb725f8c0d069c",
"assets/assets/images/cloud-download.png": "87cd669336f6be6d6a055cf6fd588d30",
"assets/assets/images/cod.png": "14c0c9a24889d847b222a57ac7f08229",
"assets/assets/images/contact.jpg": "2394815e347280c2f3c506023104ddb5",
"assets/assets/images/contact_us.png": "976aa0d73873298057a46fca43d1b8de",
"assets/assets/images/coupons.png": "5cab029353a24df5d433bde38e614861",
"assets/assets/images/coupon_banner.png": "3b65d445557f560ba032a1203841bbb3",
"assets/assets/images/coupon_bg.png": "c8a350f04f1055e17e8c23cc5dd98cc5",
"assets/assets/images/coupon_gif.gif": "a3b0f3abb95e4bc3110252860f875dab",
"assets/assets/images/currency.png": "06eb21991dd3dd17c3be3f3066c002a7",
"assets/assets/images/c_policy.png": "c31e1810f412170777c7e86abef0c98f",
"assets/assets/images/delete.png": "e0c406b9cf1eea538ad181511732c251",
"assets/assets/images/delivery.png": "c8763c837d115a943f368a0705c27a67",
"assets/assets/images/destination_marker.png": "4b0a22e632ef1eae30a04e8ff4f32347",
"assets/assets/images/discount-voucher.gif": "b2bb095b53600c99a93467499f41768e",
"assets/assets/images/dropdown.png": "d27715028fffd2fbb85b1194f7d43de4",
"assets/assets/images/edit.png": "c536c7c8c734c2360def6d49f1f3a964",
"assets/assets/images/edit_2.png": "ae9fe882996eadd901f24fb76f0a930c",
"assets/assets/images/facebook.png": "021ada146ffb7c1753557ff29618d04c",
"assets/assets/images/fast_delivery.png": "7968eef92e0da890cc616817d880c33d",
"assets/assets/images/fawry_pay.png": "424f940c17cfa12045e173ebe81647d3",
"assets/assets/images/filter.png": "010adcdcf19c95648148f3d38b8870d3",
"assets/assets/images/filter.svg": "9bee6b17d23522cc241dd9754c8f0eb2",
"assets/assets/images/flash_deal.png": "9ce1b1cda0e4e5f6aadfe6d1dbb9505a",
"assets/assets/images/flutterwave.png": "4bc93f63a92166ff97a76df071fa67ea",
"assets/assets/images/google.png": "1b943d724cb2d7c49f888f750ce3a479",
"assets/assets/images/hdfc.png": "ee5c1e2245331647de6b7371cf6c20e9",
"assets/assets/images/help_center.png": "04ee2494c1869f215348380297250357",
"assets/assets/images/home%2520address.png": "45bbd6a75e6e3c3db06f9a85ecaa23cf",
"assets/assets/images/home.png": "c1a81ec4a5e35a2710096149e293d6a9",
"assets/assets/images/homeaddress_icon.png": "44de7f09a355fd850811678e29efd689",
"assets/assets/images/inbox.png": "478d20f4a7842c009c7ac02b7b20b664",
"assets/assets/images/language.png": "7064ea2f7a10c4ee19fc234448e0aeb0",
"assets/assets/images/line.png": "fb7afb786631d483eee275fc6f726cca",
"assets/assets/images/liqpay.png": "f3a9be4a89920f0eab3a1886a7c37125",
"assets/assets/images/location.png": "4aad82c9d0bf60395b8b0531068e6ef4",
"assets/assets/images/login.png": "dcb126666272eedd8ef3d2d8ac8f84e4",
"assets/assets/images/logo.png": "e4a27ef4ecc013af99ad2de5519514d0",
"assets/assets/images/logo_splash.png": "e4a27ef4ecc013af99ad2de5519514d0",
"assets/assets/images/logo_with_name.png": "e4a27ef4ecc013af99ad2de5519514d0",
"assets/assets/images/logo_with_name_white.png": "e4a27ef4ecc013af99ad2de5519514d0",
"assets/assets/images/loyalty.png": "45da7e6694f9b4b7bbc9968060d821e0",
"assets/assets/images/maintenance.png": "d85a4c7f1e4055504d4df89104ee7baa",
"assets/assets/images/mastercard.png": "65b58ca34f7eb1a5d51b0088d937d060",
"assets/assets/images/mercadopago.png": "82b8e0b507aba59e742ad7cc508ca536",
"assets/assets/images/message.png": "ab99f6acabfab4ce0f2a0bd175672d25",
"assets/assets/images/more.png": "898fabc19fd9b9b7b524267e259a6acf",
"assets/assets/images/more_filled.png": "2f89f77dac6e8866ad1f26a5e711d55b",
"assets/assets/images/more_page_header.png": "876f35fc5ff9e5ae2e14637323cf3ee3",
"assets/assets/images/notification.png": "99f123f5885c205ea86156e340fcca14",
"assets/assets/images/notification_filled.png": "4b3793be6cd1ade87f7a5015e41f8255",
"assets/assets/images/no_data.png": "2af542eda536035f0119c318e0b5fd61",
"assets/assets/images/offers.png": "06eb21991dd3dd17c3be3f3066c002a7",
"assets/assets/images/office.png": "cec215208488bc3f33787ab3e69f3ce1",
"assets/assets/images/offline_pay.png": "3bd84d1b1261e43a1abd15212794e9e9",
"assets/assets/images/onboarding_image_one.png": "f47f66554c47442c335adf866d795cb1",
"assets/assets/images/onboarding_image_three.png": "fb6e7948eb1a00e240fe7fd644818aa7",
"assets/assets/images/onboarding_image_two.png": "deb4acd4c84fbb81e2da2674326c995e",
"assets/assets/images/opps_internet.png": "bb8d725c9d0b01de82027c053d341204",
"assets/assets/images/order.png": "0d4ced77ca7e8d657b396f080bf5a0b7",
"assets/assets/images/paymob.png": "38d7d06975d0d645378f9d29cf4fc036",
"assets/assets/images/paypal.png": "70ff93edb0554f614e56bf2673afc2df",
"assets/assets/images/paystack.png": "4a7ac4e8e0a890715d732e007a79864d",
"assets/assets/images/paytabs.png": "32972d00d76ba94245050d5695a95a9d",
"assets/assets/images/paytm.png": "a1442baf0f19906781dd73fe10db860a",
"assets/assets/images/percentage.jpg": "5c521da0a872374a0d2f51e9c34f3878",
"assets/assets/images/percentage.png": "916e1750407e4be24d6cd900e306d9ae",
"assets/assets/images/phonepe.png": "da4d269b6ccf6c15206fc7e9b510c7c5",
"assets/assets/images/placeholder.jpg": "81abc0d9b59a9aba9191102834f2d978",
"assets/assets/images/placeholder.png": "a087997664011ba33c7df0306ae1492e",
"assets/assets/images/placeholder_1x1.png": "809daf6e802ae3d0a0bf1c06677541c0",
"assets/assets/images/placeholder_3x1.png": "ac82b2c493adafc42488ea499d7db4c6",
"assets/assets/images/preference.png": "92dcbbf5572895128ab27694e0f35504",
"assets/assets/images/privacy_policy.png": "f4ed0a4f69202428e7301567c8e6a103",
"assets/assets/images/product_img.jpg": "c9f0b2c8102191bd76b23e2b3d50f29d",
"assets/assets/images/razorpay.png": "e91aee7e5ce1c28680a559b39da5f753",
"assets/assets/images/refund_policy.png": "a8317d42176a49caf61308f913a5ca24",
"assets/assets/images/return_policy.png": "86fc5d46d5706443df3b9f20ae4379cf",
"assets/assets/images/safe_payment.png": "c19f3a95a9a0d34195492d5f8b867e30",
"assets/assets/images/search_icon.png": "b73093b2e67190f5b002186c46b4e3c0",
"assets/assets/images/senang.png": "0bad0a08b7147e7b9b064ac76b92904d",
"assets/assets/images/settings.png": "460e1ef1105542edb318270cb68f1ba4",
"assets/assets/images/seven_day_return.png": "98d9b73df560d0ece38c153fb8599a48",
"assets/assets/images/shopping.png": "22c2c6fa9279fc5a5ec6e28a38af0289",
"assets/assets/images/slider_image_1.png": "d0db1717f3f820f00af3173d4777715e",
"assets/assets/images/slider_image_3.png": "ab9659fd6a6f9b0f884611d54936b6f9",
"assets/assets/images/slider_img_1.png": "4b090cdcd3a08c16403189d861daf4be",
"assets/assets/images/slider_img_2.png": "769c44ca14bd23e501d85dec1235bb82",
"assets/assets/images/slider_img_3.png": "0a5539567d747212e422572a9730c5bd",
"assets/assets/images/sms_icon.png": "80ede6f77ab3a4458dabcc7f0dbfdb60",
"assets/assets/images/ssl_commerz.png": "c1964e97b569610e9ada57e1231823c4",
"assets/assets/images/star.png": "be1cc87977b99e0e450b324fa4789cc8",
"assets/assets/images/stripe.png": "351cf8fa86148499358a44cb6132f8c0",
"assets/assets/images/Subscribeplan.png": "7d16458ddcc07e4f34ff3731bac26333",
"assets/assets/images/terms-and-conditions.png": "ccf42d883384828393510b82bbed1f84",
"assets/assets/images/toolbar_background.jpg": "3eb58848f527befc3a3ff33bf21593ec",
"assets/assets/images/trophy.png": "2426be8aae6c8ea6578aacb002bbaf58",
"assets/assets/images/upload_image.png": "389e383900c474b0f14d1a6c31147ce1",
"assets/assets/images/visa.png": "4e6ddb420316fa6181a3806f22f1f70d",
"assets/assets/images/wallet.png": "f4587d3c4c00b9dbbd274b7036881cea",
"assets/assets/images/wallet_pay.png": "ba56031b06c2a42e462e80232d59e4dd",
"assets/assets/images/wish.png": "3153bcbb0952b9276eca9d66544c49c1",
"assets/assets/images/wishlist.png": "03c07fe18588ee3bd49e1cbb1be32324",
"assets/assets/language/ar.json": "726d68d7bf1b7e5f91cb180a51328a14",
"assets/assets/language/en.json": "613acbd829e7a1dec266deaac74e0cd3",
"assets/FontManifest.json": "8cd74dfb802cdf3b119f1107a8b8705a",
"assets/fonts/MaterialIcons-Regular.otf": "4b2e4acfde53b07dc3ddde264b084009",
"assets/NOTICES": "c5a4bf5a9a47f5e0be3a46aca47e916d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ef9eb2a40c10760eed000e9c9c5bb396",
"/": "ef9eb2a40c10760eed000e9c9c5bb396",
"main.dart.js": "8a261ee057ab75c3d4f3522ac7f119d0",
"manifest.json": "72d931f89b0d918510a26c0a1becea3e",
"version.json": "92591f853b2ea248975804e8ccedda0a"};
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
