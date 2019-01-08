/* eslint no-console: ["error", { allow: ["log"] }] */
/* @flow */
import axios from 'axios';

const PATH_QUESTION_CONFIGURATION = '/api/questions/:questionSlug?country=:country';

export default class SequenceService {
  static fetchConfiguration(questionSlug: string, country: string): Promose<Object> {
    return axios({
      method: 'GET',
      url: `${PATH_QUESTION_CONFIGURATION
        .replace(':questionSlug', questionSlug).replace(':country', country)}`,
      proxy: {
        port: process.env.PORT
      }
    })
      .then(response => response.data)
      .catch(error => console.log(error));
  }
}
