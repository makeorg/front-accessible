// @flow
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { i18n } from 'Shared/i18n';
import { type TypeErrorObject } from 'Shared/types/api';
import { PASSWORD_UPDATE_FORMNAME } from 'Shared/constants/form';
import { PasswordInput } from 'Client/ui/Elements/Form/PasswordInput';
import { SubmitButton } from 'Client/ui/Elements/Form/SubmitButton';
import { PasswordFieldIcon, SubmitThumbsUpIcon } from 'Shared/constants/icons';
import { TileWithTitle } from 'Client/ui/Elements/TileWithTitle';
import { getUser } from 'Shared/store/actions/authentification';
import { UserService } from 'Shared/services/User';
import { throttle } from 'Shared/helpers/throttle';
import { FormRequirementsStyle } from 'Client/ui/Elements/Form/Styled/Content';
import { FormErrors } from 'Client/ui/Elements/Form/Errors';
import { getFieldError } from 'Shared/helpers/form';
import { FormSuccessMessage } from 'Client/ui/Elements/Form/Success';

type Props = {
  /** Id of the User */
  userId: string,
  /** User has a password */
  hasPassword: boolean,
};

type TypePasswordValues = {
  newPassword: string,
  actualPassword: string,
};

export const UpdatePassword = ({ userId, hasPassword }: Props) => {
  const dispatch = useDispatch();
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
  const actualPasswordIsEmptyAndWrong =
    actualPasswordError && formValues.actualPassword.length <= 1;
  const newPasswordIsEmptyAndWrong =
    newPasswordError && formValues.newPassword.length <= 1;

  const disableSubmitAndErrors = () => {
    setCanSubmit(false);
    setErrors([]);
  };

  const handleChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFormValues({
      ...formValues,
      [id]: value,
    });

    setCanSubmit(true);

    if (
      hasPassword &&
      (actualPasswordIsEmptyAndWrong || newPasswordIsEmptyAndWrong)
    ) {
      disableSubmitAndErrors();
    }

    if (newPasswordIsEmptyAndWrong) {
      disableSubmitAndErrors();
    }

    setIsSubmitSuccessful(false);
  };

  const handleSubmit = async (
    event: SyntheticInputEvent<HTMLButtonElement>
  ): Promise<void> => {
    event.preventDefault();

    const success = () => {
      setFormValues(defaultFormValues);
      setErrors([]);
      setIsSubmitSuccessful(true);
      setCanSubmit(false);
      dispatch(getUser());
    };
    const handleErrors = (serviceErrors: TypeErrorObject[]) => {
      setErrors(serviceErrors);
      setCanSubmit(false);
    };

    await UserService.updatePassword(
      userId,
      formValues,
      hasPassword,
      success,
      handleErrors
    );
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
            handleChange={handleChange}
          />
        )}
        <PasswordInput
          label={i18n.t('profile.password_update.newpassword')}
          name="newPassword"
          icon={PasswordFieldIcon}
          value={formValues.newPassword}
          error={newPasswordError}
          handleChange={handleChange}
        />
        <SubmitButton
          disabled={!canSubmit}
          formName={PASSWORD_UPDATE_FORMNAME}
          icon={SubmitThumbsUpIcon}
          label={i18n.t('profile.common.submit_label')}
        />
        {isSubmitSuccessful && <FormSuccessMessage />}
      </form>
    </TileWithTitle>
  );
};
