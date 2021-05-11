// @flow

import { Dispatch, Action } from 'redux';
import { type QuestionType } from 'Shared/types/question';
import { trackingParamsService } from 'Shared/services/TrackingParamsService';
import { REMOVE_CURRENT_QUESTION_SLUG } from 'Shared/store/reducers/currentQuestion/actions';

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
    case REMOVE_CURRENT_QUESTION_SLUG:
      clearQuestionParam();
      return next(action);
    default:
      return next(action);
  }
};
