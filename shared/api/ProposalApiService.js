// @flow

import { ApiService } from './ApiService';
import {
  type ApiServiceHeaders,
  type ApiSearchProposalsResponseType,
} from '../types/api';

export const PATH_PROPOSALS = '/proposals';
export const PATH_PROPOSAL_GET = '/proposals/:proposalId';

export const SORT_ALGORITHM = {
  TAGGED_FIRST: 'taggedFirst',
};

export class ProposalApiService {
  static propose(content: string, questionId: string): Promise<Object> {
    return ApiService.callApi(PATH_PROPOSALS, {
      method: 'POST',
      body: JSON.stringify({
        content,
        questionId,
        country: ApiService.country,
        language: ApiService.language,
      }),
    });
  }

  static getProposal(proposalId: string, headers: ApiServiceHeaders = {}) {
    return ApiService.callApi(
      PATH_PROPOSAL_GET.replace(':proposalId', proposalId),
      {
        method: 'GET',
        headers,
        proposalId,
      }
    );
  }

  static searchProposals(
    country: string,
    language: string,
    questionId?: string,
    tagsIds?: string,
    seed?: ?number,
    limit?: number = 20,
    skip?: number = 0,
    sortAlgorithm?: string,
    content?: string,
    headers?: ApiServiceHeaders = {}
  ): Promise<ApiSearchProposalsResponseType> {
    return ApiService.callApi(PATH_PROPOSALS, {
      method: 'GET',
      headers,
      params: {
        sortAlgorithm,
        questionId,
        content,
        seed,
        limit,
        skip,
        tagsIds,
        country,
        language,
      },
    });
  }
}
