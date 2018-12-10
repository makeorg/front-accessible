/* @flow */

import * as actionTypes from 'Constants/actionTypes';
import * as pannelContentTypes from 'Constants/pannel';

const initialState: Object = {
  isPannelOpen: false,
  contentType: null
};

export default function pannel(state: Object = initialState, action: Object) {
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
