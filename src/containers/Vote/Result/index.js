import React from 'react';
import VoteResultComponent from '../../../components/Vote/Result';
import * as VoteResultHelper from '../../../helpers/voteResult';

type Props = {
  proposalId: string,
  votes: Array<Object>,
  votedKey: string,
  tabIndex: number,
  index: number,
  handleVote: Function
};

const VoteResult = (props: Props) => {
  const {
    proposalId,
    votes,
    votedKey,
    handleVote,
    tabIndex,
    index
  } = props;

  const votesCount = VoteResultHelper.getVotesCount(votes);

  return (
    <VoteResultComponent
      votesPercent={VoteResultHelper.getVotesPercent(votes, votesCount)}
      votesCount={votesCount}
      proposalId={proposalId}
      votedKey={votedKey}
      index={index}
      handleVote={event => handleVote(event, votedKey)}
      tabIndex={tabIndex}
    />
  );
};

export default VoteResult;
