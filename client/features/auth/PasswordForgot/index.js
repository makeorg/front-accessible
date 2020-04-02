// @flow
import React from 'react';
import { useDispatch } from 'react-redux';
import { i18n } from 'Shared/i18n';
import { ExtraAltParagraphStyle } from 'Client/ui/Elements/Form/Styled/Content';
import { SecondLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
import { SmallSeparatorWithMarginStyle } from 'Client/ui/Elements/Separators';
import { RedLinkButtonStyle } from 'Client/ui/Elements/Buttons/style';
import { modalShowLogin } from 'Shared/store/actions/modal';
import { ForgotPasswordForm } from './Form';
import { ForgotPasswordStyle } from './style';

/**
 * Renders Forgot Password component
 */
export const PasswordForgot = () => {
  const dispatch = useDispatch();

  const handleLoginModal = () => {
    dispatch(modalShowLogin());
  };

  return (
    <ForgotPasswordStyle aria-labelledby="forgot_password_title">
      <SecondLevelTitleStyle id="forgot_password_title">
        {i18n.t('forgot_password.title')}
      </SecondLevelTitleStyle>
      <SmallSeparatorWithMarginStyle />
      <ForgotPasswordForm />
      <ExtraAltParagraphStyle>
        {i18n.t('forgot_password.return')}
        <RedLinkButtonStyle onClick={handleLoginModal}>
          {i18n.t('forgot_password.login_link')}
        </RedLinkButtonStyle>
      </ExtraAltParagraphStyle>
    </ForgotPasswordStyle>
  );
};
