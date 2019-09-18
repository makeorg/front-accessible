// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { type Proposal as TypeProposal } from 'Shared/types/proposal';
import { ProposalCardWithQuestion } from 'Client/features/proposal/ProposalCardWithQuestion';
import { useSlider } from 'Client/hooks/useSlider';
import {
  ShowcaseSliderParams,
  ControversialShowcaseStylesheet,
} from '../Styled/slider';
import {
  ProposalsSliderWrapperStyle,
  ProposalsContentStyle,
  ProposalsIntroStyle,
  ProposalsTitleStyle,
} from '../Styled';

type ControversialProposalsProps = {
  proposals: TypeProposal[],
};

export const ControversialProposals = ({
  proposals,
}: ControversialProposalsProps) => {
  const proposalsIsEmpty = proposals.length <= 0;

  useSlider('controversial', ShowcaseSliderParams, proposalsIsEmpty);

  if (proposalsIsEmpty) {
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
  );
};
