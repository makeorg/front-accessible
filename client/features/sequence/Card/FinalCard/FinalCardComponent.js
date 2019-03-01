// @flow
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { type FinalCardConfig } from 'Shared/types/card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { ProgressCircleComponent } from 'Client/ui/ProgressCircle';
import { FinalTitle } from './Title';
import { Sharing } from './Sharing';
import { More } from './More';
import { ProposalCardStyle } from '../Styled';
import {
  BackButtonWrapperStyle,
  BackButtonStyle,
  BackIconStyle,
} from '../Styled/Buttons';
import {
  ContentWrapperStyle,
  InnerContentStyle,
  FinalCardContentWrapperStyle,
} from '../Styled/Content';

type Props = {
  /** Object with Static properties used to configure the Final Card */
  configuration: FinalCardConfig,
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
  handleEndSequence: () => void,
};

/**
 * Renders Final Card of the Sequence
 */
export const FinalCardComponent = (props: Props) => {
  const {
    configuration,
    cardsCount,
    index,
    currentIndex,
    cardOffset,
    position,
    scale,
    zindex,
    tabIndex,
    goToPreviousCard,
    handleEndSequence,
  } = props;

  return (
    <ProposalCardStyle
      position={position}
      scale={scale}
      zindex={zindex}
      className={index < currentIndex ? 'collpased-card' : ''}
    >
      <BackButtonWrapperStyle>
        <BackButtonStyle tabIndex={tabIndex} onClick={goToPreviousCard}>
          <BackIconStyle>
            <FontAwesomeIcon aria-hidden icon={faArrowLeft} />
          </BackIconStyle>
          {i18n.t('proposal_card.previous')}
        </BackButtonStyle>
        <ProgressCircleComponent
          cardOffset={cardOffset}
          index={index}
          cardsCount={cardsCount}
        />
      </BackButtonWrapperStyle>
      <ContentWrapperStyle>
        <InnerContentStyle as="section">
          <FinalTitle title={configuration.title} />
          <FinalCardContentWrapperStyle>
            {configuration.withSharing && (
              <Sharing text={configuration.share} tabIndex={tabIndex} />
            )}
            <More
              title={configuration.learnMoreTitle}
              buttonText={configuration.learnMoreTextButton}
              url={configuration.linkUrl}
              tabIndex={tabIndex}
              handleEndSequence={handleEndSequence}
            />
          </FinalCardContentWrapperStyle>
        </InnerContentStyle>
      </ContentWrapperStyle>
    </ProposalCardStyle>
  );
};
