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
import {
  updateUserErrors,
  emailNotExistError,
  forgotPasswordErrors,
  registerErrors,
} from 'Shared/errors/Messages/User';
import { defaultApiError } from 'Shared/errors/Messages';

jest.mock('Shared/api/UserApiService');
jest.mock('Shared/services/Logger');
jest.mock('Shared/helpers/date', () => ({
  getDateOfBirthFromAge: () => 30,
}));

describe('User Service', () => {
  describe('update function', () => {
    const userInformation = {
      firstName: 'foo',
      age: '33',
      profession: 'bar',
      postalCode: '77000',
      description: 'baz description',
      optInNewsletter: false,
    };
    it('Call UserApi service with right params', async () => {
      jest.spyOn(UserApiService, 'update');
      UserApiService.update.mockResolvedValue('ok');

      const response = await update(userInformation);

      expect(UserApiService.update).toHaveBeenNthCalledWith(1, {
        firstName: userInformation.firstName,
        dateOfBirth: 30,
        postalCode: userInformation.postalCode,
        profession: userInformation.profession,
        description: userInformation.description,
        optInNewsletter: userInformation.optInNewsletter,
      });
      expect(response).toBe(HttpStatus.HTTP_NO_CONTENT);
    });

    it('return a bad request content', async () => {
      jest.spyOn(UserApiService, 'update');
      UserApiService.update.mockRejectedValue(updateUserErrors);
      try {
        await update({});
      } catch (errors) {
        errors.map((error, index) => {
          expect(errors[index].message).toBe(updateUserErrors[index].message);
          expect(errors[index].key).toBe(updateUserErrors[index].key);
          return expect(errors[index].field).toBe(
            updateUserErrors[index].field
          );
        });
      }
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
      UserApiService.forgotPassword.mockRejectedValue(forgotPasswordErrors);
      try {
        await forgotPassword('foo2@example.com');
      } catch (errors) {
        errors.map((error, index) => {
          expect(errors[index].message).toBe(
            forgotPasswordErrors[index].message
          );
          expect(errors[index].key).toBe(forgotPasswordErrors[index].key);
          return expect(errors[index].field).toBe(
            forgotPasswordErrors[index].field
          );
        });
      }
    });

    it('return an unexpected error message content', async () => {
      jest.spyOn(UserApiService, 'forgotPassword');
      UserApiService.forgotPassword.mockRejectedValue(defaultApiError);
      try {
        await forgotPassword('foo2@example.com');
      } catch (errors) {
        errors.map((error, index) => {
          expect(errors[index].message).toBe(defaultApiError.message);
          expect(errors[index].key).toBe(defaultApiError.key);
          return expect(errors[index].field).toBe(defaultApiError.field);
        });
      }
    });

    it('return a 404', async () => {
      jest.spyOn(UserApiService, 'forgotPassword');
      UserApiService.forgotPassword.mockRejectedValue('Error: 404');
      try {
        await forgotPassword('foo2@example.com');
      } catch (errors) {
        errors.map((error, index) => {
          expect(errors[index].message).toBe(emailNotExistError.message);
          expect(errors[index].key).toBe(emailNotExistError.key);
          return expect(errors[index].field).toBe(emailNotExistError.field);
        });
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
      UserApiService.register.mockRejectedValue(registerErrors);
      try {
        await register(johnData);
      } catch (errors) {
        errors.map((error, index) => {
          expect(errors[index].message).toBe(registerErrors[index].message);
          expect(errors[index].key).toBe(registerErrors[index].key);
          return expect(errors[index].field).toBe(registerErrors[index].field);
        });
      }
    });

    it('return a global error if error message is not referenced', async () => {
      jest.spyOn(UserApiService, 'register');
      UserApiService.register.mockRejectedValue(defaultApiError);
      try {
        await register(johnData);
      } catch (errors) {
        errors.map((error, index) => {
          expect(errors[index].message).toBe(defaultApiError.message);
          expect(errors[index].key).toBe(defaultApiError.key);
          return expect(errors[index].field).toBe(defaultApiError.field);
        });
      }
    });
  });
});
