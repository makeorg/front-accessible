// @flow

import { combineReducers } from 'redux';
import { authentication } from './authentication';
import { passwordRecovery } from './passwordRecovery';

export const user = combineReducers({
  authentication,
  passwordRecovery,
});
