// @flow
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { i18n } from 'Shared/i18n';
import { GTU_LINK } from 'Shared/constants/url';
import { type TypeRegisterFormData } from 'Shared/types/form';
import { type TypeErrorObject } from 'Shared/types/api';
import * as UserService from 'Shared/services/User';
import { Logger } from 'Shared/services/Logger';
import { getUser } from 'Shared/store/actions/authentification';
import { modalClose } from 'Shared/store/actions/modal';
import { validateRegisterForm } from 'Shared/helpers/validation';
import { Tracking } from 'Shared/services/Tracking';
import {
  FormStyle,
  ConditionParagraphStyle,
  FormRequirementsStyle,
} from 'Client/ui/Elements/Form/Styled/Content';
import { getFieldError } from 'Shared/helpers/form';
import { UntypedInput } from 'Client/ui/Elements/Form/UntypedInput';
import { NumberInput } from 'Client/ui/Elements/Form/NumberInput';
import { PasswordInput } from 'Client/ui/Elements/Form/PasswordInput';
import { REGISTER_FORMNAME } from 'Shared/constants/form';
import { SubmitButton } from 'Client/ui/Elements/Form/SubmitButton';
import {
  EmailFieldIcon,
  PasswordFieldIcon,
  FirstNameFieldIcon,
  AgeFieldIcon,
  PostalCodeFieldIcon,
  JobFieldIcon,
  SubmitThumbsUpIcon,
} from 'Shared/constants/icons';
import { throttle } from 'Shared/helpers/throttle';
import { FormErrors } from 'Client/ui/Elements/Form/Errors';

type Props = {
  /** Method called to close modal */
  handleModalClose: () => void,
  /** Method called to load user */
  handleLoadUser: () => void,
};

/**
 * Renders Register Form
 */
export const RegisterFormComponent = ({
  handleModalClose,
  handleLoadUser,
}: Props) => {
  const [user, setUser] = useState<TypeRegisterFormData>({
    email: '',
    password: '',
    firstname: '',
    dateofbirth: '',
    postalcode: '',
    profession: '',
  });
  const [errors, setErrors] = useState<TypeErrorObject[]>([]);

  const handleChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setUser({
      ...user,
      [id]: value,
    });
  };

  const logAndLoadUser = async (email, password) => {
    try {
      await UserService.login(email, password);
      handleLoadUser();
    } catch {
      // @toDo: notify user
      Logger.logError(`Login fail for ${email}`);
    }
  };

  const handleSubmit = async (event: SyntheticInputEvent<HTMLInputElement>) => {
    event.preventDefault();

    if (errors.length > 0) {
      return setErrors(validateRegisterForm(user));
    }

    try {
      await UserService.register(user);

      Tracking.trackSignupEmailSuccess();
      handleModalClose();

      return logAndLoadUser(user.email, user.password);
    } catch (serviceErrors) {
      Tracking.trackSignupEmailFailure();
      return setErrors(serviceErrors);
    }
  };

  const emailError = getFieldError('email', errors);
  const passwordError = getFieldError('password', errors);
  const firstnameError = getFieldError('firstname', errors);
  const ageError = getFieldError('age', errors);

  return (
    <FormStyle
      noValidate
      id={REGISTER_FORMNAME}
      onSubmit={throttle(handleSubmit)}
    >
      <FormRequirementsStyle>
        {i18n.t('common.form.requirements')}
      </FormRequirementsStyle>
      <FormErrors errors={errors} />
      <UntypedInput
        type="email"
        name="email"
        icon={EmailFieldIcon}
        value={user.email}
        label={i18n.t('common.form.email_label')}
        required
        errors={emailError}
        handleChange={throttle(handleChange)}
      />
      <PasswordInput
        name="password"
        icon={PasswordFieldIcon}
        value={user.password}
        errors={passwordError}
        label={i18n.t('common.form.password_label')}
        handleChange={throttle(handleChange)}
      />
      <UntypedInput
        type="text"
        name="firstname"
        icon={FirstNameFieldIcon}
        errors={firstnameError}
        value={user.firstname}
        label={i18n.t('common.form.firstname_label')}
        required
        handleChange={throttle(handleChange)}
      />
      <NumberInput
        name="dateofbirth"
        icon={AgeFieldIcon}
        errors={ageError}
        value={user.age}
        label={i18n.t('common.form.age_label')}
        required={false}
        handleChange={throttle(handleChange)}
        min={1}
        max={120}
      />
      <NumberInput
        name="postalcode"
        icon={PostalCodeFieldIcon}
        value={user.postalcode}
        label={i18n.t('common.form.postalcode_label')}
        required={false}
        handleChange={throttle(handleChange)}
        max={99999}
      />
      <UntypedInput
        type="text"
        name="profession"
        icon={JobFieldIcon}
        value={user.profession}
        label={i18n.t('common.form.profession_label')}
        required={false}
        handleChange={throttle(handleChange)}
      />
      <ConditionParagraphStyle
        dangerouslySetInnerHTML={{
          __html: i18n.t('register.cgu_text', {
            cgu_link: `<a class="red_link" href="${GTU_LINK}">$t(register.cgu)</a>`,
            interpolation: { escapeValue: false },
          }),
        }}
      />
      <SubmitButton
        formName={REGISTER_FORMNAME}
        id="authentification-register-submit"
        icon={SubmitThumbsUpIcon}
        label={i18n.t('common.register_label')}
      />
    </FormStyle>
  );
};

const mapDispatchToProps = dispatch => ({
  handleModalClose: () => {
    dispatch(modalClose());
  },
  handleLoadUser: () => {
    dispatch(getUser());
  },
});

export const RegisterForm = connect(
  null,
  mapDispatchToProps
)(RegisterFormComponent);
