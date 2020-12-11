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
const apiHeaderListenerName: string = 'sessionIdListener';

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
  const [apiSessionId, setApiSessionId] = useState('');

  cookieDataRef.current = cookieData;

  const showModal = () => {
    if (!showExpirationSession) {
      dispatch(showSessionExpirationModal());
    }
  };

  // update apiSessionId from api response header
  useEffect(() => {
    apiClient.addHeadersListener(apiHeaderListenerName, headers => {
      setApiSessionId(headers['x-session-id']);
    });

    return () => {
      apiClient.removeHeadersListener(apiHeaderListenerName);
    };
  }, []);

  // clear apiSessionId when sessionId is cleared after a logout
  useEffect(() => {
    if (!sessionId) {
      setApiSessionId('');
    }
  }, [sessionId]);

  // show modal if sessionId in state not match session id from API response
  useEffect(() => {
    const sessionIdHasChanged = !!apiSessionId && apiSessionId !== sessionId;
    const isInitalSetup = !sessionId;

    if (!isInitalSetup && sessionIdHasChanged) {
      showModal();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiSessionId]);

  // update sessionId from apiSessionId
  useEffect(() => {
    if (apiSessionId && apiSessionId !== sessionId) {
      dispatch(updateSessionId(apiSessionId));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiSessionId]);

  // show modal when session expires
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
