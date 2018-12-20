// @flow
import * as React from 'react';
import i18next from 'i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { CenterColumn } from 'Components/Elements/FlexElements';
import ProgressBarComponent from '../ProgressBar';
import ProposalCard from '../Styled';

type Props = {
  /** Link of the consultation */
  linkUrl: string,
  /** Total of cards */
  cardsCount: number,
  /** Index of the card */
  index: number,
  /** Incremented / Decremented Index */
  currentIndex: number,
  /** Position of the card */
  position: number,
  /** Scale property used by Styled Component */
  scale: number,
  /** Zindex property used by Styled Component */
  zindex: number,
  /** Tabindex for interactive items */
  tabIndex: number,
  /** Method called when previous card button is clicked  */
  goToPreviousCard: Function,
  /** Method called when button is clicked */
  handleEndSequence: Function
}

/**
 * Renders Final Card of the Sequence
 */
const FinalCardComponent = (props: Props) => {
  const {
    linkUrl,
    cardsCount,
    index,
    currentIndex,
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
        <ProgressBarComponent index={index} cardsCount={cardsCount} />
      </ProposalCard.BackButtonWrapper>
      <ProposalCard.InnerContent>
        <CenterColumn as="section">
          <ProposalCard.FinalParagraph dangerouslySetInnerHTML={{ __html: i18next.t('final_card.title') }} />
          <ProposalCard.FinalLink
            as="a"
            tabIndex={tabIndex}
            href={linkUrl}
            target="_blank"
            onClick={handleEndSequence}
          >
            {i18next.t('final_card.button')}
          </ProposalCard.FinalLink>
        </CenterColumn>
      </ProposalCard.InnerContent>
    </ProposalCard>
  );
};

export default FinalCardComponent;
