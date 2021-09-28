self.addEventListener('install', event=>{
console.log('sw--> installing...', event);
});

self.addEventListener('activate', event=>{
    console.log('sw--> activating...', event);
    });

    self.addEventListener('fetch', event=>{
        console.log('sw--> fetching...', event.request);
        });