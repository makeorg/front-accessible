import winston from 'winston';
import { env } from 'Shared/env';

const { combine, timestamp, label, simple, printf } = winston.format;

const logFormat = printf(info => {
  const message =
    info.message instanceof Object
      ? JSON.stringify(info.message)
      : info.message;
  // eslint-disable-next-line max-len
  return `${info.timestamp} ${info.label} browser ${JSON.stringify(
    info.browser
  )} - os ${JSON.stringify(info.os)} - device ${JSON.stringify(
    info.device
  )} - ${info.level}: ${message} - stackTrace: ${info.stack}`;
});

const isTestEnv = env.isTest();
/**
 * Instantiate the logger
 */
export const logger = winston.createLogger({
  silent: isTestEnv,
  format: combine(
    label({ label: 'front-accessible' }),
    timestamp(),
    simple(),
    logFormat
  ),
  transports: [new winston.transports.Console()],
});
