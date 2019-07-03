/* @flow */
import * as actionTypes from 'Shared/store/actionTypes';
import {
  questionConfigurationTypeFixture,
  questionTypeFixture,
} from 'Shared/types/__fixtures__/question.fixture';
import { currentQuestion } from './index';

describe('Questions reducer', () => {
  it('Return the initial state', () => {
    expect(currentQuestion(undefined, {})).toEqual(null);
  });

  it('action QUESTION_CONFIGURATION_LOAD', () => {
    const action = {
      type: actionTypes.QUESTION_CONFIGURATION_LOAD,
      payload: {
        questionSlug: 'foo-question',
        questionConfiguration: questionConfigurationTypeFixture,
      },
    };

    expect(currentQuestion(undefined, action)).toEqual('foo-question');
  });

  it('action QUESTION_LOAD', () => {
    const action = {
      type: actionTypes.QUESTION_LOAD,
      payload: {
        question: questionTypeFixture,
      },
    };

    expect(currentQuestion(undefined, action)).toEqual(
      questionTypeFixture.slug
    );
  });
});
