// @flow
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { i18n } from 'Shared/i18n';
import { type RegisterFormDataType } from 'Shared/types/form';
import { type ErrorObjectType } from 'Shared/types/api';
import { type StateRoot } from 'Shared/store/types';
import { UserService } from 'Shared/services/User';
import { Logger } from 'Shared/services/Logger';
import { getUser } from 'Shared/store/actions/authentification';
import { modalClose } from 'Shared/store/actions/modal';
import {
  trackSignupEmailSuccess,
  trackSignupEmailFailure,
} from 'Shared/services/Tracking';
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
  NameFiledIcon,
  AgeFieldIcon,
  PostalCodeFieldIcon,
  JobFieldIcon,
  SubmitThumbsUpIcon,
} from 'Shared/constants/icons';
import { throttle } from 'Shared/helpers/throttle';
import { FormErrors } from 'Client/ui/Elements/Form/Errors';
import { CustomPatternInput } from 'Client/ui/Elements/Form/CustomPatternInput';
import { getGTUPageLink } from 'Shared/helpers/url';

/**
 * Renders Register Form
 */
export const RegisterForm = () => {
  const dispatch = useDispatch();
  const { country, language } = useSelector(
    (state: StateRoot) => state.appConfig
  );
  const [user, setUser] = useState<RegisterFormDataType>({
    email: '',
    password: '',
    profile: {
      firstname: '',
      age: '',
      postalcode: '',
      profession: '',
    },
  });
  const [errors, setErrors] = useState<ErrorObjectType[]>([]);
  const [inProgress, setInProgress] = useState<boolean>(false);

  const handleChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    if (id.includes('profile.')) {
      const [, name] = id.split('.');
      setUser({
        ...user,
        profile: {
          ...user.profile,
          [name]: value,
        },
      });

      return;
    }

    setUser({
      ...user,
      [id]: value,
    });
  };

  const logAndLoadUser = async (email, password) => {
    const success = () => dispatch(getUser(true));
    const handleErrors = () => {};
    const unexpectedError = () => {
      dispatch(modalClose());
      // @toDo: notify user
      Logger.logError(`Login fail for ${email}`);
    };
    await UserService.login(
      email,
      password,
      success,
      handleErrors,
      unexpectedError
    );
  };

  const handleSubmit = async (event: SyntheticInputEvent<HTMLInputElement>) => {
    event.preventDefault();
    const success = () => {
      logAndLoadUser(user.email, user.password).then(() => {
        trackSignupEmailSuccess();
        dispatch(modalClose());
        setErrors([]);
      });
    };
    const handleErrors = (serviceErrors: ErrorObjectType[]) => {
      trackSignupEmailFailure();
      setErrors(serviceErrors);
    };
    const unexpectedError = () => dispatch(modalClose());
    setInProgress(true);

    await UserService.register(user, success, handleErrors, unexpectedError);

    setInProgress(false);
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
        name="profile.firstname"
        icon={NameFiledIcon}
        error={firstnameError}
        value={user.profile.firstname}
        label={i18n.t('common.form.label.firstname')}
        required
        handleChange={handleChange}
      />
      <NumberInput
        name="profile.age"
        icon={AgeFieldIcon}
        value={user.profile.age}
        error={ageError}
        label={i18n.t('common.form.label.age', { context: 'optional' })}
        handleChange={handleChange}
        min={13}
        max={120}
      />
      <CustomPatternInput
        type="text"
        name="profile.postalcode"
        icon={PostalCodeFieldIcon}
        value={user.profile.postalcode}
        error={postalcodeError}
        label={i18n.t('common.form.label.postalcode', { context: 'optional' })}
        handleChange={handleChange}
        maxLength={5}
        pattern="^[0-9]{5}"
      />
      <UntypedInput
        type="text"
        name="profile.profession"
        icon={JobFieldIcon}
        value={user.profile.profession}
        label={i18n.t('common.form.label.profession', { context: 'optional' })}
        handleChange={handleChange}
      />
      <ConditionParagraphStyle
        dangerouslySetInnerHTML={{
          __html: i18n.t('register.gtu_text', {
            gtu_link: `<a href="${getGTUPageLink(
              country,
              language
            )}">$t(register.gtu)</a>`,
            interpolation: { escapeValue: false },
          }),
        }}
      />
      <SubmitButton
        formName={REGISTER_FORMNAME}
        id="authentification-register-submit"
        icon={SubmitThumbsUpIcon}
        label={i18n.t('common.register_label')}
        disabled={inProgress}
      />
    </FormStyle>
  );
};
