/* @flow */

import { combineReducers } from 'redux';
import { passwordRecovery } from './passwordRecoveryRecovery';

export const user = combineReducers({
  passwordRecovery,
});
