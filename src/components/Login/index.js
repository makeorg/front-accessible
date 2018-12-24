/* @flow */
import * as React from 'react';
import i18next from 'i18next';
import AuthentificationSocialContainer from 'Containers/Authentification/Social';
import { SecondLevelTitle, ThirdLevelTtitle } from 'Components/Elements/TitleElements';
import { ExtraParagraph, ExtraAltParagraph } from 'Components/Elements/Form';
import * as Separators from 'Components/Elements/Separators';
import { RedLinkButton } from 'Components/Elements/ButtonElements';
import LoginFormComponent from './Form';
import Login from './Styled';

type Props = {
  /** User's email */
  email: string,
  /** User's password */
  password: string,
  /** Array with form errors */
  errors: Array<string>,
  /** Method called when field's value changes */
  handleChange: Function,
  /** Method called when field's value is submitted */
  handleSubmit: Function,
  /** Boolean toggled when password shown / hidden */
  passwordIsDisplayed: boolean,
  /** Method called to show / encrypt password */
  togglePasswordIsDisplayed: boolean,
  /** Boolean toggled when Sliding pannel is opened / closed */
  isPannelOpen: boolean,
  /** Method called to render Register Component in Sliding Pannel */
  handleRegisterPannel: Function,
  /** Method called to render ForgotPassword Component in Sliding Pannel */
  handleForgotPasswordPannel: Function
};

/**
 * Renders Login component
 */
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
        <Separators.Text>{i18next.t('login.or')}</Separators.Text>
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
