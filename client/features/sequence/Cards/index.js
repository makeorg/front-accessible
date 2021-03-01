// @flow
import React, { useEffect } from 'react';
import { type SequenceCardType } from 'Shared/types/card';
import {
  CARD_TYPE_EXTRASLIDE_INTRO,
  CARD_TYPE_PROPOSAL,
  CARD_TYPE_EXTRASLIDE_PUSH_PROPOSAL,
  CARD_TYPE_EXTRASLIDE_FINAL_CARD,
  CARD_TYPE_EXTRASLIDE_SPECIAL_FINAL_CARD,
  CARD_TYPE_NO_PROPOSAL_CARD,
} from 'Shared/constants/card';
import { trackDisplayNoProposalSequence } from 'Shared/services/Tracking';

import {
  TopComponentContext,
  type TopComponentContextValueType,
  TopComponentContextValue,
} from 'Client/context/TopComponentContext';
import { SequenceCardStyle } from './style';
import { IntroCard } from './Intro';
import { PushProposalCard } from './PushProposal';
import { FinalCard } from './Final';
import { SpecialFinalCard } from './SpecialFinal';
import { ProposalCard } from './Proposal';
import { NoProposal } from './NoProposal';

type CardProps = {
  /** Attribute of the card */
  card: any,
  /** Object with Dynamic properties used to configure the Sequence (questionId, country, ...) */
  question: QuestionType,
  /** optional zone parameter for popular and controversy sequences */
  zone?: string,
  /** optional keyword parameter for thematic sequences */
  keyword?: string,
};

export const Card = ({ card, question, zone, keyword }: CardProps) => {
  switch (card.type) {
    case CARD_TYPE_PROPOSAL:
      return <ProposalCard proposalCard={card} />;
    case CARD_TYPE_EXTRASLIDE_INTRO:
      return <IntroCard configuration={card.configuration} />;
    case CARD_TYPE_EXTRASLIDE_PUSH_PROPOSAL:
      return <PushProposalCard configuration={card.configuration} />;
    case CARD_TYPE_EXTRASLIDE_FINAL_CARD:
      return <FinalCard configuration={card.configuration} />;
    case CARD_TYPE_EXTRASLIDE_SPECIAL_FINAL_CARD:
      return <SpecialFinalCard />;
    case CARD_TYPE_NO_PROPOSAL_CARD:
      return <NoProposal question={question} zone={zone} keyword={keyword} />;
    default:
      return null;
  }
};

type Props = {
  /** Attribute of the card */
  card: SequenceCardType,
  /** Object with Dynamic properties used to configure the Sequence (questionId, country, ...) */
  question: QuestionType,
  /** optional zone parameter for popular and controversy sequences */
  zone?: string,
  /** optional keyword parameter for thematic sequences */
  keyword?: string,
};

export const SequenceCard = ({ card, question, zone, keyword }: Props) => {
  const isProposalCard = card.type === CARD_TYPE_PROPOSAL;
  const isNoProposalCard = card.type === CARD_TYPE_NO_PROPOSAL_CARD;
  const topComponentContext: TopComponentContextValueType = TopComponentContextValue.getSequenceProposal();

  useEffect(() => {
    if (isNoProposalCard) {
      trackDisplayNoProposalSequence();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <TopComponentContext.Provider value={topComponentContext}>
        <SequenceCardStyle
          className={!isProposalCard && 'center'}
          id={`card-${card.index}`}
          data-cy-card-type={card.type}
          data-cy-card-number={!isNoProposalCard && card.index + 1}
          aria-live="polite"
          isNoProposalCard={isNoProposalCard}
        >
          <Card card={card} question={question} zone={zone} keyword={keyword} />
        </SequenceCardStyle>
      </TopComponentContext.Provider>
    </>
  );
};
