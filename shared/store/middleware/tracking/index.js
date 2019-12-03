// @flow

import { selectQuestion } from 'Shared/store/selectors/questions.selector';
import { Store, Dispatch, Action } from 'redux';
import { type Question } from 'Shared/types/question';
import {
  CURRENT_QUESTION_UPDATE,
  QUESTION_UNLOAD,
} from 'Shared/store/actionTypes';
import { trackingParamsService } from 'Shared/services/TrackingParamsService';

export const updateTrackingQuestionParam = (question: ?Question) => {
  if (question) {
    trackingParamsService.questionId = question.questionId;
    trackingParamsService.questionSlug = question.slug;
  }
};

const clearQuestionParam = () => {
  trackingParamsService.questionId = '';
  trackingParamsService.questionSlug = '';
};

export const tracking = (store: Store) => (next: Dispatch) => (
  action: Action
) => {
  const state = store.getState();

  switch (action.type) {
    case CURRENT_QUESTION_UPDATE:
      updateTrackingQuestionParam(
        selectQuestion(state, action.payload.questionSlug)
      );
      return next(action);

    case QUESTION_UNLOAD:
      clearQuestionParam();
      return next(action);

    default:
      return next(action);
  }
};
