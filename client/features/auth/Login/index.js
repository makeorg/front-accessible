// @flow
import React from 'react';
import { connect } from 'react-redux';
import { i18n } from 'Shared/i18n';
import { AuthentificationSocial } from 'Client/features/auth/Social';
import {
  modalShowRegister,
  modalShowForgotPassword,
} from 'Shared/store/actions/modal';
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
import { LoginForm } from './Form';
import { LoginStyle } from './Styled';

type Props = {
  /** Method called to display Register Form Modal */
  handleRegisterModal: () => void,
  /** Method called to display Forgot Password Form Modal */
  handleForgotPasswordModal: () => void,
};

export const LoginComponent = ({
  handleRegisterModal,
  handleForgotPasswordModal,
}: Props) => {
  return (
    <LoginStyle aria-labelledby="login_title">
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
      <LoginForm />
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

const mapDispatchToProps = dispatch => ({
  handleRegisterModal: () => {
    dispatch(modalShowRegister());
  },
  handleForgotPasswordModal: () => {
    dispatch(modalShowForgotPassword());
  },
});

export const Login = connect(
  null,
  mapDispatchToProps
)(LoginComponent);
