// @flow
import { proposalTypeFixture } from 'Shared/types/__fixtures__/proposal.fixture';
import {
  setPopularProposals,
  loadQuestionPersonalities,
} from 'Shared/store/reducers/questions/actions';
import { personalitiesFixture } from 'Shared/types/__fixtures__/user.fixture';
import { questions } from './index';

describe('Question reducer', () => {
  it('Return the initial state', () => {
    const expectedState = {};
    expect(questions(undefined, {})).toEqual(expectedState);
  });

  it('Return popular Proposals', () => {
    const previousState = {};
    const results = {
      total: 1,
      results: [proposalTypeFixture],
      seed: null,
    };
    const expectedState = {
      environnement: {
        popularProposals: results,
      },
    };
    const action = setPopularProposals('environnement', results);
    expect(questions(previousState, action)).toEqual(expectedState);
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
