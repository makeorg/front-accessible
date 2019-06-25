// @flow

import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { Tracking } from 'Shared/services/Tracking';
import { SvgExternalLink } from 'Client/ui/Svg/elements';
import { BasicColors } from 'Client/app/assets/vars/Colors';
import {
  CurrentConsultationArticleStyle,
  CurrentConsultationLinkOverlayStyle,
  CurrentConsultationTriggerStyle,
  CurrentConsultationTextStyle,
} from '../Styled';

type TypeLinkObject = {
  as: React.Node,
  to?: ?string,
  href?: string,
  target?: string,
};

type CurrentConsultationArticleDesktopProps = {
  image: string,
  title: string,
  linkText: string,
  linkObject: TypeLinkObject,
  children: React.Node,
};

export const CurrentConsultationArticleDesktop = ({
  image,
  title,
  linkText,
  linkObject,
  children,
}: CurrentConsultationArticleDesktopProps) => {
  const [isOverlayDisplayed, setDisplayOverlay] = React.useState(false);
  return (
    <CurrentConsultationArticleStyle>
      <CurrentConsultationTriggerStyle
        type="image"
        src={image}
        alt={title}
        aria-label={i18n.t('homepage.great-causes.expand_panel', {
          name: title,
        })}
        aria-hidden={isOverlayDisplayed}
        tabIndex={isOverlayDisplayed ? -1 : 0}
        onClick={() => setDisplayOverlay(true)}
        onFocus={() => setDisplayOverlay(true)}
        onBlur={() => setDisplayOverlay(false)}
      />
      <CurrentConsultationLinkOverlayStyle
        className="overlay"
        {...linkObject}
        aria-hidden={!isOverlayDisplayed}
        onFocus={() => setDisplayOverlay(true)}
        onBlur={() => setDisplayOverlay(false)}
        onClick={() => Tracking.trackClickHomepageConsultations()}
        tabIndex={isOverlayDisplayed ? 0 : -1}
      >
        {children}
        <CurrentConsultationTextStyle>
          {linkText}
          {linkObject.target && (
            <SvgExternalLink
              aria-label={i18n.t('common.open_new_window')}
              style={{ marginLeft: '5px', fill: BasicColors.PureWhite }}
            />
          )}
        </CurrentConsultationTextStyle>
      </CurrentConsultationLinkOverlayStyle>
    </CurrentConsultationArticleStyle>
  );
};

type CurrentConsultationArticleMobileProps = {
  image: string,
  title: string,
  linkObject: TypeLinkObject,
};

export const CurrentConsultationArticleMobile = ({
  image,
  title,
  linkObject,
}: CurrentConsultationArticleMobileProps) => {
  return (
    <CurrentConsultationArticleStyle {...linkObject}>
      <img
        src={image}
        alt={linkObject.target ? i18n.t('common.new_tab', { title }) : title}
      />
    </CurrentConsultationArticleStyle>
  );
};
