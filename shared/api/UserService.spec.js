import { ApiService } from 'Shared/api/ApiService';
import { ApiServiceMock } from 'Shared/api/ApiService/ApiService.mock';
import { getDateOfBirthFromAge } from 'Shared/helpers/date';
import {
  UserService,
  PATH_USER_REGISTER,
} from './UserService';

jest.mock('./ApiService');
Object.defineProperty(ApiService, 'country', {
  get: jest.fn(() => 'FR'),
  set: jest.fn(),
});
Object.defineProperty(ApiService, 'language', {
  get: jest.fn(() => 'fr'),
  set: jest.fn(),
});
Object.defineProperty(ApiService, 'questionId', {
  get: jest.fn(() => 'quux'),
  set: jest.fn(),
});
jest.mock('Shared/helpers/date', () => ({
  getDateOfBirthFromAge: jest.fn()
}));

describe('UserService', () => {
  let mockStrategy;
  beforeEach(() => {
    ApiService.callApi.mockClear();
    jest.spyOn(ApiService, 'callApi');
  });

  describe('register', () => {
    it('must call ApiService.callApi', async () => {
      getDateOfBirthFromAge.mockReturnValue(33);
      await UserService.register(
        {
          email: 'foo',
          password: 'bar',
          firstname: 'baz',
          age: 33,
          postalcode: 12345,
          profession: 'qux',
        }
      );
      expect(ApiService.callApi).toHaveBeenNthCalledWith(
        1,
        PATH_USER_REGISTER,
        {
          method: 'POST',
          body: JSON.stringify({
            email: 'foo',
            password: 'bar',
            firstName: 'baz',
            dateOfBirth: 33,
            postalCode: 12345,
            profession: 'qux',
            country: 'FR',
            language: 'fr',
            questionId: 'quux',
          })
        }
      );
    });
  });
});
