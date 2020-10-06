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
} from 'Shared/helpers/url';
import { useLocation } from 'react-router';
import { isBrowseConsultationsPage, isBrowseResultsPage } from 'Shared/routes';
import { scrollToTop } from 'Shared/helpers/styled';
import {
  WHOAREWE_FR_LINK,
  WHOAREWE_EN_LINK,
  JOBS_LINK,
  NEWS_LINK,
  PARTNERSHIP_LINK,
} from 'Shared/constants/url';
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
  const { country } = useSelector((state: StateRoot) => state.appConfig);
  const browseConsultationsLink = getBrowseConsultationsLink(country);
  const browseResultsLink = getBrowseResultsLink(country);
  const onBrowseConsultationsPage = isBrowseConsultationsPage(
    location.pathname
  );
  const onBrowseResultsPage = isBrowseResultsPage(location.pathname);
  const isFR = country === 'FR';

  const handleInternalNavigation = () => {
    scrollToTop();
    toggleExpansion();
  };

  return (
    <MenuPanelStyle
      aria-hidden={!isExpanded && true}
      className={isExpanded && 'expanded'}
      data-cy-container="mobile-header-menu"
    >
      <MenuCloseTriggerStyle
        aria-label={i18n.t('header.close_menu')}
        onClick={toggleExpansion}
        disabled={!isExpanded}
        data-cy-button="mobile-header-close-menu"
      >
        <SvgClose aria-hidden />
      </MenuCloseTriggerStyle>
      <MenuInnerStyle>
        <MenuNavStyle aria-label={i18n.t('header.main_navigation')}>
          <UnstyledListStyle>
            <MenuItemStyle>
              <MenuItemTitleStyle>
                {i18n.t('browse.page_title')}
              </MenuItemTitleStyle>
              <UnstyledListStyle>
                <MenuItemStyle className="white">
                  <MenuInternalLinkStyle
                    className={onBrowseConsultationsPage && 'current'}
                    to={browseConsultationsLink}
                    onClick={handleInternalNavigation}
                  >
                    {i18n.t('browse.nav_consultations')}
                  </MenuInternalLinkStyle>
                </MenuItemStyle>
                <MenuItemStyle className="white">
                  <MenuInternalLinkStyle
                    className={onBrowseResultsPage && 'current'}
                    to={browseResultsLink}
                    onClick={handleInternalNavigation}
                  >
                    {i18n.t('browse.nav_results')}
                  </MenuInternalLinkStyle>
                </MenuItemStyle>
              </UnstyledListStyle>
            </MenuItemStyle>
            <MenuItemStyle className="extra-margin-top">
              <MenuExternalLinkStyle
                target="_blank"
                rel="noreferrer noopener"
                href={isFR ? WHOAREWE_FR_LINK : WHOAREWE_EN_LINK}
              >
                {i18n.t('main-footer.whoarewe')}
                <MenuNewWindowIconStyle
                  aria-label={i18n.t('common.open_new_window')}
                />
              </MenuExternalLinkStyle>
            </MenuItemStyle>
            {isFR && (
              <MenuItemStyle className="extra-margin-top">
                <MenuExternalLinkStyle
                  target="_blank"
                  rel="noreferrer noopener"
                  href={PARTNERSHIP_LINK}
                >
                  {i18n.t('homepage.partnership.subtitle')}
                  <MenuNewWindowIconStyle
                    aria-label={i18n.t('common.open_new_window')}
                  />
                </MenuExternalLinkStyle>
              </MenuItemStyle>
            )}
            <MenuItemStyle>
              <MenuExternalLinkStyle
                target="_blank"
                rel="noreferrer noopener"
                href={NEWS_LINK}
              >
                {i18n.t('main-footer.news')}
                <MenuNewWindowIconStyle
                  aria-label={i18n.t('common.open_new_window')}
                />
              </MenuExternalLinkStyle>
            </MenuItemStyle>
            <MenuItemStyle>
              <MenuExternalLinkStyle
                target="_blank"
                rel="noreferrer noopener"
                href={JOBS_LINK}
              >
                {i18n.t('main-footer.jobs')}
                <MenuNewWindowIconStyle
                  aria-label={i18n.t('common.open_new_window')}
                />
              </MenuExternalLinkStyle>
            </MenuItemStyle>
          </UnstyledListStyle>
        </MenuNavStyle>
        <SvgLogoBlack aria-hidden />
      </MenuInnerStyle>
    </MenuPanelStyle>
  );
};
