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
import { configureStore, authenticationState } from 'Shared/store';
import { Logger } from 'Shared/services/Logger';
import { ApiService } from 'Shared/api/ApiService';
import { apiClient } from 'Shared/api/ApiService/ApiService.client';
import { trackingParamsService } from 'Shared/services/TrackingParamsService';
import { DateHelper } from 'Shared/helpers/date';
import { detected as adBlockerDetected } from 'adblockdetect';
import {
  cookieIsEnabled,
  thirdCookieEnabled,
} from 'Client/helper/cookieDetect';
import { track } from 'Shared/services/Tracking';
import * as customDataHelper from 'Client/helper/customData';
import {
  updateRequestContextQuestion,
  updateRequestContextCustomData,
} from 'Shared/store/middleware/requestContext';
import { TwitterUniversalTag } from 'Shared/services/Trackers/TwitterTracking';
import { updateTrackingQuestionParam } from 'Shared/store/middleware/tracking';

window.onerror = (message, source, lineNumber, columnNumber, error) => {
  if (error && error.stack) {
    const { stack } = error;
    Logger.log({
      message,
      source,
      lineNumber,
      columnNumber,
      stack,
    });
  }

  return false;
};

let initialState = window.INITIAL_STATE;
delete window.INITIAL_STATE;

if (env.isNone() || env.isDev()) {
  initialState = require('Shared/store/initialState.debug').initialStateDebug;
}

const tradLanguage = `${initialState.appConfig.language}-${
  initialState.appConfig.country
}`;

i18n.init({
  interpolation: {
    escapeValue: false,
  },
  debug: env.isDev(),
  lng: tradLanguage,
  resources: {
    [tradLanguage]: {
      [TRANSLATION_NAMESPACE]: initialState.appConfig.translations,
    },
  },
});

FacebookTracking.init();
TwitterUniversalTag.init();

ApiService.strategy = apiClient;

const logAndTrackEvent = (eventName: string) => {
  Logger.logInfo({
    trackingEvent: eventName,
    referrer: window.document.referrer,
    url: window.location.href,
  });
  track(eventName, {
    referrer: window.document.referrer,
    url: window.location.href,
  });
};

const initApp = async state => {
  const authentificationState = await authenticationState();

  // Set in session storage some keys from query params
  customDataHelper.setDataFromQueryParams(state.appConfig.queryParams);

  const store = configureStore({
    ...state,
    user: {
      ...state.user,
      authentification: {
        ...state.user.authentification,
        ...authentificationState,
      },
    },
    customData: customDataHelper.getAll(), // custom_data already saved in session_storage
  });

  // Set date helper language
  DateHelper.language = state.appConfig.language;

  // Set tracking params
  trackingParamsService.source = state.appConfig.source;
  trackingParamsService.country = state.appConfig.country;
  trackingParamsService.language = state.appConfig.language;

  // Set request context values for API calls
  const params = trackingParamsService.all();
  apiClient.source = params.source;
  apiClient.country = params.country;
  apiClient.language = params.language;

  const { currentQuestion, questions, customData } = store.getState();
  if (currentQuestion && questions[currentQuestion]) {
    updateRequestContextQuestion(questions[currentQuestion].question);
    updateTrackingQuestionParam(questions[currentQuestion].question);
  }
  if (customData) {
    updateRequestContextCustomData(customData);
  }

  // Track cookies availability and adBlockers
  if (adBlockerDetected()) {
    logAndTrackEvent('adblocker-detected');
  }
  if (!cookieIsEnabled()) {
    logAndTrackEvent('cookie-is-disabled');
  }
  const thirdCookieNameToCheck: string = 'make-session-id-expiration';
  if (!thirdCookieEnabled(thirdCookieNameToCheck)) {
    logAndTrackEvent('third-cookie-is-disabled');
  }

  loadableReady(() => {
    const appDom = document.getElementById('app');
    const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;
    renderMethod(
      <CookiesProvider>
        <HeadProvider>
          <Provider store={store}>
            <BrowserRouter>
              <React.StrictMode>
                <AppContainer />
              </React.StrictMode>
            </BrowserRouter>
          </Provider>
        </HeadProvider>
      </CookiesProvider>,
      appDom
    );
  });
};

initApp(initialState);

if (module.hot) {
  module.hot.accept();
}
