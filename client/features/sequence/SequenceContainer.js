// @flow
import React, { useState, useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { selectAuthentification } from 'Shared/store/selectors/user.selector';
import * as ProposalHelper from 'Shared/helpers/proposal';
import * as SequenceHelper from 'Shared/helpers/sequence';
import { trackClickStartSequence } from 'Shared/services/Tracking';
import { type TypeSequenceCard } from 'Shared/types/card';
import { type StateRoot } from 'Shared/store/types';
import { type Proposal as TypeProposal } from 'Shared/types/proposal';
import { type Question as TypeQuestion } from 'Shared/types/question';
import { useCustomDataSelector } from 'Client/hooks/useCustomDataSelector';
import { DEPARTMENT_STORAGE_KEY } from 'Shared/constants/ids';
import { getBretagneQuestionSlug } from 'Client/custom/cdc/helpers';
import {
  unloadSequenceProposals,
  fetchSequenceProposals,
} from 'Shared/store/actions/sequence';
import { SequenceComponent } from './SequenceComponent';
import { SequencePlaceholderComponent } from './SequencePlaceholder';

type Props = {
  /** Object with Dynamic properties used to configure the Sequence (questionId, country, ...) */
  question: TypeQuestion,
  /** Offset of cards without pagination (introCard) */
  cardOffset: number,
  /** Id of the first proposal to display */
  firstProposal: string,
  /** Object with the voted proposals' ids by question slug */
  votedProposalIds: { [string]: string[] },
  /** Boolean toggled when User is Logged in */
  isLoggedIn: boolean,
  /** Boolean toggled when Sequence is collapsed / expanded */
  isClosed: boolean,
  /** Boolean toggled when User has submitted a proposal */
  hasProposed: boolean,
  /** Method called when "Return to proposal" button is clicked */
  handleOpenSequence: () => void,
};

const SequenceHandler = ({
  question,
  cardOffset,
  firstProposal,
  votedProposalIds,
  isLoggedIn,
  isClosed,
  hasProposed,
  handleOpenSequence,
}: Props) => {
  const dispatch = useDispatch();
  const [isSequenceLoaded, setIsSequenceLoaded] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [proposals, setProposals] = useState([]);
  const [cards, setCards] = useState([]);
  const [cardsCount, setCardsCount] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  /** @toDo: remove or refactor after the end of bretagne consultation */
  const department = useCustomDataSelector(DEPARTMENT_STORAGE_KEY);
  const sequenceProposals = useSelector(
    (state: StateRoot) => state.sequence && state.sequence.proposals
  );

  const handleStartSequence = () => {
    setCurrentIndex(currentIndex + 1);

    setHasStarted(true);
    trackClickStartSequence();
  };

  const incrementCurrentIndex = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const decrementCurrentIndex = () => {
    setCurrentIndex(currentIndex - 1);
  };

  useEffect(() => {
    if (question) {
      const setCardsFromProposals = async () => {
        const proposalIds = votedProposalIds[question.slug] || [];

        if (sequenceProposals && sequenceProposals.length) {
          setProposals(sequenceProposals);
          const buildedCards: TypeSequenceCard[] = SequenceHelper.buildCards(
            sequenceProposals,
            question.sequenceConfig,
            isLoggedIn,
            hasProposed,
            question.canPropose
          );

          const firstUnvotedProposal:
            | typeof undefined
            | TypeProposal = ProposalHelper.searchFirstUnvotedProposal(
            proposals
          );

          const indexOfFirstUnvotedCard: number = SequenceHelper.findIndexOfFirstUnvotedCard(
            firstUnvotedProposal,
            buildedCards
          );
          setCards(buildedCards);
          setCardsCount(buildedCards.length - 1);

          if (proposalIds.length !== 0) {
            const cardCurrentIndex: number =
              indexOfFirstUnvotedCard === 0 && hasStarted
                ? 1
                : indexOfFirstUnvotedCard;

            setCurrentIndex(cardCurrentIndex);
          }

          if (sequenceProposals.length > 0) {
            setIsSequenceLoaded(true);
          }
        }
      };
      setCardsFromProposals();
    }
  }, [question, firstProposal, isLoggedIn, hasProposed, sequenceProposals]);

  useEffect(() => {
    /** @toDo: remove or refactor after the end of bretagne consultation */
    if (getBretagneQuestionSlug(question.slug) && !department) {
      return setIsSequenceLoaded(false);
    }
    const proposalIds = votedProposalIds[question.slug] || [];

    const startSequence = async () => {
      await dispatch(
        fetchSequenceProposals(question.questionId, [
          firstProposal,
          ...proposalIds,
        ])
      );
    };

    startSequence();

    return () => {
      dispatch(unloadSequenceProposals());
    };
  }, []);

  if (!isSequenceLoaded) {
    return <SequencePlaceholderComponent />;
  }

  return (
    <SequenceComponent
      cards={cards}
      cardsCount={cardsCount}
      currentIndex={currentIndex}
      cardOffset={cardOffset}
      isClosed={isClosed}
      incrementCurrentIndex={incrementCurrentIndex}
      decrementCurrentIndex={decrementCurrentIndex}
      handleOpenSequence={handleOpenSequence}
      handleStartSequence={handleStartSequence}
    />
  );
};

const mapStateToProps = state => {
  const { firstProposal, votedProposalIds } = state.sequence;
  const { hasProposed } = state.proposal;
  const { isLoggedIn } = selectAuthentification(state);

  return {
    firstProposal,
    votedProposalIds,
    hasProposed,
    isLoggedIn,
  };
};

export const SequenceContainer = connect(mapStateToProps)(SequenceHandler);
