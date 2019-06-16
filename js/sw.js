this.addEventListener('install',function(event){
  event.waitUntill(
  caches.open('my cache').then(function(e){
  e.addAll(['/css/form.css',
  '/css/index.css',
  '/css/project9.css',
  '/js/add.js',
  '/js/main.js',
  '/js/project9.js',
  '/js/sw.js',
  '/index.html',
  '/form.html',
  '/Project9.html',
  ])
  })
  )
})
// fetch event
this.addEventListener('fetch',function(event){
  event.respondWith(
    caches.open('my cache').then(function(cache) {
      return cache.match(event.request)
  .then(function (result) {
    return result || fetch(event.request)
    .then(function (result) {
      cathe.put(event.request,result.clone());
      return result;
    })

  })
    })
  )
})
