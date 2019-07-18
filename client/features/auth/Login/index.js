// @flow
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { i18n } from 'Shared/i18n';
import { type TypeErrorObject } from 'Shared/types/api';
import { AuthentificationSocial } from 'Client/features/auth/Social';
import { login } from 'Shared/store/actions/authentification';
import { selectAuthentification } from 'Shared/store/selectors/user.selector';
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
import { throttle } from 'Shared/helpers/throttle';
import { LoginFormComponent } from './Form';
import { LoginStyle } from './Styled';

type Props = {
  /** Array with form errors */
  errors: TypeErrorObject[],
  /** Method called to display Register Form Modal */
  handleRegisterModal: () => void,
  /** Method called to display Forgot Password Form Modal */
  handleForgotPasswordModal: () => void,
  /** Method called when login form is submit */
  handleLogin: (string, string) => void,
};

export const LoginComponent = (props: Props) => {
  const { errors, handleRegisterModal, handleForgotPasswordModal } = props;
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleChange = event => {
    const { id, value } = event.target;

    if (id === 'email') {
      setEmail(value);
    }

    if (id === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const { handleLogin } = props;
    if (email && password) {
      handleLogin(email, password);
    }
  };

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
      <LoginFormComponent
        email={email}
        password={password}
        errors={errors}
        handleChange={handleChange}
        handleSubmit={throttle(handleSubmit)}
      />
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

const mapStateToProps = state => {
  const { errors } = selectAuthentification(state);

  return { errors };
};

const mapDispatchToProps = dispatch => ({
  handleLogin: (email, password) => {
    dispatch(login(email, password));
  },
  handleRegisterModal: () => {
    dispatch(modalShowRegister());
  },
  handleForgotPasswordModal: () => {
    dispatch(modalShowForgotPassword());
  },
});

export const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);
