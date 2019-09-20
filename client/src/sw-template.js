if ('function' === typeof importScripts) {

importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js'
    );

if (workbox) {
  debugger;
  console.log(`Yay! Workbox is loaded 🎉`);
  workbox.precaching.precacheAndRoute([]);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

const bgSyncPlugin = new workbox.backgroundSync.Plugin('trythisoky', {
    maxRetentionTime: 24 * 60
  })

workbox.routing.registerRoute(
    /\.(?:js|css|html)$/,
    new workbox.strategies.NetworkFirst()
  );

  workbox.routing.registerRoute(
   'http://localhost:3000',
    new workbox.strategies.NetworkFirst()
  );
} else {
  console.log('Workbox could not be loaded. No offline supports');
}

const queue = new workbox.backgroundSync.Queue('my-queue-name', {
  onSync: async (queue) => {
    let entry;
    while (entry = await this.shiftRequest()) {
      try {
        await fetch(entry.request);
        console.error('Replay successful for request', entry.request);
      } catch (error) {
        console.error('Replay failed for request', entry.request, error);

        // Put the entry back in the queue and re-throw the error:
        await this.unshiftRequest(entry);
        throw error;
      }
    }
    console.log('Replay complete!');
  }
});
  







 






