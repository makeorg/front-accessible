/* @flow */

import * as actionTypes from 'Shared/store/actionTypes';
import * as pannelContentTypes from 'Shared/constants/pannel';

const initialState: Object = {
  isPannelOpen: false,
  contentType: null
};

export function pannel(state: Object = initialState, action: Object) {
  switch (action.type) {
    case actionTypes.PANNEL_SHOW_LOGIN:
      return {
        ...state,
        isPannelOpen: true,
        contentType: pannelContentTypes.LOGIN_CONTENT
      };
    case actionTypes.PANNEL_SHOW_REGISTER:
      return {
        ...state,
        isPannelOpen: true,
        contentType: pannelContentTypes.REGISTER_CONTENT
      };
    case actionTypes.PANNEL_SHOW_FORGOT_PASSWORD:
      return {
        ...state,
        isPannelOpen: true,
        contentType: pannelContentTypes.FORGOT_PASSWORD_CONTENT
      };
    case actionTypes.PANNEL_CLOSE:
      return {
        ...state,
        isPannelOpen: false
      };
    default:
      return state;
  }
}
