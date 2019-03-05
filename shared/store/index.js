import { UserService } from 'Shared/api/UserService';

/* @flow */

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';

export function configureStore(initialState: Object = {}) {
  const composeEnhancers =
    (typeof window !== 'undefined' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
}

export const authenticationState = async () => {
  let authentificationState;
  try {
    const user = await UserService.me();
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
