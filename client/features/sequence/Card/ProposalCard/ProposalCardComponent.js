// @flow

import React from 'react';
import { type Proposal as TypeProposal } from 'Shared/types/proposal';
import { Vote } from 'Client/features/vote';
import { ProposalAuthorElement } from 'Client/ui/Proposal/AuthorElement';
import { ProposalCardStyle, SequenceProposalStyle } from '../Styled';
import {
  ContentSpecialWrapperStyle,
  CardSeparatorStyle,
} from '../Styled/Content';
import { CardDescription } from '../../Description';
import { CardHeader } from '../../Header';

type Props = {
  /** Object with all proposal's properties */
  proposal: TypeProposal,
  /** Index of the card */
  index: number,
  /** Position of the card */
  position: number,
  /** Scale property used by Styled Component */
  scale: number,
  /** Zindex property used by Styled Component */
  zindex: number,
  /** Total of cards */
  cardsCount: number,
  /** Offset of cards without pagination (introCard) */
  cardOffset: number,
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
  handleUnvoteOnSequence: (proposalId: string) => void,
  /** Boolean toggled when card user has skip the card */
  isCardCollapsed: boolean,
  /** Boolean toggled when card is visible / hidden */
  isCardVisible: boolean,
};

/**
 * Renders Proposal Card
 */
export const ProposalCardComponent = (props: Props) => {
  const {
    proposal,
    index,
    cardsCount,
    cardOffset,
    goToPreviousCard,
    goToNextCard,
    position,
    zindex,
    scale,
    isCardCollapsed,
    isCardVisible,
    handleVoteOnSequence,
    handleUnvoteOnSequence,
  } = props;

  return (
    <React.Fragment>
      <CardDescription
        cardOffset={cardOffset}
        index={index}
        cardsCount={cardsCount}
        isCardVisible={isCardVisible}
      />
      <ProposalCardStyle
        position={position}
        scale={scale}
        zindex={zindex}
        isCardCollapsed={isCardCollapsed}
        isCardVisible={isCardVisible}
        aria-hidden={!isCardVisible}
        id={`proposal-card-${index}`}
        as="dd"
      >
        <CardHeader
          index={index}
          cardsCount={cardsCount}
          cardOffset={cardOffset}
          goToPreviousCard={goToPreviousCard}
        />
        <ContentSpecialWrapperStyle>
          <ProposalAuthorElement
            author={proposal.author}
            country={proposal.country}
            language={proposal.language}
          />
          <CardSeparatorStyle />
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
      </ProposalCardStyle>
    </React.Fragment>
  );
};
