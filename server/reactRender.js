import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { ServerStyleSheet } from 'styled-components';
import configureStore from '../src/store';
import App from '../src/components/App';

const fs = require('fs');
const path = require('path');
const { BUILD_DIR } = require('./paths');

module.exports = function reactRender(req, res) {
  const { API_URL } = process.env;
  const initialState = {
    appConfig: {}
  };

  fs.readFile(path.join(BUILD_DIR, 'index.html'), 'utf8', (err, htmlData) => {
    if (err) {
      console.error('read err', err);
      return res.status(404).end();
    }
    const store = configureStore(initialState);

    const ReactApp = (
      <Provider store={store}>
        <App />
      </Provider>
    );

    const sheet = new ServerStyleSheet();
    const body = renderToString(sheet.collectStyles(ReactApp));
    const styles = sheet.getStyleTags();

    const RenderedApp = htmlData
      .replace(/<div id="app"><\/div>/, `<div id="app">${body}</div>`)
      .replace('</head>', `${styles}</head>`)
      .replace('"__REDUX__"', JSON.stringify(initialState))
      .replace('"__API_URL__"', API_URL);

    return res.send(RenderedApp);
  });
};
