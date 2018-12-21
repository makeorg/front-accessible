/* @flow */

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Cookies from 'js-cookie';
import ApiService from 'Api/ApiService';
import { SESSION_ID_COOKIE_KEY } from 'Constants/config';
import DateHelper from 'Helpers/date';
import { uuid } from 'Helpers/uuid';
import rootReducer from './reducers';

export default function configureStore(initialState: Object = {}) {
  const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  let sessionId = Cookies.get(SESSION_ID_COOKIE_KEY);

  if (!sessionId) {
    sessionId = uuid();
    Cookies.set(SESSION_ID_COOKIE_KEY, sessionId);
  }

  ApiService.operationId = initialState.appConfig.operationId;
  ApiService.source = initialState.appConfig.source;
  ApiService.country = initialState.appConfig.country;
  ApiService.language = initialState.appConfig.language;
  ApiService.sessionId = sessionId;
  DateHelper.language = initialState.appConfig.language;

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
}
