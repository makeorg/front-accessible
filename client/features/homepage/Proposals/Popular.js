// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { type ProposalType } from 'Shared/types/proposal';
import { useDesktop } from 'Client/hooks/useMedia';
import { ProposalCardWithQuestion } from 'Client/features/proposal/ProposalCardWithQuestion';
import { ProposalsShowcase } from './Slider';
import {
  ProposalsContentStyle,
  ProposalsIntroStyle,
  ProposalsTitleStyle,
  ProposalsSliderListStyle,
  ProposalsSliderListItemStyle,
} from './style';

type HomepagePopularProposalsProps = {
  proposals: ProposalType[],
};

export const HomepagePopularProposals = ({
  proposals,
}: HomepagePopularProposalsProps) => {
  const hasProposals = proposals.length > 0;
  const POPULAR_SLIDER = 'popularshowcase';
  const isDesktop = useDesktop();

  if (!hasProposals) {
    return null;
  }

  return (
    <ProposalsContentStyle aria-labelledby="popular_proposals_title">
      <ProposalsTitleStyle id="popular_proposals_title">
        <ProposalsIntroStyle>
          {i18n.t('homepage.proposals.popular.intro')}
          <> </>
        </ProposalsIntroStyle>
        {i18n.t('homepage.proposals.popular.title')}
      </ProposalsTitleStyle>
      {!isDesktop ? (
        <ProposalsShowcase proposals={proposals} sliderName={POPULAR_SLIDER} />
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
