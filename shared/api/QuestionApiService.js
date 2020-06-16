// @flow
import { generatePath } from 'react-router';
import { type ApiServiceHeadersType } from '../types/api';
import { ApiService } from './ApiService';

const PATH_QUESTIONS_LIST = '/questions';
const PATH_QUESTIONS_SEARCH = '/questions/search';
const PATH_QUESTION_DETAIL = '/questions/:questionSlugOrId/details';
const PATH_QUESTION_START_SEQUENCE = '/questions/:questionId/start-sequence';
const PATH_QUESTION_PARTNERS = '/questions/:questionId/partners';
const PATH_QUESTION_PERSONALITIES = '/questions/:questionId/personalities';
const PATH_QUESTION_POPULAR_TAGS = '/questions/:questionId/popular-tags';
const PATH_QUESTION_TOP_IDEAS = '/questions/:questionId/top-ideas';
const PATH_QUESTION_TOP_IDEA_DETAILS =
  '/questions/:questionId/top-ideas/:topIdeaId';

export class QuestionApiService {
  static getQuestions(
    country: string,
    language: string,
    status: ?string, // Upcoming, Open, Finished
    sortAlgorithm: ?string, // Chronological, Featured
    limit: ?number,
    skip: ?number,
    headers: ?ApiServiceHeadersType = {}
  ): Promise<any> {
    return ApiService.callApi(generatePath(PATH_QUESTIONS_LIST), {
      method: 'GET',
      headers,
      params: { country, language, status, sortAlgorithm, limit, skip },
    });
  }

  static getQuestionPartners(
    questionId: string,
    partnerKind: string,
    sortAlgorithm?: string,
    limit: ?number = undefined,
    skip: ?number = undefined
  ): Promise<any> {
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
    headers: ApiServiceHeadersType = {}
  ): Promise<any> {
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
    headers?: ApiServiceHeadersType = {}
  ): Promise<any> {
    return ApiService.callApi(
      generatePath(PATH_QUESTION_POPULAR_TAGS, { questionId }),
      { method: 'GET', headers, params: { limit, skip } }
    );
  }

  static getQuestionPersonalities(
    questionId: string,
    personalityRole: ?string = undefined,
    limit: ?number = undefined,
    skip: ?number = undefined,
    headers?: ApiServiceHeadersType = {}
  ): Promise<any> {
    return ApiService.callApi(
      generatePath(PATH_QUESTION_PERSONALITIES, { questionId }),
      { method: 'GET', headers, params: { personalityRole, limit, skip } }
    );
  }

  static startSequence(
    questionId: string,
    includedProposalIds: string[] = [],
    headers?: ApiServiceHeadersType = {}
  ): Promise<any> {
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
    headers?: ApiServiceHeadersType = {}
  ): Promise<any> {
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

  static getTopIdeas(
    questionId: string,
    headers?: ApiServiceHeadersType = {}
  ): Promise<any> {
    return ApiService.callApi(
      PATH_QUESTION_TOP_IDEAS.replace(':questionId', questionId),
      {
        method: 'GET',
        headers,
      }
    );
  }

  static getTopIdea(
    questionId: string,
    topIdeaId: string,
    headers?: ApiServiceHeadersType = {}
  ): Promise<any> {
    return ApiService.callApi(
      PATH_QUESTION_TOP_IDEA_DETAILS.replace(':questionId', questionId).replace(
        ':topIdeaId',
        topIdeaId
      ),
      {
        method: 'GET',
        headers,
      }
    );
  }
}
