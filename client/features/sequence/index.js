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
  unloadSequenceProposals,
  resetSequenceIndex,
  setSequenceIndex,
  loadSequenceCards,
} from 'Shared/store/actions/sequence';
import { SequenceService } from 'Shared/services/Sequence';
import { useLocation } from 'react-router-dom';
import { SequenceCard } from './Cards';
import {
  SequencePlaceholderCardStyle,
  SequencePlaceholderWrapperStyle,
  SequencePlaceholderTitleSTyle,
  SequencePlaceholderSeparatorStyle,
  SequencePlaceholderDescriptionStyle,
  SequencePlaceholderButtonStyle,
  SequenceStyle,
  SequenceWrapperStyle,
} from './style';

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
  const { search } = useLocation();
  const disableIntroCard =
    new URLSearchParams(search.toLowerCase()).get('introcard') === 'false';

  useEffect(() => {
    const votedProposalIdsOfQuestion = votedProposalIds[question.slug] || [];
    SequenceService.startSequence(question.questionId, [
      firstProposal,
      ...votedProposalIdsOfQuestion,
    ]).then(proposals => {
      setSequenceProposals(proposals || []);
      dispatch(resetSequenceIndex());
    });

    return () => {
      dispatch(unloadSequenceProposals());
      dispatch(resetSequenceIndex());
    };
  }, [question, firstProposal]);

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
  }, [firstProposal, isLoggedIn, hasProposed, sequenceProposals]);

  useEffect(() => {
    const indexOfFirstUnvotedCard: number = findIndexOfFirstUnvotedCard(
      searchFirstUnvotedProposal(sequenceProposals),
      cards,
      currentIndex
    );
    dispatch(setSequenceIndex(indexOfFirstUnvotedCard));
  }, [cards]);

  if (!currentCard) {
    return (
      <SequenceStyle>
        <SequenceWrapperStyle id="sequence" data-cy-container="sequence">
          <SequencePlaceholderCardStyle as="div" scaling="1" zindex="1">
            <SequencePlaceholderWrapperStyle>
              <SequencePlaceholderTitleSTyle />
              <SequencePlaceholderSeparatorStyle />
              <SequencePlaceholderDescriptionStyle />
              <SequencePlaceholderDescriptionStyle />
              <SequencePlaceholderButtonStyle />
            </SequencePlaceholderWrapperStyle>
          </SequencePlaceholderCardStyle>
        </SequenceWrapperStyle>
      </SequenceStyle>
    );
  }

  return (
    <SequenceStyle>
      <SequenceWrapperStyle id="sequence" data-cy-container="sequence">
        <SequenceCard card={currentCard} />
      </SequenceWrapperStyle>
    </SequenceStyle>
  );
};
