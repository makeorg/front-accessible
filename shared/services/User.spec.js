/* @flow */

import { UserService } from 'Shared/api/UserService';
import { update } from 'Shared/services/User';

jest.mock('Shared/api/UserService');
jest.mock('Shared/helpers/date', () => ({
  getDateOfBirthFromAge: () => 30,
}));

describe('User Service', () => {
  const userInformation = {
    firstName: 'foo',
    age: 33,
    profession: 'bar',
    postalCode: 77000,
    description: 'baz description',
  };
  describe('update function', () => {
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
});
