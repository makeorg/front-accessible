// @flow
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { i18n } from 'Shared/i18n';
import { SvgInfos } from 'Client/ui/Svg/elements';
import { useCookies } from 'react-cookie';
import { getGTUPageLink, getDataPageLink } from 'Shared/helpers/url';
import { type StateRoot } from 'Shared/store/types';
import {
  CookieContentStyle,
  CookieWrapperStyle,
  CookieParagraphStyle,
  CookieButtonStyle,
  CookieContentInnerStyle,
} from './Styled';

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
    <CookieWrapperStyle aria-label={i18n.t('common.cookie_area')}>
      <CookieContentStyle>
        <SvgInfos
          aria-label={i18n.t('common.notifications.icons.information')}
          style={{ minWidth: '20px', marginTop: '4px', marginRight: '10px' }}
        />
        <CookieContentInnerStyle>
          <CookieParagraphStyle
            dangerouslySetInnerHTML={{
              __html: i18n.t('cookie_alert.text', {
                gtu_link: `<a href="${getGTUPageLink(
                  country,
                  language
                )}">$t(cookie_alert.gtu)</a>`,
                policy_link: `<a href="${getDataPageLink(
                  country,
                  language
                )}">$t(cookie_alert.policy)</a>`,
              }),
            }}
          />
          <CookieButtonStyle onClick={handleClose}>OK</CookieButtonStyle>
        </CookieContentInnerStyle>
      </CookieContentStyle>
    </CookieWrapperStyle>
  );
};
