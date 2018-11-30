/* @flow */

import * as React from 'react';
import i18next from 'i18next';
import LoginFormComponent from './Form';
import Login from './Styled';
import AuthentificationSocialContainer from '../../containers/Authentification/Social';
import { SecondLevelTitle, ThirdLevelTtitle } from '../Elements/TitleElements';
import { ExtraParagraph, ExtraAltParagraph } from '../Elements/Form';
import * as Separators from '../Elements/Separators';
import { RedLinkButton } from '../Elements/ButtonElements';


type Props = {
  isPannelOpen: boolean,
  handleRegisterPannel: Function,
  handleForgotPasswordPannel: Function
};

const LoginComponent = (props: Props) => {
  const {
    isPannelOpen,
    handleRegisterPannel,
    handleForgotPasswordPannel
  } = props;

  return (
    <Login role="region" aria-labelledby="login_title">
      <SecondLevelTitle id="login_title">
        {i18next.t('login.title')}
      </SecondLevelTitle>
      <Separators.Small />
      <ThirdLevelTtitle>
        {i18next.t('login.social_connect')}
      </ThirdLevelTtitle>
      <AuthentificationSocialContainer
        tabIndex={isPannelOpen ? 0 : -1}
      />
      <Separators.Wrapper>
        <Separators.Large />
        <Separators.Text>ou</Separators.Text>
        <Separators.Large />
      </Separators.Wrapper>
      <ThirdLevelTtitle>
        {i18next.t('login.email_connect')}
      </ThirdLevelTtitle>
      <LoginFormComponent {...props} />
      <ExtraParagraph>
        {i18next.t('login.forgot_password_title')}
        <RedLinkButton
          tabIndex={isPannelOpen ? 0 : -1}
          onClick={handleForgotPasswordPannel}
        >
          {i18next.t('login.forgot_password_link')}
        </RedLinkButton>
      </ExtraParagraph>
      <ExtraAltParagraph>
        {i18next.t('login.registration_title')}
        <RedLinkButton
          tabIndex={isPannelOpen ? 0 : -1}
          onClick={handleRegisterPannel}
        >
          {i18next.t('login.registration_link')}
        </RedLinkButton>
      </ExtraAltParagraph>
    </Login>
  );
};

export default LoginComponent;
