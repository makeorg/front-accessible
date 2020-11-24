import './browserPolyfill';
import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import cookiesMiddleware from 'universal-cookie-express';
import favicon from 'serve-favicon';
import cors from 'cors';
import { env } from 'Shared/env';
import { ApiService } from 'Shared/api/ApiService';
import { ApiServiceServer } from 'Shared/api/ApiService/ApiService.server';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { initRoutes } from './routes';
import { serverInitI18n } from './i18n';
import { cspMiddleware } from './middleware/contentSecurityPolicy';
import { headersResponseMiddleware } from './middleware/headers';
import { nonceUuidMiddleware } from './middleware/nonceUuid';
import { FAVICON_PATH } from './paths';
import { proxyTargetApiUrl, frontUrl } from './configuration';

serverInitI18n();
ApiService.strategy = new ApiServiceServer();
// App
const getApp = () => {
  const app = express();

  const { hostname } = new URL(frontUrl);
  const apiProxy = createProxyMiddleware({
    target: proxyTargetApiUrl,
    pathRewrite: { '^/api-local': '' },
    changeOrigin: true,
    cookieDomainRewrite: {
      '*': hostname,
    },
    logLevel: 'error',
    secure: false,
  });

  app.use('/api-local', apiProxy);
  app.use(nonceUuidMiddleware);
  app.use(compression());
  app.use(bodyParser.json());
  app.use(favicon(FAVICON_PATH));
  app.use(cookiesMiddleware());
  app.use(headersResponseMiddleware);

  // apply csp everywhere except on styleguide /doc
  app.use(/^(?!.*doc).*$/, cspMiddleware);

  if (env.isDev()) app.use(cors());
  initRoutes(app);

  return app;
};

export const app = getApp();
