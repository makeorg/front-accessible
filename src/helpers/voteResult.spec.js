/* @flow */

import * as VoteResultHelper from './voteResult';
import { VOTE_AGREE_KEY, VOTE_DISAGREE_KEY, VOTE_NEUTRAL_KEY } from 'Constants/vote';

describe('VoteResult Helper', () => {
  it('test getResultBarIndex', () => {
    const resultBarIndex = VoteResultHelper.getResultBarIndex('foo', 'bar');
    expect(resultBarIndex).toBe('ResultBar_foo_bar');
  });

  it('test getTooltipIndex', () => {
    const tooltipIndex = VoteResultHelper.getTooltipIndex('foo', 'bar');
    expect(tooltipIndex).toBe('Tooltip_foo_bar');
  });

  it('test getVotesCount', () => {
    const votesCount = VoteResultHelper.getVotesCount([{count: 1}, {count: 2}, {count: 3}]);
    expect(votesCount).toBe(6);
  });

  it('test getVotesPercent', () => {
    const votes = [{
      count: 3,
      voteKey: VOTE_AGREE_KEY
    }, {
      count: 3,
      voteKey: VOTE_DISAGREE_KEY
    }, {
      count: 4,
      voteKey: VOTE_NEUTRAL_KEY
    }];

    const votesPercent = VoteResultHelper.getVotesPercent(votes, 10);
    expect(votesPercent[VOTE_AGREE_KEY]).toBe(30);
    expect(votesPercent[VOTE_DISAGREE_KEY]).toBe(30);
    expect(votesPercent[VOTE_NEUTRAL_KEY]).toBe(40);
  });
});
