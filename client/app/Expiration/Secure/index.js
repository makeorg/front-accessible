// @flow
import { useEffect, useRef, useState, type Node as TypeReactNode } from 'react';
import { useCookies } from 'react-cookie';
import { useLocation } from 'react-router-dom';
import { UserService } from 'Shared/services/User';

type Props = {
  /** Children content */
  children: TypeReactNode,
};

const SecureExpirationDateCookieName: string = 'make-secure-expiration';

export const SecureExpiration = ({ children }: Props) => {
  const [cookies] = useCookies([SecureExpirationDateCookieName]);
  const [cookieData, setCookieData] = useState(
    cookies[SecureExpirationDateCookieName]
  );
  const secureExpirationDate = new Date(cookieData);
  const cookieDataRef = useRef(cookieData);
  const location = useLocation();

  cookieDataRef.current = cookieData;

  useEffect(() => {
    const currentDate = new Date();
    const FiveMinutesInMilliseconds = 5 * 60 * 1000;
    const timeBeforeExpire =
      secureExpirationDate.getTime() -
      currentDate.getTime() -
      FiveMinutesInMilliseconds;

    if (Number.isNaN(timeBeforeExpire) || timeBeforeExpire < 0) {
      return undefined;
    }

    const timer = setTimeout(async () => {
      if (cookieData !== cookies[SecureExpirationDateCookieName]) {
        setCookieData(cookies[SecureExpirationDateCookieName]);
      } else {
        UserService.logout(() => {
          window.location = `${location.pathname}?secureExpired=true`;
        });
      }
    }, timeBeforeExpire);
    return () => clearTimeout(timer);
  }, [cookieDataRef.current]);

  return children;
};
