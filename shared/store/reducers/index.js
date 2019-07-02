/* @flow */

import { combineReducers } from 'redux';
import { appConfig } from './appConfig';
import { proposal } from './proposal';
import { modal } from './modal';
import { currentQuestion } from './currentQuestion';
import { sequence } from './sequence';
import { notificationReducer } from './notification';
import { user } from './user';
import { questions } from './questions';

export const rootReducer = combineReducers({
  appConfig,
  proposal,
  modal,
  sequence,
  questions,
  currentQuestion,
  notification: notificationReducer,
  user,
});
