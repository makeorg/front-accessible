// @flow
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { i18n } from 'Shared/i18n';
import { SvgInfos } from 'Client/ui/Svg/elements';
import { useCookies } from 'react-cookie';
import { getGTUPageLink, getDataPageLink } from 'Shared/helpers/url';
import {
  CookieContentStyle,
  CookieWrapperStyle,
  CookieParagraphStyle,
  CookieButtonStyle,
  CookieContentInnerStyle,
} from './Styled';

type Props = {
  country: string,
  language: string,
};
const acceptCookieName: string = 'make-cookie';

const CookieBannerComponent = ({ country, language }: Props) => {
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

const mapStateToProps = state => {
  const { country, language } = state.appConfig;

  return {
    country,
    language,
  };
};

export const CookieBanner = connect(mapStateToProps)(CookieBannerComponent);
