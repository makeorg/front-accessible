// @flow
import {
  loadPopularTags,
  loadQuestion,
  loadQuestionPersonalities,
} from 'Shared/store/reducers/questions/actions';
import { questionTypeFixture } from 'Shared/types/__fixtures__/question.fixture';
import { personalitiesFixture } from 'Shared/types/__fixtures__/user.fixture';
import { questions } from './index';

describe('Question reducer', () => {
  it('Return the initial state', () => {
    const expectedState = {};
    expect(questions(undefined, {})).toEqual(expectedState);
  });

  it('Load Question', () => {
    const previousState = {};
    const expectedState = {
      'weeuropeans-fr': {
        question: questionTypeFixture,
      },
    };
    const action = loadQuestion(questionTypeFixture);
    expect(questions(previousState, action)).toEqual(expectedState);
  });

  it('Load Popular Tags', () => {
    const previousState = {};
    const mockedTag = {
      tagId: '1234',
      label: 'foo',
      proposalCount: 0,
    };

    const expectedState = {
      environnement: {
        popularTags: [mockedTag],
      },
    };
    const action = loadPopularTags('environnement', [mockedTag]);
    expect(questions(previousState, action)).toEqual(expectedState);
  });

  it('Load Personalities', () => {
    const previousState = {};
    const results = {
      total: 1,
      results: [personalitiesFixture],
    };
    const expectedState = {
      environnement: {
        personalities: results,
      },
    };
    const action = loadQuestionPersonalities('environnement', results);
    expect(questions(previousState, action)).toEqual(expectedState);
  });
});
