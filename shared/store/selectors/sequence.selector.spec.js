// @flow */

import { initialState } from '../initialState';
import { selectSequenceCollapsed } from './sequence.selector';

describe('sequence selector', () => {
  describe('selectSequenceCollapsed', () => {
    it('with initialState', () => {
      expect(selectSequenceCollapsed(initialState)).toBe(false);
    });

    it('selectSequenceCollapsed true', () => {
      const state = {
        sequence: {
          isSequenceCollapsed: true,
        },
      };
      expect(selectSequenceCollapsed(state)).toBe(true);
    });
  });
});
