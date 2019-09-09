// @flow

import * as React from 'react';
import { withCookies, Cookies } from 'react-cookie';
import { connect } from 'react-redux';
import { showSessionExpirationModal } from 'Shared/store/actions/modal';
import { ExpirationSessionModal } from './Modal';

type Props = {
  /** Children content */
  children: React.Node,
  /** Cookies object */
  cookies: Cookies,
  /** Function to be exexuted when session expire */
  showModal: () => void,
};

const sessionExpirationDateCookieName: string = 'make-session-id-expiration';

const SessionExpirationHandler = ({ children, cookies, showModal }: Props) => {
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

const mapDispatchToProps = dispatch => ({
  showModal: () => {
    dispatch(showSessionExpirationModal());
  },
});

export const SessionExpiration = withCookies(
  connect(
    null,
    mapDispatchToProps
  )(SessionExpirationHandler)
);
