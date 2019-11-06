/* @flow */
import * as actionTypes from 'Shared/store/actionTypes';
import { initialState } from 'Shared/store/initialState';
import {
  questionTypeFixture,
  questionResultsTypeFixture,
} from 'Shared/types/__fixtures__/question.fixture';
import { questions } from './index';

describe('Questions reducer', () => {
  it('Return the initial state', () => {
    expect(questions(undefined, {})).toEqual(initialState.questions);
  });

  it('action QUESTION_RESULTS_LOAD', () => {
    const action = {
      type: actionTypes.QUESTION_RESULTS_LOAD,
      payload: {
        questionSlug: 'foo-question',
        questionResults: questionResultsTypeFixture,
      },
    };

    expect(questions(undefined, action)).toEqual({
      'foo-question': {
        questionResults: questionResultsTypeFixture,
      },
    });
  });

  it('action QUESTION_LOAD', () => {
    const action = {
      type: actionTypes.QUESTION_LOAD,
      payload: {
        question: questionTypeFixture,
      },
    };

    expect(questions(undefined, action)).toEqual({
      'weeuropeans-fr': {
        question: questionTypeFixture,
      },
    });
  });
});
