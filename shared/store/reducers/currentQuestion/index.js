// @flow
import { initialState } from 'Shared/store/initialState';
import {
  REMOVE_CURRENT_QUESTION_SLUG,
  SET_CURRENT_QUESTION_SLUG,
} from './actions';

export function currentQuestion(state: ?string = null, action: Object) {
  switch (action.type) {
    case REMOVE_CURRENT_QUESTION_SLUG:
      return initialState.currentQuestion;
    case SET_CURRENT_QUESTION_SLUG:
      return action.payload.questionSlug;
    default:
      return state;
  }
}
