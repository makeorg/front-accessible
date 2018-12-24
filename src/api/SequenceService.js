/* @flow */

import axios from 'axios';
import { FRONT_URL } from 'Constants/config';
import ApiService from './ApiService';

// todo: remmove it when question api is ready
const PROXY_URL = (process.env.NODE_ENV === 'development')
  ? 'http://localhost:9009'
  : FRONT_URL;

const PATH_START_SEQUENCE = '/sequences/start/:sequenceId';
const PATH_QUESTION_CONFIGURATION = '/api/questions/:questionSlug?country=:country';

export default class SequenceService {
  static startSequence(sequenceId: string, includedProposalIds: ?Array = []): Promise<Object> {
    let startSequenceUrl = PATH_START_SEQUENCE.replace(':sequenceId', sequenceId);
    if (includedProposalIds.length) {
      const includeParams = includedProposalIds.map(proposalId => (
        proposalId !== null ? `include=${proposalId}` : ''
      )).join('&');

      startSequenceUrl += includeParams ? `?${includeParams}` : '';
    }

    return ApiService
      .callApi(startSequenceUrl, {
        method: 'GET'
      });
  }

  static fetchConfiguration(questionSlug: string, country: string): Promose<Object> {
    return axios({
      method: 'GET',
      url: `${PROXY_URL}${PATH_QUESTION_CONFIGURATION
        .replace(':questionSlug', questionSlug).replace(':country', country)}`
    }).then(response => response.data);
  }
}
