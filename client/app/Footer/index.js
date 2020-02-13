// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { i18n } from 'Shared/i18n';
import { type StateRoot } from 'Shared/store/types';
import { useDesktop } from 'Client/hooks/useMedia';
import Logo from 'Client/app/assets/images/logo.svg';
import {
  trackClickMakeLogo,
  trackClickViewBlog,
} from 'Shared/services/Tracking';
import {
  JOBS_LINK,
  WHOAREWE_FR_LINK,
  NEWS_LINK,
  DOTATION_FUNDS_LINK,
} from 'Shared/constants/url';
import {
  getLegalPageLink,
  getGTUPageLink,
  getDataPageLink,
  getContactPageLink,
} from 'Shared/helpers/url';
import {
  FooterStyle,
  FooterNavStyle,
  FooterLogoStyle,
  FooterItemStyle,
  FooterItemListStyle,
  FooterItemLinkStyle,
} from './style';

/**
 * Renders Main Footer
 */
export const Footer = () => {
  const { country, language } = useSelector(
    (state: StateRoot) => state.appConfig
  );
  const isDesktop = useDesktop();

  return (
    <FooterStyle id="main_footer">
      <FooterNavStyle aria-label={i18n.t('common.footer_nav')}>
        <Link to="/">
          <FooterLogoStyle
            onClick={() => trackClickMakeLogo()}
            src={Logo}
            alt={i18n.t('header.logo_alt')}
          />
        </Link>
        <FooterItemListStyle>
          <FooterItemStyle>
            <FooterItemLinkStyle
              as="a"
              href={JOBS_LINK}
              to={JOBS_LINK}
              dangerouslySetInnerHTML={{ __html: i18n.t('main-footer.jobs') }}
            />
          </FooterItemStyle>
          {!isDesktop && (
            <FooterItemStyle>
              <FooterItemLinkStyle
                as="a"
                href={WHOAREWE_FR_LINK}
                to={WHOAREWE_FR_LINK}
              >
                {i18n.t('main-footer.whoarewe')}
              </FooterItemLinkStyle>
            </FooterItemStyle>
          )}
          <FooterItemStyle>
            <FooterItemLinkStyle
              as="a"
              href={NEWS_LINK}
              to={NEWS_LINK}
              onClick={trackClickViewBlog}
            >
              {i18n.t('main-footer.news')}
            </FooterItemLinkStyle>
          </FooterItemStyle>

          <FooterItemStyle>
            <FooterItemLinkStyle
              as="a"
              href={DOTATION_FUNDS_LINK}
              to={DOTATION_FUNDS_LINK}
            >
              {i18n.t('main-footer.dotation_funds')}
            </FooterItemLinkStyle>
          </FooterItemStyle>

          <FooterItemStyle>
            <FooterItemLinkStyle to={getLegalPageLink(country, language)}>
              {i18n.t('main-footer.legal')}
            </FooterItemLinkStyle>
          </FooterItemStyle>

          <FooterItemStyle>
            <FooterItemLinkStyle to={getGTUPageLink(country, language)}>
              {i18n.t('main-footer.terms')}
            </FooterItemLinkStyle>
          </FooterItemStyle>

          <FooterItemStyle>
            <FooterItemLinkStyle to={getDataPageLink(country, language)}>
              {i18n.t('main-footer.data')}
            </FooterItemLinkStyle>
          </FooterItemStyle>

          <FooterItemStyle>
            <FooterItemLinkStyle to={getContactPageLink(country, language)}>
              {i18n.t('main-footer.contact')}
            </FooterItemLinkStyle>
          </FooterItemStyle>
        </FooterItemListStyle>
      </FooterNavStyle>
    </FooterStyle>
  );
};
