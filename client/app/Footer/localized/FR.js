// @flow
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'Shared/i18n';
import { type StateRoot } from 'Shared/store/types';
import { trackClickBlog } from 'Shared/services/Tracking';
import { ColumnToRowElementStyle } from 'Client/ui/Elements/FlexElements';
import {
  JOBS_LINK,
  NEWS_LINK,
  DOTATION_FUNDS_LINK,
  PRESS_DETAILS_LINK,
} from 'Shared/constants/url';
import {
  getContactPageLink,
  getA11YPageLink,
  getCookiesPageLink,
} from 'Shared/helpers/url';
import { matchDesktopDevice, scrollToTop } from 'Shared/helpers/styled';
import {
  NAVIGATION_ARIA_NEGATIVE_TAB_CLASS,
  PANEL_ARIA_NEGATIVE_TAB_CLASS,
} from 'Shared/constants/a11y';
import { MAIN_FOOTER } from 'Shared/constants/ids';
import { UnstyledButtonStyle } from 'Client/ui/Elements/Buttons/style';
import { modalShowCountries } from 'Shared/store/actions/modal';
import { isSequencePage as getIsSequencePage } from 'Shared/routes';
import { useLocation } from 'react-router';
import { FooterExternalLink } from '../ExternalLink';
import {
  FooterStyle,
  FooterNavStyle,
  FooterItemStyle,
  FooterItemLinkStyle,
  FooterSeparatorStyle,
  FooterWrapperFirstListStyle,
  FooterWrapperSecondListStyle,
  FooterWrapperThirdListStyle,
  FooterItemAltLinkStyle,
  FooterCountryIconStyle,
  FooterContactIconStyle,
} from '../style';
import { FooterCommonLinks } from '../CommonLinks';

/**
 * Renders Main Footer
 */
export const FooterFR = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { country, device, language } = useSelector(
    (state: StateRoot) => state.appConfig
  );
  const isDesktop = matchDesktopDevice(device);
  const isSequencePage = getIsSequencePage(location.pathname);

  return (
    <FooterStyle
      id={MAIN_FOOTER}
      className={`${NAVIGATION_ARIA_NEGATIVE_TAB_CLASS} ${PANEL_ARIA_NEGATIVE_TAB_CLASS} ${
        isSequencePage && 'extra-mobile-padding-bottom'
      }`}
      data-cy-container="footer"
    >
      <FooterNavStyle aria-label={i18n.t('common.footer_nav')}>
        <ColumnToRowElementStyle>
          <FooterWrapperFirstListStyle>
            {isDesktop && (
              <FooterItemStyle>
                <FooterItemLinkStyle
                  as="a"
                  target="_blank"
                  rel="noopener"
                  href={NEWS_LINK}
                  onClick={() => trackClickBlog('blog list')}
                >
                  {i18n.t('main_footer.news')}
                  <> </>
                  <FooterExternalLink />
                </FooterItemLinkStyle>
              </FooterItemStyle>
            )}
            <FooterItemStyle>
              <FooterItemLinkStyle
                as="a"
                target="_blank"
                rel="noopener"
                href={PRESS_DETAILS_LINK}
              >
                {i18n.t('main_footer.press_details')}
                <> </>
                <FooterExternalLink />
              </FooterItemLinkStyle>
            </FooterItemStyle>
            {isDesktop && (
              <FooterItemStyle>
                <FooterItemLinkStyle
                  as="a"
                  target="_blank"
                  rel="noopener"
                  href={JOBS_LINK}
                >
                  {i18n.t('main_footer.jobs')}
                  <> </>
                  <FooterExternalLink />
                </FooterItemLinkStyle>
              </FooterItemStyle>
            )}
            <FooterItemStyle>
              <FooterItemLinkStyle
                as="a"
                target="_blank"
                rel="noopener"
                href={DOTATION_FUNDS_LINK}
              >
                {i18n.t('main_footer.dotation_funds')}
                <> </>
                <FooterExternalLink />
              </FooterItemLinkStyle>
            </FooterItemStyle>
          </FooterWrapperFirstListStyle>
          <FooterWrapperThirdListStyle as="div">
            <FooterItemStyle as="div">
              <FooterItemAltLinkStyle
                onClick={scrollToTop}
                to={getContactPageLink(country, language)}
              >
                <FooterContactIconStyle aria-hidden focusable="false" />
                <> </>
                {i18n.t('main_footer.contact')}
              </FooterItemAltLinkStyle>
            </FooterItemStyle>
          </FooterWrapperThirdListStyle>
        </ColumnToRowElementStyle>
        <FooterSeparatorStyle />
        <ColumnToRowElementStyle>
          <FooterWrapperSecondListStyle>
            <FooterCommonLinks />
            <FooterItemStyle>
              <FooterItemLinkStyle
                onClick={scrollToTop}
                to={getA11YPageLink(country, language)}
              >
                {i18n.t('main_footer.a11y')}
              </FooterItemLinkStyle>
            </FooterItemStyle>
            <FooterItemStyle>
              <FooterItemLinkStyle
                onClick={scrollToTop}
                to={getCookiesPageLink(country)}
              >
                {i18n.t('main_footer.cookies')}
              </FooterItemLinkStyle>
            </FooterItemStyle>
          </FooterWrapperSecondListStyle>
          <FooterWrapperThirdListStyle as="div">
            <FooterItemStyle as="div">
              <FooterItemAltLinkStyle
                className="underline"
                as={UnstyledButtonStyle}
                onClick={() => dispatch(modalShowCountries(false))}
                data-cy-button="country-switch-modal"
                type="button"
              >
                <FooterCountryIconStyle aria-hidden focusable="false" />
                <> </>
                {i18n.t('main_footer.country')}
              </FooterItemAltLinkStyle>
            </FooterItemStyle>
          </FooterWrapperThirdListStyle>
        </ColumnToRowElementStyle>
      </FooterNavStyle>
    </FooterStyle>
  );
};
