/* @flow */
import * as React from 'react';
import { connect } from 'react-redux';
import IntroCardComponent from 'Components/ProposalCard/IntroCard';
import { getPosition, getScale, getZIndex } from 'Helpers/sequence';

type Props = {
  /** Object with Static properties used to configure the Intro Card */
  configuration: Object,
  /** Index of the card */
  index: number,
  /** Incremented / Decremented Index */
  currentIndex: number,
  /** Boolean toggled when Sliding pannel is opened / closed */
  isPannelOpen: boolean,
  /** Boolean toggled when Sequence is collapsed / expanded */
  isSequenceCollapsed: boolean,
  /** Method called when start button is clicked */
  handleStartSequence: Function
}

/**
 * Handles Intro Card Business Logic
 */
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