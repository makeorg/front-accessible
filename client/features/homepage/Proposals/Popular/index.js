// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { type Proposal as TypeProposal } from 'Shared/types/proposal';
import { Spinner } from 'Client/ui/Elements/Loading/Spinner';
import { HomeTitleStyle } from 'Client/ui/Elements/TitleElements';
import { ProposalsList } from '../List';
import {
  ProposalsWrapperStyle,
  ProposalsContentStyle,
  ProposalsIntroStyle,
} from '../Styled';

type PopularProposalsProps = {
  proposals: TypeProposal[],
  isLoading: boolean,
};

export const PopularProposals = ({
  proposals,
  isLoading,
}: PopularProposalsProps) => {
  if (isLoading) {
    return <Spinner />;
  }

  const proposalsLength = proposals.length;
  if (proposalsLength === 0) {
    return null;
  }

  return (
    <ProposalsWrapperStyle>
      <ProposalsContentStyle aria-labelledby="popular_proposals_title">
        <HomeTitleStyle id="popular_proposals_title">
          <ProposalsIntroStyle>
            {i18n.t('homepage.proposals.popular.intro')}
            <React.Fragment> </React.Fragment>
          </ProposalsIntroStyle>
          {i18n.t('homepage.proposals.popular.title')}
        </HomeTitleStyle>
        <ProposalsList proposals={proposals} />
      </ProposalsContentStyle>
    </ProposalsWrapperStyle>
  );
};
