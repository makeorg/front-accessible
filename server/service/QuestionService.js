import { QuestionApiService } from 'Shared/api/QuestionApiService';
import { logger } from '../logger';

const cache = require('memory-cache');

export async function getQuestion(questionSlugOrId, headers) {
  const CACHE_KEY = `QUESTION_${questionSlugOrId}`;
  const content = cache.get(CACHE_KEY);
  if (content) {
    return content;
  }

  try {
    const questionDetail = await QuestionApiService.getDetail(
      questionSlugOrId,
      headers
    );
    cache.put(CACHE_KEY, questionDetail, 300000);

    return questionDetail;
  } catch (error) {
    logger.log('error', error);
    return null;
  }
}
