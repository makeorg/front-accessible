// @flow

import { UserApiService } from 'Shared/api/UserApiService';
import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './reducers';
import { middlewares } from './middleware';
import { type StateRoot } from './types';

export function configureStore(initialState: StateRoot = {}) {
  const composeEnhancers =
    (typeof window !== 'undefined' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );
}

export const authenticationState = async () => {
  let authentificationState;
  try {
    const user = await UserApiService.me();
    authentificationState = {
      isLoggedIn: !!user,
      user,
    };
  } catch (error) {
    authentificationState = {
      isLoggedIn: false,
      user: undefined,
    };
  }

  return authentificationState;
};
