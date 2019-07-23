/* @flow */

import { UserApiService } from 'Shared/api/UserApiService';
import {
  update,
  deleteAccount,
  forgotPassword,
  register,
} from 'Shared/services/User';
import * as HttpStatus from 'Shared/constants/httpStatus';
import { Logger } from 'Shared/services/Logger';

jest.mock('Shared/api/UserApiService');
jest.mock('Shared/services/Logger');
jest.mock('Shared/helpers/date', () => ({
  getDateOfBirthFromAge: () => 30,
}));

describe('User Service', () => {
  describe('update function', () => {
    const userInformation = {
      firstName: 'foo',
      age: 33,
      profession: 'bar',
      postalCode: 77000,
      description: 'baz description',
    };
    it('Call UserApi service with right params', async () => {
      jest.spyOn(UserApiService, 'update');

      await update(userInformation);

      expect(UserApiService.update).toHaveBeenNthCalledWith(1, {
        firstName: userInformation.firstName,
        dateOfBirth: 30,
        postalCode: userInformation.postalCode,
        profession: userInformation.profession,
        description: userInformation.description,
      });
    });
  });

  describe('deleteAccount function', () => {
    it('return a no content http status', async () => {
      jest.spyOn(UserApiService, 'deleteAccount');
      UserApiService.deleteAccount.mockResolvedValue('ok');
      const response = await deleteAccount('barUserId', 'fooPassword');
      expect(UserApiService.deleteAccount).toHaveBeenNthCalledWith(
        1,
        'barUserId',
        'fooPassword'
      );

      expect(response).toBe(HttpStatus.HTTP_NO_CONTENT);
    });

    it('return a bad request content', async () => {
      jest.spyOn(Logger, 'logError');

      UserApiService.deleteAccount.mockRejectedValue(404);
      try {
        await deleteAccount('barUserId', 'fooPassword');
      } catch (error) {
        expect(Logger.logError).toHaveBeenNthCalledWith(
          1,
          'Error in deleting account for userId -> barUserId : status -> 404'
        );
      }
    });
  });

  describe('forgotPassword function', () => {
    it('success', async () => {
      jest.spyOn(UserApiService, 'forgotPassword');
      UserApiService.forgotPassword.mockResolvedValue();
      const response = await forgotPassword('foo@example.com');
      expect(UserApiService.forgotPassword).toHaveBeenNthCalledWith(
        1,
        'foo@example.com'
      );

      expect(response).toBe();
    });

    it('return a bad request content', async () => {
      jest.spyOn(UserApiService, 'forgotPassword');
      UserApiService.forgotPassword.mockRejectedValue([
        { field: 'email', message: 'email is not a valid email' },
      ]);
      try {
        await forgotPassword('foo2@example.com');
      } catch (errors) {
        expect(errors[0].message).toBe(
          'common.form.email_is_not_a_valid_email'
        );
        expect(errors[0].field).toBe('email');
      }
    });

    it('return an unexpected error message content', async () => {
      jest.spyOn(UserApiService, 'forgotPassword');
      UserApiService.forgotPassword.mockRejectedValue([
        { field: 'email', message: 'notok' },
      ]);
      try {
        await forgotPassword('foo2@example.com');
      } catch (errors) {
        expect(errors[0].message).toBe('common.form.notok');
        expect(errors[0].field).toBe('email');
      }
    });

    it('return a 404', async () => {
      jest.spyOn(UserApiService, 'forgotPassword');
      UserApiService.forgotPassword.mockRejectedValue('Error: 404');
      try {
        await forgotPassword('foo2@example.com');
      } catch (errors) {
        expect(errors[0].message).toBe('common.form.email_doesnot_exist');
        expect(errors[0].field).toBe('email');
      }
    });
  });

  describe('register function', () => {
    const johnData = {
      firstname: 'john',
      email: 'john@example.com',
    };
    it('success', async () => {
      jest.spyOn(UserApiService, 'register');
      UserApiService.register.mockResolvedValue();

      const response = await register(johnData);
      expect(UserApiService.register).toHaveBeenNthCalledWith(1, johnData);

      expect(response).toBe();
    });

    it('return a bad request content', async () => {
      jest.spyOn(UserApiService, 'register');
      UserApiService.register.mockRejectedValue([
        { field: 'email', message: 'required_field' },
      ]);
      try {
        await register(johnData);
      } catch (errors) {
        expect(errors[0].message).toBe('common.form.required_field');
        expect(errors[0].field).toBe('email');
      }
    });

    it('return a global error if error message is not referenced', async () => {
      jest.spyOn(UserApiService, 'register');
      UserApiService.register.mockRejectedValue([
        { field: 'email', message: 'Api error' },
      ]);
      try {
        await register(johnData);
      } catch (errors) {
        expect(errors[0].message).toBe('common.form.api_error');
        expect(errors[0].field).toBe('email');
      }
    });

    it('return a specific error when email already exist', async () => {
      jest.spyOn(UserApiService, 'register');
      UserApiService.register.mockRejectedValue([
        { field: 'email', message: 'Email azerazer already exist' },
      ]);
      try {
        await register(johnData);
      } catch (errors) {
        expect(errors[0].message).toBe('common.form.email_already_exist');
        expect(errors[0].field).toBe('email');
      }
    });

    it('return a bad request content with a global error', async () => {
      jest.spyOn(UserApiService, 'register');
      UserApiService.register.mockRejectedValue({
        message: 'global notok',
      });
      try {
        await register(johnData);
      } catch (errors) {
        expect(errors[0].message).toBe('common.form.api_error');
        expect(errors[0].field).toBe('global');
      }
    });
  });
});
