// @flow

import * as actionTypes from 'Shared/store/actionTypes';
import { initialState } from 'Shared/store/initialState';
import { type StateQuestions } from 'Shared/store/types';

import {
  QUESTION_POPULAR_TAGS_LOAD,
  QUESTION_PERSONALITIES_LOAD,
} from './actions';

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
    case actionTypes.QUESTION_RESULTS_LOAD:
      return {
        ...state,
        [action.payload.questionSlug]: {
          ...state[action.payload.questionSlug],
          questionResults: action.payload.questionResults,
        },
      };
    case QUESTION_POPULAR_TAGS_LOAD:
      return {
        ...state,
        [action.payload.questionSlug]: {
          ...state[action.payload.questionSlug],
          popularTags: action.payload.popularTags,
        },
      };
    case QUESTION_PERSONALITIES_LOAD:
      return {
        ...state,
        [action.payload.questionSlug]: {
          ...state[action.payload.questionSlug],
          personalities: action.payload.personalities,
        },
      };
    default:
      return state;
  }
}
