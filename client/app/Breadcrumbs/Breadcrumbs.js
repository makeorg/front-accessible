import React from 'react';
import { i18n } from 'Shared/i18n';
import {
  BrowseBreadcrumbWrapperStyle,
  BrowseBannerBreadcrumbListStyle,
  BrowseBreadcrumbsLinkStyle,
  BrowseArrowIconStyle,
  BrowseHomeIconStyle,
} from './style';

// @to do: add link: string props Type
export type BreadcrumbsPagesType = {
  name: string,
  // link: string,
};

type Props = {
  /** Array with parentPages object (name: string, link: string) */
  parentPages: BreadcrumbsPagesType[],
  /** Name of the current page */
  currentPage: BreadcrumbsPagesType,
};

// @to do: add link in props
export const Breadcrumbs = ({ parentPages, currentPage }: Props) => (
  <nav aria-label={i18n.t('common.breadcrumbs')}>
    <BrowseBreadcrumbWrapperStyle as="ol">
      <BrowseHomeIconStyle />
      {parentPages.map(parentPage => (
        <BrowseBannerBreadcrumbListStyle>
          <BrowseBreadcrumbsLinkStyle>
            {parentPage.name}
          </BrowseBreadcrumbsLinkStyle>
          <BrowseArrowIconStyle />
        </BrowseBannerBreadcrumbListStyle>
      ))}
      <BrowseBannerBreadcrumbListStyle className="selected">
        <BrowseBreadcrumbsLinkStyle aria-current="page">
          {currentPage.name}
        </BrowseBreadcrumbsLinkStyle>
      </BrowseBannerBreadcrumbListStyle>
    </BrowseBreadcrumbWrapperStyle>
  </nav>
);
