import './browserPolyfill';
import { ApiService } from 'Shared/api/ApiService';
import { ApiServiceServer } from 'Shared/api/ApiService/ApiService.server';
import { headersResponseMiddleware } from './middleware/headers';
import { cspMiddleware } from './middleware/contentSecurityPolicy';

import { serverInitI18n } from './i18n';
import { initRoutes } from './routes';

const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const cookiesMiddleware = require('universal-cookie-express');
const favicon = require('serve-favicon');

serverInitI18n();
ApiService.strategy = new ApiServiceServer();

const { FAVICON_PATH } = require('./paths');

// App
const app = express();
app.use(compression());
app.use(bodyParser.json());
app.use(favicon(FAVICON_PATH));
app.use(cookiesMiddleware());
app.use(headersResponseMiddleware);
// apply csp everywhere except on styleguide /doc
app.use(/^(?!.*doc).*$/, cspMiddleware);

initRoutes(app);

module.exports = app;
