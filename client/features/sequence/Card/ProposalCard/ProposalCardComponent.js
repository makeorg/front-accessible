// @flow

import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { type Proposal as TypeProposal } from 'Shared/types/proposal';
import { Vote } from 'Client/features/vote';
import { ProposalAuthor } from 'Client/features/proposal/ProposalAuthor';
import { ProgressCircleComponent } from 'Client/ui/ProgressCircle';
import { SvgArrowLeft } from 'Client/ui/Svg/elements';
import { ProposalCardStyle, SequenceProposalStyle } from '../Styled';
import {
  BackButtonWrapperStyle,
  BackButtonStyle,
  BackIconStyle,
} from '../Styled/Buttons';
import {
  ContentSpecialWrapperStyle,
  CardSeparatorStyle,
} from '../Styled/Content';

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
  /** Incremented / Decremented Index */
  currentIndex: number,
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
    currentIndex,
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
    <ProposalCardStyle
      position={position}
      scale={scale}
      zindex={zindex}
      isCardCollapsed={isCardCollapsed}
      isCardVisible={isCardVisible}
      aria-hidden={!isCardVisible}
      id={`proposal-card-${index}`}
    >
      <BackButtonWrapperStyle>
        <BackButtonStyle onClick={goToPreviousCard}>
          <BackIconStyle>
            <SvgArrowLeft aria-hidden />
          </BackIconStyle>
          {i18n.t('proposal_card.previous')}
        </BackButtonStyle>
        <ProgressCircleComponent
          index={index}
          cardOffset={cardOffset}
          cardsCount={cardsCount}
        />
      </BackButtonWrapperStyle>
      <ContentSpecialWrapperStyle as="section">
        <ProposalAuthor author={proposal.author} />
        <CardSeparatorStyle aria-hidden />
        <SequenceProposalStyle>{proposal.content}</SequenceProposalStyle>
        <Vote
          proposalId={proposal.id}
          votes={proposal.votes}
          proposalKey={proposal.proposalKey}
          index={index}
          currentIndex={currentIndex}
          onVote={handleVoteOnSequence}
          onUnvote={handleUnvoteOnSequence}
          goToNextCard={goToNextCard}
        />
      </ContentSpecialWrapperStyle>
    </ProposalCardStyle>
  );
};
