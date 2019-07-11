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
  ProposalsCountWrapperStyle,
  ProposalsNumber,
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
  proposalsNumber: number,
  linkText: string,
  linkObject: TypeLinkObject,
  children: React.Node,
};

export const CurrentConsultationArticleDesktop = ({
  image,
  title,
  linkText,
  linkObject,
  proposalsNumber,
  children,
}: CurrentConsultationArticleDesktopProps) => {
  const [isOverlayDisplayed, setDisplayOverlay] = React.useState(false);
  return (
    <CurrentConsultationArticleStyle>
      <CurrentConsultationTriggerStyle
        type="image"
        src={image}
        alt={title}
        aria-label={i18n.t('homepage.current_consultations.expand_panel', {
          name: title,
        })}
        aria-hidden={isOverlayDisplayed}
        tabIndex={isOverlayDisplayed ? -1 : 0}
        onClick={() => setDisplayOverlay(true)}
        onFocus={() => setDisplayOverlay(true)}
        onBlur={() => setDisplayOverlay(false)}
      />
      <ProposalsCountWrapperStyle>
        <ProposalsNumber>{proposalsNumber.toLocaleString()}</ProposalsNumber>
        <React.Fragment>
          {' '}
          {i18n.t('homepage.current_consultations.proposal', {
            count: proposalsNumber,
          })}
        </React.Fragment>
      </ProposalsCountWrapperStyle>
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
  proposalsNumber: number,
  linkObject: TypeLinkObject,
};

export const CurrentConsultationArticleMobile = ({
  image,
  title,
  proposalsNumber,
  linkObject,
}: CurrentConsultationArticleMobileProps) => {
  return (
    <CurrentConsultationArticleStyle>
      <a {...linkObject}>
        <img
          src={image}
          alt={linkObject.target ? i18n.t('common.new_tab', { title }) : title}
        />
      </a>
      <ProposalsCountWrapperStyle>
        <ProposalsNumber>{proposalsNumber.toLocaleString()}</ProposalsNumber>
        <React.Fragment>
          {' '}
          {i18n.t('homepage.current_consultations.proposal', {
            count: proposalsNumber,
          })}
        </React.Fragment>
      </ProposalsCountWrapperStyle>
    </CurrentConsultationArticleStyle>
  );
};
