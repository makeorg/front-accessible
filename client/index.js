import ReactDOM from 'react-dom';
import * as React from 'react';
import { CookiesProvider } from 'react-cookie';
import { Provider } from 'react-redux';
import i18next from 'i18next';
import { BrowserRouter } from 'react-router-dom';
import { HeadProvider } from 'react-head';
import { loadableReady } from '@loadable/component';
import { AppContainer } from 'Client/app';
import { FacebookTracking } from 'Shared/services/Trackers/FacebookTracking';
import TwitterTracking from 'Shared/services/Trackers/TwitterTracking';
import { env } from 'Shared/env';
import { TRANSLATION_NAMESPACE } from 'Shared/i18n/constants';
import configureStore from 'Shared/store';
import { initialStateDebug } from 'Shared/store/initialState.debug';
import Logger from 'Shared/services/Logger';

window.onerror = (message, source, lineNumber, columnNumber, error) => {
  if (error && error.stack) {
    const { stack } = error;
    Logger.log({
      message,
      source,
      lineNumber,
      columnNumber,
      stack
    });
  }

  return false;
};

let initialState = window.INITIAL_STATE;
delete window.INITIAL_STATE;

if (!process.env.NODE_ENV || env.isDev()) {
  initialState = initialStateDebug;
}

const tradLanguage = `${initialState.appConfig.language}-${initialState.appConfig.country}`;

i18next.init({
  interpolation: {
    escapeValue: false
  },
  debug: env.isDev(),
  lng: tradLanguage,
  resources: {
    [tradLanguage]: { [TRANSLATION_NAMESPACE]: initialState.appConfig.translations }
  }
});

FacebookTracking.init();
TwitterTracking.init('o16m6');

const store = configureStore(initialState);

loadableReady(() => {
  ReactDOM.hydrate(
    <CookiesProvider>
      <HeadProvider>
        <Provider store={store}>
          <BrowserRouter>
            <AppContainer />
          </BrowserRouter>
        </Provider>
      </HeadProvider>
    </CookiesProvider>,
    document.getElementById('app'),
  );
});

if (module.hot) {
  module.hot.accept();
}
