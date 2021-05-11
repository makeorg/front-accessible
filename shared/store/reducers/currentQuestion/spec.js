/* @flow */
import { questionTypeFixture } from 'Shared/types/__fixtures__/question.fixture';
import {
  REMOVE_CURRENT_QUESTION_SLUG,
  SET_CURRENT_QUESTION_SLUG,
} from './actions';
import { currentQuestion } from './index';

describe('Questions reducer', () => {
  it('Return the initial state', () => {
    expect(currentQuestion('', {})).toEqual('');
  });

  it('action REMOVE_CURRENT_QUESTION_SLUG', () => {
    const action = {
      type: REMOVE_CURRENT_QUESTION_SLUG,
    };

    expect(currentQuestion({ currentQuestion: 'old_slug' }, action)).toEqual(
      ''
    );
  });

  it('action SET_CURRENT_QUESTION_SLUG', () => {
    const action = {
      type: SET_CURRENT_QUESTION_SLUG,
      payload: {
        questionSlug: questionTypeFixture.slug,
      },
    };

    expect(currentQuestion(undefined, action)).toEqual(
      questionTypeFixture.slug
    );
  });
});
