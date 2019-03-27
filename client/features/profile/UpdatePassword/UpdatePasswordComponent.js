import React from 'react';
import { SecondLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
import { PasswordInput } from 'Client/ui/Elements/Form/PasswordInput';
import { SubmitButton } from 'Client/ui/Elements/Form/SubmitButton';
import { PASSWORD_UPDATE_FORMNAME } from 'Shared/constants/form';
import { i18n } from 'Shared/i18n';
import { PasswordFieldIcon, SubmitThumbsUpIcon } from 'Shared/constants/icons';

type Props = {
  handlePassword: () => void,
  handleNewPassword: () => void,
  handleSubmit: () => void,
  disableSubmit: boolean,
  password?: string,
  newPassword?: string,
};

export const UpdatePasswordComponent = ({
  handlePassword,
  handleNewPassword,
  handleSubmit,
  disableSubmit,
  password,
  newPassword,
}: Props) => {
  return (
    <form id={PASSWORD_UPDATE_FORMNAME} onSubmit={handleSubmit}>
      <SecondLevelTitleStyle>
        {i18n.t('profile.password_update.title')}
      </SecondLevelTitleStyle>
      {i18n.t('profile.password_update.password_label')}
      <PasswordInput
        label={i18n.t('profile.password_update.password_placeholder')}
        name="password"
        icon={PasswordFieldIcon}
        value={password}
        handleChange={handlePassword}
      />
      {i18n.t('profile.password_update.newpassword_label')}
      <PasswordInput
        label={i18n.t('profile.password_update.newpassword_placeholder')}
        name="new"
        icon={PasswordFieldIcon}
        value={newPassword}
        handleChange={handleNewPassword}
      />
      <SubmitButton
        disabled={disableSubmit}
        formName="formName"
        icon={SubmitThumbsUpIcon}
        label={i18n.t('profile.password_update.submit_label')}
      />
    </form>
  );
};

UpdatePasswordComponent.defaultProps = {
  password: undefined,
  newPassword: undefined,
};
