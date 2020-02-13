// @flow
import React from 'react';
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
import {
  trackClickFollowUs,
  trackClickViewBlog,
} from 'Shared/services/Tracking';
import { TileWithTitle } from 'Client/ui/Elements/TileWithTitle';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import {
  RedLinkHTMLElementStyle,
  NewWindowIconStyle,
} from 'Client/ui/Elements/LinkElements';
import { ABOUT_MAKE_LINK } from 'Shared/constants/url';
import {
  FollowUsStyle,
  FollowUsIconsStyle,
  FacebookButtonStyle,
  TwitterButtonStyle,
  InstagramButtonStyle,
  LinkedInButtonStyle,
  FollowUsListItemStyle,
} from './style';

export const FollowUs = () => (
  <TileWithTitle
    icon={<SvgMegaphone aria-hidden style={FollowUsIconsStyle} />}
    title={i18n.t('consultation.followus.title')}
  >
    <ParagraphStyle>
      {i18n.t('consultation.followus.description')}
    </ParagraphStyle>
    <FollowUsStyle as={UnstyledListStyle}>
      <FollowUsListItemStyle>
        <FacebookButtonStyle
          data-network-name="facebook"
          target="_blank"
          rel="noreferrer noopener"
          aria-label={i18n.t('consultation.followus.facebook')}
          as="a"
          href={facebookMakeUrl}
          onClick={trackClickFollowUs}
        >
          <SvgFacebookLogoF aria-hidden />
        </FacebookButtonStyle>
      </FollowUsListItemStyle>
      <FollowUsListItemStyle>
        <TwitterButtonStyle
          data-network-name="twitter"
          target="_blank"
          rel="noreferrer noopener"
          aria-label={i18n.t('consultation.followus.twitter')}
          as="a"
          href={twitterMakeUrl}
          onClick={trackClickFollowUs}
        >
          <SvgTwitterLogo aria-hidden />
        </TwitterButtonStyle>
      </FollowUsListItemStyle>
      <FollowUsListItemStyle>
        <InstagramButtonStyle
          data-network-name="instagram"
          target="_blank"
          rel="noreferrer noopener"
          aria-label={i18n.t('consultation.followus.instagram')}
          as="a"
          href={instagramMakeUrl}
          onClick={trackClickFollowUs}
        >
          <SvgInstagramLogo aria-hidden />
        </InstagramButtonStyle>
      </FollowUsListItemStyle>
      <FollowUsListItemStyle>
        <LinkedInButtonStyle
          data-network-name="linkedin"
          target="_blank"
          rel="noreferrer noopener"
          aria-label={i18n.t('consultation.followus.linkedin')}
          as="a"
          href={linkedinMakeUrl}
          onClick={trackClickFollowUs}
        >
          <SvgLinkedinLogoIn aria-hidden />
        </LinkedInButtonStyle>
      </FollowUsListItemStyle>
    </FollowUsStyle>
    <RedLinkHTMLElementStyle
      target="_blank"
      rel="noreferrer noopener"
      href={ABOUT_MAKE_LINK}
      onClick={trackClickViewBlog}
    >
      {i18n.t('consultation.followus.discover')}
      <NewWindowIconStyle aria-label={i18n.t('common.open_new_window')} />
    </RedLinkHTMLElementStyle>
  </TileWithTitle>
);
