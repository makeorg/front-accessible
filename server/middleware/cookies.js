import { SESSION_ID_COOKIE_KEY } from 'Src/constants/config';
import { uuid } from 'Src/helpers/uuid';
import ApiService from 'Src/api/ApiService';

export const cookiesHandlerMiddleware = (req, res, next) => {
  const cookies = req.universalCookies;
  let sessionId = cookies.get(SESSION_ID_COOKIE_KEY);

  if (!sessionId) {
    sessionId = uuid();
    cookies.set(SESSION_ID_COOKIE_KEY, sessionId);
  }

  ApiService.sessionId = sessionId;

  return next();
};
