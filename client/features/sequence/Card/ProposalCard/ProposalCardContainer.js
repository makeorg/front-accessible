/* @flow */

import * as React from 'react';
import { connect } from 'react-redux';
import { selectSequenceCollapsed } from 'Shared/store/selectors/sequence.selector';
import { ProposalCardComponent } from './ProposalCardComponent';

type Props = {
  /** Object with all proposal's properties */
  proposal: Object,
  /** Index of the card */
  index: number,
  /** Incremented / Decremented Index */
  currentIndex: number,
  /** Total of cards */
  cardsCount: number,
  /** Boolean toggled when Modal is opened / closed */
  isModalOpen: boolean,
  /** Boolean toggled when Sequence is collapsed / expanded */
  isSequenceCollapsed: boolean,
  /** Method called when previous card button is clicked  */
  goToPreviousCard: Function,
  /** Method called when next card button is clicked (Incremented currentIndex) */
  goToNextCard: Function,
};

/**
 * Handles Proposal Card Business Logic
 */
const ProposalCardHandler = (props: Props) => {
  const { index, currentIndex, isModalOpen, isSequenceCollapsed } = props;

  return (
    <ProposalCardComponent
      tabIndex={
        isModalOpen || isSequenceCollapsed || index !== currentIndex ? -1 : 0
      }
      {...props}
    />
  );
};

const mapStateToProps = state => {
  const { isModalOpen } = state.modal;

  return {
    isModalOpen,
    isSequenceCollapsed: selectSequenceCollapsed(state),
  };
};

export const ProposalCardContainer = connect(mapStateToProps)(
  ProposalCardHandler
);
