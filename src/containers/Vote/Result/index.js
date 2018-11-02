import React from 'react';
import VoteResultComponent from '../../../components/Vote/Result';
import voteStaticParams from '../../../constants/vote';
import { getVotesCount, getVotesPercent } from '../../../helpers/voteresults';

class VoteResultContainer extends React.Component {
  render() {
    const {
      proposalId,
      votes,
      votedKey,
      handleVote,
      tabIndex,
      index
    } = this.props;
    const votesCount = getVotesCount(votes);

    return (
      <VoteResultComponent
        votesPercent={getVotesPercent(votes, votesCount)}
        votesCount={votesCount}
        voteStaticParams={voteStaticParams}
        proposalId={proposalId}
        votedKey={votedKey}
        index={index}
        handleVote={event => handleVote(event, votedKey)}
        tabIndex={tabIndex}
      />
    );
  }
}

export default VoteResultContainer;
