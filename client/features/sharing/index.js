import * as React from 'react';
import { useLocation } from 'react-router';
import { type Location } from 'history';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';
import { i18n } from 'Shared/i18n';
import { trackClickShare } from 'Shared/services/Tracking';
import {
  SvgFacebookLogoF,
  SvgTwitterLogo,
  SvgLinkedinLogoIn,
} from 'Client/ui/Svg/elements';
import {
  twitterShareUrl,
  facebookShareUrl,
  linkedinShareUrl,
} from 'Shared/helpers/social';
import Cookies from 'universal-cookie';
import { USER_PREFERENCES_COOKIE } from 'Shared/constants/cookies';
import { useDispatch } from 'react-redux';
import {
  NOTIFICATION_LEVEL_INFORMATION,
  SOCIAL_MEDIA_COOKIES_MESSAGE,
} from 'Shared/constants/notifications';
import { displayNotificationBanner } from 'Shared/store/actions/notifications';
import { type UserCookiePreferences } from 'Shared/types/user';
import {
  SharingStyle,
  FacebookButtonStyle,
  TwitterButtonStyle,
  LinkedInButtonStyle,
} from './Styled';

/**
 * Renders Sharing
 */
export const Sharing = () => {
  const location: Location = useLocation();
  const dispatch = useDispatch();
  const cookies = new Cookies();
  const preferencesCookie: UserCookiePreferences = cookies.get(
    USER_PREFERENCES_COOKIE
  );

  const displayCookieNotification = () =>
    dispatch(
      displayNotificationBanner(
        SOCIAL_MEDIA_COOKIES_MESSAGE,
        NOTIFICATION_LEVEL_INFORMATION
      )
    );

  return (
    <SharingStyle as={UnstyledListStyle}>
      <li>
        {preferencesCookie?.facebook_sharing ? (
          <FacebookButtonStyle
            rel="noopener"
            aria-label={i18n.t('sharing.facebook')}
            as="a"
            href={facebookShareUrl(location.pathname)}
            onClick={() => trackClickShare('facebook')}
          >
            <SvgFacebookLogoF aria-hidden focusable="false" />
          </FacebookButtonStyle>
        ) : (
          <FacebookButtonStyle
            aria-label={i18n.t('sharing.facebook')}
            onClick={displayCookieNotification}
            type="button"
          >
            <SvgFacebookLogoF aria-hidden focusable="false" />
          </FacebookButtonStyle>
        )}
      </li>
      <li>
        {preferencesCookie?.twitter_sharing ? (
          <TwitterButtonStyle
            rel="noopener"
            aria-label={i18n.t('sharing.twitter')}
            as="a"
            href={twitterShareUrl(location.pathname, '', '')}
            onClick={() => trackClickShare('twitter')}
          >
            <SvgTwitterLogo aria-hidden focusable="false" />
          </TwitterButtonStyle>
        ) : (
          <TwitterButtonStyle
            aria-label={i18n.t('sharing.twitter')}
            onClick={displayCookieNotification}
            type="button"
          >
            <SvgTwitterLogo aria-hidden focusable="false" />
          </TwitterButtonStyle>
        )}
      </li>
      <li>
        {preferencesCookie?.linkedin_sharing ? (
          <LinkedInButtonStyle
            rel="noopener"
            aria-label={i18n.t('sharing.linkedin')}
            as="a"
            href={linkedinShareUrl(location.pathname)}
            onClick={() => trackClickShare('linkedin')}
          >
            <SvgLinkedinLogoIn aria-hidden focusable="false" />
          </LinkedInButtonStyle>
        ) : (
          <LinkedInButtonStyle
            aria-label={i18n.t('sharing.linkedin')}
            onClick={displayCookieNotification}
            type="button"
          >
            <SvgLinkedinLogoIn aria-hidden focusable="false" />
          </LinkedInButtonStyle>
        )}
      </li>
    </SharingStyle>
  );
};
