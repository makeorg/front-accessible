/* @flow */
import * as React from 'react';
import { type PushProposalCardConfig } from 'Shared/types/card';
import { i18n } from 'Shared/i18n';
import { IconWrapperStyle } from 'Client/ui/Elements/ButtonElements';
import { MiddleColumnToRowStyle } from 'Client/ui/Elements/FlexElements';
import { ProgressCircleComponent } from 'Client/ui/ProgressCircle';
import {
  SvgArrowLeft,
  SvgPencil,
  SvgStepForward,
} from 'Client/ui/Svg/elements';
import { ExtraLogo } from './ExtraLogo';
import { ProposalCardStyle } from '../Styled';
import {
  BackButtonWrapperStyle,
  BackButtonStyle,
  BackIconStyle,
  PushProposalButtonStyle,
  PushProposalNextButtonStyle,
} from '../Styled/Buttons';
import { ContentWrapperStyle, InnerContentStyle } from '../Styled/Content';
import { AltMainTitleStyle } from '../Styled/Titles';

type Props = {
  /** Object with Static properties used to configure the Push Proposal Card */
  configuration: PushProposalCardConfig,
  /** Index of the card */
  index: number,
  /** Offset of cards without pagination (introCard) */
  cardOffset: number,
  /** Total of cards */
  cardsCount: number,
  /** Method called when previous card button is clicked  */
  goToPreviousCard: () => void,
  /** Position of the card */
  position: number,
  /** Scale property used by Styled Component */
  scale: number,
  /** Zindex property used by Styled Component */
  zindex: number,
  /** Method called when next card button is clicked */
  skipProposalPushCard: () => void,
  /** Method called when proposal button is clicked  */
  focusProposalField: () => void,
  /** Boolean toggled when card user has skip the card */
  isCardCollapsed: boolean,
  /** Boolean toggled when card is visible / hidden */
  isCardVisible: boolean,
};

/**
 * Renders Push Proposal Card
 */
export const PushProposalCardComponent = (props: Props) => {
  const {
    configuration,
    index,
    isCardCollapsed,
    cardOffset,
    cardsCount,
    goToPreviousCard,
    position,
    scale,
    zindex,
    skipProposalPushCard,
    focusProposalField,
    isCardVisible,
  } = props;

  return (
    <ProposalCardStyle
      position={position}
      scale={scale}
      zindex={zindex}
      isCardCollapsed={isCardCollapsed}
      isCardVisible={isCardVisible}
      aria-hidden={!isCardVisible}
    >
      <BackButtonWrapperStyle>
        <BackButtonStyle onClick={goToPreviousCard}>
          <BackIconStyle>
            <SvgArrowLeft aria-hidden />
          </BackIconStyle>
          {i18n.t('proposal_card.previous')}
        </BackButtonStyle>
        <ProgressCircleComponent
          cardOffset={cardOffset}
          index={index}
          cardsCount={cardsCount}
        />
      </BackButtonWrapperStyle>
      <ContentWrapperStyle>
        <InnerContentStyle as="section">
          <header>
            <ExtraLogo extraLogo={configuration.extraLogo} />
            <AltMainTitleStyle>
              {i18n.t('push_proposal_card.title')}
            </AltMainTitleStyle>
          </header>
          <MiddleColumnToRowStyle as="section">
            <PushProposalButtonStyle type="submit" onClick={focusProposalField}>
              <IconWrapperStyle>
                <SvgPencil aria-hidden />
              </IconWrapperStyle>
              {i18n.t('common.propose')}
            </PushProposalButtonStyle>
            <PushProposalNextButtonStyle onClick={skipProposalPushCard}>
              <IconWrapperStyle>
                <SvgStepForward aria-hidden />
              </IconWrapperStyle>
              {i18n.t('push_proposal_card.next-cta')}
            </PushProposalNextButtonStyle>
          </MiddleColumnToRowStyle>
        </InnerContentStyle>
      </ContentWrapperStyle>
    </ProposalCardStyle>
  );
};
