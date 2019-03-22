/* @flow */

import * as actionCreators from 'Shared/store/actions/modal';
import * as contentTypes from 'Shared/constants/modal';
import { modal } from './index';

describe('Modal reducer', () => {
  it('Return the initial state', () => {
    const expectedState = {
      isModalOpen: false,
      contentType: null
    };

    expect(modal(undefined, {})).toEqual(expectedState);
  });

  it('Show login action reducers', () => {
    const action = { type: 'MODAL_SHOW_LOGIN' };
    const previousState = {
      isModalOpen: false,
      contentType: null
    };

    const expectedState = {
      isModalOpen: true,
      contentType: contentTypes.MODAL_LOGIN_CONTENT
    };

    expect(modal(previousState, action)).toEqual(expectedState);
  });

  it('Show register action reducers', () => {
    const action = { type: 'MODAL_SHOW_REGISTER' };
    const previousState = {
      isModalOpen: false,
      contentType: null
    };

    const expectedState = {
      isModalOpen: true,
      contentType: contentTypes.MODAL_REGISTER_CONTENT
    };

    expect(modal(previousState, action)).toEqual(expectedState);
  });

  it('Show forgot password action reducers', () => {
    const action = { type: 'MODAL_SHOW_FORGOT_PASSWORD' };
    const previousState = {
      isModalOpen: false,
      contentType: null
    };

    const expectedState = {
      isModalOpen: true,
      contentType: contentTypes.MODAL_FORGOT_PASSWORD_CONTENT
    };

    expect(modal(previousState, action)).toEqual(expectedState);
  });

  it('Close Login action reducers', () => {
    const action = { type: 'MODAL_CLOSE' };
    const previousState = {
      isModalOpen: true
    };

    const expectedState = {
      isModalOpen: false
    };

    expect(modal(previousState, action)).toEqual(expectedState);
  });
});
