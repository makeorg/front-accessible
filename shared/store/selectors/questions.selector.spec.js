/* @flow */

import { questionTypeFixture } from 'Shared/types/__fixtures__/question.fixture';
import { initialState } from '../initialState';
import { selectCurrentQuestion, selectQuestion } from './questions.selector';

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
});
