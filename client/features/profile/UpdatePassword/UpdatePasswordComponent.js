import React from 'react';
import { i18n } from 'Shared/i18n';
import { Passwords } from 'Shared/types/user';
import { PASSWORD_UPDATE_FORMNAME } from 'Shared/constants/form';
import { PasswordInput } from 'Client/ui/Elements/Form/PasswordInput';
import { SubmitButton } from 'Client/ui/Elements/Form/SubmitButton';
import { PasswordFieldIcon, SubmitThumbsUpIcon } from 'Shared/constants/icons';
import { SubmitButtonWrapperStyle } from 'Client/ui/Elements/Form/Styled/Content';

type Props = {
  passwords: Passwords,
  /** Boolean to check that for is valid */
  formIsValid: boolean,
  /** Method called when field's value changes */
  handleChange: (event: SyntheticInputEvent<HTMLInputElement>) => void,
  /** Method called when field's value is submitted */
  handleSubmit: (event: SyntheticEvent<HTMLButtonElement>) => void,
};

export const UpdatePasswordComponent = ({
  passwords,
  formIsValid,
  handleChange,
  handleSubmit,
}: Props) => {
  return (
    <form id={PASSWORD_UPDATE_FORMNAME} onSubmit={handleSubmit}>
      {i18n.t('profile.password_update.password_label')}
      <PasswordInput
        label={i18n.t('profile.password_update.password_placeholder')}
        name="oldPassword"
        id="oldPassword"
        icon={PasswordFieldIcon}
        value={passwords.oldPassword}
        handleChange={handleChange}
      />
      {i18n.t('profile.password_update.newpassword_label')}
      <PasswordInput
        label={i18n.t('profile.password_update.newpassword_placeholder')}
        name="newPassword"
        id="newPassword"
        icon={PasswordFieldIcon}
        value={passwords.newPassword}
        handleChange={handleChange}
      />
      <SubmitButtonWrapperStyle>
        <SubmitButton
          disabled={!formIsValid}
          formName="formName"
          icon={SubmitThumbsUpIcon}
          label={i18n.t('profile.common.submit_label')}
        />
      </SubmitButtonWrapperStyle>
    </form>
  );
};
