import React from 'react';
import { connect } from 'react-redux';
import FinalCardComponent from '../../../components/ProposalCard/FinalCard';
import Tracking from '../../../services/Tracking';
import { getPosition, getScale, getZIndex } from '../../../helpers/sequence';

class FinalCardContainer extends React.Component {
  componentDidUpdate() {
    const { index, currentIndex } = this.props;
    if (index === currentIndex) {
      Tracking.trackDisplayFinalCard();
    }
  }

  render() {
    const {
      index,
      currentIndex,
      goToPreviousCard,
      handleEndSequence,
      isPannelOpen,
      isSequenceCollapsed
    } = this.props;
    const position = getPosition(index, currentIndex);
    const scale = getScale(index, currentIndex);
    const zindex = getZIndex(index, currentIndex);
    return (
      <FinalCardComponent
        index={index}
        currentIndex={currentIndex}
        position={position}
        scale={scale}
        zindex={zindex}
        tabIndex={isPannelOpen || isSequenceCollapsed || index !== currentIndex ? -1 : 0}
        goToPreviousCard={goToPreviousCard}
        handleEndSequence={handleEndSequence}
        isPannelOpen={isPannelOpen}
        isSequenceCollapsed={isSequenceCollapsed}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const { isPannelOpen } = state.pannel;
  const { isSequenceCollapsed } = state.sequence;

  return {
    isPannelOpen,
    isSequenceCollapsed
  };
};

export default connect(mapStateToProps)(FinalCardContainer);
