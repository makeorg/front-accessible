import winston from 'winston';
import { env } from '../shared/env';

const {
  combine,
  timestamp,
  label,
  simple,
  printf
} = winston.format;

const logFormat = printf(info => (
  `${info.timestamp} ${info.label} ${info.sessionId} ${info.level}: ${info.message} stackTrace: ${info.stack}`
));

/**
 * Instantiate the logger
 */
export const logger = winston.createLogger({
  format: combine(
    label({ label: 'front-accessible' }),
    timestamp(),
    simple(),
    logFormat
  ),
  transports: [new winston.transports.Console()]
});

if (env.isDev()) {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}
