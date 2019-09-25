/* @flow */
import { type StateRoot } from '../types';

/**
 * Questions data selector
 * @param {*} state
 */

export const selectQuestionData = (state: StateRoot, questionSlug: ?string) => {
  if (!questionSlug) {
    return null;
  }

  return state.questions[questionSlug];
};

/**
 * question selector
 * @param {*} state
 */
export const selectQuestion = (state: StateRoot, questionSlug: ?string) => {
  const data = selectQuestionData(state, questionSlug);
  return data && data.question;
};

/**
 * questionConfiguration selector
 * @param {*} state
 */
export const selectQuestionConfiguration = (
  state: StateRoot,
  questionSlug: ?string
) => {
  const data = selectQuestionData(state, questionSlug);
  return data && data.questionConfiguration;
};

/**
 * questionResults selector
 * @param {*} state
 */
export const selectQuestionResults = (
  state: StateRoot,
  questionSlug: ?string
) => {
  const data = selectQuestionData(state, questionSlug);
  return data && data.questionResults;
};

/**
 * Sequence question selector
 * @param {*} state
 */
export const selectCurrentQuestion = (state: StateRoot) => {
  const questionSlug = state.currentQuestion;
  return selectQuestion(state, questionSlug);
};

/**
 * Sequence questionConfiguration selector
 * @param {*} state
 */
export const selectCurrentQuestionConfiguration = (state: StateRoot) => {
  const questionSlug = state.currentQuestion;
  return selectQuestionConfiguration(state, questionSlug);
};

/**
 * Sequence questionConfiguration selector
 * @param {*} state
 */
export const selectCurrentQuestionResults = (state: StateRoot) => {
  const questionSlug = state.currentQuestion;
  return selectQuestionResults(state, questionSlug);
};
