// @flow
import * as React from 'react';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';
import { i18n } from 'Shared/i18n';
import {
  SvgFacebookLogoF,
  SvgTwitterLogo,
  SvgInstagramLogo,
  SvgLinkedinLogoIn,
  SvgMegaphone,
} from 'Client/ui/Svg/elements';
import {
  twitterMakeUrl,
  instagramMakeUrl,
  facebookMakeUrl,
  linkedinMakeUrl,
} from 'Shared/helpers/social';

import { TileWithTitle } from 'Client/ui/Elements/TileWithTitle';
import { TrackingService } from 'Shared/services/Tracking';
import * as trackingConstants from 'Shared/constants/tracking';
import {
  FollowUsStyle,
  FollowUsIconsStyle,
  FacebookButtonStyle,
  TwitterButtonStyle,
  InstagramButtonStyle,
  LinkedInButtonStyle,
} from './Styled';

const trackClickFollowUs = event => {
  TrackingService.sendAllTrackers(trackingConstants.CLICK_FOLLOWUS, {
    'social-network': event.currentTarget.dataset.networkName,
  });
};

/**
 * Renders FollowUs
 */
export const FollowUs = () => (
  <TileWithTitle
    icon={<SvgMegaphone aria-hidden style={FollowUsIconsStyle} />}
    title={i18n.t('consultation.followUs.title')}
  >
    <FollowUsStyle as={UnstyledListStyle}>
      <li>
        <FacebookButtonStyle
          data-network-name="facebook"
          target="_blank"
          rel="noreferrer noopener"
          aria-label={i18n.t('followUs.facebook')}
          as="a"
          href={facebookMakeUrl}
          onClick={trackClickFollowUs}
        >
          <SvgFacebookLogoF aria-hidden />
        </FacebookButtonStyle>
      </li>
      <li>
        <TwitterButtonStyle
          data-network-name="twitter"
          target="_blank"
          rel="noreferrer noopener"
          aria-label={i18n.t('followUs.twitter')}
          as="a"
          href={twitterMakeUrl}
          onClick={trackClickFollowUs}
        >
          <SvgTwitterLogo aria-hidden />
        </TwitterButtonStyle>
      </li>
      <li>
        <InstagramButtonStyle
          data-network-name="instagram"
          target="_blank"
          rel="noreferrer noopener"
          aria-label={i18n.t('followUs.instagram')}
          as="a"
          href={instagramMakeUrl}
          onClick={trackClickFollowUs}
        >
          <SvgInstagramLogo aria-hidden />
        </InstagramButtonStyle>
      </li>
      <li>
        <LinkedInButtonStyle
          data-network-name="linkedin"
          target="_blank"
          rel="noreferrer noopener"
          aria-label={i18n.t('followUs.linkedin')}
          as="a"
          href={linkedinMakeUrl}
          onClick={trackClickFollowUs}
        >
          <SvgLinkedinLogoIn aria-hidden />
        </LinkedInButtonStyle>
      </li>
    </FollowUsStyle>
  </TileWithTitle>
);
