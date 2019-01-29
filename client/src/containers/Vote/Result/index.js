import * as React from 'react';
import VoteResultComponent from 'Src/components/Vote/Result';
import * as VoteResultHelper from 'Shared/helpers/voteResult';

type Props = {
  /** Proposal's Id */
  proposalId: string,
  /** Array with votes received from Api */
  votes: Array<Object>,
  /** Voted key property */
  votedKey: string,
  /** Tabindex for interactive items */
  tabIndex: number,
  /** Index of the card */
  index: number,
  /** Method called when vote button is clicked */
  handleVote: Function
};

/**
 * Handles Vote Result Business Logic
 */
const VoteResult = (props: Props) => {
  const {
    votes,
    votedKey,
    handleVote
  } = props;

  const votesCount = VoteResultHelper.getVotesCount(votes);

  return (
    <VoteResultComponent
      votesPercent={VoteResultHelper.getVotesPercent(votes, votesCount)}
      votesCount={votesCount}
      handleVote={event => handleVote(event, votedKey)}
      {...props}
    />
  );
};

export default VoteResult;
