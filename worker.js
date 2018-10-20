self.addEventListener('install', async (event) => {
  console.log('install');
  console.info(event);
})

self.addEventListener('fetch', async (event) => {
  console.log('fetch');
  console.warn(clients)
  clients.matchAll().then(client => {
    return clients.forEach(client => {
      return new Promise((resolve, reject) => {
        var msg_chan = new MessageChannel();

        msg_chan.port1.onmessage = function (event) {
          if (event.data.error) {
            reject(event.data.error);
          } else {
            resolve(event.data);
          }
        };

        console.info(client)

        client.postMessage('SW Says: \'' + msg + '\'', [msg_chan.port2]);
      }).then(e => console.log('SW: ' + e));
    });
  })

  if (event.request.url.endsWith('cats.png')) {
    event.respondWith(fetch('icon.png'))
  }
})

self.addEventListener('message', function(event){
  console.log('SW ' + event.data);

  console.info(event.ports);

  event.ports[0].postMessage('test back')
})
