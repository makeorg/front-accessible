// @flow
import { CURRENT_QUESTION_UPDATE } from 'Shared/store/actionTypes';

export const updateCurrentQuestion = (questionSlug: string) => ({
  type: CURRENT_QUESTION_UPDATE,
  payload: { questionSlug },
});
