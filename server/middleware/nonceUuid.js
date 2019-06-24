import { uuid } from 'Shared/helpers/uuid';

export const nonceUuidMiddleware = (req, res, next) => {
  res.locals.nonce = uuid();

  return next();
};
