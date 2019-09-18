// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { type Proposal as TypeProposal } from 'Shared/types/proposal';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { ProposalCardWithQuestion } from 'Client/features/proposal/ProposalCardWithQuestion';
import { useSlider } from 'Client/hooks/useSlider';
import {
  PopularShowcaseStylesheet,
  ShowcaseSliderParams,
} from '../Styled/slider';
import {
  ProposalsSliderWrapperStyle,
  ProposalsContentStyle,
  ProposalsIntroStyle,
  ProposalsTitleStyle,
} from '../Styled';

type PopularProposalsProps = {
  proposals: TypeProposal[],
};

export const PopularProposals = ({ proposals }: PopularProposalsProps) => {
  const proposalsIsEmpty = proposals.length <= 0;

  useSlider('popular', ShowcaseSliderParams, proposalsIsEmpty);

  if (proposalsIsEmpty) {
    return null;
  }

  return (
    <ProposalsContentStyle aria-labelledby="popular_proposals_title">
      <ProposalsTitleStyle id="popular_proposals_title">
        <ProposalsIntroStyle>
          {i18n.t('homepage.proposals.popular.intro')}
          <React.Fragment> </React.Fragment>
        </ProposalsIntroStyle>
        {i18n.t('homepage.proposals.popular.title')}
      </ProposalsTitleStyle>
      <ScreenReaderItemStyle>
        {i18n.t('common.slider.introduction')}
      </ScreenReaderItemStyle>
      <PopularShowcaseStylesheet />
      <ProposalsSliderWrapperStyle className="popular">
        <div className="popular__track" data-glide-el="track">
          <ul className="popular__slides">
            {proposals.map((proposal, index) => (
              <li key={proposal.id} className="popular__slide">
                <ProposalCardWithQuestion
                  proposal={proposal}
                  position={index + 1}
                  size={2}
                  withOrganisations
                />
              </li>
            ))}
          </ul>
        </div>
      </ProposalsSliderWrapperStyle>
    </ProposalsContentStyle>
  );
};
