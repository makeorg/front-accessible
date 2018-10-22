import React from 'react';
import ProposalCardContainer from '../../containers/ProposalCard';
import CollapseToggle from './Button';
import Sequence from './Styled';

class SequenceComponent extends React.Component {
  render() {
    const { isSequenceCollapsed, handleExpandSequence } = this.props;
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
          <ProposalCardContainer />
        </Sequence.List>
      </Sequence>
    );
  }
}

export default SequenceComponent;
