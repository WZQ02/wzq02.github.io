'use strict';

importScripts('/scripts/3rdparty/workbox-sw.js');
workbox.setConfig({
    modulePathPrefix: '/scripts/3rdparty/',
});
self.addEventListener('fetch',()=>{});