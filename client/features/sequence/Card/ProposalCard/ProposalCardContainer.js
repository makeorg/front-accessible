/* @flow */

import * as React from 'react';
import { connect } from 'react-redux';
import { sequenceVote, sequenceUnvote } from 'Shared/store/actions/sequence';
import { ProposalCardComponent } from './ProposalCardComponent';

type Props = {
  /** Object with all proposal's properties */
  proposal: Object,
  /** Index of the card */
  index: number,
  /** Position of the card */
  position: number,
  /** Scale property used by Styled Component */
  scale: number,
  /** Zindex property used by Styled Component */
  zindex: number,
  /** Incremented / Decremented Index */
  currentIndex: number,
  /** Total of cards */
  cardsCount: number,
  /** Offset of cards without pagination (introCard) */
  cardOffset: number,
  /** Boolean toggled when card user has skip the card */
  isCardCollapsed: boolean,
  /** Boolean toggled when card is visible / hidden */
  isCardVisible: boolean,
  /** Method called when previous card button is clicked  */
  goToPreviousCard: () => void,
  /** Method called when next card button is clicked (Incremented currentIndex) */
  goToNextCard: () => void,
  /** Method called when Vote */
  handleVoteOnSequence: (
    proposalId: string,
    voteKey: string,
    index: number
  ) => void,
  /** Method called when UnVote */
  handleUnvoteOnSequence: (
    proposalId: string,
    voteKey: string,
    index: number
  ) => void,
};

/**
 * Handles Proposal Card Business Logic
 */
const ProposalCardClass = (props: Props) => {
  const {
    proposal,
    cardsCount,
    cardOffset,
    index,
    position,
    scale,
    zindex,
    currentIndex,
    isCardCollapsed,
    isCardVisible,
    goToPreviousCard,
    goToNextCard,
    handleVoteOnSequence,
    handleUnvoteOnSequence,
  } = props;

  return (
    <ProposalCardComponent
      proposal={proposal}
      index={index}
      position={position}
      scale={scale}
      zindex={zindex}
      cardsCount={cardsCount}
      currentIndex={currentIndex}
      cardOffset={cardOffset}
      isCardCollapsed={isCardCollapsed}
      isCardVisible={isCardVisible}
      goToPreviousCard={goToPreviousCard}
      goToNextCard={goToNextCard}
      handleVoteOnSequence={handleVoteOnSequence}
      handleUnvoteOnSequence={handleUnvoteOnSequence}
    />
  );
};

const mapDispatchToProps = dispatch => ({
  handleVoteOnSequence: (
    proposalId: string,
    voteKey: string,
    index: number
  ) => {
    dispatch(sequenceVote(proposalId, voteKey, index));
  },
  handleUnvoteOnSequence: (
    proposalId: string,
    voteKey: string,
    index: number
  ) => {
    dispatch(sequenceUnvote(proposalId, voteKey, index));
  },
});

export const ProposalCardContainer = connect(
  null,
  mapDispatchToProps
)(ProposalCardClass);
