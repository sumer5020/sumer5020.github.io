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
    "revision": "e432082e1f76ddd4cf846d70a4169191"
  }, {
    "url": "about/index.html",
    "revision": "60db26d2d6f8be7d7c58e903279098b1"
  }, {
    "url": "ar/about/index.html",
    "revision": "935c8fb1557b11fd13638ca4910a76dd"
  }, {
    "url": "ar/blog/index.html",
    "revision": "a43dd1ee7b7d0a19e646f0b3bc7b2738"
  }, {
    "url": "ar/contact/index.html",
    "revision": "5bb790c8951c0322d73b4ff99be04e54"
  }, {
    "url": "ar/index.html",
    "revision": "12fa5973a75084f747836490818d3be4"
  }, {
    "url": "ar/projects/index.html",
    "revision": "93b848f2ffcc94907bbc82c351cbf8de"
  }, {
    "url": "assets/about_index.md.rNblPHVs.js",
    "revision": null
  }, {
    "url": "assets/about_index.md.rNblPHVs.lean.js",
    "revision": null
  }, {
    "url": "assets/app.CiM4YRsd.js",
    "revision": null
  }, {
    "url": "assets/ar_about_index.md.LINr5pDz.js",
    "revision": null
  }, {
    "url": "assets/ar_about_index.md.LINr5pDz.lean.js",
    "revision": null
  }, {
    "url": "assets/ar_blog_index.md.pUHmH1zJ.js",
    "revision": null
  }, {
    "url": "assets/ar_blog_index.md.pUHmH1zJ.lean.js",
    "revision": null
  }, {
    "url": "assets/ar_contact_index.md.WpUelLb7.js",
    "revision": null
  }, {
    "url": "assets/ar_contact_index.md.WpUelLb7.lean.js",
    "revision": null
  }, {
    "url": "assets/ar_index.md.JE_SqI8k.js",
    "revision": null
  }, {
    "url": "assets/ar_index.md.JE_SqI8k.lean.js",
    "revision": null
  }, {
    "url": "assets/ar_projects_index.md._W8qTiJC.js",
    "revision": null
  }, {
    "url": "assets/ar_projects_index.md._W8qTiJC.lean.js",
    "revision": null
  }, {
    "url": "assets/blog_index.md.C0o-CG30.js",
    "revision": null
  }, {
    "url": "assets/blog_index.md.C0o-CG30.lean.js",
    "revision": null
  }, {
    "url": "assets/chunks/framework.g33eqF2v.js",
    "revision": null
  }, {
    "url": "assets/chunks/theme.EdT4jrTA.js",
    "revision": null
  }, {
    "url": "assets/contact_index.md.aS-sGdOL.js",
    "revision": null
  }, {
    "url": "assets/contact_index.md.aS-sGdOL.lean.js",
    "revision": null
  }, {
    "url": "assets/index.md.ctLE7b4E.js",
    "revision": null
  }, {
    "url": "assets/index.md.ctLE7b4E.lean.js",
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
    "url": "assets/projects_index.md.qrzePRHV.js",
    "revision": null
  }, {
    "url": "assets/projects_index.md.qrzePRHV.lean.js",
    "revision": null
  }, {
    "url": "assets/style.pz1oVix1.css",
    "revision": null
  }, {
    "url": "assets/test_api.md.PCgbzHgS.js",
    "revision": null
  }, {
    "url": "assets/test_api.md.PCgbzHgS.lean.js",
    "revision": null
  }, {
    "url": "assets/test_md.md.kvccmNGu.js",
    "revision": null
  }, {
    "url": "assets/test_md.md.kvccmNGu.lean.js",
    "revision": null
  }, {
    "url": "blog/index.html",
    "revision": "1d58ae4166604fe8db93a16e26b0bddd"
  }, {
    "url": "contact/index.html",
    "revision": "2ef6b52be2529c0b456f64ff8c970a1e"
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
    "revision": "cab338a7e3a37da65dcf48cf4605bb0b"
  }, {
    "url": "projects/index.html",
    "revision": "072276682fe6ef7922a7636caf6b8205"
  }, {
    "url": "registerSW.js",
    "revision": "1872c500de691dce40960bb85481de07"
  }, {
    "url": "robots.txt",
    "revision": "cd9cd94aaa699e0a16e692b6bb16f672"
  }, {
    "url": "test/api.html",
    "revision": "197fe314ddda93202080d20c3452a655"
  }, {
    "url": "test/md.html",
    "revision": "004c375310d2359c9bc20d1f5d473fda"
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
