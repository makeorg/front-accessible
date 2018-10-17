import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import ApiService from './api/ApiService';

export default function configureStore(initialState = {}) {
  const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

  ApiService.operationId = initialState.appConfig.operationId;
  ApiService.source = initialState.appConfig.source;
  ApiService.country = initialState.appConfig.country;
  ApiService.language = initialState.appConfig.language;


  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(thunk)
    )
  );
}