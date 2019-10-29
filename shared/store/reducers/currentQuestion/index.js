import {
  QUESTION_LOAD,
  QUESTION_CONFIGURATION_LOAD,
  QUESTION_RESULTS_LOAD,
  CURRENT_QUESTION_UPDATE,
} from 'Shared/store/actionTypes';

// @flow

export function currentQuestion(state: ?string = null, action: Object) {
  switch (action.type) {
    case QUESTION_LOAD:
      return action.payload.question.slug;
    case QUESTION_CONFIGURATION_LOAD:
      return action.payload.questionSlug;
    case QUESTION_RESULTS_LOAD:
      return action.payload.questionSlug;
    case CURRENT_QUESTION_UPDATE:
      return action.payload.questionSlug;
    default:
      return state;
  }
}
