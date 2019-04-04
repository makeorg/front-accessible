import { QuestionService } from 'Shared/api/QuestionService';
import { logger } from '../logger';

const fs = require('fs');
const path = require('path');
const cache = require('memory-cache');
const { SERVER_DIR } = require('../paths');

export async function getQuestion(questionSlug, headers) {
  const content = cache.get(questionSlug);
  if (content) {
    return content;
  }

  try {
    const questionDetail = await QuestionService.getDetail(
      questionSlug,
      headers
    );
    cache.put(questionSlug, questionDetail, 300000);

    return questionDetail;
  } catch (error) {
    logger.log('error', error);
    return null;
  }
}

export async function getQuestionConfiguration(questionSlug) {
  const questionPath = path.join(
    SERVER_DIR,
    'staticData/operationsParams',
    `${questionSlug}.json`
  );

  const content = cache.get(questionPath);
  if (content) {
    return content;
  }

  try {
    const result = fs.readFileSync(path.join(questionPath), 'utf8');
    const jsonResult = JSON.parse(result);

    cache.put(questionPath, jsonResult, 300000);

    return jsonResult;
  } catch (error) {
    logger.log('error', error);
    return null;
  }
}
