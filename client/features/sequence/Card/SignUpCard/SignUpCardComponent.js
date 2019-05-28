/* @flow */
import * as React from 'react';
import { type SignUpCardConfig } from 'Shared/types/card';
import { i18n } from 'Shared/i18n';
import { SignUpCardAuthentificationContainer } from 'Client/features/sequence/Card/SignUpCard/Authentification';
import { SignUpTitle } from './Title';
import { SkipSignUpButton } from './Button';
import { ProposalCardStyle } from '../Styled';
import { ContentWrapperStyle, InnerContentStyle } from '../Styled/Content';
import { SecondaryTitleStyle } from '../Styled/Titles';
import { CardDescription } from '../../Description';
import { CardHeader } from '../../Header';

type Props = {
  /** Object with Static properties used to configure the Sign Up Card */
  configuration: SignUpCardConfig,
  /** Index of the card */
  index: number,
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
  /** Boolean toggled when card user has skip the card */
  isCardCollapsed: boolean,
  /** Boolean toggled when card is visible / hidden */
  isCardVisible: boolean,
};

/**
 * Renders Sign Up Card
 */
export const SignUpCardComponent = (props: Props) => {
  const {
    configuration,
    index,
    isCardCollapsed,
    isCardVisible,
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
      isCardCollapsed={isCardCollapsed}
      isCardVisible={isCardVisible}
      aria-hidden={!isCardVisible}
    >
      <CardDescription
        index={index}
        cardsCount={cardsCount}
        cardOffset={cardOffset}
        goToPreviousCard={goToPreviousCard}
      />
      <ContentWrapperStyle as="dd">
        <CardHeader
          index={index}
          cardsCount={cardsCount}
          cardOffset={cardOffset}
          goToPreviousCard={goToPreviousCard}
        />
        <ContentWrapperStyle>
          <InnerContentStyle>
            <header>
              <SignUpTitle title={configuration.title} />
            </header>
            <SecondaryTitleStyle as="p">
              {i18n.t('sign_up_card.authentification-text')}
            </SecondaryTitleStyle>
            <SignUpCardAuthentificationContainer />
            <SkipSignUpButton
              skipSignUpCard={skipSignUpCard}
              text={configuration.nextCtaText}
            />
          </InnerContentStyle>
        </ContentWrapperStyle>
      </ContentWrapperStyle>
    </ProposalCardStyle>
  );
};
