/* @flow */
import * as actionTypes from 'Shared/store/actionTypes';
import { initialState } from 'Shared/store/initialState';
import { type StateAuthentication } from 'Shared/store/types';

export function authentication(
  state: StateAuthentication = initialState.user.authentication,
  action: Object
) {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
      return {
        ...state,
        errors: [],
      };
    case actionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        isLoggedIn: true,
        errors: [],
      };
    }
    case actionTypes.LOGIN_FAILURE:
      return {
        ...state,
        errors: [action.error, ...state.errors],
      };
    case actionTypes.GET_INFO: {
      return {
        ...state,
        isLoggedIn: true,
        user: action.user,
      };
    }
    case actionTypes.LOGIN_SOCIAL_REQUEST:
      return {
        ...state,
        errors: [],
      };
    case actionTypes.LOGIN_SOCIAL_SUCCESS: {
      return {
        ...state,
        isLoggedIn: true,
        errors: [],
      };
    }
    case actionTypes.LOGIN_SOCIAL_FAILURE:
      return {
        ...state,
        errors: [],
      };
    case actionTypes.LOGOUT: {
      return {
        ...state,
        isLoggedIn: false,
        user: undefined,
        errors: [],
      };
    }
    default:
      return state;
  }
}
