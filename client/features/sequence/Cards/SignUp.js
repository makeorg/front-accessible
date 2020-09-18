// @flow
import React, { useEffect } from 'react';
import { type SignUpCardConfigType } from 'Shared/types/card';
import {
  trackSkipSignUpCard,
  trackDisplaySignUpCard,
} from 'Shared/services/Tracking';
import { i18n } from 'Shared/i18n';

import {
  RedLinkButtonStyle,
  ForwardIconStyle,
} from 'Client/ui/Elements/Buttons/style';
import { CenterColumnStyle } from 'Client/ui/Elements/FlexElements';
import { useDispatch } from 'react-redux';
import { modalShowLogin } from 'Shared/store/actions/modal';
import { incrementSequenceIndex } from 'Shared/store/actions/sequence';
import { AuthenticationRegisterButtons } from 'Client/features/auth/Register/Buttons';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import { SequenceAltTitleStyle, SequenceSignUpNextButtonStyle } from './style';

type Props = {
  /** Object with Static properties used to configure the Sign Up Card */
  configuration: SignUpCardConfigType,
};

/**
 * Handles Sign Up Card Business Logic
 */
export const SignUpCard = ({ configuration }: Props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    trackDisplaySignUpCard();
  }, []);

  return (
    <>
      <SequenceAltTitleStyle>
        {configuration.title
          ? configuration.title
          : i18n.t('sign_up_card.title')}
      </SequenceAltTitleStyle>
      <ParagraphStyle>
        {i18n.t('sign_up_card.authentication-text')}
      </ParagraphStyle>
      <CenterColumnStyle>
        <AuthenticationRegisterButtons />
        <RedLinkButtonStyle onClick={() => dispatch(modalShowLogin())}>
          {i18n.t('sign_up_card.authentication-link')}
        </RedLinkButtonStyle>
      </CenterColumnStyle>
      <SequenceSignUpNextButtonStyle
        onClick={() => {
          trackSkipSignUpCard();
          dispatch(incrementSequenceIndex());
        }}
        data-cy-button="skip-sign-up"
      >
        <ForwardIconStyle aria-hidden />
        {configuration.nextCtaText
          ? configuration.nextCtaText
          : i18n.t('sign_up_card.next-cta')}
      </SequenceSignUpNextButtonStyle>
    </>
  );
};
