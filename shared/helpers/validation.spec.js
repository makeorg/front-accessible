// @flow
import { i18n } from 'Shared/i18n';
import * as validationHelper from './validation';

describe('Validation Helper', () => {
  describe('Validate the Register Form', () => {
    it('return errors for required field', () => {
      const user = {
        age: 20,
      };
      const expectedErrors = [
        {
          field: 'email',
          message: i18n.t('common.form.dynamic_required_field', {
            name: `<a href="#firstname">${i18n.t(
              'common.form.email_label'
            )}</a>`,
          }),
        },
        {
          field: 'password',
          message: i18n.t('common.form.dynamic_required_field', {
            name: `<a href="#firstname">${i18n.t(
              'common.form.password_label'
            )}</a>`,
          }),
        },
        {
          field: 'firstname',
          message: i18n.t('common.form.dynamic_required_field', {
            name: `<a href="#firstname">${i18n.t(
              'common.form.firstname_label'
            )}</a>`,
          }),
        },
      ];
      const errors = validationHelper.validateRegisterForm(user);
      expect(errors).toEqual(expectedErrors);
    });

    it('return error for invalid age', () => {
      const user = {
        email: 'foo@bar.com',
        password: 'baz',
        firstname: 'foofoo',
        age: 10,
      };
      const expectedErrors = [
        {
          field: 'age',
          message: 'common.form.invalid_date_age_must_be_between_13_and_120',
        },
      ];
      const errors = validationHelper.validateRegisterForm(user);
      expect(errors).toEqual(expectedErrors);
    });

    it('return an empty erros array when data are valid', () => {
      const user = {
        email: 'foo@bar.com',
        password: 'baz',
        firstname: 'foofoo',
        age: 20,
      };

      const errors = validationHelper.validateRegisterForm(user);
      expect(errors).toEqual([]);
    });
  });
});
