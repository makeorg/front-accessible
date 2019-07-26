// @flow
import React from 'react';
import { connect } from 'react-redux';
import { i18n } from 'Shared/i18n';
import { ExtraAltParagraphStyle } from 'Client/ui/Elements/Form/Styled/Content';
import { SecondLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
import { SmallSeparatorWithMarginStyle } from 'Client/ui/Elements/Separators';
import { RedLinkButtonStyle } from 'Client/ui/Elements/ButtonElements';
import { modalShowLogin } from 'Shared/store/actions/modal';
import { ForgotPasswordForm } from './Form';
import { ForgotPasswordStyle } from './Styled';

type Props = {
  /** Method called to render Login Component in Modal */
  handleLoginModal: () => void,
};

/**
 * Renders Forgot Password component
 */
export const PasswordForgotComponent = ({ handleLoginModal }: Props) => {
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

const mapDispatchToProps = dispatch => ({
  handleLoginModal: () => {
    dispatch(modalShowLogin());
  },
});

export const PasswordForgot = connect(
  null,
  mapDispatchToProps
)(PasswordForgotComponent);
