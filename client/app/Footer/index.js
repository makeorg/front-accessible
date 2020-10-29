// @flow
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'Shared/i18n';
import { type StateRoot } from 'Shared/store/types';
import { trackClickBlog } from 'Shared/services/Tracking';
import { useDesktop } from 'Client/hooks/useMedia';
import { ColumnToRowElementStyle } from 'Client/ui/Elements/FlexElements';
import {
  JOBS_LINK,
  NEWS_LINK,
  DOTATION_FUNDS_LINK,
  PRESS_DETAILS_LINK,
} from 'Shared/constants/url';
import {
  getLegalPageLink,
  getGTUPageLink,
  getDataPageLink,
  getContactPageLink,
  getA11YPageLink,
} from 'Shared/helpers/url';
import { scrollToTop } from 'Shared/helpers/styled';
import {
  NAVIGATION_ARIA_NEGATIVE_TAB_CLASS,
  PANEL_ARIA_NEGATIVE_TAB_CLASS,
} from 'Shared/constants/a11y';
import { MAIN_FOOTER } from 'Shared/constants/ids';
import { UnstyledButtonStyle } from 'Client/ui/Elements/Buttons/style';
import { modalShowCountries } from 'Shared/store/actions/modal';
import { isSequencePage as getIsSequencePage } from 'Shared/routes';
import { useLocation } from 'react-router';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import {
  FooterStyle,
  FooterNavStyle,
  FooterItemStyle,
  FooterItemLinkStyle,
  FooterLinkIconStyle,
  FooterSeparatorStyle,
  FooterWrapperFirstListStyle,
  FooterWrapperSecondListStyle,
  FooterWrapperThirdListStyle,
  FooterItemAltLinkStyle,
  FooterCountryIconStyle,
  FooterContactIconStyle,
} from './style';

/**
 * Renders Main Footer
 */
export const Footer = () => {
  const isDesktop = useDesktop();
  const dispatch = useDispatch();
  const location = useLocation();
  const { country } = useSelector((state: StateRoot) => state.appConfig);
  const isFR = country === 'FR';
  const isSequencePage = getIsSequencePage(location.pathname);

  const externalLinkIcon = (
    <>
      <FooterLinkIconStyle aria-hidden focusable="false" />
      <ScreenReaderItemStyle>
        {i18n.t('common.open_new_window')}
      </ScreenReaderItemStyle>
    </>
  );
  return (
    <FooterStyle
      id={MAIN_FOOTER}
      className={`${NAVIGATION_ARIA_NEGATIVE_TAB_CLASS} ${PANEL_ARIA_NEGATIVE_TAB_CLASS} ${
        isSequencePage && 'extra-mobile-padding-bottom'
      }`}
      data-cy-container="footer"
    >
      <FooterNavStyle aria-label={i18n.t('common.footer_nav')}>
        {isFR && (
          <>
            <FooterWrapperFirstListStyle>
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
                      <> </>
                      {externalLinkIcon}
                    </FooterItemLinkStyle>
                  </FooterItemStyle>
                  <FooterItemStyle>
                    <FooterItemLinkStyle
                      as="a"
                      target="_blank"
                      href={JOBS_LINK}
                    >
                      {i18n.t('main-footer.jobs')}
                      <> </>
                      {externalLinkIcon}
                    </FooterItemLinkStyle>
                  </FooterItemStyle>
                </>
              )}
              <FooterItemStyle>
                <FooterItemLinkStyle
                  as="a"
                  target="_blank"
                  href={PRESS_DETAILS_LINK}
                >
                  {i18n.t('main-footer.press_details')}
                  <> </>
                  {externalLinkIcon}
                </FooterItemLinkStyle>
              </FooterItemStyle>
              <FooterItemStyle>
                <FooterItemLinkStyle
                  as="a"
                  target="_blank"
                  href={DOTATION_FUNDS_LINK}
                >
                  {i18n.t('main-footer.dotation_funds')}
                  <> </>
                  {externalLinkIcon}
                </FooterItemLinkStyle>
              </FooterItemStyle>
            </FooterWrapperFirstListStyle>
            <FooterSeparatorStyle />
          </>
        )}
        <ColumnToRowElementStyle>
          <FooterWrapperSecondListStyle>
            <FooterItemStyle>
              <FooterItemLinkStyle
                onClick={scrollToTop}
                to={getLegalPageLink(country)}
              >
                {i18n.t('main-footer.legal')}
              </FooterItemLinkStyle>
            </FooterItemStyle>
            <FooterItemStyle>
              <FooterItemLinkStyle
                onClick={scrollToTop}
                to={getGTUPageLink(country)}
              >
                {i18n.t('main-footer.terms')}
              </FooterItemLinkStyle>
            </FooterItemStyle>
            <FooterItemStyle>
              <FooterItemLinkStyle
                onClick={scrollToTop}
                to={getDataPageLink(country)}
              >
                {i18n.t('main-footer.data')}
              </FooterItemLinkStyle>
            </FooterItemStyle>
            {isFR && (
              <FooterItemStyle>
                <FooterItemLinkStyle
                  onClick={scrollToTop}
                  to={getA11YPageLink(country)}
                >
                  {i18n.t('main-footer.a11y')}
                </FooterItemLinkStyle>
              </FooterItemStyle>
            )}
          </FooterWrapperSecondListStyle>
          <FooterWrapperThirdListStyle>
            <FooterItemStyle className="no-bullet">
              <FooterItemAltLinkStyle
                className="underline"
                as={UnstyledButtonStyle}
                onClick={() => dispatch(modalShowCountries(false))}
                data-cy-button="country-switch-modal"
                type="button"
              >
                <FooterCountryIconStyle aria-hidden focusable="false" />
                <> </>
                {i18n.t('main-footer.country')}
              </FooterItemAltLinkStyle>
            </FooterItemStyle>
            <FooterItemStyle>
              <FooterItemAltLinkStyle
                onClick={scrollToTop}
                to={getContactPageLink(country)}
              >
                <FooterContactIconStyle aria-hidden focusable="false" />
                <> </>
                {i18n.t('main-footer.contact')}
              </FooterItemAltLinkStyle>
            </FooterItemStyle>
          </FooterWrapperThirdListStyle>
        </ColumnToRowElementStyle>
      </FooterNavStyle>
    </FooterStyle>
  );
};
