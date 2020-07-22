import winston from 'winston';
import { env } from 'Shared/env';

const { combine, timestamp, label, simple, printf } = winston.format;

const logFormat = printf(info => {
  const data = info instanceof Object ? info : { message: info };

  const { stack, level, os, device, browser } = data;
  const infoLabel = data.label;
  const infoTime = data.timestamp;
  const infoBrowser = JSON.stringify(browser);
  const infoOS = JSON.stringify(os);
  const infoDevice = JSON.stringify(device);
  const infoStack =
    typeof stack === 'string' ? stack.replace(/\n/g, ' >>> ') : stack;

  delete data.stack;
  delete data.level;
  delete data.os;
  delete data.device;
  delete data.browser;
  delete data.label;
  delete data.timestamp;

  const message = JSON.stringify(data);

  // eslint-disable-next-line max-len
  return `${infoTime} ${infoLabel} browser ${infoBrowser} - os ${infoOS} - device ${infoDevice} - ${level}: ${message} - stackTrace: ${infoStack}`;
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
