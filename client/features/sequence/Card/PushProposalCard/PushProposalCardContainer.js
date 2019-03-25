/* @flow */
import * as React from 'react';
import { connect } from 'react-redux';
import { type PushProposalCardConfig } from 'Shared/types/card';
import { Tracking } from 'Shared/services/Tracking';
import { getPosition, getScale, getZIndex } from 'Shared/helpers/sequence';
import { selectSequenceCollapsed } from 'Shared/store/selectors/sequence.selector';
import { PushProposalCardComponent } from './PushProposalCardComponent';

type Props = {
  /** Object with Static properties used to configure the Push Proposal Card */
  configuration: PushProposalCardConfig,
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
  /** Method called when next card button is clicked  */
  skipProposalPushCard: Function,
  /** Boolean toggled when Sequence is collapsed / expanded */
  isSequenceCollapsed: boolean,
};

/**
 * Handles Push Proposal Card Business Logic
 */
class PushProposalCardHandler extends React.Component<Props> {
  componentDidUpdate = () => {
    const { index, currentIndex } = this.props;
    if (index === currentIndex) {
      Tracking.trackDisplayProposalPushCard();
    }
  };

  focusProposalField = (): void => {
    const proposalInput = document.getElementById('proposal');
    if (proposalInput !== null) {
      proposalInput.focus();
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
      <PushProposalCardComponent
        configuration={configuration}
        position={position}
        scale={scale}
        zindex={zindex}
        tabIndex={tabIndex}
        focusProposalField={this.focusProposalField}
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

export const PushProposalCardContainer = connect(mapStateToProps)(
  PushProposalCardHandler
);
