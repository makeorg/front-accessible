/* @flow */
import * as React from 'react';
import { type PushProposalCardConfig } from 'Shared/types/card';
import { i18n } from 'Shared/i18n';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStepForward,
  faArrowLeft,
  faPencilAlt,
} from '@fortawesome/free-solid-svg-icons';
import { IconInButtonStyle } from 'Client/ui/Elements/ButtonElements';
import { MiddleColumnToRowStyle } from 'Client/ui/Elements/FlexElements';
import { ProgressCircleComponent } from 'Client/ui/ProgressCircle';
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
  proposalCardConfig: PushProposalCardConfig,
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
    proposalCardConfig,
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
            <FontAwesomeIcon aria-hidden icon={faArrowLeft} />
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
            {proposalCardConfig && (
              <ExtraLogo extraLogo={proposalCardConfig.extraLogo} />
            )}
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
              <IconInButtonStyle>
                <FontAwesomeIcon aria-hidden icon={faPencilAlt} />
              </IconInButtonStyle>
              {i18n.t('common.propose')}
            </PushProposalButtonStyle>
            <PushProposalNextButtonStyle
              tabIndex={tabIndex}
              onClick={skipProposalPushCard}
            >
              <IconInButtonStyle>
                <FontAwesomeIcon aria-hidden icon={faStepForward} />
              </IconInButtonStyle>
              {i18n.t('push_proposal_card.next-cta')}
            </PushProposalNextButtonStyle>
          </MiddleColumnToRowStyle>
        </InnerContentStyle>
      </ContentWrapperStyle>
    </ProposalCardStyle>
  );
};
