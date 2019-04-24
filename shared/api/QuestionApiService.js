// @flow

import { type ApiServiceHeaders } from 'Shared/types/api';
import { ApiService } from './ApiService';

const PATH_QUESTION_DETAIL = '/questions/:questionSlugOrId/details';
const PATH_QUESTION_START_SEQUENCE = '/questions/:questionId/start-sequence';

export class QuestionApiService {
  static getDetail(questionSlugOrId: string, headers: ApiServiceHeaders = {}) {
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
}
