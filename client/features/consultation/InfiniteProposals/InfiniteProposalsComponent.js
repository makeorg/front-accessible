/* @flow */
import React from 'react';
import { type ProposalType } from 'Shared/types/proposal';
import { ProposalCardTagged } from 'Client/features/proposal/ProposalCardTagged';
import { ProposalCardTaggedStyle } from 'Client/features/proposal/ProposalCardTagged/Styled';
import { Spinner } from 'Client/ui/Spinner';

type Props = {
  proposals: ProposalType[],
  isLoading: boolean,
};

export const InfiniteProposalsComponent = (props: Props) => {
  const { proposals, isLoading } = props;
  return (
    <React.Fragment>
      {proposals &&
        proposals.map(proposal => (
          <ProposalCardTaggedStyle key={proposal.id}>
            <ProposalCardTagged key={proposal.id} proposal={proposal} />
          </ProposalCardTaggedStyle>
        ))}
      {isLoading && <Spinner />}
    </React.Fragment>
  );
};
