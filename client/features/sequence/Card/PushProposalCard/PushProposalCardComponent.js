/* @flow */
import * as React from 'react';
import { type PushProposalCardConfig } from 'Shared/types/card';
import { i18n } from 'Shared/i18n';
import { IconWrapperStyle } from 'Client/ui/Elements/ButtonElements';
import { MiddleColumnToRowStyle } from 'Client/ui/Elements/FlexElements';
import { SvgPencil, SvgStepForward } from 'Client/ui/Svg/elements';
import { ExtraLogo } from './ExtraLogo';
import { ProposalCardStyle } from '../Styled';
import {
  PushProposalButtonStyle,
  PushProposalNextButtonStyle,
} from '../Styled/Buttons';
import { ContentWrapperStyle, InnerContentStyle } from '../Styled/Content';
import { AltMainTitleStyle } from '../Styled/Titles';
import { CardDescription } from '../../Description';
import { CardHeader } from '../../Header';

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
      <CardDescription
        cardOffset={cardOffset}
        index={index}
        cardsCount={cardsCount}
      />
      <ContentWrapperStyle as="dd">
        <CardHeader
          index={index}
          cardsCount={cardsCount}
          cardOffset={cardOffset}
          goToPreviousCard={goToPreviousCard}
        />
        <ContentWrapperStyle>
          <InnerContentStyle>
            <header>
              <ExtraLogo extraLogo={configuration.extraLogo} />
              <AltMainTitleStyle>
                {i18n.t('push_proposal_card.title')}
              </AltMainTitleStyle>
            </header>
            <MiddleColumnToRowStyle>
              <PushProposalButtonStyle
                type="submit"
                onClick={focusProposalField}
              >
                <IconWrapperStyle aria-hidden>
                  <SvgPencil />
                </IconWrapperStyle>
                {i18n.t('common.propose')}
              </PushProposalButtonStyle>
              <PushProposalNextButtonStyle onClick={skipProposalPushCard}>
                <IconWrapperStyle aria-hidden>
                  <SvgStepForward />
                </IconWrapperStyle>
                {i18n.t('push_proposal_card.next-cta')}
              </PushProposalNextButtonStyle>
            </MiddleColumnToRowStyle>
          </InnerContentStyle>
        </ContentWrapperStyle>
      </ContentWrapperStyle>
    </ProposalCardStyle>
  );
};
