/* @flow */

import * as voteHelper from './vote';

describe('vote', () => {
  it('get vote key', () => {
    const voteKey = voteHelper.getVoteKey('voteKey', 'proposalId');

    expect(voteKey).toBe('voteKey_proposalId');
  });
});
