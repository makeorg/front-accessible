// @flow

import React from 'react';
import { type Proposal as TypeProposal } from 'Shared/types/proposal';
import { Vote } from 'Client/features/vote';
import { ProposalAuthorElement } from 'Client/ui/Proposal/AuthorElement';
import { i18n } from 'Shared/i18n';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { SequenceProposalStyle } from '../Styled';
import {
  ContentSpecialWrapperStyle,
  CardSeparatorStyle,
} from '../Styled/Content';

type Props = {
  /** Object with all proposal's properties */
  proposal: TypeProposal,
  /** Index of the card */
  index: number,
  /** Method called when next card button is clicked (Incremented currentIndex) */
  goToNextCard: () => void,
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
 * Renders Proposal Card
 */
export const ProposalCardComponent = (props: Props) => {
  const {
    proposal,
    index,
    goToNextCard,
    handleVoteOnSequence,
    handleUnvoteOnSequence,
  } = props;

  return (
    <ContentSpecialWrapperStyle>
      <ProposalAuthorElement
        author={proposal.author}
        country={proposal.country}
        language={proposal.language}
      />
      <CardSeparatorStyle />
      <ScreenReaderItemStyle>
        {i18n.t('proposal_card.content')}
      </ScreenReaderItemStyle>
      <SequenceProposalStyle>{proposal.content}</SequenceProposalStyle>
      <Vote
        proposalId={proposal.id}
        votes={proposal.votes}
        proposalKey={proposal.proposalKey}
        index={index}
        onVote={handleVoteOnSequence}
        onUnvote={handleUnvoteOnSequence}
        goToNextCard={goToNextCard}
      />
    </ContentSpecialWrapperStyle>
  );
};
