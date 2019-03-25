import * as React from 'react';
import { type FinalCardConfig } from 'Shared/types/card';
import { connect } from 'react-redux';
import { Tracking } from 'Shared/services/Tracking';
import { getPosition, getScale, getZIndex } from 'Shared/helpers/sequence';
import { TabIndexContext } from 'Client/app/TabIndexContext';
import { selectSequenceCollapsed } from 'Shared/store/selectors/sequence.selector';
import { FinalCardComponent } from './FinalCardComponent';

type Props = {
  /** Object with Static properties used to configure the Final Card */
  configuration: FinalCardConfig,
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
      index,
      currentIndex,
      cardsCount,
      goToPreviousCard,
      isSequenceCollapsed,
      cardOffset,
    } = this.props;
    const position = getPosition(index, currentIndex);
    const scale = getScale(index, currentIndex);
    const zindex = getZIndex(index, currentIndex);
    const tabIndex = isSequenceCollapsed || index !== currentIndex ? -1 : 0;
    return (
      <TabIndexContext.Provider value={tabIndex}>
        <FinalCardComponent
          configuration={configuration}
          index={index}
          cardOffset={cardOffset}
          currentIndex={currentIndex}
          cardsCount={cardsCount}
          position={position}
          scale={scale}
          zindex={zindex}
          tabIndex={tabIndex}
          goToPreviousCard={goToPreviousCard}
        />
      </TabIndexContext.Provider>
    );
  }
}

const mapStateToProps = state => {
  return {
    isSequenceCollapsed: selectSequenceCollapsed(state),
  };
};

export const FinalCardContainer = connect(mapStateToProps)(FinalCardHandler);
