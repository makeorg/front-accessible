// @flow

import { apiClient } from 'Shared/api/ApiService/ApiService.client';
import { selectQuestion } from 'Shared/store/selectors/questions.selector';
import { Store, Dispatch, Action } from 'redux';
import { type Question } from 'Shared/types/question';
import {
  CURRENT_QUESTION_UPDATE,
  QUESTION_UNLOAD,
} from 'Shared/store/actionTypes';

export const updateRequestContextQuestion = (question: ?Question) => {
  if (question) {
    apiClient.questionId = question.questionId;
  }
};

const clearRequestContextQuestion = () => {
  apiClient.questionId = '';
};

export const requestContext = (store: Store) => (next: Dispatch) => (
  action: Action
) => {
  const state = store.getState();

  switch (action.type) {
    case CURRENT_QUESTION_UPDATE:
      updateRequestContextQuestion(
        selectQuestion(state, action.payload.questionSlug)
      );
      return next(action);
    case QUESTION_UNLOAD:
      clearRequestContextQuestion();
      return next(action);
    default:
      return next(action);
  }
};
