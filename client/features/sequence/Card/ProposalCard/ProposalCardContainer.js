// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import { trackClickNextCard } from 'Shared/services/Tracking';
import { sequenceVote, sequenceUnvote } from 'Shared/store/actions/sequence';
import { ProposalCardComponent } from './ProposalCardComponent';

type Props = {
  /** Object with all proposal's properties */
  proposal: Object,
  /** Index of the card */
  index: number,
  /** Method called we pass to the next card */
  incrementCurrentIndex: () => void,
  /** Method called when Vote */
  handleVoteOnSequence: (
    proposalId: string,
    voteKey: string,
    index: number
  ) => void,
  /** Method called when UnVote */
  handleUnvoteOnSequence: (proposalId: string) => void,
};

/**
 * Handles Proposal Card Business Logic
 */
const ProposalCardClass = (props: Props) => {
  const {
    proposal,
    index,
    incrementCurrentIndex,
    handleVoteOnSequence,
    handleUnvoteOnSequence,
  } = props;

  const goToNextCard = () => {
    incrementCurrentIndex();
    trackClickNextCard();
  };

  return (
    <ProposalCardComponent
      proposal={proposal}
      index={index}
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
  handleUnvoteOnSequence: (proposalId: string) => {
    dispatch(sequenceUnvote(proposalId));
  },
});

export const ProposalCardContainer = connect(
  null,
  mapDispatchToProps
)(ProposalCardClass);
