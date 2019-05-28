/* @flow */

import { type StateRoot } from '../types';
import {
  selectQuestion,
  selectQuestionConfiguration,
} from './questions.selector';
/**
 * Sequence questionSlug selector
 * @param {*} state
 */
export const selectSequenceQuestionSlug = (state: StateRoot) =>
  state.sequence.questionSlug;

/**
 * Sequence question selector
 * @param {*} state
 */
export const selectSequenceQuestion = (state: StateRoot) => {
  const questionSlug = selectSequenceQuestionSlug(state);
  return selectQuestion(state, questionSlug);
};

/**
 * Sequence questionConfiguration selector
 * @param {*} state
 */
export const selectSequenceQuestionConfiguration = (state: StateRoot) => {
  const questionSlug = selectSequenceQuestionSlug(state);
  return selectQuestionConfiguration(state, questionSlug);
};

/**
 * Sequence isSequenceCollapsed selector
 * @param {*} state
 */
export const selectSequenceCollapsed = (state: StateRoot) =>
  state.sequence.isSequenceCollapsed;
