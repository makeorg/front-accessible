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

module.exports = function reactRender(req, res) {
  const { apiUrl, frontUrl } = configuration;
  const { country } = req.params;

  if (!country || !(/^[A-Z]{2,3}$/.test(country))) {
    const detectedCountry = req.headers['x-forced-country'] || req.headers['x-detected-country'] || 'FR';
    const url = (req.url !== '/') ? req.url : '';
    res.redirect(`/${detectedCountry}${url}`);
    return;
  }

  const initialState = {
    appConfig: {
      source: 'core',
      language: req.query.language || 'fr',
      country
    }
  };

  i18next.changeLanguage(initialState.appConfig.language);

  const store = configureStore(initialState);
  const context = {};
  const headTags = [];

  const dataRequirements = routes
    .filter(route => matchPath(req.url, route))
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

    fs.readFile(path.join(BUILD_DIR, 'index.html'), 'utf8', (err, htmlData) => {
      if (err) {
        return res.status(404).end();
      }

      const sheet = new ServerStyleSheet();
      const body = ReactDOMServer.renderToString(sheet.collectStyles(ReactApp));
      const styles = sheet.getStyleTags();
      const reduxState = store.getState();

      const RenderedApp = htmlData
        .replace(/<div id="app"><\/div>/, `<div id="app">${body}</div>`)
        .replace('<head>', `<head>${ReactDOMServer.renderToString(headTags)}`)
        .replace('</head>', `${styles}</head>`)
        .replace('"__REDUX__"', JSON.stringify(reduxState))
        .replace('__API_URL__', apiUrl)
        .replace('__FRONT_URL__', frontUrl);

      return res.send(RenderedApp);
    });
  });
};
