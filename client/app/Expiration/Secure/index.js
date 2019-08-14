// @flow
import * as React from 'react';
import { withCookies, Cookies } from 'react-cookie';
import { withRouter } from 'react-router-dom';
import { UserApiService } from 'Shared/api/UserApiService';

type Props = {
  /** Children content */
  children: React.Node,
  /** Cookies object */
  cookies: Cookies,
  /** Object of router location */
  location: Location,
};

const SecureExpirationDateCookieName: string = 'make-secure-expiration';

const SecureExpirationHandler = ({ children, cookies, location }: Props) => {
  const [cookieData, setCookieData] = React.useState(
    cookies.get(SecureExpirationDateCookieName)
  );
  const secureExpirationDate = new Date(cookieData);
  const cookieDataRef = React.useRef(cookieData);

  cookieDataRef.current = cookieData;

  React.useEffect(() => {
    const currentDate = new Date();
    const FiveMinutesInMilliseconds = 5 * 60 * 1000;
    const timeBeforeExpire =
      secureExpirationDate.getTime() -
      currentDate.getTime() +
      FiveMinutesInMilliseconds;

    if (Number.isNaN(timeBeforeExpire) || timeBeforeExpire < 0) {
      return undefined;
    }

    const timer = setTimeout(async () => {
      if (cookieData !== cookies.get(SecureExpirationDateCookieName)) {
        setCookieData(cookies.get(SecureExpirationDateCookieName));
      } else {
        await UserApiService.logout();
        window.location = `${location.pathname}?secureExpired=true`;
      }
    }, timeBeforeExpire);
    return () => clearTimeout(timer);
  }, [cookieDataRef.current]);

  return children;
};

export const SecureExpiration = withRouter(
  withCookies(SecureExpirationHandler)
);
