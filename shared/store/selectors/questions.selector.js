/* @flow */
import { type StateRoot } from '../types';

/**
 * Questions data selector
 * @param {*} state
 */

export const selectQuestionData = (state: StateRoot, questionSlug?: string) => {
  if (questionSlug) {
    return state.questions[questionSlug];
  }

  return null;
};

/**
 * question selector
 * @param {*} state
 */
export const selectQuestion = (state: StateRoot, questionSlug?: string) => {
  const data = selectQuestionData(state, questionSlug);
  return data && data.question;
};

/**
 * questionConfiguration selector
 * @param {*} state
 */
export const selectQuestionConfiguration = (
  state: StateRoot,
  questionSlug?: string
) => {
  const data = selectQuestionData(state, questionSlug);
  return data && data.questionConfiguration;
};
