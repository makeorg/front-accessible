/* @flow */
import * as React from 'react';
import { type PushProposalCardConfig } from 'Shared/types/card';
import { i18n } from 'Shared/i18n';
import { IconWrapperStyle } from 'Client/ui/Elements/ButtonElements';
import { MiddleColumnToRowStyle } from 'Client/ui/Elements/FlexElements';
import { ProgressCircleComponent } from 'Client/ui/ProgressCircle';
import { Svg } from 'Client/ui/Svg';
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
  /** Tabindex for interactive items */
  tabIndex: number,
  /** Incremented / Decremented Index */
  currentIndex: number,
  /** Offset of cards without pagination (introCard) */
  cardOffset: number,
  /** Total of cards */
  cardsCount: number,
  /** Method called when previous card button is clicked  */
  goToPreviousCard: Function,
  /** Position of the card */
  position: number,
  /** Scale property used by Styled Component */
  scale: number,
  /** Zindex property used by Styled Component */
  zindex: number,
  /** Method called when next card button is clicked */
  skipProposalPushCard: Function,
  /** Method called when proposal button is clicked  */
  focusProposalField: Function,
};

/**
 * Renders Push Proposal Card
 */
export const PushProposalCardComponent = (props: Props) => {
  const {
    configuration,
    index,
    tabIndex,
    currentIndex,
    cardOffset,
    cardsCount,
    goToPreviousCard,
    position,
    scale,
    zindex,
    skipProposalPushCard,
    focusProposalField,
  } = props;

  return (
    <ProposalCardStyle
      position={position}
      scale={scale}
      zindex={zindex}
      isCardCollapsed={index < currentIndex}
    >
      <BackButtonWrapperStyle>
        <BackButtonStyle tabIndex={tabIndex} onClick={goToPreviousCard}>
          <BackIconStyle>
            <Svg aria-hidden type="SvgArrowLeft" />
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
            <PushProposalButtonStyle
              type="submit"
              tabIndex={tabIndex}
              onClick={focusProposalField}
            >
              <IconWrapperStyle>
                <Svg aria-hidden type="SvgPencil" />
              </IconWrapperStyle>
              {i18n.t('common.propose')}
            </PushProposalButtonStyle>
            <PushProposalNextButtonStyle
              tabIndex={tabIndex}
              onClick={skipProposalPushCard}
            >
              <IconWrapperStyle>
                <Svg aria-hidden type="SvgStepForward" />
              </IconWrapperStyle>
              {i18n.t('push_proposal_card.next-cta')}
            </PushProposalNextButtonStyle>
          </MiddleColumnToRowStyle>
        </InnerContentStyle>
      </ContentWrapperStyle>
    </ProposalCardStyle>
  );
};
