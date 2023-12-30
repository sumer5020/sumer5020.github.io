/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-f217a2cf'], (function (workbox) { 'use strict';

  self.skipWaiting();
  workbox.clientsClaim();

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "404.html",
    "revision": "3ae761132da8bc0ec226bb76dacf3853"
  }, {
    "url": "about/index.html",
    "revision": "0e0a571a78b77a48b76c55f01f3ce5bd"
  }, {
    "url": "ar/about/index.html",
    "revision": "e1bdffcb46e4a98dfc84d3e6c81c7754"
  }, {
    "url": "ar/blog/index.html",
    "revision": "aea7152207efd2699a00cdbdb5511f9a"
  }, {
    "url": "ar/contact/index.html",
    "revision": "b503f2333c212d73237c9f8dd9239358"
  }, {
    "url": "ar/index.html",
    "revision": "3d55297120865d87555db6729b3de1b2"
  }, {
    "url": "ar/projects/index.html",
    "revision": "00da665117ade1a05823b4e91575f69b"
  }, {
    "url": "assets/about_index.md.b3YQ7oBc.js",
    "revision": null
  }, {
    "url": "assets/about_index.md.b3YQ7oBc.lean.js",
    "revision": null
  }, {
    "url": "assets/app.-zXwYx2Y.js",
    "revision": null
  }, {
    "url": "assets/ar_about_index.md.eFaxqPJu.js",
    "revision": null
  }, {
    "url": "assets/ar_about_index.md.eFaxqPJu.lean.js",
    "revision": null
  }, {
    "url": "assets/ar_blog_index.md.zVk2Fxah.js",
    "revision": null
  }, {
    "url": "assets/ar_blog_index.md.zVk2Fxah.lean.js",
    "revision": null
  }, {
    "url": "assets/ar_contact_index.md.McLVNizP.js",
    "revision": null
  }, {
    "url": "assets/ar_contact_index.md.McLVNizP.lean.js",
    "revision": null
  }, {
    "url": "assets/ar_index.md.Blegosfp.js",
    "revision": null
  }, {
    "url": "assets/ar_index.md.Blegosfp.lean.js",
    "revision": null
  }, {
    "url": "assets/ar_projects_index.md.7xuB5Rqa.js",
    "revision": null
  }, {
    "url": "assets/ar_projects_index.md.7xuB5Rqa.lean.js",
    "revision": null
  }, {
    "url": "assets/blog_index.md.Srf6aWlu.js",
    "revision": null
  }, {
    "url": "assets/blog_index.md.Srf6aWlu.lean.js",
    "revision": null
  }, {
    "url": "assets/chunks/framework.nTjzNgj2.js",
    "revision": null
  }, {
    "url": "assets/chunks/theme.FrV_8m6t.js",
    "revision": null
  }, {
    "url": "assets/contact_index.md.6jm51Iu5.js",
    "revision": null
  }, {
    "url": "assets/contact_index.md.6jm51Iu5.lean.js",
    "revision": null
  }, {
    "url": "assets/index.md.cTnxZuRn.js",
    "revision": null
  }, {
    "url": "assets/index.md.cTnxZuRn.lean.js",
    "revision": null
  }, {
    "url": "assets/inter-italic-cyrillic-ext.OVycGSDq.woff2",
    "revision": null
  }, {
    "url": "assets/inter-italic-cyrillic.-nLMcIwj.woff2",
    "revision": null
  }, {
    "url": "assets/inter-italic-greek-ext.hznxWNZO.woff2",
    "revision": null
  }, {
    "url": "assets/inter-italic-greek.PSfer2Kc.woff2",
    "revision": null
  }, {
    "url": "assets/inter-italic-latin-ext.RnFly65-.woff2",
    "revision": null
  }, {
    "url": "assets/inter-italic-latin.27E69YJn.woff2",
    "revision": null
  }, {
    "url": "assets/inter-italic-vietnamese.xzQHe1q1.woff2",
    "revision": null
  }, {
    "url": "assets/inter-roman-cyrillic-ext.8T9wMG5w.woff2",
    "revision": null
  }, {
    "url": "assets/inter-roman-cyrillic.jIZ9REo5.woff2",
    "revision": null
  }, {
    "url": "assets/inter-roman-greek-ext.9JiNzaSO.woff2",
    "revision": null
  }, {
    "url": "assets/inter-roman-greek.Cb5wWeGA.woff2",
    "revision": null
  }, {
    "url": "assets/inter-roman-latin-ext.GZWE-KO4.woff2",
    "revision": null
  }, {
    "url": "assets/inter-roman-latin.bvIUbFQP.woff2",
    "revision": null
  }, {
    "url": "assets/inter-roman-vietnamese.paY3CzEB.woff2",
    "revision": null
  }, {
    "url": "assets/projects_index.md.utIFVBy6.js",
    "revision": null
  }, {
    "url": "assets/projects_index.md.utIFVBy6.lean.js",
    "revision": null
  }, {
    "url": "assets/style.gjEOpydT.css",
    "revision": null
  }, {
    "url": "assets/test_api.md.IczBvUCi.js",
    "revision": null
  }, {
    "url": "assets/test_api.md.IczBvUCi.lean.js",
    "revision": null
  }, {
    "url": "assets/test_md.md.aqOB8nOc.js",
    "revision": null
  }, {
    "url": "assets/test_md.md.aqOB8nOc.lean.js",
    "revision": null
  }, {
    "url": "blog/index.html",
    "revision": "98dae93657db4ea1259762d9c1ca79cd"
  }, {
    "url": "contact/index.html",
    "revision": "791c3e75188ea478a4d4e932191fc12f"
  }, {
    "url": "favicon.ico",
    "revision": "3575b2a0afb1cc4f0f8957891d3e464a"
  }, {
    "url": "favicon.png",
    "revision": "4fa58c6cb70b69b2280866c845db9f80"
  }, {
    "url": "icons/icon-128x128.png",
    "revision": "1a5e7b62e00357ec7136b6a7bc1d964a"
  }, {
    "url": "icons/icon-144x144.png",
    "revision": "8ac5ed3aada3ed554523a72bfaa12bd2"
  }, {
    "url": "icons/icon-152x152.png",
    "revision": "be729db30ccb84c9c2275fb6cb867c5f"
  }, {
    "url": "icons/icon-196x196.png",
    "revision": "244890427a56859c6a8ca7cd1a358208"
  }, {
    "url": "icons/icon-384x384.png",
    "revision": "aefcce886e53cfe2d9baca0dca024c19"
  }, {
    "url": "icons/icon-512x512.png",
    "revision": "1227a19acd69bf825b723b10d65ab79d"
  }, {
    "url": "icons/icon-72x72.png",
    "revision": "4fa58c6cb70b69b2280866c845db9f80"
  }, {
    "url": "icons/icon-96x96.png",
    "revision": "b5c0231fbaf949e30a7a2dfc75b0f33c"
  }, {
    "url": "icons/splash-1125x2436.png",
    "revision": "d9c3f24c955146cdb9ab94e21a86bcb1"
  }, {
    "url": "icons/splash-1242x2208.png",
    "revision": "6a395b08a973d4d411cdcad5db95faee"
  }, {
    "url": "icons/splash-1242x2688.png",
    "revision": "828a1dffe71daf62c32230d544750080"
  }, {
    "url": "icons/splash-1536x2048.png",
    "revision": "15bd75934af93577c4ced06d33bd89b2"
  }, {
    "url": "icons/splash-1668x2224.png",
    "revision": "a3f97ec95faddf97b9602addf8b5bd02"
  }, {
    "url": "icons/splash-1668x2388.png",
    "revision": "b26e503af3b0f51e56112e5000407e05"
  }, {
    "url": "icons/splash-2048x2732.png",
    "revision": "805fa4fa3798dd87507948ecdaeb951c"
  }, {
    "url": "icons/splash-640x1136.png",
    "revision": "cbf550201099ce124e2f88013d165b80"
  }, {
    "url": "icons/splash-750x1334.png",
    "revision": "327e4b16d37574a537cef1fc9a6e8852"
  }, {
    "url": "icons/splash-828x1792.png",
    "revision": "fbd0cc5bf45d582b3d2af4b17d8fa715"
  }, {
    "url": "image/sumer-ahmed-contact-qr.svg",
    "revision": "150d8caabbc6b652bf00aab7c31af832"
  }, {
    "url": "image/sumer5020.svg",
    "revision": "1797cfda0de26b4287c41e265c0a8363"
  }, {
    "url": "image/sumer5020Eye.svg",
    "revision": "947a53713bdcd7ad11e7f2115c2f2981"
  }, {
    "url": "index.html",
    "revision": "b7a81c87b9276b03eb1eebd2a8b515ea"
  }, {
    "url": "projects/index.html",
    "revision": "10115252679a9dd322232ca575563309"
  }, {
    "url": "registerSW.js",
    "revision": "1872c500de691dce40960bb85481de07"
  }, {
    "url": "robots.txt",
    "revision": "cd9cd94aaa699e0a16e692b6bb16f672"
  }, {
    "url": "test/api.html",
    "revision": "a978016218a3f7782d943d3b880dd8f3"
  }, {
    "url": "test/md.html",
    "revision": "83f57ec7d0e87f66002639abdf381d77"
  }, {
    "url": "icons/icon-72x72.png",
    "revision": "4fa58c6cb70b69b2280866c845db9f80"
  }, {
    "url": "icons/icon-96x96.png",
    "revision": "b5c0231fbaf949e30a7a2dfc75b0f33c"
  }, {
    "url": "icons/icon-128x128.png",
    "revision": "1a5e7b62e00357ec7136b6a7bc1d964a"
  }, {
    "url": "icons/icon-144x144.png",
    "revision": "8ac5ed3aada3ed554523a72bfaa12bd2"
  }, {
    "url": "icons/icon-152x152.png",
    "revision": "be729db30ccb84c9c2275fb6cb867c5f"
  }, {
    "url": "icons/icon-196x196.png",
    "revision": "244890427a56859c6a8ca7cd1a358208"
  }, {
    "url": "icons/icon-384x384.png",
    "revision": "aefcce886e53cfe2d9baca0dca024c19"
  }, {
    "url": "icons/icon-512x512.png",
    "revision": "1227a19acd69bf825b723b10d65ab79d"
  }, {
    "url": "manifest.webmanifest",
    "revision": "a4d1abe06fe6c83411492d6fb62b815f"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html"), {
    allowlist: [/^\/about\/index(\.html)?$/, /^\/ar\/about\/index(\.html)?$/, /^\/ar\/blog\/index(\.html)?$/, /^\/ar\/contact\/index(\.html)?$/, /^\/ar\/index(\.html)?$/, /^\/ar\/projects\/index(\.html)?$/, /^\/blog\/index(\.html)?$/, /^\/contact\/index(\.html)?$/, /^\/(\.html)?$/, /^\/projects\/index(\.html)?$/, /^\/test\/api(\.html)?$/, /^\/test\/md(\.html)?$/]
  }));
  workbox.registerRoute(({
    request,
    sameOrigin
  }) => {
    return sameOrigin && request.mode === "navigate";
  }, new workbox.NetworkOnly({
    plugins: [{
      handlerDidError: async () => Response.redirect("404", 302),
      cacheWillUpdate: async () => null
    }]
  }), 'GET');

}));
