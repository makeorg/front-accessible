// @flow
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { type Proposal as TypeProposal } from 'Shared/types/proposal';
import { trackClickNextCard } from 'Shared/services/Tracking';
import {
  sequenceVote,
  sequenceUnvote,
  incrementSequenceIndex,
} from 'Shared/store/actions/sequence';
import { Vote } from 'Client/features/vote';
import { ProposalAuthorElement } from 'Client/ui/Proposal/AuthorElement';
import { i18n } from 'Shared/i18n';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import {
  SequenceProposalStyle,
  SequenceContentSpecialWrapperStyle,
  SequenceCardSeparatorStyle,
  SequenceNextButtonStyle,
} from '../style';

type Props = {
  /** Object with all proposal's properties */
  proposal: TypeProposal,
  /** Index of the card */
  index: number,
};

/**
 * Handles Proposal Card Business Logic
 */
export const ProposalCard = ({ proposal, index }: Props) => {
  const dispatch = useDispatch();
  const proposalIsVoted = proposal.votes.some(vote => vote.hasVoted === true);
  const [isVoted, setIsVoted] = useState(proposalIsVoted);
  const goToNextCard = () => {
    dispatch(incrementSequenceIndex());
    trackClickNextCard();
  };
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
      <ProposalAuthorElement
        author={proposal.author}
        country={proposal.country}
        language={proposal.language}
      />
      <SequenceCardSeparatorStyle />
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
      />
      {isVoted && (
        <SequenceNextButtonStyle
          onClick={goToNextCard}
          id={`next-button-${proposal.id}`}
        >
          {i18n.t('proposal_card.next')}
        </SequenceNextButtonStyle>
      )}
    </SequenceContentSpecialWrapperStyle>
  );
};
