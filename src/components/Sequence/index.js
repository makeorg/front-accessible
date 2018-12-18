/* @flow */
import * as React from 'react';
import * as sequenceHelper from 'Helpers/sequence';
import CollapseToggle from './Button';
import Card from './Card';
import Sequence from './Styled';

type Props = {
  cardsCount: number,
  cards: Array<mixed>,
  currentIndex: number,
  isSequenceCollapsed: boolean,
  isPannelOpen: boolean,
  handleExpandSequence: Function,
  handleStartSequence: Function,
  goToNextCard: Function,
  goToPreviousCard: Function,
  skipSignUpCard: Function,
  skipProposalPushCard: Function
};

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
