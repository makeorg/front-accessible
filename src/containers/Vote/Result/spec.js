import { shallow } from 'enzyme';
import VoteResult from './index';
import VoteResultComponent from 'Components/Vote/Result';
import * as VoteResultHelper from 'Helpers/voteResult';
import { VOTE_AGREE_KEY, VOTE_DISAGREE_KEY, VOTE_NEUTRAL_KEY } from 'Constants/vote';

describe('VoteResultContainer', () => {
  const defaultProps = {
    proposalId: 'fooId',
    votes: [{voteKey: 'foo'}, {voteKey: 'bar'}],
    votedKey: 'bar',
    tabIndex: 0,
    index: 0,
    handleVote: () => {}
  };

  it('render VoteResultComponent and passed props', () => {
    const votesCount = 22;
    const votePercent = {
      [VOTE_AGREE_KEY]: 20,
      [VOTE_DISAGREE_KEY]: 0,
      [VOTE_NEUTRAL_KEY]: 0
    };

    sinon.stub(VoteResultHelper, 'getVotesCount').returns(votesCount);
    sinon.stub(VoteResultHelper, 'getVotesPercent').returns(votePercent);

    const wrapper = shallow(<VoteResult {...defaultProps}/>);

    const expectedPassedProps = {
      votesPercent: votePercent,
      votesCount: votesCount,
      proposalId: defaultProps.proposalId,
      votedKey: defaultProps.votedKey,
      index: defaultProps.index,
      tabIndex: defaultProps.tabIndex
    };

    const voteResultComponentWrapper = wrapper.find(VoteResultComponent);
    expect(voteResultComponentWrapper).to.have.length(1);
    expect(voteResultComponentWrapper.props()).to.include(expectedPassedProps);
  });
});
