// @flow

import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { Tracking } from 'Shared/services/Tracking';
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

type Props = {
  image: string,
  title: string,
  linkText: string,
  linkObject: TypeLinkObject,
  children: React.Node,
};

export const CurrentConsultationArticle = ({
  image,
  title,
  linkText,
  linkObject,
  children,
}: Props) => {
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
        <CurrentConsultationTextStyle>{linkText}</CurrentConsultationTextStyle>
      </CurrentConsultationLinkOverlayStyle>
    </CurrentConsultationArticleStyle>
  );
};
