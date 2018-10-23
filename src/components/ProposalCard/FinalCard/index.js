import React from 'react';
import ProposalCard from '../Styled';
import { getPosition, getScale, getZIndex } from '../../../helpers/sequence';

class FinalCardComponent extends React.Component {
  render() {
    const { index, currentIndex } = this.props;
    const position = getPosition(index, currentIndex);
    const scale = getScale(index, currentIndex);
    const zindex = getZIndex(index, currentIndex);

    return (
      <ProposalCard
        position={position}
        scale={scale}
        zindex={zindex}
        className={index < currentIndex ? 'collpased-card' : ''}
      >
        FinalCardComponent
      </ProposalCard>
    );
  }
}

export default FinalCardComponent;
