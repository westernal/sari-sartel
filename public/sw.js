if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let r={};const c=e=>i(e,t),o={module:{uri:t},exports:r,require:c};s[t]=Promise.all(a.map((e=>o[e]||c(e)))).then((e=>(n(...e),r)))}}define(["./workbox-75794ccf"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Fonts/IRANYekanExtraBlack.ttf",revision:"9d84d24120dde4ccef88ffab0437645d"},{url:"/Fonts/IRANYekanRegular.ttf",revision:"5504ec99783af49b905fcb3c4ed78e55"},{url:"/Fonts/LICENSE.txt",revision:"d273d63619c9aeaf15cdaf76422c4f87"},{url:"/Fonts/RobotoCondensed-Bold.ttf",revision:"e38804ae070b58fbf4fdd88fd6853929"},{url:"/Fonts/RobotoCondensed-BoldItalic.ttf",revision:"70146deb50d627bc5a157f9bae044a67"},{url:"/Fonts/RobotoCondensed-Italic.ttf",revision:"94a4ea4f157a6ee51a0191b5ac515bac"},{url:"/Fonts/RobotoCondensed-Light.ttf",revision:"905c2728284a6b881d4e417b80f1e79d"},{url:"/Fonts/RobotoCondensed-LightItalic.ttf",revision:"163ae0c375f774263b11d3bc391d77c6"},{url:"/Fonts/RobotoCondensed-Regular.ttf",revision:"0134dd8fe6fe708de73909a71d842780"},{url:"/Images/112-1121666_broken-tablets-by-apple-google-and-samsung-needing-removebg-preview (1).jpg",revision:"d08954d7704381607a847bff2c28a6b8"},{url:"/Images/117136-images-airpods-png-file-hd.png",revision:"3caed4d5f3b3192d5a6436c71e6e4453"},{url:"/Images/193-1939793_most-popular-smartwatches-samsung-galaxy-watch-hd-png.jpg",revision:"5724eb68986207ce7e7e2b8ace2b03d9"},{url:"/Images/61l9ppRIiqL._SL1500_.jpg",revision:"5f01275d432f398b60190e0114460da0"},{url:"/Images/Frame 85 (1).svg",revision:"88bbfe7ab38a05253bfa27383a0e0ce6"},{url:"/Images/Frame 85.svg",revision:"9e30301d0707050ed5438a8d759bde54"},{url:"/Images/Frame 86.svg",revision:"dc301156ca1e84b7a3bdcd64e67d14ea"},{url:"/Images/PDP-O1-Pink-lockup-01-1600x1200.webp",revision:"03f29933295708fa1a4907b0dc2300b4"},{url:"/Images/background-shapes-01alt-14-41-42-627.png",revision:"807edf40d7e9df765951aae871d86677"},{url:"/Images/burger-menu.png",revision:"6d5b73f68d5940d103d1194a7b704e4b"},{url:"/Images/favicon.ico",revision:"e8d7bb4a0abfd0dd78c45d29fc46b5d1"},{url:"/Images/hero--iphone12-removebg-preview.jpg",revision:"fd2cfca657435f280485369986f5f011"},{url:"/Images/icon-192x192.png",revision:"0922bc18b625c2c25ef3c537a8df76cb"},{url:"/Images/icon-512x512.png",revision:"56b7e55454ef9308e7bc63c87427909e"},{url:"/Images/icons8-instagram-30.png",revision:"9bcc7af4eebc07517e9ff3a9bcc5e93b"},{url:"/Images/icons8-instagram.svg",revision:"a4680d90c75d409c16e457568d2818aa"},{url:"/Images/icons8-location-50.png",revision:"a48833336c968f215e6012fb3b3ab38b"},{url:"/Images/icons8-male-user-64-blue.png",revision:"2a6484f3d842c6d1046930eb1529c042"},{url:"/Images/icons8-male-user-64.png",revision:"9fa5b09e784327752a5896dc5a08aa58"},{url:"/Images/icons8-ringer-volume-50.png",revision:"15ef5a68aefad1d3bc5700bb4406bde4"},{url:"/Images/icons8-sort-down-24.png",revision:"61bce546de8411962d0c18e2fe370423"},{url:"/Images/imgonline-com-ua-ReplaceColor-NPlCJjd7GepfKE5-removebg-preview.png",revision:"8a3aa89fa1a536b551af8d4970ebde16"},{url:"/Images/logo-removebg-preview.png",revision:"a96540bcbec62a10b46575cda1357409"},{url:"/Images/trash-svgrepo-com.svg",revision:"3737f814d3fcdcda76b83c2b17393ab4"},{url:"/_next/static/chunks/247-7619912a799cb623.js",revision:"kFjPfeIXMfOXj2UGAQ6Oi"},{url:"/_next/static/chunks/588-42b011f1e1d4a611.js",revision:"kFjPfeIXMfOXj2UGAQ6Oi"},{url:"/_next/static/chunks/795-77a0a930db74d2a5.js",revision:"kFjPfeIXMfOXj2UGAQ6Oi"},{url:"/_next/static/chunks/framework-5f4595e5518b5600.js",revision:"kFjPfeIXMfOXj2UGAQ6Oi"},{url:"/_next/static/chunks/main-50770868367ef490.js",revision:"kFjPfeIXMfOXj2UGAQ6Oi"},{url:"/_next/static/chunks/pages/_app-a32fe9eb6fa2cf9b.js",revision:"kFjPfeIXMfOXj2UGAQ6Oi"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"kFjPfeIXMfOXj2UGAQ6Oi"},{url:"/_next/static/chunks/pages/about-4173b4211defa241.js",revision:"kFjPfeIXMfOXj2UGAQ6Oi"},{url:"/_next/static/chunks/pages/index-9d334f9a85395d8f.js",revision:"kFjPfeIXMfOXj2UGAQ6Oi"},{url:"/_next/static/chunks/pages/products/%5Bname%5D-3b6724c0cfe71872.js",revision:"kFjPfeIXMfOXj2UGAQ6Oi"},{url:"/_next/static/chunks/pages/products/%5Bname%5D/%5Bid%5D-3b1afeded55f3371.js",revision:"kFjPfeIXMfOXj2UGAQ6Oi"},{url:"/_next/static/chunks/pages/suggestions-d1ae92b5095515e2.js",revision:"kFjPfeIXMfOXj2UGAQ6Oi"},{url:"/_next/static/chunks/pages/user-cdf9deeebb3babc3.js",revision:"kFjPfeIXMfOXj2UGAQ6Oi"},{url:"/_next/static/chunks/pages/user/admin-12a8998b037923cb.js",revision:"kFjPfeIXMfOXj2UGAQ6Oi"},{url:"/_next/static/chunks/pages/user/admin/add/post-843790b96c8ee6f9.js",revision:"kFjPfeIXMfOXj2UGAQ6Oi"},{url:"/_next/static/chunks/pages/user/admin/add/product-4d7c6bad4ecc9156.js",revision:"kFjPfeIXMfOXj2UGAQ6Oi"},{url:"/_next/static/chunks/pages/user/login-e779df5279e587b4.js",revision:"kFjPfeIXMfOXj2UGAQ6Oi"},{url:"/_next/static/chunks/pages/user/order/%5Bid%5D-91240b318679fa15.js",revision:"kFjPfeIXMfOXj2UGAQ6Oi"},{url:"/_next/static/chunks/pages/user/signup-f590177897e49228.js",revision:"kFjPfeIXMfOXj2UGAQ6Oi"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"kFjPfeIXMfOXj2UGAQ6Oi"},{url:"/_next/static/chunks/webpack-d7b038a63b619762.js",revision:"kFjPfeIXMfOXj2UGAQ6Oi"},{url:"/_next/static/css/dda4811c9cefafbc.css",revision:"kFjPfeIXMfOXj2UGAQ6Oi"},{url:"/_next/static/css/f444d39e0c7983f6.css",revision:"kFjPfeIXMfOXj2UGAQ6Oi"},{url:"/_next/static/kFjPfeIXMfOXj2UGAQ6Oi/_buildManifest.js",revision:"kFjPfeIXMfOXj2UGAQ6Oi"},{url:"/_next/static/kFjPfeIXMfOXj2UGAQ6Oi/_middlewareManifest.js",revision:"kFjPfeIXMfOXj2UGAQ6Oi"},{url:"/_next/static/kFjPfeIXMfOXj2UGAQ6Oi/_ssgManifest.js",revision:"kFjPfeIXMfOXj2UGAQ6Oi"},{url:"/_next/static/media/Frame 85 (1).ee41be94.svg",revision:"kFjPfeIXMfOXj2UGAQ6Oi"},{url:"/_next/static/media/Frame 85.e65d28ba.svg",revision:"kFjPfeIXMfOXj2UGAQ6Oi"},{url:"/_next/static/media/Frame 86.fd38f91e.svg",revision:"kFjPfeIXMfOXj2UGAQ6Oi"},{url:"/_next/static/media/IRANYekanExtraBlack.f6a5df11.ttf",revision:"kFjPfeIXMfOXj2UGAQ6Oi"},{url:"/_next/static/media/IRANYekanRegular.02befe3f.ttf",revision:"kFjPfeIXMfOXj2UGAQ6Oi"},{url:"/manifest.json",revision:"7e7ba9e200efcf8e3f5bed851a04c76e"},{url:"/sitemap.xml",revision:"04f8692f176c0a6eef8a780ab667a97a"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
