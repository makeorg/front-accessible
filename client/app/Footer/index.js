// @flow
import React from 'react';
import { useSelector } from 'react-redux';
import { i18n } from 'Shared/i18n';
import { type StateRoot } from 'Shared/store/types';
import { trackClickBlog } from 'Shared/services/Tracking';
import { useDesktop } from 'Client/hooks/useMedia';
import {
  JOBS_LINK,
  WHOAREWE_FR_LINK,
  WHOAREWE_EN_LINK,
  NEWS_LINK,
  DOTATION_FUNDS_LINK,
  PRESS_DETAILS,
} from 'Shared/constants/url';
import {
  getLegalPageLink,
  getGTUPageLink,
  getDataPageLink,
  getContactPageLink,
} from 'Shared/helpers/url';
import { scrollToTop } from 'Shared/helpers/styled';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';
import {
  FooterStyle,
  FooterNavStyle,
  FooterItemStyle,
  FooterItemLinkStyle,
  FooterLinkIconStyle,
} from './style';

/**
 * Renders Main Footer
 */
export const Footer = () => {
  const isDesktop = useDesktop();
  const { country, language } = useSelector(
    (state: StateRoot) => state.appConfig
  );
  const isFR = country === 'FR';

  return (
    <FooterStyle id="main_footer">
      <FooterNavStyle aria-label={i18n.t('common.footer_nav')}>
        <UnstyledListStyle>
          <FooterItemStyle>
            <FooterItemLinkStyle
              as="a"
              target="_blank"
              href={isFR ? WHOAREWE_FR_LINK : WHOAREWE_EN_LINK}
            >
              {i18n.t('main-footer.whoarewe')}
              <FooterLinkIconStyle
                aria-label={i18n.t('common.open_new_window')}
              />
            </FooterItemLinkStyle>
          </FooterItemStyle>
          {isDesktop && (
            <>
              <FooterItemStyle>
                <FooterItemLinkStyle
                  as="a"
                  target="_blank"
                  href={NEWS_LINK}
                  onClick={() => trackClickBlog('blog list')}
                >
                  {i18n.t('main-footer.news')}
                  <FooterLinkIconStyle
                    aria-label={i18n.t('common.open_new_window')}
                  />
                </FooterItemLinkStyle>
              </FooterItemStyle>
            </>
          )}
          {isFR && (
            <>
              {isDesktop && (
                <>
                  <FooterItemStyle>
                    <FooterItemLinkStyle
                      as="a"
                      target="_blank"
                      href={JOBS_LINK}
                      to={JOBS_LINK}
                    >
                      {i18n.t('main-footer.jobs')}
                      <FooterLinkIconStyle
                        aria-label={i18n.t('common.open_new_window')}
                      />
                    </FooterItemLinkStyle>
                  </FooterItemStyle>
                </>
              )}
              <FooterItemStyle>
                <FooterItemLinkStyle
                  as="a"
                  target="_blank"
                  href={PRESS_DETAILS}
                >
                  {i18n.t('main-footer.press_details')}
                  <FooterLinkIconStyle
                    aria-label={i18n.t('common.open_new_window')}
                  />
                </FooterItemLinkStyle>
              </FooterItemStyle>
            </>
          )}
          <FooterItemStyle>
            <FooterItemLinkStyle
              onClick={scrollToTop}
              to={getContactPageLink(country, language)}
            >
              {i18n.t('main-footer.contact_us')}
            </FooterItemLinkStyle>
          </FooterItemStyle>
          {isFR && (
            <>
              <FooterItemStyle>
                <FooterItemLinkStyle
                  as="a"
                  target="_blank"
                  href={DOTATION_FUNDS_LINK}
                >
                  {i18n.t('main-footer.dotation_funds')}
                  <FooterLinkIconStyle
                    aria-label={i18n.t('common.open_new_window')}
                  />
                </FooterItemLinkStyle>
              </FooterItemStyle>
            </>
          )}
          <FooterItemStyle>
            <FooterItemLinkStyle
              onClick={scrollToTop}
              to={getLegalPageLink(country, language)}
            >
              {i18n.t('main-footer.legal')}
            </FooterItemLinkStyle>
          </FooterItemStyle>
          <FooterItemStyle>
            <FooterItemLinkStyle
              onClick={scrollToTop}
              to={getGTUPageLink(country, language)}
            >
              {i18n.t('main-footer.terms')}
            </FooterItemLinkStyle>
          </FooterItemStyle>
          <FooterItemStyle>
            <FooterItemLinkStyle
              onClick={scrollToTop}
              to={getDataPageLink(country, language)}
            >
              {i18n.t('main-footer.data')}
            </FooterItemLinkStyle>
          </FooterItemStyle>
        </UnstyledListStyle>
      </FooterNavStyle>
    </FooterStyle>
  );
};
