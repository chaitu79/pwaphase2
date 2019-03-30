this.addEventListener('install',function(event){
  event.waitUntill(
  caches.open('my cache').then(function(e){
  e.addAll(['/css/form.css',
  '/css/index.css',
  '/css/ressume.css',
  '/js/add.js',
  '/js/main.js',
  '/js/resume.js',
  '/js/sw.js',
  '/index.html',
  '/form.html',
  '/resume.html',
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
