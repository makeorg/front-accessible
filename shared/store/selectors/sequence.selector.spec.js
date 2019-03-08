/* @flow */

import {
  questionTypeFixture,
  questionConfigurationTypeFixture,
} from 'Shared/types/__fixtures__/question.fixture';
import { initialState } from '../initialState';
import {
  selectSequenceQuestion,
  selectSequenceQuestionConfiguration,
  selectSequenceCollapsed,
} from './sequence.selector';

describe('sequence selector', () => {
  describe('selectQuestion', () => {
    it('with initialState', () => {
      expect(selectSequenceQuestion(initialState)).toBe(undefined);
    });

    it('selectQuestion available', () => {
      const state = {
        questions: {
          '1234': {
            question: questionTypeFixture,
          },
        },
        sequence: {
          questionId: '1234',
        },
      };
      expect(selectSequenceQuestion(state)).toBe(questionTypeFixture);
    });
  });

  describe('selectQuestionConfiguration', () => {
    it('with initialState', () => {
      expect(selectSequenceQuestionConfiguration(initialState)).toBe(undefined);
    });

    it('selectQuestion available', () => {
      const state = {
        questions: {
          '1234': {
            questionConfiguration: questionConfigurationTypeFixture,
          },
        },
        sequence: {
          questionId: '1234',
        },
      };
      expect(selectSequenceQuestionConfiguration(state)).toBe(
        questionConfigurationTypeFixture
      );
    });
  });

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
