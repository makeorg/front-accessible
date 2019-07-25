// @flow
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { i18n } from 'Shared/i18n';
import { PASSWORD_UPDATE_FORMNAME } from 'Shared/constants/form';
import { PasswordInput } from 'Client/ui/Elements/Form/PasswordInput';
import { SubmitButton } from 'Client/ui/Elements/Form/SubmitButton';
import { PasswordFieldIcon, SubmitThumbsUpIcon } from 'Shared/constants/icons';
import { ErrorMessageStyle } from 'Client/ui/Elements/Form/Styled/Errors';
import { SuccessMessageStyle } from 'Client/ui/Elements/Form/Styled/Success';
import { RedLinkButtonStyle } from 'Client/ui/Elements/ButtonElements';
import { TileWithTitle } from 'Client/ui/Elements/TileWithTitle';
import { getUser } from 'Shared/store/actions/authentification';
import { modalShowForgotPassword } from 'Shared/store/actions/modal';
import * as UserService from 'Shared/services/User';
import { throttle } from 'Shared/helpers/throttle';
import { FormRequirementsStyle } from 'Client/ui/Elements/Form/Styled/Content';
import { FormErrors } from 'Client/ui/Elements/Form/Errors';

type Props = {
  /** Id of the User */
  userId: string,
  /** User has a password */
  hasPassword: boolean,
  /** Method to handle User update */
  handleGetUser: () => void,
  /** Method to handle forgot password modal */
  handleForgotPasswordModal: () => void,
};

type TypePasswordValues = {
  newPassword: string,
  actualPassword: string,
};

export const UpdatePasswordComponent = ({
  userId,
  hasPassword,
  handleGetUser,
  handleForgotPasswordModal,
}: Props) => {
  const [formValues, setFormValues] = useState<TypePasswordValues>({
    newPassword: '',
    actualPassword: '',
  });
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState<boolean>(false);
  const [canSubmit, setCanSubmit] = useState<boolean>(false);
  const [errors, setErrors] = useState<TypeErrorObject[]>({
    field: '',
    message: '',
  });

  const handleChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFormValues({
      ...formValues,
      [id]: value,
    });

    setCanSubmit(true);
  };

  const handleSubmit = async (
    event: SyntheticInputEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();

    if (canSubmit) {
      try {
        await UserService.updatePassword(userId, formValues, hasPassword);
        setFormValues({
          newPassword: '',
          actualPassword: '',
        });
        handleGetUser();
        setCanSubmit(false);
      } catch (serviceErrors) {
        console.log(serviceErrors);
        setErrors(serviceErrors);
      }
    }
  };

  return (
    <TileWithTitle title={i18n.t('profile.password_update.title')}>
      <form
        noValidate
        id={PASSWORD_UPDATE_FORMNAME}
        onSubmit={throttle(handleSubmit)}
      >
        <FormRequirementsStyle>
          {i18n.t('common.form.requirements')}
        </FormRequirementsStyle>
        <FormErrors errors={errors} />
        {hasPassword && (
          <React.Fragment>
            <PasswordInput
              label={i18n.t('profile.password_update.password_placeholder')}
              name="actualPassword"
              id="actualPassword"
              icon={PasswordFieldIcon}
              value={formValues.actualPassword}
              handleChange={throttle(handleChange)}
            />
            {errors.actualPassword && (
              <ErrorMessageStyle id="update-password-actualPassword-error">
                {i18n.t('profile.password_update.wrong_password')}
                <RedLinkButtonStyle onClick={handleForgotPasswordModal}>
                  {i18n.t('profile.password_update.reset_password_cta')}
                </RedLinkButtonStyle>
              </ErrorMessageStyle>
            )}
          </React.Fragment>
        )}
        <PasswordInput
          label={i18n.t('profile.password_update.newpassword_placeholder')}
          name="newPassword"
          id="newPassword"
          icon={PasswordFieldIcon}
          value={formValues.newPassword}
          handleChange={throttle(handleChange)}
        />
        {isSubmitSuccessful && (
          <SuccessMessageStyle>
            {i18n.t('profile.common.submit_success')}
          </SuccessMessageStyle>
        )}
        <SubmitButton
          disabled={!canSubmit}
          formName={PASSWORD_UPDATE_FORMNAME}
          icon={SubmitThumbsUpIcon}
          label={i18n.t('profile.common.submit_label')}
        />
      </form>
    </TileWithTitle>
  );
};

const mapDispatchToProps = dispatch => ({
  handleGetUser: () => {
    dispatch(getUser());
  },
  handleForgotPasswordModal: () => {
    dispatch(modalShowForgotPassword());
  },
});

export const UpdatePassword = connect(
  null,
  mapDispatchToProps
)(UpdatePasswordComponent);
