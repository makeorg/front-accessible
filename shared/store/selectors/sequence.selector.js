/* @flow */

import { type StateRoot } from '../types';

/**
 * Sequence isSequenceCollapsed selector
 * @param {*} state
 */
export const selectSequenceCollapsed = (state: StateRoot) =>
  state.sequence.isSequenceCollapsed;
