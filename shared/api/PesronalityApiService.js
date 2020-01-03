// @flow
import { type ApiServiceHeaders } from 'Shared/types/api';
import { ApiService } from './ApiService';

export const PERSONALITY_PATH = '/personalities/:userId';

export class PersonalityApiService {
  static getPersonality(userId: string, headers?: ApiServiceHeaders = {}) {
    return ApiService.callApi(PERSONALITY_PATH.replace(':userId', userId), {
      method: 'GET',
      headers,
    });
  }
}
