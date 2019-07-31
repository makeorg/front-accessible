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
import { Tracking } from 'Shared/services/Tracking';
import {
  FormStyle,
  ConditionParagraphStyle,
  FormRequirementsStyle,
} from 'Client/ui/Elements/Form/Styled/Content';
import { getFieldError, avoidEmptyStringValue } from 'Shared/helpers/form';
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
import { CustomPatternInput } from 'Client/ui/Elements/Form/CustomPatternInput';

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
    firstname: undefined,
    age: '',
    postalcode: undefined,
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

    try {
      await UserService.register(user);

      Tracking.trackSignupEmailSuccess();
      handleModalClose();
      setErrors([]);
      logAndLoadUser(user.email, user.password);
    } catch (serviceErrors) {
      Tracking.trackSignupEmailFailure();
      setErrors(serviceErrors);
    }
  };

  const emailError = getFieldError('email', errors);
  const passwordError = getFieldError('password', errors);
  const firstnameError = getFieldError('firstname', errors);
  const ageError = getFieldError('age', errors);
  const postalcodeError = getFieldError('postalcode', errors);

  return (
    <FormStyle id={REGISTER_FORMNAME} onSubmit={throttle(handleSubmit)}>
      <FormRequirementsStyle>
        {i18n.t('common.form.requirements')}
      </FormRequirementsStyle>
      <FormErrors errors={errors} />
      <UntypedInput
        type="email"
        name="email"
        icon={EmailFieldIcon}
        value={user.email}
        label={i18n.t('common.form.label.email')}
        required
        error={emailError}
        handleChange={handleChange}
      />
      <PasswordInput
        name="password"
        icon={PasswordFieldIcon}
        value={user.password}
        error={passwordError}
        label={i18n.t('common.form.label.password')}
        handleChange={handleChange}
      />
      <UntypedInput
        type="text"
        name="firstname"
        icon={FirstNameFieldIcon}
        error={firstnameError}
        value={avoidEmptyStringValue(user.firstname)}
        label={i18n.t('common.form.label.firstname')}
        required
        handleChange={handleChange}
      />
      <NumberInput
        name="age"
        icon={AgeFieldIcon}
        value={user.age}
        error={ageError}
        label={i18n.t('common.form.label.age', { context: 'optional' })}
        handleChange={handleChange}
        min={13}
        max={120}
      />
      <CustomPatternInput
        type="text"
        name="postalcode"
        icon={PostalCodeFieldIcon}
        value={avoidEmptyStringValue(user.postalcode)}
        error={postalcodeError}
        label={i18n.t('common.form.label.postalcode', { context: 'optional' })}
        handleChange={handleChange}
        maxLength={5}
        pattern="^[0-9]{5}"
      />
      <UntypedInput
        type="text"
        name="profession"
        icon={JobFieldIcon}
        value={user.profession}
        label={i18n.t('common.form.label.profession', { context: 'optional' })}
        handleChange={handleChange}
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
