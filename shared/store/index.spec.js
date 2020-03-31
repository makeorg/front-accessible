/* @flow */
import { UserApiService } from 'Shared/api/UserApiService';
import { authenticationState } from './index';

jest.mock('Shared/api/UserApiService');

describe('Client authenticate state', () => {
  it('authenticated state without user', async () => {
    // mocks
    UserApiService.current.mockRejectedValue(['Unauthorized']);

    const state = await authenticationState();
    expect(state.isLoggedIn).toBe(false);
    expect(state.user).toBe(undefined);
  });

  it('authenticated state with user', async () => {
    const user = { email: 'mike@make.org', password: 'pass' };
    const profile = { avatarUrl: 'https://example.com' };

    // mocks
    UserApiService.current.mockResolvedValue({ data: user });
    UserApiService.getProfile.mockResolvedValue({ data: profile });

    const state = await authenticationState();
    expect(state.isLoggedIn).toBe(true);
    expect(state.user).toMatchObject({ ...user, profile });
  });
});
