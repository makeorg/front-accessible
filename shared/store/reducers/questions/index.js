/* @flow */

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
        [action.payload.question.questionId]: {
          ...state[action.payload.question.questionId],
          question: action.payload.question,
        },
      };
    case actionTypes.QUESTION_CONFIGURATION_LOAD:
      return {
        ...state,
        [action.payload.questionId]: {
          ...state[action.payload.questionId],
          questionConfiguration: action.payload.questionConfiguration,
        },
      };
    default:
      return state;
  }
}
