/* @flow */
import * as React from 'react';
import type { SignUpCardConfig, SignUpCardWording } from 'Src/types/card';
import i18next from 'i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import SignUpCardAuthentification from 'Src/containers/ProposalCard/SignUpCard/Authentification';
import SignUpTitle from './Title';
import SkipSignUpButton from './Button';
import ProgressBarComponent from '../ProgressBar';
import ProposalCard from '../Styled';

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
  skipSignUpCard: () => void
}

/**
 * Renders Sign Up Card
 */
const SignUpCardComponent = (props: Props) => {
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
    zindex
  } = props;

  return (
    <ProposalCard
      position={position}
      scale={scale}
      zindex={zindex}
      isCardCollapsed={index < currentIndex}
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
          <header>
            <SignUpTitle title={configuration.customTitle && wording.title} />
          </header>
          <ProposalCard.SecondaryTitle>
            {i18next.t('sign_up_card.authentification-text')}
          </ProposalCard.SecondaryTitle>
          <SignUpCardAuthentification
            tabIndex={tabIndex}
          />
          <SkipSignUpButton
            tabIndex={tabIndex}
            skipSignUpCard={skipSignUpCard}
            wording={configuration.customNextCTA && wording.nextCTA}
          />
        </ProposalCard.InnerContent>
      </ProposalCard.ContentWrapper>
    </ProposalCard>
  );
};

export default SignUpCardComponent;
