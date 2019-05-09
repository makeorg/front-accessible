// flow
import * as React from 'react';
import * as VoteResultHelper from 'Shared/helpers/voteResult';
import { type Vote as TypeVote } from 'Shared/types/proposal';
import { VoteResultComponent } from './VoteResultComponent';

type Props = {
  /** Proposal's Id */
  proposalId: string,
  /** Array of votes */
  votes: TypeVote[],
  /** Voted key property */
  votedKey: string,
  /** Method called when vote button is clicked */
  handleVote?: string => void,
  /** When waiting response from API */
  pending?: boolean,
};

/**
 * Handles Vote Result Business Logic
 */
export const VoteResultContainer = (props: Props) => {
  const { votes, handleVote, votedKey, proposalId, pending } = props;
  const totalVotesCount = VoteResultHelper.getTotalVotesCount(votes);
  const handleVoteWithKey = () => {
    handleVote(votedKey);
  };

  return (
    <VoteResultComponent
      votesPercent={VoteResultHelper.getVotesPercent(votes, totalVotesCount)}
      votesCount={totalVotesCount}
      votedKey={votedKey}
      handleVote={handleVoteWithKey}
      proposalId={proposalId}
      pending={pending}
    />
  );
};

VoteResultContainer.defaultProps = {
  pending: false,
  handleVote: () => {},
};
