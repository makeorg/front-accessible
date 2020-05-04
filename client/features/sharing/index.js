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
  return (
    <SharingStyle as={UnstyledListStyle}>
      <li>
        <FacebookButtonStyle
          rel="noreferrer noopener"
          aria-label={i18n.t('sharing.facebook')}
          as="a"
          href={facebookShareUrl(location.pathname)}
          onClick={() => trackClickShare('facebook', { location: 'profile' })}
        >
          <SvgFacebookLogoF />
        </FacebookButtonStyle>
      </li>
      <li>
        <TwitterButtonStyle
          rel="noreferrer noopener"
          aria-label={i18n.t('sharing.twitter')}
          as="a"
          href={twitterShareUrl(location.pathname, '', '')}
          onClick={() => trackClickShare('twitter')}
        >
          <SvgTwitterLogo />
        </TwitterButtonStyle>
      </li>
      <li>
        <LinkedInButtonStyle
          rel="noreferrer noopener"
          aria-label={i18n.t('sharing.linkedin')}
          as="a"
          href={linkedinShareUrl(location.pathname)}
          onClick={() => trackClickShare('linkedin')}
        >
          <SvgLinkedinLogoIn />
        </LinkedInButtonStyle>
      </li>
    </SharingStyle>
  );
};
