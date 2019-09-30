import { FRONT_URL } from 'Shared/constants/config';
import { env } from 'Shared/env';

/* eslint consistent-return: 0 */

const fs = require('fs');
const path = require('path');
const cache = require('memory-cache');
const { SERVER_DIR } = require('../paths');

export const ALLOWED_URL = env.isDev ? 'http://localhost:3000' : FRONT_URL;

export function questionApi(req, res) {
  res.setHeader('Access-Control-Allow-Origin', ALLOWED_URL);
  res.setHeader('Content-Type', 'application/json');

  const { questionSlug } = req.params;

  if (!new RegExp('^[a-z0-9-]+$').test(questionSlug)) {
    return res.status(400).end();
  }

  const questionPath = path.join(
    SERVER_DIR,
    'staticData/operationsParams',
    `${questionSlug}.json`
  );

  const content = cache.get(questionPath);
  if (content) {
    return res.send(content);
  }

  try {
    const result = fs.readFileSync(path.join(questionPath), 'utf8');
    cache.put(questionPath, result);

    return res.send(result);
  } catch (error) {
    return res.status(404).end();
  }
}

export function questionResults(req, res) {
  res.setHeader('Access-Control-Allow-Origin', ALLOWED_URL);
  res.setHeader('Content-Type', 'application/json');

  const { questionSlug } = req.params;

  if (!new RegExp('^[a-z0-9-]+$').test(questionSlug)) {
    return res.status(400).end();
  }

  const questionPath = path.join(
    SERVER_DIR,
    'staticData/questionResults',
    `${questionSlug}.json`
  );

  const content = cache.get(questionPath);
  if (content) {
    return res.send(content);
  }

  try {
    const result = fs.readFileSync(path.join(questionPath), 'utf8');
    cache.put(questionPath, result);

    return res.send(result);
  } catch (error) {
    return res.status(404).end();
  }
}
