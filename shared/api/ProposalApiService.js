// @flow
import { ApiService } from './ApiService';
import {
  type ApiServiceHeaders,
  type ApiSearchProposalsResponseType,
} from '../types/api';

export const PATH_PROPOSALS = '/proposals';
export const PATH_TOP_PROPOSALS = '/questions/:questionId/top-proposals';
export const PATH_PROPOSAL_GET = '/proposals/:proposalId';

type TypeSort =
  | 'content'
  | 'slug'
  | 'createdAt'
  | 'updatedAt'
  | 'trending'
  | 'labels'
  | 'country'
  | 'language'
  | 'popular';

type TypeSortAlgortithm = {
  CONTROVERSY: { key: string, value: string },
  ACTORS: { key: string, value: string },
  POPULAR: { key: string, value: TypeSort },
  REALISTIC: { key: string, value: string },
  RECENT: { key: string, value: string },
  TAGGED_FIRST: { key: string, value: string },
};

// type "sort" also support values : "content", "slug", "createdAt", "updatedAt", "trending", "labels", "country", "language"
export const SORT_ALGORITHM: TypeSortAlgortithm = {
  TAGGED_FIRST: { key: 'sortAlgorithm', value: 'taggedFirst' },
  POPULAR: { key: 'sortAlgorithm', value: 'popular' },
  ACTORS: { key: 'userType', value: 'ORGANISATION,PERSONALITY' },
  RECENT: { key: 'sort', value: 'createdAt' },
  REALISTIC: { key: 'sortAlgorithm', value: 'realistic' },
  CONTROVERSY: { key: 'sortAlgorithm', value: 'controversy' },
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

  static getPopularProposals(
    questionId: string,
    headers: ApiServiceHeaders = {}
  ) {
    return ApiService.callApi(
      PATH_TOP_PROPOSALS.replace(':questionId', questionId),
      {
        method: 'GET',
        headers,
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
    sortTypeKey?: string,
    content?: string,
    ideaIds?: string,
    order?: string,
    headers?: ApiServiceHeaders = {}
  ): Promise<ApiSearchProposalsResponseType> {
    const params = {
      questionId,
      content,
      seed,
      limit,
      skip,
      tagsIds,
      country,
      language,
      ideaIds,
      order,
    };

    if (sortTypeKey) {
      const sortType = SORT_ALGORITHM[sortTypeKey];
      params[sortType.key] = sortType.value;

      if (SORT_ALGORITHM[sortTypeKey].key === 'sort') {
        params.order = 'DESC';
      }
    }
    return ApiService.callApi(PATH_PROPOSALS, {
      method: 'GET',
      headers,
      params,
    });
  }
}
