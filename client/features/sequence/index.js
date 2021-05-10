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
import { scrollToTop } from 'Shared/helpers/styled';
import {
  resetSequenceIndex,
  setSequenceIndex,
  loadSequenceCards,
  resetSequenceVotedProposals,
} from 'Shared/store/actions/sequence';
import { trackClickOperationPage } from 'Shared/services/Tracking';
import { SequenceService } from 'Shared/services/Sequence';
import { useLocation } from 'react-router-dom';
import { ProposalSubmit } from 'Client/features/proposal/Submit';
import {
  CARD_TYPE_EXTRASLIDE_PUSH_PROPOSAL,
  CARD_TYPE_NO_PROPOSAL_CARD,
} from 'Shared/constants/card';
import { getParticipateLink } from 'Shared/helpers/url';
import { i18n } from 'Shared/i18n';
import { SequenceCard } from './Cards';
import {
  SequenceContainerStyle,
  ConsultationPageLinkStyle,
  SequenceContentStyle,
} from './style';
import { SequenceProgress } from './Progress';
import { SequencePlaceholder } from './Placeholder';
import { SequenceTitle } from './Title';

export type Props = {
  /** Object with Dynamic properties used to configure the Sequence (questionId, country, ...) */
  question: QuestionType,
  /** optional zone parameter for popular and controversy sequences */
  zone?: string,
  /** optional keyword parameter for thematic sequences */
  keyword?: string,
};

/**
 * Renders Sequence component with Intro / Push Proposal / Sign Up & Proposal Cards
 */
export const Sequence = ({ question, zone, keyword }: Props) => {
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
  const [sequenceProposals, setSequenceProposals] = useState([]);
  const [currentCard, setCurrentCard] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [keywordLabel, setKeywordLabel] = useState('');
  const [withProposalButton, setWithProposalButton] = useState(
    question && question.canPropose
  );
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const firstProposal = params.get('firstProposal');
  const introCardParam = params.get('introCard')?.toLowerCase() !== 'false';
  const pushProposalParam =
    params.get('pushProposal')?.toLowerCase() !== 'false';
  const isPushProposal = useSelector(
    (state: StateRoot) =>
      !!(
        state.sequence.cards &&
        state.sequence.cards[state.sequence.currentIndex]?.type ===
          CARD_TYPE_EXTRASLIDE_PUSH_PROPOSAL
      )
  );

  const startSequenceFromZone = async (votedIds: string[]) => {
    const response = await SequenceService.startSequenceByZone(
      question.questionId,
      votedIds,
      zone
    );

    if (!response) {
      return null;
    }

    return setSequenceProposals(response.proposals);
  };

  const startSequenceFromKeyword = async (votedIds: string[]) => {
    const response = await SequenceService.startSequenceByKeyword(
      question.questionId,
      votedIds,
      keyword
    );

    if (!response) {
      return null;
    }

    setSequenceProposals(response.proposals);
    return setKeywordLabel(response.label);
  };

  useEffect(async () => {
    const votedProposalIdsOfQuestion = votedProposalIds[question.slug] || [];
    const votedIds = firstProposal
      ? [firstProposal, ...votedProposalIdsOfQuestion]
      : votedProposalIdsOfQuestion;

    if (zone) {
      await startSequenceFromZone(votedIds);
    }

    if (keyword) {
      await startSequenceFromKeyword(votedIds);
    }

    dispatch(resetSequenceIndex());
    return setLoading(false);
  }, [question, firstProposal, isLoggedIn, hasProposed]);

  useEffect(
    () => () => {
      dispatch(resetSequenceVotedProposals(question.slug));
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
    if (!sequenceProposals || !sequenceProposals.length) {
      return;
    }
    const buildedCards: SequenceCardType[] = buildCards(
      sequenceProposals,
      question.sequenceConfig,
      hasProposed,
      question.canPropose,
      zone,
      keyword,
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

  if (isLoading) {
    return <SequencePlaceholder />;
  }

  const displayNoProposalCard = { type: CARD_TYPE_NO_PROPOSAL_CARD };
  const isSequenceEmpty = sequenceProposals.length === 0;

  return (
    <SequenceContainerStyle data-cy-container="sequence">
      <SequenceContentStyle>
        <SequenceTitle question={question} zone={zone} keyword={keywordLabel} />
        <SequenceCard
          card={isSequenceEmpty ? displayNoProposalCard : currentCard}
          question={question}
          zone={zone}
          keyword={keyword}
        />
        {!isSequenceEmpty && <SequenceProgress />}
      </SequenceContentStyle>
      <ConsultationPageLinkStyle
        className={!withProposalButton && 'static'}
        to={getParticipateLink(country, question.slug)}
        onClick={() => trackClickOperationPage()}
      >
        {i18n.t('sequence.more')}
      </ConsultationPageLinkStyle>
      {withProposalButton && <ProposalSubmit />}
    </SequenceContainerStyle>
  );
};
