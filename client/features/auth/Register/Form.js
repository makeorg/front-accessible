// @flow
import React from 'react';
import { useSelector } from 'react-redux';
import { i18n } from 'Shared/i18n';
import { type RegisterFormDataType } from 'Shared/types/form';
import { type ErrorObjectType } from 'Shared/types/api';
import { type StateRoot } from 'Shared/store/types';
import {
  FormCenterAlignStyle,
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

type Props = {
  user: RegisterFormDataType,
  errors: ErrorObjectType[],
  handleChange: (event: SyntheticInputEvent<HTMLInputElement>) => any,
  handleSubmit: (event: SyntheticInputEvent<HTMLInputElement>) => any,
  disableSubmit: boolean,
};
/**
 * Renders Register Form
 */
export const RegisterForm = ({
  user,
  errors,
  handleChange,
  handleSubmit,
  disableSubmit,
}: Props) => {
  const { country } = useSelector((state: StateRoot) => state.appConfig);

  const emailError = getFieldError('email', errors);
  const passwordError = getFieldError('password', errors);
  const firstnameError = getFieldError('firstname', errors);
  const ageError = getFieldError('age', errors);
  const postalcodeError = getFieldError('postalcode', errors);

  return (
    <FormCenterAlignStyle
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
        label={i18n.t('common.form.label.age')}
        handleChange={handleChange}
        min={8}
        max={120}
        required
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
              country
            )}">$t(register.gtu)</a>`,
            interpolation: { escapeValue: false },
          }),
        }}
      />
      <SubmitButton
        formName={REGISTER_FORMNAME}
        id="authentication-register-submit"
        icon={SubmitThumbsUpIcon}
        label={i18n.t('common.register_label')}
        disabled={disableSubmit}
      />
    </FormCenterAlignStyle>
  );
};
