import React from 'react';
import i18next from 'i18next';
import RegisterFormComponent from './Form';
import Register from './Styled';
import FacebookAuthentificationLinkComponent from '../Authentification/Social/FacebookAuthentification/Link';
import GoogleAuthentificationLinkComponent from '../Authentification/Social/GoogleAuthentification/Link';
import { SecondLevelTitle, ThirdLevelTtitle } from '../Elements/TitleElements';
import * as Separators from '../Elements/Separators';
import { RedLinkButton } from '../Elements/ButtonElements';
import { ExtraParagraph } from '../Elements/Form';

class RegisterComponent extends React.Component {
  render() {
    const {
      handleLoginPannel,
      isPannelOpen,
      trackFacebookSignUpLink,
      trackGoogleSignUpLink
    } = this.props;
    return (
      <Register role="region" aria-labelledby="register_title">
        <SecondLevelTitle id="register_title">
          {i18next.t('register.title')}
        </SecondLevelTitle>
        <Separators.Small />
        <ThirdLevelTtitle>
          {i18next.t('register.social_connect')}
          &nbsp;
          <FacebookAuthentificationLinkComponent
            tabIndex={isPannelOpen ? 0 : -1}
            handleTracking={trackFacebookSignUpLink}
          />
          &nbsp;
          {i18next.t('register.or')}
          &nbsp;
          <GoogleAuthentificationLinkComponent
            tabIndex={isPannelOpen ? 0 : -1}
            handleTracking={trackGoogleSignUpLink}
          />
        </ThirdLevelTtitle>
        <Separators.Wrapper>
          <Separators.Large />
          <Separators.Text>ou</Separators.Text>
          <Separators.Large />
        </Separators.Wrapper>
        <ThirdLevelTtitle>
          {i18next.t('register.subtitle')}
        </ThirdLevelTtitle>
        <RegisterFormComponent {...this.props} />
        <ExtraParagraph>
          {i18next.t('register.login_title')}
          <RedLinkButton onClick={handleLoginPannel} tabIndex={isPannelOpen ? 0 : -1}>
            {i18next.t('register.login_link')}
          </RedLinkButton>
        </ExtraParagraph>
      </Register>
    );
  }
}

export default RegisterComponent;
