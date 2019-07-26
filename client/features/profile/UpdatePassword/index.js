// @flow
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { i18n } from 'Shared/i18n';
import { type TypeErrorObject } from 'Shared/types/api';
import { PASSWORD_UPDATE_FORMNAME } from 'Shared/constants/form';
import { PasswordInput } from 'Client/ui/Elements/Form/PasswordInput';
import { SubmitButton } from 'Client/ui/Elements/Form/SubmitButton';
import { PasswordFieldIcon, SubmitThumbsUpIcon } from 'Shared/constants/icons';
import { SuccessMessageStyle } from 'Client/ui/Elements/Form/Styled/Success';
import { TileWithTitle } from 'Client/ui/Elements/TileWithTitle';
import { getUser } from 'Shared/store/actions/authentification';
import * as UserService from 'Shared/services/User';
import { throttle } from 'Shared/helpers/throttle';
import { FormRequirementsStyle } from 'Client/ui/Elements/Form/Styled/Content';
import { FormErrors } from 'Client/ui/Elements/Form/Errors';
import { getFieldError } from 'Shared/helpers/form';

type Props = {
  /** Id of the User */
  userId: string,
  /** User has a password */
  hasPassword: boolean,
  /** Method to handle User update */
  handleGetUser: () => void,
};

type TypePasswordValues = {
  newPassword: string,
  actualPassword: string,
};

export const UpdatePasswordComponent = ({
  userId,
  hasPassword,
  handleGetUser,
}: Props) => {
  const defaultFormValues = {
    newPassword: '',
    actualPassword: '',
  };
  const [formValues, setFormValues] = useState<TypePasswordValues>(
    defaultFormValues
  );
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState<boolean>(false);
  const [canSubmit, setCanSubmit] = useState<boolean>(false);
  const [errors, setErrors] = useState<TypeErrorObject[]>([]);
  const actualPasswordError = getFieldError('password', errors);
  const newPasswordError = getFieldError('newPassword', errors);

  const handleChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFormValues({
      ...formValues,
      [id]: value,
    });

    setCanSubmit(true);
    setIsSubmitSuccessful(false);
  };

  const handleSubmit = async (
    event: SyntheticInputEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();

    try {
      await UserService.updatePassword(userId, formValues, hasPassword);
      setFormValues(defaultFormValues);
      setErrors([]);
      setIsSubmitSuccessful(true);
      setCanSubmit(false);
      handleGetUser();
    } catch (serviceErrors) {
      setErrors(serviceErrors);
    }
  };

  return (
    <TileWithTitle title={i18n.t('profile.password_update.title')}>
      <form id={PASSWORD_UPDATE_FORMNAME} onSubmit={throttle(handleSubmit)}>
        <FormRequirementsStyle>
          {i18n.t('common.form.requirements')}
        </FormRequirementsStyle>
        <FormErrors errors={errors} />
        {hasPassword && (
          <PasswordInput
            label={i18n.t('profile.password_update.actual_password.label')}
            name="actualPassword"
            icon={PasswordFieldIcon}
            value={formValues.actualPassword}
            error={actualPasswordError}
            handleChange={throttle(handleChange)}
          />
        )}
        <PasswordInput
          label={i18n.t('profile.password_update.newpassword')}
          name="newPassword"
          icon={PasswordFieldIcon}
          value={formValues.newPassword}
          error={newPasswordError}
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
});

export const UpdatePassword = connect(
  null,
  mapDispatchToProps
)(UpdatePasswordComponent);
