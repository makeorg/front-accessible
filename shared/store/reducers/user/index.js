// @flow

import { combineReducers } from 'redux';
import { authentification } from './authentification';
import { passwordRecovery } from './passwordRecovery';

export const user = combineReducers({
  authentification,
  passwordRecovery,
});
