import React from 'react';
import { i18n } from 'Shared/i18n';
import { Passwords, PasswordsErrors } from 'Shared/types/user';
import { PASSWORD_UPDATE_FORMNAME } from 'Shared/constants/form';
import { PasswordInput } from 'Client/ui/Elements/Form/PasswordInput';
import { SubmitButton } from 'Client/ui/Elements/Form/SubmitButton';
import { PasswordFieldIcon, SubmitThumbsUpIcon } from 'Shared/constants/icons';
import { ErrorMessageStyle } from 'Client/ui/Elements/Form/Styled/Errors';
import { SuccessMessageStyle } from 'Client/ui/Elements/Form/Styled/Success';
import { RedLinkButtonStyle } from 'Client/ui/Elements/ButtonElements';
import { TileWithTitle } from 'Client/ui/Elements/TileWithTitle';

type Props = {
  /** Object of password values */
  passwords: Passwords,
  /** Object of password errors  */
  errors: PasswordsErrors,
  /** Boolean to check if user has password */
  hasPassword: boolean,
  /** Boolean to check if form is valid */
  formIsValid: boolean,
  /** Boolean to check if form is submitted successfully */
  submitDone: boolean,
  /** Method called when field's value changes */
  handleChange: (event: SyntheticInputEvent<HTMLInputElement>) => void,
  /** Method called when field's value is submitted */
  handleSubmit: (event: SyntheticEvent<HTMLButtonElement>) => void,
  /** Method to handle forgot password modal */
  handleForgotPasswordModal: () => void,
};

export const UpdatePasswordComponent = ({
  passwords,
  errors,
  formIsValid,
  hasPassword,
  submitDone,
  handleChange,
  handleSubmit,
  handleForgotPasswordModal,
}: Props) => {
  return (
    <TileWithTitle title={i18n.t('profile.password_update.title')}>
      <form id={PASSWORD_UPDATE_FORMNAME} onSubmit={handleSubmit}>
        {hasPassword && (
          <React.Fragment>
            <PasswordInput
              label={i18n.t('profile.password_update.password_placeholder')}
              name="actualPassword"
              id="actualPassword"
              icon={PasswordFieldIcon}
              value={passwords.actualPassword}
              errors={errors.actualPassword}
              handleChange={handleChange}
            />
            {errors.actualPassword && (
              <React.Fragment>
                {i18n.t('profile.password_update.wrong_password')}
                <RedLinkButtonStyle onClick={handleForgotPasswordModal}>
                  {i18n.t('profile.password_update.reset_password_cta')}
                </RedLinkButtonStyle>
              </React.Fragment>
            )}
          </React.Fragment>
        )}
        {errors.newPassword && (
          <ErrorMessageStyle id="update-password-newPassword-error">
            {errors.newPassword}
          </ErrorMessageStyle>
        )}
        <PasswordInput
          label={i18n.t('profile.password_update.newpassword_placeholder')}
          name="newPassword"
          id="newPassword"
          icon={PasswordFieldIcon}
          value={passwords.newPassword}
          errors={errors.newPassword}
          handleChange={handleChange}
        />
        {submitDone && (
          <SuccessMessageStyle>
            {i18n.t('profile.common.submit_success')}
          </SuccessMessageStyle>
        )}
        <SubmitButton
          disabled={!formIsValid}
          formName={PASSWORD_UPDATE_FORMNAME}
          icon={SubmitThumbsUpIcon}
          label={i18n.t('profile.common.submit_label')}
        />
      </form>
    </TileWithTitle>
  );
};
