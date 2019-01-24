/* eslint no-console: ["error", { allow: ["log"] }] */
/* @flow */
import axios from 'axios';
import Logger from 'Services/Logger';
import { NODE_API_BASE } from './ApiService';

const PATH_QUESTION_CONFIGURATION = '/api/questions/:questionSlug';

export default class SequenceService {
  static fetchConfiguration(questionSlug: string): Promise<Object> {
    return axios({
      method: 'GET',
      url: `${NODE_API_BASE}${PATH_QUESTION_CONFIGURATION
        .replace(':questionSlug', questionSlug)}`,
      proxy: {
        port: process.env.PORT
      }
    })
      .then(response => response.data)
      .catch((error) => {
        Logger.logError(`Error in fetchConfiguration for ${questionSlug} : ${error}`);
      });
  }
}
