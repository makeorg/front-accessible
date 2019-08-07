import { logger } from '../logger';

export const loggerMiddleware = (req, res, next) => {
  logger.log(
    'info',
    JSON.stringify({
      message: 'Request recieved from client',
      url: req.originalUrl,
    })
  );

  return next();
};
