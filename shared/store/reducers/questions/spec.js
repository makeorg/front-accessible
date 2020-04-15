// @flow
import { loadQuestionPersonalities } from 'Shared/store/reducers/questions/actions';
import { personalitiesFixture } from 'Shared/types/__fixtures__/user.fixture';
import { questions } from './index';

describe('Question reducer', () => {
  it('Return the initial state', () => {
    const expectedState = {};
    expect(questions(undefined, {})).toEqual(expectedState);
  });

  it('Return Personalities', () => {
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
