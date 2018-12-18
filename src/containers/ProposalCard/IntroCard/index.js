/* @flow */
import * as React from 'react';
import { connect } from 'react-redux';
import IntroCardComponent from 'Components/ProposalCard/IntroCard';
import { getPosition, getScale, getZIndex } from 'Helpers/sequence';

type Props = {
  configuration: Object,
  index: number,
  currentIndex: number,
  isPannelOpen: boolean,
  isSequenceCollapsed: boolean,
  handleStartSequence: Function
}

const IntroCardContainer = (props: Props) => {
  const {
    configuration,
    index,
    currentIndex,
    isPannelOpen,
    isSequenceCollapsed
  } = props;
  const position = getPosition(index, currentIndex);
  const scale = getScale(index, currentIndex);
  const zindex = getZIndex(index, currentIndex);
  return (
    <IntroCardComponent
      introCardParams={configuration}
      position={position}
      scale={scale}
      zindex={zindex}
      tabIndex={isPannelOpen || isSequenceCollapsed || index !== currentIndex ? -1 : 0}
      {...props}
    />
  );
};

const mapStateToProps = (state) => {
  const { isPannelOpen } = state.pannel;
  const { isSequenceCollapsed } = state.sequence;

  return {
    isPannelOpen,
    isSequenceCollapsed
  };
};

export default connect(mapStateToProps)(IntroCardContainer);
