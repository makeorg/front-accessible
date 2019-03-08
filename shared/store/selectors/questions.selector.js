/* @flow */
import { type StateRoot } from '../types';

/**
 * Questions data selector
 * @param {*} state
 */

export const selectQuestionData = (state: StateRoot, questionId?: string) =>
  questionId && state.questions[questionId];

/**
 * question selector
 * @param {*} state
 */
export const selectQuestion = (state: StateRoot, questionId?: string) => {
  const data = selectQuestionData(state, questionId);
  return data && data.question;
};

/**
 * questionConfiguration selector
 * @param {*} state
 */
export const selectQuestionConfiguration = (
  state: StateRoot,
  questionId?: string
) => {
  const data = selectQuestionData(state, questionId);
  return data && data.questionConfiguration;
};
