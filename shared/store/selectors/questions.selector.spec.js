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
      expect(selectQuestion(initialState)).toBe(null);
    });

    it('selectQuestion available', () => {
      const state = {
        questions: {
          'weeuropeans-fr': {
            question: questionTypeFixture,
          },
        },
      };
      expect(selectQuestion(state, 'weeuropeans-fr')).toBe(questionTypeFixture);
    });
  });

  describe('selectQuestionConfiguration', () => {
    it('with initialState', () => {
      expect(selectQuestionConfiguration(initialState)).toBe(null);
    });

    it('selectQuestionConfiguration available', () => {
      const state = {
        questions: {
          'weeuropeans-fr': {
            questionConfiguration: questionConfigurationTypeFixture,
          },
        },
      };
      expect(selectQuestionConfiguration(state, 'weeuropeans-fr')).toBe(
        questionConfigurationTypeFixture
      );
    });
  });
});
