// @flow
import {
  type ApiServiceHeaders,
  type ApiSearchQuestionsResponseType,
} from 'Shared/types/api';
import { ApiService } from './ApiService';

const PATH_QUESTIONS_SEARCH = '/questions/search';
const PATH_QUESTION_DETAIL = '/questions/:questionSlugOrId/details';
const PATH_QUESTION_START_SEQUENCE = '/questions/:questionId/start-sequence';

export class QuestionApiService {
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

  static startSequence(
    questionId: string,
    includedProposalIds: string[] = []
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

    return ApiService.callApi(startSequenceUrl, { method: 'GET' });
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
