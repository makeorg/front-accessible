// @flow
import React from 'react';
import { useDispatch } from 'react-redux';
import { i18n } from 'Shared/i18n';
import { modalShowForgotPassword } from 'Shared/store/actions/modal';
import { CustomErrorTriggerStyle } from 'Client/ui/Elements/Form/Styled/Errors';

type Props = {
  inputId?: string,
  labelText?: string,
};

export const ErrorMessageForgotPassword = ({
  inputId = 'password',
  labelText = i18n.t('common.form.label.password'),
}: Props) => {
  const dispatch = useDispatch();

  return (
    <>
      <span
        dangerouslySetInnerHTML={{
          __html: i18n.t(
            'profile.password_update.actual_password.invalid_password',
            {
              label: `<label for="${inputId}">${labelText.toLowerCase()}</label>`,
            }
          ),
        }}
      />
      <CustomErrorTriggerStyle
        onClick={() => dispatch(modalShowForgotPassword())}
      >
        {i18n.t('profile.password_update.actual_password.trigger')}
      </CustomErrorTriggerStyle>
    </>
  );
};
