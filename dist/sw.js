importScripts('workbox-sw.prod.v2.1.2.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "css/styles.css",
    "revision": "3930ed48c67c19a00ef57355b67a4352"
  },
  {
    "url": "cursos.html",
    "revision": "c8f8059328236f798030d0e48c0ce406"
  },
  {
    "url": "img/back-careers.jpg",
    "revision": "d45d6a752c4d5a0d8f9ecf094ae2d983"
  },
  {
    "url": "img/back-index.jpg",
    "revision": "0d1fb584947116eccd06c3932617f708"
  },
  {
    "url": "img/carreras.jpg",
    "revision": "62c7e37bedc8d6eb8846fc55089c1905"
  },
  {
    "url": "img/contacto.jpg",
    "revision": "f1ac8ecfc884be4a1662127491ee9cc4"
  },
  {
    "url": "img/favi.png",
    "revision": "d887e9297853588e035508ab2e421d24"
  },
  {
    "url": "img/i-baguette.svg",
    "revision": "10fba487b8cd3c16de1d6a02925cebb9"
  },
  {
    "url": "img/i-clock.svg",
    "revision": "302b7b43d5e413841a71b5dea86631ad"
  },
  {
    "url": "img/i-cup.svg",
    "revision": "11b9eaa33be1e3d39e490bdcf94b8cd0"
  },
  {
    "url": "img/i-footer-at.svg",
    "revision": "5c050c9b208850e0adc96cd8057dc4c8"
  },
  {
    "url": "img/i-footer-facebook.png",
    "revision": "513d6e71983bcb25cf1c0ac37697ecf6"
  },
  {
    "url": "img/i-footer-information.svg",
    "revision": "b185cce996888b3ea390fbc0b374f523"
  },
  {
    "url": "img/i-footer-instagram.png",
    "revision": "154a4e3d3112efd4734e51a18e95fbc0"
  },
  {
    "url": "img/i-footer-location.svg",
    "revision": "469cba111561f186018d4e74409173cc"
  },
  {
    "url": "img/i-footer-phone.svg",
    "revision": "de6476f105a801314fc218780a9fa405"
  },
  {
    "url": "img/i-graduate.svg",
    "revision": "17a105fca418a7e1bf6e12ac17f06c3d"
  },
  {
    "url": "img/i-pizza.svg",
    "revision": "99f4bb774578c250ca71f383564f82de"
  },
  {
    "url": "img/i-sushi.svg",
    "revision": "e2118282e343fe9bac2960f5a730eada"
  },
  {
    "url": "img/i-test.svg",
    "revision": "001bd7d223bc6c504e45d3884dd9af26"
  },
  {
    "url": "img/icon-close.png",
    "revision": "72bc08d5d72de0ddcfebdeff47b38b73"
  },
  {
    "url": "img/icon-menu.png",
    "revision": "2afbb8a8374d9a795e018b98b276bd39"
  },
  {
    "url": "img/isologo.png",
    "revision": "2f4dff10fe0a88d3f2082f8fcf739ade"
  },
  {
    "url": "img/logo.png",
    "revision": "29412150a787b882324e5bbf07f7cb98"
  },
  {
    "url": "img/logo.svg",
    "revision": "7c4ba7a67f119ffbc2a324d50b91e4ff"
  },
  {
    "url": "img/nuestro-chef-1.jpg",
    "revision": "0d1fb584947116eccd06c3932617f708"
  },
  {
    "url": "img/nuestro-chef-2.jpg",
    "revision": "94834fb013549d3b2f4f16fff54435f5"
  },
  {
    "url": "index.html",
    "revision": "fba94314837f8ae39b44b79596f3165a"
  },
  {
    "url": "js/script.js",
    "revision": "8971778a9cc0ad74eeea6d9ed8a7b87f"
  },
  {
    "url": "manifest/mani-144.png",
    "revision": "2cd03f7c604b892a71ca5e04914a982a"
  },
  {
    "url": "manifest/mani-192.png",
    "revision": "0db7919379e5d67e36cacbe2ea4b5344"
  },
  {
    "url": "manifest/mani-96.png",
    "revision": "985fcf10c13f93467ff449b413808964"
  },
  {
    "url": "sended-form.html",
    "revision": "721ca0c8c0fc80418c800d321adf0a8b"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
