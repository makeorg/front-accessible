// @flow
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { trackClickNextCard } from 'Shared/services/Tracking';
import { incrementSequenceIndex } from 'Shared/store/actions/sequence';
import { Vote } from 'Client/features/vote';
import { ProposalAuthorElement } from 'Client/ui/Proposal/AuthorElement';
import { i18n } from 'Shared/i18n';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { type ProposalCardConfigType } from 'Shared/types/card';
import { type StateRoot } from 'Shared/store/types';
import {
  SequenceProposalStyle,
  SequenceContentSpecialWrapperStyle,
  SequenceCardSeparatorStyle,
  SequenceNextButtonStyle,
} from '../style';

type Props = {
  /** Object with all proposal's properties */
  configuration: ProposalCardConfigType,
  /** Index of the card */
  index: number,
};

/**
 * Handles Proposal Card Business Logic
 */
export const DeprecatedProposalCard = ({ configuration, index }: Props) => {
  const dispatch = useDispatch();
  const { proposal } = configuration;
  const userVotes = useSelector((state: StateRoot) =>
    state.sequence.cards[index].state
      ? state.sequence.cards[index].state.votes
      : []
  );
  const proposalIsVoted = userVotes.some(vote => vote.hasVoted === true);
  const [isVoted, setIsVoted] = useState(proposalIsVoted);
  const goToNextCard = () => {
    dispatch(incrementSequenceIndex());
    trackClickNextCard();
  };
  const handleVoteOnSequence = () => {
    setIsVoted(true);
  };
  const handleUnvoteOnSequence = () => {
    setIsVoted(false);
  };

  return (
    <SequenceContentSpecialWrapperStyle>
      <ProposalAuthorElement proposal={proposal} />
      <SequenceCardSeparatorStyle />
      <ScreenReaderItemStyle>
        {i18n.t('proposal_card.content')}
      </ScreenReaderItemStyle>
      <SequenceProposalStyle lang={proposal.question.language}>
        {proposal.content}
      </SequenceProposalStyle>
      <Vote
        proposal={proposal}
        votes={userVotes}
        proposalKey={proposal.proposalKey}
        index={index}
        onVote={handleVoteOnSequence}
        onUnvote={handleUnvoteOnSequence}
      />
      {isVoted && (
        <SequenceNextButtonStyle
          onClick={goToNextCard}
          id={`next-button-${proposal.id}`}
          data-cy-button="next-proposal"
        >
          {i18n.t('proposal_card.next')}
        </SequenceNextButtonStyle>
      )}
    </SequenceContentSpecialWrapperStyle>
  );
};
