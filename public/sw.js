if (!self.define) {
  let e,
    n = {};
  const s = (s, c) => (
    (s = new URL(s + ".js", c).href),
    n[s] ||
      new Promise((n) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = s), (e.onload = n), document.head.appendChild(e);
        } else (e = s), importScripts(s), n();
      }).then(() => {
        let e = n[s];
        if (!e) throw new Error(`Module ${s} didn’t register its module`);
        return e;
      })
  );
  self.define = (c, t) => {
    const a = e || ("document" in self ? document.currentScript.src : "") || location.href;
    if (n[a]) return;
    let i = {};
    const u = (e) => s(e, a),
      f = { module: { uri: a }, exports: i, require: u };
    n[a] = Promise.all(c.map((e) => f[e] || u(e))).then((e) => (t(...e), i));
  };
}
define(["./workbox-9b4d2a02"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: "/_next/app-build-manifest.json", revision: "5a075b3a95f4f3fe7d4de14474f33da0" },
        { url: "/_next/static/PJxn9fmbctufd155GnxCe/_buildManifest.js", revision: "75740cacd3ef418c900cdf5afc2f6581" },
        { url: "/_next/static/PJxn9fmbctufd155GnxCe/_ssgManifest.js", revision: "b6652df95db52feb4daf4eca35380933" },
        { url: "/_next/static/chunks/1023-f8665561d8d5176f.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/12038df7-d74b37241ab7fe23.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/132-0971de0210c45117.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/1339-ddbc1265cfa7a691.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/1865-29d052a4a34dfdf7.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/2044-dd2248086259c04b.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/2749-799c033b69b2793e.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/3071-d5f5b59dcab1647f.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/3116-587ef1e6f58aadbe.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/329-160faa92eaa56bd4.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/3492-dd5747e2685d2950.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/3574-98c9905276790961.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/3627521c-d968479d2eabd39f.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/3710-a9d2784e9042f186.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/3975-c07281bc41775b55.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/4368-1fcc25ecae869921.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/4458-bc034cead4a758cb.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/4711-2b18ed54250cbc78.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/4840-810570b4bd39151e.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/4f9d9cd8-f714fdd8b8c8c585.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/5093-8673c9a7f5f5775d.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/5096-00550f56ac3f22c6.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/5473-1a1fa3388e1cca21.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/5543-3f2007e7b3cb7b40.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/5570-4dad4d0ee9a6263e.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/5623-5f9424110239baf5.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/6782-8d7ec7105060dd26.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/6804-94317921f246b43c.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/6964-70045d8b31b64dd1.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/7203-a12f7eb709dca301.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/7373-650641ba4affe69c.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/7459-421713cab88887a6.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/7864-c5c01fb50d2e5752.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/8110-491bdd3ffeb3ff66.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/8170-4693005ab5b8fa82.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/8865-eab08caeb353f159.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/8939-aa7274b706e26d9a.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/8dc5345f-b250dba83093c7c0.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/9339-f3a05d7ae32394a6.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/9366-2f144675a85b1608.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/9736-5625207be2c5a86a.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/9809-c72d1f70c6b443cc.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/app/(PublicLayout)/about/page-2e2b0254380f5870.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/app/(PublicLayout)/brands/%5BbrandSlug%5D/page-90bdd88eee5ff044.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/app/(PublicLayout)/brands/page-fbb700b18ee8bac0.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/app/(PublicLayout)/cart/page-18930ae8497b6bac.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/app/(PublicLayout)/categories/%5BcatSlug%5D/page-07696477800830f2.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/app/(PublicLayout)/categories/page-6a9c299bf08073e7.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/app/(PublicLayout)/contact/page-b450031bfbc05439.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/app/(PublicLayout)/faq/page-51339c9468347f06.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/app/(PublicLayout)/layout-17bd4470da9f1e02.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/app/(PublicLayout)/login/page-1804e5caed94f30d.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/app/(PublicLayout)/pre-order/page-a32d8f7319fb412b.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/app/(PublicLayout)/product/%5BproductId%5D/page-d0e504fc783e0ec4.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/app/(PublicLayout)/registration/page-94f85a32899db8d4.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/app/(PublicLayout)/search/%5BsearchKey%5D/page-400c8b256e1dc6ea.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/app/admin/account-requests/accept/%5BreqId%5D/page-e8c1c22573a5f229.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/app/admin/account-requests/page-460e7e2b69c064ba.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/app/admin/layout-02af20f814e743ac.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/app/admin/manage-customer/create/page-05ae875a8ce2d593.js", revision: "PJxn9fmbctufd155GnxCe" },
        {
          url: "/_next/static/chunks/app/admin/manage-customer/details/%5BcustomerId%5D/page-66f1faa21503b34a.js",
          revision: "PJxn9fmbctufd155GnxCe",
        },
        { url: "/_next/static/chunks/app/admin/manage-customer/edit/%5BcustomerId%5D/page-a81d9d5fe8ce5c85.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/app/admin/manage-customer/page-8a33a7247f19119f.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/app/admin/profile/page-f0153fcce2dea398.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/app/dashboard/layout-00da9dabb224f8bb.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/app/dashboard/order-history/page-c37897e2f0912463.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/app/dashboard/order-in-queue/page-45d8a7c8ffa3bea7.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/app/dashboard/profile/page-49c1ea9e863c0a6b.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/app/dashboard/quotation-approved/page-555bad9e360eb57a.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/app/dashboard/quotation-requests/page-4ef018218e154bf7.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/app/layout-db2998792bcc52f9.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/app/not-found-3eb4b3137e0d6498.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/app/page-85fba5d29f885eb3.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/b5c10047-2b4232cc9d6c6e61.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/bc9c3264-f4dc33cace79ac88.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/e416a3ff-d4edec9073cec08d.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/ec3863c0-bab603b479867dd2.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/fd9d1056-6082a6a9766c86eb.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/framework-4498e84bb0ba1830.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/main-52e9062749a20a1e.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/main-app-b87b9f18fd6f7e3b.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/pages/_app-7bb460e314c5f602.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/pages/_error-8aa332dfaf8ff0ba.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js", revision: "837c0df77fd5009c9e46d446188ecfd0" },
        { url: "/_next/static/chunks/webpack-78853bcd9a89415d.js", revision: "PJxn9fmbctufd155GnxCe" },
        { url: "/_next/static/css/244269618597622a.css", revision: "244269618597622a" },
        { url: "/_next/static/css/804fa6e8337271aa.css", revision: "804fa6e8337271aa" },
        { url: "/_next/static/css/b26c252b0bf486c6.css", revision: "b26c252b0bf486c6" },
        { url: "/_next/static/css/b7f95b6718243dec.css", revision: "b7f95b6718243dec" },
        { url: "/_next/static/css/b8ba24c41e01520c.css", revision: "b8ba24c41e01520c" },
        { url: "/_next/static/css/bccd8f6adaa319e9.css", revision: "bccd8f6adaa319e9" },
        { url: "/_next/static/css/d9c78ba0bd1478e7.css", revision: "d9c78ba0bd1478e7" },
        { url: "/_next/static/css/e127519c2f3e44ae.css", revision: "e127519c2f3e44ae" },
        { url: "/img/DRINKS.svg", revision: "a372cc7a0165cb3ec96ed46688b45d31" },
        { url: "/img/GOLDEN-ANCHOR-PNG-LOGO.png", revision: "c6decee4dcf54237f53546160d9374db" },
        { url: "/img/aboutBanner-bg.jpg", revision: "5e885e655e1831827f255fd41b777105" },
        { url: "/img/aout-us-foot-banner.jpg", revision: "c2e3d63febb6aa26a6f5774d7358019d" },
        { url: "/img/brand-banner.jpg", revision: "81fcf4d0123817082abfa058566c8fd3" },
        { url: "/img/call-to-act.jpg", revision: "64ccac6552d2e08fe898bc32d3b30d20" },
        { url: "/img/categoris-banner.jpg", revision: "ae635feed780673f1303071d5350c6f0" },
        { url: "/img/contact-banner.jpg", revision: "cad19bbc3940d9dd2c7648cf541d29ea" },
        { url: "/img/faq-bg.jpg", revision: "fbd0c5a47128a066bbfba210256f2a43" },
        { url: "/img/oceanharborlogodemo.jpeg", revision: "aff69113e52eb9cbc2de8c87966e9d18" },
        { url: "/img/home-banner-1.jpg", revision: "9191c4badc254b6dc7c277e3c85f73be" },
        { url: "/img/home-banner-2.jpg", revision: "ae2db20ff82d93a8a77eccb6c4772950" },
        { url: "/img/home-banner-3.jpg", revision: "9d07a5422c5445971e236fa426b74c44" },
        { url: "/img/pran-logo.png", revision: "cdf51adb8d1aa4b7adfbed9fe68fe137" },
        { url: "/img/preorder.jpg", revision: "5585229cf87ede161fd38758c6fa42c6" },
        { url: "/img/product-dummy.png", revision: "865f419c443b3634c392853583298fa3" },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({ request: e, response: n, event: s, state: c }) =>
              n && "opaqueredirect" === n.type ? new Response(n.body, { status: 200, statusText: "OK", headers: n.headers }) : n,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({ cacheName: "google-fonts-webfonts", plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 })] }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({ cacheName: "static-font-assets", plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })] }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({ cacheName: "static-image-assets", plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })] }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({ cacheName: "next-image", plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })] }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [new e.RangeRequestsPlugin(), new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [new e.RangeRequestsPlugin(), new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({ cacheName: "static-js-assets", plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({ cacheName: "static-style-assets", plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({ cacheName: "next-data", plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({ cacheName: "static-data-assets", plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const n = e.pathname;
        return !n.startsWith("/api/auth/") && !!n.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })],
      }),
      "GET"
    );
});
