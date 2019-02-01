/* @flow */
import * as React from 'react';
import i18next from 'i18next';
import type { ErrorObject } from 'Shared/types/form';
import { AuthentificationSocial } from 'Client/features/auth/Social';
import { SecondLevelTitle, ThirdLevelTtitle } from 'Client/ui/Elements/TitleElements';
import { ExtraParagraph, ExtraAltParagraph } from 'Client/ui/Elements/Form/Styled';
import * as Separators from 'Client/ui/Elements/Separators';
import { RedLinkButton } from 'Client/ui/Elements/ButtonElements';
import LoginFormComponent from './Form';
import Login from './Styled';

type Props = {
  /** User's email */
  email: string,
  /** User's password */
  password: string,
  /** Array with form errors */
  errors: Array<ErrorObject>,
  /** Method called when field's value changes */
  handleChange: Function,
  /** Method called when field's value is submitted */
  handleSubmit: Function,
  /** Boolean toggled when password shown / hidden */
  passwordIsDisplayed: boolean,
  /** Method called to show / encrypt password */
  togglePasswordIsDisplayed: () => void,
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
export const LoginComponent = (props: Props) => {
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
      <AuthentificationSocial
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
