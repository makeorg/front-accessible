// @flow
import React from 'react';
import { type StateRoot } from 'Shared/store/types';
import { useSelector } from 'react-redux';
import { scrollToTop } from 'Shared/helpers/styled';
import {
  getDataPageLink,
  getGTUPageLink,
  getLegalPageLink,
} from 'Shared/helpers/url';
import { i18n } from 'Shared/i18n';
import { FooterItemLinkStyle, FooterItemStyle } from './style';

export const FooterCommonLinks = () => {
  const { country, language } = useSelector(
    (state: StateRoot) => state.appConfig
  );

  return (
    <>
      <FooterItemStyle>
        <FooterItemLinkStyle
          onClick={scrollToTop}
          to={getLegalPageLink(country, language)}
        >
          {i18n.t('main_footer.legal')}
        </FooterItemLinkStyle>
      </FooterItemStyle>
      <FooterItemStyle>
        <FooterItemLinkStyle
          onClick={scrollToTop}
          to={getGTUPageLink(country, language)}
        >
          {i18n.t('main_footer.terms')}
        </FooterItemLinkStyle>
      </FooterItemStyle>
      <FooterItemStyle>
        <FooterItemLinkStyle
          onClick={scrollToTop}
          to={getDataPageLink(country, language)}
        >
          {i18n.t('main_footer.data')}
        </FooterItemLinkStyle>
      </FooterItemStyle>
    </>
  );
};
