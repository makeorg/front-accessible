import React from 'react';
import VoteResultComponent from '../../../components/Vote/Result';
import voteStaticParams from '../../../constants/vote';

class VoteResultContainer extends React.Component {
  render() {
    const { proposalId, votedKey, handleVote } = this.props;
    return (
      <VoteResultComponent
        voteStaticParams={voteStaticParams}
        proposalId={proposalId}
        votedKey={votedKey}
        handleVote={event => handleVote(event, votedKey)}
      />
    );
  }
}

export default VoteResultContainer;
