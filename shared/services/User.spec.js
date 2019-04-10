/* @flow */

import { UserService } from 'Shared/api/UserService';
import { update, deleteAccount } from 'Shared/services/User';
import * as HttpStatus from 'Shared/constants/httpStatus';
import { Logger } from 'Shared/services/Logger';

jest.mock('Shared/api/UserService');
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
      jest.spyOn(UserService, 'update');

      await update(userInformation);

      expect(UserService.update).toHaveBeenNthCalledWith(1, {
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
      jest.spyOn(UserService, 'deleteAccount');
      UserService.deleteAccount.mockResolvedValue('ok');
      const response = await deleteAccount('fooPassword', 'barUserId');
      expect(UserService.deleteAccount).toHaveBeenNthCalledWith(
        1,
        'fooPassword',
        'barUserId'
      );

      expect(response).toBe(HttpStatus.HTTP_NO_CONTENT);
    });

    it('return a bad request content', async () => {
      jest.spyOn(Logger, 'logError');

      UserService.deleteAccount.mockRejectedValue(Error('notok'));
      try {
        await deleteAccount('fooPassword', 'barUserId');
      } catch (error) {
        expect(Logger.logError).toHaveBeenNthCalledWith(
          1,
          'Error in deleting account for userId -> barUserId : status -> Error: notok'
        );
      }
    });
  });
});
