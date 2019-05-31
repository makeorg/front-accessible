// @flow
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import {
  JOBS_LINK,
  WHOAREWE_FR_LINK,
  PRESS_LINK,
  LEGAL_NOTICE_LINK,
  GTU_LINK,
  DATA_POLICY_LINK,
  CONTACT_LINK,
} from 'Shared/constants/url';
import {
  FooterItemStyle,
  FooterItemListStyle,
  FooterItemLinkStyle,
} from 'Client/app/Footer/Styled';
import { useMobile } from 'Client/hooks/useMedia';

/**
 * Renders Main Footer
 */
export const FooterLinks = () => {
  const isMobile = useMobile();

  return (
    <FooterItemListStyle>
      <FooterItemStyle>
        <FooterItemLinkStyle href={JOBS_LINK}>
          {i18n.t('main-footer.jobs')}
        </FooterItemLinkStyle>
      </FooterItemStyle>
      {isMobile && (
        <FooterItemStyle>
          <FooterItemLinkStyle href={WHOAREWE_FR_LINK}>
            {i18n.t('main-footer.whoarewe')}
          </FooterItemLinkStyle>
        </FooterItemStyle>
      )}
      <FooterItemStyle>
        <FooterItemLinkStyle href={PRESS_LINK}>
          {i18n.t('main-footer.press')}
        </FooterItemLinkStyle>
      </FooterItemStyle>

      <FooterItemStyle>
        <FooterItemLinkStyle href={LEGAL_NOTICE_LINK}>
          {i18n.t('main-footer.legal')}
        </FooterItemLinkStyle>
      </FooterItemStyle>

      <FooterItemStyle>
        <FooterItemLinkStyle href={GTU_LINK}>
          {i18n.t('main-footer.terms')}
        </FooterItemLinkStyle>
      </FooterItemStyle>

      <FooterItemStyle>
        <FooterItemLinkStyle href={DATA_POLICY_LINK}>
          {i18n.t('main-footer.data')}
        </FooterItemLinkStyle>
      </FooterItemStyle>

      <FooterItemStyle>
        <FooterItemLinkStyle href={CONTACT_LINK}>
          {i18n.t('main-footer.contact')}
        </FooterItemLinkStyle>
      </FooterItemStyle>
    </FooterItemListStyle>
  );
};
