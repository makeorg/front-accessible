// @flow
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'Shared/i18n';
import { type StateRoot } from 'Shared/store/types';
import { ColumnToRowElementStyle } from 'Client/ui/Elements/FlexElements';
import { getContactPageLink, getCookiesPageLink } from 'Shared/helpers/url';
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
import {
  FooterStyle,
  FooterNavStyle,
  FooterItemStyle,
  FooterItemLinkStyle,
  FooterWrapperSecondListStyle,
  FooterWrapperThirdListStyle,
  FooterItemAltLinkStyle,
  FooterCountryIconStyle,
  FooterContactIconStyle,
} from './style';
import { FooterCommonLinks } from './CommonLinks';

/**
 * Renders Main Footer
 */
export const FooterINT = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { country } = useSelector((state: StateRoot) => state.appConfig);
  const isSequencePage = getIsSequencePage(location.pathname);

  return country ? (
    <FooterStyle
      id={MAIN_FOOTER}
      className={`${NAVIGATION_ARIA_NEGATIVE_TAB_CLASS} ${PANEL_ARIA_NEGATIVE_TAB_CLASS} ${
        isSequencePage && 'extra-mobile-padding-bottom'
      }`}
      data-cy-container="footer"
    >
      <FooterNavStyle aria-label={i18n.t('common.footer_nav')}>
        <ColumnToRowElementStyle>
          <FooterWrapperSecondListStyle>
            <FooterCommonLinks />
            <FooterItemStyle>
              <FooterItemLinkStyle
                onClick={scrollToTop}
                to={getCookiesPageLink(country)}
              >
                {i18n.t('main_footer.cookies')}
              </FooterItemLinkStyle>
            </FooterItemStyle>
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
                {i18n.t('main_footer.country')}
              </FooterItemAltLinkStyle>
            </FooterItemStyle>
            <FooterItemStyle>
              <FooterItemAltLinkStyle
                onClick={scrollToTop}
                to={getContactPageLink(country)}
              >
                <FooterContactIconStyle aria-hidden focusable="false" />
                <> </>
                {i18n.t('main_footer.contact')}
              </FooterItemAltLinkStyle>
            </FooterItemStyle>
          </FooterWrapperThirdListStyle>
        </ColumnToRowElementStyle>
      </FooterNavStyle>
    </FooterStyle>
  ) : (
    <></>
  );
};
