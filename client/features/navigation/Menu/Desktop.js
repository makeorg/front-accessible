// @flow
import React, { useEffect } from 'react';
import { type StateRoot } from 'Shared/store/types';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';
import { i18n } from 'Shared/i18n';
import { useSelector } from 'react-redux';
import {
  getBrowseConsultationsLink,
  getWebflowDynamicLink,
} from 'Shared/helpers/url';
import { scrollToTop, unlockBody } from 'Shared/helpers/styled';
import { removeAriaHiddenByClass } from 'Shared/helpers/a11y';
import {
  NAVIGATION_ELEMENT_ARIA_CLASS,
  NAVIGATION_ARIA_CLASS,
  SEARCH_DESKTOP_EXPANDED,
} from 'Shared/constants/a11y';
import { ROUTE_PARTNERSHIP, ROUTE_WHOAREWE } from 'Shared/routes';
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
  const browseConsultationsLink = getBrowseConsultationsLink(country);
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
        <DesktopMenuItemStyle
          className={`${SEARCH_DESKTOP_EXPANDED} with-border`}
        >
          <DesktopMenuExternalLinkStyle
            target="_blank"
            rel="noreferrer noopener"
            href={getWebflowDynamicLink(language, ROUTE_WHOAREWE)}
          >
            {i18n.t('main-footer.whoarewe')}
            <> </>
            <MenuNewWindowIconStyle
              aria-label={i18n.t('common.open_new_window')}
            />
          </DesktopMenuExternalLinkStyle>
        </DesktopMenuItemStyle>
        {isFR && (
          <DesktopMenuItemStyle
            className={`${SEARCH_DESKTOP_EXPANDED} with-border`}
          >
            <DesktopMenuExternalLinkStyle
              target="_blank"
              rel="noreferrer noopener"
              href={getWebflowDynamicLink(language, ROUTE_PARTNERSHIP)}
            >
              {i18n.t('homepage.partnership.subtitle')}
              <> </>
              <MenuNewWindowIconStyle
                aria-label={i18n.t('common.open_new_window')}
              />
            </DesktopMenuExternalLinkStyle>
          </DesktopMenuItemStyle>
        )}
      </UnstyledListStyle>
    </DesktopMenuNavStyle>
  );
};
