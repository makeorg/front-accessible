/* @flow */
import * as actionTypes from 'Shared/store/actionTypes';
import {
  questionConfigurationTypeFixture,
  questionTypeFixture,
  questionResultsTypeFixture,
} from 'Shared/types/__fixtures__/question.fixture';
import { currentQuestion } from './index';

describe('Questions reducer', () => {
  it('Return the initial state', () => {
    expect(currentQuestion('', {})).toEqual('');
  });


  it('action QUESTION_UNLOAD', () => {
    const action = {
      type: actionTypes.QUESTION_UNLOAD,
    };

    expect(currentQuestion({currentQuestion: 'old_slug'}, action)).toEqual(
      ''
    );
  });

  it('action CURRENT_QUESTION_UPDATE', () => {
    const action = {
      type: actionTypes.CURRENT_QUESTION_UPDATE,
      payload: {
        questionSlug: questionTypeFixture.slug,
      },
    };

    expect(currentQuestion(undefined, action)).toEqual(
      questionTypeFixture.slug
    );
  });
});
