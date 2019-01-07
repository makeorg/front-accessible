import * as React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ServerStyleSheet } from 'styled-components';
import { HeadProvider } from 'react-head';
import configureStore from '../src/store';
import AppContainer from '../src/containers/App';
import i18next from '../src/i18n';
import routes from '../shared/routes';

const fs = require('fs');
const path = require('path');
const { BUILD_DIR } = require('./paths');
const configuration = require('./configuration.js');

const renderHtml = (reactApp, reduxStore, metaTags) => {
  const { apiUrl, frontUrl } = configuration;
  const sheet = new ServerStyleSheet();
  const body = ReactDOMServer.renderToString(sheet.collectStyles(reactApp));
  const styles = sheet.getStyleTags();
  const reduxState = reduxStore.getState();

  const htmlContent = fs.readFileSync(path.join(BUILD_DIR, 'index.html'), 'utf8');
  if (!htmlContent) {
    return false;
  }

  const reactHtml = htmlContent
    .replace(/<div id="app"><\/div>/, `<div id="app">${body}</div>`)
    .replace('<head>', `<head>${ReactDOMServer.renderToString(metaTags)}`)
    .replace('</head>', `${styles}</head>`)
    .replace('"__REDUX__"', JSON.stringify(reduxState))
    .replace('__API_URL__', apiUrl)
    .replace('__FRONT_URL__', frontUrl);

  return reactHtml;
};


module.exports = function reactRender(req, res, initialState = {}) {
  const { country, language } = req.params;
  const state = {
    ...{
      appConfig: {
        source: 'core',
        language,
        country
      }
    },
    ...initialState
  };

  i18next.changeLanguage(state.appConfig.language);

  const store = configureStore(state);
  const context = {};
  const headTags = [];

  const dataRequirements = routes
    .filter(route => matchPath(req.path, route))
    .filter(route => route.dataFetch instanceof Function)
    .map(route => store.dispatch(route.dataFetch(req.params)));

  Promise.all(dataRequirements).then(() => {
    const ReactApp = (
      <HeadProvider headTags={headTags}>
        <Provider store={store}>
          <StaticRouter location={req.url} context={context}>
            <AppContainer />
          </StaticRouter>
        </Provider>
      </HeadProvider>
    );

    const reactHtml = renderHtml(ReactApp, store, headTags);

    if (!reactHtml) {
      return res.status(404).end();
    }

    return res.send(reactHtml);
  });
};
