// @flow
import React, {
  useEffect,
  useRef,
  useState,
  type Node as TypeReactNode,
} from 'react';
import { withCookies, Cookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import { showSessionExpirationModal } from 'Shared/store/actions/modal';
import { ExpirationSessionModal } from './Modal';

type Props = {
  /** Children content */
  children: TypeReactNode,
  /** Cookies object */
  cookies: Cookies,
};

const sessionExpirationDateCookieName: string = 'make-session-id-expiration';

const SessionExpirationHandler = ({ children, cookies }: Props) => {
  const dispatch = useDispatch();
  const [cookieData, setCookieData] = useState(
    cookies.get(sessionExpirationDateCookieName)
  );
  const sessionExpirationDate = new Date(cookieData);
  const cookieDataRef = useRef(cookieData);

  cookieDataRef.current = cookieData;

  const showModal = () => {
    dispatch(showSessionExpirationModal());
  };

  useEffect(() => {
    const currentDate = new Date();
    const timeBeforeExpire =
      sessionExpirationDate.getTime() - currentDate.getTime();
    if (Number.isNaN(timeBeforeExpire) || timeBeforeExpire < 0) {
      return undefined;
    }

    const timer = setTimeout(() => {
      if (cookieData !== cookies.get(sessionExpirationDateCookieName)) {
        setCookieData(cookies.get(sessionExpirationDateCookieName));
      } else {
        showModal();
      }
    }, timeBeforeExpire);
    return () => clearTimeout(timer);
  }, [cookieDataRef.current]);

  return (
    <>
      {children}
      <ExpirationSessionModal />
    </>
  );
};

export const SessionExpiration = withCookies(SessionExpirationHandler);
