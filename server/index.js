const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const serveStatic = require('serve-static');
require('./browserPolyfill');
const reactRender = require('./reactRender');
const { BUILD_DIR, PUBLIC_DIR } = require('./paths');

function setCustomCacheControl(res, path) {
  if (serveStatic.mime.lookup(path) === 'text/html') {
    // Custom Cache-Control for HTML files
    res.setHeader('Cache-Control', 'public, max-age=0');
  }
}

// Constants
const PORT = process.env.PORT || 9009;
const HOST = process.env.HOST || 'localhost';

// App
const app = express();
app.use(compression());

app.use(bodyParser.json());

app.get('/', reactRender);

// Static files
app.use(express.static(BUILD_DIR, {
  maxAge: '1d',
  setHeaders: setCustomCacheControl
}));

app.use(express.static(PUBLIC_DIR, {
  maxAge: '1d',
  setHeaders: setCustomCacheControl
}));


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
