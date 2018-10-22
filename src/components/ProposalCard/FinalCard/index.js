import React from 'react';
import ProposalCard from '../Styled';
import { getPosition, getScale, getZIndex } from '../../../helpers/sequence';

class FinalCardComponent extends React.Component {
  render() {
    const { index } = this.props;
    const position = getPosition(index);
    const scale = getScale(index);
    const zindex = getZIndex(index);

    return (
      <ProposalCard position={position} scale={scale} zindex={zindex}>
        FinalCardComponent
      </ProposalCard>
    );
  }
}

export default FinalCardComponent;
