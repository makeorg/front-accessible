/* @flow */

import * as actionTypes from 'Shared/store/actionTypes';
import appConfig from './index';

describe('appConfig reducer', () => {
  it('appConfig should return the initial state', () => {
    expect(appConfig(undefined, {})).toEqual({});
  });
});
