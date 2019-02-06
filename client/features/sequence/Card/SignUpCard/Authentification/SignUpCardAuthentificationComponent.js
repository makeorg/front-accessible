/* @flow */
import * as React from 'react';
import i18next from 'i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  EmailButtonStyle,
  IconInButtonStyle,
  SmallButtonWrapperStyle,
  RedLinkButtonStyle
} from 'Client/ui/Elements/ButtonElements';
import { CenterColumnStyle } from 'Client/ui/Elements/FlexElements';
import { ExtraAltParagraphStyle } from 'Client/ui/Elements/Form/Styled';
import FacebookAuthentificationButtonComponent
  from 'Client/features/auth/Social/FacebookAuthentification/Button';
import GoogleAuthentificationButtonComponent from 'Client/features/auth/Social/GoogleAuthentification/Button';

type Props = {
  /** Method called to render Register Pannel */
  handleRegisterClick: () => void,
  /** Method called to render Login Pannel */
  handleLoginClick: () => void,
  /** Tabindex for interactive items */
  tabIndex: number
}

/**
 * Renders Authentification in Sign Up Card
 */
export const SignUpCardAuthentificationComponent = (props: Props) => {
  const {
    handleRegisterClick,
    handleLoginClick,
    tabIndex
  } = props;

  return (
    <CenterColumnStyle>
      <SmallButtonWrapperStyle>
        <FacebookAuthentificationButtonComponent
          tabIndex={tabIndex}
        />
        <GoogleAuthentificationButtonComponent
          tabIndex={tabIndex}
        />
        <EmailButtonStyle
          onClick={handleRegisterClick}
          tabIndex={tabIndex}
          id="authentification-register-button"
        >
          <IconInButtonStyle>
            <FontAwesomeIcon aria-hidden icon={faEnvelope} />
          </IconInButtonStyle>
          {i18next.t('common.email')}
        </EmailButtonStyle>
      </SmallButtonWrapperStyle>
      <ExtraAltParagraphStyle>
        {i18next.t('register.login_title')}
        <RedLinkButtonStyle
          tabIndex={tabIndex}
          onClick={handleLoginClick}
        >
          {i18next.t('register.login_link')}
        </RedLinkButtonStyle>
      </ExtraAltParagraphStyle>
    </CenterColumnStyle>
  );
};
