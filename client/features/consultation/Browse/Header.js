// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { type StateRoot } from 'Shared/store/types';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import {
  getBrowseConsultationsLink,
  getBrowseResultsLink,
} from 'Shared/helpers/url';
import {
  type BreadcrumbsPagesType,
  Breadcrumbs,
} from 'Client/app/Breadcrumbs/Breadcrumbs';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';
import { isBrowseConsultationsPage } from 'Shared/routes';
import {
  BrowseHeaderStyle,
  BrowseHeaderInnerStyle,
  BrowseHeaderTitleStyle,
  BrowseNavItemStyle,
  BrowseNavLinkStyle,
} from './style';

export const BrowseConsultationsHeader = () => {
  const location = useLocation();
  const { country } = useSelector((state: StateRoot) => state.appConfig);
  const consultationsPage = isBrowseConsultationsPage(location.pathname);

  const currentPage: BreadcrumbsPagesType = {
    name: i18n.t('browse.page_title'),
    link: location,
  };

  return (
    <BrowseHeaderStyle as="header" aria-labelledby="browse_page_title">
      <BrowseHeaderInnerStyle as="div">
        <Breadcrumbs currentPage={currentPage} />
        <BrowseHeaderTitleStyle id="browse_page_title">
          {i18n.t('browse.page_title')}
        </BrowseHeaderTitleStyle>
        <nav>
          <UnstyledListStyle>
            <BrowseNavItemStyle>
              <BrowseNavLinkStyle
                to={getBrowseConsultationsLink(country)}
                className={consultationsPage && 'selected'}
              >
                {i18n.t('browse.nav_consultations')}
              </BrowseNavLinkStyle>
            </BrowseNavItemStyle>
            <BrowseNavItemStyle>
              <BrowseNavLinkStyle
                to={getBrowseResultsLink(country)}
                className={!consultationsPage && 'selected'}
              >
                {i18n.t('browse.nav_results')}
              </BrowseNavLinkStyle>
            </BrowseNavItemStyle>
          </UnstyledListStyle>
        </nav>
      </BrowseHeaderInnerStyle>
    </BrowseHeaderStyle>
  );
};
