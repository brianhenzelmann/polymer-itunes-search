const express = require('express');
const path = require('path');
const app = express();
const proxy = require('express-http-proxy');

const publicDirectory = process.env.base_directory || '../public';
const port = process.env.PORT || 3000;
const apiRoot = process.env.api_root || 'https://itunes.apple.com';

/**
 * Transform the response of the proxy to make sure the JSON is parse properly.
 * 
 * @param {Object} proxyRes - response object from the proxied request
 * @param {String} proxyResData - response data from the proxied request
 * @param {Object} userReq - original request
 * @param {Object} userRes - original request's response object
 */
const cleanResponseHeaders = (proxyRes, proxyResData, userReq, userRes) => {
  // Override the bad content type that the iTunes Search API returns
  userRes._headers['content-type'] = 'application/json';

  // Return the proxied response unaltered
  return proxyResData;
}

/**
 * Proxy requests to the iTunes Search API.
 * This could later be used to inject access tokens to other APIs.
 */
app.use('/api', proxy(apiRoot, {
  userResDecorator: cleanResponseHeaders
}));

/**
 * Serve up static content from the designated public directory
 */
app.use('/', express.static(path.join(__dirname, publicDirectory)));

/**
 * Start the server
 */
app.listen(port,  () => {
  console.log('App listening on port ' + port);
});