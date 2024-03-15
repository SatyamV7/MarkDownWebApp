// install service worker
self.addEventListener('install', evt => {
    console.log('Service Worker has been installed', evt);
});

// activate service worker
self.addEventListener('activate', evt => {
    console.log('Service Worker has been activated', evt);
});

//fetch event detection
self.addEventListener('fetch', evt => {
    console.log('Fetch Event detected', evt);
});
