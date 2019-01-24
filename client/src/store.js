/* @flow */

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Cookies from 'universal-cookie';
import { SESSION_ID_COOKIE_KEY } from 'Src/constants/config';
import { uuid } from 'Src/helpers/uuid';
import ApiService from 'Src/api/ApiService';
import DateHelper from 'Src/helpers/date';
import rootReducer from './reducers';

export default function configureStore(initialState: Object = {}) {
  const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

  const cookies = new Cookies();
  let sessionId = cookies.get(SESSION_ID_COOKIE_KEY);

  if (!sessionId) {
    sessionId = uuid();
    cookies.set(SESSION_ID_COOKIE_KEY, sessionId);
  }

  ApiService.sessionId = sessionId;

  if (initialState.sequence && initialState.sequence.question) {
    ApiService.questionId = initialState.sequence.question.questionId;
    ApiService.operationId = initialState.sequence.question.operationId;
  }
  ApiService.source = initialState.appConfig.source;
  ApiService.country = initialState.appConfig.country;
  ApiService.language = initialState.appConfig.language;
  DateHelper.language = initialState.appConfig.language;

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
}
