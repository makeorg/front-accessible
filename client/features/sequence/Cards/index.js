// @flow
import React from 'react';
import { type SequenceCardType } from 'Shared/types/card';
import { type StateRoot } from 'Shared/store/types';
import {
  CARD_TYPE_EXTRASLIDE_INTRO,
  CARD_TYPE_PROPOSAL,
  CARD_TYPE_EXTRASLIDE_PUSH_SIGNUP,
  CARD_TYPE_EXTRASLIDE_PUSH_PROPOSAL,
  CARD_TYPE_EXTRASLIDE_FINAL_CARD,
} from 'Shared/constants/card';
import { getPosition, getScale, getZIndex } from 'Shared/helpers/sequence';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { i18n } from 'Shared/i18n';
import { useSelector } from 'react-redux';
import {
  TopComponentContext,
  type TopComponentContextValueType,
  TopComponentContextValue,
} from 'Client/context/TopComponentContext';
import {
  SequenceProposalCardStyle,
  SequenceProposalCardCenteredStyle,
} from '../style';
import { DeprecatedIntroCard } from '../Deprecated/Cards/Intro';
import { DeprecatedPushProposalCard } from '../Deprecated/Cards/PushProposal';
import { DeprecatedFinalCard } from '../Deprecated/Cards/Final';
import { DeprecatedSignUpCard } from '../Deprecated/Cards/SignUp';
import { ProposalCard } from './Proposal';

type CardProps = {
  /** Attribute of the card */
  card: any,
  /** Index of the card */
  index: number,
  /** Is Card is shown to the user */
  isCardVisible: boolean,
  /** cards count */
  cardsCount: number,
};

export const CardType = ({
  card,
  index,
  isCardVisible,
  cardsCount,
}: CardProps) => {
  switch (card.type) {
    case CARD_TYPE_PROPOSAL:
      return (
        <ProposalCard
          proposal={card.configuration}
          index={index}
          cardsCount={cardsCount}
        />
      );
    case CARD_TYPE_EXTRASLIDE_INTRO:
      return (
        <DeprecatedIntroCard
          configuration={card.configuration}
          isCardVisible={isCardVisible}
        />
      );
    case CARD_TYPE_EXTRASLIDE_PUSH_SIGNUP:
      return (
        <DeprecatedSignUpCard
          configuration={card.configuration}
          isCardVisible={isCardVisible}
        />
      );
    case CARD_TYPE_EXTRASLIDE_PUSH_PROPOSAL:
      return (
        <DeprecatedPushProposalCard
          configuration={card.configuration}
          isCardVisible={isCardVisible}
        />
      );
    case CARD_TYPE_EXTRASLIDE_FINAL_CARD:
      return (
        <DeprecatedFinalCard
          configuration={card.configuration}
          isCardVisible={isCardVisible}
        />
      );
    default:
      return null;
  }
};

type Props = {
  /** Attribute of the card */
  card: SequenceCardType,
  /** Index of the card */
  index: number,
  /** Total of cards */
  cardsCount: number,
};

export const SequenceCards = ({ card, index, cardsCount }: Props) => {
  const currentIndex = useSelector(
    (state: StateRoot) => state.sequence.currentIndex
  );
  const isIntroCard = card.type === CARD_TYPE_EXTRASLIDE_INTRO;
  const position = getPosition(index, currentIndex);
  const scale = getScale(index, currentIndex);
  const zindex = getZIndex(index, currentIndex);
  const isCardCollapsed = index < currentIndex;
  const isCardVisible = index === currentIndex;
  const activeGaugeIndex = index + card.offset;
  const maxGaugeIndex = cardsCount + card.offset;
  const topComponentContext: TopComponentContextValueType = TopComponentContextValue.getSequenceProposal();
  return (
    <>
      <ScreenReaderItemStyle
        as="dt"
        aria-hidden={!isCardVisible}
        id={`card-${activeGaugeIndex}-title`}
        data-cy-card-title-number={index + card.offset}
      >
        {isIntroCard
          ? i18n.t('intro_card.purpose')
          : i18n.t('proposal_card.number', {
              current: activeGaugeIndex,
              total: maxGaugeIndex,
            })}
      </ScreenReaderItemStyle>
      <TopComponentContext.Provider value={topComponentContext}>
        <SequenceProposalCardStyle
          position={position}
          scaling={scale}
          zindex={zindex}
          isCardCollapsed={isCardCollapsed}
          isCardVisible={isCardVisible}
          aria-hidden={!isCardVisible}
          as={isIntroCard && SequenceProposalCardCenteredStyle}
          id={`card-${index + card.offset}`}
          data-cy-card-type={card.type}
          data-cy-card-number={index}
        >
          <CardType
            card={card}
            index={index}
            isCardVisible={isCardVisible}
            cardsCount={cardsCount}
          />
        </SequenceProposalCardStyle>
      </TopComponentContext.Provider>
    </>
  );
};
