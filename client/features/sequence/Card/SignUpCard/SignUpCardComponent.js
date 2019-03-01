/* @flow */
import * as React from 'react';
import {
  type SignUpCardConfig,
  type SignUpCardWording,
} from 'Shared/types/card';
import { i18n } from 'Shared/i18n';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { SignUpCardAuthentificationContainer } from 'Client/features/sequence/Card/SignUpCard/Authentification';
import { ProgressCircleComponent } from 'Client/ui/ProgressCircle';
import { SignUpTitle } from './Title';
import { SkipSignUpButton } from './Button';
import { ProposalCardStyle } from '../Styled';
import {
  BackButtonWrapperStyle,
  BackButtonStyle,
  BackIconStyle,
} from '../Styled/Buttons';
import { ContentWrapperStyle, InnerContentStyle } from '../Styled/Content';
import { SecondaryTitleStyle } from '../Styled/Titles';

type Props = {
  /** Object with Static properties used to configure the Sign Up Card */
  configuration: SignUpCardConfig,
  /** Object with Static properties used to customise the wording of the Sign Up Card */
  wording: SignUpCardWording,
  /** Index of the card */
  index: number,
  /** Tabindex for interactive items */
  tabIndex: number,
  /** Incremented / Decremented Index */
  currentIndex: number,
  /** Offset of cards without pagination (introCard) */
  cardOffset: number,
  /** Total of cards */
  cardsCount: number,
  /** Method called when previous card button is clicked  */
  goToPreviousCard: () => void,
  /** Position of the card */
  position: number,
  /** Scale property used by Styled Component */
  scale: number,
  /** Zindex property used by Styled Component */
  zindex: number,
  /** Method called when next card button is clicked */
  skipSignUpCard: () => void,
};

/**
 * Renders Sign Up Card
 */
export const SignUpCardComponent = (props: Props) => {
  const {
    configuration,
    wording,
    index,
    tabIndex,
    currentIndex,
    cardsCount,
    cardOffset,
    goToPreviousCard,
    skipSignUpCard,
    position,
    scale,
    zindex,
  } = props;

  return (
    <ProposalCardStyle
      position={position}
      scale={scale}
      zindex={zindex}
      isCardCollapsed={index < currentIndex}
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
          <header>
            <SignUpTitle title={configuration.customTitle && wording.title} />
          </header>
          <SecondaryTitleStyle>
            {i18n.t('sign_up_card.authentification-text')}
          </SecondaryTitleStyle>
          <SignUpCardAuthentificationContainer tabIndex={tabIndex} />
          <SkipSignUpButton
            tabIndex={tabIndex}
            skipSignUpCard={skipSignUpCard}
            wording={configuration.customNextCTA && wording.nextCTA}
          />
        </InnerContentStyle>
      </ContentWrapperStyle>
    </ProposalCardStyle>
  );
};
