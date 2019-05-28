/* @flow */
import * as actionTypes from 'Shared/store/actionTypes';
import { initialState } from 'Shared/store/initialState';
import {
  questionConfigurationTypeFixture,
  questionTypeFixture,
} from 'Shared/types/__fixtures__/question.fixture';
import { questions } from './index';

describe('Questions reducer', () => {
  it('Return the initial state', () => {
    expect(questions(undefined, {})).toEqual(initialState.questions);
  });

  it('action QUESTION_CONFIGURATION_LOAD', () => {
    const action = {
      type: actionTypes.QUESTION_CONFIGURATION_LOAD,
      payload: {
        questionSlug: 'foo-question',
        questionConfiguration: questionConfigurationTypeFixture,
      },
    };

    expect(questions(undefined, action)).toEqual({
      'foo-question': {
        questionConfiguration: questionConfigurationTypeFixture,
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
