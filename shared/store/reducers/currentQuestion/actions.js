// @flow
export const SET_CURRENT_QUESTION_SLUG = 'SET_CURRENT_QUESTION_SLUG';
export const REMOVE_CURRENT_QUESTION_SLUG = 'REMOVE_CURRENT_QUESTION_SLUG';

export const setCurrentQuestionSlug = (questionSlug: string) => ({
  type: SET_CURRENT_QUESTION_SLUG,
  payload: { questionSlug },
});

export const removeCurrentQuestionSlug = () => ({
  type: REMOVE_CURRENT_QUESTION_SLUG,
});
