/* @flow */
import * as React from 'react';
import i18next from 'i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  EmailButton,
  IconInButton,
  SmallButtonsWrapper,
  RedLinkButton
} from 'Components/Elements/ButtonElements';
import { CenterColumn } from 'Components/Elements/FlexElements';
import { ExtraAltParagraph } from 'Components/Elements/Form';
import FacebookAuthentificationButtonComponent
  from 'Components/Authentification/Social/FacebookAuthentification/Button';
import GoogleAuthentificationButtonComponent from 'Components/Authentification/Social/GoogleAuthentification/Button';

type Props = {
  handleRegisterClick: Function,
  handleLoginClick: Function,
  tabIndex: number
}

const SignUpCardAuthentificationComponent = (props: Props) => {
  const {
    handleRegisterClick,
    handleLoginClick,
    tabIndex
  } = props;

  return (
    <CenterColumn>
      <SmallButtonsWrapper>
        <FacebookAuthentificationButtonComponent
          tabIndex={tabIndex}
        />
        <GoogleAuthentificationButtonComponent
          tabIndex={tabIndex}
        />
        <EmailButton
          onClick={handleRegisterClick}
          tabIndex={tabIndex}
          id="authentification-register-button"
        >
          <IconInButton>
            <FontAwesomeIcon aria-hidden icon={faEnvelope} />
          </IconInButton>
          {i18next.t('common.email')}
        </EmailButton>
      </SmallButtonsWrapper>
      <ExtraAltParagraph>
        {i18next.t('register.login_title')}
        <RedLinkButton
          tabIndex={tabIndex}
          onClick={handleLoginClick}
        >
          {i18next.t('register.login_link')}
        </RedLinkButton>
      </ExtraAltParagraph>
    </CenterColumn>
  );
};

export default SignUpCardAuthentificationComponent;
