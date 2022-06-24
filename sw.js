'use strict';

importScripts('sw-toolbox.js'); toolbox.precache(["index.html","index.css","index.js"]); toolbox.router.get('/images/*','/icons/links/*','/scripts/*', toolbox.cacheFirst); toolbox.router.get('/*', toolbox.networkFirst, { networkTimeoutSeconds: 5});