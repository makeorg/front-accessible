// @flow
import * as React from 'react';
import i18next from 'i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import ProgressBarComponent from '../ProgressBar';
import FinalTitle from './Title';
import Sharing from './Sharing';
import { More } from './More';
import ProposalCard from '../Styled';

type Props = {
  /** Total of cards */
  cardsCount: number,
  /** Index of the card */
  index: number,
  /** Incremented / Decremented Index */
  currentIndex: number,
  /** Offset of cards without pagination (introCard) */
  cardOffset: number,
  /** Position of the card */
  position: number,
  /** Scale property used by Styled Component */
  scale: number,
  /** Zindex property used by Styled Component */
  zindex: number,
  /** Tabindex for interactive items */
  tabIndex: number,
  /** Method called when previous card button is clicked  */
  goToPreviousCard: () => void,
  /** Method called when button is clicked */
  handleEndSequence: () => void
}

/**
 * Renders Final Card of the Sequence
 */
const FinalCardComponent = (props: Props) => {
  const {
    finalCardConfig,
    finalCardWording,
    cardsCount,
    index,
    currentIndex,
    cardOffset,
    position,
    scale,
    zindex,
    tabIndex,
    goToPreviousCard,
    handleEndSequence
  } = props;

  return (
    <ProposalCard
      position={position}
      scale={scale}
      zindex={zindex}
      className={index < currentIndex ? 'collpased-card' : ''}
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
        <ProgressBarComponent cardOffset={cardOffset} index={index} cardsCount={cardsCount} />
      </ProposalCard.BackButtonWrapper>
      <ProposalCard.ContentWrapper>
        <ProposalCard.InnerContent as="section">
          <FinalTitle title={finalCardConfig.customTitle && finalCardWording.title} />
          <ProposalCard.FinalCardContentWrapper>
            <Sharing wording={finalCardConfig.withSharing && finalCardWording.share} />
            <More
              configuration={finalCardConfig}
              wording={finalCardWording}
              tabIndex={tabIndex}
              handleEndSequence={handleEndSequence}
            />
          </ProposalCard.FinalCardContentWrapper>
        </ProposalCard.InnerContent>
      </ProposalCard.ContentWrapper>
    </ProposalCard>
  );
};

export default FinalCardComponent;
