// @flow

import { ApiService } from './ApiService';
import {
  type ApiIdeaResponseType,
  type ApiIdeasResponseType,
} from '../types/api';

export const TOP_IDEAS_PATH = '/questions/:questionId/top-ideas';
export const TOP_IDEAS_IDEA_PATH =
  '/questions/:questionId/top-ideas/:topIdeaId';

export class TopIdeaApiService {
  static getTopIdeas(questionId: string): Promise<ApiIdeasResponseType> {
    return ApiService.callApi(
      TOP_IDEAS_PATH.replace(':questionId', questionId),
      {
        method: 'GET',
      }
    );
  }

  static getTopIdea(
    questionId: string,
    topIdeaId: string
  ): Promise<ApiIdeaResponseType> {
    return ApiService.callApi(
      TOP_IDEAS_IDEA_PATH.replace(':questionId', questionId).replace(
        ':topIdeaId',
        topIdeaId
      ),
      {
        method: 'GET',
      }
    );
  }
}
