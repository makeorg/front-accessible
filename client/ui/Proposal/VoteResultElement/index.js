// @flow

import React from 'react';
import { i18n } from 'Shared/i18n';
import { type Vote as TypeVote } from 'Shared/types/proposal';
import { QualificationButtonElement } from 'Client/ui/Elements/Qualification/Button';
import { voteStaticParams } from 'Shared/constants/vote';
import { VoteResult } from 'Client/features/vote/Result';
import { SpaceBetweenColumnStyle } from 'Client/ui/Elements/FlexElements';
import { VoteResultStyle } from './Styled';

type Props = {
  /** Proposal's Id */
  proposalId: string,
  /** Array of votes */
  votes: TypeVote[],
  /** Voted key property */
  votedKey: string,
  /** Status of vote */
  isPending?: boolean,
  /** handle click on vote */
  handleVote?: (voteKey: string) => void,
};

export const VoteResultElement = ({
  proposalId,
  votes,
  votedKey,
  isPending,
  handleVote,
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
      />
      <SpaceBetweenColumnStyle>
        {resultVote.qualifications.map(qualification => (
          <QualificationButtonElement
            key={`vote_result_${proposalId}_qualifcation_${
              qualification.qualificationKey
            }`}
            color={voteStaticParams[votedKey].color}
            label={i18n.t(`qualification.${qualification.qualificationKey}`)}
            qualificationCounter={qualification.count}
            isQualified={qualification.hasQualified}
            qualificationKey={qualification.qualificationKey}
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
