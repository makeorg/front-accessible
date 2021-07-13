/* eslint-disable react-hooks/exhaustive-deps */
// @flow
import { useEffect, useState } from 'react';
import { buildCards } from 'Shared/helpers/sequence';
import { type StateRoot } from 'Shared/store/types';
import { type SequenceCardType } from 'Shared/types/card';
import { type QuestionType } from 'Shared/types/question';
import { type ProposalType } from 'Shared/types/proposal';
import { useSelector, useDispatch } from 'react-redux';
import { selectAuthentication } from 'Shared/store/selectors/user.selector';
import { scrollToTop } from 'Shared/helpers/styled';
import {
  setSequenceIndex,
  loadSequenceCards,
  resetSequenceVotedProposals,
} from 'Shared/store/actions/sequence';
import { Cookies } from 'react-cookie';
import { DEMOGRAPHICS_COOKIE } from 'Shared/constants/cookies';
import { useSequenceTracking } from './useSequenceTracking';
import { useSequenceVoteOnlyNotification } from './useSequenceVoteOnlyNotification';
import { useSequenceExtraDataAutoSubmit } from './useSequenceExtraDataAutoSubmit';
import { useSequenceQueryParams } from './useSequenceQueryParams';

/**
 * Renders Sequence component with Intro / Push Proposal / Sign Up & Proposal Cards
 */
export const useSequence = (
  question: QuestionType,
  isStandardSequence: boolean,
  country,
  executeStartSequence: (questionId, votedIds) => ProposalType[]
) => {
  // Dispatch
  const dispatch = useDispatch();

  // StateRoot
  const { hasProposed } = useSelector((state: StateRoot) => state.proposal);
  const { isLoggedIn } = useSelector((state: StateRoot) =>
    selectAuthentication(state)
  );
  const { votedProposalIds, currentIndex } = useSelector((state: StateRoot) => {
    const { currentIndex: sCurrentIndex, votedProposalIds: sVotedProposalIds } =
      state.sequence;

    return {
      currentIndex: sCurrentIndex || 0,
      votedProposalIds: sVotedProposalIds,
    };
  });
  const votedProposalIdsOfQuestion = votedProposalIds[question?.slug] || [];

  // State
  const [currentCard, setCurrentCard] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [cards, setCards] = useState([]);
  const [sequenceProposals, setSequenceProposals] = useState([]);

  // Sequence hooks
  useSequenceTracking();
  useSequenceVoteOnlyNotification(question);
  const { firstProposalParam, introCardParam, pushProposalParam } =
    useSequenceQueryParams();
  useSequenceExtraDataAutoSubmit(question.slug, cards, currentIndex);

  // Other
  const isFR = country === 'FR';

  const cookies = new Cookies();
  const demographicsCookie = cookies.get(DEMOGRAPHICS_COOKIE);
  const withDemographicsCard = isFR && !demographicsCookie;

  // scroll to top
  useEffect(() => {
    scrollToTop();
    dispatch(setSequenceIndex(0));
  }, []);

  // load sequence data
  useEffect(async () => {
    const votedIds = firstProposalParam
      ? [firstProposalParam, ...votedProposalIdsOfQuestion]
      : votedProposalIdsOfQuestion;

    if (question) {
      const proposals = await executeStartSequence(
        question.questionId,
        votedIds
      );
      if (proposals.length === 0) {
        setLoading(false);
      }
      if (proposals) {
        setSequenceProposals(proposals);
      }
    }
  }, [question, firstProposalParam, isLoggedIn, hasProposed]);

  // build cards
  useEffect(() => {
    if (!question || !sequenceProposals.length) {
      return;
    }

    const buildedCards: SequenceCardType[] = buildCards(
      sequenceProposals,
      question.sequenceConfig,
      hasProposed,
      question.canPropose,
      isStandardSequence,
      introCardParam,
      pushProposalParam,
      withDemographicsCard
    );
    setCards(buildedCards);
    dispatch(loadSequenceCards(buildedCards));
  }, [hasProposed, sequenceProposals]);

  // set current card
  useEffect(() => {
    if (!cards.length) {
      return;
    }
    setCurrentCard(cards[currentIndex]);
    setLoading(false);
  }, [cards, currentIndex]);

  // reset voted proposals when unmount
  useEffect(
    () => () => {
      if (question) {
        dispatch(resetSequenceVotedProposals(question.slug));
      }
    },
    []
  );

  return {
    isLoading,
    currentCard,
    isEmptySequence: sequenceProposals.length === 0,
  };
};
