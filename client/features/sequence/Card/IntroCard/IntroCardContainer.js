/* @flow */
import * as React from 'react';
import { connect } from 'react-redux';
import { type IntroCardConfig } from 'Shared/types/card';
import { Tracking } from 'Shared/services/Tracking';
import { selectSequenceCollapsed } from 'Shared/store/selectors/sequence.selector';
import { getPosition, getScale, getZIndex } from 'Shared/helpers/sequence';
import { IntroCardComponent } from './IntroCardComponent';

type Props = {
  /** Object with Static properties used to configure the Intro Card */
  configuration: IntroCardConfig,
  /** Index of the card */
  index: number,
  /** Incremented / Decremented Index */
  currentIndex: number,
  /** Zindex property used by Styled Component */
  zindex: number,
  /** Boolean toggled when Sequence is collapsed / expanded */
  isSequenceCollapsed: boolean,
  /** Method called when start button is clicked */
  handleStartSequence: Function,
};

/**
 * Handles Intro Card Business Logic
 */
class IntroCardHandler extends React.Component<Props> {
  componentDidUpdate = () => {
    const { index, currentIndex } = this.props;
    if (index === currentIndex) {
      Tracking.trackDisplayIntroCard();
    }
  };

  render() {
    const {
      configuration,
      index,
      currentIndex,
      isSequenceCollapsed,
    } = this.props;
    const position = getPosition(index, currentIndex);
    const scale = getScale(index, currentIndex);
    const zindex = getZIndex(index, currentIndex);
    return (
      <IntroCardComponent
        introCardConfig={configuration}
        position={position}
        scale={scale}
        zindex={zindex}
        tabIndex={isSequenceCollapsed || index !== currentIndex ? -1 : 0}
        {...this.props}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    isSequenceCollapsed: selectSequenceCollapsed(state),
  };
};

export const IntroCardContainer = connect(mapStateToProps)(IntroCardHandler);
