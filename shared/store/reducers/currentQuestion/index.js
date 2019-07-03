// @flow

import * as actionTypes from 'Shared/store/actionTypes';

export function currentQuestion(state: ?string = null, action: Object) {
  switch (action.type) {
    case actionTypes.QUESTION_LOAD:
      return action.payload.question.slug;
    case actionTypes.QUESTION_CONFIGURATION_LOAD:
      return action.payload.questionSlug;
    default:
      return state;
  }
}
