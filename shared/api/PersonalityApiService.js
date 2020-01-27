// @flow
import {
  type ApiServiceHeaders,
  type ApiPersonalityCommentsResponseType,
  type ApiPersonnalityOpinionResponseType,
} from 'Shared/types/api';
import { ApiService } from './ApiService';

export const PERSONALITY_PATH = '/personalities/:userId';
export const PERSONALITY_COMMENTS_PATH = '/personalities/:userId/comments';
export const PERSONALITY_OPINION_PATH = '/personalities/:userId/opinions';

export class PersonalityApiService {
  static getPersonality(
    userId: string,
    questionId?: string,
    headers?: ApiServiceHeaders = {}
  ) {
    return ApiService.callApi(PERSONALITY_PATH.replace(':userId', userId), {
      method: 'GET',
      headers,
      body: JSON.stringify({
        questionId,
      }),
    });
  }

  static postPersonnalityComments(
    userId: string,
    topIdeaId: string,
    comment1: string,
    comment2: string,
    comment3: string,
    vote: string,
    qualification: string,
    headers?: ApiServiceHeaders = {}
  ): Promise<ApiPersonalityCommentsResponseType> {
    return ApiService.callApi(
      PERSONALITY_COMMENTS_PATH.replace(':userId', userId),
      {
        method: 'POST',
        body: JSON.stringify({
          topIdeaId,
          comment1,
          comment2,
          comment3,
          vote,
          qualification,
        }),
        headers,
      }
    );
  }

  static getPersonnalityOpinion(
    userId: string,
    questionId?: string,
    headers?: ApiServiceHeaders = {}
  ): Promise<ApiPersonnalityOpinionResponseType> {
    return ApiService.callApi(
      PERSONALITY_OPINION_PATH.replace(':userId', userId),
      {
        method: 'GET',
        headers,
        body: JSON.stringify({
          questionId,
        }),
      }
    );
  }
}
