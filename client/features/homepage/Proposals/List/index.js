// @flow

import React from 'react';
import { type Proposal as TypeProposal } from 'Shared/types/proposal';
import { ProposalCardWithQuestion } from 'Client/features/proposal/ProposalCardWithQuestion';
import { ProposalsListStyle } from '../Styled';

type Props = {
  proposals: TypeProposal[],
};

export const ProposalsList = ({ proposals }: Props) => {
  return (
    <ProposalsListStyle>
      {proposals.map((proposal, index) => (
        <ProposalCardWithQuestion
          key={proposal.id}
          proposal={proposal}
          position={index + 1}
          size={2}
          withOrganisations
        />
      ))}
    </ProposalsListStyle>
  );
};
