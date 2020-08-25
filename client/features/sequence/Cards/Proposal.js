// @flow
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { type ProposalType } from 'Shared/types/proposal';
import { trackClickNextCard } from 'Shared/services/Tracking';
import {
  sequenceVote,
  sequenceUnvote,
  incrementSequenceIndex,
} from 'Shared/store/actions/sequence';
import { Vote } from 'Client/features/vote';
import { ProposalAuthorElement } from 'Client/ui/Proposal/AuthorElement/index';
import { i18n } from 'Shared/i18n';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import {
  SequenceProposalStyle,
  SequenceContentSpecialWrapperStyle,
  SequenceNextButtonStyle,
} from '../style';

type Props = {
  /** Object with all proposal's properties */
  proposal: ProposalType,
  /** Index of the card */
  index: number,
  /** cards counts */
  cardsCount: number,
};

/**
 * Handles Proposal Card Business Logic
 */
export const ProposalCard = ({ proposal, index, cardsCount }: Props) => {
  const dispatch = useDispatch();
  const proposalIsVoted = proposal.votes.some(vote => vote.hasVoted === true);
  const [isVoted, setIsVoted] = useState(proposalIsVoted);
  const goToNextCard = () => {
    dispatch(incrementSequenceIndex());
    trackClickNextCard();
  };
  const isLastCard = index === cardsCount - 2;
  const handleVoteOnSequence = (
    proposalId: string,
    questionSlug: string,
    voteKey: string
  ) => {
    dispatch(sequenceVote(proposalId, questionSlug, voteKey, index));
    setIsVoted(true);
  };
  const handleUnvoteOnSequence = (proposalId: string, questionSlug: string) => {
    dispatch(sequenceUnvote(proposalId, questionSlug));
    setIsVoted(false);
  };

  return (
    <SequenceContentSpecialWrapperStyle>
      <ProposalAuthorElement proposal={proposal} withAvatar isSequence />
      <ScreenReaderItemStyle>
        {i18n.t('proposal_card.content')}
      </ScreenReaderItemStyle>
      <SequenceProposalStyle>{proposal.content}</SequenceProposalStyle>
      <Vote
        proposalId={proposal.id}
        questionSlug={proposal.question.slug}
        votes={proposal.votes}
        proposalKey={proposal.proposalKey}
        index={index}
        onVote={handleVoteOnSequence}
        onUnvote={handleUnvoteOnSequence}
        isSequence
      />
      {isVoted && (
        <SequenceNextButtonStyle
          onClick={goToNextCard}
          id={`next-button-${proposal.id}`}
          data-cy-button="next-proposal"
        >
          {isLastCard
            ? i18n.t('proposal_card.validate')
            : i18n.t('proposal_card.next')}
        </SequenceNextButtonStyle>
      )}
    </SequenceContentSpecialWrapperStyle>
  );
};
