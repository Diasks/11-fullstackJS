// const workBoxPlugin = require('workbox-webpack-plugin');
// const path = require('path');

// module.exports = {
//     webpack: (config, env) => {
//         if (env === 'production') {
//             const workBoxConfigProduction = {
//                 swSrc: path.join(__dirname, 'public', 'my-service-worker.js'),
//                 swDest: 'service-worker.js',
//                 importWorkboxFrom: 'disabled'
//             }
//             config = removeSWPrecachePlugin(config)
//             config.plugins.push(new workBoxPlugin(workBoxConfigProduction))
//         }
//         return config
//     }
// }

// const removeSWPrecachePlugin = (config) => {
//     const swPrecachePluginIndex = config.plugin.findIndex((element) => {
//         return element.constructor.name === 'SWPrecacheWebpackPlugin' 
//     })
//    if (swPrecachePluginIndex !== -1) {
//        config.plugins.splice(swPrecachePluginIndex, 1)
//    }
//    return config
// }