/* @flow */
import React from 'react';
import { type ProposalType } from 'Shared/types/proposal';
import { ProposalCardTagged } from 'Client/features/proposal/ProposalCardTagged';
import { Spinner } from 'Client/ui/Elements/Loading/Spinner';

type Props = {
  proposals: ProposalType[],
  isLoading: boolean,
};

export const InfiniteProposalsComponent = (props: Props) => {
  const { proposals, isLoading } = props;
  const proposalsLength = proposals.length;

  return (
    <div role="feed" aria-busy={isLoading}>
      {proposals &&
        proposals.map((proposal, index) => (
          <ProposalCardTagged
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
