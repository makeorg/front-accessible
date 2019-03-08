/* @flow */

import {
  questionTypeFixture,
  questionConfigurationTypeFixture,
} from 'Shared/types/__fixtures__/question.fixture';
import { initialState } from '../initialState';
import {
  selectQuestion,
  selectQuestionConfiguration,
} from './questions.selector';

describe('Questions selector', () => {
  describe('selectQuestion', () => {
    it('with initialState', () => {
      expect(selectQuestion(initialState)).toBe(undefined);
    });

    it('selectQuestion available', () => {
      const state = {
        questions: {
          '1234': {
            question: questionTypeFixture,
          },
        },
      };
      expect(selectQuestion(state, '1234')).toBe(questionTypeFixture);
    });
  });

  describe('selectQuestionConfiguration', () => {
    it('with initialState', () => {
      expect(selectQuestionConfiguration(initialState)).toBe(undefined);
    });

    it('selectQuestionConfiguration available', () => {
      const state = {
        questions: {
          '1234': {
            questionConfiguration: questionConfigurationTypeFixture,
          },
        },
      };
      expect(selectQuestionConfiguration(state, '1234')).toBe(
        questionConfigurationTypeFixture
      );
    });
  });
});
