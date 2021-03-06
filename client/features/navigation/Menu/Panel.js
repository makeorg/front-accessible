// @flow
import React from 'react';
import { type StateRoot } from 'Shared/store/types';
import { SvgClose, SvgLogoBlack } from 'Client/ui/Svg/elements';
import { i18n } from 'Shared/i18n';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';
import { useSelector } from 'react-redux';
import {
  getBrowseConsultationsLink,
  getBrowseResultsLink,
  getWebflowDynamicLink,
} from 'Shared/helpers/url';
import { useLocation } from 'react-router';
import {
  isBrowseConsultationsPage,
  isBrowseResultsPage,
  ROUTE_WHOAREWE,
  ROUTE_PARTNERSHIP,
} from 'Shared/routes';
import { scrollToTop } from 'Shared/helpers/styled';
import { JOBS_LINK, NEWS_LINK } from 'Shared/constants/url';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { getCountryWithConsultations } from 'Shared/helpers/countries';
import {
  MenuPanelStyle,
  MenuCloseTriggerStyle,
  MenuInnerStyle,
  MenuNavStyle,
  MenuItemTitleStyle,
  MenuItemStyle,
  MenuInternalLinkStyle,
  MenuExternalLinkStyle,
  MenuNewWindowIconStyle,
} from './style';

type Props = {
  isExpanded: boolean,
  toggleExpansion: () => void,
};
export const MenuPanel = ({ isExpanded, toggleExpansion }: Props) => {
  const location = useLocation();
  const { country, language, countriesWithConsultations } = useSelector(
    (state: StateRoot) => state.appConfig
  );
  const browseConsultationsLink =
    country && getBrowseConsultationsLink(country);
  const browseResultsLink = country && getBrowseResultsLink(country);
  const onBrowseConsultationsPage = isBrowseConsultationsPage(
    location.pathname
  );
  const onBrowseResultsPage = isBrowseResultsPage(location.pathname);
  const isFR = country === 'FR';
  const countryHasConsultations = getCountryWithConsultations(
    country,
    countriesWithConsultations
  );

  const handleInternalNavigation = () => {
    scrollToTop();
    toggleExpansion();
  };

  return (
    <MenuPanelStyle
      aria-hidden={!isExpanded}
      className={isExpanded && 'expanded'}
      data-cy-container="mobile-header-menu"
    >
      <MenuCloseTriggerStyle
        onClick={toggleExpansion}
        disabled={!isExpanded}
        data-cy-button="mobile-header-close-menu"
        type="button"
      >
        <SvgClose aria-hidden focusable="false" />
        <ScreenReaderItemStyle>
          {i18n.t('header.close_menu')}
        </ScreenReaderItemStyle>
      </MenuCloseTriggerStyle>
      <MenuInnerStyle>
        <MenuNavStyle aria-label={i18n.t('header.main_navigation')}>
          <UnstyledListStyle>
            <MenuItemStyle>
              <MenuItemTitleStyle>
                {i18n.t('browse.page_title')}
              </MenuItemTitleStyle>
              <UnstyledListStyle>
                {!!browseConsultationsLink && countryHasConsultations && (
                  <MenuItemStyle className="white">
                    <MenuInternalLinkStyle
                      className={onBrowseConsultationsPage && 'current'}
                      to={browseConsultationsLink}
                      onClick={handleInternalNavigation}
                    >
                      {i18n.t('browse.nav_consultations_desktop')}
                    </MenuInternalLinkStyle>
                  </MenuItemStyle>
                )}
                {!!browseResultsLink && (
                  <MenuItemStyle className="white">
                    <MenuInternalLinkStyle
                      className={onBrowseResultsPage && 'current'}
                      to={browseResultsLink}
                      onClick={handleInternalNavigation}
                    >
                      {i18n.t('browse.nav_results_desktop')}
                    </MenuInternalLinkStyle>
                  </MenuItemStyle>
                )}
              </UnstyledListStyle>
            </MenuItemStyle>
            <MenuItemStyle className="extra-margin-top">
              <MenuExternalLinkStyle
                target="_blank"
                rel="noopener"
                href={getWebflowDynamicLink(language, ROUTE_WHOAREWE)}
              >
                {i18n.t('main_footer.whoarewe')}
                <> </>
                <MenuNewWindowIconStyle aria-hidden focusable="false" />
                <ScreenReaderItemStyle>
                  {i18n.t('common.open_new_window')}
                </ScreenReaderItemStyle>
              </MenuExternalLinkStyle>
            </MenuItemStyle>
            {isFR && (
              <>
                <MenuItemStyle>
                  <MenuExternalLinkStyle
                    target="_blank"
                    rel="noopener"
                    href={getWebflowDynamicLink(language, ROUTE_PARTNERSHIP)}
                  >
                    {i18n.t('homepage.partnership.subtitle')}
                    <> </>
                    <MenuNewWindowIconStyle aria-hidden focusable="false" />
                    <ScreenReaderItemStyle>
                      {i18n.t('common.open_new_window')}
                    </ScreenReaderItemStyle>
                  </MenuExternalLinkStyle>
                </MenuItemStyle>
                <MenuItemStyle>
                  <MenuExternalLinkStyle
                    target="_blank"
                    rel="noopener"
                    href={NEWS_LINK}
                  >
                    {i18n.t('main_footer.news')}
                    <> </>
                    <MenuNewWindowIconStyle aria-hidden focusable="false" />
                    <ScreenReaderItemStyle>
                      {i18n.t('common.open_new_window')}
                    </ScreenReaderItemStyle>
                  </MenuExternalLinkStyle>
                </MenuItemStyle>
                <MenuItemStyle>
                  <MenuExternalLinkStyle
                    target="_blank"
                    rel="noopener"
                    href={JOBS_LINK}
                  >
                    {i18n.t('main_footer.jobs')}
                    <> </>
                    <MenuNewWindowIconStyle aria-hidden focusable="false" />
                    <ScreenReaderItemStyle>
                      {i18n.t('common.open_new_window')}
                    </ScreenReaderItemStyle>
                  </MenuExternalLinkStyle>
                </MenuItemStyle>
              </>
            )}
          </UnstyledListStyle>
        </MenuNavStyle>
        <SvgLogoBlack aria-hidden focusable="false" />
      </MenuInnerStyle>
    </MenuPanelStyle>
  );
};
