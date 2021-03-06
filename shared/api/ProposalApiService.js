// @flow
import { ApiService } from './ApiService';
import { type ApiServiceHeadersType } from '../types/api';

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

type TypeFeedAlgortithms = {
  CONTROVERSY: { key: string, value: string },
  ACTORS: { key: string, value: string },
  POPULAR: { key: string, value: TypeSort },
  REALISTIC: { key: string, value: string },
  RECENT: { key: string, value: string },
  TAGGED_FIRST: { key: string, value: string },
};

export const PROPOSALS_FEED_ALGORITHMS: TypeFeedAlgortithms = {
  TAGGED_FIRST: { key: 'sortAlgorithm', value: 'taggedFirst' },
  POPULAR: { key: 'sortAlgorithm', value: 'popular' },
  ACTORS: { key: 'userType', value: 'ORGANISATION,PERSONALITY' },
  RECENT: { key: 'sort', value: 'createdAt' },
  REALISTIC: { key: 'sortAlgorithm', value: 'realistic' },
  CONTROVERSY: { key: 'sortAlgorithm', value: 'controversy' },
};

type TypeAvailableAlgorithms = {
  CONTROVERSY: { key: string, value: string },
  ACTORS: { key: string, value: string },
  POPULAR: { key: string, value: TypeSort },
  REALISTIC: { key: string, value: string },
  RECENT: { key: string, value: string },
  TAGGED_FIRST: { key: string, value: string },
  TOP_SCORE: { key: string, value: string },
};

export const AVAILABLE_ALGORITHMS: TypeAvailableAlgorithms = {
  TAGGED_FIRST: { key: 'sortAlgorithm', value: 'taggedFirst' },
  POPULAR: { key: 'sortAlgorithm', value: 'popular' },
  ACTORS: { key: 'userType', value: 'ORGANISATION,PERSONALITY' },
  REALISTIC: { key: 'sortAlgorithm', value: 'realistic' },
  CONTROVERSY: { key: 'sortAlgorithm', value: 'controversy' },
  TOP_SCORE: { key: 'sort', value: 'scores.topScoreAjustedWithVotes' },
  CONTENT: { key: 'sort', value: 'content' },
  SLUG: { key: 'sort', value: 'slug' },
  RECENT: { key: 'sort', value: 'createdAt' },
  UPDATED: { key: 'sort', value: 'updatedAt' },
  TRENDING: { key: 'sort', value: 'trending' },
  LABELS: { key: 'sort', value: 'labels' },
  COUNTRY: { key: 'sort', value: 'country' },
  LANGUAGE: { key: 'sort', value: 'language' },
};

export class ProposalApiService {
  static propose(content: string, questionId: string): Promise<any> {
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

  static getProposal(
    proposalId: string,
    headers: ApiServiceHeadersType = {}
  ): Promise<any> {
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
    headers: ApiServiceHeadersType = {}
  ): Promise<any> {
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
    questionId?: string,
    tagsIds?: string,
    seed?: ?number,
    limit?: number = 20,
    skip?: number = 0,
    sortTypeKey?: string,
    content?: string,
    ideaIds?: string,
    order?: string,
    headers?: ApiServiceHeadersType = {}
  ): Promise<any> {
    const params = {
      questionId,
      content,
      seed,
      limit,
      skip,
      tagsIds,
      country,
      ideaIds,
      order,
    };

    if (sortTypeKey) {
      const sortType = AVAILABLE_ALGORITHMS[sortTypeKey];
      params[sortType.key] = sortType.value;

      if (AVAILABLE_ALGORITHMS[sortTypeKey].key === 'sort') {
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
