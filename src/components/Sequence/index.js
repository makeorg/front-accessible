import React from 'react';
import ProposalCardContainer from '../../containers/ProposalCard';
import Sequence from './Styled';

class SequenceComponent extends React.Component {
  render() {
    return (
      <Sequence role="region" aria-describedby="introduction">
        <Sequence.List>
          <ProposalCardContainer />
        </Sequence.List>
      </Sequence>
    );
  }
}

export default SequenceComponent;
