import React from 'react';
import VoteResultComponent from '../../../components/Vote/Result';
import voteStaticParams, { VOTE_AGREE_KEY, VOTE_DISAGREE_KEY, VOTE_NEUTRAL_KEY } from '../../../constants/vote';

const votesPercent = {
  [VOTE_AGREE_KEY]: 30,
  [VOTE_DISAGREE_KEY]: 30,
  [VOTE_NEUTRAL_KEY]: 30
};

const votesCount = 100;

class VoteResultContainer extends React.Component {
  render() {
    const {
      proposalId,
      votedKey,
      handleVote,
      tabIndex
    } = this.props;
    return (
      <VoteResultComponent
        votesPercent={votesPercent}
        votesCount={votesCount}
        voteStaticParams={voteStaticParams}
        proposalId={proposalId}
        votedKey={votedKey}
        handleVote={event => handleVote(event, votedKey)}
        tabIndex={tabIndex}
      />
    );
  }
}

export default VoteResultContainer;
