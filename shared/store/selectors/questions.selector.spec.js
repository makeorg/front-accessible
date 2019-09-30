/* @flow */

import {
  questionTypeFixture,
  questionConfigurationTypeFixture,
  questionResultsTypeFixture,
} from 'Shared/types/__fixtures__/question.fixture';
import { initialState } from '../initialState';
import {
  selectCurrentQuestion,
  selectCurrentQuestionConfiguration,
  selectQuestion,
  selectQuestionConfiguration,
  selectQuestionResults,
  selectCurrentQuestionResults,
} from './questions.selector';

describe('Questions selector', () => {
  describe('select Curent Question', () => {
    it('with initialState', () => {
      expect(selectCurrentQuestion(initialState)).toBe(null);
    });

    it('selectQuestion available', () => {
      const state = {
        currentQuestion: 'weeuropeans-fr',
        questions: {
          'weeuropeans-fr': {
            question: questionTypeFixture,
          },
        },
        sequence: {
          questionSlug: 'weeuropeans-fr',
        },
      };
      expect(selectCurrentQuestion(state)).toBe(questionTypeFixture);
    });
  });

  describe('select Curent QuestionConfiguration', () => {
    it('with initialState', () => {
      expect(selectCurrentQuestionConfiguration(initialState)).toBe(null);
    });

    it('selectQuestion available', () => {
      const state = {
        questions: {
          'weeuropeans-fr': {
            questionConfiguration: questionConfigurationTypeFixture,
          },
        },
        currentQuestion: 'weeuropeans-fr',
      };
      expect(selectCurrentQuestionConfiguration(state)).toBe(
        questionConfigurationTypeFixture
      );
    });
  });

  describe('select Curent Question Results', () => {
    it('with initialState', () => {
      expect(selectCurrentQuestionResults(initialState)).toBe(null);
    });

    it('selectQuestion available', () => {
      const state = {
        questions: {
          'weeuropeans-fr': {
            questionResults: questionResultsTypeFixture,
          },
        },
        currentQuestion: 'weeuropeans-fr',
      };
      expect(selectCurrentQuestionResults(state)).toBe(
        questionResultsTypeFixture
      );
    });
  });

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

  describe('selectQuestionResults', () => {
    it('with initialState', () => {
      expect(selectQuestionResults(initialState)).toBe(null);
    });

    it('selectQuestionResults available', () => {
      const state = {
        questions: {
          'weeuropeans-fr': {
            questionResults: questionResultsTypeFixture,
          },
        },
      };
      expect(selectQuestionResults(state, 'weeuropeans-fr')).toBe(
        questionResultsTypeFixture
      );
    });
  });
});
