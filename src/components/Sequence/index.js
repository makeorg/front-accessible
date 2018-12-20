/* @flow */
import * as React from 'react';
import * as sequenceHelper from 'Helpers/sequence';
import CollapseToggle from './Button';
import Card from './Card';
import Sequence from './Styled';

type Props = {
  /** Number of cards */
  cardsCount: number,
  /** Array with cards */
  cards: Array<mixed>,
  /** Incremented / Decremented Index */
  currentIndex: number,
  /** Boolean toggled when Sequence is collapsed / expanded */
  isSequenceCollapsed: boolean,
  /** Boolean toggled when Sliding pannel is opened / closed */
  isPannelOpen: boolean,
  /** Method called when "Return to proposal" button is clicked */
  handleExpandSequence: Function,
  /** Method called when "Stard Sequence" button is clicked */
  handleStartSequence: Function,
  /** Method called when next card button is clicked (Incremented currentIndex) */
  goToNextCard: Function,
  /** Method called when previous card button is clicked  */
  goToPreviousCard: Function,
  /** Method called when next button in Sign Up Card is clicked  */
  skipSignUpCard: Function,
  /** Method called when next card button in Push Proposal Card is clicked  */
  skipProposalPushCard: Function
};

/**
 * Renders Sequence component with Intro / Push Proposal / Sign Up & Proposal Cards
 */
const SequenceComponent = (props: Props) => {
  const {
    cardsCount,
    cards,
    currentIndex,
    isSequenceCollapsed,
    isPannelOpen,
    handleExpandSequence,
    handleStartSequence,
    goToPreviousCard,
    goToNextCard,
    skipSignUpCard,
    skipProposalPushCard
  } = props;

  if (!cards) {
    return null;
  }

  return (
    <Sequence
      role="region"
      aria-describedby="introduction"
      className={isSequenceCollapsed ? 'collapsed-sequence' : 'expanded-sequence'}
    >
      <CollapseToggle
        handleExpandSequence={handleExpandSequence}
        isSequenceCollapsed={isSequenceCollapsed}
        isPannelOpen={isPannelOpen}
      />
      <Sequence.Wrapper>
        <Sequence.List className={isSequenceCollapsed ? 'scaled-list' : 'unscaled-list'} id="sequence">
          {cards.map((card, index) => (
            <Card
              key={sequenceHelper.getCardIndex(index)}
              card={card}
              index={index}
              cardsCount={cardsCount}
              currentIndex={currentIndex}
              goToPreviousCard={goToPreviousCard}
              goToNextCard={goToNextCard}
              skipSignUpCard={skipSignUpCard}
              skipProposalPushCard={skipProposalPushCard}
              handleStartSequence={handleStartSequence}
            />
          ))}
        </Sequence.List>
      </Sequence.Wrapper>
    </Sequence>
  );
};

export default SequenceComponent;
