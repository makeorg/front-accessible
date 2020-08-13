// @flow
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { i18n } from 'Shared/i18n';
import { useCookies } from 'react-cookie';
import { getGTUPageLink, getDataPageLink } from 'Shared/helpers/url';
import { type StateRoot } from 'Shared/store/types';
import {
  NAVIGATION_ARIA_NEGATIVE_TAB_CLASS,
  PANEL_ARIA_NEGATIVE_TAB_CLASS,
} from 'Shared/constants/a11y';
import { COOKIE_BANNER } from 'Shared/constants/ids';
import {
  CookieContentStyle,
  CookieWrapperStyle,
  CookieParagraphStyle,
  CookieButtonStyle,
  CookieContentInnerStyle,
  CookieIconStyle,
} from './style';

const acceptCookieName: string = 'make-cookie';

export const CookieBanner = () => {
  const { country, language } = useSelector(
    (state: StateRoot) => state.appConfig
  );
  const [cookies, setCookies] = useCookies([acceptCookieName]);
  const [hasAccepted, setAccepted] = useState<boolean>(
    cookies[acceptCookieName] !== undefined
  );

  const handleClose = () => {
    setCookies(acceptCookieName, true, { path: '/' });
    setAccepted(true);
  };

  if (hasAccepted) {
    return null;
  }

  return (
    <CookieWrapperStyle
      id={COOKIE_BANNER}
      aria-label={i18n.t('common.cookie_area')}
      data-cy-container="cookie-banner"
      className={`${NAVIGATION_ARIA_NEGATIVE_TAB_CLASS} ${PANEL_ARIA_NEGATIVE_TAB_CLASS}`}
    >
      <CookieContentStyle>
        <CookieIconStyle
          aria-label={i18n.t('common.notifications.icons.information')}
        />
        <CookieContentInnerStyle>
          <CookieParagraphStyle
            dangerouslySetInnerHTML={{
              __html: i18n.t('cookie_alert.text', {
                gtu_link: `<a href="${getGTUPageLink(
                  country,
                  language
                )}" data-cy-link="gtu">$t(cookie_alert.gtu)</a>`,
                policy_link: `<a href="${getDataPageLink(
                  country,
                  language
                )}" data-cy-link="policy">$t(cookie_alert.policy)</a>`,
              }),
            }}
          />
          <CookieButtonStyle
            onClick={handleClose}
            data-cy-button="cookie-accept"
          >
            OK
          </CookieButtonStyle>
        </CookieContentInnerStyle>
      </CookieContentStyle>
    </CookieWrapperStyle>
  );
};
