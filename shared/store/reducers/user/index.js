/* @flow */

import { combineReducers } from 'redux';
import { authentification } from './authentification';
import { registration } from './registration';
import { forgotPassword } from './forgotPassword';
import { passwordRecovery } from './passwordRecoveryRecovery';

export const user = combineReducers({
  authentification,
  registration,
  forgotPassword,
  passwordRecovery,
});
