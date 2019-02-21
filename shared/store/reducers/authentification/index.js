/* @flow */

import { ApiService } from 'Shared/api/ApiService';
import * as actionTypes from 'Shared/store/actionTypes';
import { initialState } from 'Shared/store/initialState';
import { type StateAuthentification } from 'Shared/store/types';

export function authentification(state: StateAuthentification = initialState.authentification, action: Object) {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
      return {
        ...state,
        errors: []
      };
    case actionTypes.LOGIN_SUCCESS:
      ApiService.token = action.token;
      return {
        ...state,
        isLoggedIn: true,
        token: action.token,
        errors: []
      };
    case actionTypes.LOGIN_FAILURE:
      return {
        ...state,
        errors: [...[action.error], ...state.errors]
      };
    case actionTypes.GET_INFO:
      return {
        ...state,
        isLoggedIn: true,
        user: action.user
      };
    case actionTypes.GET_TOKEN:
      ApiService.token = action.token;
      return {
        ...state,
        isLoggedIn: true,
        token: action.token
      };
    case actionTypes.LOGIN_SOCIAL_REQUEST:
      return {
        ...state,
        errors: []
      };
    case actionTypes.LOGIN_SOCIAL_SUCCESS:
      ApiService.token = action.token;
      return {
        ...state,
        isLoggedIn: true,
        token: action.token,
        errors: []
      };
    case actionTypes.LOGIN_SOCIAL_FAILURE:
      return {
        ...state,
        errors: []
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: undefined,
        token: undefined,
        errors: []
      };
    default:
      return state;
  }
}
