import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import type { ProposalType } from 'Shared/types/proposal';
import { Vote } from 'Client/features/vote';
import { getPosition, getScale, getZIndex } from 'Shared/helpers/sequence';
import { ProposalAuthor } from 'Client/features/proposal/ProposalAuthor';
import { ProgressCircleComponent } from 'Client/ui/ProgressCircle';
import { ProposalCardStyle, ProposalStyle } from '../Styled';
import { BackButtonWrapperStyle, BackButtonStyle, BackIconStyle } from '../Styled/Buttons';
import { ContentSpecialWrapperStyle, SeparatorStyle } from '../Styled/Content';

type Props = {
  /** Object with all proposal's properties */
  proposal: ProposalType,
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
    <ProposalCardStyle
      position={position}
      scale={scale}
      zindex={zindex}
      isCardCollapsed={index < currentIndex}
      id={`proposal-card-${index}`}
    >
      <BackButtonWrapperStyle>
        <BackButtonStyle
          tabIndex={tabIndex}
          onClick={goToPreviousCard}
        >
          <BackIconStyle>
            <FontAwesomeIcon aria-hidden icon={faArrowLeft} />
          </BackIconStyle>
          {i18n.t('proposal_card.previous')}
        </BackButtonStyle>
        <ProgressCircleComponent index={index} cardOffset={cardOffset} cardsCount={cardsCount} />
      </BackButtonWrapperStyle>
      <ContentSpecialWrapperStyle as="section">
        <ProposalAuthor author={proposal.author} />
        <SeparatorStyle aria-hidden />
        <ProposalStyle>
          {proposal.content}
        </ProposalStyle>
        <Vote
          proposalId={proposal.id}
          votes={proposal.votes}
          proposalKey={proposal.proposalKey}
          index={index}
          currentIndex={currentIndex}
          goToNextCard={goToNextCard}
        />
      </ContentSpecialWrapperStyle>
    </ProposalCardStyle>
  );
};
