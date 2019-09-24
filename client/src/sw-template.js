if ('function' === typeof importScripts) {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js'
  );

  if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);
    workbox.precaching.precacheAndRoute([]);
  } else {
    console.log(`Boo! Workbox didn't load 😬`);
  }

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
