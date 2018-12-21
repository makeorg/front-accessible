/* @flow */

import * as React from 'react';
import { connect } from 'react-redux';
import ProposalCardComponent from 'Components/ProposalCard';

type Props = {
  /** Object with all proposal's properties */
  proposal: Object,
  /** Index of the card */
  index: number,
  /** Incremented / Decremented Index */
  currentIndex: number,
  /** Total of cards */
  cardsCount: number,
  /** Boolean toggled when Sliding pannel is opened / closed */
  isPannelOpen: boolean,
  /** Boolean toggled when Sequence is collapsed / expanded */
  isSequenceCollapsed: boolean,
  /** Method called when previous card button is clicked  */
  goToPreviousCard: Function,
  /** Method called when next card button is clicked (Incremented currentIndex) */
  goToNextCard: Function
}

/**
 * Handles Proposal Card Business Logic
 */
const ProposalCardContainer = (props: Props) => {
  const {
    index,
    currentIndex,
    isPannelOpen,
    isSequenceCollapsed
  } = props;

  return (
    <ProposalCardComponent
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

export default connect(mapStateToProps)(ProposalCardContainer);
