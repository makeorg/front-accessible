import React from 'react';
import IntroCardComponent from '../ProposalCard/IntroCard';
import FinalCardComponent from '../ProposalCard/FinalCard';
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
      isPannelOpen
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
        <Sequence.List>
          <IntroCardComponent
            index={0}
            currentIndex={currentIndex}
            isSequenceCollapsed={isSequenceCollapsed}
            isPannelOpen={isPannelOpen}
            goToNextCard={goToNextCard}
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
          <FinalCardComponent
            index={finalCardIndex}
            currentIndex={currentIndex}
            isSequenceCollapsed={isSequenceCollapsed}
            isPannelOpen={isPannelOpen}
            goToPreviousCard={goToPreviousCard}
          />
        </Sequence.List>
      </Sequence>
    );
  }
}

export default SequenceComponent;
