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
      handleExpandSequence
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
        />
        <Sequence.List>
          <IntroCardComponent index={0} currentIndex={currentIndex} />
          {proposals.map((proposal, key) => (
            <ProposalCardContainer
              key={proposal.id}
              proposal={proposal}
              currentIndex={currentIndex}
              index={key + 1}
            />
          ))}
          <FinalCardComponent index={finalCardIndex} currentIndex={currentIndex} />
        </Sequence.List>
      </Sequence>
    );
  }
}

export default SequenceComponent;
