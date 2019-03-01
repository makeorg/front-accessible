import * as React from 'react';
import { type FinalCardConfig, FinalCardWording } from 'Shared/types/card';
import { connect } from 'react-redux';
import { Tracking } from 'Shared/services/Tracking';
import { getPosition, getScale, getZIndex } from 'Shared/helpers/sequence';
import { FinalCardComponent } from './FinalCardComponent';

type Props = {
  /** Object with Static properties used to configure the Final Card */
  configuration: FinalCardConfig,
  /** Object with Static properties used to customise the wording of the Final Card */
  wording: FinalCardWording,
  /** Index of the card */
  index: number,
  /** Incremented / Decremented Index */
  currentIndex: number,
  /** Total of cards */
  cardsCount: number,
  /** Offset of cards without pagination (introCard) */
  cardOffset: number,
  /** Method called when previous card button is clicked  */
  goToPreviousCard: Function,
  /** Boolean toggled when Sliding pannel is opened / closed */
  isPannelOpen: boolean,
  /** Boolean toggled when Sequence is collapsed / expanded */
  isSequenceCollapsed: boolean,
};

/**
 * Handles Final Card Business Logic
 */
class FinalCardHandler extends React.Component<Props> {
  componentDidUpdate() {
    const { index, currentIndex } = this.props;
    if (index === currentIndex) {
      Tracking.trackDisplayFinalCard();
    }
  }

  render() {
    const {
      configuration,
      wording,
      index,
      currentIndex,
      cardsCount,
      goToPreviousCard,
      isPannelOpen,
      isSequenceCollapsed,
      cardOffset,
    } = this.props;
    const position = getPosition(index, currentIndex);
    const scale = getScale(index, currentIndex);
    const zindex = getZIndex(index, currentIndex);

    return (
      <FinalCardComponent
        finalCardConfig={configuration}
        finalCardWording={wording}
        index={index}
        cardOffset={cardOffset}
        currentIndex={currentIndex}
        cardsCount={cardsCount}
        position={position}
        scale={scale}
        zindex={zindex}
        tabIndex={
          isPannelOpen || isSequenceCollapsed || index !== currentIndex ? -1 : 0
        }
        goToPreviousCard={goToPreviousCard}
      />
    );
  }
}

const mapStateToProps = state => {
  const { isPannelOpen } = state.pannel;
  const { isSequenceCollapsed } = state.sequence;

  return {
    isPannelOpen,
    isSequenceCollapsed,
  };
};

export const FinalCardContainer = connect(mapStateToProps)(FinalCardHandler);
