// @flow

import { UserService } from 'Shared/services/User';
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
  const user = await UserService.current();
  const profile = user
    ? await UserService.getProfileByUserType(user.userId, user.userType)
    : null;

  const userWithProfile = user
    ? {
        ...user,
        profile,
      }
    : user;

  return {
    isLoggedIn: !!user,
    user: userWithProfile || undefined,
  };
};
