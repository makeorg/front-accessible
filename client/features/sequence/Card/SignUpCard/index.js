import * as React from 'react';
import { type SignUpCardConfig } from 'Shared/types/card';
import { Tracking } from 'Shared/services/Tracking';
import { getPosition, getScale, getZIndex } from 'Shared/helpers/sequence';
import { SignUpCardComponent } from './SignUpCardComponent';

type Props = {
  /** Object with Static properties used to configure the Sign Up Card */
  configuration: SignUpCardConfig,
  /** Index of the card */
  index: number,
  /** Incremented / Decremented Index */
  currentIndex: number,
  /** Total of cards */
  cardsCount: number,
  /** Method called when previous card button is clicked  */
  goToPreviousCard: Function,
  /** Method called when next card button is clicked  */
  skipSignUpCard: Function,
  /** Boolean toggled when Sequence is collapsed / expanded */
  isSequenceCollapsed: boolean,
};

/**
 * Handles Sign Up Card Business Logic
 */
export class SignUpCardhandler extends React.Component<Props> {
  componentDidUpdate = () => {
    const { index, currentIndex } = this.props;
    if (index === currentIndex) {
      Tracking.trackDisplaySignUpCard();
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
    const tabIndex = isSequenceCollapsed || index !== currentIndex ? -1 : 0;

    return (
      <SignUpCardComponent
        configuration={configuration}
        position={position}
        scale={scale}
        zindex={zindex}
        tabIndex={tabIndex}
        {...this.props}
      />
    );
  }
}

export const SignUpCardContainer = SignUpCardhandler;
