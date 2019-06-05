// @flow
import React from 'react';
import { type SignUpCardConfig } from 'Shared/types/card';
import { i18n } from 'Shared/i18n';
import { SignUpCardAuthentificationContainer } from 'Client/features/sequence/Card/SignUpCard/Authentification';
import { SignUpTitle } from './Title';
import { SkipSignUpButton } from './Button';
import { ContentWrapperStyle, InnerContentStyle } from '../Styled/Content';
import { SecondaryTitleStyle } from '../Styled/Titles';

type Props = {
  /** Object with Static properties used to configure the Sign Up Card */
  configuration: SignUpCardConfig,
  /** Method called when next card button is clicked */
  skipSignUpCard: () => void,
};

/**
 * Renders Sign Up Card
 */
export const SignUpCardComponent = (props: Props) => {
  const { configuration, skipSignUpCard } = props;

  return (
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
  );
};
