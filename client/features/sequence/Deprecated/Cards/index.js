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
import { trackClickPreviousCard } from 'Shared/services/Tracking';
import { i18n } from 'Shared/i18n';
import { ProgressCircleComponent } from 'Client/ui/ProgressCircle';
import { useSelector, useDispatch } from 'react-redux';
import { decrementSequenceIndex } from 'Shared/store/actions/sequence';
import {
  TopComponentContext,
  type TopComponentContextValueType,
  TopComponentContextValue,
} from 'Client/context/TopComponentContext';
import {
  SequenceProposalCardStyle,
  SequenceProposalCardCenteredStyle,
  CardHeaderStyle,
  CardHeaderFlexEndStyle,
  CardHeaderSpaceBetweenStyle,
  CardHeaderPreviousButtonStyle,
  CardHeaderPreviousIconStyle,
} from '../style';
import { DeprecatedIntroCard } from './Intro';
import { DeprecatedProposalCard } from './Proposal';
import { DeprecatedSignUpCard } from './SignUp';
import { DeprecatedPushProposalCard } from './PushProposal';
import { DeprecatedFinalCard } from './Final';

type CardProps = {
  /** Attribute of the card */
  card: any,
  /** Index of the card */
  index: number,
  /** Is Card is shown to the user */
  isCardVisible: boolean,
};

export const DeprecatedCardType = ({
  card,
  index,
  isCardVisible,
}: CardProps) => {
  switch (card.type) {
    case CARD_TYPE_PROPOSAL:
      return (
        <DeprecatedProposalCard
          configuration={card.configuration}
          index={index}
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

export const DeprecatedSequenceCards = ({ card, index, cardsCount }: Props) => {
  const dispatch = useDispatch();
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
  const firstCard = index === 0;
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
          {!isIntroCard && (
            <CardHeaderStyle
              as={
                firstCard ? CardHeaderFlexEndStyle : CardHeaderSpaceBetweenStyle
              }
            >
              {!firstCard && (
                <CardHeaderPreviousButtonStyle
                  onClick={() => {
                    dispatch(decrementSequenceIndex());
                    trackClickPreviousCard();
                  }}
                  data-cy-button="previous-card"
                >
                  <CardHeaderPreviousIconStyle aria-hidden />
                  {i18n.t('proposal_card.previous')}
                </CardHeaderPreviousButtonStyle>
              )}
              <ProgressCircleComponent
                cardOffset={card.offset}
                index={index}
                cardsCount={cardsCount}
              />
            </CardHeaderStyle>
          )}
          <DeprecatedCardType
            card={card}
            index={index}
            isCardVisible={isCardVisible}
          />
        </SequenceProposalCardStyle>
      </TopComponentContext.Provider>
    </>
  );
};
