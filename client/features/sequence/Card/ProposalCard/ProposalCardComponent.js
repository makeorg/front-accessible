import * as React from 'react';
import i18next from 'i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import type { Proposal } from 'Shared/types/proposal';
import { Vote } from 'Client/features/vote';
import { getPosition, getScale, getZIndex } from 'Shared/helpers/sequence';
import { ProposalAuthor } from 'Client/features/proposal/ProposalAuthor';
import { ProgressCircleComponent } from 'Client/ui/ProgressCircle';
import ProposalCard from '../Styled';

type Props = {
  /** Object with all proposal's properties */
  proposal: Proposal,
  /** Index of the card */
  index: number,
  /** Total of cards */
  cardsCount: number,
  /** Offset of cards without pagination (introCard) */
  cardOffset: number,
  /** Incremented / Decremented Index */
  currentIndex: number,
  /** Tabindex for interactive items */
  tabIndex: number,
  /** Method called when previous card button is clicked  */
  goToPreviousCard: Function,
  /** Method called when next card button is clicked (Incremented currentIndex) */
  goToNextCard: Function
}

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
    tabIndex,
    goToPreviousCard,
    goToNextCard
  } = props;
  const position = getPosition(index, currentIndex);
  const scale = getScale(index, currentIndex);
  const zindex = getZIndex(index, currentIndex);

  return (
    <ProposalCard
      position={position}
      scale={scale}
      zindex={zindex}
      isCardCollapsed={index < currentIndex}
      id={`proposal-card-${index}`}
    >
      <ProposalCard.BackButtonWrapper>
        <ProposalCard.BackButton
          tabIndex={tabIndex}
          onClick={goToPreviousCard}
        >
          <ProposalCard.BackIcon>
            <FontAwesomeIcon aria-hidden icon={faArrowLeft} />
          </ProposalCard.BackIcon>
          {i18next.t('proposal_card.previous')}
        </ProposalCard.BackButton>
        <ProgressCircleComponent index={index} cardOffset={cardOffset} cardsCount={cardsCount} />
      </ProposalCard.BackButtonWrapper>
      <ProposalCard.ContentSpecialWrapper as="section">
        <ProposalAuthor author={proposal.author} />
        <ProposalCard.Separator aria-hidden />
        <ProposalCard.Proposal>
          {proposal.content}
        </ProposalCard.Proposal>
        <Vote
          proposalId={proposal.id}
          votes={proposal.votes}
          proposalKey={proposal.proposalKey}
          index={index}
          currentIndex={currentIndex}
          goToNextCard={goToNextCard}
        />
      </ProposalCard.ContentSpecialWrapper>
    </ProposalCard>
  );
};
