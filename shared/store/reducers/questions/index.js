// @flow

import * as actionTypes from 'Shared/store/actionTypes';
import { initialState } from 'Shared/store/initialState';
import { type StateQuestions } from 'Shared/store/types';

export function questions(
  state: StateQuestions = initialState.questions,
  action: Object
) {
  switch (action.type) {
    case actionTypes.QUESTION_LOAD:
      return {
        ...state,
        [action.payload.question.slug]: {
          ...state[action.payload.question.slug],
          question: action.payload.question,
        },
      };
    case actionTypes.QUESTION_CONFIGURATION_LOAD:
      return {
        ...state,
        [action.payload.questionSlug]: {
          ...state[action.payload.questionSlug],
          questionConfiguration: action.payload.questionConfiguration,
        },
      };
    default:
      return state;
  }
}
