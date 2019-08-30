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
  FourthLevelTitleStyle,
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
import { AuthentificationWrapperStyle } from './Styled';

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
    <AuthentificationWrapperStyle aria-labelledby="login_title">
      <SecondLevelTitleStyle id="login_title">
        {i18n.t('login.title')}
      </SecondLevelTitleStyle>
      <SmallSeparatorWithMarginStyle />
      <FourthLevelTitleStyle as="h3">
        {i18n.t('login.social_connect')}
      </FourthLevelTitleStyle>
      <AuthentificationSocial />
      <SeparatorWrapperStyle>
        <LargeSeparatorStyle />
        <TextSeparatorStyle>{i18n.t('login.or')}</TextSeparatorStyle>
        <LargeSeparatorStyle />
      </SeparatorWrapperStyle>
      <FourthLevelTitleStyle as="h3">
        {i18n.t('login.email_connect')}
      </FourthLevelTitleStyle>
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
    </AuthentificationWrapperStyle>
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
