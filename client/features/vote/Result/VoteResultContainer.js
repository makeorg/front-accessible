// flow
import * as React from 'react';
import * as VoteResultHelper from 'Shared/helpers/voteResult';
import { type VoteType } from 'Shared/types/proposal';
import { VoteResultComponent } from './VoteResultComponent';

type Props = {
  /** Proposal's Id */
  proposalId: string,
  /** Array with votes received from Api */
  votes: VoteType[],
  /** Voted key property */
  votedKey: string,
  /** Method called when vote button is clicked */
  handleVote: string => void,
  /** When waiting response from API */
  pending: boolean,
};

/**
 * Handles Vote Result Business Logic
 */
export const VoteResultContainer = (props: Props) => {
  const { votes, handleVote, votedKey, proposalId, pending } = props;
  const votesCount = VoteResultHelper.getVotesCount(votes);
  const handleVoteWithKey = () => {
    handleVote(votedKey);
  };

  return (
    <VoteResultComponent
      votesPercent={VoteResultHelper.getVotesPercent(votes, votesCount)}
      votesCount={votesCount}
      votedKey={votedKey}
      handleVote={handleVoteWithKey}
      proposalId={proposalId}
      pending={pending}
    />
  );
};
