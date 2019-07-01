// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { type Proposal as TypeProposal } from 'Shared/types/proposal';
import { Spinner } from 'Client/ui/Elements/Loading/Spinner';
import { ProposalsList } from '../List';
import {
  ProposalsWrapperStyle,
  ProposalsContentStyle,
  ProposalsIntroStyle,
  ProposalsTitleStyle,
} from '../Styled';

type ControversialProposalsProps = {
  proposals: TypeProposal[],
  isLoading: boolean,
};

export const ControversialProposals = ({
  proposals,
  isLoading,
}: ControversialProposalsProps) => {
  if (isLoading) {
    return <Spinner />;
  }

  const proposalsLength = proposals.length;
  if (proposalsLength === 0) {
    return null;
  }
  return (
    <ProposalsWrapperStyle>
      <ProposalsContentStyle>
        <ProposalsIntroStyle>
          {i18n.t('homepage.proposals.controversial.intro')}
        </ProposalsIntroStyle>
        <ProposalsTitleStyle>
          {i18n.t('homepage.proposals.controversial.title')}
        </ProposalsTitleStyle>
        <ProposalsList proposals={proposals} />
      </ProposalsContentStyle>
    </ProposalsWrapperStyle>
  );
};
