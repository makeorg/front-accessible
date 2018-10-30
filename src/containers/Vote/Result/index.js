import React from 'react';
import VoteResultComponent from '../../../components/Vote/Result';
import voteStaticParams from '../../../constants/vote';

class VoteResultContainer extends React.Component {
  render() {
    const {
      proposalVotes,
      proposalId,
      votedKey,
      handleVote,
      tabIndex
    } = this.props;
    return (
      <VoteResultComponent
        proposalVotes={proposalVotes}
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
