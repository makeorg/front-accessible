/* eslint-disable react-hooks/exhaustive-deps */
// @flow
import { useEffect, useState } from 'react';
import {
  buildCards,
  findIndexOfFirstUnvotedCard,
} from 'Shared/helpers/sequence';
import { type StateRoot } from 'Shared/store/types';
import { type SequenceCardType } from 'Shared/types/card';
import { type QuestionType } from 'Shared/types/question';
import { type ProposalType } from 'Shared/types/proposal';
import { searchFirstUnvotedProposal } from 'Shared/helpers/proposal';
import { useSelector, useDispatch } from 'react-redux';
import { selectAuthentication } from 'Shared/store/selectors/user.selector';
import { scrollToTop } from 'Shared/helpers/styled';
import {
  resetSequenceIndex,
  setSequenceIndex,
  loadSequenceCards,
  resetSequenceVotedProposals,
} from 'Shared/store/actions/sequence';
import { useLocation } from 'react-router-dom';
import { CARD_TYPE_EXTRASLIDE_PUSH_PROPOSAL } from 'Shared/constants/card';
import { trackDisplaySequence } from 'Shared/services/Tracking';
import { displayNotificationBanner } from 'Shared/store/actions/notifications';
import {
  NOTIFICATION_LEVEL_INFORMATION,
  VOTE_ONLY_MESSAGE,
} from 'Shared/constants/notifications';

/**
 * Renders Sequence component with Intro / Push Proposal / Sign Up & Proposal Cards
 */
export const useSequence = (
  question: QuestionType,
  isStandardSequence: boolean,
  sequenceProposals: ProposalType[],
  executeStartSequence: (questionId, votedIds) => {}
) => {
  const dispatch = useDispatch();
  const { country } = useSelector((state: StateRoot) => state.appConfig);
  const { votedProposalIds, currentIndex, cards } = useSelector(
    (state: StateRoot) => ({
      ...state.sequence,
      currentIndex: state.sequence.currentIndex || 0,
    })
  );
  const { hasProposed } = useSelector((state: StateRoot) => state.proposal);
  const { isLoggedIn } = useSelector((state: StateRoot) =>
    selectAuthentication(state)
  );
  const [currentCard, setCurrentCard] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [withProposalButton, setWithProposalButton] = useState(
    question && question.canPropose
  );
  const { search } = useLocation();
  const isPushProposal = useSelector(
    (state: StateRoot) =>
      !!(
        state.sequence.cards &&
        state.sequence.cards[state.sequence.currentIndex]?.type ===
          CARD_TYPE_EXTRASLIDE_PUSH_PROPOSAL
      )
  );

  const votedProposalIdsOfQuestion = votedProposalIds[question?.slug] || [];
  const params = new URLSearchParams(search);
  const firstProposal = params.get('firstProposal');
  const introCardParam = params.get('introCard')?.toLowerCase() !== 'false';
  const pushProposalParam =
    params.get('pushProposal')?.toLowerCase() !== 'false';

  const startSequence = async (votedIds: string[]) => {
    if (question) {
      await executeStartSequence(question.questionId, votedIds);
    }
  };

  useEffect(() => {
    trackDisplaySequence();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (question && !question.canPropose) {
      dispatch(
        displayNotificationBanner(
          VOTE_ONLY_MESSAGE,
          NOTIFICATION_LEVEL_INFORMATION,
          { questionId: question.questionId },
          true
        )
      );
    }
  }, [question, dispatch]);

  useEffect(async () => {
    const votedIds = firstProposal
      ? [firstProposal, ...votedProposalIdsOfQuestion]
      : votedProposalIdsOfQuestion;

    await startSequence(votedIds);

    dispatch(resetSequenceIndex());

    setLoading(false);
  }, [question, firstProposal, isLoggedIn, hasProposed]);

  useEffect(
    () => () => {
      if (question) {
        dispatch(resetSequenceVotedProposals(question.slug));
      }
    },
    []
  );

  useEffect(() => {
    if (!cards.length) {
      return;
    }
    setCurrentCard(cards[currentIndex]);
    setWithProposalButton(question && question.canPropose);
    if (isPushProposal) {
      setWithProposalButton(false);
    }
  }, [cards, currentIndex]);

  useEffect(() => {
    if (!question || !sequenceProposals || !sequenceProposals.length) {
      return;
    }

    const buildedCards: SequenceCardType[] = buildCards(
      sequenceProposals,
      question.sequenceConfig,
      hasProposed,
      question.canPropose,
      isStandardSequence,
      introCardParam,
      pushProposalParam
    );

    dispatch(loadSequenceCards(buildedCards));
  }, [hasProposed, sequenceProposals]);

  useEffect(() => {
    const indexOfFirstUnvotedCard: number = findIndexOfFirstUnvotedCard(
      searchFirstUnvotedProposal(sequenceProposals),
      cards,
      currentIndex
    );
    dispatch(setSequenceIndex(indexOfFirstUnvotedCard));
  }, [cards]);

  useEffect(() => {
    scrollToTop();
  }, []);

  return {
    withProposalButton,
    country,
    isLoading,
    currentCard,
  };
};
