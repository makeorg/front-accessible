import { v4 as uuidv4 } from 'uuid';

export const nonceUuidMiddleware = (req, res, next) => {
  res.locals.nonce = uuidv4();

  return next();
};
