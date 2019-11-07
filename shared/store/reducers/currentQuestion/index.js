// @flow

import { initialState } from 'Shared/store/initialState';

import {
  CURRENT_QUESTION_UPDATE,
  QUESTION_UNLOAD,
} from 'Shared/store/actionTypes';

export function currentQuestion(state: ?string = null, action: Object) {
  switch (action.type) {
    case QUESTION_UNLOAD:
      return initialState.currentQuestion;
    case CURRENT_QUESTION_UPDATE:
      return action.payload.questionSlug;
    default:
      return state;
  }
}
