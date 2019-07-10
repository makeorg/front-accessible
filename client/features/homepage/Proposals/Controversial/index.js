// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { type Proposal as TypeProposal } from 'Shared/types/proposal';
import { ProposalCardWithQuestion } from 'Client/features/proposal/ProposalCardWithQuestion';
import { useSlider } from 'Client/hooks/useSlider';
import { HomeTitleStyle } from 'Client/ui/Elements/TitleElements';
import {
  ShowcaseSliderParams,
  ControversialShowcaseStylesheet,
} from '../Styled/slider';
import {
  ProposalsWrapperStyle,
  ProposalsSliderWrapperStyle,
  ProposalsContentStyle,
  ProposalsIntroStyle,
} from '../Styled';

type ControversialProposalsProps = {
  proposals: TypeProposal[],
};

export const ControversialProposals = ({
  proposals,
}: ControversialProposalsProps) => {
  const proposalsLength = proposals.length <= 0;

  useSlider('controversial', ShowcaseSliderParams, proposalsLength);

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
        <ScreenReaderItemStyle>
          {i18n.t('common.slider.introduction')}
        </ScreenReaderItemStyle>
        <ControversialShowcaseStylesheet />
        <ProposalsSliderWrapperStyle className="controversial">
          <div className="controversial__track" data-glide-el="track">
            <ul className="controversial__slides">
              {proposals.map((proposal, index) => (
                <li key={proposal.id} className="controversial__slide">
                  <ProposalCardWithQuestion
                    proposal={proposal}
                    position={index + 1}
                    size={2}
                  />
                </li>
              ))}
            </ul>
          </div>
        </ProposalsSliderWrapperStyle>
      </ProposalsContentStyle>
    </ProposalsWrapperStyle>
  );
};
