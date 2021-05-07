// @flow

import { Dispatch, Action } from 'redux';
import { type QuestionType } from 'Shared/types/question';
import { QUESTION_UNLOAD } from 'Shared/store/actionTypes';
import { trackingParamsService } from 'Shared/services/TrackingParamsService';

export const updateTrackingQuestionParam = (question: ?QuestionType) => {
  if (question) {
    trackingParamsService.questionId = question.questionId;
    trackingParamsService.questionSlug = question.slug;
  }
};

const clearQuestionParam = () => {
  trackingParamsService.questionId = '';
  trackingParamsService.questionSlug = '';
};

export const question = () => (next: Dispatch) => (action: Action) => {
  switch (action.type) {
    case QUESTION_UNLOAD:
      clearQuestionParam();
      return next(action);

    default:
      return next(action);
  }
};
