// @flow
import React, { useEffect } from 'react';
import { type StateRoot } from 'Shared/store/types';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';
import { i18n } from 'Shared/i18n';
import { useSelector } from 'react-redux';
import { getBrowseConsultationsLink } from 'Shared/helpers/url';
import { scrollToTop, unlockBody } from 'Shared/helpers/styled';
import { WHOAREWE_FR_LINK, WHOAREWE_EN_LINK } from 'Shared/constants/url';
import { removeAriaHiddenByClass } from 'Shared/helpers/a11y';
import {
  NAVIGATION_ELEMENT_ARIA_CLASS,
  NAVIGATION_ARIA_CLASS,
  SEARCH_DESKTOP_EXPANDED,
} from 'Shared/constants/a11y';
import {
  DesktopMenuNavStyle,
  DesktopMenuItemStyle,
  DesktopMenuInternalLinkStyle,
  MenuNewWindowIconStyle,
  DesktopMenuExternalLinkStyle,
} from './style';

export const DesktopMenu = () => {
  const { country, language } = useSelector(
    (state: StateRoot) => state.appConfig
  );
  const browseConsultationsLink = getBrowseConsultationsLink(country, language);
  const isFR = country === 'FR';

  useEffect(() => {
    removeAriaHiddenByClass(NAVIGATION_ARIA_CLASS);
    removeAriaHiddenByClass(NAVIGATION_ELEMENT_ARIA_CLASS);
    unlockBody();
  }, []);

  return (
    <DesktopMenuNavStyle aria-label={i18n.t('header.main_navigation')}>
      <UnstyledListStyle>
        <DesktopMenuItemStyle className="with-border">
          <DesktopMenuInternalLinkStyle
            to={browseConsultationsLink}
            onClick={scrollToTop}
          >
            {i18n.t('browse.page_title')}
          </DesktopMenuInternalLinkStyle>
        </DesktopMenuItemStyle>
        <DesktopMenuItemStyle className={SEARCH_DESKTOP_EXPANDED}>
          <DesktopMenuExternalLinkStyle
            target="_blank"
            rel="noreferrer noopener"
            href={isFR ? WHOAREWE_FR_LINK : WHOAREWE_EN_LINK}
          >
            {i18n.t('main-footer.whoarewe')}
            <MenuNewWindowIconStyle
              aria-label={i18n.t('common.open_new_window')}
            />
          </DesktopMenuExternalLinkStyle>
        </DesktopMenuItemStyle>
      </UnstyledListStyle>
    </DesktopMenuNavStyle>
  );
};
