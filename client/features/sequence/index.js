// @flow
import React, { useEffect, useState } from 'react';
import {
  buildCards,
  findIndexOfFirstUnvotedCard,
  getCardIndex,
} from 'Shared/helpers/sequence';
import { type StateRoot } from 'Shared/store/types';
import { type SequenceCardType } from 'Shared/types/card';
import { type ProposalType } from 'Shared/types/proposal';
import { type QuestionType } from 'Shared/types/question';
import { searchFirstUnvotedProposal } from 'Shared/helpers/proposal';
import { useSelector, useDispatch } from 'react-redux';
import { selectAuthentication } from 'Shared/store/selectors/user.selector';
import {
  fetchSequenceProposals,
  unloadSequenceProposals,
  resetSequenceIndex,
  setSequenceIndex,
} from 'Shared/store/actions/sequence';
import { i18n } from 'Shared/i18n';
import { SvgArrowTop } from 'Client/ui/Svg/elements';
import { SequenceCards } from './Cards';
import {
  SequencePlaceholderCardStyle,
  SequencePlaceholderWrapperStyle,
  SequencePlaceholderTitleSTyle,
  SequencePlaceholderSeparatorStyle,
  SequencePlaceholderDescriptionStyle,
  SequencePlaceholderButtonStyle,
  SequenceStyle,
  SequenceWrapperStyle,
  SequenceListStyle,
  SequenceCollapseArrowStyle,
  SequenceCollapseButtonStyle,
} from './style';

export type Props = {
  /** Object with Dynamic properties used to configure the Sequence (questionId, country, ...) */
  question: QuestionType,
  /** Boolean toggled when Sequence is collapsed / expanded */
  isClosed: boolean,
  /** Method called when "Return to proposal" button is clicked */
  handleOpenSequence: () => void,
};

/**
 * Renders Sequence component with Intro / Push Proposal / Sign Up & Proposal Cards
 */
export const Sequence = ({ question, isClosed, handleOpenSequence }: Props) => {
  const dispatch = useDispatch();
  const { firstProposal, votedProposalIds, currentIndex } = useSelector(
    state => state.sequence
  );
  const { hasProposed } = useSelector(state => state.proposal);
  const { isLoggedIn } = useSelector(state => selectAuthentication(state));
  const [isSequenceLoaded, setIsSequenceLoaded] = useState(false);
  const [cards, setCards] = useState([]);
  const [cardsCount, setCardsCount] = useState(0);
  const sequenceProposals = useSelector(
    (state: StateRoot) => state.sequence && state.sequence.proposals
  );

  useEffect(() => {
    if (question) {
      const setCardsFromProposals = async () => {
        const proposalIds = votedProposalIds[question.slug] || [];

        if (sequenceProposals && sequenceProposals.length) {
          const buildedCards: SequenceCardType[] = buildCards(
            sequenceProposals,
            question.sequenceConfig,
            isLoggedIn,
            hasProposed,
            question.canPropose
          );

          const firstUnvotedProposal:
            | typeof undefined
            | ProposalType = searchFirstUnvotedProposal(sequenceProposals);

          const indexOfFirstUnvotedCard: number = findIndexOfFirstUnvotedCard(
            firstUnvotedProposal,
            buildedCards,
            currentIndex
          );
          setCards(buildedCards);
          setCardsCount(buildedCards.length - 1);

          if (proposalIds.length) {
            dispatch(setSequenceIndex(indexOfFirstUnvotedCard));
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
    dispatch(resetSequenceIndex());

    return () => {
      dispatch(unloadSequenceProposals());
      dispatch(resetSequenceIndex());
    };
  }, []);

  if (!isSequenceLoaded) {
    return (
      <SequenceStyle>
        <SequenceWrapperStyle>
          <SequenceListStyle
            as="div"
            id="sequence"
            data-cy-container="sequence"
          >
            <SequencePlaceholderCardStyle as="div" scaling="1" zindex="1">
              <SequencePlaceholderWrapperStyle>
                <SequencePlaceholderTitleSTyle />
                <SequencePlaceholderSeparatorStyle />
                <SequencePlaceholderDescriptionStyle />
                <SequencePlaceholderDescriptionStyle />
                <SequencePlaceholderButtonStyle />
              </SequencePlaceholderWrapperStyle>
            </SequencePlaceholderCardStyle>
          </SequenceListStyle>
        </SequenceWrapperStyle>
      </SequenceStyle>
    );
  }

  return (
    <SequenceStyle>
      {!!isClosed && (
        <>
          <SequenceCollapseArrowStyle
            aria-label={i18n.t('sequence.return')}
            data-cy-button="back-to-proposals-arrow"
            onClick={handleOpenSequence}
          >
            <SvgArrowTop />
          </SequenceCollapseArrowStyle>
          <SequenceCollapseButtonStyle
            onClick={handleOpenSequence}
            data-cy-button="back-to-proposals"
          >
            {i18n.t('sequence.return')}
          </SequenceCollapseButtonStyle>
        </>
      )}
      <SequenceWrapperStyle>
        <SequenceListStyle
          isSequenceCollapsed={isClosed}
          id="sequence"
          data-cy-container="sequence"
        >
          {cards.map((card, index) => (
            <SequenceCards
              key={getCardIndex(index)}
              card={card}
              index={index}
              cardsCount={cardsCount}
            />
          ))}
        </SequenceListStyle>
      </SequenceWrapperStyle>
    </SequenceStyle>
  );
};
