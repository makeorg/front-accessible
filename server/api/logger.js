import { getLoggerInstance } from '../logger';

const parser = require('ua-parser-js');

export const loggerApi = async (req, res) => {
  const ua = parser(req.headers['user-agent']);
  const { level, data } = req.body;
  const normalizedData = typeof data === 'string' ? { message: data } : data;
  const logger = await getLoggerInstance();
  logger.log(level, {
    ...normalizedData,
    browser: ua.browser,
    os: ua.os,
    device: ua.device,
    raw: ua.ua,
  });

  return res.sendStatus(204);
};
