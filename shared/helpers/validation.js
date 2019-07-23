import { type TypeRegisterFormData } from 'Shared/types/form';
import { type TypeErrorObject } from 'Shared/types/api';
import { i18n } from 'Shared/i18n';

export const validateRegisterForm: TypeErrorObject[] = (
  user: TypeRegisterFormData
) => {
  const errors = [];

  if (!user.email) {
    errors.push({
      field: 'email',
      message: i18n.t('common.form.dynamic_required_field', {
        name: `<a href="#firstname">${i18n.t('common.form.email_label')}</a>`,
      }),
    });
  }
  if (!user.password) {
    errors.push({
      field: 'password',
      message: i18n.t('common.form.dynamic_required_field', {
        name: `<a href="#firstname">${i18n.t(
          'common.form.password_label'
        )}</a>`,
      }),
    });
  }
  if (!user.firstname) {
    errors.push({
      field: 'firstname',
      message: i18n.t('common.form.dynamic_required_field', {
        name: `<a href="#firstname">${i18n.t(
          'common.form.firstname_label'
        )}</a>`,
      }),
    });
  }
  const userAge = Number.parseInt(user.age, 10);
  if (userAge < 13 || userAge > 119) {
    errors.push({
      field: 'dateofbirth',
      message: i18n.t(
        'common.form.invalid_date_age_must_be_between_13_and_120'
      ),
    });
  }

  return errors;
};
