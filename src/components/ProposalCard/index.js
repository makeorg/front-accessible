import * as React from 'react';
import i18next from 'i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import type { Proposal } from 'Types/proposal';
import VoteContainer from 'Containers/Vote';
import { getPosition, getScale, getZIndex } from 'Helpers/sequence';
import { ProposalAuthor } from 'Components/ProposalCard/ProposalAuthor';
import ProposalCard from './Styled';
import ProgressBarComponent from './ProgressBar';

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
const ProposalCardComponent = (props: Props) => {
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
      className={index < currentIndex ? 'collapsed-card' : ''}
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
        <ProgressBarComponent index={index} cardOffset={cardOffset} cardsCount={cardsCount} />
      </ProposalCard.BackButtonWrapper>
      <ProposalCard.ContentWrapper as="section">
        <ProposalAuthor author={proposal.author} />
        <ProposalCard.Separator aria-hidden />
        <ProposalCard.Proposal>
          {proposal.content}
        </ProposalCard.Proposal>
        <VoteContainer
          proposalId={proposal.id}
          votes={proposal.votes}
          index={index}
          currentIndex={currentIndex}
          goToNextCard={goToNextCard}
        />
      </ProposalCard.ContentWrapper>
    </ProposalCard>
  );
};

export default ProposalCardComponent;
