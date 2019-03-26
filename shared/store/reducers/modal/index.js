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
import { initialState } from 'Shared/store/initialState';
import { type StateModal } from 'Shared/store/types';

export function modal(state: StateModal = initialState.modal, action: Object) {
  switch (action.type) {
    case MODAL_SHOW_LOGIN:
      return {
        ...state,
        isOpen: true,
        contentType: MODAL_LOGIN_CONTENT,
      };
    case MODAL_SHOW_REGISTER:
      return {
        ...state,
        isOpen: true,
        contentType: MODAL_REGISTER_CONTENT,
      };
    case MODAL_SHOW_FORGOT_PASSWORD:
      return {
        ...state,
        isOpen: true,
        contentType: MODAL_FORGOT_PASSWORD_CONTENT,
      };
    case MODAL_CLOSE:
      return {
        ...state,
        isOpen: false,
      };
    default:
      return state;
  }
}
