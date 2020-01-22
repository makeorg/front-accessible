// @flow
import * as React from 'react';
import { useSelector } from 'react-redux';
import { i18n } from 'Shared/i18n';
import {
  JOBS_LINK,
  WHOAREWE_FR_LINK,
  NEWS_LINK,
  DOTATION_FUNDS_LINK,
} from 'Shared/constants/url';
import { type StateRoot } from 'Shared/store/types';
import {
  FooterItemStyle,
  FooterItemListStyle,
  FooterItemLinkStyle,
} from 'Client/app/Footer/Styled';
import { useDesktop } from 'Client/hooks/useMedia';
import {
  getLegalPageLink,
  getGTUPageLink,
  getDataPageLink,
  getContactPageLink,
} from 'Shared/helpers/url';
import { trackClickViewBlog } from 'Shared/services/Tracking';

/**
 * Renders Main Footer
 */
export const FooterLinks = () => {
  const { country, language } = useSelector(
    (state: StateRoot) => state.appConfig
  );
  const isDesktop = useDesktop();

  return (
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
  );
};
