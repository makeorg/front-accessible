/* @flow */

import {
  MODAL_SHOW_LOGIN,
  MODAL_SHOW_REGISTER,
  MODAL_SHOW_FORGOT_PASSWORD,
  MODAL_CLOSE,
} from 'Shared/store/actionTypes';
import {
  MODAL_LOGIN_CONTENT,
  MODAL_REGISTER_CONTENT,
  MODAL_FORGOT_PASSWORD_CONTENT,
} from 'Shared/constants/modal';

const initialState: Object = {
  isModalOpen: false,
  contentType: null,
};

export function modal(state: Object = initialState, action: Object) {
  switch (action.type) {
    case MODAL_SHOW_LOGIN:
      return {
        ...state,
        isModalOpen: true,
        contentType: MODAL_LOGIN_CONTENT,
      };
    case MODAL_SHOW_REGISTER:
      return {
        ...state,
        isModalOpen: true,
        contentType: MODAL_REGISTER_CONTENT,
      };
    case MODAL_SHOW_FORGOT_PASSWORD:
      return {
        ...state,
        isModalOpen: true,
        contentType: MODAL_FORGOT_PASSWORD_CONTENT,
      };
    case MODAL_CLOSE:
      return {
        ...state,
        isModalOpen: false,
      };
    default:
      return state;
  }
}
