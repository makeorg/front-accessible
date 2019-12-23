// @flow
import { generatePath } from 'react-router';
import {
  type ApiServiceHeaders,
  type ApiSearchQuestionsResponseType,
} from 'Shared/types/api';
import { ApiService } from './ApiService';

const PATH_QUESTIONS_SEARCH = '/questions/search';
const PATH_QUESTION_DETAIL = '/questions/:questionSlugOrId/details';
const PATH_QUESTION_START_SEQUENCE = '/questions/:questionId/start-sequence';
const PATH_QUESTION_PARTNERS = '/questions/:questionId/partners';
export const PATH_QUESTION_POPULAR_TAGS = '/questions/:questionId/popular-tags';

export class QuestionApiService {
  static getQuestionPartners(
    questionId: string,
    partnerKind: string,
    sortAlgorithm?: string,
    limit: ?number = undefined,
    skip: ?number = undefined
  ): Promise<Object> {
    const headers = {};
    return ApiService.callApi(
      generatePath(PATH_QUESTION_PARTNERS, { questionId }),
      {
        method: 'GET',
        headers,
        params: { sortAlgorithm, partnerKind, limit, skip },
      }
    );
  }

  static getDetail(
    questionSlugOrId: string,
    headers: ApiServiceHeaders = {}
  ): Promise<Object> {
    return ApiService.callApi(
      PATH_QUESTION_DETAIL.replace(':questionSlugOrId', questionSlugOrId),
      {
        method: 'GET',
        headers,
      }
    );
  }

  static getQuestionPopularTags(
    questionId: string,
    limit: ?number = undefined,
    skip: ?number = undefined,
    headers?: ApiServiceHeaders = {}
  ): Promise<Object> {
    return ApiService.callApi(
      generatePath(PATH_QUESTION_POPULAR_TAGS, { questionId }),
      { method: 'GET', headers, params: { limit, skip } }
    );
  }

  static startSequence(
    questionId: string,
    includedProposalIds: string[] = [],
    headers?: ApiServiceHeaders = {}
  ): Promise<Object> {
    let startSequenceUrl = PATH_QUESTION_START_SEQUENCE.replace(
      ':questionId',
      questionId
    );
    // remove null value
    const includeParams = includedProposalIds
      .map(proposalId => (proposalId ? `include=${proposalId}` : ''))
      .join('&');

    startSequenceUrl += includeParams ? `?${includeParams}` : '';

    return ApiService.callApi(startSequenceUrl, {
      method: 'GET',
      headers,
    });
  }

  static searchQuestions(
    country: string,
    language: string,
    content: string,
    sort?: string = 'endDate',
    order?: string = 'DESC',
    headers?: ApiServiceHeaders = {}
  ): Promise<ApiSearchQuestionsResponseType> {
    return ApiService.callApi(PATH_QUESTIONS_SEARCH, {
      method: 'GET',
      headers,
      params: {
        questionContent: content,
        country,
        language,
        sort,
        order,
      },
    });
  }
}
