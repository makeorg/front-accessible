/* @flow */

import { combineReducers } from 'redux';
import { appConfig } from './appConfig';
import { authentification } from './authentification';
import { registration } from './registration';
import { forgotPassword } from './forgotPassword';
import { proposal } from './proposal';
import { modal } from './modal';
import { sequence } from './sequence';
import { notificationReducer } from './notification';
import { user } from './user';
import { questions } from './questions';

export const rootReducer = combineReducers({
  appConfig,
  authentification,
  registration,
  forgotPassword,
  proposal,
  modal,
  sequence,
  questions,
  notification: notificationReducer,
  user,
});
