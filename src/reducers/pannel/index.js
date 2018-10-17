import * as actionTypes from '../../constants/actionTypes';
import * as pannelContentTypes from '../../constants/pannel';

const initialState = {
  isOpen: false,
  contentType: null
};

export default function pannel(state = initialState, action) {
  switch (action.type) {
    case actionTypes.PANNEL_SHOW_LOGIN:
      return {
        ...state,
        isOpen: true,
        contentType: pannelContentTypes.LOGIN_CONTENT
      };
    case actionTypes.PANNEL_SHOW_REGISTER:
      return {
        ...state,
        isOpen: true,
        contentType: pannelContentTypes.REGISTER_CONTENT
      };
    case actionTypes.PANNEL_SHOW_FORGOT_PASSWORD:
      return {
        ...state,
        isOpen: true,
        contentType: pannelContentTypes.FORGOT_PASSWORD_CONTENT
      };
    case actionTypes.PANNEL_CLOSE:
      return {
        ...state,
        isOpen: false
      };
    default:
      return state;
  }
}
