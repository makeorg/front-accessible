/* @flow */
import * as React from 'react';
import { connect } from 'react-redux';
import { type IntroCardConfig, type IntroCardWording } from 'Shared/types/card';
import { type Question } from 'Shared/types/question';
import { getPosition, getScale, getZIndex } from 'Shared/helpers/sequence';
import { Tracking } from 'Shared/services/Tracking';
import { IntroCardComponent } from './IntroCardComponent';

type Props = {
  /** Object with Dynamic properties used to configure the Sequence (questionId, country, ...) */
  question: Question,
  /** Object with Static properties used to configure the Intro Card */
  configuration: IntroCardConfig,
  /** Object with Static properties used to customise the wording of the Intro Card */
  wording: IntroCardWording,
  /** Index of the card */
  index: number,
  /** Incremented / Decremented Index */
  currentIndex: number,
  /** Zindex property used by Styled Component */
  zindex: number,
  /** Boolean toggled when Sliding pannel is opened / closed */
  isPannelOpen: boolean,
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
    const { question, index, currentIndex } = this.props;
    if (index === currentIndex) {
      Tracking.trackDisplayIntroCard(question.slug);
    }
  };

  render() {
    const {
      configuration,
      wording,
      index,
      currentIndex,
      isPannelOpen,
      isSequenceCollapsed,
    } = this.props;
    const position = getPosition(index, currentIndex);
    const scale = getScale(index, currentIndex);
    const zindex = getZIndex(index, currentIndex);
    return (
      <IntroCardComponent
        introCardConfig={configuration}
        introCardWording={wording}
        position={position}
        scale={scale}
        zindex={zindex}
        tabIndex={
          isPannelOpen || isSequenceCollapsed || index !== currentIndex ? -1 : 0
        }
        {...this.props}
      />
    );
  }
}

const mapStateToProps = state => {
  const { isPannelOpen } = state.pannel;
  const { isSequenceCollapsed, question } = state.sequence;

  return {
    isPannelOpen,
    isSequenceCollapsed,
    question,
  };
};

export const IntroCardContainer = connect(mapStateToProps)(IntroCardHandler);
