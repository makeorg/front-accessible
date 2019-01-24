/* @flow */

import * as actionTypes from 'Src/constants/actionTypes';
import appConfig from './index';

describe('appConfig reducer', () => {
  it('appConfig should return the initial state', () => {
    expect(appConfig(undefined, {})).toEqual({});
  });
});
