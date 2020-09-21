// @flow
import React, {
  useEffect,
  useRef,
  useState,
  type Node as TypeReactNode,
} from 'react';
import { withCookies, Cookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { showSessionExpirationModal } from 'Shared/store/actions/modal';
import { apiClient } from 'Shared/api/ApiService/ApiService.client';
import { updateSessionId } from 'Shared/store/actions/session';
import { type StateRoot } from 'Shared/store/types';
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
  const { sessionId } = useSelector((state: StateRoot) => state.session);
  const [cookieData, setCookieData] = useState(
    cookies.get(sessionExpirationDateCookieName)
  );
  const sessionExpirationDate = new Date(cookieData);
  const cookieDataRef = useRef(cookieData);
  const showExpirationSession: string = useSelector(
    (state: StateRoot) => state.modal.showExpirationSession
  );

  cookieDataRef.current = cookieData;

  const showModal = () => {
    if (!showExpirationSession) {
      dispatch(showSessionExpirationModal());
    }
  };

  apiClient.addHeadersListener(headers => {
    if (headers['x-session-id'] === sessionId) {
      return;
    }
    dispatch(updateSessionId(headers['x-session-id']));
    if (sessionId && headers['x-session-id']) {
      showModal();
    }
  });

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cookieDataRef.current]);

  return (
    <>
      {children}
      <ExpirationSessionModal />
    </>
  );
};

export const SessionExpiration = withCookies(SessionExpirationHandler);
