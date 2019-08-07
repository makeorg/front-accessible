import './browserPolyfill';
import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import cookiesMiddleware from 'universal-cookie-express';
import favicon from 'serve-favicon';
import { ApiService } from 'Shared/api/ApiService';
import { ApiServiceServer } from 'Shared/api/ApiService/ApiService.server';
import { initRoutes } from './routes';
import { serverInitI18n } from './i18n';
import { cspMiddleware } from './middleware/contentSecurityPolicy';
import { headersResponseMiddleware } from './middleware/headers';
import { nonceUuidMiddleware } from './middleware/nonceUuid';
import { FAVICON_PATH } from './paths';

serverInitI18n();
ApiService.strategy = new ApiServiceServer();

// App
const app = express();

app.use(nonceUuidMiddleware);
app.use(compression());
app.use(bodyParser.json());
app.use(favicon(FAVICON_PATH));
app.use(cookiesMiddleware());
app.use(headersResponseMiddleware);

// apply csp everywhere except on styleguide /doc
app.use(/^(?!.*doc).*$/, cspMiddleware);

initRoutes(app);

module.exports = app;
