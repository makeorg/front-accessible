import React from 'react';
import FinalCardContainer from '../../containers/ProposalCard/FinalCard';
import IntroCardComponent from '../ProposalCard/IntroCard';
import ProposalCardContainer from '../../containers/ProposalCard';
import CollapseToggle from './Button';
import Sequence from './Styled';

class SequenceComponent extends React.Component {
  render() {
    const {
      count,
      proposals,
      currentIndex,
      isSequenceCollapsed,
      handleExpandSequence,
      goToNextCard,
      goToPreviousCard,
      isPannelOpen,
      handleStartSequence,
      handleEndSequence
    } = this.props;
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
      </Sequence>
    );
  }
}

export default SequenceComponent;
