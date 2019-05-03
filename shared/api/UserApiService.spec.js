import { ApiService } from 'Shared/api/ApiService';
import { getDateOfBirthFromAge } from 'Shared/helpers/date';
import { UserApiService, PATH_USER } from './UserApiService';

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
  getDateOfBirthFromAge: jest.fn(),
}));

describe('UserApiService', () => {
  beforeEach(() => {
    ApiService.callApi.mockClear();
    jest.spyOn(ApiService, 'callApi');
  });

  describe('register', () => {
    it('must call ApiService.callApi', async () => {
      getDateOfBirthFromAge.mockReturnValue('1988-03-03');
      await UserApiService.register({
        email: 'foo',
        password: 'bar',
        firstname: 'baz',
        age: 33,
        postalcode: 12345,
        profession: 'qux',
      });
      expect(ApiService.callApi).toHaveBeenNthCalledWith(1, PATH_USER, {
        method: 'POST',
        body: JSON.stringify({
          email: 'foo',
          password: 'bar',
          firstName: 'baz',
          dateOfBirth: '1988-03-03',
          postalCode: 12345,
          profession: 'qux',
          country: 'FR',
          language: 'fr',
          questionId: 'quux',
        }),
      });
    });

    it('must call ApiService.callApi with nullable birdthdate', async () => {
      getDateOfBirthFromAge.mockReturnValue('');
      await UserApiService.register({
        email: 'foo',
        password: 'bar',
        firstname: 'baz',
        age: 33,
        postalcode: 12345,
        profession: 'qux',
      });
      expect(ApiService.callApi).toHaveBeenNthCalledWith(1, PATH_USER, {
        method: 'POST',
        body: JSON.stringify({
          email: 'foo',
          password: 'bar',
          firstName: 'baz',
          dateOfBirth: null,
          postalCode: 12345,
          profession: 'qux',
          country: 'FR',
          language: 'fr',
          questionId: 'quux',
        }),
      });
    });
  });
});