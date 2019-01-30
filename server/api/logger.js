import { logger } from '../logger';

const parser = require('ua-parser-js');

export function loggerApi(req, res) {
  const ua = parser(req.headers['user-agent']);
  const { level, data } = req.body;

  logger.log(
    level,
    {
      ...data,
      browser: ua.browser,
      os: ua.os,
      device: ua.device
    }
  );

  return res.sendStatus(204);
}
