// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { type Proposal as TypeProposal } from 'Shared/types/proposal';
import { useDesktop } from 'Client/hooks/useMedia';
import { ProposalCardWithQuestion } from 'Client/features/proposal/ProposalCardWithQuestion';
import {
  ProposalsContentStyle,
  ProposalsIntroStyle,
  ProposalsTitleStyle,
  ProposalsSliderListStyle,
  ProposalsSliderListItemStyle,
} from '../Styled';
import { ProposalsShowcase } from '../Slider';

type ControversialProposalsProps = {
  proposals: TypeProposal[],
};

export const ControversialProposals = ({
  proposals,
}: ControversialProposalsProps) => {
  const isDeskop = useDesktop();
  const hasProposals = proposals.length > 0;
  const CONTROVERSIAL_SLIDER = 'controversialshowcase';

  if (!hasProposals) {
    return null;
  }

  return (
    <ProposalsContentStyle aria-labelledby="controversial_proposals_title">
      <ProposalsTitleStyle id="controversial_proposals_title">
        <ProposalsIntroStyle>
          {i18n.t('homepage.proposals.controversial.intro')}
          <React.Fragment> </React.Fragment>
        </ProposalsIntroStyle>
        {i18n.t('homepage.proposals.controversial.title')}
      </ProposalsTitleStyle>
      {!isDeskop ? (
        <ProposalsShowcase
          proposals={proposals}
          sliderName={CONTROVERSIAL_SLIDER}
        />
      ) : (
        <ProposalsSliderListStyle>
          {proposals.map((proposal, index) => (
            <ProposalsSliderListItemStyle key={proposal.id}>
              <ProposalCardWithQuestion
                proposal={proposal}
                position={index + 1}
                size={2}
                withOrganisations
              />
            </ProposalsSliderListItemStyle>
          ))}
        </ProposalsSliderListStyle>
      )}
    </ProposalsContentStyle>
  );
};
