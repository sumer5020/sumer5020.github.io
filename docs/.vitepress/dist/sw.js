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
    "revision": "b89effabeba7e3f134e0d5c8580daa16"
  }, {
    "url": "about/index.html",
    "revision": "c48b6700e3ad93eebb582d4827e77c9b"
  }, {
    "url": "ar/about/index.html",
    "revision": "168b0f4fdf7689a4183a8054981b72de"
  }, {
    "url": "ar/blog/index.html",
    "revision": "16cf998b5fb4203981e9f229a7689b8f"
  }, {
    "url": "ar/contact/index.html",
    "revision": "4d9dbd53cd4dbf6ba59ac3d2ae74c147"
  }, {
    "url": "ar/index.html",
    "revision": "f449a3381a65541edcbdeae8d9be979a"
  }, {
    "url": "ar/projects/index.html",
    "revision": "0aee946fb0a7ccb113ef5325364dfd6c"
  }, {
    "url": "assets/about_index.md.3TmHvD-2.js",
    "revision": null
  }, {
    "url": "assets/about_index.md.3TmHvD-2.lean.js",
    "revision": null
  }, {
    "url": "assets/app.CiM4YRsd.js",
    "revision": null
  }, {
    "url": "assets/ar_about_index.md.5utqYV0c.js",
    "revision": null
  }, {
    "url": "assets/ar_about_index.md.5utqYV0c.lean.js",
    "revision": null
  }, {
    "url": "assets/ar_blog_index.md.Rw309Zi3.js",
    "revision": null
  }, {
    "url": "assets/ar_blog_index.md.Rw309Zi3.lean.js",
    "revision": null
  }, {
    "url": "assets/ar_contact_index.md.ntM0eNxE.js",
    "revision": null
  }, {
    "url": "assets/ar_contact_index.md.ntM0eNxE.lean.js",
    "revision": null
  }, {
    "url": "assets/ar_index.md.yOITueXo.js",
    "revision": null
  }, {
    "url": "assets/ar_index.md.yOITueXo.lean.js",
    "revision": null
  }, {
    "url": "assets/ar_projects_index.md.bhm9SPa3.js",
    "revision": null
  }, {
    "url": "assets/ar_projects_index.md.bhm9SPa3.lean.js",
    "revision": null
  }, {
    "url": "assets/blog_index.md.4qq1wuVb.js",
    "revision": null
  }, {
    "url": "assets/blog_index.md.4qq1wuVb.lean.js",
    "revision": null
  }, {
    "url": "assets/chunks/framework.g33eqF2v.js",
    "revision": null
  }, {
    "url": "assets/chunks/theme.EdT4jrTA.js",
    "revision": null
  }, {
    "url": "assets/contact_index.md.RW-txOp5.js",
    "revision": null
  }, {
    "url": "assets/contact_index.md.RW-txOp5.lean.js",
    "revision": null
  }, {
    "url": "assets/index.md.6gZ7J6E3.js",
    "revision": null
  }, {
    "url": "assets/index.md.6gZ7J6E3.lean.js",
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
    "url": "assets/projects_index.md.B72gylo9.js",
    "revision": null
  }, {
    "url": "assets/projects_index.md.B72gylo9.lean.js",
    "revision": null
  }, {
    "url": "assets/style.-KMDpJzN.css",
    "revision": null
  }, {
    "url": "assets/test_api.md.9xOioJHC.js",
    "revision": null
  }, {
    "url": "assets/test_api.md.9xOioJHC.lean.js",
    "revision": null
  }, {
    "url": "assets/test_md.md.M2t5awuU.js",
    "revision": null
  }, {
    "url": "assets/test_md.md.M2t5awuU.lean.js",
    "revision": null
  }, {
    "url": "blog/index.html",
    "revision": "76e1a2eff6df21b1168576ef1d05220b"
  }, {
    "url": "contact/index.html",
    "revision": "847da17056143d9e518057d0a1df3fee"
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
    "revision": "42c8e35d05e8fa1a742e63b34307232e"
  }, {
    "url": "projects/index.html",
    "revision": "4021327712a8c6e2c24b8d2b8280dd20"
  }, {
    "url": "registerSW.js",
    "revision": "1872c500de691dce40960bb85481de07"
  }, {
    "url": "robots.txt",
    "revision": "cd9cd94aaa699e0a16e692b6bb16f672"
  }, {
    "url": "test/api.html",
    "revision": "f85f13a67ef391f79d7e1905f56fea15"
  }, {
    "url": "test/md.html",
    "revision": "3900af40b3684c856e6bcbd675713cb9"
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
    "url": "icons/icon-384x384.png",
    "revision": "aefcce886e53cfe2d9baca0dca024c19"
  }, {
    "url": "manifest.webmanifest",
    "revision": "671cb4262ca88760aec99d755fd17874"
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
