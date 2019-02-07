import { SESSION_ID_COOKIE_KEY } from 'Shared/constants/config';
import { uuid } from 'Shared/helpers/uuid';

export const cookiesHandlerMiddleware = (req, res, next) => {
  const cookies = req.universalCookies;
  let sessionId = cookies.get(SESSION_ID_COOKIE_KEY);

  if (!sessionId) {
    sessionId = uuid();
    cookies.set(SESSION_ID_COOKIE_KEY, sessionId);
  }

  req.params.sessionId = sessionId;

  return next();
};
