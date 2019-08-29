// @flow
import React, { useState } from 'react';
import { i18n } from 'Shared/i18n';
import { SvgDisconnect, SvgInfos } from 'Client/ui/Svg/elements';
import { useCookies } from 'react-cookie';
import { GTU_LINK, DATA_POLICY_LINK } from 'Shared/constants/url';
import {
  CookieContentStyle,
  CookieWrapperStyle,
  CookieParagraphStyle,
  CookieCloseButtonStyle,
} from './Styled';

const acceptCookieName: string = 'make-cookie';

export const CookieBanner = () => {
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
          style={{ marginTop: '4px', marginRight: '10px' }}
        />
        <CookieParagraphStyle
          dangerouslySetInnerHTML={{
            __html: i18n.t('cookie_alert.text', {
              gtu_link: `<a href="${GTU_LINK}">$t(cookie_alert.gtu)</a>`,
              policy_link: `<a href="${DATA_POLICY_LINK}">$t(cookie_alert.policy)</a>`,
            }),
          }}
        />
      </CookieContentStyle>
      <CookieCloseButtonStyle
        aria-label={i18n.t('cookie_alert.close')}
        aria-expanded="false"
        onClick={handleClose}
      >
        <SvgDisconnect aria-hidden />
      </CookieCloseButtonStyle>
    </CookieWrapperStyle>
  );
};
