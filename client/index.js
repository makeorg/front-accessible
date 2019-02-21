import ReactDOM from 'react-dom';
import * as React from 'react';
import { CookiesProvider } from 'react-cookie';
import { Provider } from 'react-redux';
import { i18n } from 'Shared/i18n';
import { BrowserRouter } from 'react-router-dom';
import { HeadProvider } from 'react-head';
import { loadableReady } from '@loadable/component';
import { AppContainer } from 'Client/app';
import { FacebookTracking } from 'Shared/services/Trackers/FacebookTracking';
import { env } from 'Shared/env';
import { TRANSLATION_NAMESPACE } from 'Shared/i18n/constants';

import { configureStore } from 'Shared/store';
import { Logger } from 'Shared/services/Logger';
import { ApiService } from 'Shared/api/ApiService';
import { ApiServiceClient } from 'Shared/api/ApiService/ApiService.client';
import { DateHelper } from 'Shared/helpers/date';
import { USER_LOCAL_STORAGE_KEY, TOKEN_LOCAL_STORAGE_KEY } from 'Shared/constants/user';

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

if (env.isNone() || env.isDev()) {
  initialState = require('Shared/store/initialState.debug').initialStateDebug;
}

const tradLanguage = `${initialState.appConfig.language}-${initialState.appConfig.country}`;

i18n.init({
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

// keep user login on client side
const savedUser: ?string = (typeof localStorage !== 'undefined')
  ? localStorage.getItem(USER_LOCAL_STORAGE_KEY) : null;
const savedToken: ?string = (typeof localStorage !== 'undefined')
  ? localStorage.getItem(TOKEN_LOCAL_STORAGE_KEY) : null;

const user: ?Object = savedUser ? JSON.parse(savedUser) : null;
const token: ?Object = savedToken ? JSON.parse(savedToken) : null;

initialState.authentification = {
  ...initialState.authentification,
  isLoggedIn: (token !== null && user !== null),
  token,
  user
};

const apiClient = new ApiServiceClient();
ApiService.strategy = apiClient;

const store = configureStore(initialState);

if (initialState.sequence && initialState.sequence.question) {
  apiClient.questionId = initialState.sequence.question.questionId;
  apiClient.operationId = initialState.sequence.question.operationId;
}

apiClient.source = initialState.appConfig.source;
apiClient.country = initialState.appConfig.country;
apiClient.language = initialState.appConfig.language;
apiClient.token = initialState.authentification.token;
DateHelper.language = initialState.appConfig.language;

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
