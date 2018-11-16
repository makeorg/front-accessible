/* @flow */

import * as React from 'react';
import FinalCardContainer from '../../containers/ProposalCard/FinalCard';
import IntroCardComponent from '../ProposalCard/IntroCard';
import ProposalCardContainer from '../../containers/ProposalCard';
import CollapseToggle from './Button';
import Sequence from './Styled';

type Props = {
  count: number,
  proposals: Array<Object>,
  currentIndex: number,
  isSequenceCollapsed: boolean,
  isPannelOpen: boolean,
  handleExpandSequence: Function,
  handleStartSequence: Function,
  handleEndSequence: Function,
  goToNextCard: Function,
  goToPreviousCard: Function
};

const SequenceComponent = (props: Props) => {
  const {
    count,
    proposals,
    currentIndex,
    isSequenceCollapsed,
    isPannelOpen,
    handleExpandSequence,
    handleStartSequence,
    handleEndSequence,
    goToNextCard,
    goToPreviousCard
  } = props;
  const finalCardIndex = count + 1;

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
        <Sequence.List className={isSequenceCollapsed ? 'scaled-list' : 'unscaled-list'}>
          <IntroCardComponent
            index={0}
            currentIndex={currentIndex}
            isSequenceCollapsed={isSequenceCollapsed}
            isPannelOpen={isPannelOpen}
            handleStartSequence={handleStartSequence}
          />
          {proposals.map((proposal, key) => (
            <ProposalCardContainer
              key={proposal.id}
              proposal={proposal}
              index={key + 1}
              currentIndex={currentIndex}
              totalIndex={count}
              isSequenceCollapsed={isSequenceCollapsed}
              isPannelOpen={isPannelOpen}
              goToNextCard={goToNextCard}
              goToPreviousCard={goToPreviousCard}
            />
          ))}
          <FinalCardContainer
            index={finalCardIndex}
            currentIndex={currentIndex}
            goToPreviousCard={goToPreviousCard}
            handleEndSequence={handleEndSequence}
          />
        </Sequence.List>
      </Sequence.Wrapper>
    </Sequence>
  );
};

export default SequenceComponent;
