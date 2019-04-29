/* @flow */
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { type ErrorObject as TypeErrorObject } from 'Shared/types/api';
import { AuthentificationSocial } from 'Client/features/auth/Social';
import {
  SecondLevelTitleStyle,
  ThirdLevelTitleStyle,
} from 'Client/ui/Elements/TitleElements';
import {
  ExtraParagraphStyle,
  ExtraAltParagraphStyle,
} from 'Client/ui/Elements/Form/Styled/Content';
import {
  SmallSeparatorWithMarginStyle,
  LargeSeparatorStyle,
  SeparatorWrapperStyle,
  TextSeparatorStyle,
} from 'Client/ui/Elements/Separators';
import { RedLinkButtonStyle } from 'Client/ui/Elements/ButtonElements';
import { LoginFormComponent } from './Form';
import { LoginStyle } from './Styled';

type Props = {
  /** User's email */
  email: string,
  /** User's password */
  password: string,
  /** Array with form errors */
  errors: TypeErrorObject[],
  /** Method called when field's value changes */
  handleChange: (event: SyntheticInputEvent<HTMLInputElement>) => void,
  /** Method called when field's value is submitted */
  handleSubmit: (event: SyntheticEvent<HTMLButtonElement>) => void,
  /** Method called to render Register Component in Modal */
  handleRegisterModal: () => void,
  /** Method called to render ForgotPassword Component in Modal */
  handleForgotPasswordModal: () => void,
};

/**
 * Renders Login component
 */
export const LoginComponent = (props: Props) => {
  const { handleRegisterModal, handleForgotPasswordModal } = props;

  return (
    <LoginStyle role="region" aria-labelledby="login_title">
      <SecondLevelTitleStyle id="login_title">
        {i18n.t('login.title')}
      </SecondLevelTitleStyle>
      <SmallSeparatorWithMarginStyle />
      <ThirdLevelTitleStyle>
        {i18n.t('login.social_connect')}
      </ThirdLevelTitleStyle>
      <AuthentificationSocial />
      <SeparatorWrapperStyle>
        <LargeSeparatorStyle />
        <TextSeparatorStyle>{i18n.t('login.or')}</TextSeparatorStyle>
        <LargeSeparatorStyle />
      </SeparatorWrapperStyle>
      <ThirdLevelTitleStyle>
        {i18n.t('login.email_connect')}
      </ThirdLevelTitleStyle>
      <LoginFormComponent {...props} />
      <ExtraParagraphStyle>
        {i18n.t('login.forgot_password_title')}
        <RedLinkButtonStyle onClick={handleForgotPasswordModal}>
          {i18n.t('login.forgot_password_link')}
        </RedLinkButtonStyle>
      </ExtraParagraphStyle>
      <ExtraAltParagraphStyle>
        {i18n.t('login.registration_title')}
        <RedLinkButtonStyle onClick={handleRegisterModal}>
          {i18n.t('login.registration_link')}
        </RedLinkButtonStyle>
      </ExtraAltParagraphStyle>
    </LoginStyle>
  );
};
