// @flow

import { combineReducers } from 'redux';
import { type StateRoot } from 'Shared/store/types';
import { appConfig } from './appConfig';
import { proposal } from './proposal';
import { modal } from './modal';
import { currentQuestion } from './currentQuestion';
import { sequence } from './sequence';
import { notification } from './notification';
import { user } from './user';
import { questions } from './questions';

export const rootReducer: StateRoot = combineReducers({
  appConfig,
  proposal,
  modal,
  sequence,
  questions,
  currentQuestion,
  notification,
  user,
});
