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
import {
  FollowUsStyle,
  FacebookButtonStyle,
  TwitterButtonStyle,
  InstagramButtonStyle,
  LinkedInButtonStyle,
} from './Styled';

const FollowUsIconsStyle = {
  width: '20px',
  height: '22px',
  marginRight: '13px',
};

/**
 * Renders FollowUs
 */
export const FollowUsComponent = () => (
  <TileWithTitle
    icon={<SvgMegaphone aria-hidden style={FollowUsIconsStyle} />}
    title={i18n.t('consultation.followUs.title')}
  >
    <FollowUsStyle as={UnstyledListStyle}>
      <li>
        <FacebookButtonStyle
          rel="noreferrer noopener"
          aria-label={i18n.t('followUs.facebook')}
          as="a"
          href={facebookMakeUrl}
        >
          <SvgFacebookLogoF aria-hidden />
        </FacebookButtonStyle>
      </li>
      <li>
        <TwitterButtonStyle
          rel="noreferrer noopener"
          aria-label={i18n.t('followUs.twitter')}
          as="a"
          href={twitterMakeUrl}
        >
          <SvgTwitterLogo aria-hidden />
        </TwitterButtonStyle>
      </li>
      <li>
        <InstagramButtonStyle
          rel="noreferrer noopener"
          aria-label={i18n.t('followUs.instagram')}
          as="a"
          href={instagramMakeUrl}
        >
          <SvgInstagramLogo aria-hidden />
        </InstagramButtonStyle>
      </li>
      <li>
        <LinkedInButtonStyle
          rel="noreferrer noopener"
          aria-label={i18n.t('followUs.linkedin')}
          as="a"
          href={linkedinMakeUrl}
        >
          <SvgLinkedinLogoIn aria-hidden />
        </LinkedInButtonStyle>
      </li>
    </FollowUsStyle>
  </TileWithTitle>
);
