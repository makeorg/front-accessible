/* @flow */

import * as actionCreators from 'Shared/store/actions/pannel';
import * as pannelContentTypes from 'Shared/constants/pannel';
import pannel from './index';

describe('Pannel reducer', () => {
  it('Return the initial state', () => {
    const expectedState = {
      isPannelOpen: false,
      contentType: null
    };

    expect(pannel(undefined, {})).toEqual(expectedState);
  });

  it('Show login action reducers', () => {
    const action = { type: 'PANNEL_SHOW_LOGIN' };
    const previousState = {
      isPannelOpen: false,
      contentType: null
    };

    const expectedState = {
      isPannelOpen: true,
      contentType: pannelContentTypes.LOGIN_CONTENT
    };

    expect(pannel(previousState, action)).toEqual(expectedState);
  });

  it('Show register action reducers', () => {
    const action = { type: 'PANNEL_SHOW_REGISTER' };
    const previousState = {
      isPannelOpen: false,
      contentType: null
    };

    const expectedState = {
      isPannelOpen: true,
      contentType: pannelContentTypes.REGISTER_CONTENT
    };

    expect(pannel(previousState, action)).toEqual(expectedState);
  });

  it('Show forgot password action reducers', () => {
    const action = { type: 'PANNEL_SHOW_FORGOT_PASSWORD' };
    const previousState = {
      isPannelOpen: false,
      contentType: null
    };

    const expectedState = {
      isPannelOpen: true,
      contentType: pannelContentTypes.FORGOT_PASSWORD_CONTENT
    };

    expect(pannel(previousState, action)).toEqual(expectedState);
  });

  it('Close Login action reducers', () => {
    const action = { type: 'PANNEL_CLOSE' };
    const previousState = {
      isPannelOpen: true
    };

    const expectedState = {
      isPannelOpen: false
    };

    expect(pannel(previousState, action)).toEqual(expectedState);
  });
});
