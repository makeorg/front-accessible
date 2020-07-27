import { logger } from '../logger';

const parser = require('ua-parser-js');

export function loggerApi(req, res) {
  const ua = parser(req.headers['user-agent']);
  const { level, data } = req.body;
  const normalizedData = typeof data === 'string' ? { message: data } : data;

  logger.log(level, {
    ...normalizedData,
    browser: ua.browser,
    os: ua.os,
    device: ua.device,
    raw: ua.ua,
  });

  return res.sendStatus(204);
}
