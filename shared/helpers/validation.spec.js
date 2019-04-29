// @flow

import * as validationHelper from './validation';

describe('Validation Helper', () => {
  describe('Validate the Register Form', () => {
    it('return errors for required field', () => {
      const user = {
        age: 20,
      };
      const expectedErrors = [
        { field: 'email', message: 'common.form.required_field' },
        { field: 'password', message: 'common.form.required_field' },
        { field: 'firstname', message: 'common.form.required_field' },
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
        { field: 'age', message: 'common.form.age_limit_error' },
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
