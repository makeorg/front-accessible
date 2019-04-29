import { type RegisterFormData as TypeRegisterFormData } from 'Shared/types/form';

export const validateRegisterForm = (user: TypeRegisterFormData) => {
  const errors = [];

  if (!user.email) {
    errors.push({ field: 'email', message: 'common.form.required_field' });
  }
  if (!user.password) {
    errors.push({
      field: 'password',
      message: 'common.form.required_field',
    });
  }
  if (!user.firstname) {
    errors.push({
      field: 'firstname',
      message: 'common.form.required_field',
    });
  }
  const userAge = Number.parseInt(user.age, 10);
  if (userAge < 13 || userAge > 119) {
    errors.push({
      field: 'age',
      message: 'common.form.age_limit_error',
    });
  }

  return errors;
};
