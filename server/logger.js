import winston from 'winston';

const {
  combine,
  timestamp,
  label,
  simple,
  printf
} = winston.format;

const logFormat = printf(info => (
  `${info.timestamp} [${info.label}] ${info.level}: ${info.message} - sessionId: ${info.sessionId} stack: ${info.stack || 'noStack'}`
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
  transports: [
    new winston.transports.Console()
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}
