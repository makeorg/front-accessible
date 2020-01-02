/* @flow */

import * as contentTypes from 'Shared/constants/modal';
import { modal } from './index';

describe('Modal reducer', () => {
  it('Return the initial state', () => {
    const expectedState = {
      isOpen: false,
      contentType: '',
      showExpirationSession: false,
    };

    expect(modal(undefined, {})).toEqual(expectedState);
  });

  it('Show login action reducers', () => {
    const action = { type: 'MODAL_SHOW_LOGIN' };
    const previousState = {
      isOpen: false,
      contentType: '',
    };

    const expectedState = {
      isOpen: true,
      contentType: contentTypes.MODAL_LOGIN,
    };

    expect(modal(previousState, action)).toEqual(expectedState);
  });

  it('Show register action reducers', () => {
    const action = { type: 'MODAL_SHOW_REGISTER' };
    const previousState = {
      isOpen: false,
      contentType: '',
    };

    const expectedState = {
      isOpen: true,
      contentType: contentTypes.MODAL_REGISTER,
    };

    expect(modal(previousState, action)).toEqual(expectedState);
  });

  it('Show forgot password action reducers', () => {
    const action = { type: 'MODAL_SHOW_FORGOT_PASSWORD' };
    const previousState = {
      isOpen: false,
      contentType: '',
    };

    const expectedState = {
      isOpen: true,
      contentType: contentTypes.MODAL_FORGOT_PASSWORD,
    };

    expect(modal(previousState, action)).toEqual(expectedState);
  });

  it('Close Login action reducers', () => {
    const action = { type: 'MODAL_CLOSE' };
    const previousState = {
      isOpen: true,
    };

    const expectedState = {
      isOpen: false,
    };

    expect(modal(previousState, action)).toEqual(expectedState);
  });
});
