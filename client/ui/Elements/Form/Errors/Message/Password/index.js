// @flow
import React from 'react';
import { connect } from 'react-redux';
import { i18n } from 'Shared/i18n';
import { modalShowForgotPassword } from 'Shared/store/actions/modal';
import { CustomErrorTriggerStyle } from 'Client/ui/Elements/Form/Styled/Errors';

type Props = {
  handleForgotPasswordModal: () => void,
  inputId?: string,
  labelText?: string,
};

export const ErrorMessageForgotPasswordComponent = ({
  handleForgotPasswordModal,
  inputId = 'password',
  labelText = i18n.t('common.form.label.password'),
}: Props) => {
  return (
    <React.Fragment>
      <span
        dangerouslySetInnerHTML={{
          __html: i18n.t(
            'profile.password_update.actual_password.invalid_password',
            {
              label: `<label for="${inputId}">${labelText}</label>`,
            }
          ),
        }}
      />
      <CustomErrorTriggerStyle onClick={handleForgotPasswordModal}>
        {i18n.t('profile.password_update.actual_password.trigger')}
      </CustomErrorTriggerStyle>
    </React.Fragment>
  );
};

const mapDispatchToProps = dispatch => ({
  handleForgotPasswordModal: () => {
    dispatch(modalShowForgotPassword());
  },
});

export const ErrorMessageForgotPassword = connect(
  null,
  mapDispatchToProps
)(ErrorMessageForgotPasswordComponent);
