// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { type Proposal as TypeProposal } from 'Shared/types/proposal';
import { HomeTitleStyle } from 'Client/ui/Elements/TitleElements';
import { Spinner } from 'Client/ui/Elements/Loading/Spinner';
import { ProposalsList } from '../List';
import {
  ProposalsWrapperStyle,
  ProposalsContentStyle,
  ProposalsIntroStyle,
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
      <ProposalsContentStyle aria-labelledby="controversial_proposals_title">
        <HomeTitleStyle id="controversial_proposals_title">
          <ProposalsIntroStyle>
            {i18n.t('homepage.proposals.controversial.intro')}
            <React.Fragment> </React.Fragment>
          </ProposalsIntroStyle>
          {i18n.t('homepage.proposals.controversial.title')}
        </HomeTitleStyle>
        <ProposalsList proposals={proposals} />
      </ProposalsContentStyle>
    </ProposalsWrapperStyle>
  );
};
