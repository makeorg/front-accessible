/* @flow */

import { type StateRoot } from '../types';
import {
  selectQuestion,
  selectQuestionConfiguration,
} from './questions.selector';
/**
 * Sequence questionId selector
 * @param {*} state
 */
export const selectSequenceQuestionId = (state: StateRoot) =>
  state.sequence.questionId;

/**
 * Sequence question selector
 * @param {*} state
 */
export const selectSequenceQuestion = (state: StateRoot) => {
  const questionId = selectSequenceQuestionId(state);
  return selectQuestion(state, questionId);
};

/**
 * Sequence questionConfiguration selector
 * @param {*} state
 */
export const selectSequenceQuestionConfiguration = (state: StateRoot) => {
  const questionId = selectSequenceQuestionId(state);
  return selectQuestionConfiguration(state, questionId);
};

/**
 * Sequence isSequenceCollapsed selector
 * @param {*} state
 */
export const selectSequenceCollapsed = (state: StateRoot) =>
  state.sequence.isSequenceCollapsed;
