/* @flow */

import { combineReducers } from 'redux';
import { authentification } from './authentification';
import { passwordRecovery } from './passwordRecoveryRecovery';

export const user = combineReducers({
  authentification,
  passwordRecovery,
});
