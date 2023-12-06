'use strict';

importScripts('/scripts/thirdparty/workbox-sw.js');
workbox.setConfig({
    modulePathPrefix: '/scripts/thirdparty/',
});
self.addEventListener('fetch',()=>{});