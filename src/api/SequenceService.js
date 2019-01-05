/* eslint no-console: ["error", { allow: ["log"] }] */
/* @flow */
import axios from 'axios';
import { FRONT_URL } from 'Constants/config';

// todo: remmove it when question api is ready
const PROXY_URL = (process.env.NODE_ENV === 'development')
  ? 'http://localhost:9009'
  : FRONT_URL;

const PATH_QUESTION_CONFIGURATION = '/api/questions/:questionSlug?country=:country';

export default class SequenceService {
  static fetchConfiguration(questionSlug: string, country: string): Promose<Object> {
    return axios({
      method: 'GET',
      url: `${PROXY_URL}${PATH_QUESTION_CONFIGURATION
        .replace(':questionSlug', questionSlug).replace(':country', country)}`
    })
      .then(response => response.data)
      .catch(error => console.log(error));
  }
}
