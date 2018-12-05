/* @flow */
import * as React from 'react';
import { connect } from 'react-redux';
import FinalCardComponent from 'Components/ProposalCard/FinalCard';
import Tracking from 'Services/Tracking';
import { getPosition, getScale, getZIndex } from 'Helpers/sequence';

type Props = {
  configuration: Object,
  index: number,
  currentIndex: number,
  cardsCount: number,
  goToPreviousCard: Function,
  isPannelOpen: boolean,
  isSequenceCollapsed: boolean
}

class FinalCardContainer extends React.Component<Props> {
  componentDidUpdate() {
    const { index, currentIndex } = this.props;
    if (index === currentIndex) {
      Tracking.trackDisplayFinalCard();
    }
  }

  render() {
    const {
      configuration,
      index,
      currentIndex,
      cardsCount,
      goToPreviousCard,
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
        cardsCount={cardsCount}
        position={position}
        scale={scale}
        zindex={zindex}
        tabIndex={isPannelOpen || isSequenceCollapsed || index !== currentIndex ? -1 : 0}
        goToPreviousCard={goToPreviousCard}
        linkUrl={configuration.linkUrl}
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
