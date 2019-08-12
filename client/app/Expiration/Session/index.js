// @flow
import * as React from 'react';
import { withCookies, Cookies } from 'react-cookie';
import { withRouter } from 'react-router-dom';

type Props = {
  /** Children content */
  children: React.Node,
  /** Cookies object */
  cookies: Cookies,
  /** Object of router location */
  location: Location,
};

const sessionExpirationDateCookieName: string = 'make-session-id-expiration';

const SessionExpirationHandler = ({ children, cookies, location }: Props) => {
  const [cookieData, setCookieData] = React.useState(
    cookies.get(sessionExpirationDateCookieName)
  );
  const sessionExpirationDate = new Date(cookieData);
  const cookieDataRef = React.useRef(cookieData);

  cookieDataRef.current = cookieData;

  React.useEffect(() => {
    const currentDate = new Date();
    const timeBeforeExpire =
      sessionExpirationDate.getTime() - currentDate.getTime() - 5 * 60 * 1000;

    if (Number.isNaN(timeBeforeExpire) || timeBeforeExpire < 0) {
      return undefined;
    }

    const timer = setTimeout(() => {
      if (cookieData !== cookies.get(sessionExpirationDateCookieName)) {
        setCookieData(cookies.get(sessionExpirationDateCookieName));
      } else {
        window.location = `${location.pathname}?sessionExpired=true`;
      }
    }, timeBeforeExpire);
    return () => clearTimeout(timer);
  }, [cookieDataRef.current]);

  return children;
};

export const SessionExpiration = withRouter(
  withCookies(SessionExpirationHandler)
);
