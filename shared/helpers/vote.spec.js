/* @flow */

import {
  VOTE_AGREE_KEY,
  VOTE_DISAGREE_KEY,
  VOTE_NEUTRAL_KEY,
} from 'Shared/constants/vote';
import * as voteHelper from './vote';

describe('vote', () => {
  it('get vote key', () => {
    const voteKey = voteHelper.getVoteKey('voteKey', 'proposalId');

    expect(voteKey).toBe('voteKey_proposalId');
  });

  it('get vote button id', () => {
    const voteButtonId = voteHelper.getVoteButtonId('voteKey', 42);

    expect(voteButtonId).toBe('voteKey-42');
  });

  it('do vote', () => {
    const votesList = [
      {
        count: 3,
        voteKey: VOTE_AGREE_KEY,
        qualifications: [],
      },
      {
        count: 3,
        voteKey: VOTE_DISAGREE_KEY,
        qualifications: [],
      },
      {
        count: 4,
        voteKey: VOTE_NEUTRAL_KEY,
        qualifications: [],
      },
    ];

    const prevState = {
      hasVoted: false,
      votedKey: '',
      votes: votesList,
      qualifications: [],
      pending: false,
      pendingVoteKey: '',
    };

    const newVote = {
      count: 4,
      voteKey: VOTE_AGREE_KEY,
      qualifications: [],
      pending: false,
      pendingVoteKey: '',
    };

    const expectedState = {
      hasVoted: true,
      votedKey: VOTE_AGREE_KEY,
      votes: [
        {
          count: 4,
          voteKey: VOTE_AGREE_KEY,
          qualifications: [],
          pending: false,
          pendingVoteKey: '',
        },
        {
          count: 3,
          voteKey: VOTE_DISAGREE_KEY,
          qualifications: [],
        },
        {
          count: 4,
          voteKey: VOTE_NEUTRAL_KEY,
          qualifications: [],
        },
      ],
      qualifications: [],
      pending: false,
      pendingVoteKey: '',
    };

    const newVoteState = voteHelper.doVote(prevState, newVote);

    expect(newVoteState).toEqual(expectedState);
  });

  it('do unvote', () => {
    const votesList = [
      {
        count: 3,
        voteKey: VOTE_AGREE_KEY,
        qualifications: [],
      },
      {
        count: 3,
        voteKey: VOTE_DISAGREE_KEY,
        qualifications: [],
        pending: false,
        pendingVoteKey: '',
      },
      {
        count: 4,
        voteKey: VOTE_NEUTRAL_KEY,
        qualifications: [],
      },
    ];

    const prevState = {
      hasVoted: true,
      votedKey: VOTE_AGREE_KEY,
      votes: votesList,
      qualifications: [],
      pending: false,
      pendingVoteKey: '',
    };

    const newVote = {
      count: 2,
      voteKey: VOTE_DISAGREE_KEY,
      qualifications: [],
      pending: false,
      pendingVoteKey: '',
    };

    const expectedState = {
      hasVoted: false,
      votedKey: '',
      votes: [
        {
          count: 3,
          voteKey: VOTE_AGREE_KEY,
          qualifications: [],
        },
        {
          count: 2,
          voteKey: VOTE_DISAGREE_KEY,
          qualifications: [],
          pending: false,
          pendingVoteKey: '',
        },
        {
          count: 4,
          voteKey: VOTE_NEUTRAL_KEY,
          qualifications: [],
        },
      ],
      qualifications: [],
      pending: false,
      pendingVoteKey: '',
    };

    const newVoteState = voteHelper.doUnvote(prevState, newVote);

    expect(newVoteState).toEqual(expectedState);
  });
});
