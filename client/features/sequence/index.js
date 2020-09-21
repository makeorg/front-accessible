/* eslint-disable react-hooks/exhaustive-deps */
// @flow
import React, { useEffect, useState } from 'react';
import {
  buildCards,
  findIndexOfFirstUnvotedCard,
} from 'Shared/helpers/sequence';
import { type StateRoot } from 'Shared/store/types';
import { type SequenceCardType } from 'Shared/types/card';
import { type QuestionType } from 'Shared/types/question';
import { searchFirstUnvotedProposal } from 'Shared/helpers/proposal';
import { useSelector, useDispatch } from 'react-redux';
import { selectAuthentication } from 'Shared/store/selectors/user.selector';
import {
  resetSequenceIndex,
  setSequenceIndex,
  loadSequenceCards,
} from 'Shared/store/actions/sequence';
import { SequenceService } from 'Shared/services/Sequence';
import { useLocation } from 'react-router-dom';
import { ProposalSubmit } from 'Client/features/proposal/Submit';
import { CARD_TYPE_EXTRASLIDE_PUSH_PROPOSAL } from 'Shared/constants/card';

import { Spinner } from 'Client/ui/Elements/Loading/Spinner';
import { getConsultationLink } from 'Shared/helpers/url';
import { i18n } from 'Shared/i18n';
import { SequenceCard } from './Cards';
import {
  SequenceContainerStyle,
  ConsultationPageLinkStyle,
  SequenceContentStyle,
  SequenceTitleStyle,
} from './style';
import { SequenceProgress } from './Progress';

export type Props = {
  /** Object with Dynamic properties used to configure the Sequence (questionId, country, ...) */
  question: QuestionType,
};

/**
 * Renders Sequence component with Intro / Push Proposal / Sign Up & Proposal Cards
 */
export const Sequence = ({ question }: Props) => {
  const dispatch = useDispatch();
  const { firstProposal, votedProposalIds, currentIndex, cards } = useSelector(
    (state: StateRoot) => ({
      ...state.sequence,
      currentIndex: state.sequence.currentIndex || 0,
    })
  );
  const { hasProposed } = useSelector(state => state.proposal);
  const { isLoggedIn } = useSelector(state => selectAuthentication(state));
  const [sequenceProposals, setSequenceProposals] = useState([]);
  const [currentCard, setCurrentCard] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const { search } = useLocation();
  const disableIntroCard =
    new URLSearchParams(search.toLowerCase()).get('introcard') === 'false';
  const isPushProposal = useSelector(
    (state: StateRoot) =>
      !!(
        state.sequence.cards &&
        state.sequence.cards.length &&
        state.sequence.cards[state.sequence.currentIndex].type ===
          CARD_TYPE_EXTRASLIDE_PUSH_PROPOSAL
      )
  );

  useEffect(() => {
    const votedProposalIdsOfQuestion = votedProposalIds[question.slug] || [];
    SequenceService.startSequence(question.questionId, [
      firstProposal,
      ...votedProposalIdsOfQuestion,
    ]).then(proposals => {
      setSequenceProposals(proposals || []);
      dispatch(resetSequenceIndex());
      setLoading(false);
    });
  }, [question, firstProposal, isLoggedIn, hasProposed]);

  useEffect(() => {
    if (!cards.length) {
      return;
    }
    setCurrentCard(cards[currentIndex]);
  }, [cards, currentIndex]);

  useEffect(() => {
    if (!sequenceProposals || !sequenceProposals.length) {
      return;
    }
    const buildedCards: SequenceCardType[] = buildCards(
      sequenceProposals,
      question.sequenceConfig,
      isLoggedIn,
      hasProposed,
      question.canPropose,
      disableIntroCard
    );

    dispatch(loadSequenceCards(buildedCards));
  }, [firstProposal, hasProposed, sequenceProposals]);

  useEffect(() => {
    const indexOfFirstUnvotedCard: number = findIndexOfFirstUnvotedCard(
      searchFirstUnvotedProposal(sequenceProposals),
      cards,
      currentIndex
    );
    dispatch(setSequenceIndex(indexOfFirstUnvotedCard));
  }, [cards]);

  if (!currentCard || isLoading) {
    return (
      <SequenceContainerStyle>
        <Spinner />
      </SequenceContainerStyle>
    );
  }

  return (
    <SequenceContainerStyle>
      <SequenceContentStyle>
        <SequenceTitleStyle>{question.question}</SequenceTitleStyle>
        <SequenceCard card={currentCard} />
        <SequenceProgress />
      </SequenceContentStyle>
      <ConsultationPageLinkStyle
        className={isPushProposal && 'static'}
        to={getConsultationLink(
          question.country,
          question.language,
          question.slug
        )}
      >
        {i18n.t('sequence.more')}
      </ConsultationPageLinkStyle>
      {!isPushProposal && <ProposalSubmit />}
    </SequenceContainerStyle>
  );
};
