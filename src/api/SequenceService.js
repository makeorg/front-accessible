/* @flow */

import axios from 'axios';
import ApiService from './ApiService';

// todo: remmove it when question api is ready
const PROXY_URL = (process.env.NODE_ENV === 'development')
  ? 'http://localhost:9009'
  : 'https://accessible.preprod.makeorg.tech';

const PATH_START_SEQUENCE = '/sequences/start/:sequenceId';
const PATH_QUESTION_CONFIGURATION = '/api/questions/:questionSlug?country=:country';

export default class SequenceService {
  static startSequence(sequenceId: string): Promise<Object> {
    return ApiService
      .callApi(PATH_START_SEQUENCE.replace(':sequenceId', sequenceId), {
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
