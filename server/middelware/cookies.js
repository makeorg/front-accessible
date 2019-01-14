import { SESSION_ID_COOKIE_KEY } from 'Constants/config';
import { uuid } from 'Helpers/uuid';
import ApiService from 'Api/ApiService';

export const cookiesMiddelware = (req, res, next) => {
  const cookies = req.universalCookies;
  let sessionId = cookies.get(SESSION_ID_COOKIE_KEY);

  if (!sessionId) {
    sessionId = uuid();
    cookies.set(SESSION_ID_COOKIE_KEY, sessionId);
  }

  ApiService.sessionId = sessionId;

  return next();
};
