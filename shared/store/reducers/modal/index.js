// @flow

import {
  MODAL_SHOW_LOGIN,
  MODAL_SHOW_REGISTER,
  MODAL_SHOW_FORGOT_PASSWORD,
  MODAL_CLOSE,
  MODAL_SHOW_SESSION_EXPIRATION,
  MODAL_CLOSE_SESSION_EXPIRATION,
  MODAL_SHOW_DEPARTMENT_FORM,
} from 'Shared/store/actionTypes';
import {
  MODAL_LOGIN_CONTENT,
  MODAL_REGISTER_CONTENT,
  MODAL_FORGOT_PASSWORD_CONTENT,
  MODAL_DEPARTMENT_FORM,
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
    case MODAL_SHOW_DEPARTMENT_FORM:
      return {
        ...state,
        isOpen: true,
        contentType: MODAL_DEPARTMENT_FORM,
      };
    case MODAL_CLOSE:
      return {
        ...state,
        isOpen: false,
      };
    case MODAL_SHOW_SESSION_EXPIRATION:
      return {
        ...state,
        isOpen: false,
        showExpirationSession: true,
      };
    case MODAL_CLOSE_SESSION_EXPIRATION:
      return {
        ...state,
        isOpen: false,
        showExpirationSession: false,
      };
    default:
      return state;
  }
}
