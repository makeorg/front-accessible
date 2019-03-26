/* @flow */
import React from 'react';
import { type ProposalType } from 'Shared/types/proposal';
import { type Question } from 'Shared/types/question';
import { ProposalCardTagged } from 'Client/features/proposal/ProposalCardTagged';
import { Spinner } from 'Client/ui/Elements/Loading/Spinner';

type Props = {
  question: Question,
  proposals: ProposalType[],
  isLoading: boolean,
};

export const InfiniteProposalsComponent = (props: Props) => {
  const { question, proposals, isLoading } = props;
  const proposalsLength = proposals.length;

  return (
    <div role="feed" aria-busy={isLoading}>
      {proposals &&
        proposals.map((proposal, index) => (
          <ProposalCardTagged
            question={question}
            position={index + 1}
            size={proposalsLength}
            key={proposal.id}
            proposal={proposal}
          />
        ))}
      {isLoading && <Spinner />}
    </div>
  );
};
