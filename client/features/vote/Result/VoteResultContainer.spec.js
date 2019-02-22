import React from 'react';
import { shallow } from 'enzyme';
import * as VoteResultHelper from 'Shared/helpers/voteResult';
import {
  VOTE_AGREE_KEY,
  VOTE_DISAGREE_KEY,
  VOTE_NEUTRAL_KEY,
} from 'Shared/constants/vote';
import { VoteResultContainer } from './VoteResultContainer';
import { VoteResultComponent } from './VoteResultComponent';

jest.mock('Shared/helpers/voteResult');

describe('VoteResultContainer', () => {
  const defaultProps = {
    proposalId: 'fooId',
    votes: [{ voteKey: 'foo' }, { voteKey: 'bar' }],
    votedKey: 'bar',
    tabIndex: 0,
    index: 0,
    handleVote: () => {},
  };

  it('render VoteResultComponent and passed props', () => {
    const votesCount = 22;
    const votePercent = {
      [VOTE_AGREE_KEY]: 20,
      [VOTE_DISAGREE_KEY]: 0,
      [VOTE_NEUTRAL_KEY]: 0,
    };

    VoteResultHelper.getVotesCount.mockReturnValue(votesCount);
    VoteResultHelper.getVotesPercent.mockReturnValue(votePercent);

    const wrapper = shallow(<VoteResultContainer {...defaultProps} />);

    const expectedPassedProps = {
      votesPercent: votePercent,
      votesCount,
      proposalId: defaultProps.proposalId,
      votedKey: defaultProps.votedKey,
      index: defaultProps.index,
      tabIndex: defaultProps.tabIndex,
    };

    const voteResultComponentWrapper = wrapper.find(VoteResultComponent);
    expect(voteResultComponentWrapper).toHaveLength(1);
    expect(voteResultComponentWrapper.props()).toEqual(
      expect.objectContaining(expectedPassedProps)
    );
  });
});
