// @flow
import axios from 'axios';
import { type QuestionResultsType } from 'Shared/types/question';
import { Logger } from 'Shared/services/Logger';
import { NODE_API_BASE } from './ApiService';

const PATH_RESULTS_CONFIGURATION = '/api/results/:questionSlug';

export class QuestionNodeService {
  static fetchResults(questionSlug: string): Promise<QuestionResultsType> {
    return axios({
      method: 'GET',
      url: `${NODE_API_BASE}${PATH_RESULTS_CONFIGURATION.replace(
        ':questionSlug',
        questionSlug
      )}`,
      proxy: {
        port: process.env.PORT,
      },
    })
      .then(response => response.data)
      .catch(error => {
        Logger.logError(`Error in fetchResults for ${questionSlug} : ${error}`);
      });
  }
}
