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
};

export const Card = ({ card }: CardProps) => {
  switch (card.type) {
    case CARD_TYPE_PROPOSAL:
      return <ProposalCard proposalCard={card} />;
    case CARD_TYPE_EXTRASLIDE_INTRO:
      return (
        <DeprecatedIntroCard configuration={card.configuration} isCardVisible />
      );
    case CARD_TYPE_EXTRASLIDE_PUSH_SIGNUP:
      return (
        <DeprecatedSignUpCard
          configuration={card.configuration}
          isCardVisible
        />
      );
    case CARD_TYPE_EXTRASLIDE_PUSH_PROPOSAL:
      return (
        <DeprecatedPushProposalCard
          configuration={card.configuration}
          isCardVisible
        />
      );
    case CARD_TYPE_EXTRASLIDE_FINAL_CARD:
      return (
        <DeprecatedFinalCard configuration={card.configuration} isCardVisible />
      );
    default:
      return null;
  }
};

type Props = {
  /** Attribute of the card */
  card: SequenceCardType,
};

export const SequenceCard = ({ card }: Props) => {
  const cards = useSelector((state: StateRoot) => state.sequence.cards);
  const isIntroCard = card.type === CARD_TYPE_EXTRASLIDE_INTRO;
  const activeGaugeIndex = card.index + 1;
  const maxGaugeIndex = cards.length;
  const topComponentContext: TopComponentContextValueType = TopComponentContextValue.getSequenceProposal();

  return (
    <>
      <ScreenReaderItemStyle
        as="h2"
        id={`card-${activeGaugeIndex}-title`}
        data-cy-card-title-number={card.index}
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
          as={isIntroCard && SequenceProposalCardCenteredStyle}
          id={`card-${card.index}`}
          data-cy-card-type={card.type}
          data-cy-card-number={card.index}
        >
          <Card card={card} />
        </SequenceProposalCardStyle>
      </TopComponentContext.Provider>
    </>
  );
};
