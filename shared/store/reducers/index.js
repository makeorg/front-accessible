// @flow

import { combineReducers } from 'redux';
import { type StateRoot } from 'Shared/store/types';
import { appConfig } from './appConfig';
import { views } from './views';
import { proposal } from './proposal';
import { modal } from './modal';
import { currentQuestion } from './currentQuestion';
import { sequence } from './sequence';
import { notification } from './notification';
import { user } from './user';
import { questions } from './questions';
import { customData } from './customData';
import { partners } from './partners';

export const rootReducer: StateRoot = combineReducers({
  appConfig,
  views,
  proposal,
  modal,
  sequence,
  questions,
  currentQuestion,
  notification,
  user,
  customData, // sync with HTML5 Storage API
  partners,
});
