// @flow
import React from 'react';
import { type VoteType } from 'Shared/types/vote';
import { VoteResult } from 'Client/features/vote/Result';
import { SpaceBetweenColumnStyle } from 'Client/ui/Elements/FlexElements';
import { QualificationButton } from 'Client/features/vote/Qualification/Button';
import { VoteResultStyle } from './Styled';

type Props = {
  /** Proposal's Id */
  proposalId: string,
  /** Array of votes */
  votes: VoteType[],
  /** Voted key property */
  votedKey: string,
  /** Proposal's Key */
  proposalKey: string,
  /** Status of vote */
  isPending?: boolean,
  /** handle click on vote */
  handleVote?: (voteKey: string) => void,
  /** Optional boolean to enable or not tooltip toggling */
  showTooltip?: boolean,
};

export const VoteResultElement = ({
  proposalId,
  votes,
  votedKey,
  isPending,
  handleVote,
  proposalKey,
  showTooltip = true,
}: Props) => {
  const resultVote = votes.find(vote => vote.voteKey === votedKey);

  if (!resultVote) {
    return null;
  }

  return (
    <VoteResultStyle>
      <VoteResult
        proposalId={proposalId}
        votes={votes}
        votedKey={votedKey}
        handleVote={handleVote}
        pending={isPending}
        showTooltip={showTooltip}
        disableClick
      />
      <SpaceBetweenColumnStyle>
        {resultVote.qualifications.map(qualification => (
          <QualificationButton
            key={`vote_result_${proposalId}_qualifcation_${
              qualification.qualificationKey
            }`}
            qualification={qualification}
            votedKey={votedKey}
            proposalId={proposalId}
            proposalKey={proposalKey}
            disableClick
          />
        ))}
      </SpaceBetweenColumnStyle>
    </VoteResultStyle>
  );
};

VoteResultElement.defaultProps = {
  handleVote: () => {},
  isPending: false,
};
